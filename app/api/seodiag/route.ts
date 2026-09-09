// TEMPORÁRIO — diagnóstico SEO (GSC) pós-mudanças de 03/09 (antes×depois). Remover após uso.
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
const KEY = 'seo-k7p2x-set'

async function token(): Promise<string | null> {
  const clientId = process.env.GOOGLE_ADS_CLIENT_ID
  const clientSecret = process.env.GSC_CLIENT_SECRET ?? process.env.GOOGLE_ADS_CLIENT_SECRET
  const refreshToken = process.env.GSC_REFRESH_TOKEN
  if (!clientId || !clientSecret || !refreshToken) return null
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: clientId, client_secret: clientSecret, refresh_token: refreshToken, grant_type: 'refresh_token' }),
    cache: 'no-store',
  })
  if (!res.ok) return null
  return (await res.json()).access_token ?? null
}

const fmt = (d: Date) => d.toISOString().slice(0, 10)

async function query(tok: string, site: string, body: Record<string, unknown>) {
  const res = await fetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`,
    { method: 'POST', headers: { Authorization: `Bearer ${tok}`, 'Content-Type': 'application/json' }, body: JSON.stringify(body), cache: 'no-store' }
  )
  if (!res.ok) return { error: res.status, text: (await res.text()).slice(0, 300) }
  const j = await res.json()
  return (j.rows ?? []).map((r: any) => ({
    k: r.keys, c: Math.round(r.clicks ?? 0), i: Math.round(r.impressions ?? 0),
    ctr: +((r.ctr ?? 0) * 100).toFixed(1), pos: +(r.position ?? 0).toFixed(1),
  }))
}

export async function GET(req: Request) {
  const u = new URL(req.url)
  if (u.searchParams.get('k') !== KEY) return NextResponse.json({ error: 'nope' }, { status: 401 })
  const site = process.env.GSC_SITE_URL
  if (!site) return NextResponse.json({ error: 'no GSC_SITE_URL' }, { status: 500 })
  const tok = await token()
  if (!tok) return NextResponse.json({ error: 'no token' }, { status: 500 })

  const end = new Date(); end.setDate(end.getDate() - 2)
  const d = (n: number) => { const x = new Date(end); x.setDate(x.getDate() - n); return fmt(x) }
  const pos = { startDate: d(4), endDate: fmt(end) }   // 5 dias DEPOIS das mudanças
  const pre = { startDate: d(9), endDate: d(5) }       // 5 dias ANTES
  const d28 = { startDate: d(27), endDate: fmt(end) }
  const d14 = { startDate: d(13), endDate: fmt(end) }

  const [pagesPos, pagesPre, pages28, queriesPos, pageQueryPos, daily] = await Promise.all([
    query(tok, site, { ...pos, dimensions: ['page'], rowLimit: 150 }),
    query(tok, site, { ...pre, dimensions: ['page'], rowLimit: 150 }),
    query(tok, site, { ...d28, dimensions: ['page'], rowLimit: 150 }),
    query(tok, site, { ...pos, dimensions: ['query'], rowLimit: 80 }),
    query(tok, site, { ...pos, dimensions: ['page', 'query'], rowLimit: 150 }),
    query(tok, site, { ...d14, dimensions: ['date'], rowLimit: 30 }),
  ])
  return NextResponse.json({ pos, pre, d28, pagesPos, pagesPre, pages28, queriesPos, pageQueryPos, daily })
}
