// Série DIÁRIA (Google Ads + Meta) cobrindo o período atual E o período anterior comparável.
// Alimenta os deltas ▲/▼ (fase 2) e as sparklines (fase 3) do /painel2.
// Reaproveita as MESMAS env vars do /painel. Qualquer falha => retorna null
// (a página degrada sem os enfeites, mas os KPIs base — vindos das funções provadas — seguem).

const GOOGLE_API_VERSION = 'v21'
const META_API_VERSION = 'v21.0'
const CONV_ACTION = 'onsite_conversion.messaging_conversation_started_7d'

// Quantos dias cada período cobre. Só os multi-dia ganham tendência/sparkline;
// 'hoje' e 'ontem' não têm série comparável e caem no null (sem deltas).
const DIAS: Record<string, number> = { '7d': 7, '14d': 14, '30d': 30 }

// ── Fase 3b · do contato à consulta (taxa MEDIDA) ──────────────────────────────
// Não há atribuição automática contato→consulta (a origem é marcada à mão no
// WhatsApp), então a taxa vem da CONTAGEM real da agenda. Atualize estes dois
// números a cada mês fechado — a taxa e o custo/consulta se recalculam sozinhos.
export const CONSULTAS_MES_REF = 26 // consultas fechadas em julho/2026 (Google + Meta)
export const CONTATOS_MES_REF = 183 // contatos pagos no mesmo período (~30 dias: 56 Google + 127 Meta)
export const MES_REF_LABEL = 'julho'
export const TAXA_CONTATO_CONSULTA = CONSULTAS_MES_REF / CONTATOS_MES_REF // ≈ 14,2%

export type SerieTot = { invest: number; contatos: number }
export type PontoDia = { data: string; invest: number; contatos: number }
export type Painel2Series = {
  combinado: { dias: PontoDia[]; atual: SerieTot; anterior: SerieTot }
  google: { atual: SerieTot; anterior: SerieTot } | null
  meta: { atual: SerieTot; anterior: SerieTot } | null
}

// ── helpers de data (UTC; diferença de fuso é irrelevante p/ um indicador de tendência) ──
function ymd(d: Date): string {
  return d.toISOString().slice(0, 10)
}
function addDays(d: Date, n: number): Date {
  const x = new Date(d)
  x.setUTCDate(x.getUTCDate() + n)
  return x
}
function eachDate(a: Date, b: Date): string[] {
  const out: string[] = []
  let cur = new Date(a)
  while (cur <= b) {
    out.push(ymd(cur))
    cur = addDays(cur, 1)
  }
  return out
}
// Janela atual = N dias terminando ONTEM (Google/Meta LAST_N excluem hoje); anterior = os N antes.
function windows(n: number) {
  const end = addDays(new Date(), -1)
  const start = addDays(end, -(n - 1))
  const prevEnd = addDays(start, -1)
  const prevStart = addDays(prevEnd, -(n - 1))
  return { start, end, prevStart, prevEnd }
}

type ByDate = Map<string, { invest: number; contatos: number }>

// Token OAuth do Google compartilhado. Sem isto, as 3 funções (getPainelData, série
// e custo/consulta) disparam refresh simultâneos e um falha de vez em quando (o token
// endpoint estrangula concorrência) => o Google "sumia" de forma intermitente no painel.
// Solução: dedupe da chamada em voo + cache de 50min (o token vale 60) + 1 retry.
let googleTokenCache: { value: string; exp: number } | null = null
let googleTokenInFlight: Promise<string | null> | null = null

async function fetchGoogleToken(): Promise<string | null> {
  const { GOOGLE_ADS_CLIENT_ID, GOOGLE_ADS_CLIENT_SECRET, GOOGLE_ADS_REFRESH_TOKEN } = process.env
  if (!GOOGLE_ADS_CLIENT_ID || !GOOGLE_ADS_CLIENT_SECRET || !GOOGLE_ADS_REFRESH_TOKEN) return null
  for (let tentativa = 0; tentativa < 2; tentativa++) {
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
    if (res.ok) {
      const j = await res.json()
      if (j.access_token) return j.access_token as string
    }
  }
  return null
}

async function googleToken(): Promise<string | null> {
  const now = Date.now()
  if (googleTokenCache && googleTokenCache.exp > now) return googleTokenCache.value
  if (googleTokenInFlight) return googleTokenInFlight
  googleTokenInFlight = (async () => {
    const v = await fetchGoogleToken()
    if (v) googleTokenCache = { value: v, exp: Date.now() + 50 * 60 * 1000 }
    googleTokenInFlight = null
    return v
  })()
  return googleTokenInFlight
}

