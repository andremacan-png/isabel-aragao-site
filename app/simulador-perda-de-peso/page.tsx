import type { Metadata } from 'next'
import Link from 'next/link'
import Simulador from '@/components/Simulador'
import { BLOG_CSS } from '@/lib/blog/estilos'
import { CLINICA, MEDICA, SITE } from '@/lib/entidade'
import { VERSAO_CURVAS } from '@/lib/simulador/curvas'

export const metadata: Metadata = {
  title: 'Simulador de Perda de Peso com Tirzepatida e Semaglutida | Dra. Isabel Aragão',
  description: 'Simule quanto dá para emagrecer com tirzepatida (Mounjaro) ou semaglutida: peso, altura e as três doses lado a lado, com faixa de resposta, onde você está na curva e o que acontece se parar.',
  alternates: { canonical: `${SITE}/simulador-perda-de-peso` },
  openGraph: { title: 'Simulador de perda de peso com tirzepatida e semaglutida', description: 'Projeção por dose e por cenário de resposta, com base nos estudos clínicos. Não é promessa: a decisão é da consulta.', type: 'website', locale: 'pt_BR' },
}

const WA = 'https://wa.me/5548991593468?text=Ol%C3%A1!%20Usei%20o%20simulador%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.'

const FAQ = [
  { q: 'O simulador diz quantos quilos eu vou perder?', a: 'Não. Ele mostra a média dos estudos clínicos e uma faixa de resposta para cada dose, a partir do seu peso. A sua perda pode ficar fora da faixa, para mais ou para menos. O resultado real depende de dose, acompanhamento, alimentação, sono e histórico, e é acompanhado em consulta com bioimpedância.' },
  { q: 'Por que não posso escolher a dose?', a: 'Porque a dose é decisão médica, baseada na resposta e na tolerância de cada pessoa. O simulador mostra as três doses de manutenção da tirzepatida lado a lado (5, 10 e 15 mg) justamente para você ver que o resultado médio depende dela, e que não existe um número único.' },
  { q: 'O que significa bom respondedor e respondedor baixo?', a: 'Nos estudos, quem perdeu 5% ou mais do peso até a semana 8 a 12 (respondedor precoce) teve resultado final maior do que quem perdeu menos. A faixa do simulador usa essa diferença como referência de amplitude. Não é diagnóstico: é uma ordem de grandeza.' },
  { q: 'O que acontece se eu parar?', a: 'Nos estudos de extensão, um ano após interromper sem plano de manutenção, as pessoas recuperaram em média cerca de dois terços do peso perdido. O simulador mostra essa curva tracejada. Parar, reduzir ou espaçar é decisão de consulta, com plano.' },
  { q: 'Meus dados ficam salvos?', a: 'Não. O cálculo roda no seu navegador e nada é enviado ou armazenado. O único contato é o botão de WhatsApp, se você quiser agendar.' },
  { q: 'Posso comprar o medicamento depois de simular?', a: 'Não sem receita. Os medicamentos são de uso controlado, com indicação, contraindicações e acompanhamento. A clínica não vende medicamento; a médica avalia, prescreve quando há indicação e acompanha.' },
]

