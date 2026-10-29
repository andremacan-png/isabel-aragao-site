'use client'
// Simulador de perda de peso: três doses lado a lado (escolha de dose é médica, a pessoa não escolhe),
// faixa de bom a baixo respondedor, modo "onde estou na curva" e cenário "e se parar".
// Roda só no navegador; nada é enviado nem salvo. Curvas e fontes em lib/simulador/curvas.ts.
import { useMemo, useState } from 'react'
import { VERSAO_CURVAS, type Curva } from '@/lib/simulador/curvas'
import { imc, classificacaoImc, projetar, projetarParada, marcos, posicao, curvasDe, doseNaSemana } from '@/lib/simulador/motor'

type Med = Curva['medicamento']
const MEDS: { id: Med; rotulo: string }[] = [
  { id: 'tirzepatida', rotulo: 'Tirzepatida (Mounjaro)' },
  { id: 'semaglutida', rotulo: 'Semaglutida injetável (Wegovy, Ozempic)' },
  { id: 'semaglutida-oral', rotulo: 'Semaglutida oral' },
]
const WA = 'https://wa.me/5548991593468?text=' + encodeURIComponent('Olá! Usei o simulador de perda de peso do site da Dra. Isabel e gostaria de agendar uma avaliação.')

const CSS = `
.sim{background:#fff;border:1px solid rgba(30,17,69,.12);border-radius:16px;padding:18px;margin:24px 0;font-family:system-ui,-apple-system,sans-serif;color:#2C1A5C;}
.sim *{box-sizing:border-box;}
.sim-h{font-size:18px;font-weight:800;margin:0 0 4px;letter-spacing:-.01em;}
.sim-sub{font-size:13px;color:#7C6DA8;margin:0 0 14px;line-height:1.5;}
.sim-form{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:12px;}
@media(min-width:600px){.sim-form{grid-template-columns:repeat(4,1fr);}}
.sim-lbl{display:block;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#7C6DA8;margin-bottom:4px;}
.sim-in{width:100%;border:1px solid rgba(30,17,69,.18);border-radius:10px;padding:10px 12px;font-size:16px;color:#2C1A5C;background:#fff;}
.sim-tabs{display:flex;flex-wrap:wrap;gap:6px;margin:4px 0 14px;}
.sim-tab{border:1px solid rgba(30,17,69,.15);background:#F7F3EF;color:#3B2574;border-radius:20px;padding:7px 12px;font-size:12px;font-weight:700;cursor:pointer;}
.sim-tab.on{background:#1E1145;color:#fff;border-color:#1E1145;}
.sim-imc{font-size:13px;color:#2C1A5C;background:#F7F3EF;border-radius:10px;padding:10px 12px;margin-bottom:14px;line-height:1.5;}
.sim-grid{display:grid;grid-template-columns:1fr;gap:12px;}
@media(min-width:700px){.sim-grid{grid-template-columns:repeat(3,1fr);}.sim-grid.dois{grid-template-columns:repeat(2,1fr);}.sim-grid.um{grid-template-columns:1fr;max-width:480px;}}
.sim-card{border:1px solid rgba(30,17,69,.12);border-radius:12px;padding:12px;background:#fff;}
.sim-card h4{margin:0 0 2px;font-size:14px;font-weight:800;}
.sim-card .dose{font-size:11px;color:#7C6DA8;margin-bottom:8px;}
.sim-card svg{width:100%;height:auto;display:block;}
.sim-marcos{font-size:12px;line-height:1.5;margin:8px 0 0;padding:0;list-style:none;}
.sim-marcos li{display:flex;justify-content:space-between;gap:8px;border-top:1px dashed rgba(30,17,69,.12);padding:4px 0;}
.sim-marcos b{font-weight:800;}
.sim-pos{margin-top:8px;font-size:12px;border-radius:8px;padding:8px 10px;line-height:1.45;}
.sim-pos.dentro{background:#E6F4EC;color:#1F6B45;}
.sim-pos.acima{background:#E8F0FB;color:#1F4B8F;}
.sim-pos.abaixo{background:#FBEFE6;color:#8A4B16;}
.sim-pos.cedo{background:#F2EFF8;color:#3B2574;}
.sim-opts{display:flex;flex-wrap:wrap;gap:10px 18px;align-items:center;margin:14px 0 6px;font-size:13px;}
.sim-opts label{display:flex;align-items:center;gap:6px;cursor:pointer;}
.sim-opts select{border:1px solid rgba(30,17,69,.18);border-radius:8px;padding:6px 8px;font-size:13px;}
.sim-leitura{font-size:13px;line-height:1.55;background:#F7F3EF;border-left:4px solid #E8823A;border-radius:0 10px 10px 0;padding:10px 12px;margin:12px 0;}
.sim-aviso{font-size:11px;color:#7C6DA8;line-height:1.5;margin:12px 0 0;}
.sim-cta{display:inline-flex;align-items:center;gap:8px;background:#E8823A;color:#fff;font-weight:800;font-size:14px;padding:12px 18px;border-radius:10px;text-decoration:none;margin-top:12px;}
.sim-leg{display:flex;flex-wrap:wrap;gap:12px;font-size:11px;color:#7C6DA8;margin:6px 0 0;}
.sim-leg i{display:inline-block;width:14px;height:3px;border-radius:2px;vertical-align:middle;margin-right:4px;}
`

