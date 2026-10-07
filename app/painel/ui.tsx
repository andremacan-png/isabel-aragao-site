// Componentes visuais do Painel de Tráfego 2.0 (componentes de servidor; sem estado no cliente).
import type { ReactNode } from 'react'
import { PERIODOS, type Fatia, type PeriodoKey } from './lib/googleAds'
import type { Alerta } from './lib/alertas'

export const brl = (v: number, dec = 2) => 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits: dec, maximumFractionDigits: dec })
export const brl0 = (v: number) => brl(v, 0)
export const pct = (v: number, dec = 1) => v.toLocaleString('pt-BR', { maximumFractionDigits: dec }) + '%'
export const num = (v: number) => v.toLocaleString('pt-BR', { maximumFractionDigits: 1 })
export const taxa = (a: number, b: number) => (b ? (a / b) * 100 : 0)

export const ABAS = ['resumo', 'google', 'site', 'pacientes'] as const
export type Aba = (typeof ABAS)[number]
export const SUBS = ['palavras', 'termos', 'publico', 'anuncios'] as const
export type Sub = (typeof SUBS)[number]
export function pick<T extends string>(v: string | undefined, opts: readonly T[], def: T): T {
  return (opts as readonly string[]).includes(v ?? '') ? (v as T) : def
}
export function href(periodo: PeriodoKey, aba: Aba, sub?: Sub) {
  return `/painel?periodo=${periodo}&aba=${aba}${sub ? `&sub=${sub}` : ''}`
}

// ───────────────────────────── casca ─────────────────────────────
const TABS: Array<{ aba: Aba; nome: string; sub: string }> = [
  { aba: 'resumo', nome: 'Resumo', sub: 'dez segundos' },
  { aba: 'google', nome: 'Google Ads', sub: 'palavras, termos, público' },
  { aba: 'site', nome: 'Site', sub: 'SEO · GA4 e Clarity em breve' },
  { aba: 'pacientes', nome: 'Pacientes', sub: 'custo por paciente' },
]

