import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quando Procurar um Médico para Emagrecer | Dra. Isabel Aragão',
  description: 'Você já tentou emagrecer mais de uma vez e voltou ao ponto de partida? Entenda quando o acompanhamento médico muda tudo — e quais sinais indicam que é hora de buscar ajuda.',
  robots: 'noindex',
}

const WA = 'https://wa.me/5548991593468'
const WA_BLOG = `${WA}?text=Ol%C3%A1!%20Li%20o%20artigo%20sobre%20quando%20procurar%20m%C3%A9dico%20para%20emagrecer%20e%20gostaria%20de%20saber%20mais.`
const WA_NAV = `${WA}?text=Ol%C3%A1!%20Vi%20o%20blog%20e%20gostaria%20de%20agendar%20uma%20consulta.`
const WA_SIDEBAR = `${WA}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20emagrecimento%20com%20a%20Dra.%20Isabel.`
const WA_FINAL = `${WA}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Isabel%20para%20tratamento%20de%20emagrecimento.`

export default function BlogPreview() {
  return (
    <>
      <style>{`
        :root {
          --roxo: #1E1145;
          --roxo-mid: #3B2574;
          --ambar: #E8823A;
          --ambar-light: #F5A623;
          --cream: #F7F3EF;
          --cream2: #EDE6DC;
          --text: #2C1A5C;
          --text-body: #3D3450;
          --muted: #7C6DA8;
          --surface: #FFFFFF;
          --border: rgba(30,17,69,.10);
        }
        .blog-body { background: var(--cream); color: var(--text-body); font-family: system-ui,-apple-system,sans-serif; line-height: 1.7; min-height: 100vh; }
        /* NAV */
        .b-nav { background: var(--roxo); display: flex; align-items: center; justify-content: space-between; padding: 0 28px; height: 60px; position: sticky; top: 0; z-index: 100; }
        .b-nav-brand { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .b-nav-logo { width: 32px; height: 32px; background: var(--ambar); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; }
        .b-nav-name { color: #fff; font-weight: 800; font-size: 15px; }
        .b-nav-links { display: flex; gap: 20px; }
        .b-nav-links a { color: rgba(255,255,255,.7); font-size: 13px; font-weight: 600; text-decoration: none; }
        .b-nav-cta { background: var(--ambar); color: #fff; font-weight: 800; font-size: 13px; padding: 8px 16px; border-radius: 8px; text-decoration: none; white-space: nowrap; }
        @media(max-width:600px){ .b-nav-links { display: none; } }
        /* BREADCRUMB */
        .b-crumb { background: var(--cream2); padding: 10px 28px; font-size: 12px; color: var(--muted); }
        .b-crumb a { color: var(--muted); text-decoration: none; }
        /* LAYOUT */
        .b-page { max-width: 1100px; margin: 0 auto; padding: 36px 20px 80px; display: grid; grid-template-columns: 1fr 300px; gap: 48px; }
        @media(max-width:760px){ .b-page { grid-template-columns: 1fr; gap: 0; } }
        /* ARTICLE */
        .b-tag { display: inline-block; background: rgba(232,130,58,.12); color: var(--ambar); font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .1em; padding: 4px 10px; border-radius: 6px; margin-bottom: 14px; }
        .b-title { font-size: 30px; font-weight: 800; color: var(--text); line-height: 1.2; letter-spacing: -.02em; margin-bottom: 14px; }
        @media(max-width:600px){ .b-title { font-size: 24px; } }
        .b-intro { font-size: 17px; color: var(--muted); line-height: 1.6; margin-bottom: 20px; font-weight: 500; }
        .b-meta { display: flex; align-items: center; gap: 14px; font-size: 12px; color: var(--muted); padding: 14px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); flex-wrap: wrap; margin-bottom: 28px; }
        .b-avatar { width: 34px; height: 34px; border-radius: 50%; background: linear-gradient(135deg,#3B2574,#1E1145); display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 800; font-size: 13px; flex-shrink: 0; }
        .b-meta-name { font-weight: 700; color: var(--text); }
        .b-meta-right { margin-left: auto; display: flex; gap: 14px; }
        /* CONTENT */
        .b-content h2 { font-size: 20px; font-weight: 800; color: var(--text); margin: 32px 0 12px; letter-spacing: -.01em; }
        .b-content h3 { font-size: 16px; font-weight: 700; color: var(--text); margin: 22px 0 8px; }
        .b-content p { margin-bottom: 16px; font-size: 16px; line-height: 1.72; }
        .b-content ul { margin: 12px 0 20px; padding: 0; list-style: none; }
        .b-content ul li { padding: 6px 0 6px 24px; position: relative; font-size: 16px; line-height: 1.6; }
        .b-content ul li::before { content: '→'; position: absolute; left: 0; color: var(--ambar); font-weight: 700; }
        .b-content strong { color: var(--text); font-weight: 700; }
        .b-content em { font-style: italic; }
        /* CTA INLINE */
        .b-cta-inline { background: linear-gradient(135deg,#1E1145 0%,#3B2574 100%); border-radius: 14px; padding: 28px; margin: 36px 0; text-align: center; }
        .b-cta-ey { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: .12em; color: #F5A623; margin-bottom: 8px; }
        .b-cta-inline h3 { color: #fff; font-size: 20px; font-weight: 800; margin-bottom: 8px; }
        .b-cta-inline p { color: rgba(255,255,255,.75); font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
        .b-cta-btn { display: inline-flex; align-items: center; gap: 10px; background: var(--ambar); color: #fff; font-weight: 800; font-size: 15px; padding: 14px 28px; border-radius: 10px; text-decoration: none; }
        /* CTA FINAL */
        .b-cta-final { background: var(--cream2); border: 2px solid var(--border); border-radius: 14px; padding: 24px 28px; margin-top: 40px; display: flex; gap: 20px; align-items: center; flex-wrap: wrap; }
        .b-cta-final h3 { color: var(--text); font-size: 17px; font-weight: 800; margin-bottom: 4px; }
        .b-cta-final p { color: var(--muted); font-size: 14px; margin: 0; flex: 1; min-width: 200px; }
        .b-btn-wa { display: inline-flex; align-items: center; gap: 10px; background: #25D366; color: #fff; font-weight: 800; font-size: 14px; padding: 13px 22px; border-radius: 10px; text-decoration: none; white-space: nowrap; }
        /* AUTHOR */
        .b-author { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 20px; margin-top: 32px; display: flex; gap: 16px; }
        .b-author-av { width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg,#3B2574,#1E1145); display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 800; font-size: 22px; flex-shrink: 0; }
        .b-author-lbl { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: .1em; color: var(--ambar); margin-bottom: 4px; }
        .b-author-name { font-size: 16px; font-weight: 800; color: var(--text); margin-bottom: 2px; }
        .b-author-crm { font-size: 12px; color: var(--muted); font-weight: 600; margin-bottom: 8px; }
        .b-author-bio { font-size: 13px; color: var(--muted); line-height: 1.5; }
        /* RELATED */
        .b-related { margin-top: 40px; }
        .b-related-title { font-size: 13px; font-weight: 800; color: var(--text); margin-bottom: 14px; text-transform: uppercase; letter-spacing: .08em; }
        .b-related-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 12px; }
        @media(max-width:500px){ .b-related-grid { grid-template-columns: 1fr; } }
        .b-related-card { background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 16px; text-decoration: none; display: block; }
        .b-related-tag { font-size: 10px; font-weight: 800; color: var(--ambar); text-transform: uppercase; letter-spacing: .08em; margin-bottom: 6px; }
        .b-related-name { font-size: 14px; font-weight: 700; color: var(--text); line-height: 1.35; }
        /* SIDEBAR */
        .b-sidebar { }
        @media(max-width:760px){ .b-sidebar { display: none; } }
        .b-sidebar-box { background: var(--roxo); border-radius: 14px; padding: 24px; text-align: center; position: sticky; top: 76px; }
        .b-sb-ey { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: .12em; color: #F5A623; margin-bottom: 10px; }
        .b-sb-title { color: #fff; font-size: 18px; font-weight: 800; line-height: 1.25; margin-bottom: 10px; }
        .b-sb-sub { color: rgba(255,255,255,.65); font-size: 13px; margin-bottom: 20px; line-height: 1.5; }
        .b-sb-btn { display: flex; align-items: center; justify-content: center; gap: 10px; background: #25D366; color: #fff; font-weight: 800; font-size: 14px; padding: 14px; border-radius: 10px; text-decoration: none; margin-bottom: 12px; }
        .b-sb-link { display: flex; align-items: center; justify-content: center; gap: 6px; color: rgba(255,255,255,.55); font-size: 12px; text-decoration: none; }
        .b-sb-divider { border: none; border-top: 1px solid rgba(255,255,255,.12); margin: 18px 0; }
        .b-sb-bullet { display: flex; gap: 8px; align-items: flex-start; font-size: 12px; color: rgba(255,255,255,.70); padding: 5px 0; text-align: left; }
        .b-sb-bullet::before { content: '✓'; color: #25D366; font-weight: 800; flex-shrink: 0; }
        /* MOBILE STICKY */
        .b-mob-cta { display: none; position: fixed; bottom: 0; left: 0; right: 0; background: var(--roxo); padding: 12px 20px; z-index: 200; gap: 12px; align-items: center; }
        @media(max-width:760px){ .b-mob-cta { display: flex; } }
        .b-mob-text { color: #fff; font-size: 13px; font-weight: 700; flex: 1; line-height: 1.3; }
        .b-mob-text small { color: rgba(255,255,255,.6); font-size: 11px; display: block; font-weight: 500; }
        .b-mob-btn { background: #25D366; color: #fff; font-weight: 800; font-size: 13px; padding: 10px 18px; border-radius: 8px; text-decoration: none; white-space: nowrap; }
      `}</style>

      <div className="blog-body">
        {/* NAV */}
        <nav className="b-nav">
          <a href="/" className="b-nav-brand">
            <div className="b-nav-logo">💜</div>
            <span className="b-nav-name">Dra. Isabel Aragão</span>
          </a>
          <div className="b-nav-links">
            <a href="/">Início</a>
            <a href="/blog-preview">Blog</a>
          </div>
          <a href={WA_NAV} className="b-nav-cta">Agendar Consulta</a>
        </nav>

        {/* BREADCRUMB */}
        <div className="b-crumb">
          <a href="/">Início</a> › <a href="#">Blog</a> › Quando procurar um médico para emagrecer
        </div>

        {/* PAGE GRID */}
        <div className="b-page">
          <main>
            <article>
              {/* HEADER */}
              <div className="b-tag">Emagrecimento</div>
              <h1 className="b-title">Quando Procurar um Médico para Emagrecer — Sinais de Que a Dieta Sozinha Não Basta</h1>
              <p className="b-intro">Você já tentou emagrecer mais de uma vez e sempre voltou ao ponto de partida? Isso não é falta de força de vontade — e este artigo explica por quê, e quando o acompanhamento médico muda tudo.</p>
              <div className="b-meta">
                <div className="b-avatar">IA</div>
                <div>
                  <div className="b-meta-name">Dra. Isabel Aragão · CRM-SC 26139</div>
                  <div>Médica especialista em emagrecimento · São José/SC</div>
                </div>
                <div className="b-meta-right">
                  <span>📅 Julho 2026</span>
                  <span>⏱ 5 min</span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="b-content">
                <p>Todo mundo sabe o que fazer para emagrecer, certo? Comer menos, se mexer mais. Parece simples. Então por que tanta gente tenta — com disciplina, com esforço real — e não consegue resultados duradouros?</p>
                <p>A resposta está na biologia, não na força de vontade. E entender isso é o primeiro passo para sair do ciclo de tentativas frustradas.</p>

                <h2>Por que a dieta sozinha quase sempre falha</h2>
                <p>Quando você restringe calorias, o seu corpo entende que está passando por uma escassez. A resposta dele é automática: reduz o metabolismo, aumenta o hormônio da fome (grelina) e diminui o da saciedade (leptina). É um mecanismo de sobrevivência que evoluiu ao longo de milênios — e ele age contra você toda vez que você tenta emagrecer sem o suporte certo.</p>
                <p>Isso explica por que tantas pessoas conseguem emagrecer no começo e depois empacam. Ou pior: emagrecem, param a dieta e recuperam tudo em poucos meses. <strong>Não é fraqueza — é fisiologia.</strong></p>

                <h2>Sinais de que chegou a hora de buscar acompanhamento médico</h2>
                <p>Nem todo mundo precisa de um médico para emagrecer. Mas para muitas pessoas, o acompanhamento médico é a diferença entre um resultado duradouro e mais um ciclo de frustração. Veja os sinais:</p>
                <ul>
                  <li><strong>Você já tentou mais de duas vezes</strong> com disciplina real — academia, dieta, acompanhamento nutricional — e não sustentou o resultado por mais de 6 meses</li>
                  <li><strong>Você perdeu peso, mas se sente pior:</strong> cansaço excessivo, queda de cabelo, irritabilidade, fome constante — sinais de que o corpo está em modo de sobrevivência</li>
                  <li><strong>A balança não se move</strong> mesmo você fazendo &quot;tudo certo&quot; — isso pode indicar resistência à insulina, hipotireoidismo ou outras condições que a dieta sozinha não resolve</li>
                  <li><strong>Seu IMC está acima de 30</strong> — nessa faixa, as mudanças de estilo de vida sozinhas têm taxa de sucesso muito baixa a longo prazo</li>
                  <li><strong>Você tem outras condições associadas:</strong> pressão alta, diabetes tipo 2, apneia do sono, síndrome dos ovários policísticos — todas pioram com o excesso de peso e melhoram com o tratamento correto</li>
                  <li><strong>A sua relação com a comida causa sofrimento</strong> — ansiedade, culpa intensa, episódios de compulsão — o que vai além da dieta e precisa de avaliação</li>
                </ul>
                <p>Se você se identificou com pelo menos dois desses pontos, o acompanhamento médico provavelmente vai mudar o seu resultado.</p>

                {/* CTA INLINE */}
                <div className="b-cta-inline">
                  <div className="b-cta-ey">Dra. Isabel Aragão · São José/SC</div>
                  <h3>Quer saber se o tratamento médico é para você?</h3>
                  <p>A primeira conversa é sem compromisso. Nossa equipe explica como funciona a avaliação e tira todas as suas dúvidas.</p>
                  <a href={WA_BLOG} className="b-cta-btn">
                    <span>💬</span> Conversar no WhatsApp
                  </a>
                </div>

                <h2>O que um médico de emagrecimento faz de diferente</h2>
                <p>Uma consulta de emagrecimento não é chegar e sair com uma receita. É uma avaliação completa que investiga <em>por que</em> você está engordando — e não apenas <em>quanto</em> você está pesando.</p>

                <h3>Na primeira consulta, a Dra. Isabel avalia:</h3>
                <ul>
                  <li><strong>Bioimpedância:</strong> análise precisa de composição corporal — quanto é gordura, quanto é músculo, onde está concentrada. A balança não diz isso.</li>
                  <li><strong>Histórico metabólico:</strong> quantas vezes você emagreceu e engordou, como seu corpo respondeu, quais estratégias já foram tentadas</li>
                  <li><strong>Exames laboratoriais:</strong> resistência à insulina, função tireoidiana, hormônios — condições que interferem diretamente no peso</li>
                  <li><strong>Fatores emocionais e comportamentais:</strong> sono, estresse, padrões alimentares — tudo tem impacto no peso</li>
                </ul>

                <h2>E o acompanhamento faz diferença?</h2>
                <p>Sim — e os estudos são claros nisso. Pacientes com acompanhamento médico regular têm taxas de manutenção do peso muito superiores ao longo de 12, 24 e 36 meses comparados a quem tenta sozinha.</p>
                <p>O motivo é simples: o corpo muda ao longo do processo. O plano precisa ser ajustado. Quando o metabolismo desacelera, quando o peso empaca, quando surgem outros desafios — ter um médico ao lado que interpreta o que está acontecendo e ajusta a rota é o que separa o resultado temporário do resultado definitivo.</p>

                <h2>Não espere atingir &quot;o ponto de não aguentar mais&quot;</h2>
                <p>Muitas pacientes chegam ao consultório depois de anos tentando sozinhas. Elas esperaram até o sobrepeso virar obesidade, até a pressão subir, até o joelho doer. O tratamento funciona em todos esses estágios — mas é sempre mais fácil, mais rápido e mais eficiente quando começa antes.</p>
                <p>Se você está pensando nisso há algum tempo, o melhor momento para dar o primeiro passo é agora.</p>
              </div>

              {/* CTA FINAL */}
              <div className="b-cta-final">
                <div>
                  <h3>Agende sua avaliação com a Dra. Isabel</h3>
                  <p>Consulta presencial em São José/SC. Bioimpedância, avaliação completa e plano individualizado.</p>
                </div>
                <a href={WA_FINAL} className="b-btn-wa">💬 Falar no WhatsApp</a>
              </div>

              {/* AUTHOR */}
              <div className="b-author">
                <div className="b-author-av">IA</div>
                <div>
                  <div className="b-author-lbl">Sobre a autora</div>
                  <div className="b-author-name">Dra. Isabel Aragão</div>
                  <div className="b-author-crm">CRM-SC 26139 · Médica especialista em emagrecimento e obesidade</div>
                  <p className="b-author-bio">Atende em São José/SC com foco em tratamento individualizado de obesidade e emagrecimento. Abordagem baseada em evidências — avaliação completa, bioimpedância e acompanhamento de perto.</p>
                </div>
              </div>

              {/* RELATED */}
              <div className="b-related">
                <div className="b-related-title">Continue lendo</div>
                <div className="b-related-grid">
                  <a href="#" className="b-related-card">
                    <div className="b-related-tag">Emagrecimento</div>
                    <div className="b-related-name">Primeira Consulta com Médica de Emagrecimento: O Que Esperar</div>
                  </a>
                  <a href="#" className="b-related-card">
                    <div className="b-related-tag">Bioimpedância</div>
                    <div className="b-related-name">Bioimpedância: O Que É e Como Interpretar o Resultado</div>
                  </a>
                  <a href="#" className="b-related-card">
                    <div className="b-related-tag">Ciência</div>
                    <div className="b-related-name">O Papel dos Hormônios no Ganho de Peso</div>
                  </a>
                  <a href="#" className="b-related-card">
                    <div className="b-related-tag">Ciência</div>
                    <div className="b-related-name">Por Que a Dieta Sozinha Quase Sempre Falha</div>
                  </a>
                </div>
              </div>
            </article>
          </main>

          {/* SIDEBAR */}
          <aside className="b-sidebar">
            <div className="b-sidebar-box">
              <div className="b-sb-ey">Dra. Isabel Aragão · São José/SC</div>
              <div className="b-sb-title">Avaliação completa de emagrecimento</div>
              <div className="b-sb-sub">Bioimpedância + exames + plano individualizado. Presencial em São José/SC.</div>
              <a href={WA_SIDEBAR} className="b-sb-btn">💬 Agendar pelo WhatsApp</a>
              <a href="/" className="b-sb-link">→ Ver a página da clínica</a>
              <hr className="b-sb-divider" />
              <div>
                <div className="b-sb-bullet">Avaliação por bioimpedância</div>
                <div className="b-sb-bullet">Plano individualizado</div>
                <div className="b-sb-bullet">Acompanhamento de perto</div>
                <div className="b-sb-bullet">Sem compromisso inicial</div>
              </div>
            </div>
          </aside>
        </div>

        {/* MOBILE STICKY */}
        <div className="b-mob-cta">
          <div className="b-mob-text">
            Consulta com a Dra. Isabel
            <small>São José/SC · Sem compromisso inicial</small>
          </div>
          <a href={WA_NAV} className="b-mob-btn">💬 WhatsApp</a>
        </div>
      </div>
    </>
  )
}
