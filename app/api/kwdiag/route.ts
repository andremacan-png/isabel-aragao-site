// TEMPORÁRIO · diagnóstico de keywords + termos de pesquisa (Google Ads API).
// Protegido por ?k=. Remover após a análise. Dados de anúncio (não-PII).
export const dynamic = 'force-dynamic'

const KEY = 'kw-2f8h1q'
const API_VERSION = 'v21'

async function getToken(): Promise<string | null> {
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

async function gaql(token: string, query: string): Promise<unknown[] | { erro: string }> {
  const { GOOGLE_ADS_DEVELOPER_TOKEN, GOOGLE_ADS_CUSTOMER_ID, GOOGLE_ADS_LOGIN_CUSTOMER_ID } = process.env
  const cid = (GOOGLE_ADS_CUSTOMER_ID ?? '').replace(/\D/g, '')
  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    'developer-token': GOOGLE_ADS_DEVELOPER_TOKEN ?? '',
    'Content-Type': 'application/json',
  }
  if (GOOGLE_ADS_LOGIN_CUSTOMER_ID) headers['login-customer-id'] = GOOGLE_ADS_LOGIN_CUSTOMER_ID.replace(/\D/g, '')
  const res = await fetch(`https://googleads.googleapis.com/${API_VERSION}/customers/${cid}/googleAds:search`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query }),
    cache: 'no-store',
  })
  if (!res.ok) return { erro: `HTTP ${res.status}: ${(await res.text()).slice(0, 400)}` }
  const j = await res.json()
  return j.results ?? []
}

export async function GET(req: Request): Promise<Response> {
  const url = new URL(req.url)
  if (url.searchParams.get('k') !== KEY) return new Response('not found', { status: 404 })

  const token = await getToken()
  if (!token) return Response.json({ erro: 'sem token' })

  const kwQuery =
    'SELECT campaign.name, ad_group.name, ad_group_criterion.keyword.text, ad_group_criterion.keyword.match_type, ' +
    'ad_group_criterion.quality_info.quality_score, metrics.impressions, metrics.clicks, metrics.cost_micros, ' +
    'metrics.conversions, metrics.average_cpc, metrics.search_impression_share ' +
    "FROM keyword_view WHERE segments.date DURING LAST_30_DAYS AND ad_group_criterion.status = 'ENABLED' " +
    'ORDER BY metrics.cost_micros DESC'

  const termsQuery =
    'SELECT search_term_view.search_term, search_term_view.status, campaign.name, metrics.impressions, ' +
    'metrics.clicks, metrics.cost_micros, metrics.conversions ' +
    'FROM search_term_view WHERE segments.date DURING LAST_30_DAYS ' +
    'ORDER BY metrics.cost_micros DESC LIMIT 250'

  const [keywords, termos] = await Promise.all([gaql(token, kwQuery), gaql(token, termsQuery)])
  return Response.json({ keywords, termos })
}
