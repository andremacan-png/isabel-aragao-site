// TEMPORÁRIO · diagnóstico de performance (Meta + Google Ads) por dia, ~56 dias.
// Protegido por ?k=. Remover após a análise. Dados de anúncio (não-PII).
export const dynamic = 'force-dynamic'

const KEY = 'perf-9x2k7'
const GOOGLE_API_VERSION = 'v22'
const META_API_VERSION = 'v21.0'
const CONV_ACTION = 'onsite_conversion.messaging_conversation_started_7d'

function ymd(d: Date): string {
  return d.toISOString().slice(0, 10)
}
function actionVal(arr: Array<{ action_type: string; value: string }> | undefined, type: string): number {
  if (!arr) return 0
  const f = arr.find((a) => a.action_type === type)
  return f ? Number(f.value) : 0
}

async function googleToken(): Promise<string | null> {
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
  return (await res.json()).access_token ?? null
}

async function googleDaily(inicio: string, fim: string): Promise<unknown> {
  const { GOOGLE_ADS_DEVELOPER_TOKEN, GOOGLE_ADS_CUSTOMER_ID, GOOGLE_ADS_LOGIN_CUSTOMER_ID } = process.env
  const token = await googleToken()
  if (!token) return { erro: 'sem token google' }
  const cid = (GOOGLE_ADS_CUSTOMER_ID ?? '').replace(/\D/g, '')
  const query =
    'SELECT segments.date, metrics.cost_micros, metrics.clicks, metrics.impressions, metrics.conversions ' +
    `FROM campaign WHERE segments.date BETWEEN '${inicio}' AND '${fim}' AND campaign.status != 'REMOVED'`
  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    'developer-token': GOOGLE_ADS_DEVELOPER_TOKEN ?? '',
    'Content-Type': 'application/json',
  }
  if (GOOGLE_ADS_LOGIN_CUSTOMER_ID) headers['login-customer-id'] = GOOGLE_ADS_LOGIN_CUSTOMER_ID.replace(/\D/g, '')
  const res = await fetch(`https://googleads.googleapis.com/${GOOGLE_API_VERSION}/customers/${cid}/googleAds:search`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query }),
    cache: 'no-store',
  })
  if (!res.ok) return { erro: `google HTTP ${res.status}: ${(await res.text()).slice(0, 300)}` }
  const j = await res.json()
  const byDate = new Map<string, { cost: number; clicks: number; impr: number; conv: number }>()
  for (const r of j.results ?? []) {
    const d = r.segments?.date ?? ''
    if (!d) continue
    const cur = byDate.get(d) ?? { cost: 0, clicks: 0, impr: 0, conv: 0 }
    cur.cost += Number(r.metrics?.costMicros ?? 0) / 1e6
    cur.clicks += Number(r.metrics?.clicks ?? 0)
    cur.impr += Number(r.metrics?.impressions ?? 0)
    cur.conv += Number(r.metrics?.conversions ?? 0)
    byDate.set(d, cur)
  }
  return [...byDate.entries()].sort().map(([data, v]) => ({ data, ...v, cost: Math.round(v.cost * 100) / 100, conv: Math.round(v.conv * 10) / 10 }))
}

async function metaDaily(inicio: string, fim: string): Promise<unknown> {
  const token = process.env.META_ADS_ACCESS_TOKEN
  const acct = process.env.META_AD_ACCOUNT_ID
  if (!token || !acct) return { erro: 'sem token meta' }
  const id = acct.replace(/\D/g, '')
  const timeRange = encodeURIComponent(JSON.stringify({ since: inicio, until: fim }))
  const fields = 'spend,impressions,reach,frequency,ctr,cpm,actions'
  const url =
    `https://graph.facebook.com/${META_API_VERSION}/act_${id}/insights` +
    `?level=account&time_increment=1&time_range=${timeRange}&fields=${fields}&limit=500&access_token=${encodeURIComponent(token)}`
  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) return { erro: `meta HTTP ${res.status}: ${(await res.text()).slice(0, 300)}` }
  const j = await res.json()
  return (j.data ?? []).map((r: Record<string, unknown>) => ({
    data: String(r.date_start ?? ''),
    spend: Math.round(Number(r.spend ?? 0) * 100) / 100,
    impr: Number(r.impressions ?? 0),
    reach: Number(r.reach ?? 0),
    freq: Math.round(Number(r.frequency ?? 0) * 100) / 100,
    ctr: Math.round(Number(r.ctr ?? 0) * 100) / 100,
    cpm: Math.round(Number(r.cpm ?? 0) * 100) / 100,
    conversas: actionVal(r.actions as never, CONV_ACTION),
  }))
}

export async function GET(req: Request): Promise<Response> {
  const url = new URL(req.url)
  if (url.searchParams.get('k') !== KEY) return new Response('not found', { status: 404 })
  const fim = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo' }).format(new Date())
  const start = new Date()
  start.setDate(start.getDate() - 56)
  const inicio = ymd(start)
  const [google, meta] = await Promise.all([googleDaily(inicio, fim), metaDaily(inicio, fim)])
  return Response.json({ periodo: `${inicio} a ${fim}`, google, meta })
}
