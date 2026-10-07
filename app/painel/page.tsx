// Painel de Tráfego 2.0 · fase 1: abas Resumo e Google Ads com dados ao vivo do Google Ads;
// Site (Search Console) e Pacientes (custo por paciente do mês) reaproveitam o que já existia.
// Tudo é componente de servidor: a navegação por abas, sub-abas e períodos é por link.

import { getMetaData } from './metaAdsData'
import { getGscData, getGscSeries } from './gscData'
import { getCustoConsultaCanais, CONSULTAS_MES } from './painel2Data'
import {
  janela, isPeriodo, conectado, hojeSP, addDays, fmtDia, diaSemana,
  getSerie, getCampanhas, getCampanhasPeriodo, getKeywords, getTermos, getIdade, getGenero, getSegmentos, getAnuncios, getNegativas, negativada,
  type Janela, type PeriodoKey, type Fatia,
} from './lib/googleAds'
import { montarAlertas } from './lib/alertas'
import { Shell, Card, Vazio, Delta, Spark, Kpi, Alertas, Columns, HBars, Funnel, Hours, Heat, IQ, Pill, SubTabs, ABAS, SUBS, pick, brl, brl0, pct, num, taxa, type Aba, type Sub } from './ui'

type SP = { periodo?: string; aba?: string; sub?: string }

