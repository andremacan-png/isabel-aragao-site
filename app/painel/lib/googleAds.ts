// Camada de dados do Painel de Tráfego 2.0 · Google Ads (API REST, GAQL).
//
// Regras desta camada:
// - uma função por pergunta de negócio; cada uma devolve `null` se a API falhar
//   (a página degrada por bloco, nunca quebra inteira);
// - no máximo 2 consultas simultâneas ao googleAds:search (o limite de concorrência
//   da API derrubava chamadas quando o painel antigo disparava 3 de uma vez);
// - resultado em cache por 10 min por instância (cada load não bate na API de novo);
// - datas sempre em America/Sao_Paulo, para casar com os relatórios da conta.

const API_VERSION = 'v25' // v22 saiu do ar em 07/10/2026; o Google aposenta ~1 versão por trimestre.
const TTL_MS = 10 * 60 * 1000

// ───────────────────────────── períodos ─────────────────────────────
export const PERIODOS = {
  hoje: 'Hoje',
  ontem: 'Ontem',
  '7d': '7 dias',
  '14d': '14 dias',
  '30d': '30 dias',
  mes: 'Mês atual',
  mesant: 'Mês anterior',
} as const
export type PeriodoKey = keyof typeof PERIODOS
export function isPeriodo(v: string | undefined): v is PeriodoKey {
  return !!v && v in PERIODOS
}

export type Janela = {
  key: PeriodoKey
  label: string
  inicio: string // YYYY-MM-DD
  fim: string
  prevInicio: string
  prevFim: string
  dias: number
  comparacao: string // texto do chip ▲▼
}

const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

export function hojeSP(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo' }).format(new Date())
}
function toDate(ymd: string): Date {
  const [y, m, d] = ymd.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d))
}
export function ymd(d: Date): string {
  return d.toISOString().slice(0, 10)
}
export function addDays(ymdStr: string, n: number): string {
  const d = toDate(ymdStr)
  d.setUTCDate(d.getUTCDate() + n)
  return ymd(d)
}
function diffDays(a: string, b: string): number {
  return Math.round((toDate(b).getTime() - toDate(a).getTime()) / 86400000) + 1
}
export function diaSemana(ymdStr: string): number {
  return toDate(ymdStr).getUTCDay() // 0 = domingo
}
export function fmtDia(ymdStr: string): string {
  const [, m, d] = ymdStr.split('-')
  return `${d}/${m}`
}

export function janela(key: PeriodoKey): Janela {
  const hoje = hojeSP()
  const ontem = addDays(hoje, -1)
  const [y, m] = hoje.split('-').map(Number)
  const label = PERIODOS[key]
  if (key === 'hoje') return { key, label, inicio: hoje, fim: hoje, prevInicio: ontem, prevFim: ontem, dias: 1, comparacao: 'vs ontem' }
  if (key === 'ontem') {
    const ant = addDays(ontem, -1)
    return { key, label, inicio: ontem, fim: ontem, prevInicio: ant, prevFim: ant, dias: 1, comparacao: 'vs anteontem' }
  }
  if (key === 'mes') {
    const inicio = `${y}-${String(m).padStart(2, '0')}-01`
    const dias = diffDays(inicio, hoje)
    const prevInicio = ymd(new Date(Date.UTC(y, m - 2, 1)))
    const ultimoPrev = ymd(new Date(Date.UTC(y, m - 1, 0)))
    const prevFim = addDays(prevInicio, dias - 1) <= ultimoPrev ? addDays(prevInicio, dias - 1) : ultimoPrev
    return { key, label: MESES[m - 1] + ' (até hoje)', inicio, fim: hoje, prevInicio, prevFim, dias, comparacao: `vs mesmos dias de ${MESES[(m + 10) % 12]}` }
  }
  if (key === 'mesant') {
    const inicio = ymd(new Date(Date.UTC(y, m - 2, 1)))
    const fim = ymd(new Date(Date.UTC(y, m - 1, 0)))
    const prevInicio = ymd(new Date(Date.UTC(y, m - 3, 1)))
    const prevFim = ymd(new Date(Date.UTC(y, m - 2, 0)))
    return { key, label: MESES[(m + 10) % 12], inicio, fim, prevInicio, prevFim, dias: diffDays(inicio, fim), comparacao: `vs ${MESES[(m + 9) % 12]}` }
  }
  const n = key === '7d' ? 7 : key === '14d' ? 14 : 30
  const inicio = addDays(ontem, -(n - 1))
  return { key, label: `últimos ${n} dias`, inicio, fim: ontem, prevInicio: addDays(inicio, -n), prevFim: addDays(inicio, -1), dias: n, comparacao: `vs ${n} dias anteriores` }
}

