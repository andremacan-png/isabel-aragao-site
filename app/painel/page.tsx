// Painel de Tráfego 2.0 · fase 1: abas Resumo e Google Ads com dados ao vivo do Google Ads;
// fase 2: aba Site com Google Analytics 4 (visitas, origem, páginas, só o domínio do site),
// Clarity (qualidade da navegação) e negativar termo direto da tabela (atrás da chave do painel).
// Tudo é componente de servidor: a navegação por abas, sub-abas e períodos é por link.

import { getMetaData } from './metaAdsData'
import { getGscData, getGscSeries } from './gscData'
import { getCustoConsultaCanais, CONSULTAS_MES } from './painel2Data'
import {
  janela, isPeriodo, conectado, hojeSP, addDays, fmtDia, diaSemana,
  getSerie, getCampanhas, getCampanhasPeriodo, getKeywords, getTermos, getIdade, getGenero, getSegmentos, getAnuncios, getNegativas, negativada,
  type Janela, type PeriodoKey, type Fatia,
} from './lib/googleAds'
import { conectadoGa4, getSiteResumo, getSiteSerie, getSiteCanais, getSiteOrigens, getSitePaginas, getSiteDispositivos, type FatiaSite } from './lib/ga4'
import { conectadoClarity, getClarity, type Clarity } from './lib/clarity'
import { autorizado, chaveConfigurada } from './lib/acesso'
import { negativarTermo } from './actions'
import { montarAlertas } from './lib/alertas'
import { Shell, Card, Vazio, Delta, Spark, Kpi, Alertas, Aviso, Columns, HBars, Funnel, Hours, Heat, IQ, Pill, SubTabs, SubTabsSite, ABAS, SUBS, SUBS_SITE, pick, href, brl, brl0, pct, num, taxa, type Aba, type Sub, type SubSite } from './ui'

type SP = { periodo?: string; aba?: string; sub?: string; feito?: string; erro?: string }

