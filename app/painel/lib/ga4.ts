// Camada de dados · Google Analytics 4 (Data API v1beta, REST).
//
// A propriedade 545704709 recebe também o SISTEMA da clínica (sistema.isabelaragao.com.br e o
// domínio da Vercel), que chegou a ser 47% das sessões. Por isso TODA consulta filtra
// hostName = isabelaragao.com.br. Mesmas regras do googleAds.ts: uma função por pergunta,
// `null` em falha (a página degrada por bloco), cache de 10 min, datas em America/Sao_Paulo.
//
// Contato no site = evento `whatsapp_click` (GTM v10, desde 07/10/2026). Contamos por
// eventCount filtrado, e não pela métrica de evento-chave, porque evento-chave só conta
// a partir do dia em que foi marcado (09/10) e os períodos olham para trás.
import { addDays, type Janela } from './googleAds'

const HOST = 'isabelaragao.com.br'
const EVENTO = 'whatsapp_click'
const TTL_MS = 10 * 60 * 1000

export function conectadoGa4(): boolean {
  const e = process.env
  return !!(e.GA4_CLIENT_ID && e.GA4_CLIENT_SECRET && e.GA4_REFRESH_TOKEN && e.GA4_PROPERTY_ID)
}

// ───────────────────────────── cliente ─────────────────────────────
let tokenCache: { token: string; exp: number } | null = null
async function accessToken(): Promise<string | null> {
  const { GA4_CLIENT_ID, GA4_CLIENT_SECRET, GA4_REFRESH_TOKEN } = process.env
  if (!GA4_CLIENT_ID || !GA4_CLIENT_SECRET || !GA4_REFRESH_TOKEN) return null
  if (tokenCache && tokenCache.exp > Date.now() + 60_000) return tokenCache.token
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: GA4_CLIENT_ID, client_secret: GA4_CLIENT_SECRET, refresh_token: GA4_REFRESH_TOKEN, grant_type: 'refresh_token' }),
    cache: 'no-store',
  })
  if (!res.ok) return null
  const j = await res.json()
  if (!j.access_token) return null
  tokenCache = { token: j.access_token, exp: Date.now() + Number(j.expires_in ?? 3600) * 1000 }
  return tokenCache.token
}

type Row = { dimensionValues?: Array<{ value: string }>; metricValues?: Array<{ value: string }> }
type Filtro = Record<string, unknown>
const fHost: Filtro = { filter: { fieldName: 'hostName', stringFilter: { matchType: 'EXACT', value: HOST } } }
const fEvento: Filtro = { filter: { fieldName: 'eventName', stringFilter: { matchType: 'EXACT', value: EVENTO } } }
const soHost: Filtro = fHost
const hostEEvento: Filtro = { andGroup: { expressions: [fHost, fEvento] } }

// no máximo 3 chamadas em voo (a cota do GA4 é por tokens, não por concorrência, mas
// o painel dispara ~10 consultas por carga e não há motivo para rajada)
let emVoo = 0
const fila: Array<() => void> = []
async function vaga<T>(fn: () => Promise<T>): Promise<T> {
  if (emVoo >= 3) await new Promise<void>((r) => fila.push(r))
  else emVoo++
  try {
    return await fn()
  } finally {
    const proximo = fila.shift()
    if (proximo) proximo()
    else emVoo--
  }
}

async function runReport(body: Record<string, unknown>): Promise<Row[]> {
  const token = await accessToken()
  const prop = (process.env.GA4_PROPERTY_ID ?? '').replace(/\D/g, '')
  if (!token || !prop) throw new Error('GA4 sem credenciais')
  const url = `https://analyticsdata.googleapis.com/v1beta/properties/${prop}:runReport`
  const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
  let ultimo = ''
  for (let tentativa = 0; tentativa < 3; tentativa++) {
    const res = await vaga(() => fetch(url, { method: 'POST', headers, body: JSON.stringify(body), cache: 'no-store' }))
    if (res.ok) {
      const j = (await res.json()) as { rows?: Row[] }
      return j.rows ?? []
    }
    ultimo = `${res.status} ${(await res.text()).slice(0, 300)}`
    if (res.status < 500 && res.status !== 429) break
    await new Promise((r) => setTimeout(r, 500 * (tentativa + 1)))
  }
  throw new Error(`GA4 runReport falhou: ${ultimo}`)
}