async function googleDaily(n: number): Promise<ByDate | null> {
  const { GOOGLE_ADS_DEVELOPER_TOKEN, GOOGLE_ADS_CUSTOMER_ID, GOOGLE_ADS_LOGIN_CUSTOMER_ID } = process.env
  if (!GOOGLE_ADS_DEVELOPER_TOKEN || !GOOGLE_ADS_CUSTOMER_ID) return null
  const token = await googleToken()
  if (!token) return null

  const { prevStart, end } = windows(n)
  const cid = GOOGLE_ADS_CUSTOMER_ID.replace(/\D/g, '')
  const query =
    'SELECT segments.date, metrics.clicks, metrics.conversions, metrics.cost_micros ' +
    `FROM campaign WHERE segments.date BETWEEN '${ymd(prevStart)}' AND '${ymd(end)}' AND campaign.status != 'REMOVED'`

  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    'developer-token': GOOGLE_ADS_DEVELOPER_TOKEN,
    'Content-Type': 'application/json',
  }
  if (GOOGLE_ADS_LOGIN_CUSTOMER_ID) headers['login-customer-id'] = GOOGLE_ADS_LOGIN_CUSTOMER_ID.replace(/\D/g, '')

  const res = await fetch(`https://googleads.googleapis.com/${GOOGLE_API_VERSION}/customers/${cid}/googleAds:search`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query }),
    cache: 'no-store',
  })
  if (!res.ok) return null

  const j = await res.json()
  const rows: any[] = j.results ?? []
  const byDate: ByDate = new Map()
  for (const r of rows) {
    const d: string = r.segments?.date ?? ''
    if (!d) continue
    const cur = byDate.get(d) ?? { invest: 0, contatos: 0 }
    cur.invest += Number(r.metrics?.costMicros ?? 0) / 1e6
    cur.contatos += Number(r.metrics?.conversions ?? 0)
    byDate.set(d, cur)
  }
  return byDate
}

function metaActionVal(arr: Array<{ action_type: string; value: string }> | undefined): number {
  if (!arr) return 0
  const found = arr.find((a) => a.action_type === CONV_ACTION)
  return found ? Number(found.value) : 0
}

async function metaDaily(n: number): Promise<ByDate | null> {
  const token = process.env.META_ADS_ACCESS_TOKEN
  const acct = process.env.META_AD_ACCOUNT_ID
  if (!token || !acct) return null

  const id = acct.replace(/\D/g, '')
  const { prevStart, end } = windows(n)
  const timeRange = encodeURIComponent(JSON.stringify({ since: ymd(prevStart), until: ymd(end) }))
  const url =
    `https://graph.facebook.com/${META_API_VERSION}/act_${id}/insights` +
    `?level=account&time_increment=1&time_range=${timeRange}&fields=spend,actions&limit=500` +
    `&access_token=${encodeURIComponent(token)}`

  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) return null

  const j = await res.json()
  const rows: Array<Record<string, unknown>> = j.data ?? []
  const byDate: ByDate = new Map()
  for (const r of rows) {
    const d = String(r.date_start ?? '')
    if (!d) continue
    byDate.set(d, {
      invest: Number(r.spend ?? 0),
      contatos: metaActionVal(r.actions as never),
    })
  }
  return byDate
}

// ── Custo por consulta FECHADA · por canal (mês corrente) ──────────────────────
// As consultas são contadas à mão por origem (Instagram × site, marcadas no WhatsApp).
// Atualize `google`/`meta` conforme a agenda; o gasto de cada canal é buscado ao vivo
// do 1º dia do mês até hoje. Fuso America/Sao_Paulo para casar com as contas de anúncio.
export const CONSULTAS_MES = {
  label: 'agosto',
  inicio: '2026-08-01',
  google: 2, // consultas fechadas que vieram do SITE (Google Ads)
  meta: 4, // consultas fechadas que vieram do INSTAGRAM (Meta)
}

export type CanalCusto = { invest: number; consultas: number; custo: number; disponivel: boolean }
export type CustoConsultaCanais = {
  label: string
  desde: string
  ate: string
  google: CanalCusto
  meta: CanalCusto
  total: CanalCusto
}

function hojeSP(): string {
  // 'en-CA' formata como YYYY-MM-DD
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo' }).format(new Date())
}

