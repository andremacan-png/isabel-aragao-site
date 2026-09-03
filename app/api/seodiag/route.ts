// TEMPORÁRIO — diagnóstico SEO (GSC) para plano de conteúdo. Remover após uso.
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
const KEY = 'seo-9f3k2m-fech'

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
  const start = new Date(end); start.setDate(start.getDate() - 27)
  const base = { startDate: fmt(start), endDate: fmt(end) }

  const [queries, pages, pageQuery] = await Promise.all([
    query(tok, site, { ...base, dimensions: ['query'], rowLimit: 80, orderType: 'descending', orderProperty: 'impressions' }),
    query(tok, site, { ...base, dimensions: ['page'], rowLimit: 60, orderType: 'descending', orderProperty: 'impressions' }),
    query(tok, site, { ...base, dimensions: ['page', 'query'], rowLimit: 150, orderType: 'descending', orderProperty: 'impressions' }),
  ])
  return NextResponse.json({ periodo: `${base.startDate} a ${base.endDate}`, queries, pages, pageQuery })
}
