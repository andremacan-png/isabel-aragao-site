'use client'

import { useState } from 'react'
import Link from 'next/link'

const WA = 'https://wa.me/5548991593468?text=' + encodeURIComponent('Olá! Fiz a calculadora de IMC no site e gostaria de agendar uma avaliação com a Dra. Isabel.')

type Faixa = { min: number; max: number; label: string; cor: string; msg: string }

const FAIXAS: Faixa[] = [
  { min: 0, max: 18.5, label: 'Abaixo do peso', cor: '#5B8FB9', msg: 'Seu IMC está abaixo da faixa saudável. Vale uma avaliação para entender a causa.' },
  { min: 18.5, max: 25, label: 'Peso normal', cor: '#2D9E6B', msg: 'Seu IMC está dentro da faixa saudável. Manter é o objetivo.' },
  { min: 25, max: 30, label: 'Sobrepeso', cor: '#D9A21B', msg: 'Seu IMC indica sobrepeso. É o melhor momento para agir, antes de evoluir para obesidade.' },
  { min: 30, max: 35, label: 'Obesidade grau 1', cor: '#E8823A', msg: 'Seu IMC indica obesidade grau 1, que é uma condição de saúde. O acompanhamento médico faz diferença real.' },
  { min: 35, max: 40, label: 'Obesidade grau 2', cor: '#D9633A', msg: 'Seu IMC indica obesidade grau 2. Buscar acompanhamento médico é fortemente recomendado.' },
  { min: 40, max: 999, label: 'Obesidade grau 3', cor: '#C0392B', msg: 'Seu IMC indica obesidade grau 3 (grave). O acompanhamento médico é importante e pode transformar a sua saúde.' },
]

// Segmentos da barra visual (IMC 15 a 42)
const BAR_MIN = 15
const BAR_MAX = 42
const SEGMENTOS = [
  { ate: 18.5, cor: '#5B8FB9' },
  { ate: 25, cor: '#2D9E6B' },
  { ate: 30, cor: '#D9A21B' },
  { ate: 35, cor: '#E8823A' },
  { ate: 40, cor: '#D9633A' },
  { ate: 42, cor: '#C0392B' },
]

function classificar(imc: number): Faixa {
  return FAIXAS.find((f) => imc >= f.min && imc < f.max) ?? FAIXAS[FAIXAS.length - 1]
}

