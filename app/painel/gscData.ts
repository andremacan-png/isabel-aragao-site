// Google Search Console API — top páginas por cliques orgânicos (últimos 28 dias)
// Env vars necessárias: GOOGLE_ADS_CLIENT_ID, GOOGLE_ADS_CLIENT_SECRET, GSC_REFRESH_TOKEN, GSC_SITE_URL

export type GscPage = {
  page: string
  slug: string
  cliques: number
  impressoes: number
  ctr: number    // 0..1
  posicao: number
}

export type GscData = {
  paginas: GscPage[]
  totais: { cliques: number; impressoes: number }
  periodo: string
}

async function getGscToken(): Promise<string | null> {
  const clientId = process.env.GOOGLE_ADS_CLIENT_ID
  // GSC usa o novo client secret (****g7_X); Ads usa o antigo (****BBGF)
  const clientSecret = process.env.GSC_CLIENT_SECRET ?? process.env.GOOGLE_ADS_CLIENT_SECRET
  const refreshToken = process.env.GSC_REFRESH_TOKEN
  if (!clientId || !clientSecret || !refreshToken) return null
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
    cache: 'no-store',
  })
  if (!res.ok) return null
  const j = await res.json()
  return j.access_token ?? null
}

function fmtDate(d: Date): string {
  return d.toISOString().slice(0, 10)
}

export async function getGscData(): Promise<GscData | null> {
  const { GSC_SITE_URL } = process.env
  if (!GSC_SITE_URL) return null

  try {
    const token = await getGscToken()
    if (!token) return null

    // GSC tem latência de ~2 dias; últimos 28 dias completos
    const end = new Date()
    end.setDate(end.getDate() - 2)
    const start = new Date(end)
    start.setDate(start.getDate() - 27)
    const periodo = `${fmtDate(start)} a ${fmtDate(end)}`

    const siteEncoded = encodeURIComponent(GSC_SITE_URL)
    const res = await fetch(
      `https://searchconsole.googleapis.com/webmasters/v3/sites/${siteEncoded}/searchAnalytics/query`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          startDate: fmtDate(start),
          endDate: fmtDate(end),
          dimensions: ['page'],
          rowLimit: 20,
          orderType: 'descending',
          orderProperty: 'clicks',
        }),
        cache: 'no-store',
      }
    )
    if (!res.ok) return null

    const j = await res.json()
    const rows: any[] = j.rows ?? []
    if (!rows.length) return null

    const site = GSC_SITE_URL.replace(/\/$/, '')
    const paginas: GscPage[] = rows.map((r) => {
      const url: string = r.keys?.[0] ?? ''
      const slug = url.startsWith(site) ? url.slice(site.length) || '/' : url
      return {
        page: url,
        slug,
        cliques: Math.round(r.clicks ?? 0),
        impressoes: Math.round(r.impressions ?? 0),
        ctr: r.ctr ?? 0,
        posicao: r.position ?? 0,
      }
    })

    const totais = {
      cliques: paginas.reduce((s, p) => s + p.cliques, 0),
      impressoes: paginas.reduce((s, p) => s + p.impressoes, 0),
    }

    return { paginas, totais, periodo }
  } catch {
    return null
  }
}
