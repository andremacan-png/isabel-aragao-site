import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Painel de Tráfego — Dra. Isabel',
  robots: { index: false, follow: false },
}

const ATUALIZADO = '11/06/2026'

const campanhas = [
  { nome: 'Saúde', rota: '/saude', cliques: 32, conversoes: 6, custo: 175.05, custoConv: 30.89, taxa: 17.7, destaque: true },
  { nome: 'Página Principal', rota: 'home', cliques: 241, conversoes: 33, custo: 1063.31, custoConv: 31.9, taxa: 13.8, destaque: false },
  { nome: 'Emagrecimento', rota: '/emagrecimento', cliques: 33, conversoes: 3, custo: 175.98, custoConv: 58.66, taxa: 9.1, destaque: false },
]

const total = {
  investimento: 1414.35,
  cliques: 306,
  contatos: 42,
  custoContato: 33.67,
}

const brl = (n: number) => 'R$ ' + n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const brl0 = (n: number) => 'R$ ' + Math.round(n).toLocaleString('pt-BR')

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

export default function PainelPage() {
  const maxCpa = Math.max(...campanhas.map((c) => c.custoConv))

  return (
    <div className="min-h-screen bg-[#F7F3EF] font-sans py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E8E0D5] pb-5 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#12082a] flex items-center justify-center">
              <span className="text-[#E8823A] text-xl">📈</span>
            </div>
            <div>
              <h1 className="font-playfair text-xl sm:text-2xl font-bold text-[#12082a] leading-tight">Painel de Tráfego — Dra. Isabel</h1>
              <p className="text-sm text-gray-500">Acumulado das campanhas · atualizado em {ATUALIZADO}</p>
            </div>
          </div>
          <span className="hidden sm:inline text-xs text-gray-400 border border-[#E8E0D5] rounded-full px-3 py-1">Uso interno</span>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          <Kpi icone="💰" label="Investimento" valor={brl0(total.investimento)} />
          <Kpi icone="👆" label="Cliques" valor={total.cliques.toLocaleString('pt-BR')} />
          <Kpi icone="💬" label="Contatos" valor={String(total.contatos)} />
          <Kpi icone="🎯" label="Custo / contato" valor={brl(total.custoContato)} />
        </div>

        {/* A/B */}
        <p className="text-sm text-[#695192] font-medium mb-3 uppercase tracking-wide">Teste A/B de página — qual converte melhor</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-white rounded-2xl border border-[#E8E0D5] p-6">
            <p className="font-semibold text-[#12082a]">Emagrecimento</p>
            <p className="text-xs text-gray-400 mb-4">/emagrecimento</p>
            <div className="flex gap-8">
              <div><p className="text-xs text-gray-500">Taxa de conv.</p><p className="text-2xl font-bold text-[#12082a]">9,1%</p></div>
              <div><p className="text-xs text-gray-500">Custo/contato</p><p className="text-2xl font-bold text-[#12082a]">R$ 58,66</p></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border-2 border-[#E8823A] p-6 relative">
            <span className="absolute top-4 right-4 text-xs font-semibold text-[#8a4d18] bg-[#FAEEDA] rounded-full px-3 py-1">🏆 na frente</span>
            <p className="font-semibold text-[#12082a]">Saúde</p>
            <p className="text-xs text-gray-400 mb-4">/saude</p>
            <div className="flex gap-8">
              <div><p className="text-xs text-gray-500">Taxa de conv.</p><p className="text-2xl font-bold text-[#b8651f]">17,7%</p></div>
              <div><p className="text-xs text-gray-500">Custo/contato</p><p className="text-2xl font-bold text-[#b8651f]">R$ 30,89</p></div>
            </div>
          </div>
        </div>

        {/* Custo por contato — barras */}
        <p className="text-sm text-[#695192] font-medium mb-4 uppercase tracking-wide">Custo por contato por campanha — menor é melhor</p>
        <div className="bg-white rounded-2xl border border-[#E8E0D5] p-6 mb-10 space-y-4">
          {[...campanhas].sort((a, b) => a.custoConv - b.custoConv).map((c) => (
            <div key={c.nome}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-[#12082a] font-medium">{c.nome}</span>
                <span className={c.destaque ? 'text-[#b8651f] font-semibold' : 'text-gray-600'}>{brl(c.custoConv)}</span>
              </div>
              <div className="h-3 bg-[#F2EFE8] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${c.destaque ? 'bg-[#E8823A]' : 'bg-[#695192]'}`}
                  style={{ width: `${(c.custoConv / maxCpa) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tabela */}
        <p className="text-sm text-[#695192] font-medium mb-4 uppercase tracking-wide">Detalhe por campanha</p>
        <div className="bg-white rounded-2xl border border-[#E8E0D5] overflow-hidden mb-8">
          <table className="w-full text-sm">
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
              {campanhas.map((c) => (
                <tr key={c.nome} className="border-b border-[#F2EFE8] last:border-0">
                  <td className="py-3 px-4 text-[#12082a] font-medium">{c.nome}</td>
                  <td className="py-3 px-4 text-right text-gray-700">{c.cliques}</td>
                  <td className="py-3 px-4 text-right text-gray-700">{c.conversoes}</td>
                  <td className="py-3 px-4 text-right text-gray-700">{brl(c.custo)}</td>
                  <td className={`py-3 px-4 text-right ${c.destaque ? 'text-[#b8651f] font-semibold' : 'text-gray-700'}`}>{brl(c.custoConv)}</td>
                  <td className={`py-3 px-4 text-right ${c.destaque ? 'text-[#b8651f] font-semibold' : 'text-gray-700'}`}>{c.taxa.toLocaleString('pt-BR')}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed">
          Página de uso interno · não indexada. &quot;Contatos&quot; = conversões contabilizadas pelo Google Ads (todas as ações). Dados acumulados das campanhas até {ATUALIZADO}.
        </p>
      </div>
    </div>
  )
}