// ───────────────────────────── cliente ─────────────────────────────
type Row = Record<string, any>

let tokenCache: { token: string; exp: number } | null = null
async function accessToken(): Promise<string | null> {
  const { GOOGLE_ADS_CLIENT_ID, GOOGLE_ADS_CLIENT_SECRET, GOOGLE_ADS_REFRESH_TOKEN } = process.env
  if (!GOOGLE_ADS_CLIENT_ID || !GOOGLE_ADS_CLIENT_SECRET || !GOOGLE_ADS_REFRESH_TOKEN) return null
  if (tokenCache && tokenCache.exp > Date.now() + 60_000) return tokenCache.token
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
  if (!j.access_token) return null
  tokenCache = { token: j.access_token, exp: Date.now() + Number(j.expires_in ?? 3600) * 1000 }
  return tokenCache.token
}

export function conectado(): boolean {
  const e = process.env
  return !!(e.GOOGLE_ADS_CLIENT_ID && e.GOOGLE_ADS_CLIENT_SECRET && e.GOOGLE_ADS_REFRESH_TOKEN && e.GOOGLE_ADS_CUSTOMER_ID)
}

// semáforo de concorrência: no máximo 2 chamadas em voo
let emVoo = 0
const fila: Array<() => void> = []
async function vaga<T>(fn: () => Promise<T>): Promise<T> {
  // quem espera recebe a vaga direto de quem termina (sem decrementar/incrementar no meio,
  // para um terceiro chamador não "furar" a fila entre os dois passos)
  if (emVoo >= 2) await new Promise<void>((r) => fila.push(r))
  else emVoo++
  try {
    return await fn()
  } finally {
    const proximo = fila.shift()
    if (proximo) proximo()
    else emVoo--
  }
}

async function gaqlRaw(query: string): Promise<Row[]> {
  const token = await accessToken()
  const cid = (process.env.GOOGLE_ADS_CUSTOMER_ID ?? '').replace(/\D/g, '')
  if (!token || !cid) throw new Error('Google Ads sem credenciais')
  const headers: Record<string, string> = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
  if (process.env.GOOGLE_ADS_DEVELOPER_TOKEN) headers['developer-token'] = process.env.GOOGLE_ADS_DEVELOPER_TOKEN
  if (process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID) headers['login-customer-id'] = process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID.replace(/\D/g, '')
  const url = `https://googleads.googleapis.com/${API_VERSION}/customers/${cid}/googleAds:search`
  let ultimo = ''
  for (let tentativa = 0; tentativa < 3; tentativa++) {
    const res = await vaga(() => fetch(url, { method: 'POST', headers, body: JSON.stringify({ query }), cache: 'no-store' }))
    if (res.ok) {
      const j = await res.json()
      return (j.results ?? []) as Row[]
    }
    ultimo = `${res.status} ${(await res.text()).slice(0, 300)}`
    if (res.status < 500 && res.status !== 429) break
    await new Promise((r) => setTimeout(r, 500 * (tentativa + 1)))
  }
  throw new Error(`googleAds:search falhou: ${ultimo}`)
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
    console.error('[painel]', key, e instanceof Error ? e.message : e)
    return null
  }
}

const n = (v: unknown) => Number(v ?? 0)
const reais = (micros: unknown) => n(micros) / 1e6
const conv = (v: unknown) => Math.round(n(v) * 10) / 10
const ATIVAS = "campaign.status != 'REMOVED'"

