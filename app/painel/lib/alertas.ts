// Semáforo do Resumo: checagens que antes só eu fazia à mão a cada leitura.
// Cada alerta é calculado a partir de dados já carregados (nenhuma consulta extra).

import { diaSemana, negativada, type Anuncio, type Campanha, type Negativa, type Serie, type Termo } from './googleAds'

export type Nivel = 'ok' | 'warn' | 'serious' | 'crit'
export type Alerta = { nivel: Nivel; titulo: string; texto: string }

const brl = (v: number) => 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const pct = (v: number) => v.toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + '%'

export function montarAlertas(d: {
  campanhas: Campanha[] | null
  serie7: Serie | null // janela '7d' (fim = ontem)
  termos14: Termo[] | null // últimos 14 dias
  anuncios: Anuncio[] | null
  negativas?: Negativa[] | null
  ontem: string
}): Alerta[] {
  const out: Alerta[] = []
  const ativas = (d.campanhas ?? []).filter((c) => c.status === 'ENABLED')

  // 1. AI Max (em 06/10 apareceu ligada sem ninguém ativar)
  if (d.campanhas) {
    const ligadas = ativas.filter((c) => c.aiMax)
    out.push(
      ligadas.length
        ? { nivel: 'crit', titulo: `AI Max ligada em "${ligadas[0].nome}"`, texto: 'O Google ampliou as buscas por conta própria. Desligar em Configurações da campanha.' }
        : { nivel: 'ok', titulo: 'AI Max desligada', texto: 'Conferido agora nas campanhas ativas.' }
    )
  }

  // 2. Gasto de ontem × orçamento
  if (d.serie7 && ativas.length) {
    const orc = ativas.reduce((s, c) => s + c.orcamentoDia, 0)
    const dia = d.serie7.dias.find((x) => x.data === d.ontem)
    const dow = diaSemana(d.ontem)
    if (dow === 0 || dow === 6) {
      out.push({ nivel: 'ok', titulo: 'Ontem foi fim de semana', texto: `Gasto de ${brl(dia?.gasto ?? 0)}. A campanha fica desligada de sábado a domingo de propósito.` })
    } else if (dia && orc > 0) {
      const r = dia.gasto / orc
      out.push(
        r > 2
          ? { nivel: 'serious', titulo: 'Gasto de ontem acima do dobro do orçamento', texto: `${brl(dia.gasto)} contra ${brl(orc)}/dia (${r.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} vezes). Olhar o acumulado do mês.` }
          : r > 1.5
            ? { nivel: 'warn', titulo: 'Gasto de ontem acima do orçamento', texto: `${brl(dia.gasto)} contra ${brl(orc)}/dia (${r.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} vezes). O Google pode gastar até o dobro num dia; vale olhar o mês.` }
            : { nivel: 'ok', titulo: 'Gasto de ontem dentro do orçamento', texto: `${brl(dia.gasto)} contra ${brl(orc)}/dia.` }
      )
    }
  }

  // 3. Conversão clique → contato nos últimos 7 dias
  if (d.serie7 && d.serie7.atual.cliques >= 20) {
    const taxa = (d.serie7.atual.contatos / d.serie7.atual.cliques) * 100
    out.push(
      taxa < 10
        ? { nivel: 'crit', titulo: `Conversão clique para contato: ${pct(taxa)}`, texto: `Últimos 7 dias, ${d.serie7.atual.contatos} contatos em ${d.serie7.atual.cliques} cliques. Abaixo de 10%: olhar termos e anúncios.` }
        : taxa < 12
          ? { nivel: 'warn', titulo: `Conversão clique para contato: ${pct(taxa)}`, texto: `Últimos 7 dias. Meta: acima de 12%.` }
          : { nivel: 'ok', titulo: `Conversão clique para contato: ${pct(taxa)}`, texto: `Últimos 7 dias, ${d.serie7.atual.contatos} contatos em ${d.serie7.atual.cliques} cliques. Meta: acima de 12%.` }
    )
  } else if (d.serie7) {
    out.push({ nivel: 'ok', titulo: 'Conversão: poucos cliques nos últimos 7 dias', texto: `${d.serie7.atual.cliques} cliques e ${d.serie7.atual.contatos} contatos. Amostra pequena para julgar.` })
  }

  // 4. Termos de pesquisa gastando sem contato (14 dias)
  if (d.termos14) {
    const negs = d.negativas ?? []
    const ruins = d.termos14
      .filter((t) => t.gasto >= 15 && t.contatos === 0 && !negativada(t.termo, negs))
      .sort((a, b) => b.gasto - a.gasto)
    if (ruins.length) {
      const lista = ruins.slice(0, 2).map((t) => `"${t.termo}" ${brl(t.gasto)}`).join(' e ')
      out.push({ nivel: 'serious', titulo: `${ruins.length} ${ruins.length === 1 ? 'termo gastando' : 'termos gastando'} sem contato`, texto: `Últimos 14 dias, ainda sem negativa: ${lista}${ruins.length > 2 ? ' e outros' : ''}. Ver na aba Google Ads, Termos.` })
    } else {
      out.push({ nivel: 'ok', titulo: 'Nenhum termo novo gastando sem contato', texto: 'Últimos 14 dias, limite de R$ 15 por termo; os já negativados não contam.' })
    }
  }

  // 5. Anúncios
  if (d.anuncios) {
    const ativos = d.anuncios.filter((a) => a.status === 'ENABLED')
    const fracos = ativos.filter((a) => a.forca === 'Fraca')
    const comDados = ativos.filter((a) => a.cliques >= 20)
    const melhor = comDados.reduce((m, a) => Math.max(m, a.contatos / a.cliques), 0)
    const lento = comDados.find((a) => melhor > 0 && a.contatos / a.cliques < melhor / 2)
    if (fracos.length) out.push({ nivel: 'warn', titulo: `Anúncio "${fracos[0].titulo1}" com força fraca`, texto: 'O Google avalia o anúncio como fraco. Trocar títulos usando a fórmula do anúncio que mais converte.' })
    else if (lento) out.push({ nivel: 'warn', titulo: `Anúncio "${lento.titulo1}" converte metade do melhor`, texto: `${pct((lento.contatos / lento.cliques) * 100)} contra ${pct(melhor * 100)} do melhor anúncio no período.` })
    else out.push({ nivel: 'ok', titulo: 'Anúncios sem alerta', texto: `${ativos.length} ${ativos.length === 1 ? 'anúncio ativo' : 'anúncios ativos'}, nenhum avaliado como fraco.` })
  }

  return out
}