const STYLES = `
  :root{--roxo:#1E1145;--roxo-mid:#3B2574;--ambar:#E8823A;--ambar-l:#F5A623;
    --cream:#F7F3EF;--cream2:#EDE6DC;--text:#2C1A5C;--text-body:#3D3450;
    --muted:#7C6DA8;--surface:#FFFFFF;--border:rgba(30,17,69,.10);--green:#2D9E6B;}
  @media(prefers-color-scheme:dark){
    :root{--cream:#14102A;--cream2:#1C1640;--surface:#1E1A38;--text:#EDE6DC;--text-body:#CCC3E8;--muted:#9B8FCC;--border:rgba(255,255,255,.10);}
  }
  *{box-sizing:border-box;margin:0;padding:0;}
  .imc{background:var(--cream);color:var(--text-body);font-family:system-ui,-apple-system,sans-serif;line-height:1.7;min-height:100vh;}
  /* NAV */
  .imc-nav{background:var(--roxo);display:flex;align-items:center;justify-content:space-between;padding:0 28px;height:60px;position:sticky;top:0;z-index:100;}
  .imc-brand{display:flex;align-items:center;gap:10px;text-decoration:none;}
  .imc-logo{width:32px;height:32px;background:var(--ambar);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;}
  .imc-name{color:#fff;font-weight:800;font-size:15px;}
  .imc-nav-links{display:flex;gap:20px;}
  .imc-nav-links a{color:rgba(255,255,255,.7);font-size:13px;font-weight:600;text-decoration:none;}
  .imc-nav-links a:hover{color:#fff;}
  .imc-nav-cta{background:var(--ambar);color:#fff;font-weight:800;font-size:13px;padding:8px 16px;border-radius:8px;text-decoration:none;white-space:nowrap;}
  @media(max-width:600px){.imc-nav-links{display:none;}}
  /* HERO */
  .imc-hero{background:var(--roxo);padding:36px 24px 30px;text-align:center;}
  .imc-hero .ey{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.14em;color:var(--ambar-l);margin-bottom:8px;}
  .imc-hero h1{font-size:30px;font-weight:800;color:#fff;letter-spacing:-.02em;margin-bottom:8px;}
  @media(max-width:500px){.imc-hero h1{font-size:24px;}}
  .imc-hero p{font-size:14px;color:rgba(255,255,255,.7);max-width:520px;margin:0 auto;line-height:1.6;}
  /* WRAP */
  .imc-wrap{max-width:720px;margin:0 auto;padding:28px 20px 60px;}
  /* CARD calculadora */
  .imc-card{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:26px;box-shadow:0 6px 26px rgba(30,17,69,.06);}
  .imc-inputs{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
  @media(max-width:440px){.imc-inputs{grid-template-columns:1fr;}}
  .imc-field label{display:block;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.05em;color:var(--muted);margin-bottom:6px;}
  .imc-field .wrap{display:flex;align-items:center;border:1.5px solid var(--border);border-radius:12px;background:var(--cream);overflow:hidden;transition:border-color .15s;}
  .imc-field .wrap:focus-within{border-color:var(--ambar);}
  .imc-field input{flex:1;border:none;background:transparent;padding:14px 14px;font-size:20px;font-weight:700;color:var(--text);width:100%;outline:none;-moz-appearance:textfield;}
  .imc-field input::-webkit-outer-spin-button,.imc-field input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}
  .imc-field .un{padding-right:14px;font-size:13px;font-weight:700;color:var(--muted);}
  /* RESULT */
  .imc-res{margin-top:24px;padding-top:24px;border-top:1px solid var(--border);}
  .imc-res-empty{text-align:center;color:var(--muted);font-size:14px;padding:8px 0;}
  .imc-res-top{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;justify-content:center;text-align:center;}
  .imc-num{font-size:52px;font-weight:800;color:var(--text);line-height:1;letter-spacing:-1px;}
  .imc-chip{font-size:14px;font-weight:800;color:#fff;padding:6px 14px;border-radius:999px;}
  .imc-msg{text-align:center;font-size:14.5px;color:var(--text-body);margin:14px auto 0;max-width:460px;}
  /* BARRA */
  .imc-scale{margin:22px 0 4px;}
  .imc-bar{position:relative;height:16px;border-radius:8px;overflow:visible;display:flex;}
  .imc-bar .seg:first-child{border-radius:8px 0 0 8px;}
  .imc-bar .seg:last-child{border-radius:0 8px 8px 0;}
  .imc-marker{position:absolute;top:-9px;width:2px;height:34px;background:var(--text);transform:translateX(-1px);}
  .imc-marker::before{content:'';position:absolute;top:-7px;left:-5px;border-left:6px solid transparent;border-right:6px solid transparent;border-top:8px solid var(--text);}
  .imc-scale-lbls{display:flex;justify-content:space-between;font-size:10.5px;color:var(--muted);margin-top:8px;font-weight:600;}
  /* CTA quando obeso/sobrepeso */
  .imc-alert{margin-top:20px;background:var(--roxo);border-radius:14px;padding:20px 22px;text-align:center;}
  .imc-alert p{color:rgba(255,255,255,.82);font-size:13.5px;margin-bottom:14px;line-height:1.5;}
  .imc-alert .btn{display:inline-flex;align-items:center;gap:9px;background:#25D366;color:#fff;font-weight:800;font-size:14px;padding:12px 24px;border-radius:10px;text-decoration:none;}
  /* CONTEUDO */
  .imc-sec{margin-top:40px;}
  .imc-sec h2{font-size:21px;font-weight:800;color:var(--text);margin-bottom:12px;letter-spacing:-.01em;}
  .imc-sec p{font-size:15.5px;line-height:1.72;margin-bottom:14px;}
  .imc-sec a{color:var(--ambar);font-weight:700;text-decoration:none;}
  .imc-sec a:hover{text-decoration:underline;}
  /* TABELA faixas */
  .imc-tab{width:100%;border-collapse:collapse;background:var(--surface);border:1px solid var(--border);border-radius:12px;overflow:hidden;font-size:14px;margin:6px 0 14px;}
  .imc-tab th,.imc-tab td{text-align:left;padding:11px 14px;border-bottom:1px solid var(--border);}
  .imc-tab th{background:var(--cream2);font-weight:800;color:var(--text);font-size:12px;text-transform:uppercase;letter-spacing:.04em;}
  .imc-tab tr:last-child td{border-bottom:none;}
  .imc-tab .dot{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:8px;vertical-align:middle;}
  /* CTA final */
  .imc-final{background:var(--roxo);border-radius:16px;padding:28px;text-align:center;margin-top:36px;}
  .imc-final .ey{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:var(--ambar-l);margin-bottom:8px;}
  .imc-final h3{color:#fff;font-size:20px;font-weight:800;margin-bottom:8px;}
  .imc-final p{color:rgba(255,255,255,.72);font-size:14px;margin-bottom:20px;line-height:1.5;}
  .imc-final .btn{display:inline-flex;align-items:center;gap:10px;background:#25D366;color:#fff;font-weight:800;font-size:15px;padding:14px 28px;border-radius:10px;text-decoration:none;}
  .imc-disc{font-size:12px;color:var(--muted);margin-top:22px;line-height:1.55;text-align:center;}
`

