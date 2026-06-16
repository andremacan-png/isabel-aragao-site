// TEMPORÁRIO — diagnóstico da conexão com a Google Ads API.
// Protegido por chave (?k=). Não expõe segredos: só presença/tamanho das
// variáveis e o código de erro que o Google devolve. REMOVER após diagnosticar.
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const API_VERSION = 'v18'
const KEY = 'diag-isabel-9f3a'

export async function GET(req: Request) {
  const url = new URL(req.url)
  if (url.searchParams.get('k') !== KEY) {
    return NextResponse.json({ error: 'forbidden' }, { status: 403 })
  }

  const env = process.env
  const info = (v?: string) => ({ present: !!v, len: v ? v.length : 0, wsDiff: v ? v.length - v.trim().length : 0 })
  const report: Record<string, unknown> = {
    env: {
      DEVELOPER_TOKEN: info(env.GOOGLE_ADS_DEVELOPER_TOKEN),
      CLIENT_ID: info(env.GOOGLE_ADS_CLIENT_ID),
      CLIENT_SECRET: info(env.GOOGLE_ADS_CLIENT_SECRET),
      REFRESH_TOKEN: info(env.GOOGLE_ADS_REFRESH_TOKEN),
      CUSTOMER_ID: { ...info(env.GOOGLE_ADS_CUSTOMER_ID), digits: (env.GOOGLE_ADS_CUSTOMER_ID || '').replace(/\D/g, '') },
      LOGIN_CUSTOMER_ID: info(env.GOOGLE_ADS_LOGIN_CUSTOMER_ID),
    },
  }

  try {
    // Passo 1 — OAuth: troca refresh_token por access_token
    const r1 = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: (env.GOOGLE_ADS_CLIENT_ID || '').trim(),
        client_secret: (env.GOOGLE_ADS_CLIENT_SECRET || '').trim(),
        refresh_token: (env.GOOGLE_ADS_REFRESH_TOKEN || '').trim(),
        grant_type: 'refresh_token',
      }),
      cache: 'no-store',
    })
    const t1 = await r1.text()
    let token: string | null = null
    const oauth: Record<string, unknown> = { status: r1.status, ok: r1.ok }
    if (r1.ok) {
      try { token = JSON.parse(t1).access_token ?? null } catch {}
      oauth.gotAccessToken = !!token
    } else {
      try { const j = JSON.parse(t1); oauth.error = j.error; oauth.error_description = j.error_description } catch { oauth.body = t1.slice(0, 200) }
    }
    report.oauth = oauth

    // Passo 2 — Ads API: descobre qual versão da API responde (a v18 saiu do ar).
    if (token) {
      const cid = (env.GOOGLE_ADS_CUSTOMER_ID || '').replace(/\D/g, '')
      const query =
        "SELECT campaign.name, metrics.clicks FROM campaign WHERE segments.date DURING LAST_7_DAYS AND campaign.status != 'REMOVED'"
      const headers: Record<string, string> = {
        Authorization: `Bearer ${token}`,
        'developer-token': (env.GOOGLE_ADS_DEVELOPER_TOKEN || '').trim(),
        'Content-Type': 'application/json',
      }
      if (env.GOOGLE_ADS_LOGIN_CUSTOMER_ID) headers['login-customer-id'] = env.GOOGLE_ADS_LOGIN_CUSTOMER_ID.replace(/\D/g, '')

      const versoes = ['v20', 'v21']
      const probe: Record<string, unknown>[] = []
      for (const v of versoes) {
        try {
          const r2 = await fetch(`https://googleads.googleapis.com/${v}/customers/${cid}/googleAds:search`, {
            method: 'POST',
            headers,
            body: JSON.stringify({ query, pageSize: 50 }),
            cache: 'no-store',
          })
          const t2 = await r2.text()
          const isHtml404 = t2.trimStart().startsWith('<')
          const entry: Record<string, unknown> = { v, status: r2.status, html404: isHtml404 }
          if (!isHtml404) {
            // versão existe — reporta o resultado JSON (dados ou erro estruturado)
            try {
              const j = JSON.parse(t2)
              if (r2.ok) {
                const rows: unknown[] = j.results ?? []
                entry.rowCount = rows.length
                entry.campanhas = rows.map((x) => (x as { campaign?: { name?: string } }).campaign?.name)
              } else {
                entry.apiError = j?.error?.status ?? j?.error?.code
                entry.apiMessage = (j?.error?.message ?? '').slice(0, 200)
                entry.errorDetails = JSON.stringify(j?.error?.details ?? null).slice(0, 700)
              }
            } catch { entry.bodyHead = t2.slice(0, 150) }
          }
          probe.push(entry)
        } catch (e) {
          probe.push({ v, fetchError: String((e as Error)?.message ?? e) })
        }
      }
      report.adsProbe = probe
    }
  } catch (e) {
    report.exception = String((e as Error)?.message ?? e)
  }

  return NextResponse.json(report)
}
