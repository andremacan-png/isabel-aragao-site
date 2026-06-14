// Módulo server-side: busca dados do Google Ads via API (REST), por período.
// Se as variáveis de ambiente não estiverem configuradas (ou der erro),
// cai no SNAPSHOT (foto de 11/06) — assim a página nunca quebra.

export type Campanha = {
  nome: string
  cliques: number
  conversoes: number
  custo: number
  custoConv: number
  taxa: number
}

export type PainelData = {
  campanhas: Campanha[]
  total: { investimento: number; cliques: number; contatos: number; custoContato: number }
  fonte: 'live' | 'snapshot'
  periodoLabel: string
}

export const PERIODOS = {
  hoje: { gaql: 'TODAY', label: 'Hoje' },
  ontem: { gaql: 'YESTERDAY', label: 'Ontem' },
  '7d': { gaql: 'LAST_7_DAYS', label: 'Últimos 7 dias' },
  '14d': { gaql: 'LAST_14_DAYS', label: 'Últimos 14 dias' },
  '30d': { gaql: 'LAST_30_DAYS', label: 'Últimos 30 dias' },
} as const

export type PeriodoKey = keyof typeof PERIODOS

// Versão da API Google Ads. Se o Google atualizar e a consulta falhar,
// basta subir este número (ex.: v19, v20) — a página continua no snapshot até lá.
const API_VERSION = 'v18'

// Snapshot de fallback (acumulado até 11/06/2026).
const SNAPSHOT: Campanha[] = [
  { nome: 'Saúde', cliques: 32, conversoes: 6, custo: 175.05, custoConv: 30.89, taxa: 17.7 },
  { nome: 'Página Principal', cliques: 241, conversoes: 33, custo: 1063.31, custoConv: 31.9, taxa: 13.8 },
  { nome: 'Emagrecimento', cliques: 33, conversoes: 3, custo: 175.98, custoConv: 58.66, taxa: 9.1 },
]

function montaTotais(campanhas: Campanha[]) {
  const investimento = campanhas.reduce((s, c) => s + c.custo, 0)
  const cliques = campanhas.reduce((s, c) => s + c.cliques, 0)
  const contatos = campanhas.reduce((s, c) => s + c.conversoes, 0)
  return { investimento, cliques, contatos, custoContato: contatos ? investimento / contatos : 0 }
}

function snapshotData(): PainelData {
  return { campanhas: SNAPSHOT, total: montaTotais(SNAPSHOT), fonte: 'snapshot', periodoLabel: 'acumulado até 11/06' }
}

async function getAccessToken(): Promise<string | null> {
  const { GOOGLE_ADS_CLIENT_ID, GOOGLE_ADS_CLIENT_SECRET, GOOGLE_ADS_REFRESH_TOKEN } = process.env
  if (!GOOGLE_ADS_CLIENT_ID || !GOOGLE_ADS_CLIENT_SECRET || !GOOGLE_ADS_REFRESH_TOKEN) return null
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: GOOGLE_ADS_CLIENT_ID,
      client_secret: GOOGLE_ADS_CLIENT_SECRET,
      refresh_token: GOOGLE_ADS_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
    cache: 'no-store',
  })
  if (!res.ok) return null
  const j = await res.json()
  return j.access_token ?? null
}

export async function getPainelData(periodo: PeriodoKey): Promise<PainelData> {
  const { GOOGLE_ADS_DEVELOPER_TOKEN, GOOGLE_ADS_CUSTOMER_ID, GOOGLE_ADS_LOGIN_CUSTOMER_ID } = process.env
  if (!GOOGLE_ADS_DEVELOPER_TOKEN || !GOOGLE_ADS_CUSTOMER_ID) return snapshotData()

  try {
    const token = await getAccessToken()
    if (!token) return snapshotData()

    const cid = GOOGLE_ADS_CUSTOMER_ID.replace(/\D/g, '')
    const query =
      'SELECT campaign.name, metrics.impressions, metrics.clicks, metrics.conversions, metrics.cost_micros ' +
      `FROM campaign WHERE segments.date DURING ${PERIODOS[periodo].gaql} AND campaign.status != 'REMOVED'`

    const headers: Record<string, string> = {
      Authorization: `Bearer ${token}`,
      'developer-token': GOOGLE_ADS_DEVELOPER_TOKEN,
      'Content-Type': 'application/json',
    }
    if (GOOGLE_ADS_LOGIN_CUSTOMER_ID) headers['login-customer-id'] = GOOGLE_ADS_LOGIN_CUSTOMER_ID.replace(/\D/g, '')

    const res = await fetch(`https://googleads.googleapis.com/${API_VERSION}/customers/${cid}/googleAds:search`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, pageSize: 1000 }),
      cache: 'no-store',
    })
    if (!res.ok) return snapshotData()

    const j = await res.json()
    const rows: any[] = j.results ?? []
    const campanhas: Campanha[] = rows.map((r) => {
      const cliques = Number(r.metrics?.clicks ?? 0)
      const conversoes = Math.round(Number(r.metrics?.conversions ?? 0) * 10) / 10
      const custo = Number(r.metrics?.costMicros ?? 0) / 1e6
      return {
        nome: r.campaign?.name ?? '—',
        cliques,
        conversoes,
        custo,
        custoConv: conversoes ? custo / conversoes : 0,
        taxa: cliques ? (conversoes / cliques) * 100 : 0,
      }
    })
    if (!campanhas.length) return snapshotData()

    return { campanhas, total: montaTotais(campanhas), fonte: 'live', periodoLabel: PERIODOS[periodo].label }
  } catch {
    return snapshotData()
  }
}