export function Shell({ periodo, aba, sub, label, comparacao, live, children }: { periodo: PeriodoKey; aba: Aba; sub: Sub; label: string; comparacao: string; live: boolean; children: ReactNode }) {
  return (
    <>
      <header className="pn-top">
        <div className="pn-top-in">
          <div className="pn-brandrow">
            <div className="pn-wordmark">
              <div className="pn-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#2A1300" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 17l5-6 4 4 5-8 4 5" />
                </svg>
              </div>
              <div>
                <h1>Painel de Tráfego 2.0</h1>
                <p>Dra. Isabel Aragão · {label}</p>
              </div>
            </div>
            <span className={`pn-live${live ? '' : ' off'}`}>
              <i aria-hidden="true" />
              {live ? 'Ao vivo' : 'Sem conexão'}
            </span>
          </div>
          <nav className="pn-periods" aria-label="Período">
            {(Object.keys(PERIODOS) as PeriodoKey[]).map((k) => (
              <a key={k} className={`pn-chip${k === periodo ? ' on' : ''}`} href={href(k, aba, aba === 'google' ? sub : undefined)} aria-current={k === periodo ? 'page' : undefined}>
                {PERIODOS[k]}
              </a>
            ))}
            <span className="pn-cmp">▲▼ {comparacao}</span>
          </nav>
          <nav className="pn-tabs" aria-label="Seções do painel">
            {TABS.map((t) => (
              <a key={t.aba} className={`pn-tab${t.aba === aba ? ' on' : ''}`} href={href(periodo, t.aba, t.aba === 'google' ? sub : undefined)} aria-current={t.aba === aba ? 'page' : undefined}>
                {t.nome}
                <small>{t.sub}</small>
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main className="pn-main">{children}</main>
    </>
  )
}

// ───────────────────────────── blocos ─────────────────────────────
export function Card({ titulo, sub, children, className = '' }: { titulo?: string; sub?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <div className={`pn-card ${className}`}>
      {titulo && <h2>{titulo}</h2>}
      {sub && <p className="pn-sub">{sub}</p>}
      {children}
    </div>
  )
}

export function Vazio({ texto }: { texto: string }) {
  return <div className="pn-empty">{texto}</div>
}

export function Delta({ atual, anterior, invert = false, neutral = false, texto }: { atual: number; anterior: number; invert?: boolean; neutral?: boolean; texto: string }) {
  if (!anterior) return <span className="pn-delta flat">sem base de comparação</span>
  const p = (atual - anterior) / anterior
  if (Math.abs(p) < 0.03) return <span className="pn-delta flat">▬ estável {texto}</span>
  const arrow = p > 0 ? '▲' : '▼'
  const good = invert ? p < 0 : p > 0
  const cls = neutral ? '' : good ? ' good' : ' bad'
  return (
    <span className={`pn-delta${cls}`}>
      {arrow} {Math.round(Math.abs(p) * 100)}% {texto}
    </span>
  )
}

export function Spark({ vals }: { vals: number[] }) {
  if (vals.length < 2) return null
  const W = 120, H = 34
  const max = Math.max(...vals), min = Math.min(...vals), range = max - min || 1
  const pts = vals.map((v, i) => [3 + (i * (W - 6)) / (vals.length - 1), H - 4 - ((v - min) / range) * (H - 10)] as const)
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ')
  const last = pts[pts.length - 1]
  return (
    <svg className="pn-spark" viewBox={`0 0 ${W} ${H}`} aria-hidden="true" style={{ color: 'var(--s-google)' }}>
      <path d={`${d} L${last[0].toFixed(1)} ${H} L3 ${H} Z`} fill="currentColor" opacity={0.12} />
      <path d={d} fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={last[0]} cy={last[1]} r={3.5} fill="currentColor" stroke="var(--surface)" strokeWidth={2} />
    </svg>
  )
}

export function Kpi({ eyebrow, valor, sufixo, children, nota }: { eyebrow: string; valor: string; sufixo?: string; children?: ReactNode; nota?: ReactNode }) {
  return (
    <div className="pn-card pn-kpi">
      <p className="pn-eyebrow">{eyebrow}</p>
      <div className="pn-val">
        {valor}
        {sufixo && <small>{sufixo}</small>}
      </div>
      {children && <div className="pn-foot">{children}</div>}
      {nota && <p className="pn-note">{nota}</p>}
    </div>
  )
}

export function Alertas({ itens }: { itens: Alerta[] }) {
  if (!itens.length) return null
  const ico: Record<Alerta['nivel'], string> = { ok: '✓', warn: '!', serious: '!', crit: '!' }
  return (
    <div>
      <p className="pn-eyebrow">Semáforo · checado a cada carregamento</p>
      <div className="pn-alerts">
        {itens.map((a, i) => (
          <div key={i} className={`pn-alert ${a.nivel === 'ok' ? '' : a.nivel}`}>
            <span className="pn-ico" aria-hidden="true">{ico[a.nivel]}</span>
            <div>
              <b>{a.titulo}</b>
              <span>{a.texto}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ───────────────────────────── gráficos ─────────────────────────────
function tickFmt(v: number, money: boolean) {
  return money ? 'R$ ' + Math.round(v).toLocaleString('pt-BR') : v.toLocaleString('pt-BR')
}
/** Colunas por período (gasto, contatos…). Tooltip nativo via <title>; tabela equivalente fica na página. */
export function Columns({ vals, labels, tips, money = false, height = 150, labelEvery, cls }: { vals: number[]; labels: string[]; tips: string[]; money?: boolean; height?: number; labelEvery?: number; cls?: (i: number) => string }) {
  const W = 640, H = height, padL = 44, padR = 8, padT = 14, padB = 24
  const iw = W - padL - padR, ih = H - padT - padB, n = Math.max(1, vals.length), slot = iw / n, bw = Math.min(24, slot * 0.62)
  const rawMax = Math.max(1, ...vals)
  const step = niceStep(rawMax / 2)
  const max = Math.max(step * 2, Math.ceil(rawMax / step) * step)
  const ticks = [0, max / 2, max]
  const every = labelEvery ?? (n <= 8 ? 1 : n <= 16 ? 2 : n <= 32 ? 5 : 10)
  return (
    <svg className="pn-chart" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={labels.length ? `${labels[0]} a ${labels[labels.length - 1]}` : ''}>
      {ticks.map((t) => {
        const y = padT + ih - (t / max) * ih
        return (
          <g key={t}>
            <line className="grid" x1={padL} x2={W - padR} y1={y} y2={y} />
            <text x={padL - 6} y={y + 3} textAnchor="end">{tickFmt(t, money)}</text>
          </g>
        )
      })}
      <line className="base" x1={padL} x2={W - padR} y1={padT + ih} y2={padT + ih} />
      {vals.map((v, i) => {
        const x = padL + i * slot + (slot - bw) / 2, hh = Math.max(0, (v / max) * ih), y = padT + ih - hh, r = Math.min(4, hh)
        const d = hh > 0 ? `M${x} ${padT + ih} V${y + r} a${r} ${r} 0 0 1 ${r} -${r} h${bw - 2 * r} a${r} ${r} 0 0 1 ${r} ${r} V${padT + ih} Z` : ''
        return (
          <g key={i}>
            <title>{tips[i]}</title>
            <rect className="hit" x={padL + i * slot} y={padT} width={slot} height={ih} />
            {d && <path className={`bar ${cls ? cls(i) : ''}`} d={d} />}
            {(i % every === 0 || i === n - 1) && n > 1 && (
              <text x={x + bw / 2} y={H - 7} textAnchor="middle">{labels[i]}</text>
            )}
            {n === 1 && <text x={x + bw / 2} y={H - 7} textAnchor="middle">{labels[i]}</text>}
          </g>
        )
      })}
    </svg>
  )
}
function niceStep(v: number) {
  if (v <= 0) return 1
  const p = Math.pow(10, Math.floor(Math.log10(v)))
  const f = v / p
  return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * p
}

export function HBars({ rows, fmt, max }: { rows: Array<{ nome: string; v: number; s?: string; cls?: string }>; fmt: (v: number) => string; max?: number }) {
  const m = max ?? Math.max(1, ...rows.map((r) => r.v))
  return (
    <div className="pn-hbar">
      {rows.map((r) => (
        <div key={r.nome} style={{ display: 'contents' }}>
          <div className="nm" title={r.nome}>{r.nome}</div>
          <div className="trk"><div className={`fil ${r.cls ?? ''}`} style={{ width: `${Math.max(1.5, (r.v / m) * 100)}%` }} /></div>
          <div className="v">{fmt(r.v)}{r.s && <small>{r.s}</small>}</div>
        </div>
      ))}
    </div>
  )
}

export function Funnel({ steps }: { steps: Array<{ nome: string; sub: string; v: number; accent?: boolean }> }) {
  const base = Math.max(1, steps[0]?.v ?? 1)
  return (
    <div className="pn-funnel">
      {steps.map((s) => (
        <div key={s.nome} className="pn-fstep">
          <div className="nm">{s.nome}<small>{s.sub}</small></div>
          <div className="trk"><div className={`fil ${s.accent ? 'accent' : ''}`} style={{ width: `${Math.max(7, (s.v / base) * 100)}%` }}>{num(s.v)}</div></div>
        </div>
      ))}
    </div>
  )
}

export function Hours({ horas }: { horas: Fatia[] }) {
  const max = Math.max(1, ...horas.map((h) => h.gasto))
  return (
    <>
      <div className="pn-hours">
        {horas.map((h, i) => {
          const p = Math.round((h.gasto / max) * 100)
          const bg = p < 15 ? undefined : `color-mix(in oklab, var(--s-google) ${Math.max(25, p)}%, var(--surface))`
          return (
            <div key={i} className={p > 55 ? 'dark' : ''} style={bg ? { background: bg } : undefined} title={`${i}h às ${i + 1}h · ${brl(h.gasto)} · ${num(h.contatos)} contatos`}>
              <span className="h">{i % 3 === 0 ? `${i}h` : ''}</span>
              {h.contatos ? num(h.contatos) : ''}
            </div>
          )
        })}
      </div>
      <div className="pn-scale">
        <span>menos gasto</span>
        <i style={{ background: 'var(--surface-2)' }} />
        <i style={{ background: 'color-mix(in oklab, var(--s-google) 35%, var(--surface))' }} />
        <i style={{ background: 'color-mix(in oklab, var(--s-google) 65%, var(--surface))' }} />
        <i style={{ background: 'var(--s-google)' }} />
        <span>mais gasto · número = contatos</span>
      </div>
    </>
  )
}

// ───────────────────────────── células ─────────────────────────────
export function Heat({ v, bom = 35, ruim = 60 }: { v: number | null; bom?: number; ruim?: number }) {
  if (v === null) return <span className="pn-heat none">sem contato</span>
  return <span className={`pn-heat ${v <= bom ? 'good' : v <= ruim ? 'warn' : 'crit'}`}>{brl(v)}</span>
}
export function IQ({ q }: { q: number | null }) {
  if (q === null) return <span className="pn-pill">sem dado</span>
  return (
    <>
      <span className={`pn-iq ${q <= 3 ? 'low' : q <= 6 ? 'mid' : ''}`} aria-hidden="true">
        {Array.from({ length: 10 }, (_, i) => <i key={i} className={i < q ? 'on' : ''} />)}
      </span>
      {q}/10
    </>
  )
}
export function Pill({ children, tom = '' }: { children: ReactNode; tom?: '' | 'good' | 'warn' | 'serious' | 'crit' | 'brand' }) {
  return <span className={`pn-pill ${tom}`}>{children}</span>
}
export function SubTabs({ periodo, sub }: { periodo: PeriodoKey; sub: Sub }) {
  const nomes: Record<Sub, string> = { palavras: 'Palavras-chave', termos: 'Termos de pesquisa', publico: 'Público', anuncios: 'Anúncios' }
  return (
    <nav className="pn-subtabs" aria-label="Visões do Google Ads">
      {SUBS.map((s) => (
        <a key={s} className={`pn-subtab${s === sub ? ' on' : ''}`} href={href(periodo, 'google', s)} aria-current={s === sub ? 'page' : undefined}>{nomes[s]}</a>
      ))}
    </nav>
  )
}
