// TEMPORÁRIO — raio-x Google Ads (keywords, termos, diário, hora, dispositivo, anúncios). Remover após uso.
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
const KEY = 'ads-r4x9v-set'
const V = 'v22'

async function token(): Promise<string | null> {
  const { GOOGLE_ADS_CLIENT_ID, GOOGLE_ADS_CLIENT_SECRET, GOOGLE_ADS_REFRESH_TOKEN } = process.env
  if (!GOOGLE_ADS_CLIENT_ID || !GOOGLE_ADS_CLIENT_SECRET || !GOOGLE_ADS_REFRESH_TOKEN) return null
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: GOOGLE_ADS_CLIENT_ID, client_secret: GOOGLE_ADS_CLIENT_SECRET, refresh_token: GOOGLE_ADS_REFRESH_TOKEN, grant_type: 'refresh_token' }),
    cache: 'no-store',
  })
  if (!res.ok) return null
  return (await res.json()).access_token ?? null
}

async function gaql(tok: string, query: string) {
  const { GOOGLE_ADS_DEVELOPER_TOKEN, GOOGLE_ADS_CUSTOMER_ID, GOOGLE_ADS_LOGIN_CUSTOMER_ID } = process.env
  const cid = (GOOGLE_ADS_CUSTOMER_ID ?? '').replace(/\D/g, '')
  const headers: Record<string, string> = { Authorization: `Bearer ${tok}`, 'developer-token': GOOGLE_ADS_DEVELOPER_TOKEN ?? '', 'Content-Type': 'application/json' }
  if (GOOGLE_ADS_LOGIN_CUSTOMER_ID) headers['login-customer-id'] = GOOGLE_ADS_LOGIN_CUSTOMER_ID.replace(/\D/g, '')
  const res = await fetch(`https://googleads.googleapis.com/${V}/customers/${cid}/googleAds:search`, {
    method: 'POST', headers, body: JSON.stringify({ query }), cache: 'no-store',
  })
  const j = await res.json().catch(() => ({}))
  if (!res.ok) return { error: res.status, msg: JSON.stringify(j).slice(0, 600) }
  return j.results ?? []
}

export async function GET(req: Request) {
  const u = new URL(req.url)
  if (u.searchParams.get('k') !== KEY) return NextResponse.json({ error: 'nope' }, { status: 401 })
  const tok = await token()
  if (!tok) return NextResponse.json({ error: 'no token' }, { status: 500 })
  const M = 'metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions, metrics.ctr, metrics.average_cpc'
  const P = "campaign.name = 'Página Principal'"
  const q = {
    diario: `SELECT segments.date, campaign.name, ${M}, metrics.search_impression_share, metrics.search_budget_lost_impression_share, metrics.search_rank_lost_impression_share FROM campaign WHERE segments.date BETWEEN '2026-08-18' AND '2026-09-22' AND campaign.status = 'ENABLED' ORDER BY segments.date`,
    kwDepois: `SELECT ad_group.name, ad_group_criterion.keyword.text, ad_group_criterion.keyword.match_type, ad_group_criterion.status, ad_group_criterion.quality_info.quality_score, ad_group_criterion.quality_info.creative_quality_score, ad_group_criterion.quality_info.post_click_quality_score, ad_group_criterion.quality_info.search_predicted_ctr, ${M}, metrics.search_impression_share FROM keyword_view WHERE segments.date BETWEEN '2026-09-10' AND '2026-09-22' AND ${P} ORDER BY metrics.cost_micros DESC`,
    kwAntes: `SELECT ad_group_criterion.keyword.text, ad_group_criterion.keyword.match_type, ${M} FROM keyword_view WHERE segments.date BETWEEN '2026-08-19' AND '2026-09-09' AND ${P} ORDER BY metrics.cost_micros DESC`,
    termos: `SELECT search_term_view.search_term, search_term_view.status, segments.keyword.info.text, segments.keyword.info.match_type, metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions FROM search_term_view WHERE segments.date BETWEEN '2026-09-01' AND '2026-09-22' AND ${P} ORDER BY metrics.cost_micros DESC LIMIT 120`,
    termosAgo: `SELECT search_term_view.search_term, metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions FROM search_term_view WHERE segments.date BETWEEN '2026-08-01' AND '2026-08-31' AND ${P} ORDER BY metrics.cost_micros DESC LIMIT 80`,
    negativas: `SELECT campaign_criterion.keyword.text, campaign_criterion.keyword.match_type FROM campaign_criterion WHERE campaign_criterion.negative = TRUE AND ${P}`,
    hora: `SELECT segments.hour, metrics.clicks, metrics.cost_micros, metrics.conversions, metrics.impressions FROM campaign WHERE segments.date BETWEEN '2026-09-01' AND '2026-09-22' AND ${P}`,
    diaSemana: `SELECT segments.day_of_week, metrics.clicks, metrics.cost_micros, metrics.conversions, metrics.impressions FROM campaign WHERE segments.date BETWEEN '2026-08-18' AND '2026-09-22' AND ${P}`,
    dispositivo: `SELECT segments.device, metrics.clicks, metrics.cost_micros, metrics.conversions, metrics.impressions FROM campaign WHERE segments.date BETWEEN '2026-09-01' AND '2026-09-22' AND ${P}`,
    anuncios: `SELECT ad_group.name, ad_group_ad.ad.id, ad_group_ad.status, ad_group_ad.ad_strength, ad_group_ad.ad.final_urls, ad_group_ad.ad.responsive_search_ad.headlines, ${M} FROM ad_group_ad WHERE segments.date BETWEEN '2026-09-01' AND '2026-09-22' AND ${P}`,
    locais: `SELECT campaign_criterion.location.geo_target_constant, campaign_criterion.negative, campaign_criterion.bid_modifier FROM campaign_criterion WHERE campaign_criterion.type = 'LOCATION' AND ${P}`,
    campanha: `SELECT campaign.name, campaign.status, campaign.bidding_strategy_type, campaign.maximize_conversions.target_cpa_micros, campaign_budget.amount_micros, campaign.network_settings.target_search_network, campaign.network_settings.target_content_network, campaign.geo_target_type_setting.positive_geo_target_type FROM campaign WHERE campaign.status = 'ENABLED'`,
  }
  const entries = await Promise.all(Object.entries(q).map(async ([k, s]) => [k, await gaql(tok, s)] as const))
  return NextResponse.json(Object.fromEntries(entries))
}