export default function CalculadoraIMC() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  const p = parseFloat(peso.replace(',', '.'))
  const aRaw = parseFloat(altura.replace(',', '.'))
  const alturaM = aRaw > 3 ? aRaw / 100 : aRaw // aceita "170" (cm) ou "1,70" (m)
  const valido = p > 0 && p < 400 && alturaM > 0.9 && alturaM < 2.5
  const imc = valido ? p / (alturaM * alturaM) : null
  const faixa = imc ? classificar(imc) : null
  const pos = imc ? Math.min(100, Math.max(0, ((imc - BAR_MIN) / (BAR_MAX - BAR_MIN)) * 100)) : 0
  const preocupa = !!imc && imc >= 25

  return (
    <>
      <style>{STYLES}</style>
      <div className="imc">
        <nav className="imc-nav">
          <Link href="/" className="imc-brand">
            <div className="imc-logo">💜</div>
            <span className="imc-name">Dra. Isabel Aragão</span>
          </Link>
          <div className="imc-nav-links">
            <Link href="/">Início</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <a href={WA} className="imc-nav-cta">Agendar Consulta</a>
        </nav>

        <div className="imc-hero">
          <div className="ey">Ferramenta gratuita</div>
          <h1>Calculadora de IMC</h1>
          <p>Descubra seu Índice de Massa Corporal, entenda o que a faixa significa e saiba quando o peso pede acompanhamento médico.</p>
        </div>

        <div className="imc-wrap">
          <div className="imc-card">
            <div className="imc-inputs">
              <div className="imc-field">
                <label htmlFor="peso">Seu peso</label>
                <div className="wrap">
                  <input id="peso" type="number" inputMode="decimal" placeholder="70" value={peso} onChange={(e) => setPeso(e.target.value)} aria-label="Peso em quilos" />
                  <span className="un">kg</span>
                </div>
              </div>
              <div className="imc-field">
                <label htmlFor="altura">Sua altura</label>
                <div className="wrap">
                  <input id="altura" type="number" inputMode="decimal" placeholder="170" value={altura} onChange={(e) => setAltura(e.target.value)} aria-label="Altura em centímetros" />
                  <span className="un">cm</span>
                </div>
              </div>
            </div>

            <div className="imc-res">
              {!imc || !faixa ? (
                <p className="imc-res-empty">Preencha seu peso e altura para ver o resultado.</p>
              ) : (
                <>
                  <div className="imc-res-top">
                    <span className="imc-num">{imc.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</span>
                    <span className="imc-chip" style={{ background: faixa.cor }}>{faixa.label}</span>
                  </div>
                  <p className="imc-msg">{faixa.msg}</p>

                  <div className="imc-scale" aria-hidden="true">
                    <div className="imc-bar">
                      {SEGMENTOS.map((s, i) => {
                        const ini = i === 0 ? BAR_MIN : SEGMENTOS[i - 1].ate
                        const w = ((s.ate - ini) / (BAR_MAX - BAR_MIN)) * 100
                        return <div key={i} className="seg" style={{ width: `${w}%`, background: s.cor }} />
                      })}
                      <div className="imc-marker" style={{ left: `${pos}%` }} />
                    </div>
                    <div className="imc-scale-lbls">
                      <span>Abaixo</span><span>Normal</span><span>Sobrepeso</span><span>Obesidade</span>
                    </div>
                  </div>

                  {preocupa && (
                    <div className="imc-alert">
                      <p>Um IMC nessa faixa é um bom motivo para conversar com uma médica de emagrecimento. Quanto antes se cuida, mais simples é o caminho.</p>
                      <a href={WA} className="btn">💬 Agendar uma avaliação</a>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="imc-sec">
            <h2>O que é o IMC</h2>
            <p>O IMC (Índice de Massa Corporal) é uma conta simples que relaciona o seu peso com a sua altura: peso dividido pela altura ao quadrado. Ele serve como um primeiro sinalizador, usado no mundo todo, para indicar se o peso está numa faixa saudável ou se merece atenção.</p>
            <table className="imc-tab">
              <thead><tr><th>Faixa de IMC</th><th>Classificação</th></tr></thead>
              <tbody>
                <tr><td>Abaixo de 18,5</td><td><span className="dot" style={{ background: '#5B8FB9' }} />Abaixo do peso</td></tr>
                <tr><td>18,5 a 24,9</td><td><span className="dot" style={{ background: '#2D9E6B' }} />Peso normal</td></tr>
                <tr><td>25 a 29,9</td><td><span className="dot" style={{ background: '#D9A21B' }} />Sobrepeso</td></tr>
                <tr><td>30 a 34,9</td><td><span className="dot" style={{ background: '#E8823A' }} />Obesidade grau 1</td></tr>
                <tr><td>35 a 39,9</td><td><span className="dot" style={{ background: '#D9633A' }} />Obesidade grau 2</td></tr>
                <tr><td>40 ou mais</td><td><span className="dot" style={{ background: '#C0392B' }} />Obesidade grau 3</td></tr>
              </tbody>
            </table>
          </div>

          <div className="imc-sec">
            <h2>O que o IMC NÃO mostra</h2>
            <p>O IMC é um bom ponto de partida, mas tem limites: ele não separa gordura de músculo, nem mostra onde a gordura está. Uma pessoa musculosa pode ter IMC alto sem excesso de gordura; outra pode estar no "peso normal" com gordura visceral elevada. Por isso, na avaliação médica, o IMC anda junto com a <a href="/blog/bioimpedancia-o-que-e">bioimpedância</a>, que mede gordura, massa muscular e metabolismo separadamente.</p>
          </div>

          <div className="imc-sec">
            <h2>Quando o peso pede acompanhamento médico</h2>
            <p>De forma geral, vale procurar um médico quando o IMC passa de 30 (obesidade), ou de 25 (sobrepeso) somado a condições como pressão alta, diabetes ou colesterol elevado. A boa notícia é que a <a href="/blog/obesidade-e-uma-doenca">obesidade é uma doença tratável</a>, e o tratamento é muito mais do que "fechar a boca". Veja os <a href="/blog/quando-procurar-medico-para-emagrecer">sinais de que a dieta sozinha não basta</a> e <a href="/blog/como-funciona-acompanhamento-medico-emagrecimento">como funciona o acompanhamento</a>.</p>
          </div>

          <div className="imc-final">
            <div className="ey">Dra. Isabel Aragão · São José/SC</div>
            <h3>Seu resultado pediu atenção?</h3>
            <p>Avaliação completa com bioimpedância e plano individualizado.<br />Atendimento em São José/SC (Grande Florianópolis) e online.</p>
            <a href={WA} className="btn">💬 Agendar pelo WhatsApp</a>
          </div>

          <p className="imc-disc">O IMC é uma ferramenta de triagem e não substitui a avaliação de um profissional de saúde. Nada nesta página é promessa de resultado. Dra. Isabel Aragão · CRM-SC 26139.</p>
        </div>
      </div>
    </>
  )
}
