import type { Metadata } from 'next'
import { getPainelData, PERIODOS, type PeriodoKey } from './adsData'

export const metadata: Metadata = {
  title: 'Painel de Tráfego — Dra. Isabel',
  robots: { index: false, follow: false },
}

const brl = (n: number) => 'R$ ' + n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const brl0 = (n: number) => 'R$ ' + Math.round(n).toLocaleString('pt-BR')
const pct = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + '%'

function Kpi({ icone, label, valor }: { icone: string; label: string; valor: string }) {
  return (
    <div className="bg-white rounded-2xl border border-[#E8E0D5] p-5">
      <div className="flex items-center gap-2 text-[#695192] text-xs font-medium uppercase tracking-wide">
        <span>{icone}</span>
        {label}
      </div>
      <div className="font-playfair text-3xl font-bold text-[#12082a] mt-2">{valor}</div>
    </div>
  )
}

export default async function PainelPage({ searchParams }: { searchParams: Promise<{ periodo?: string }> }) {
  const sp = await searchParams
  const periodo: PeriodoKey = sp.periodo && sp.periodo in PERIODOS ? (sp.periodo as PeriodoKey) : '7d'
  const data = await getPainelData(periodo)
  const live = data.fonte === 'live'

  const saude = data.campanhas.find((c) => /sa[uú]de/i.test(c.nome))
  const emag = data.campanhas.find((c) => /emagrec/i.test(c.nome))
  const comConv = data.campanhas.filter((c) => c.conversoes > 0).sort((a, b) => a.custoConv - b.custoConv)
  const maxCpa = Math.max(1, ...comConv.map((c) => c.custoConv))

  return (
    <div className="min-h-screen bg-[#F7F3EF] font-sans py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E8E0D5] pb-5 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#12082a] flex items-center justify-center">
              <span className="text-[#E8823A] text-xl">📈</span>
            </div>
            <div>
              <h1 className="font-playfair text-xl sm:text-2xl font-bold text-[#12082a] leading-tight">Painel de Tráfego — Dra. Isabel</h1>
              <p className="text-sm text-gray-500">{live ? `Ao vivo · ${data.periodoLabel}` : `Dados ${data.periodoLabel}`}</p>
            </div>
          </div>
          <span className={`hidden sm:inline text-xs rounded-full px-3 py-1 border ${live ? 'text-green-700 border-green-300 bg-green-50' : 'text-gray-400 border-[#E8E0D5]'}`}>
            {live ? '● ao vivo' : 'uso interno'}
          </span>
        </div>

        {/* Filtros de período (só quando ao vivo) */}
        {live && (
          <div className="flex flex-wrap gap-2 mb-8">
            {(Object.keys(PERIODOS) as PeriodoKey[]).map((k) => (
              <a
                key={k}
                href={`/painel?periodo=${k}`}
                className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                  k === periodo ? 'bg-[#12082a] text-white border-[#12082a]' : 'bg-white text-[#12082a] border-[#E8E0D5] hover:border-[#695192]'
                }`}
              >
                {PERIODOS[k].label}
              </a>
            ))}
          </div>
        )}

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          <Kpi icone="💰" label="Investimento" valor={brl0(data.total.investimento)} />
          <Kpi icone="👆" label="Cliques" valor={data.total.cliques.toLocaleString('pt-BR')} />
          <Kpi icone="💬" label="Contatos" valor={String(Math.round(data.total.contatos))} />
          <Kpi icone="🎯" label="Custo / contato" valor={brl(data.total.custoContato)} />
        </div>

        {/* A/B */}
        {saude && emag && (
          <>
            <p className="text-sm text-[#695192] font-medium mb-3 uppercase tracking-wide">Teste A/B de página — qual converte melhor</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-white rounded-2xl border border-[#E8E0D5] p-6">
                <p className="font-semibold text-[#12082a]">Emagrecimento</p>
                <p className="text-xs text-gray-400 mb-4">/emagrecimento</p>
                <div className="flex gap-8">
                  <div><p className="text-xs text-gray-500">Taxa de conv.</p><p className="text-2xl font-bold text-[#12082a]">{pct(emag.taxa)}</p></div>
                  <div><p className="text-xs text-gray-500">Custo/contato</p><p className="text-2xl font-bold text-[#12082a]">{emag.conversoes ? brl(emag.custoConv) : '—'}</p></div>
                </div>
              </div>
              <div className="bg-white rounded-2xl border-2 border-[#E8823A] p-6 relative">
                <span className="absolute top-4 right-4 text-xs font-semibold text-[#8a4d18] bg-[#FAEEDA] rounded-full px-3 py-1">🏆 na frente</span>
                <p className="font-semibold text-[#12082a]">Saúde</p>
                <p className="text-xs text-gray-400 mb-4">/saude</p>
                <div className="flex gap-8">
                  <div><p className="text-xs text-gray-500">Taxa de conv.</p><p className="text-2xl font-bold text-[#b8651f]">{pct(saude.taxa)}</p></div>
                  <div><p className="text-xs text-gray-500">Custo/contato</p><p className="text-2xl font-bold text-[#b8651f]">{saude.conversoes ? brl(saude.custoConv) : '—'}</p></div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Custo por contato — barras */}
        {comConv.length > 0 && (
          <>
            <p className="text-sm text-[#695192] font-medium mb-4 uppercase tracking-wide">Custo por contato por campanha — menor é melhor</p>
            <div className="bg-white rounded-2xl border border-[#E8E0D5] p-6 mb-10 space-y-4">
              {comConv.map((c) => {
                const destaque = /sa[uú]de/i.test(c.nome)
                return (
                  <div key={c.nome}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#12082a] font-medium">{c.nome}</span>
                      <span className={destaque ? 'text-[#b8651f] font-semibold' : 'text-gray-600'}>{brl(c.custoConv)}</span>
                    </div>
                    <div className="h-3 bg-[#F2EFE8] rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${destaque ? 'bg-[#E8823A]' : 'bg-[#695192]'}`} style={{ width: `${(c.custoConv / maxCpa) * 100}%` }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}

        {/* Tabela */}
        <p className="text-sm text-[#695192] font-medium mb-4 uppercase tracking-wide">Detalhe por campanha</p>
        <div className="bg-white rounded-2xl border border-[#E8E0D5] overflow-x-auto mb-8">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="text-left text-gray-500 border-b border-[#E8E0D5]">
                <th className="py-3 px-4 font-medium">Campanha</th>
                <th className="py-3 px-4 font-medium text-right">Cliques</th>
                <th className="py-3 px-4 font-medium text-right">Contatos</th>
                <th className="py-3 px-4 font-medium text-right">Custo</th>
                <th className="py-3 px-4 font-medium text-right">Custo/contato</th>
                <th className="py-3 px-4 font-medium text-right">Taxa conv.</th>
              </tr>
            </thead>
            <tbody>
              {data.campanhas.map((c) => {
                const destaque = /sa[uú]de/i.test(c.nome)
                return (
                  <tr key={c.nome} className="border-b border-[#F2EFE8] last:border-0">
                    <td className="py-3 px-4 text-[#12082a] font-medium">{c.nome}</td>
                    <td className="py-3 px-4 text-right text-gray-700">{c.cliques.toLocaleString('pt-BR')}</td>
                    <td className="py-3 px-4 text-right text-gray-700">{Math.round(c.conversoes)}</td>
                    <td className="py-3 px-4 text-right text-gray-700">{brl(c.custo)}</td>
                    <td className={`py-3 px-4 text-right ${destaque ? 'text-[#b8651f] font-semibold' : 'text-gray-700'}`}>{c.conversoes ? brl(c.custoConv) : '—'}</td>
                    <td className={`py-3 px-4 text-right ${destaque ? 'text-[#b8651f] font-semibold' : 'text-gray-700'}`}>{pct(c.taxa)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed">
          Página de uso interno · não indexada. &quot;Contatos&quot; = conversões contabilizadas pelo Google Ads (todas as ações).{' '}
          {live ? `Dados ao vivo (${data.periodoLabel}).` : `Mostrando snapshot (${data.periodoLabel}) — conecta à API quando os segredos forem configurados na Vercel.`}
        </p>
      </div>
    </div>
  )
}
