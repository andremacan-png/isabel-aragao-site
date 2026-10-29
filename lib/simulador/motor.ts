// Motor do simulador: puro, sem dependências, testável. Entrada em kg/cm, saída em kg e %.
import { CURVAS, CENARIOS, REGANHO, LIMIAR_PRECOCE, MARCOS_SEMANAS, type Curva, type Cenario } from './curvas'

export function imc(pesoKg: number, alturaCm: number): number {
  const m = alturaCm / 100
  return pesoKg / (m * m)
}

export function classificacaoImc(v: number): string {
  if (v < 18.5) return 'abaixo do peso'
  if (v < 25) return 'peso normal'
  if (v < 30) return 'sobrepeso'
  if (v < 35) return 'obesidade grau 1'
  if (v < 40) return 'obesidade grau 2'
  return 'obesidade grau 3'
}

/** Interpola a % da curva média em uma semana qualquer (0 a 72). */
export function pctNaSemana(curva: Curva, semana: number): number {
  const p = curva.pontos
  if (semana <= 0) return 0
  if (semana >= p[p.length - 1].semana) return p[p.length - 1].pct
  for (let i = 1; i < p.length; i++) {
    if (semana <= p[i].semana) {
      const a = p[i - 1], b = p[i]
      const t = (semana - a.semana) / (b.semana - a.semana)
      return a.pct + (b.pct - a.pct) * t
    }
  }
  return p[p.length - 1].pct
}

export type Projecao = { semana: number; pct: number; pesoKg: number }

/** Projeção semana a semana para uma curva e um cenário. */
export function projetar(pesoKg: number, curva: Curva, cenario: Cenario = 'media', ateSemana = 72): Projecao[] {
  const f = CENARIOS[cenario].fator
  const out: Projecao[] = []
  for (let s = 0; s <= ateSemana; s++) {
    const pct = pctNaSemana(curva, s) * f
    out.push({ semana: s, pct, pesoKg: pesoKg * (1 + pct / 100) })
  }
  return out
}

/** Faixa nos marcos (12, 24, 48, 72) para os três cenários. */
export function marcos(pesoKg: number, curva: Curva) {
  return MARCOS_SEMANAS.map((semana) => {
    const linha: Record<Cenario, { pct: number; pesoKg: number; perdaKg: number }> = {} as never
    for (const c of Object.keys(CENARIOS) as Cenario[]) {
      const pct = pctNaSemana(curva, semana) * CENARIOS[c].fator
      linha[c] = { pct, pesoKg: pesoKg * (1 + pct / 100), perdaKg: -pesoKg * pct / 100 }
    }
    return { semana, ...linha }
  })
}

/** Dose pela bula em uma semana (esquema de aumentos a cada 4 semanas). */
export function doseNaSemana(curva: Curva, semana: number): number {
  let d = curva.esquemaDose[0].doseMg
  for (const e of curva.esquemaDose) if (semana >= e.semanaInicio) d = e.doseMg
  return d
}

export type Posicao = {
  pctReal: number
  pctEsperadoMedia: number
  pctEsperadoBom: number
  pctEsperadoBaixo: number
  faixa: 'acima' | 'dentro' | 'abaixo' | 'cedo'
  precoce: boolean | null
  leitura: string
}

/** Onde a pessoa está na curva: compara a perda real com a faixa esperada (baixo a bom) naquela semana. */
export function posicao(pesoInicialKg: number, pesoAtualKg: number, semana: number, curva: Curva): Posicao {
  const pctReal = ((pesoAtualKg - pesoInicialKg) / pesoInicialKg) * 100
  const media = pctNaSemana(curva, semana)
  const bom = media * CENARIOS.bom.fator
  const baixo = media * CENARIOS.baixo.fator
  let faixa: Posicao['faixa']
  if (semana < LIMIAR_PRECOCE.semanaMin) faixa = 'cedo'
  else if (pctReal <= bom) faixa = 'acima'
  else if (pctReal <= baixo) faixa = 'dentro'
  else faixa = 'abaixo'
  const precoce = semana >= LIMIAR_PRECOCE.semanaMin && semana <= 20 ? -pctReal >= LIMIAR_PRECOCE.pct : null
  const leitura =
    faixa === 'cedo'
      ? 'Antes da semana 8 as faixas se sobrepõem e a dose ainda é de adaptação: cedo demais para avaliar. Reavaliar entre as semanas 8 e 12.'
      : faixa === 'acima'
        ? 'Perda acima da faixa média do estudo. Vale conferir na consulta se a perda é de gordura (bioimpedância) e se o ritmo está seguro.'
        : faixa === 'dentro'
          ? 'Dentro da faixa esperada para a semana. Manter o plano e reavaliar na próxima consulta.'
          : 'Abaixo da faixa esperada. Não significa que o tratamento falhou: a consulta avalia dose, alimentação, sono, aplicações e bioimpedância antes de qualquer mudança.'
  return { pctReal, pctEsperadoMedia: media, pctEsperadoBom: bom, pctEsperadoBaixo: baixo, faixa, precoce, leitura }
}

/** Curva de reganho após parar: fração do peso perdido que volta, por semanas desde a parada (côncava). */
export function fracaoReganho(semanasDesdeParada: number): number {
  const s = Math.max(0, Math.min(semanasDesdeParada, 52))
  // exponencial saturando em 2/3 na semana 52
  const k = 3 / 52
  const alvo = REGANHO.fracaoEm52Semanas
  return alvo * (1 - Math.exp(-k * s)) / (1 - Math.exp(-k * 52))
}

export function projetarParada(pesoInicialKg: number, curva: Curva, semanaParada: number, cenario: Cenario = 'media', ateSemana = 124): Projecao[] {
  const base = projetar(pesoInicialKg, curva, cenario, ateSemana)
  const pesoNaParada = base[Math.min(semanaParada, base.length - 1)].pesoKg
  const perdido = pesoInicialKg - pesoNaParada
  return base.map((p) => {
    if (p.semana <= semanaParada) return p
    const peso = pesoNaParada + perdido * fracaoReganho(p.semana - semanaParada)
    return { semana: p.semana, pesoKg: peso, pct: ((peso - pesoInicialKg) / pesoInicialKg) * 100 }
  })
}

export function curvasDe(medicamento: Curva['medicamento']): Curva[] {
  return CURVAS.filter((c) => c.medicamento === medicamento)
}

export { CURVAS, CENARIOS, MARCOS_SEMANAS }