// ───────────────────────────── consultas ─────────────────────────────
export type Tot = { gasto: number; cliques: number; impressoes: number; contatos: number }
export type PontoDia = Tot & { data: string }
export type Serie = { dias: PontoDia[]; atual: Tot; anterior: Tot; janela: Janela }

const tot0 = (): Tot => ({ gasto: 0, cliques: 0, impressoes: 0, contatos: 0 })
function soma(a: Tot, b: Tot): Tot {
  return { gasto: a.gasto + b.gasto, cliques: a.cliques + b.cliques, impressoes: a.impressoes + b.impressoes, contatos: a.contatos + b.contatos }
}

/** Gasto, cliques, impressões e contatos por dia, cobrindo o período e o anterior. */
export function getSerie(j: Janela): Promise<Serie | null> {
  return cached(`serie:${j.prevInicio}:${j.fim}`, async () => {
    const rows = await gaqlRaw(
      `SELECT segments.date, metrics.cost_micros, metrics.clicks, metrics.impressions, metrics.conversions FROM campaign WHERE segments.date BETWEEN '${j.prevInicio}' AND '${j.fim}' AND ${ATIVAS}`
    )
    const porDia = new Map<string, Tot>()
    for (const r of rows) {
      const d = r.segments?.date as string
      const t: Tot = { gasto: reais(r.metrics?.costMicros), cliques: n(r.metrics?.clicks), impressoes: n(r.metrics?.impressions), contatos: conv(r.metrics?.conversions) }
      porDia.set(d, soma(porDia.get(d) ?? tot0(), t))
    }
    const dias: PontoDia[] = []
    let atual = tot0()
    let anterior = tot0()
    for (let d = j.prevInicio; d <= j.fim; d = addDays(d, 1)) {
      const t = porDia.get(d) ?? tot0()
      if (d >= j.inicio) {
        dias.push({ data: d, ...t })
        atual = soma(atual, t)
      } else if (d <= j.prevFim) anterior = soma(anterior, t)
    }
    return { dias, atual, anterior, janela: j }
  })
}

export type CampanhaPeriodo = Tot & { nome: string; status: string }
/** Totais por campanha no período (tabela "detalhe por campanha"). */
export function getCampanhasPeriodo(j: Janela): Promise<CampanhaPeriodo[] | null> {
  return cached(`campPer:${j.inicio}:${j.fim}`, async () => {
    const rows = await gaqlRaw(
      `SELECT campaign.name, campaign.status, metrics.cost_micros, metrics.clicks, metrics.impressions, metrics.conversions FROM campaign WHERE segments.date BETWEEN '${j.inicio}' AND '${j.fim}' AND ${ATIVAS} ORDER BY metrics.cost_micros DESC`
    )
    return rows.map((r) => ({
      nome: r.campaign?.name ?? '—',
      status: r.campaign?.status ?? '',
      gasto: reais(r.metrics?.costMicros),
      cliques: n(r.metrics?.clicks),
      impressoes: n(r.metrics?.impressions),
      contatos: conv(r.metrics?.conversions),
    }))
  })
}

export type Campanha = {
  id: string
  nome: string
  status: 'ENABLED' | 'PAUSED' | string
  orcamentoDia: number
  cpaAlvo: number | null
  lances: string
  aiMax: boolean
}
export function getCampanhas(): Promise<Campanha[] | null> {
  return cached('campanhas', async () => {
    const rows = await gaqlRaw(
      `SELECT campaign.id, campaign.name, campaign.status, campaign.ai_max_setting.enable_ai_max, campaign_budget.amount_micros, campaign.maximize_conversions.target_cpa_micros, campaign.bidding_strategy_type FROM campaign WHERE ${ATIVAS}`
    )
    return rows.map((r) => ({
      id: String(r.campaign?.id),
      nome: r.campaign?.name ?? '—',
      status: r.campaign?.status ?? '',
      orcamentoDia: reais(r.campaignBudget?.amountMicros),
      cpaAlvo: r.campaign?.maximizeConversions?.targetCpaMicros ? reais(r.campaign.maximizeConversions.targetCpaMicros) : null,
      lances: r.campaign?.biddingStrategyType ?? '',
      aiMax: !!r.campaign?.aiMaxSetting?.enableAiMax,
    }))
  })
}