const CACHE = new Map<string, { exp: number; val: unknown }>()
async function cached<T>(key: string, fn: () => Promise<T>): Promise<T | null> {
  const hit = CACHE.get(key)
  if (hit && hit.exp > Date.now()) return hit.val as T
  try {
    const val = await fn()
    CACHE.set(key, { exp: Date.now() + TTL_MS, val })
    return val
  } catch (e) {
    console.error('[painel/ga4]', key, e instanceof Error ? e.message : e)
    return null
  }
}

const n = (v: unknown) => Number(v ?? 0)
const dim = (r: Row, i = 0) => r.dimensionValues?.[i]?.value ?? ''
const met = (r: Row, i = 0) => n(r.metricValues?.[i]?.value)
const range = (j: Janela) => [{ startDate: j.inicio, endDate: j.fim }]

// ───────────────────────────── consultas ─────────────────────────────
export type TotSite = { sessoes: number; usuarios: number; cliques: number }
export type ResumoSite = { atual: TotSite; anterior: TotSite }

/** Totais do período e do período anterior comparável (sessões, pessoas, cliques no WhatsApp). */
export function getSiteResumo(j: Janela): Promise<ResumoSite | null> {
  return cached(`resumo:${j.inicio}:${j.fim}`, async () => {
    const ranges = [{ startDate: j.inicio, endDate: j.fim }, { startDate: j.prevInicio, endDate: j.prevFim }]
    const [sess, ev] = await Promise.all([
      runReport({ dateRanges: ranges, metrics: [{ name: 'sessions' }, { name: 'totalUsers' }], dimensionFilter: soHost }),
      runReport({ dateRanges: ranges, metrics: [{ name: 'eventCount' }], dimensionFilter: hostEEvento }),
    ])
    // com 2 intervalos o GA4 acrescenta sozinho a dimensão dateRange (date_range_0 / date_range_1)
    const por = (rows: Row[]) => Object.fromEntries(rows.map((r) => [dim(r) || 'date_range_0', r]))
    const s = por(sess), e = por(ev)
    const tot = (k: string): TotSite => ({ sessoes: s[k] ? met(s[k], 0) : 0, usuarios: s[k] ? met(s[k], 1) : 0, cliques: e[k] ? met(e[k], 0) : 0 })
    return { atual: tot('date_range_0'), anterior: tot('date_range_1') }
  })
}

export type FatiaSite = { nome: string; sessoes: number; cliques: number }

/** Quebra genérica: sessões e cliques no WhatsApp por uma dimensão (duas consultas, porque
 *  filtrar pelo evento também filtraria as sessões). Mantém as `limite` maiores por sessão e
 *  qualquer linha que tenha clique. */
async function quebra(j: Janela, dimensao: string, limite: number, nomear: (v: string) => string = (v) => v): Promise<FatiaSite[]> {
  const [sess, ev] = await Promise.all([
    runReport({ dateRanges: range(j), dimensions: [{ name: dimensao }], metrics: [{ name: 'sessions' }], dimensionFilter: soHost, orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 200 }),
    runReport({ dateRanges: range(j), dimensions: [{ name: dimensao }], metrics: [{ name: 'eventCount' }], dimensionFilter: hostEEvento, limit: 200 }),
  ])
  const cliques = new Map<string, number>()
  for (const r of ev) cliques.set(dim(r), met(r))
  const linhas = new Map<string, FatiaSite>()
  for (const r of sess) linhas.set(dim(r), { nome: nomear(dim(r)), sessoes: met(r), cliques: cliques.get(dim(r)) ?? 0 })
  for (const [k, c] of cliques) if (c > 0 && !linhas.has(k)) linhas.set(k, { nome: nomear(k), sessoes: 0, cliques: c })
  return [...linhas.values()].sort((a, b) => b.sessoes - a.sessoes).filter((l, i) => i < limite || l.cliques > 0)
}