export default async function PainelPage({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams
  const periodo: PeriodoKey = isPeriodo(sp.periodo) ? sp.periodo : '30d'
  const aba: Aba = pick(sp.aba, ABAS, 'resumo')
  const sub: Sub = pick(sp.sub, SUBS, 'palavras')
  const j = janela(periodo)
  const live = conectado()

  return (
    <Shell periodo={periodo} aba={aba} sub={sub} label={j.label} comparacao={j.comparacao} live={live}>
      {!live && aba !== 'site' && <Vazio texto="Sem conexão com o Google Ads neste ambiente: as variáveis GOOGLE_ADS_* não estão configuradas. Em produção (Vercel) elas existem e o painel fica ao vivo." />}
      {aba === 'resumo' && <Resumo j={j} periodo={periodo} />}
      {aba === 'google' && <Google j={j} periodo={periodo} sub={sub} />}
      {aba === 'site' && <Site />}
      {aba === 'pacientes' && <Pacientes />}
      <p className="pn-foot">
        Fontes: Google Ads API (todas as campanhas não removidas), Search Console e a lista mensal de pacientes. Contato = clique no WhatsApp a partir de um anúncio.
        Paciente = consulta marcada, contada na lista do mês. Painel de uso interno, fora do índice do Google.
      </p>
    </Shell>
  )
}

// ───────────────────────────── RESUMO ─────────────────────────────
const META_PERIODOS = ['hoje', 'ontem', '7d', '14d', '30d']

async function Resumo({ j, periodo }: { j: Janela; periodo: PeriodoKey }) {
  const hoje = hojeSP()
  const ontem = addDays(hoje, -1)
  const j7 = janela('7d')
  const [serie, campanhas, serie7, termos14, anuncios, campPeriodo, meta, canais, negativas] = await Promise.all([
    getSerie(j),
    getCampanhas(),
    periodo === '7d' ? Promise.resolve(null) : getSerie(j7),
    getTermos(addDays(ontem, -13), ontem, 80),
    getAnuncios(j.dias >= 7 ? j : janela('30d')),
    getCampanhasPeriodo(j),
    META_PERIODOS.includes(periodo) ? getMetaData(periodo) : Promise.resolve(null),
    getCustoConsultaCanais(),
    getNegativas(),
  ])
  const s7 = periodo === '7d' ? serie : serie7
  const alertas = montarAlertas({ campanhas, serie7: s7, termos14, anuncios, negativas, ontem })

  const pacientesMes = CONSULTAS_MES.google + CONSULTAS_MES.meta
  const custoPaciente = canais?.google.consultas ? canais.google.custo : null

  return (
    <>
      <Alertas itens={alertas} />

      {serie ? (
        <div className="pn-row kpis">
          <Kpi eyebrow="Investimento · Google" valor={brl0(serie.atual.gasto)}>
            <Delta atual={serie.atual.gasto} anterior={serie.anterior.gasto} neutral texto={j.comparacao} />
            <Spark vals={serie.dias.map((d) => d.gasto)} />
          </Kpi>
          <Kpi eyebrow="Contatos pelo WhatsApp" valor={num(serie.atual.contatos)}>
            <Delta atual={serie.atual.contatos} anterior={serie.anterior.contatos} texto={j.comparacao} />
            <Spark vals={serie.dias.map((d) => d.contatos)} />
          </Kpi>
          <Kpi eyebrow="Custo por contato" valor={serie.atual.contatos ? brl(serie.atual.gasto / serie.atual.contatos) : '—'} nota={`Conversão clique → contato: ${pct(taxa(serie.atual.contatos, serie.atual.cliques))} em ${num(serie.atual.cliques)} cliques.`}>
            <Delta atual={serie.atual.contatos ? serie.atual.gasto / serie.atual.contatos : 0} anterior={serie.anterior.contatos ? serie.anterior.gasto / serie.anterior.contatos : 0} invert texto={j.comparacao} />
          </Kpi>
          <Kpi eyebrow={`Pacientes novos · ${CONSULTAS_MES.label}`} valor={pacientesMes ? String(pacientesMes) : '—'} nota={pacientesMes ? `Site/Google ${CONSULTAS_MES.google} · Meta ${CONSULTAS_MES.meta}. Vem da lista mensal; a aba Pacientes detalha.` : `Aguardando a lista de ${CONSULTAS_MES.label}. Setembro fechou com 14 (agosto, 26).`}>
            {pacientesMes ? <Pill tom="brand">lista do mês</Pill> : <Pill>lista pendente</Pill>}
          </Kpi>
          <Kpi eyebrow={`Custo por paciente · Google · ${CONSULTAS_MES.label}`} valor={custoPaciente ? brl0(custoPaciente) : '—'} nota={canais ? `${brl0(canais.google.invest)} gastos no Google de 1º de ${canais.label} até hoje, ${canais.google.consultas} ${canais.google.consultas === 1 ? 'paciente' : 'pacientes'} do site.` : 'Gasto do mês indisponível.'}>
            {custoPaciente ? <Heat v={custoPaciente} bom={200} ruim={300} /> : <Pill>sem paciente contado ainda</Pill>}
          </Kpi>
        </div>
      ) : (
        <Vazio texto="O Google Ads não respondeu à consulta de totais. Recarregue em um minuto; se persistir, a versão da API pode ter sido aposentada." />
      )}

      <div className="pn-row two">
        {serie && (
          <Card titulo="Gasto por dia e contatos por dia" sub={`${j.label}. Dias sem barra = sem gasto (fim de semana a campanha fica desligada). Passe o mouse para ver o dia.`}>
            <p className="pn-eyebrow">Gasto</p>
            <Columns
              vals={serie.dias.map((d) => d.gasto)}
              labels={serie.dias.map((d) => fmtDia(d.data))}
              tips={serie.dias.map((d) => `${fmtDia(d.data)} · ${brl(d.gasto)} · ${d.cliques} cliques · ${num(d.contatos)} contatos`)}
              money
              cls={(i) => (diaSemana(serie.dias[i].data) % 6 === 0 ? 'prev' : '')}
            />
            <p className="pn-eyebrow" style={{ marginTop: 10 }}>Contatos</p>
            <Columns
              vals={serie.dias.map((d) => d.contatos)}
              labels={serie.dias.map((d) => fmtDia(d.data))}
              tips={serie.dias.map((d) => `${fmtDia(d.data)} · ${num(d.contatos)} contatos · custo por contato ${d.contatos ? brl(d.gasto / d.contatos) : '—'}`)}
              height={120}
              cls={(i) => (diaSemana(serie.dias[i].data) % 6 === 0 ? 'prev' : '')}
            />
            <details style={{ marginTop: 10 }}>
              <summary className="pn-note" style={{ cursor: 'pointer' }}>Ver como tabela</summary>
              <div className="pn-tbl" style={{ marginTop: 8 }}>
                <table className="narrow">
                  <thead><tr><th>Dia</th><th className="num">Gasto</th><th className="num">Cliques</th><th className="num">Contatos</th></tr></thead>
                  <tbody>
                    {serie.dias.filter((d) => d.gasto || d.cliques).map((d) => (
                      <tr key={d.data}><td>{fmtDia(d.data)}</td><td className="num">{brl(d.gasto)}</td><td className="num">{d.cliques}</td><td className="num">{num(d.contatos)}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </details>
          </Card>
        )}

        <Card titulo="Funil do Google" sub={`${j.label}. Cada etapa em relação à anterior.`}>
          {serie ? (
            <Funnel
              steps={[
                { nome: 'Cliques no anúncio', sub: `${num(serie.atual.impressoes)} impressões · CTR ${pct(taxa(serie.atual.cliques, serie.atual.impressoes))}`, v: serie.atual.cliques },
                { nome: 'Contatos no WhatsApp', sub: `${pct(taxa(serie.atual.contatos, serie.atual.cliques))} dos cliques`, v: serie.atual.contatos },
                ...(periodo === 'mes' && pacientesMes
                  ? [{ nome: 'Pacientes', sub: `${pct(taxa(CONSULTAS_MES.google, serie.atual.contatos))} dos contatos (lista do mês)`, v: CONSULTAS_MES.google, accent: true }]
                  : []),
              ]}
            />
          ) : (
            <Vazio texto="Sem dados." />
          )}
          {periodo !== 'mes' && <p className="pn-note">A etapa "pacientes" aparece no período "Mês atual", que é como a lista é fechada.</p>}

          {campPeriodo && campPeriodo.length > 0 && (
            <>
              <h2 style={{ marginTop: 22 }}>Por campanha</h2>
              <div className="pn-tbl">
                <table className="narrow">
                  <thead><tr><th>Campanha</th><th className="num">Cliques</th><th className="num">Contatos</th><th className="num">Gasto</th><th className="num">Custo/contato</th></tr></thead>
                  <tbody>
                    {campPeriodo.filter((c) => c.gasto > 0 || c.cliques > 0).map((c) => (
                      <tr key={c.nome}>
                        <td className="kw">{c.nome} {c.status !== 'ENABLED' && <Pill>pausada</Pill>}</td>
                        <td className="num">{c.cliques}</td><td className="num">{num(c.contatos)}</td><td className="num">{brl(c.gasto)}</td>
                        <td className="num"><Heat v={c.contatos ? c.gasto / c.contatos : null} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </Card>
      </div>

      {meta && meta.total.investimento > 0 && (
        <Card titulo="Meta Ads · Instagram e Facebook" sub={`${meta.periodoLabel}. Aparece só quando há gasto no período. Conversa = pessoa que iniciou mensagem no WhatsApp a partir do anúncio.`}>
          <div className="pn-tbl">
            <table className="narrow">
              <thead><tr><th>Campanha</th><th className="num">Gasto</th><th className="num">Conversas</th><th className="num">Custo/conversa</th><th className="num">Alcance</th></tr></thead>
              <tbody>
                {meta.campanhas.map((c) => (
                  <tr key={c.nome}><td className="kw">{c.nome}</td><td className="num">{brl(c.gasto)}</td><td className="num">{c.conversas}</td><td className="num"><Heat v={c.conversas ? c.custoConversa : null} /></td><td className="num">{num(c.alcance)}</td></tr>
                ))}
                <tr><td><b>Total</b></td><td className="num"><b>{brl(meta.total.investimento)}</b></td><td className="num"><b>{meta.total.conversas}</b></td><td className="num"><b>{meta.total.conversas ? brl(meta.total.custoConversa) : '—'}</b></td><td className="num"><b>{num(meta.total.alcance)}</b></td></tr>
              </tbody>
            </table>
          </div>
          <p className="pn-note">Conversa no Meta não é o mesmo que contato no Google: em setembro, 25 conversas do Meta não viraram nenhum paciente.</p>
        </Card>
      )}
    </>
  )
}

// ───────────────────────────── GOOGLE ADS ─────────────────────────────
async function Google({ j, periodo, sub }: { j: Janela; periodo: PeriodoKey; sub: Sub }) {
  return (
    <>
      <SubTabs periodo={periodo} sub={sub} />
      {sub === 'palavras' && <Palavras j={j} />}
      {sub === 'termos' && <Termos j={j} />}
      {sub === 'publico' && <Publico j={j} />}
      {sub === 'anuncios' && <Anuncios j={j} />}
    </>
  )
}

async function Palavras({ j }: { j: Janela }) {
  const kws = await getKeywords(j)
  if (!kws) return <Vazio texto="Sem resposta do Google Ads para palavras-chave." />
  const tipoTom = (t: string) => (t === 'ampla' ? 'warn' : '') as '' | 'warn'
  return (
    <Card titulo={`Palavras-chave · ${j.label}`} sub="Ordenado por gasto. Custo por contato: verde até R$ 35, amarelo até R$ 60, vermelho acima. IQ = índice de qualidade do Google (1 a 10).">
      {kws.length === 0 ? (
        <Vazio texto="Nenhuma palavra-chave com impressão no período." />
      ) : (
        <div className="pn-tbl">
          <table>
            <thead><tr><th>Palavra-chave</th><th>Tipo</th><th className="num">Cliques</th><th className="num">Contatos</th><th className="num">Gasto</th><th className="num">Custo/contato</th><th>IQ</th></tr></thead>
            <tbody>
              {kws.map((k, i) => (
                <tr key={i}>
                  <td className="kw">{k.texto}</td>
                  <td><Pill tom={tipoTom(k.tipo)}>{k.tipo}{k.status === 'REMOVED' ? ' · removida' : k.status === 'PAUSED' ? ' · pausada' : ''}</Pill></td>
                  <td className="num">{k.cliques}</td><td className="num">{num(k.contatos)}</td><td className="num">{brl(k.gasto)}</td>
                  <td className="num"><Heat v={k.contatos ? k.gasto / k.contatos : null} /></td>
                  <td><IQ q={k.iq} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="pn-note">Palavras "removidas" ainda aparecem se gastaram no período: mostram o que custaram enquanto estavam ativas. Desde 06/10 não há mais palavra ampla ativa.</p>
    </Card>
  )
}

async function Termos({ j }: { j: Janela }) {
  const [termos, negativas] = await Promise.all([getTermos(j.inicio, j.fim), getNegativas()])
  if (!termos) return <Vazio texto="Sem resposta do Google Ads para termos de pesquisa." />
  const negs = negativas ?? []
  const leitura = (t: { termo: string; contatos: number; gasto: number; cliques: number }) =>
    negativada(t.termo, negs) ? <Pill>já negativado</Pill> : t.contatos > 0 ? <Pill tom="good">converte</Pill> : t.gasto >= 15 ? <Pill tom="serious">gastou sem contato</Pill> : t.cliques >= 3 ? <Pill tom="warn">observar</Pill> : <Pill>pouco dado</Pill>
  return (
    <Card titulo={`Termos de pesquisa · ${j.label}`} sub="O que as pessoas digitaram de fato no Google antes de clicar. Ordenado por gasto. Os que gastaram R$ 15 ou mais sem contato são candidatos a negativa.">
      {termos.length === 0 ? (
        <Vazio texto="Nenhum termo com clique no período." />
      ) : (
        <div className="pn-tbl">
          <table>
            <thead><tr><th>Termo digitado</th><th className="num">Cliques</th><th className="num">Contatos</th><th className="num">Gasto</th><th>Leitura</th></tr></thead>
            <tbody>
              {termos.map((t, i) => (
                <tr key={i}><td className="kw">{t.termo}</td><td className="num">{t.cliques}</td><td className="num">{num(t.contatos)}</td><td className="num">{brl(t.gasto)}</td><td>{leitura(t)}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="pn-note">Negativar direto por aqui entra na fase 2 (hoje eu faço pela API, com simulação antes). Termos já negativados deixam de aparecer nos dias seguintes.</p>
    </Card>
  )
}

function cpc(f: Fatia) {
  return f.contatos ? f.gasto / f.contatos : null
}

async function Publico({ j }: { j: Janela }) {
  const [idade, genero, seg] = await Promise.all([getIdade(j), getGenero(j), getSegmentos(j)])
  const maxIdade = Math.max(1, ...(idade ?? []).map((f) => cpc(f) ?? 0))
  const linhas = [...(genero ?? []), ...(seg?.dispositivo ?? [])]
  return (
    <>
      <div className="pn-row two">
        <Card titulo="Custo por contato por idade" sub={`${j.label}. Barra = custo por contato; ao lado, quantos contatos. Faixa sem contato aparece sem barra.`}>
          {idade ? (
            <HBars
              rows={idade.map((f) => ({ nome: f.nome, v: cpc(f) ?? 0, s: `${num(f.contatos)} ${f.contatos === 1 ? 'contato' : 'contatos'} · ${brl0(f.gasto)}`, cls: (cpc(f) ?? 0) > 60 ? 'alt' : f.nome === 'Não informada' ? 'prev' : '' }))}
              fmt={(v) => (v ? brl(v) : 'sem contato')}
              max={maxIdade}
            />
          ) : (
            <Vazio texto="Sem dados de idade." />
          )}
          <p className="pn-note">Você decidiu não restringir idade: o CPA-alvo faz o freio. Aqui dá para ver se ele está segurando as faixas caras.</p>
        </Card>
        <Card titulo="Gênero e dispositivo" sub={`${j.label}. Conversão = contatos por clique.`}>
          {linhas.length ? (
            <div className="pn-tbl">
              <table className="narrow">
                <thead><tr><th>Segmento</th><th className="num">Gasto</th><th className="num">Contatos</th><th className="num">Conversão</th><th className="num">Custo/contato</th></tr></thead>
                <tbody>
                  {linhas.map((f) => (
                    <tr key={f.nome}><td>{f.nome}</td><td className="num">{brl0(f.gasto)}</td><td className="num">{num(f.contatos)}</td><td className="num">{pct(taxa(f.contatos, f.cliques))}</td><td className="num"><Heat v={cpc(f)} /></td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <Vazio texto="Sem dados de gênero e dispositivo." />
          )}
        </Card>
      </div>
      <div className="pn-row two">
        <Card titulo="Hora do dia" sub={`${j.label}. Cor = gasto na hora; número = contatos. Horário de Brasília.`}>
          {seg ? <Hours horas={seg.hora} /> : <Vazio texto="Sem dados por hora." />}
          <p className="pn-note">Madrugada com gasto e sem contato é candidata a sair da programação de anúncios.</p>
        </Card>
        <Card titulo="Dia da semana" sub={`${j.label}. Sábado e domingo ficam desligados de propósito.`}>
          {seg && seg.diaSemana.length ? (
            <HBars rows={seg.diaSemana.map((f) => ({ nome: f.nome, v: cpc(f) ?? 0, s: `${num(f.contatos)} contatos · ${brl0(f.gasto)}`, cls: (cpc(f) ?? 0) > 60 ? 'alt' : '' }))} fmt={(v) => (v ? brl(v) : 'sem contato')} />
          ) : (
            <Vazio texto="Sem dados por dia da semana." />
          )}
        </Card>
      </div>
    </>
  )
}

async function Anuncios({ j }: { j: Janela }) {
  const ads = await getAnuncios(j)
  if (!ads) return <Vazio texto="Sem resposta do Google Ads para anúncios." />
  const forcaTom = (f: string) => (f === 'Fraca' ? 'crit' : f === 'Excelente' || f === 'Boa' ? 'good' : f === 'Média' ? 'warn' : '') as '' | 'good' | 'warn' | 'crit'
  return (
    <Card titulo={`Anúncios · ${j.label}`} sub="Os anúncios da campanha lado a lado. O título 1 fixo é o que sempre aparece primeiro.">
      {ads.length === 0 ? (
        <Vazio texto="Nenhum anúncio com dados no período." />
      ) : (
        <div className="pn-tbl">
          <table>
            <thead><tr><th>Anúncio (título 1)</th><th>Status</th><th className="num">Cliques</th><th className="num">Contatos</th><th className="num">Conversão</th><th className="num">Custo/contato</th><th>Força</th></tr></thead>
            <tbody>
              {ads.map((a) => (
                <tr key={a.id}>
                  <td className="kw" title={a.titulos.join(' · ')}>{a.titulo1}</td>
                  <td>{a.status === 'ENABLED' ? <Pill tom="good">ativo</Pill> : <Pill>{a.status === 'PAUSED' ? 'pausado' : a.status.toLowerCase()}</Pill>}</td>
                  <td className="num">{a.cliques}</td><td className="num">{num(a.contatos)}</td><td className="num">{pct(taxa(a.contatos, a.cliques))}</td>
                  <td className="num"><Heat v={a.contatos ? a.gasto / a.contatos : null} /></td>
                  <td><Pill tom={forcaTom(a.forca)}>{a.forca}</Pill></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="pn-note">Passe o mouse no nome para ver todos os títulos. Regra que aprendemos: título 1 com nome da médica e chamada para agendar converte quase o triplo de título genérico.</p>
    </Card>
  )
}

// ───────────────────────────── SITE ─────────────────────────────
async function Site() {
  const [gsc, serie] = await Promise.all([getGscData(), getGscSeries(60)])
  return (
    <>
      <div className="pn-alerts">
        <div className="pn-alert warn"><span className="pn-ico" aria-hidden="true">!</span><div><b>GA4 e Clarity entram na fase 2</b><span>Precisam de uma credencial do Analytics na Vercel e do token do Clarity. O clique no WhatsApp por página está sendo coletado desde 07/10.</span></div></div>
        <div className="pn-alert"><span className="pn-ico" aria-hidden="true">✓</span><div><b>Velocidade no celular: nota 94</b><span>Medida em 06/10 após tirar o Pixel do carregamento inicial (antes, 61).</span></div></div>
      </div>
      {gsc ? (
        <>
          <div className="pn-row kpis">
            <Kpi eyebrow="Cliques orgânicos · 28 dias" valor={num(gsc.totais.cliques)} nota={gsc.periodo} />
            <Kpi eyebrow="Impressões" valor={num(gsc.totais.impressoes)} />
            <Kpi eyebrow="CTR médio" valor={pct(taxa(gsc.totais.cliques, gsc.totais.impressoes))} />
          </div>
          {serie && serie.length > 1 && (
            <Card titulo="Cliques orgânicos por dia" sub="Últimos 60 dias, Search Console (atraso de uns 2 dias). Fins de semana em cinza.">
              <Columns vals={serie.map((d) => d.cliques)} labels={serie.map((d) => fmtDia(d.data))} tips={serie.map((d) => `${fmtDia(d.data)} · ${d.cliques} cliques · ${num(d.impressoes)} impressões`)} height={140} cls={(i) => (diaSemana(serie[i].data) % 6 === 0 ? 'prev' : '')} />
            </Card>
          )}
          <Card titulo="Páginas que trazem gente do Google de graça" sub="Posição = média ponderada pelas impressões. Páginas do blog em negrito.">
            <div className="pn-tbl">
              <table>
                <thead><tr><th>Página</th><th className="num">Cliques</th><th className="num">Impressões</th><th className="num">CTR</th><th className="num">Posição</th></tr></thead>
                <tbody>
                  {gsc.paginas.slice(0, 15).map((p) => (
                    <tr key={p.page}><td className={p.slug.startsWith('/blog/') ? 'kw' : 'dim'}>{p.slug}</td><td className="num">{p.cliques}</td><td className="num">{num(p.impressoes)}</td><td className="num">{pct(p.ctr * 100)}</td><td className="num">{p.posicao.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </>
      ) : (
        <Vazio texto="Search Console sem resposta neste ambiente (precisa das variáveis GSC_*)." />
      )}
    </>
  )
}

// ───────────────────────────── PACIENTES ─────────────────────────────
async function Pacientes() {
  const canais = await getCustoConsultaCanais()
  const total = CONSULTAS_MES.google + CONSULTAS_MES.meta
  return (
    <>
      <div className="pn-alerts">
        <div className="pn-alert warn"><span className="pn-ico" aria-hidden="true">!</span><div><b>Registro de contatos entra na fase 3</b><span>Hoje a contagem de pacientes vem da lista que você fecha no fim do mês. O formulário de registro de cada contato (origem, data, virou consulta ou não) substitui essa lista e passa a medir tempo de resposta.</span></div></div>
      </div>
      <div className="pn-row kpis">
        <Kpi eyebrow={`Pacientes novos · ${CONSULTAS_MES.label}`} valor={total ? String(total) : '—'} nota={total ? undefined : `Aguardando a lista de ${CONSULTAS_MES.label}.`} />
        <Kpi eyebrow="Setembro fechado" valor="14" nota="Site 6 · Indicação 6 · Instagram 2 · Facebook 0. Agosto: 26 (Site 9 · Meta 9 · Indicação 8)." />
        <Kpi eyebrow="Custo por paciente · setembro" valor="R$ 384" nota="R$ 2.305 no Google sobre 6 pacientes do site. Tudo incluído (Google + Meta sobre 14): R$ 205." />
      </div>
      {canais ? (
        <Card titulo={`Por canal · ${canais.label}, de 1º até hoje`} sub="Gasto ao vivo de cada plataforma; pacientes da lista do mês. Custo só faz sentido quando houve gasto e paciente.">
          <div className="pn-tbl">
            <table className="narrow">
              <thead><tr><th>Canal</th><th className="num">Gasto</th><th className="num">Pacientes</th><th className="num">Custo/paciente</th></tr></thead>
              <tbody>
                <tr><td><i className="pn-dot" style={{ background: 'var(--s-google)' }} />Google · site</td><td className="num">{brl0(canais.google.invest)}</td><td className="num">{canais.google.consultas}</td><td className="num">{canais.google.consultas && canais.google.invest ? <Heat v={canais.google.custo} bom={200} ruim={300} /> : <span className="pn-heat none">{canais.google.consultas ? 'sem gasto' : 'sem paciente'}</span>}</td></tr>
                <tr><td><i className="pn-dot" style={{ background: 'var(--s-meta)' }} />Meta Ads</td><td className="num">{brl0(canais.meta.invest)}</td><td className="num">{canais.meta.consultas}</td><td className="num">{canais.meta.consultas && canais.meta.invest ? <Heat v={canais.meta.custo} bom={200} ruim={300} /> : <span className="pn-heat none">{canais.meta.invest ? 'sem paciente' : 'pausada'}</span>}</td></tr>
                <tr><td><b>Total pago</b></td><td className="num"><b>{brl0(canais.total.invest)}</b></td><td className="num"><b>{canais.total.consultas}</b></td><td className="num"><b>{canais.total.consultas && canais.total.invest ? brl0(canais.total.custo) : '—'}</b></td></tr>
              </tbody>
            </table>
          </div>
          <p className="pn-note">Indicação e Instagram orgânico não têm custo de mídia e entram só na lista mensal.</p>
        </Card>
      ) : (
        <Vazio texto="Gasto do mês indisponível neste ambiente." />
      )}
    </>
  )
}