export type Keyword = { texto: string; tipo: 'ampla' | 'frase' | 'exata'; status: string; iq: number | null; cliques: number; contatos: number; gasto: number; impressoes: number }
const TIPO: Record<string, Keyword['tipo']> = { BROAD: 'ampla', PHRASE: 'frase', EXACT: 'exata' }
export function getKeywords(j: Janela): Promise<Keyword[] | null> {
  return cached(`kw:${j.inicio}:${j.fim}`, async () => {
    const rows = await gaqlRaw(
      `SELECT ad_group_criterion.keyword.text, ad_group_criterion.keyword.match_type, ad_group_criterion.status, ad_group_criterion.quality_info.quality_score, metrics.cost_micros, metrics.clicks, metrics.impressions, metrics.conversions FROM keyword_view WHERE segments.date BETWEEN '${j.inicio}' AND '${j.fim}' AND ad_group_criterion.negative = FALSE AND metrics.impressions > 0 AND ${ATIVAS} ORDER BY metrics.cost_micros DESC LIMIT 40`
    )
    return rows.map((r) => {
      const c = r.adGroupCriterion ?? {}
      const iq = n(c.qualityInfo?.qualityScore)
      return {
        texto: c.keyword?.text ?? '—',
        tipo: TIPO[c.keyword?.matchType] ?? 'ampla',
        status: c.status ?? '',
        iq: iq > 0 ? iq : null,
        cliques: n(r.metrics?.clicks),
        contatos: conv(r.metrics?.conversions),
        gasto: reais(r.metrics?.costMicros),
        impressoes: n(r.metrics?.impressions),
      }
    })
  })
}

export type Termo = { termo: string; cliques: number; contatos: number; gasto: number; impressoes: number }
export function getTermos(inicio: string, fim: string, limite = 60): Promise<Termo[] | null> {
  return cached(`termos:${inicio}:${fim}:${limite}`, async () => {
    const rows = await gaqlRaw(
      `SELECT search_term_view.search_term, metrics.cost_micros, metrics.clicks, metrics.impressions, metrics.conversions FROM search_term_view WHERE segments.date BETWEEN '${inicio}' AND '${fim}' AND metrics.clicks > 0 AND ${ATIVAS} ORDER BY metrics.cost_micros DESC LIMIT ${limite}`
    )
    return rows.map((r) => ({
      termo: r.searchTermView?.searchTerm ?? '—',
      cliques: n(r.metrics?.clicks),
      contatos: conv(r.metrics?.conversions),
      gasto: reais(r.metrics?.costMicros),
      impressoes: n(r.metrics?.impressions),
    }))
  })
}

export type Negativa = { texto: string; tipo: 'ampla' | 'frase' | 'exata' }
/** Palavras-chave negativas das campanhas (para marcar termos já bloqueados). */
export function getNegativas(): Promise<Negativa[] | null> {
  return cached('negativas', async () => {
    const rows = await gaqlRaw(
      `SELECT campaign_criterion.keyword.text, campaign_criterion.keyword.match_type FROM campaign_criterion WHERE campaign_criterion.negative = TRUE AND campaign_criterion.type = 'KEYWORD' AND ${ATIVAS}`
    )
    return rows.map((r) => ({ texto: String(r.campaignCriterion?.keyword?.text ?? '').toLowerCase().trim(), tipo: TIPO[r.campaignCriterion?.keyword?.matchType] ?? 'ampla' })).filter((x) => x.texto)
  })
}
/** Aproximação da regra do Google: exata = igual; frase = sequência inteira dentro do termo; ampla = todas as palavras presentes. */
export function negativada(termo: string, negs: Negativa[]): boolean {
  const t = termo.toLowerCase().trim()
  const palavras = t.split(/\s+/)
  return negs.some((n) => {
    if (n.tipo === 'exata') return t === n.texto
    if (n.tipo === 'frase') return (' ' + palavras.join(' ') + ' ').includes(' ' + n.texto + ' ')
    return n.texto.split(/\s+/).every((p) => palavras.includes(p))
  })
}

