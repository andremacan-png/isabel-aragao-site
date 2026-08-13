import type { Metadata } from 'next'
import { getPainelData, PERIODOS, type PeriodoKey } from './adsData'
import { getMetaData } from './metaAdsData'
import { getGscData } from './gscData'
import { getPainel2Series, getCustoConsultaCanais, type SerieTot } from './painel2Data'

export const metadata: Metadata = {
  title: 'Painel de Tráfego — Dra. Isabel',
  robots: { index: false, follow: false },
}

const brl = (n: number) => 'R$ ' + n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const brl0 = (n: number) => 'R$ ' + Math.round(n).toLocaleString('pt-BR')
const pct = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + '%'
const num = (n: number) => n.toLocaleString('pt-BR')

// ── ícones de linha (on-brand, sem emoji) ─────────────────────────────────────
function Icon({ path, className = 'w-[17px] h-[17px]' }: { path: React.ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" className={className}>
      {path}
    </svg>
  )
}
const IcInvest = <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
const IcChat = <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
const IcTarget = (
  <>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" />
  </>
)
const IcEye = (
  <>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="2.6" />
  </>
)
const IcClick = <path d="M9 3v6M6 6h6M14.5 13.5 21 21M12 10l9 3-4 2-2 4-3-9Z" />
const IcSearch = (
  <>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </>
)

