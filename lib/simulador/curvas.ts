// Curvas de referência do simulador de perda de peso. FONTE ÚNICA, versionada, validada pela Dra. Isabel.
// Todos os valores são % de mudança do peso inicial (negativo = perda), por semana, MÉDIA do estudo.
// Pontos intermediários foram lidos das figuras dos artigos (aproximação); os desfechos principais são os publicados.
// Nada aqui é promessa: são médias de grupos de estudo. A resposta individual varia.
export const VERSAO_CURVAS = '2026-10-29'

export type Ponto = { semana: number; pct: number }
export type Curva = {
  id: string
  medicamento: 'tirzepatida' | 'semaglutida' | 'semaglutida-oral'
  rotulo: string
  doseAlvoMg: number
  /** semana em que a dose alvo é atingida pelo esquema da bula (aumentos a cada 4 semanas) */
  semanaDoseAlvo: number
  esquemaDose: { semanaInicio: number; doseMg: number }[]
  pontos: Ponto[]
  fonte: string
  estimativa?: boolean
}

// Esquemas de dose pela bula: aumento no mínimo a cada 4 semanas (o ritmo real é individual, decidido em consulta).
const esquemaTirze = (alvo: number) => {
  const doses = [2.5, 5, 7.5, 10, 12.5, 15].filter((d) => d <= alvo)
  return doses.map((d, i) => ({ semanaInicio: i * 4 + 1, doseMg: d }))
}
const esquemaSema = [0.25, 0.5, 1, 1.7, 2.4].map((d, i) => ({ semanaInicio: i * 4 + 1, doseMg: d }))
const esquemaSemaOral = [3, 7, 14, 25].map((d, i) => ({ semanaInicio: i * 4 + 1, doseMg: d }))

export const CURVAS: Curva[] = [
  {
    id: 'tirze-5', medicamento: 'tirzepatida', rotulo: 'Tirzepatida 5 mg', doseAlvoMg: 5, semanaDoseAlvo: 5, esquemaDose: esquemaTirze(5),
    pontos: [[0, 0], [4, -2.0], [8, -4.3], [12, -6.3], [16, -7.9], [20, -9.3], [24, -10.6], [36, -13.0], [48, -14.3], [60, -14.8], [72, -15.0]].map(([semana, pct]) => ({ semana, pct })),
    fonte: 'SURMOUNT-1 (Jastreboff et al., NEJM 2022): -15,0% na semana 72 com 5 mg; placebo -3,1%',
  },
  {
    id: 'tirze-10', medicamento: 'tirzepatida', rotulo: 'Tirzepatida 10 mg', doseAlvoMg: 10, semanaDoseAlvo: 13, esquemaDose: esquemaTirze(10),
    pontos: [[0, 0], [4, -2.0], [8, -4.5], [12, -6.8], [16, -9.0], [20, -10.8], [24, -12.5], [36, -16.2], [48, -18.3], [60, -19.2], [72, -19.5]].map(([semana, pct]) => ({ semana, pct })),
    fonte: 'SURMOUNT-1 (Jastreboff et al., NEJM 2022): -19,5% na semana 72 com 10 mg',
  },
  {
    id: 'tirze-15', medicamento: 'tirzepatida', rotulo: 'Tirzepatida 15 mg', doseAlvoMg: 15, semanaDoseAlvo: 21, esquemaDose: esquemaTirze(15),
    pontos: [[0, 0], [4, -2.0], [8, -4.5], [12, -7.0], [16, -9.3], [20, -11.3], [24, -13.2], [36, -17.3], [48, -19.6], [60, -20.6], [72, -20.9]].map(([semana, pct]) => ({ semana, pct })),
    fonte: 'SURMOUNT-1 (Jastreboff et al., NEJM 2022): -20,9% na semana 72 com 15 mg',
  },
  {
    id: 'sema-2.4', medicamento: 'semaglutida', rotulo: 'Semaglutida 2,4 mg (injetável)', doseAlvoMg: 2.4, semanaDoseAlvo: 17, esquemaDose: esquemaSema,
    pontos: [[0, 0], [4, -2.0], [8, -4.0], [12, -5.9], [16, -7.5], [20, -9.0], [28, -11.1], [36, -12.5], [44, -13.5], [52, -14.3], [60, -14.7], [68, -14.9], [72, -14.9]].map(([semana, pct]) => ({ semana, pct })),
    fonte: 'STEP 1 (Wilding et al., NEJM 2021): -14,9% na semana 68 com 2,4 mg; placebo -2,4%',
  },
  {
    id: 'sema-oral-25', medicamento: 'semaglutida-oral', rotulo: 'Semaglutida oral 25 mg', doseAlvoMg: 25, semanaDoseAlvo: 13, esquemaDose: esquemaSemaOral,
    pontos: [[0, 0], [4, -1.8], [8, -3.6], [12, -5.3], [16, -6.8], [20, -8.1], [28, -10.0], [36, -11.3], [44, -12.3], [52, -13.0], [60, -13.4], [64, -13.6], [72, -13.6]].map(([semana, pct]) => ({ semana, pct })),
    fonte: 'OASIS 4 (Wharton et al., NEJM 2025): -13,6% na semana 64 com 25 mg oral; placebo -2,2%',
    estimativa: true,
  },
]

/**
 * Cenários de resposta. Fatores aplicados sobre a curva média, derivados dos estudos de respondedor precoce:
 * tirzepatida (Ard et al., 2025): quem perdeu >=5% até a semana 8 chegou a -23,3% na semana 72, contra -14,6% nos demais,
 * com média geral perto de -18,5% (fatores ~1,25 e ~0,79). Semaglutida (STEP 1): faixas de resposta de <5% a >=20%.
 * São aproximações para dar uma FAIXA, não uma previsão individual.
 */
export const CENARIOS = {
  media: { rotulo: 'Média do estudo', fator: 1 },
  bom: { rotulo: 'Bom respondedor', fator: 1.25 },
  baixo: { rotulo: 'Respondedor baixo', fator: 0.75 },
} as const
export type Cenario = keyof typeof CENARIOS

/**
 * Reganho após parar: STEP 1 extensão (Rubino/Wilding 2022): 1 ano após suspender, recuperou cerca de 2/3 do peso perdido.
 * SURMOUNT-4 (Aronne et al., JAMA 2024): parar tirzepatida na semana 36 → +14% em 52 semanas; continuar → -25,3%.
 * Modelo: fração do peso perdido que volta, por semanas desde a parada (curva côncava, mais rápida no início).
 */
export const REGANHO = {
  fracaoEm52Semanas: 2 / 3,
  fonte: 'STEP 1 extensão (DOM 2022) e SURMOUNT-4 (JAMA 2024)',
}

/** Limiar de respondedor precoce: >=5% de perda até a semana 8 a 12 (tirzepatida, Ard 2025; semaglutida, STEP 1). */
export const LIMIAR_PRECOCE = { pct: 5, semanaMin: 8, semanaMax: 12 }

export const MARCOS_SEMANAS = [12, 24, 48, 72]