export type Fatia = { nome: string; gasto: number; cliques: number; contatos: number }
const IDADE: Record<string, string> = {
  AGE_RANGE_18_24: '18 a 24',
  AGE_RANGE_25_34: '25 a 34',
  AGE_RANGE_35_44: '35 a 44',
  AGE_RANGE_45_54: '45 a 54',
  AGE_RANGE_55_64: '55 a 64',
  AGE_RANGE_65_UP: '65 ou mais',
  AGE_RANGE_UNDETERMINED: 'Não informada',
}
export function getIdade(j: Janela): Promise<Fatia[] | null> {
  return cached(`idade:${j.inicio}:${j.fim}`, async () => {
    const rows = await gaqlRaw(
      `SELECT ad_group_criterion.age_range.type, metrics.cost_micros, metrics.clicks, metrics.conversions FROM age_range_view WHERE segments.date BETWEEN '${j.inicio}' AND '${j.fim}' AND ${ATIVAS}`
    )
    const m = new Map<string, Fatia>()
    for (const r of rows) {
      const k = r.adGroupCriterion?.ageRange?.type ?? 'AGE_RANGE_UNDETERMINED'
      const f = m.get(k) ?? { nome: IDADE[k] ?? k, gasto: 0, cliques: 0, contatos: 0 }
      f.gasto += reais(r.metrics?.costMicros)
      f.cliques += n(r.metrics?.clicks)
      f.contatos += conv(r.metrics?.conversions)
      m.set(k, f)
    }
    return Object.keys(IDADE).filter((k) => m.has(k)).map((k) => m.get(k)!)
  })
}
const GENERO: Record<string, string> = { FEMALE: 'Mulheres', MALE: 'Homens', UNDETERMINED: 'Não informado' }
export function getGenero(j: Janela): Promise<Fatia[] | null> {
  return cached(`genero:${j.inicio}:${j.fim}`, async () => {
    const rows = await gaqlRaw(
      `SELECT ad_group_criterion.gender.type, metrics.cost_micros, metrics.clicks, metrics.conversions FROM gender_view WHERE segments.date BETWEEN '${j.inicio}' AND '${j.fim}' AND ${ATIVAS}`
    )
    const m = new Map<string, Fatia>()
    for (const r of rows) {
      const k = r.adGroupCriterion?.gender?.type ?? 'UNDETERMINED'
      const f = m.get(k) ?? { nome: GENERO[k] ?? k, gasto: 0, cliques: 0, contatos: 0 }
      f.gasto += reais(r.metrics?.costMicros)
      f.cliques += n(r.metrics?.clicks)
      f.contatos += conv(r.metrics?.conversions)
      m.set(k, f)
    }
    return ['FEMALE', 'MALE', 'UNDETERMINED'].filter((k) => m.has(k)).map((k) => m.get(k)!)
  })
}