const CANAL: Record<string, string> = {
  'Organic Search': 'Busca orgânica (Google)',
  'Paid Search': 'Google Ads',
  Direct: 'Direto (link salvo ou digitado)',
  'Organic Social': 'Instagram e Facebook (orgânico)',
  'Paid Social': 'Meta Ads',
  Referral: 'Link em outro site',
  Unassigned: 'Sem origem identificada',
  'Cross-network': 'Google (várias redes)',
  Email: 'E-mail',
  'Organic Video': 'YouTube (orgânico)',
  Display: 'Display',
  'Paid Other': 'Outro pago',
  'AI Assistant': 'Assistentes de IA (ChatGPT etc.)',
}
/** Canal padrão do GA4 (busca orgânica, Google Ads, direto, social…). */
export function getSiteCanais(j: Janela): Promise<FatiaSite[] | null> {
  return cached(`canais:${j.inicio}:${j.fim}`, () => quebra(j, 'sessionDefaultChannelGroup', 20, (v) => CANAL[v] ?? v))
}

function nomeOrigem(v: string): string {
  const [fonte, meio] = v.split(' / ').map((s) => s.trim())
  if (fonte === '(direct)') return 'direto'
  if (fonte === '(data not available)' || fonte === '(not set)') return 'sem dado de origem'
  const f = fonte.replace(/^l\.instagram\.com$/, 'instagram').replace(/^(www\.|m\.|lm\.)/, '')
  const m: Record<string, string> = { cpc: 'anúncio', organic: 'busca orgânica', referral: 'link', social: 'social', '(not set)': '' }
  const mm = meio in m ? m[meio] : meio
  return mm ? `${f} · ${mm}` : f
}
/** Origem e mídia (google · anúncio, google · busca orgânica, instagram · link…). */
export function getSiteOrigens(j: Janela): Promise<FatiaSite[] | null> {
  return cached(`origens:${j.inicio}:${j.fim}`, () => quebra(j, 'sessionSourceMedium', 10, nomeOrigem))
}

// Caminhos que não são do site: sessões da equipe que começam no SISTEMA da clínica e passam
// pelo site (o filtro de hostName é por evento, a página de entrada é por sessão), e o próprio painel.
const NAO_E_SITE = /^\/(painel|login|agenda|dashboard|central-contatos|financeiro|tarefas|prontuario|pacientes|servicos|aplicacoes|pacotes|ajuda|cadastro|indicadores|usuarios)(\/|$)/
/** Página de entrada da sessão; cliques = sessões que entraram por ela e clicaram no WhatsApp. */
export function getSitePaginas(j: Janela): Promise<FatiaSite[] | null> {
  return cached(`paginas:${j.inicio}:${j.fim}`, async () => (await quebra(j, 'landingPage', 14, (v) => (v === '(not set)' ? 'sem página registrada' : v))).filter((p) => !NAO_E_SITE.test(p.nome)))
}

const DISPOSITIVO: Record<string, string> = { desktop: 'Computador', mobile: 'Celular', tablet: 'Tablet' }
export function getSiteDispositivos(j: Janela): Promise<FatiaSite[] | null> {
  return cached(`dispositivos:${j.inicio}:${j.fim}`, () => quebra(j, 'deviceCategory', 5, (v) => DISPOSITIVO[v] ?? v))
}

export type DiaSite = { data: string; sessoes: number; cliques: number }
/** Sessões e cliques no WhatsApp por dia, com os dias sem dado preenchidos com zero. */
export function getSiteSerie(j: Janela): Promise<DiaSite[] | null> {
  return cached(`serie:${j.inicio}:${j.fim}`, async () => {
    const [sess, ev] = await Promise.all([
      runReport({ dateRanges: range(j), dimensions: [{ name: 'date' }], metrics: [{ name: 'sessions' }], dimensionFilter: soHost, limit: 400 }),
      runReport({ dateRanges: range(j), dimensions: [{ name: 'date' }], metrics: [{ name: 'eventCount' }], dimensionFilter: hostEEvento, limit: 400 }),
    ])
    const iso = (v: string) => `${v.slice(0, 4)}-${v.slice(4, 6)}-${v.slice(6, 8)}` // GA4 devolve YYYYMMDD
    const s = new Map(sess.map((r) => [iso(dim(r)), met(r)]))
    const e = new Map(ev.map((r) => [iso(dim(r)), met(r)]))
    const dias: DiaSite[] = []
    for (let d = j.inicio; d <= j.fim; d = addDays(d, 1)) dias.push({ data: d, sessoes: s.get(d) ?? 0, cliques: e.get(d) ?? 0 })
    return dias
  })
}
