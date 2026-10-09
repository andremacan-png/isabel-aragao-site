// Escrita no Google Ads a partir do painel. Hoje só uma operação: palavra-chave NEGATIVA em
// correspondência de frase, em todas as campanhas ativas (negativa é por campanha).
// Quem chama precisa ter passado por `autorizado()` (lib/acesso.ts). Toda chamada vai para o
// log da Vercel ([painel/negativa]) para dar rastro.
import { adsAuth, getCampanhas, invalidar } from './googleAds'

export type Resultado = { ok: true; campanhas: string[] } | { ok: false; erro: string }

export async function adicionarNegativaFrase(texto: string): Promise<Resultado> {
  const campanhas = (await getCampanhas())?.filter((c) => c.status === 'ENABLED') ?? []
  if (!campanhas.length) return { ok: false, erro: 'nenhuma campanha ativa encontrada' }
  try {
    const { headers, cid, base } = await adsAuth()
    const operations = campanhas.map((c) => ({
      create: { campaign: `customers/${cid}/campaigns/${c.id}`, negative: true, keyword: { text: texto, matchType: 'PHRASE' } },
    }))
    const res = await fetch(`${base}/campaignCriteria:mutate`, { method: 'POST', headers, body: JSON.stringify({ operations, partialFailure: false }), cache: 'no-store' })
    if (!res.ok) {
      const corpo = (await res.text()).slice(0, 400)
      console.error('[painel/negativa] falhou', texto, res.status, corpo)
      const msg = /already exists|DUPLICATE/i.test(corpo) ? 'essa negativa já existe na campanha' : `o Google Ads recusou (${res.status})`
      return { ok: false, erro: msg }
    }
    console.log('[painel/negativa] adicionada', JSON.stringify({ texto, tipo: 'frase', campanhas: campanhas.map((c) => c.nome) }))
    invalidar('negativas')
    return { ok: true, campanhas: campanhas.map((c) => c.nome) }
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    console.error('[painel/negativa] erro', texto, msg)
    return { ok: false, erro: msg }
  }
}