export type Segmentos = { dispositivo: Fatia[]; hora: Fatia[]; diaSemana: Fatia[] }
const DISP: Record<string, string> = { MOBILE: 'Celular', DESKTOP: 'Computador', TABLET: 'Tablet', CONNECTED_TV: 'TV', OTHER: 'Outro' }
const DOW = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']
const DOW_PT: Record<string, string> = { MONDAY: 'Segunda', TUESDAY: 'Terça', WEDNESDAY: 'Quarta', THURSDAY: 'Quinta', FRIDAY: 'Sexta', SATURDAY: 'Sábado', SUNDAY: 'Domingo' }
/** Dispositivo, hora e dia da semana numa consulta só (agregados em código). */
export function getSegmentos(j: Janela): Promise<Segmentos | null> {
  return cached(`seg:${j.inicio}:${j.fim}`, async () => {
    const rows = await gaqlRaw(
      `SELECT segments.device, segments.hour, segments.day_of_week, metrics.cost_micros, metrics.clicks, metrics.conversions FROM campaign WHERE segments.date BETWEEN '${j.inicio}' AND '${j.fim}' AND ${ATIVAS}`
    )
    const disp = new Map<string, Fatia>()
    const hora: Fatia[] = Array.from({ length: 24 }, (_, h) => ({ nome: `${h}h`, gasto: 0, cliques: 0, contatos: 0 }))
    const dow = new Map<string, Fatia>()
    for (const r of rows) {
      const g = reais(r.metrics?.costMicros), c = n(r.metrics?.clicks), v = conv(r.metrics?.conversions)
      const dk = r.segments?.device ?? 'OTHER'
      const d = disp.get(dk) ?? { nome: DISP[dk] ?? dk, gasto: 0, cliques: 0, contatos: 0 }
      d.gasto += g; d.cliques += c; d.contatos += v; disp.set(dk, d)
      const h = hora[n(r.segments?.hour)]
      if (h) { h.gasto += g; h.cliques += c; h.contatos += v }
      const wk = r.segments?.dayOfWeek ?? ''
      const w = dow.get(wk) ?? { nome: DOW_PT[wk] ?? wk, gasto: 0, cliques: 0, contatos: 0 }
      w.gasto += g; w.cliques += c; w.contatos += v; dow.set(wk, w)
    }
    const arred = (f: Fatia): Fatia => ({ ...f, contatos: Math.round(f.contatos * 10) / 10 })
    return {
      dispositivo: ['MOBILE', 'DESKTOP', 'TABLET', 'CONNECTED_TV', 'OTHER'].filter((k) => disp.has(k)).map((k) => arred(disp.get(k)!)),
      hora: hora.map(arred),
      diaSemana: DOW.filter((k) => dow.has(k)).map((k) => arred(dow.get(k)!)),
    }
  })
}

export type Anuncio = { id: string; titulo1: string; titulos: string[]; status: string; forca: string; cliques: number; contatos: number; gasto: number; impressoes: number }
const FORCA: Record<string, string> = { EXCELLENT: 'Excelente', GOOD: 'Boa', AVERAGE: 'Média', POOR: 'Fraca', PENDING: 'Pendente', NO_ADS: '—', UNSPECIFIED: '—', UNKNOWN: '—' }
export function getAnuncios(j: Janela): Promise<Anuncio[] | null> {
  return cached(`ads:${j.inicio}:${j.fim}`, async () => {
    const rows = await gaqlRaw(
      `SELECT ad_group_ad.ad.id, ad_group_ad.status, ad_group_ad.ad_strength, ad_group_ad.ad.responsive_search_ad.headlines, metrics.cost_micros, metrics.clicks, metrics.impressions, metrics.conversions FROM ad_group_ad WHERE segments.date BETWEEN '${j.inicio}' AND '${j.fim}' AND ${ATIVAS}`
    )
    return rows
      .map((r) => {
        const hs: Array<{ text: string; pinnedField?: string }> = r.adGroupAd?.ad?.responsiveSearchAd?.headlines ?? []
        const fixo = hs.find((h) => h.pinnedField === 'HEADLINE_1') ?? hs[0]
        return {
          id: String(r.adGroupAd?.ad?.id ?? ''),
          titulo1: fixo?.text ?? '(sem título)',
          titulos: hs.map((h) => h.text),
          status: r.adGroupAd?.status ?? '',
          forca: FORCA[r.adGroupAd?.adStrength] ?? r.adGroupAd?.adStrength ?? '—',
          cliques: n(r.metrics?.clicks),
          contatos: conv(r.metrics?.conversions),
          gasto: reais(r.metrics?.costMicros),
          impressoes: n(r.metrics?.impressions),
        }
      })
      .sort((a, b) => b.gasto - a.gasto)
  })
}