async function googleSpendRange(inicio: string, fim: string): Promise<number | null> {
  const { GOOGLE_ADS_DEVELOPER_TOKEN, GOOGLE_ADS_CUSTOMER_ID, GOOGLE_ADS_LOGIN_CUSTOMER_ID } = process.env
  if (!GOOGLE_ADS_DEVELOPER_TOKEN || !GOOGLE_ADS_CUSTOMER_ID) return null
  const token = await googleToken()
  if (!token) return null

  const cid = GOOGLE_ADS_CUSTOMER_ID.replace(/\D/g, '')
  const query =
    'SELECT metrics.cost_micros FROM campaign ' +
    `WHERE segments.date BETWEEN '${inicio}' AND '${fim}' AND campaign.status != 'REMOVED'`
  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    'developer-token': GOOGLE_ADS_DEVELOPER_TOKEN,
    'Content-Type': 'application/json',
  }
  if (GOOGLE_ADS_LOGIN_CUSTOMER_ID) headers['login-customer-id'] = GOOGLE_ADS_LOGIN_CUSTOMER_ID.replace(/\D/g, '')

  const res = await fetch(`https://googleads.googleapis.com/${GOOGLE_API_VERSION}/customers/${cid}/googleAds:search`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query }),
    cache: 'no-store',
  })
  if (!res.ok) return null
  const j = await res.json()
  const rows: any[] = j.results ?? []
  return rows.reduce((s, r) => s + Number(r.metrics?.costMicros ?? 0) / 1e6, 0)
}

async function metaSpendRange(inicio: string, fim: string): Promise<number | null> {
  const token = process.env.META_ADS_ACCESS_TOKEN
  const acct = process.env.META_AD_ACCOUNT_ID
  if (!token || !acct) return null

  const id = acct.replace(/\D/g, '')
  const timeRange = encodeURIComponent(JSON.stringify({ since: inicio, until: fim }))
  const url =
    `https://graph.facebook.com/${META_API_VERSION}/act_${id}/insights` +
    `?level=account&time_range=${timeRange}&fields=spend&access_token=${encodeURIComponent(token)}`
  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) return null
  const j = await res.json()
  const rows: Array<Record<string, unknown>> = j.data ?? []
  return rows.reduce((s, r) => s + Number(r.spend ?? 0), 0)
}

export async function getCustoConsultaCanais(): Promise<CustoConsultaCanais | null> {
  try {
    const fim = hojeSP()
    const inicio = CONSULTAS_MES.inicio
    const [g, m] = await Promise.all([googleSpendRange(inicio, fim), metaSpendRange(inicio, fim)])
    if (g === null && m === null) return null

    const gInvest = g ?? 0
    const mInvest = m ?? 0
    // custo só faz sentido quando houve GASTO em anúncio; sem gasto (invest≈0) as
    // consultas vieram do orgânico e o custo de mídia é zero, não "barato".
    const canal = (invest: number, consultas: number, disponivel: boolean): CanalCusto => ({
      invest,
      consultas,
      custo: invest > 0 && consultas ? invest / consultas : 0,
      disponivel,
    })
    return {
      label: CONSULTAS_MES.label,
      desde: inicio,
      ate: fim,
      google: canal(gInvest, CONSULTAS_MES.google, g !== null),
      meta: canal(mInvest, CONSULTAS_MES.meta, m !== null),
      total: canal(gInvest + mInvest, CONSULTAS_MES.google + CONSULTAS_MES.meta, g !== null || m !== null),
    }
  } catch {
    return null
  }
}

export async function getPainel2Series(periodo: string): Promise<Painel2Series | null> {
  const n = DIAS[periodo]
  if (!n) return null

  try {
    const [g, m] = await Promise.all([googleDaily(n), metaDaily(n)])
    if (!g && !m) return null

    const { start, end, prevStart, prevEnd } = windows(n)
    const curDates = eachDate(start, end)
    const prevDates = eachDate(prevStart, prevEnd)

    const at = (src: ByDate | null, d: string) => src?.get(d) ?? { invest: 0, contatos: 0 }
    const sumChan = (src: ByDate | null, dates: string[]): SerieTot =>
      dates.reduce(
        (a, d) => {
          const p = at(src, d)
          return { invest: a.invest + p.invest, contatos: a.contatos + p.contatos }
        },
        { invest: 0, contatos: 0 }
      )

    const dias: PontoDia[] = curDates.map((d) => {
      const gg = at(g, d)
      const mm = at(m, d)
      return { data: d, invest: gg.invest + mm.invest, contatos: gg.contatos + mm.contatos }
    })
    const sumComb = (dates: string[]): SerieTot =>
      dates.reduce(
        (a, d) => {
          const gg = at(g, d)
          const mm = at(m, d)
          return { invest: a.invest + gg.invest + mm.invest, contatos: a.contatos + gg.contatos + mm.contatos }
        },
        { invest: 0, contatos: 0 }
      )

    return {
      combinado: { dias, atual: sumComb(curDates), anterior: sumComb(prevDates) },
      google: g ? { atual: sumChan(g, curDates), anterior: sumChan(g, prevDates) } : null,
      meta: m ? { atual: sumChan(m, curDates), anterior: sumChan(m, prevDates) } : null,
    }
  } catch {
    return null
  }
}
