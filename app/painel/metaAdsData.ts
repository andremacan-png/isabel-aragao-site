// Módulo server-side: busca dados do Meta Ads (Graph API · Insights), por período.
// Usa as MESMAS chaves de período do painel do Google (hoje/ontem/7d/14d/30d).
// Se META_ADS_ACCESS_TOKEN / META_AD_ACCOUNT_ID não estiverem configurados (ou der erro),
// retorna null — e a seção do Meta simplesmente não aparece (a página nunca quebra).

export type MetaCampanha = {
  nome: string
  gasto: number
  conversas: number // conversas iniciadas no WhatsApp
  custoConversa: number
  impressoes: number
  alcance: number
}

export type MetaData = {
  campanhas: MetaCampanha[]
  total: { investimento: number; conversas: number; custoConversa: number; impressoes: number; alcance: number }
  periodoLabel: string
}

// Versão da Graph API. Se o Meta aposentar, sobe o número.
const API_VERSION = 'v21.0'

// "conversa iniciada por mensagem" (a métrica que importa p/ click-to-WhatsApp).
const CONV_ACTION = 'onsite_conversion.messaging_conversation_started_7d'

// Mapeia a chave de período do painel -> date_preset do Meta.
const PRESETS: Record<string, { preset: string; label: string }> = {
  hoje: { preset: 'today', label: 'Hoje' },
  ontem: { preset: 'yesterday', label: 'Ontem' },
  '7d': { preset: 'last_7d', label: 'Últimos 7 dias' },
  '14d': { preset: 'last_14d', label: 'Últimos 14 dias' },
  '30d': { preset: 'last_30d', label: 'Últimos 30 dias' },
}

function actionVal(arr: Array<{ action_type: string; value: string }> | undefined, type: string): number {
  if (!arr) return 0
  const found = arr.find((a) => a.action_type === type)
  return found ? Number(found.value) : 0
}

export async function getMetaData(periodo: string): Promise<MetaData | null> {
  const token = process.env.META_ADS_ACCESS_TOKEN
  const acct = process.env.META_AD_ACCOUNT_ID
  if (!token || !acct) return null

  const id = acct.replace(/\D/g, '')
  const { preset, label } = PRESETS[periodo] ?? PRESETS['7d']

  try {
    const fields = 'campaign_name,spend,impressions,reach,actions,cost_per_action_type'
    const url =
      `https://graph.facebook.com/${API_VERSION}/act_${id}/insights` +
      `?level=campaign&date_preset=${preset}&limit=200&fields=${fields}` +
      `&access_token=${encodeURIComponent(token)}`

    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) return null

    const j = await res.json()
    const rows: Array<Record<string, unknown>> = j.data ?? []

    const campanhas: MetaCampanha[] = rows
      .map((r) => {
        const gasto = Number(r.spend ?? 0)
        const conversas = actionVal(r.actions as never, CONV_ACTION)
        const custoApi = actionVal(r.cost_per_action_type as never, CONV_ACTION)
        return {
          nome: String(r.campaign_name ?? '—'),
          gasto,
          conversas,
          custoConversa: custoApi || (conversas ? gasto / conversas : 0),
          impressoes: Number(r.impressions ?? 0),
          alcance: Number(r.reach ?? 0),
        }
      })
      .filter((c) => c.gasto > 0 || c.conversas > 0)
      .sort((a, b) => b.gasto - a.gasto)

    if (!campanhas.length) return null

    const investimento = campanhas.reduce((s, c) => s + c.gasto, 0)
    const conversas = campanhas.reduce((s, c) => s + c.conversas, 0)
    const impressoes = campanhas.reduce((s, c) => s + c.impressoes, 0)
    const alcance = campanhas.reduce((s, c) => s + c.alcance, 0)

    return {
      campanhas,
      total: { investimento, conversas, custoConversa: conversas ? investimento / conversas : 0, impressoes, alcance },
      periodoLabel: label,
    }
  } catch {
    return null
  }
}