function fmtKg(v: number) { return v.toLocaleString('pt-BR', { maximumFractionDigits: 1, minimumFractionDigits: 1 }) }
function fmtPct(v: number) { return (-v).toLocaleString('pt-BR', { maximumFractionDigits: 0 }) }

function Grafico({ peso, curva, semanaParada, pontoReal }: { peso: number; curva: Curva; semanaParada: number | null; pontoReal: { semana: number; pct: number } | null }) {
  const ate = semanaParada ? semanaParada + 52 : 72
  const W = 320, H = 190, L = 34, R = 8, T = 10, B = 26
  const minPct = -30
  const x = (s: number) => L + ((W - L - R) * s) / ate
  const y = (p: number) => T + ((H - T - B) * (0 - p)) / (0 - minPct)
  const media = semanaParada ? projetarParada(peso, curva, semanaParada, 'media', ate) : projetar(peso, curva, 'media', ate)
  const bom = semanaParada ? projetarParada(peso, curva, semanaParada, 'bom', ate) : projetar(peso, curva, 'bom', ate)
  const baixo = semanaParada ? projetarParada(peso, curva, semanaParada, 'baixo', ate) : projetar(peso, curva, 'baixo', ate)
  const path = (pts: { semana: number; pct: number }[], ateS = ate, deS = 0) => pts.filter((p) => p.semana >= deS && p.semana <= ateS).map((p, i) => `${i ? 'L' : 'M'}${x(p.semana).toFixed(1)},${y(p.pct).toFixed(1)}`).join(' ')
  const band = `${path(bom)} ${[...baixo].reverse().map((p) => `L${x(p.semana).toFixed(1)},${y(p.pct).toFixed(1)}`).join(' ')} Z`
  const gridY = [0, -5, -10, -15, -20, -25, -30]
  const gridX = semanaParada ? [0, 24, 48, 72, 96, 124].filter((s) => s <= ate) : [0, 12, 24, 48, 72]
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Curva de perda esperada, ${curva.rotulo}`}>
      {gridY.map((g) => (
        <g key={g}>
          <line x1={L} x2={W - R} y1={y(g)} y2={y(g)} stroke="rgba(30,17,69,.08)" />
          <text x={L - 4} y={y(g) + 3} fontSize="9" textAnchor="end" fill="#7C6DA8">{g}%</text>
        </g>
      ))}
      {gridX.map((g) => (
        <text key={g} x={x(g)} y={H - 8} fontSize="9" textAnchor="middle" fill="#7C6DA8">{g === 0 ? 'sem 0' : g}</text>
      ))}
      <path d={band} fill="rgba(59,37,116,.10)" />
      {semanaParada ? (
        <>
          <path d={path(media, semanaParada)} fill="none" stroke="#3B2574" strokeWidth="2.2" />
          <path d={path(media, ate, semanaParada)} fill="none" stroke="#E8823A" strokeWidth="2.2" strokeDasharray="5 4" />
          <line x1={x(semanaParada)} x2={x(semanaParada)} y1={T} y2={H - B} stroke="#E8823A" strokeDasharray="3 3" />
          <text x={x(semanaParada) + 3} y={T + 10} fontSize="9" fill="#E8823A">parou</text>
        </>
      ) : (
        <path d={path(media)} fill="none" stroke="#3B2574" strokeWidth="2.2" />
      )}
      {pontoReal && pontoReal.semana <= ate && (
        <g>
          <circle cx={x(pontoReal.semana)} cy={y(pontoReal.pct)} r="5" fill="#E8823A" stroke="#fff" strokeWidth="2" />
          <text x={x(pontoReal.semana)} y={y(pontoReal.pct) - 8} fontSize="9" textAnchor="middle" fill="#8A4B16" fontWeight="700">você</text>
        </g>
      )}
    </svg>
  )
}

export default function Simulador({ compacto = false }: { compacto?: boolean }) {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [med, setMed] = useState<Med>('tirzepatida')
  const [jaUso, setJaUso] = useState(false)
  const [semanas, setSemanas] = useState('')
  const [pesoAtual, setPesoAtual] = useState('')
  const [parar, setParar] = useState(false)
  const [semanaParada, setSemanaParada] = useState(72)

  const p = parseFloat(peso.replace(',', '.'))
  const a = parseFloat(altura.replace(',', '.'))
  const pesoOk = p >= 35 && p <= 300
  const alturaOk = a >= 120 && a <= 230
  const pronto = pesoOk && alturaOk
  const v = pronto ? imc(p, a) : null
  const curvas = useMemo(() => curvasDe(med), [med])
  const sem = parseInt(semanas, 10)
  const pa = parseFloat(pesoAtual.replace(',', '.'))
  const realOk = jaUso && sem >= 1 && sem <= 72 && pa > 20 && pa < 400 && pronto
  const pontoReal = realOk ? { semana: sem, pct: ((pa - p) / p) * 100 } : null

  return (
    <div className="sim">
      <style>{CSS}</style>
      <div className="sim-h">{compacto ? 'Simule a perda de peso esperada' : 'Simulador de perda de peso'}</div>
      <p className="sim-sub">Projeção baseada nas médias dos estudos clínicos, por dose e por cenário de resposta. Não é promessa nem prescrição: a dose e o tratamento são decididos em consulta. Nada do que você digita é enviado ou salvo.</p>

      <div className="sim-form">
        <div><label className="sim-lbl" htmlFor="sim-peso">Peso atual (kg)</label><input id="sim-peso" className="sim-in" inputMode="decimal" placeholder="ex.: 92" value={peso} onChange={(e) => setPeso(e.target.value)} /></div>
        <div><label className="sim-lbl" htmlFor="sim-alt">Altura (cm)</label><input id="sim-alt" className="sim-in" inputMode="numeric" placeholder="ex.: 165" value={altura} onChange={(e) => setAltura(e.target.value)} /></div>
        {jaUso && (
          <>
            <div><label className="sim-lbl" htmlFor="sim-sem">Semanas de uso</label><input id="sim-sem" className="sim-in" inputMode="numeric" placeholder="ex.: 12" value={semanas} onChange={(e) => setSemanas(e.target.value)} /></div>
            <div><label className="sim-lbl" htmlFor="sim-pa">Peso de hoje (kg)</label><input id="sim-pa" className="sim-in" inputMode="decimal" placeholder="ex.: 86" value={pesoAtual} onChange={(e) => setPesoAtual(e.target.value)} /></div>
          </>
        )}
      </div>
      {jaUso && <p className="sim-sub">No modo “já uso”, informe o peso que você tinha ao começar no campo “Peso atual (kg)” e o peso de hoje no campo ao lado.</p>}

      <div className="sim-tabs" role="tablist" aria-label="Medicamento">
        {MEDS.map((m) => (
          <button key={m.id} type="button" role="tab" aria-selected={med === m.id} className={`sim-tab${med === m.id ? ' on' : ''}`} onClick={() => setMed(m.id)}>{m.rotulo}</button>
        ))}
      </div>

      {v !== null && (
        <div className="sim-imc">IMC atual <b>{v.toFixed(1)}</b> ({classificacaoImc(v)}). {v >= 30 ? 'Na faixa em que os medicamentos têm indicação, avaliada em consulta.' : v >= 27 ? 'Faixa em que a indicação depende de doença associada, avaliada em consulta.' : 'Abaixo da faixa de indicação dos medicamentos para obesidade; o simulador segue só como referência.'}</div>
      )}

      {pronto ? (
        <>
          <div className={`sim-grid${curvas.length === 2 ? ' dois' : curvas.length === 1 ? ' um' : ''}`}>
            {curvas.map((c) => {
              const m = marcos(p, c)
              const pos = pontoReal ? posicao(p, pa, sem, c) : null
              return (
                <div className="sim-card" key={c.id}>
                  <h4>{c.rotulo}{c.estimativa ? ' *' : ''}</h4>
                  <div className="dose">Dose alvo a partir da semana {c.semanaDoseAlvo} pelo esquema da bula{pontoReal ? ` · dose prevista na semana ${sem}: ${String(doseNaSemana(c, sem)).replace('.', ',')} mg` : ''}</div>
                  <Grafico peso={p} curva={c} semanaParada={parar ? semanaParada : null} pontoReal={pontoReal} />
                  <ul className="sim-marcos">
                    {m.filter((x) => compacto ? [12, 24, 72].includes(x.semana) : true).map((x) => (
                      <li key={x.semana}><span>Semana {x.semana}</span><span><b>{fmtKg(x.media.pesoKg)} kg</b> ({fmtKg(x.baixo.pesoKg)} a {fmtKg(x.bom.pesoKg)})</span></li>
                    ))}
                  </ul>
                  {pos && <div className={`sim-pos ${pos.faixa}`}>Sua perda: {fmtPct(pos.pctReal)}% · esperado nesta dose: {fmtPct(pos.pctEsperadoBaixo)}% a {fmtPct(pos.pctEsperadoBom)}% · {pos.faixa === 'cedo' ? 'cedo para avaliar' : pos.faixa === 'dentro' ? 'dentro da faixa' : pos.faixa === 'acima' ? 'acima da faixa' : 'abaixo da faixa'}</div>}
                </div>
              )
            })}
          </div>
          <div className="sim-leg"><span><i style={{ background: '#3B2574' }} />média do estudo</span><span><i style={{ background: 'rgba(59,37,116,.25)', height: 10 }} />faixa de respondedor baixo a bom</span>{parar && <span><i style={{ background: '#E8823A' }} />após parar (reganho médio)</span>}</div>
        </>
      ) : (
        <p className="sim-sub">Preencha peso e altura para ver as curvas.</p>
      )}

      <div className="sim-opts">
        <label><input type="checkbox" checked={jaUso} onChange={(e) => setJaUso(e.target.checked)} /> Já uso: onde estou na curva?</label>
        <label><input type="checkbox" checked={parar} onChange={(e) => setParar(e.target.checked)} /> E se eu parar na semana</label>
        <select value={semanaParada} onChange={(e) => setSemanaParada(parseInt(e.target.value, 10))} disabled={!parar} aria-label="Semana da parada">
          {[24, 36, 52, 72].map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {pontoReal && pronto && (
        <div className="sim-leitura">{posicao(p, pa, sem, curvas[Math.min(1, curvas.length - 1)]).leitura}{posicao(p, pa, sem, curvas[0]).precoce === true ? ' Você já passou do limiar de resposta precoce (5% até a semana 8 a 12), o que nos estudos se associou a resultado final melhor.' : ''}</div>
      )}
      {parar && pronto && (
        <div className="sim-leitura">Se o tratamento for interrompido sem plano de manutenção, os estudos mostram reganho de cerca de dois terços do peso perdido em um ano (STEP 1 extensão; SURMOUNT-4). A linha tracejada mostra essa média. Parar, reduzir ou espaçar é decisão de consulta, com plano.</div>
      )}

      <a href={WA} className="sim-cta">💬 Quero avaliar meu caso no WhatsApp</a>
      <p className="sim-aviso">Curvas: SURMOUNT-1 (tirzepatida 5, 10 e 15 mg, 72 semanas), STEP 1 (semaglutida 2,4 mg, 68 semanas), OASIS 4 (semaglutida oral 25 mg, 64 semanas); faixa de resposta a partir dos estudos de respondedor precoce; reganho a partir da extensão do STEP 1 e do SURMOUNT-4. Pontos intermediários lidos das figuras (aproximação). {curvas.some((c) => c.estimativa) ? '* Curva com estimativa. ' : ''}Esquema de dose pela bula; o ritmo real é individual. Versão das curvas: {VERSAO_CURVAS}. Projeção de médias de estudos, não promessa de resultado. Uso dos medicamentos somente com prescrição e acompanhamento médico.</p>
    </div>
  )
}