export default function PaginaSimulador() {
  const url = `${SITE}/simulador-perda-de-peso`
  const jsonLd = [
    { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Simulador de perda de peso com tirzepatida e semaglutida', url, inLanguage: 'pt-BR', dateModified: VERSAO_CURVAS, author: { '@type': 'Person', '@id': MEDICA.id, name: MEDICA.nome, identifier: MEDICA.crm }, publisher: { '@type': 'Organization', '@id': CLINICA.id, name: CLINICA.nome } },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: SITE }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Simulador de perda de peso', item: url }] },
  ]
  return (
    <>
      <style>{BLOG_CSS}</style>
      <div className="bl-body">
        <nav className="bl-nav">
          <Link href="/" className="bl-brand"><div className="bl-logo"><img src="/marca/simbolo-branco.png" alt="" width={13} height={22} /></div><span className="bl-name">Dra. Isabel Aragão</span></Link>
          <div className="bl-nav-links"><Link href="/">Início</Link><Link href="/blog">Blog</Link></div>
          <a href={WA} className="bl-nav-cta">Agendar Consulta</a>
        </nav>
        <div className="bl-hero">
          <div className="bl-hero-ey">Ferramenta · Blog</div>
          <h1>Simulador de perda de peso com tirzepatida e semaglutida</h1>
          <p className="bl-hero-sub">Informe peso e altura e veja, para cada dose, a curva média dos estudos até a semana 72, a faixa de resposta, onde você está se já usa e o que acontece se parar. Feito pela Dra. Isabel Aragão (CRM-SC 26139).</p>
        </div>
        <div className="bl-crumb"><Link href="/">Início</Link> › <Link href="/blog">Blog</Link> › Simulador de perda de peso</div>
        <div className="bl-wrap">
          <div className="bl-resposta"><strong>Resposta rápida:</strong> o simulador projeta a perda de peso esperada a partir das médias dos estudos clínicos (SURMOUNT-1, STEP 1 e OASIS 4), por dose, com uma faixa de bom a baixo respondedor. É uma ordem de grandeza, não uma previsão individual nem promessa. A dose e o tratamento são decididos em consulta.</div>

          <Simulador />

          <h2 className="bl-h2">Como ler o resultado</h2>
          <p className="bl-intro">A linha roxa é a média do grupo que usou aquela dose no estudo. A área sombreada é a faixa entre um respondedor baixo e um bom respondedor, estimada a partir dos estudos que separaram quem perdeu 5% ou mais nas primeiras 8 a 12 semanas. Os marcos mostram o peso médio esperado nas semanas 12, 24, 48 e 72, com a faixa entre parênteses. Se você marcar “já uso”, o ponto laranja mostra onde a sua perda está em relação à faixa daquela dose, e a leitura abaixo diz o que isso costuma significar. Antes da semana 8 as faixas se sobrepõem e ainda é cedo para avaliar.</p>
          <p className="bl-intro">As três doses da tirzepatida aparecem lado a lado porque a dose de manutenção é uma decisão médica, feita pela resposta e pela tolerância ao longo das semanas, e não uma escolha prévia. Muitas pacientes ficam em 5 ou 7,5 mg; outras precisam de 10 ou 15 mg. O esquema de aumento segue a bula, com aumentos no mínimo a cada 4 semanas, mas o ritmo real é individual. <Link href="/blog/quanto-tempo-mounjaro-faz-efeito">Veja como o efeito evolui semana a semana</Link>.</p>

          <h2 className="bl-h2">De onde vêm os números</h2>
          <div className="bl-lista">
            <div className="bl-item"><span><span className="bl-item-t">Tirzepatida: SURMOUNT-1 (NEJM, 2022)</span><span className="bl-item-i" style={{ display: 'block' }}>2.539 adultos com obesidade, 72 semanas: perda média de 15,0% com 5 mg, 19,5% com 10 mg e 20,9% com 15 mg, contra 3,1% com placebo. A faixa de resposta usa a análise de respondedor precoce (quem perdeu 5% ou mais até a semana 8).</span></span></div>
            <div className="bl-item"><span><span className="bl-item-t">Semaglutida 2,4 mg: STEP 1 (NEJM, 2021) e extensão (2022)</span><span className="bl-item-i" style={{ display: 'block' }}>1.961 adultos, 68 semanas: perda média de 14,9% contra 2,4% com placebo. A extensão acompanhou quem parou: um ano depois, cerca de dois terços do peso perdido havia voltado.</span></span></div>
            <div className="bl-item"><span><span className="bl-item-t">Semaglutida oral 25 mg: OASIS 4 (NEJM, 2025)</span><span className="bl-item-i" style={{ display: 'block' }}>64 semanas: perda média de 13,6% contra 2,2% com placebo. Pontos intermediários estimados a partir da curva da injetável.</span></span></div>
            <div className="bl-item"><span><span className="bl-item-t">Reganho: SURMOUNT-4 (JAMA, 2024)</span><span className="bl-item-i" style={{ display: 'block' }}>Quem parou a tirzepatida na semana 36 recuperou cerca de 14% do peso em 52 semanas; quem continuou perdeu mais 5,5%.</span></span></div>
          </div>
          <p className="bl-intro">Os pontos entre os desfechos publicados foram lidos das figuras dos artigos e são aproximações. As curvas são versionadas (versão {VERSAO_CURVAS}) e revisadas pela Dra. Isabel. O mundo real costuma mostrar perdas menores que as dos estudos, principalmente em quem interrompe cedo ou usa sem acompanhamento.</p>

          <h2 className="bl-h2">O que o simulador não faz</h2>
          <div className="bl-lista">
            <div className="bl-item"><span><span className="bl-item-t">Não prevê o seu resultado</span><span className="bl-item-i" style={{ display: 'block' }}>Mostra médias e faixas de grupos. A sua resposta pode ficar fora delas.</span></span></div>
            <div className="bl-item"><span><span className="bl-item-t">Não indica medicamento nem dose</span><span className="bl-item-i" style={{ display: 'block' }}>Indicação, contraindicações e dose são avaliadas em consulta, com exames e bioimpedância.</span></span></div>
            <div className="bl-item"><span><span className="bl-item-t">Não substitui o acompanhamento</span><span className="bl-item-i" style={{ display: 'block' }}>A leitura “onde estou” é uma referência para a conversa com a médica, não um veredito.</span></span></div>
          </div>

          <h2 className="bl-h2">Perguntas frequentes</h2>
          <div className="bl-faq">{FAQ.map((f) => (<details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>))}</div>

          <h2 className="bl-h2">Continue lendo</h2>
          <div className="bl-outros">
            <Link href="/blog/tema/tirzepatida-mounjaro">Guia: tirzepatida e Mounjaro</Link>
            <Link href="/blog/tema/semaglutida">Guia: semaglutida</Link>
            <Link href="/blog/quanto-emagrece-com-injetavel">Quanto emagrece com injetável</Link>
            <Link href="/blog/perda-de-peso-saudavel-quantos-kg-por-mes">Quantos kg por mês é saudável</Link>
            <Link href="/blog/quanto-custa-tratamento-mounjaro-tirzepatida">Quanto custa por mês</Link>
          </div>

          <div className="bl-cta">
            <div className="bl-cta-ey">Dra. Isabel Aragão · São José/SC</div>
            <h2>Quer saber se o tratamento é para você?</h2>
            <p>Consulta de 90 minutos com bioimpedância e plano individual.<br />Presencial em São José/SC e online.</p>
            <a href={WA} className="bl-cta-btn">💬 Agendar pelo WhatsApp</a>
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </div>
    </>
  )
}