// ── sparkline ────────────────────────────────────────────────────────────────
function sparkPoints(vals: number[], w = 92, h = 30, pad = 4): string {
  if (!vals.length) return ''
  const min = Math.min(...vals)
  const max = Math.max(...vals)
  const range = max - min || 1
  const n = vals.length
  return vals
    .map((v, i) => {
      const x = n === 1 ? w / 2 : (i / (n - 1)) * w
      const y = pad + (1 - (v - min) / range) * (h - 2 * pad)
      return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')
}
function Spark({ vals, color, w = 92 }: { vals: number[]; color: string; w?: number }) {
  const pts = sparkPoints(vals, w)
  if (!pts) return null
  return (
    <svg width={w} height={30} viewBox={`0 0 ${w} 30`} className="shrink-0">
      <polyline fill="none" stroke={color} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" points={pts} />
    </svg>
  )
}

// custo/contato por dia, carregando o último valor conhecido nos dias sem contato (linha limpa)
function cpcSeries(dias: { invest: number; contatos: number }[]): number[] {
  const media = (() => {
    const c = dias.reduce((s, d) => s + d.contatos, 0)
    const i = dias.reduce((s, d) => s + d.invest, 0)
    return c ? i / c : 0
  })()
  let last = media
  return dias.map((d) => {
    if (d.contatos > 0) last = d.invest / d.contatos
    return last
  })
}

// ── delta chip ▲/▼ ────────────────────────────────────────────────────────────
function delta(atual: number, anterior: number): number | null {
  if (!anterior) return null
  return (atual - anterior) / anterior
}
function Delta({ pct: p, invert = false, neutral = false }: { pct: number | null; invert?: boolean; neutral?: boolean }) {
  if (p === null) return null
  const abs = Math.abs(p)
  const label = `${Math.round(abs * 100)}%`
  if (abs < 0.03) {
    return (
      <span className="inline-flex items-center gap-1 text-[12.5px] font-extrabold px-2.5 py-1 rounded-full bg-[#F0ECE4] text-[#8a7f6e]">
        <span>▬</span> estável
      </span>
    )
  }
  const arrow = p > 0 ? '▲' : '▼'
  if (neutral) {
    return (
      <span className="inline-flex items-center gap-1 text-[12.5px] font-extrabold px-2.5 py-1 rounded-full bg-[#F0ECE4] text-[#8a7f6e]">
        <span>{arrow}</span> {label} vs anterior
      </span>
    )
  }
  const good = invert ? p < 0 : p > 0
  const cls = good ? 'bg-[#E7F5EC] text-[#1E7A3E]' : 'bg-[#FBEAE4] text-[#c0533a]'
  return (
    <span className={`inline-flex items-center gap-1 text-[12.5px] font-extrabold px-2.5 py-1 rounded-full ${cls}`}>
      <span>{arrow}</span> {label} vs anterior
    </span>
  )
}

// ── KPI-herói ─────────────────────────────────────────────────────────────────
function HeroKpi({
  icon,
  label,
  valor,
  chip,
  spark,
  star = false,
}: {
  icon: React.ReactNode
  label: string
  valor: string
  chip: React.ReactNode
  spark: React.ReactNode
  star?: boolean
}) {
  return (
    <div
      className={`rounded-[20px] border p-5 sm:p-6 ${
        star ? 'bg-gradient-to-br from-white via-white to-[#FFF7EC] border-[#F0D9AE]' : 'bg-white border-[#EBE3D6]'
      }`}
    >
      <div className="flex items-center gap-2 text-[#7a6ea0] text-[12px] font-bold uppercase tracking-[0.05em]">
        <span className="text-[#9b8fbe]">{icon}</span>
        {label}
      </div>
      <div className={`font-playfair font-extrabold text-[#12082a] mt-2 leading-none ${star ? 'text-[42px] sm:text-[46px]' : 'text-[38px] sm:text-[40px]'}`}>
        {valor}
      </div>
      <div className="flex items-center justify-between mt-3 gap-2">
        {chip}
        {spark}
      </div>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[12px] font-extrabold tracking-[0.09em] uppercase text-[#8a7aa8] mt-9 mb-3 px-0.5">{children}</p>
}

export default async function Painel2Page({ searchParams }: { searchParams: Promise<{ periodo?: string }> }) {
  const sp = await searchParams
  const periodo: PeriodoKey = sp.periodo && sp.periodo in PERIODOS ? (sp.periodo as PeriodoKey) : '30d'
  const [data, meta, gsc, serie] = await Promise.all([
    getPainelData(periodo),
    getMetaData(periodo),
    getGscData(),
    getPainel2Series(periodo),
  ])
  // Roda DEPOIS do bloco acima (não junto): assim a query de gasto do Google não
  // disputa o limite de concorrência do googleAds:search com getPainelData/série
  // (o token já fica em cache) e o custo por consulta para de oscilar.
  const canais = await getCustoConsultaCanais()
  const live = data.fonte === 'live'

  // Totais combinados (base — funções provadas, nunca quebram)
  const gInvest = data.total.investimento
  const gContatos = data.total.contatos
  const mInvest = meta?.total.investimento ?? 0
  const mContatos = meta?.total.conversas ?? 0
  const totalInvest = gInvest + mInvest
  const totalContatos = gContatos + mContatos
  const totalCpc = totalContatos ? totalInvest / totalContatos : 0

  // Deltas (fase 2) — vindos da série; se ausente, chips simplesmente não aparecem
  const cpcOf = (t: SerieTot) => (t.contatos ? t.invest / t.contatos : 0)
  const dInvest = serie ? delta(serie.combinado.atual.invest, serie.combinado.anterior.invest) : null
  const dContatos = serie ? delta(serie.combinado.atual.contatos, serie.combinado.anterior.contatos) : null
  const dCpc = serie ? delta(cpcOf(serie.combinado.atual), cpcOf(serie.combinado.anterior)) : null

  // Sparklines (fase 3)
  const dias = serie?.combinado.dias ?? []
  const sparkInvest = dias.map((d) => d.invest)
  const sparkContatos = dias.map((d) => d.contatos)
  const sparkCpc = cpcSeries(dias)

  // Custo por consulta fechada · por canal: só dá pra dizer "mais barato" quando AMBOS gastaram
  const podeComparar = !!canais && canais.meta.invest > 0 && canais.google.invest > 0 && canais.meta.consultas > 0 && canais.google.consultas > 0
  const metaMaisBarato = podeComparar && canais!.meta.custo <= canais!.google.custo
  const googleMaisBarato = podeComparar && canais!.google.custo < canais!.meta.custo

  // Card Google × Meta
  const temComparacao = !!meta && mContatos > 0 && gContatos > 0
  const gShareVerba = totalInvest ? gInvest / totalInvest : 0
  const mShareVerba = totalInvest ? mInvest / totalInvest : 0
  const mShareContatos = totalContatos ? mContatos / totalContatos : 0
  const gShareContatos = totalContatos ? gContatos / totalContatos : 0
  const gCpc = data.total.custoContato
  const mCpc = meta?.total.custoConversa ?? 0
  const ratio = mCpc ? gCpc / mCpc : 0
  const dGoogleCpc = serie?.google ? delta(cpcOf(serie.google.atual), cpcOf(serie.google.anterior)) : null
  const dMetaCpc = serie?.meta ? delta(cpcOf(serie.meta.atual), cpcOf(serie.meta.anterior)) : null

  // Barras: custo por contato por campanha (Google + Meta juntas, menor→maior)
  const barras = [
    ...data.campanhas.filter((c) => c.conversoes > 0).map((c) => ({ nome: `Google · ${c.nome}`, custo: c.custoConv, canal: 'g' as const })),
    ...(meta?.campanhas.filter((c) => c.conversas > 0).map((c) => ({ nome: `Meta · ${c.nome}`, custo: c.custoConversa, canal: 'm' as const })) ?? []),
  ].sort((a, b) => a.custo - b.custo)
  const maxBar = Math.max(1, ...barras.map((b) => b.custo))

  return (
    <div className="min-h-screen bg-[#F4EFE8] font-sans text-[#12082a]">
      {/* Faixa de topo */}
      <div className="bg-gradient-to-r from-[#160c33] via-[#241653] to-[#2f2064] px-5 sm:px-10 py-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-[13px] bg-[#F5A623]/15 flex items-center justify-center shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <path d="M7 14l4-4 3 3 5-6" />
            </svg>
          </div>
          <div>
            <h1 className="font-playfair text-white text-lg sm:text-[23px] font-extrabold leading-tight">Painel de Tráfego — Dra. Isabel</h1>
            <p className="text-[#C9BEDE] text-[13px] font-medium mt-0.5">
              {live ? `Ao vivo · ${data.periodoLabel}` : `Dados ${data.periodoLabel}`}
            </p>
          </div>
        </div>
        <span
          className={`hidden sm:inline-flex items-center gap-2 text-[12.5px] font-bold rounded-full px-3 py-1.5 border ${
            live ? 'text-[#9be6b0] border-[#9be6b0]/35' : 'text-[#C9BEDE] border-white/20'
          }`}
        >
          {live && <span className="w-[7px] h-[7px] rounded-full bg-[#39d16f]" />}
          {live ? 'AO VIVO' : 'uso interno'}
        </span>
      </div>

      <div className="max-w-[980px] mx-auto px-5 sm:px-10 pt-6 pb-12">
        {/* Filtros de período */}
        {live && (
          <div className="flex flex-wrap items-center gap-2">
            {(Object.keys(PERIODOS) as PeriodoKey[]).map((k) => (
              <a
                key={k}
                href={`/painel?periodo=${k}`}
                className={`text-[13px] font-semibold px-3.5 py-2 rounded-full border transition-colors ${
                  k === periodo ? 'bg-[#160c33] text-white border-[#160c33]' : 'bg-white text-[#3b2b5c] border-[#E3D9CB] hover:border-[#695192]'
                }`}
              >
                {PERIODOS[k].label}
              </a>
            ))}
            {serie && (
              <span className="ml-auto inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#695192] bg-[#F3ECF9] border border-[#dcccee] rounded-full px-3 py-1.5">
                ▲▼ comparado ao período anterior
              </span>
            )}
          </div>
        )}

        {/* KPIs-herói */}
        <SectionLabel>Visão geral — tráfego pago{meta ? ' (Google + Meta)' : ''}</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.25fr] gap-4">
          <HeroKpi
            icon={<Icon path={IcInvest} />}
            label="Investimento"
            valor={brl0(totalInvest)}
            chip={<Delta pct={dInvest} neutral />}
            spark={<Spark vals={sparkInvest} color="#c9bfe0" />}
          />
          <HeroKpi
            icon={<Icon path={IcChat} />}
            label="Contatos"
            valor={num(Math.round(totalContatos))}
            chip={<Delta pct={dContatos} />}
            spark={<Spark vals={sparkContatos} color="#8fd0a6" />}
          />
          <HeroKpi
            star
            icon={<Icon path={IcTarget} />}
            label="Custo por contato"
            valor={brl(totalCpc)}
            chip={<Delta pct={dCpc} invert />}
            spark={<Spark vals={sparkCpc} color={dCpc !== null && dCpc <= 0 ? '#8fd0a6' : '#d9a08f'} w={104} />}
          />
        </div>

        {/* Custo por CONSULTA FECHADA · por canal (mês corrente) */}
        {canais && (
          <>
            <SectionLabel>Custo por consulta fechada · por canal ({canais.label}, do dia 1 até hoje)</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <CanalConsultaCard nome="Meta · Instagram" dot="#E8823A" canal={canais.meta} badge={metaMaisBarato} />
              <CanalConsultaCard nome="Google · Site" dot="#695192" canal={canais.google} badge={googleMaisBarato} />
              <CanalConsultaCard nome="Total (Google + Meta)" dot="" canal={canais.total} />
            </div>
            <p className="text-[12px] text-[#9a8f86] mt-3">
              Consultas fechadas contadas por origem (Instagram × site) de 1º de {canais.label} até hoje, sobre a verba de cada canal no mesmo período. Um canal com <b>R$ 0 em anúncios</b> teve consultas vindas do orgânico (SEO/direto), sem custo de mídia. É amostra pequena no começo do mês, então o valor por consulta ainda oscila bastante.
            </p>
          </>
        )}

        {/* Google × Meta */}
        {temComparacao && (
          <>
            <SectionLabel>Google × Meta — quem traz mais barato</SectionLabel>
            <div className="bg-white border border-[#EBE3D6] rounded-[22px] p-6 sm:p-7">
              <p className="font-playfair text-[19px] sm:text-[22px] font-extrabold leading-snug">
                O <b className="text-[#E8823A]">Meta</b> traz <b>{Math.round(mShareContatos * 100)}% dos contatos</b> com{' '}
                <b>{Math.round(mShareVerba * 100)}% da verba</b>
                {ratio >= 1.15 && (
                  <>
                    {' '}— <b>{ratio.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}× mais barato</b> que o Google
                  </>
                )}
                .
              </p>
              <p className="text-[#6b6076] text-[14px] mt-1.5 mb-5">
                A verba está invertida em relação ao resultado: o Google consome o orçamento, o Meta entrega os contatos.
              </p>

              {/* barras de inversão */}
              <div className="mb-4">
                <div className="flex justify-between text-[12.5px] font-bold uppercase tracking-[0.04em] text-[#6b6076] mb-1.5">
                  <span>Onde vai a verba</span>
                  <span>{brl0(totalInvest)}</span>
                </div>
                <div className="h-[26px] rounded-lg overflow-hidden flex text-[12.5px] font-extrabold text-white">
                  <div className="bg-[#695192] flex items-center pl-3" style={{ width: `${Math.max(6, gShareVerba * 100)}%` }}>
                    Google · {Math.round(gShareVerba * 100)}%
                  </div>
                  <div className="bg-[#E8823A] flex items-center pl-3" style={{ width: `${Math.max(6, mShareVerba * 100)}%` }}>
                    Meta · {Math.round(mShareVerba * 100)}%
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[12.5px] font-bold uppercase tracking-[0.04em] text-[#6b6076] mb-1.5">
                  <span>De onde vêm os contatos</span>
                  <span>{num(Math.round(totalContatos))}</span>
                </div>
                <div className="h-[26px] rounded-lg overflow-hidden flex text-[12.5px] font-extrabold text-white">
                  <div className="bg-[#695192] flex items-center pl-3" style={{ width: `${Math.max(6, gShareContatos * 100)}%` }}>
                    {Math.round(gShareContatos * 100)}%
                  </div>
                  <div className="bg-[#E8823A] flex items-center pl-3" style={{ width: `${Math.max(6, mShareContatos * 100)}%` }}>
                    Meta · {Math.round(mShareContatos * 100)}%
                  </div>
                </div>
              </div>

              {/* sub-cards por canal */}
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="border border-[#EFE7DA] rounded-2xl p-4 sm:p-5">
                  <div className="flex items-center gap-2 font-extrabold text-[15px] mb-3">
                    <span className="w-2.5 h-2.5 rounded-[3px] bg-[#695192]" /> Google Ads
                  </div>
                  <div className="flex justify-between gap-2">
                    <div>
                      <p className="text-[11px] text-[#8a7f92] font-semibold uppercase tracking-[0.03em]">Investimento</p>
                      <p className="font-playfair text-[21px] font-extrabold mt-0.5">{brl0(gInvest)}</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-[#8a7f92] font-semibold uppercase tracking-[0.03em]">Contatos</p>
                      <p className="font-playfair text-[21px] font-extrabold mt-0.5">{Math.round(gContatos)}</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-[#8a7f92] font-semibold uppercase tracking-[0.03em]">Custo/contato</p>
                      <p className="font-playfair text-[21px] font-extrabold mt-0.5 text-[#695192]">{gContatos ? brl(gCpc) : '—'}</p>
                      {dGoogleCpc !== null && <div className="mt-1"><Delta pct={dGoogleCpc} invert /></div>}
                    </div>
                  </div>
                </div>
                <div className="border border-[#F1DDBB] bg-[#FFF8EF] rounded-2xl p-4 sm:p-5">
                  <div className="flex items-center gap-2 font-extrabold text-[15px] mb-3">
                    <span className="w-2.5 h-2.5 rounded-[3px] bg-[#E8823A]" /> Meta · Instagram
                  </div>
                  <div className="flex justify-between gap-2">
                    <div>
                      <p className="text-[11px] text-[#8a7f92] font-semibold uppercase tracking-[0.03em]">Investimento</p>
                      <p className="font-playfair text-[21px] font-extrabold mt-0.5">{brl0(mInvest)}</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-[#8a7f92] font-semibold uppercase tracking-[0.03em]">Conversas</p>
                      <p className="font-playfair text-[21px] font-extrabold mt-0.5">{Math.round(mContatos)}</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-[#8a7f92] font-semibold uppercase tracking-[0.03em]">Custo/conversa</p>
                      <p className="font-playfair text-[21px] font-extrabold mt-0.5 text-[#E8823A]">{mContatos ? brl(mCpc) : '—'}</p>
                      {dMetaCpc !== null && <div className="mt-1"><Delta pct={dMetaCpc} invert /></div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Custo por contato por campanha */}
        {barras.length > 0 && (
          <>
            <SectionLabel>Custo por contato por campanha — menor é melhor</SectionLabel>
            <div className="bg-white border border-[#EBE3D6] rounded-[22px] p-6 sm:p-7 space-y-4">
              {barras.map((b, i) => {
                const isBest = i === 0
                const isWorst = i === barras.length - 1 && barras.length > 2
                const cor = isBest ? '#39a866' : isWorst ? '#c0533a' : b.canal === 'g' ? '#695192' : '#E8823A'
                const dot = b.canal === 'g' ? '#695192' : '#E8823A'
                return (
                  <div key={b.nome}>
                    <div className="flex justify-between text-[14px] mb-1.5">
                      <span className="font-semibold flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-[3px] inline-block" style={{ background: dot }} />
                        {b.nome}
                        {isBest && (
                          <span className="text-[10.5px] font-extrabold px-2 py-0.5 rounded-full bg-[#E7F5EC] text-[#1E7A3E] uppercase tracking-[0.04em]">campeã</span>
                        )}
                      </span>
                      <span className="font-extrabold" style={{ color: isBest ? '#1E7A3E' : isWorst ? '#c0533a' : undefined }}>{brl(b.custo)}</span>
                    </div>
                    <div className="h-[13px] bg-[#F1ECE3] rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${(b.custo / maxBar) * 100}%`, background: cor }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}

        {/* Detalhe Google */}
        <SectionLabel>Detalhe por campanha — Google Ads</SectionLabel>
        <div className="bg-white border border-[#EBE3D6] rounded-[22px] overflow-x-auto">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="text-left text-[#8a7f92] border-b border-[#EBE3D6]">
                <th className="py-3 px-4 font-semibold">Campanha</th>
                <th className="py-3 px-4 font-semibold text-right">Cliques</th>
                <th className="py-3 px-4 font-semibold text-right">Contatos</th>
                <th className="py-3 px-4 font-semibold text-right">Custo</th>
                <th className="py-3 px-4 font-semibold text-right">Custo/contato</th>
                <th className="py-3 px-4 font-semibold text-right">Taxa conv.</th>
              </tr>
            </thead>
            <tbody>
              {data.campanhas.map((c) => (
                <tr key={c.nome} className="border-b border-[#F2EFE8] last:border-0">
                  <td className="py-3 px-4 font-medium">{c.nome}</td>
                  <td className="py-3 px-4 text-right text-[#5b5566]">{c.cliques.toLocaleString('pt-BR')}</td>
                  <td className="py-3 px-4 text-right text-[#5b5566]">{Math.round(c.conversoes)}</td>
                  <td className="py-3 px-4 text-right text-[#5b5566]">{brl(c.custo)}</td>
                  <td className="py-3 px-4 text-right text-[#5b5566]">{c.conversoes ? brl(c.custoConv) : '—'}</td>
                  <td className="py-3 px-4 text-right text-[#5b5566]">{pct(c.taxa)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Meta */}
        {meta && (
          <>
            <SectionLabel>Detalhe por campanha — Meta · Instagram</SectionLabel>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              <HeroKpiMini icon={<Icon path={IcInvest} />} label="Investimento" valor={brl0(meta.total.investimento)} />
              <HeroKpiMini icon={<Icon path={IcChat} />} label="Conversas" valor={num(meta.total.conversas)} />
              <HeroKpiMini icon={<Icon path={IcTarget} />} label="Custo / conversa" valor={meta.total.conversas ? brl(meta.total.custoConversa) : '—'} />
              <HeroKpiMini icon={<Icon path={IcEye} />} label="Alcance" valor={num(meta.total.alcance)} />
            </div>
            <div className="bg-white border border-[#EBE3D6] rounded-[22px] overflow-x-auto">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="text-left text-[#8a7f92] border-b border-[#EBE3D6]">
                    <th className="py-3 px-4 font-semibold">Campanha</th>
                    <th className="py-3 px-4 font-semibold text-right">Gasto</th>
                    <th className="py-3 px-4 font-semibold text-right">Conversas</th>
                    <th className="py-3 px-4 font-semibold text-right">Custo/conversa</th>
                    <th className="py-3 px-4 font-semibold text-right">Alcance</th>
                  </tr>
                </thead>
                <tbody>
                  {meta.campanhas.map((c) => (
                    <tr key={c.nome} className="border-b border-[#F2EFE8] last:border-0">
                      <td className="py-3 px-4 font-medium">{c.nome}</td>
                      <td className="py-3 px-4 text-right text-[#5b5566]">{brl(c.gasto)}</td>
                      <td className="py-3 px-4 text-right text-[#5b5566]">{c.conversas}</td>
                      <td className="py-3 px-4 text-right text-[#5b5566]">{c.conversas ? brl(c.custoConversa) : '—'}</td>
                      <td className="py-3 px-4 text-right text-[#5b5566]">{num(c.alcance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* SEO orgânico */}
        {gsc && (
          <>
            <SectionLabel>SEO orgânico — Search Console (últimos 28 dias)</SectionLabel>
            {gsc.paginas.length === 0 ? (
              <div className="bg-white border border-[#EBE3D6] rounded-[22px] p-8 text-center">
                <p className="text-[#12082a] font-semibold mb-1">Search Console conectado</p>
                <p className="text-sm text-[#8a7f92]">O Google ainda está processando os dados do site. Volte em 24–48h — as métricas orgânicas aparecerão aqui automaticamente.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                  <HeroKpiMini icon={<Icon path={IcClick} />} label="Cliques orgânicos" valor={gsc.totais.cliques.toLocaleString('pt-BR')} />
                  <HeroKpiMini icon={<Icon path={IcEye} />} label="Impressões" valor={gsc.totais.impressoes.toLocaleString('pt-BR')} />
                  <HeroKpiMini icon={<Icon path={IcTarget} />} label="CTR médio" valor={pct((gsc.paginas.reduce((s, p) => s + p.ctr, 0) / gsc.paginas.length) * 100)} />
                  <HeroKpiMini
                    icon={<Icon path={IcSearch} />}
                    label="Posição média"
                    valor={(gsc.paginas.reduce((s, p) => s + p.posicao * p.impressoes, 0) / Math.max(1, gsc.paginas.reduce((s, p) => s + p.impressoes, 0))).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}
                  />
                </div>
                <div className="bg-white border border-[#EBE3D6] rounded-[22px] overflow-x-auto">
                  <table className="w-full text-sm min-w-[560px]">
                    <thead>
                      <tr className="text-left text-[#8a7f92] border-b border-[#EBE3D6]">
                        <th className="py-3 px-4 font-semibold">Página</th>
                        <th className="py-3 px-4 font-semibold text-right">Cliques</th>
                        <th className="py-3 px-4 font-semibold text-right">Impressões</th>
                        <th className="py-3 px-4 font-semibold text-right">CTR</th>
                        <th className="py-3 px-4 font-semibold text-right">Posição</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gsc.paginas.map((p) => {
                        const isBlog = p.slug.startsWith('/blog/')
                        return (
                          <tr key={p.slug} className="border-b border-[#F2EFE8] last:border-0">
                            <td className={`py-3 px-4 font-medium max-w-[260px] truncate ${isBlog ? 'text-[#b8651f]' : 'text-[#12082a]'}`} title={p.slug}>
                              {p.slug}
                            </td>
                            <td className="py-3 px-4 text-right text-[#5b5566]">{p.cliques}</td>
                            <td className="py-3 px-4 text-right text-[#5b5566]">{p.impressoes.toLocaleString('pt-BR')}</td>
                            <td className="py-3 px-4 text-right text-[#5b5566]">{pct(p.ctr * 100)}</td>
                            <td className="py-3 px-4 text-right text-[#5b5566]">{p.posicao.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-[#9a8f86] mt-3">Período: {gsc.periodo} · páginas em laranja = posts do blog · posição = média ponderada por impressões.</p>
              </>
            )}
          </>
        )}

        <p className="text-xs text-[#9a8f86] leading-relaxed mt-8">
          Painel · uso interno · não indexado. No Google, &quot;contatos&quot; = conversões (clique no WhatsApp); no Meta, &quot;conversas&quot; = mensagens iniciadas.
          {' '}▲▼ e sparklines comparam com o período imediatamente anterior de mesma duração.
          {!serie && ' (Tendências indisponíveis para este período — escolha 7, 14 ou 30 dias.)'}
          {!meta && ' Meta ainda não conectado.'}
          {!live && ` Mostrando snapshot (${data.periodoLabel}).`}
        </p>
      </div>
    </div>
  )
}

// Card de custo por consulta fechada por canal (trata o caso "sem anúncio/orgânico")
function CanalConsultaCard({
  nome,
  dot,
  canal,
  badge = false,
}: {
  nome: string
  dot: string
  canal: { invest: number; consultas: number; custo: number; disponivel: boolean }
  badge?: boolean
}) {
  const semAnuncio = canal.disponivel && canal.consultas > 0 && canal.invest < 0.5
  const big = !canal.disponivel ? '—' : canal.consultas === 0 ? '—' : canal.invest >= 0.5 ? brl(canal.custo) : 'Orgânico'
  const organico = big === 'Orgânico'
  return (
    <div className={`rounded-[20px] border p-5 sm:p-6 ${badge ? 'bg-gradient-to-br from-white via-white to-[#FFF3E6] border-[#F0C98E]' : 'bg-white border-[#EBE3D6]'}`}>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-[#7a6ea0] text-[12px] font-bold uppercase tracking-[0.05em]">
          {dot && <span className="w-2.5 h-2.5 rounded-[3px]" style={{ background: dot }} />} {nome}
        </div>
        {badge && <span className="text-[10.5px] font-extrabold px-2 py-0.5 rounded-full bg-[#E7F5EC] text-[#1E7A3E] uppercase tracking-[0.04em] shrink-0">mais barato</span>}
      </div>
      <div className={`font-playfair font-extrabold mt-2 leading-none ${organico ? 'text-[26px] text-[#1E7A3E]' : 'text-[40px] text-[#12082a]'}`}>{big}</div>
      <p className="text-[12.5px] text-[#8a7f92] mt-2">{canal.consultas} consultas · {brl0(canal.invest)} em anúncios</p>
      {semAnuncio && <p className="text-[11.5px] text-[#1E7A3E] font-semibold mt-1">sem gasto em anúncio (vieram do orgânico)</p>}
    </div>
  )
}

// KPI compacto (blocos secundários: Meta e SEO)
function HeroKpiMini({ icon, label, valor }: { icon: React.ReactNode; label: string; valor: string }) {
  return (
    <div className="bg-white rounded-[18px] border border-[#EBE3D6] p-4 sm:p-5">
      <div className="flex items-center gap-2 text-[#7a6ea0] text-[11.5px] font-bold uppercase tracking-[0.05em]">
        <span className="text-[#9b8fbe]">{icon}</span>
        {label}
      </div>
      <div className="font-playfair text-[26px] sm:text-[28px] font-extrabold text-[#12082a] mt-1.5 leading-none">{valor}</div>
    </div>
  )
}