export default async function PainelPage({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams
  const periodo: PeriodoKey = isPeriodo(sp.periodo) ? sp.periodo : '30d'
  const aba: Aba = pick(sp.aba, ABAS, 'resumo')
  const sub: Sub = pick(sp.sub, SUBS, 'palavras')
  const subSite: SubSite = pick(sp.sub, SUBS_SITE, 'visitas')
  const j = janela(periodo)
  const live = conectado()

  return (
    <Shell periodo={periodo} aba={aba} sub={aba === 'site' ? subSite : sub} label={j.label} comparacao={j.comparacao} live={live}>
      {!live && aba !== 'site' && <Vazio texto="Sem conexão com o Google Ads neste ambiente: as variáveis GOOGLE_ADS_* não estão configuradas. Em produção (Vercel) elas existem e o painel fica ao vivo." />}
      {aba === 'resumo' && <Resumo j={j} periodo={periodo} />}
      {aba === 'google' && <Google j={j} periodo={periodo} sub={sub} feito={sp.feito} erro={sp.erro} />}
      {aba === 'site' && <Site j={j} periodo={periodo} sub={subSite} />}
      {aba === 'pacientes' && <Pacientes />}
      <p className="pn-foot">
        Fontes: Google Ads API (todas as campanhas não removidas), Google Analytics 4 (só o domínio isabelaragao.com.br), Search Console, Clarity e a lista mensal de pacientes.
        Contato = clique no WhatsApp: no Google Ads, a partir de um anúncio; no site, de qualquer origem. Paciente = consulta marcada, contada na lista do mês. Painel de uso interno, fora do índice do Google.
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
  const ga4 = conectadoGa4()
  const [serie, campanhas, serie7, termos14, anuncios, campPeriodo, meta, canais, negativas, siteResumo, siteCanais] = await Promise.all([
    getSerie(j),
    getCampanhas(),
    periodo === '7d' ? Promise.resolve(null) : getSerie(j7),
    getTermos(addDays(ontem, -13), ontem, 80),
    getAnuncios(j.dias >= 7 ? j : janela('30d')),
    getCampanhasPeriodo(j),
    META_PERIODOS.includes(periodo) ? getMetaData(periodo) : Promise.resolve(null),
    getCustoConsultaCanais(),
    getNegativas(),
    ga4 ? getSiteResumo(j) : Promise.resolve(null),
    ga4 ? getSiteCanais(j) : Promise.resolve(null),
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

      {siteResumo && siteCanais && (
        <div className="pn-row two">
          <Card titulo="De onde vêm os contatos do site" sub={`${j.label}, Google Analytics, só isabelaragao.com.br. Barra = cliques no WhatsApp por canal; inclui quem chega de graça.`}>
            <div className="pn-legend">
              <span><i style={{ background: 'var(--s-google)' }} />Google Ads</span>
              <span><i style={{ background: 'var(--s-org)' }} />Busca orgânica</span>
              <span><i style={{ background: 'var(--s-meta)' }} />Instagram e Facebook</span>
              <span><i style={{ background: 'var(--s-indic)' }} />Direto</span>
              <span><i style={{ background: 'var(--prev)' }} />Outros</span>
            </div>
            {siteCanais.some((c) => c.cliques > 0) ? (
              <HBars
                rows={[...siteCanais].sort((a, b) => b.cliques - a.cliques || b.sessoes - a.sessoes).slice(0, 6).map((c) => ({ nome: c.nome, v: c.cliques, s: `${num(c.sessoes)} visitas · ${pct(taxa(c.cliques, c.sessoes))}`, cls: corCanal(c.nome) }))}
                fmt={(v) => `${num(v)} ${v === 1 ? 'clique' : 'cliques'}`}
              />
            ) : (
              <Vazio texto="Nenhum clique no WhatsApp registrado pelo site no período (a medição começou em 07/10/2026)." />
            )}
            <p className="pn-note">A aba Site abre por origem, página de entrada e dispositivo.</p>
          </Card>
          <Card titulo="Funil do site inteiro" sub={`${j.label}. Todas as origens juntas, pelo Google Analytics. O funil do Google (acima) é só o anúncio.`}>
            <Funnel
              steps={[
                { nome: 'Visitas', sub: `${num(siteResumo.atual.usuarios)} pessoas diferentes`, v: siteResumo.atual.sessoes },
                { nome: 'Cliques no WhatsApp', sub: `${pct(taxa(siteResumo.atual.cliques, siteResumo.atual.sessoes))} das visitas`, v: siteResumo.atual.cliques },
              ]}
            />
            <div className="pn-foot" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 }}>
              <span className="pn-note" style={{ margin: 0 }}>Visitas</span><Delta atual={siteResumo.atual.sessoes} anterior={siteResumo.anterior.sessoes} texto={j.comparacao} />
              <span className="pn-note" style={{ margin: 0 }}>Cliques</span><Delta atual={siteResumo.atual.cliques} anterior={siteResumo.anterior.cliques} texto={j.comparacao} />
            </div>
          </Card>
        </div>
      )}

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

/** Cor da barra por canal do GA4 (mesma família de cores do resto do painel). */
function corCanal(nome: string): string {
  if (nome.startsWith('Google Ads')) return ''
  if (nome.startsWith('Busca orgânica')) return 'org'
  if (nome.startsWith('Instagram') || nome === 'Meta Ads') return 'meta'
  if (nome.startsWith('Direto')) return 'indic'
  return 'prev'
}

// ───────────────────────────── GOOGLE ADS ─────────────────────────────
async function Google({ j, periodo, sub, feito, erro }: { j: Janela; periodo: PeriodoKey; sub: Sub; feito?: string; erro?: string }) {
  return (
    <>
      <SubTabs periodo={periodo} sub={sub} />
      {sub === 'palavras' && <Palavras j={j} />}
      {sub === 'termos' && <Termos j={j} periodo={periodo} feito={feito} erro={erro} />}
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
    <Card titulo={`Palavras-chave · ${j.label}`} sub="Ordenado por gasto; clique no título de uma coluna para reordenar. Custo por contato: verde até R$ 35, amarelo até R$ 60, vermelho acima. IQ = índice de qualidade do Google (1 a 10).">
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

async function Termos({ j, periodo, feito, erro }: { j: Janela; periodo: PeriodoKey; feito?: string; erro?: string }) {
  const [termos, negativas, podeAgir] = await Promise.all([getTermos(j.inicio, j.fim), getNegativas(), autorizado()])
  if (!termos) return <Vazio texto="Sem resposta do Google Ads para termos de pesquisa." />
  const negs = negativas ?? []
  const volta = href(periodo, 'google', 'termos')
  type T = { termo: string; contatos: number; gasto: number; cliques: number }
  const candidato = (t: T) => !negativada(t.termo, negs) && t.contatos === 0 && t.gasto >= 15
  const leitura = (t: T) =>
    negativada(t.termo, negs) ? <Pill>já negativado</Pill> : t.contatos > 0 ? <Pill tom="good">converte</Pill> : t.gasto >= 15 ? <Pill tom="serious">gastou sem contato</Pill> : t.cliques >= 3 ? <Pill tom="warn">observar</Pill> : <Pill>pouco dado</Pill>
  return (
    <>
      <Aviso feito={feito} erro={erro} />
      <Card titulo={`Termos de pesquisa · ${j.label}`} sub="O que as pessoas digitaram de fato no Google antes de clicar. Ordenado por gasto; clique no título de uma coluna para reordenar. Os que gastaram R$ 15 ou mais sem contato são candidatos a negativa.">
        {termos.length === 0 ? (
          <Vazio texto="Nenhum termo com clique no período." />
        ) : (
          <div className="pn-tbl">
            <table>
              <thead><tr><th>Termo digitado</th><th className="num">Cliques</th><th className="num">Contatos</th><th className="num">Gasto</th><th className="num">Custo/contato</th><th>Leitura</th>{podeAgir && <th>Ação</th>}</tr></thead>
              <tbody>
                {termos.map((t, i) => (
                  <tr key={i}>
                    <td className="kw">{t.termo}</td><td className="num">{t.cliques}</td><td className="num">{num(t.contatos)}</td><td className="num">{brl(t.gasto)}</td><td className="num"><Heat v={t.contatos ? t.gasto / t.contatos : null} /></td><td>{leitura(t)}</td>
                    {podeAgir && (
                      <td>
                        {candidato(t) && (
                          <form action={negativarTermo} className="pn-inline">
                            <input type="hidden" name="termo" value={t.termo} />
                            <input type="hidden" name="volta" value={volta} />
                            <button type="submit" className="pn-btn small">Negativar</button>
                          </form>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="pn-note">
          {podeAgir
            ? 'Negativar adiciona o termo em correspondência de frase em todas as campanhas ativas, na hora e sem simulação. O botão só aparece nos termos "gastou sem contato". Termos já negativados deixam de aparecer nos dias seguintes.'
            : chaveConfigurada()
              ? <>Para negativar direto por aqui, <a href="/painel/entrar" style={{ textDecoration: 'underline' }}>entre com a chave do painel</a> uma vez neste aparelho. Termos já negativados deixam de aparecer nos dias seguintes.</>
              : 'Negativar direto por aqui precisa da variável PAINEL_KEY na Vercel. Enquanto isso, eu faço pela API, com simulação antes.'}
        </p>
      </Card>
    </>
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
async function Site({ j, periodo, sub }: { j: Janela; periodo: PeriodoKey; sub: SubSite }) {
  return (
    <>
      <SubTabsSite periodo={periodo} sub={sub} />
      {sub === 'visitas' ? <Visitas j={j} /> : <Busca />}
    </>
  )
}

/** Tabela padrão das quebras do GA4: visitas, cliques no WhatsApp e conversão. */
function TabelaFatias({ rows, rotulo, blog = false }: { rows: FatiaSite[] | null; rotulo: string; blog?: boolean }) {
  if (!rows) return <Vazio texto="Sem resposta do Google Analytics para esta quebra." />
  if (!rows.length) return <Vazio texto="Sem visitas no período." />
  return (
    <div className="pn-tbl">
      <table className="narrow">
        <thead><tr><th>{rotulo}</th><th className="num">Visitas</th><th className="num">Cliques</th><th className="num">Conversão</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.nome}>
              <td className={blog && r.nome.startsWith('/blog/') ? 'kw' : blog ? 'dim' : ''} title={r.nome}>{r.nome}</td>
              <td className="num">{num(r.sessoes)}</td>
              <td className="num">{r.cliques ? <b>{num(r.cliques)}</b> : <span className="dim">0</span>}</td>
              <td className="num">{r.sessoes ? pct(taxa(r.cliques, r.sessoes)) : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ClarityBloco({ c }: { c: Clarity }) {
  const tom = (p: number, warn: number, serious: number): 'good' | 'warn' | 'serious' => (p >= serious ? 'serious' : p >= warn ? 'warn' : 'good')
  const seg = (s: number) => (s >= 60 ? `${Math.floor(s / 60)} min ${Math.round(s % 60)} s` : `${Math.round(s)} s`)
  return (
    <Card titulo={`Qualidade da navegação · últimos ${c.dias} dias`} sub="Microsoft Clarity, todo o site. Atualiza a cada 6 horas (a API permite 10 consultas por dia). Passe o mouse nos nomes para ver o que cada um mede.">
      <div className="pn-stats">
        <div><span className="pn-eyebrow">Sessões</span><b>{num(c.sessoes)}</b><small>{num(c.usuarios)} pessoas · {num(c.bots)} de robôs</small></div>
        <div title="Até onde a pessoa rola a página, em média"><span className="pn-eyebrow">Rolagem média</span><b>{pct(c.scroll, 0)}</b><small>{c.paginasPorSessao.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} páginas por sessão</small></div>
        <div title="Tempo com a aba aberta e, dele, o tempo mexendo de fato"><span className="pn-eyebrow">Tempo por sessão</span><b>{seg(c.tempoAtivo)}</b><small>ativo, de {seg(c.tempoTotal)} no total</small></div>
        <div title="Clicou em algo e nada aconteceu (texto que parece botão, imagem que parece link)"><span className="pn-eyebrow">Cliques mortos</span><b><Pill tom={tom(c.cliquesMortos.pct, 15, 30)}>{pct(c.cliquesMortos.pct, 0)} das sessões</Pill></b><small>{num(c.cliquesMortos.sessoes)} cliques</small></div>
        <div title="Vários cliques seguidos no mesmo lugar: frustração"><span className="pn-eyebrow">Cliques de raiva</span><b><Pill tom={tom(c.cliquesRaiva.pct, 2, 5)}>{pct(c.cliquesRaiva.pct, 0)} das sessões</Pill></b><small>{num(c.cliquesRaiva.sessoes)} cliques</small></div>
        <div title="Entrou numa página e voltou em poucos segundos"><span className="pn-eyebrow">Volta rápida</span><b><Pill tom={tom(c.voltaRapida.pct, 5, 10)}>{pct(c.voltaRapida.pct, 0)} das sessões</Pill></b><small>{num(c.voltaRapida.sessoes)} vezes</small></div>
        <div title="Erro de programação na página, visto pelo navegador"><span className="pn-eyebrow">Erros de script</span><b><Pill tom={tom(c.errosScript.pct, 1, 5)}>{pct(c.errosScript.pct, 0)} das sessões</Pill></b><small>{num(c.errosScript.sessoes)} erros</small></div>
      </div>
      <p className="pn-note">Cliques mortos acima de 15% das sessões merecem olhar as gravações no Clarity: em geral é um elemento que parece clicável e não é.</p>
    </Card>
  )
}

async function Visitas({ j }: { j: Janela }) {
  if (!conectadoGa4()) return <Vazio texto="Google Analytics sem credencial neste ambiente (variáveis GA4_*). Em produção, na Vercel, elas existem e esta aba fica ao vivo." />
  const [resumo, serie, canais, origens, paginas, dispositivos, clarity] = await Promise.all([
    getSiteResumo(j), getSiteSerie(j), getSiteCanais(j), getSiteOrigens(j), getSitePaginas(j), getSiteDispositivos(j),
    conectadoClarity() ? getClarity(3) : Promise.resolve(null),
  ])
  if (!resumo) return <Vazio texto="O Google Analytics não respondeu. Recarregue em um minuto; se persistir, a credencial pode ter sido revogada (rodar o script 1 de novo e trocar as variáveis GA4_* na Vercel)." />
  const a = resumo.atual, b = resumo.anterior
  const fds = (dias: { data: string }[]) => (i: number) => (diaSemana(dias[i].data) % 6 === 0 ? 'prev' : '')
  return (
    <>
      <div className="pn-row kpis">
        <Kpi eyebrow="Visitas ao site" valor={num(a.sessoes)} nota={`${num(a.usuarios)} pessoas diferentes. Só isabelaragao.com.br; o sistema da clínica fica de fora.`}>
          <Delta atual={a.sessoes} anterior={b.sessoes} texto={j.comparacao} />
          {serie && <Spark vals={serie.map((d) => d.sessoes)} />}
        </Kpi>
        <Kpi eyebrow="Cliques no WhatsApp" valor={num(a.cliques)} nota="Todas as origens, inclusive quem chega de graça. Medido desde 07/10/2026; antes disso o período mostra zero.">
          <Delta atual={a.cliques} anterior={b.cliques} texto={j.comparacao} />
          {serie && <Spark vals={serie.map((d) => d.cliques)} />}
        </Kpi>
        <Kpi eyebrow="Visitas que clicam" valor={pct(taxa(a.cliques, a.sessoes))} nota="O anúncio do Google converte 12 a 15% dos cliques; o site inteiro fica abaixo porque inclui blog e curiosos.">
          <Delta atual={taxa(a.cliques, a.sessoes)} anterior={taxa(b.cliques, b.sessoes)} texto={j.comparacao} />
        </Kpi>
      </div>

      {serie && serie.length > 1 && (
        <Card titulo="Visitas e cliques por dia" sub={`${j.label}. Fins de semana em cinza. Passe o mouse para ver o dia.`}>
          <p className="pn-eyebrow">Visitas</p>
          <Columns vals={serie.map((d) => d.sessoes)} labels={serie.map((d) => fmtDia(d.data))} tips={serie.map((d) => `${fmtDia(d.data)} · ${num(d.sessoes)} visitas · ${num(d.cliques)} cliques`)} cls={fds(serie)} />
          <p className="pn-eyebrow" style={{ marginTop: 10 }}>Cliques no WhatsApp</p>
          <Columns vals={serie.map((d) => d.cliques)} labels={serie.map((d) => fmtDia(d.data))} tips={serie.map((d) => `${fmtDia(d.data)} · ${num(d.cliques)} cliques`)} height={110} cls={fds(serie)} />
        </Card>
      )}

      <div className="pn-row two">
        <Card titulo="Por canal" sub="De onde a visita veio, na classificação do Google. Conversão = cliques por visita.">
          <TabelaFatias rows={canais} rotulo="Canal" />
        </Card>
        <Card titulo="Por origem" sub="Mais fino que o canal: o site de onde veio e o tipo de link.">
          <TabelaFatias rows={origens} rotulo="Origem" />
        </Card>
      </div>
      <div className="pn-row two">
        <Card titulo="Página de entrada" sub="Primeira página da visita. Cliques = visitas que entraram por ela e clicaram no WhatsApp em qualquer página depois. Blog em negrito.">
          <TabelaFatias rows={paginas} rotulo="Página" blog />
        </Card>
        <Card titulo="Dispositivo" sub="Barra = visitas; ao lado, cliques e conversão.">
          {dispositivos && dispositivos.length ? (
            <HBars rows={dispositivos.map((d) => ({ nome: d.nome, v: d.sessoes, s: `${num(d.cliques)} cliques · ${pct(taxa(d.cliques, d.sessoes))}` }))} fmt={(v) => num(v)} />
          ) : (
            <Vazio texto="Sem dados por dispositivo." />
          )}
          <p className="pn-note">Velocidade no celular: nota 94 no Lighthouse em 06/10, depois de tirar o Pixel do carregamento inicial (antes, 61).</p>
        </Card>
      </div>

      {clarity ? <ClarityBloco c={clarity} /> : conectadoClarity() ? <Vazio texto="O Clarity não respondeu (limite de 10 consultas por dia ou token inválido). Tenta de novo em até 6 horas." /> : <p className="pn-note">Clarity: para ver rolagem, cliques mortos e voltas rápidas aqui, adicione a variável CLARITY_API_TOKEN na Vercel (o mesmo token do conector local).</p>}
    </>
  )
}

async function Busca() {
  const [gsc, serie] = await Promise.all([getGscData(), getGscSeries(60)])
  return (
    <>
      {gsc ? (
        <>
          <div className="pn-row kpis">
            <Kpi eyebrow="Cliques orgânicos · 28 dias" valor={num(gsc.totais.cliques)} nota={gsc.periodo} />
            <Kpi eyebrow="Impressões" valor={num(gsc.totais.impressoes)} />
            <Kpi eyebrow="CTR geral (cliques ÷ impressões)" valor={pct(taxa(gsc.totais.cliques, gsc.totais.impressoes))} nota="Baixo porque o artigo do Mounjaro aparece 40 mil vezes em posição 8 e quase ninguém clica. Posição média por página na tabela abaixo." />
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
