'use client'

import { useState } from 'react'
import Image from 'next/image'
import AnchorBar from '../components/AnchorBar'

// Atribuição sutil de origem (só a clínica percebe): "site da Dra. Isabel" = home
const WA = 'https://wa.me/5548991593468?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Dra.%20Isabel%20e%20gostaria%20de%20saber%20mais%20sobre%20agendamento%20de%20consulta'
const INSTAGRAM = 'https://www.instagram.com/dra.isabelaragao/'
const GOOGLE_REVIEWS = 'https://www.google.com/search?q=isabel+arag%C3%A3o+sa%C3%BAde+emagrecimento+s%C3%A3o+jos%C3%A9'

const depoimentos = [
  {
    name: 'Paciente · mulher',
    text: 'Excelente atendimento e atenção, abordagem holística (física, emocional e social), atendendo as minhas necessidades em sua totalidade, escuta ativa, construção de confiança.',
  },
  {
    name: 'Paciente · mulher',
    text: 'Ela tem um atendimento acolhedor, explica tudo com muita clareza e transmite confiança. É perceptível o quanto se dedica a cada paciente, sempre olhando além dos números e exames. Uma médica que realmente inspira equilíbrio e bem-estar!',
  },
  {
    name: 'Paciente · homem',
    text: 'Fui muito bem recebido e atendido com todo cuidado e profissionalismo. Parabéns a todos pelo trabalho e atenção com os pacientes!',
  },
]

const jornada = [
  {
    num: '01',
    title: 'WhatsApp',
    desc: 'Manda mensagem, tira dúvidas e agenda no horário ideal. Resposta rápida.',
  },
  {
    num: '02',
    title: 'Confirmação',
    desc: 'Recebe instruções de preparo e lembretes para chegar pronta na primeira consulta.',
  },
  {
    num: '03',
    title: 'Primeira Consulta',
    desc: 'Consulta longa, detalhada e sem pressa — toda a sua história explorada com profundidade.',
  },
  {
    num: '04',
    title: 'Seu Plano',
    desc: 'Diretrizes alimentares, protocolo de emagrecimento e estratégia 100% personalizada.',
  },
  {
    num: '05',
    title: 'Acompanhamentos',
    desc: 'Consultas regulares para avaliar resultados e ajustar a estratégia. Presencial ou online.',
  },
]

const faqItems = [
  {
    q: 'A Dra. Isabel prescreve e aplica medicamentos injetáveis para emagrecer?',
    a: 'Tudo é sempre avaliado em consulta, visto que cada paciente é único. Quando necessária aplicação de algum medicamento ou vitaminas, trabalhamos com alternativas de aplicação em clínica ou receita e instrução de aplicação em casa pelo próprio paciente.',
  },
  {
    q: 'A Dra. Isabel é endocrinologista?',
    a: 'Não. A Dra. Isabel é médica com especialização em Obesidade e Emagrecimento concluída no Hospital Albert Einstein. Ela realiza avaliação clínica completa, solicita exames e aplica protocolos de emagrecimento — incluindo medicações modernas quando indicado.',
  },
  {
    q: 'Faz atendimento online?',
    a: 'Sim, e com a mesma excelência da consulta presencial. No atendimento online realizamos bioimpedância com aplicativos especializados de alta qualidade, garantindo o mesmo nível de avaliação e acompanhamento.',
  },
  {
    q: 'A bioimpedância online tem a mesma qualidade?',
    a: 'Sim. Utilizamos aplicativos especializados validados para avaliação de composição corporal online. Para consultas presenciais, usamos equipamentos de alta precisão no consultório. Em ambos os casos a análise clínica é completa.',
  },
  {
    q: 'Onde fica o consultório?',
    a: 'Kennedy Towers · Av. Mal. Castelo Branco, 65 · Sala 1102 B · Campinas, São José — SC. Atende toda a Grande Florianópolis presencialmente e online para todo o Brasil.',
  },
  {
    q: 'O que é diferente de ir a um nutricionista?',
    a: 'A abordagem é médica: investigação clínica aprofundada, exames laboratoriais, avaliação hormonal e metabólica, e quando indicado, protocolos com medicações aprovadas. A orientação nutricional é complementar, não substitui um nutricionista.',
  },
  {
    q: 'Atende por plano de saúde?',
    a: 'Não atendemos por planos de saúde. Emitimos nota fiscal e descritivo dos serviços — alguns planos permitem reembolso. Consulte o seu.',
  },
]

function CheckIcon() {
  return (
    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function WAIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">

      {/* ── NAVBAR (2 linhas: marca+CTA e menu de âncoras) ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#12082a] shadow-lg shadow-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between py-3">
          <span className="font-playfair text-lg font-bold text-white tracking-tight">
            Dra. Isabel Aragão
          </span>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="bg-white text-[#12082a] px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors">
            Agendar consulta
          </a>
        </div>
        <AnchorBar links={[
          { href: '#metodo', label: 'Método' },
          { href: '#sobre', label: 'Sobre a Dra.' },
          { href: '#servicos', label: 'Atendimento' },
          { href: '#faq', label: 'Dúvidas' },
        ]} />
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-screen bg-white relative overflow-hidden flex items-center pt-[104px]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary-50/60 to-transparent pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-[#E8823A]/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 lg:gap-16 items-center py-10 md:py-14 relative z-10">

          {/* Headline + texto — sempre primeiro */}
          <div className="order-1">
            {/* Badge: só aparece no desktop, acima do headline */}
            <span className="hidden md:inline-flex items-center gap-2 bg-[#E8823A]/10 text-[#C4621A] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8823A]" />
              Especialização Albert Einstein · CRM-SC 26.139
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-[3.5rem] font-black text-gray-900 leading-[1.1] tracking-tight mb-4">
              Emagrecimento médico,{' '}
              <span className="text-primary-600 relative inline-block">
                individualizado
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#E8823A]/60 rounded-full" />
              </span>{' '}
              e sustentável
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Descubra por que seu corpo resiste à perda de peso e como destravar esse processo com segurança — com acompanhamento médico real, baseado em ciência e no seu histórico único.
            </p>
            {/* Localização + CTAs: só no desktop */}
            <p className="hidden md:flex text-sm text-gray-400 mt-5 mb-7 flex-wrap gap-x-5 gap-y-1">
              <span>📍 Presencial · São José / Grande Florianópolis</span>
              <span>💻 Online · Todo o Brasil</span>
            </p>
            <div className="hidden md:flex flex-col sm:flex-row gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-[#E8823A] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#d4691e] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <WAIcon />
                Falar com a equipe
              </a>
              <a href="#sobre"
                className="flex items-center justify-center border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full text-base font-semibold hover:bg-primary-50 transition-colors">
                Conheça a Dra. Isabel
              </a>
            </div>
          </div>

          {/* Foto — segundo no mobile, segundo no desktop */}
          <div className="order-2 flex justify-center md:justify-end mt-6 md:mt-0">
            <div className="relative w-full max-w-xs md:max-w-sm">
              <div className="absolute inset-0 bg-primary-100 rounded-[2rem] transform translate-x-4 translate-y-4" />
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-[#E8823A]/15 rounded-full blur-2xl" />
              <Image
                src="/images/hero.jpg"
                alt="Dra. Isabel Aragão — Médica Especialista em Emagrecimento"
                width={440}
                height={560}
                className="relative rounded-[2rem] object-cover shadow-2xl w-full"
                priority
                sizes="(max-width: 768px) 80vw, 440px"
              />
            </div>
          </div>

          {/* Badge + Localização + CTAs — só mobile, abaixo da foto */}
          <div className="order-3 md:hidden">
            <span className="inline-flex items-center gap-2 bg-[#E8823A]/10 text-[#C4621A] text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8823A]" />
              Especialização Albert Einstein · CRM-SC 26.139
            </span>
            <p className="text-sm text-gray-400 mb-6 flex flex-wrap gap-x-5 gap-y-1">
              <span>📍 Presencial · São José / Grande Florianópolis</span>
              <span>💻 Online · Todo o Brasil</span>
            </p>
            <div className="flex flex-col gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-[#E8823A] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#d4691e] transition-all shadow-lg">
                <WAIcon />
                Falar com a equipe
              </a>
              <a href="#sobre"
                className="flex items-center justify-center border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full text-base font-semibold hover:bg-primary-50 transition-colors">
                Conheça a Dra. Isabel
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── STATS ── número grande à direita, texto à esquerda */}
      <section className="bg-[#12082a] py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { value: '+200', label: 'pacientes com qualidade\nde vida transformada' },
              { value: '+50', label: 'avaliações 5 estrelas\nno Google' },
              { value: 'Einstein', label: 'especialização em obesidade\ne emagrecimento concluída', serif: true },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex items-center justify-between gap-4">
                <div className="text-white/45 text-xs leading-relaxed whitespace-pre-line">{stat.label}</div>
                <div className={`font-black text-white leading-none flex-shrink-0 ${stat.serif ? 'font-playfair text-2xl md:text-4xl' : 'text-4xl md:text-6xl'}`}>
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMA ── */}
      <section className="bg-[#F7F3EF] py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-[#C4621A] text-xs font-bold tracking-widest uppercase mb-3">Você já tentou de tudo</span>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-3">
            E ainda assim o resultado{' '}<br className="hidden sm:block" />não vem — ou vai embora.
          </h2>
          <p className="text-gray-500 mb-7 max-w-xl mx-auto">
            Dieta, academia, shakes, nutricionista, remédio por conta própria… nada se sustenta. E a culpa recai sobre você.
          </p>
          <div className="grid md:grid-cols-3 gap-3 mb-5">
            {[
              { icon: '😔', title: 'Frustração constante', desc: 'Você faz "tudo certo" mas a balança não move. Ninguém explica por quê.' },
              { icon: '🔄', title: 'Efeito sanfona', desc: 'Perde peso, comemora, recupera tudo — às vezes mais do que perdeu.' },
              { icon: '😞', title: 'Corpo que não coopera', desc: 'Cansaço, falta de ânimo, sensação de que algo errado — mas ninguém investiga.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm text-left border-b-4 border-[#E8823A]/20 hover:border-[#E8823A] transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 text-base mb-1.5">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#12082a] rounded-xl p-6 text-left border-l-4 border-[#E8823A]">
            <p className="text-base text-white/90 leading-relaxed">
              A verdade é que{' '}
              <span className="text-[#E8823A] font-bold">emagrecimento é tratamento médico</span>{' '}
              — não força de vontade. Seu corpo pode estar resistindo por razões hormonais, metabólicas ou clínicas que só uma avaliação médica completa consegue identificar e tratar.
            </p>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ── cards com header colorido + tags */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-9">
            <span className="inline-block text-[#C4621A] text-xs font-bold tracking-widest uppercase mb-3">Por que médica</span>
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-3">
              Não é dieta. É medicina.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A abordagem médica investiga as causas reais, age sobre elas e acompanha resultados com ciência.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                headerBg: 'bg-primary-600',
                icon: '🔬',
                title: 'Investigação clínica',
                desc: 'Exames laboratoriais, avaliação hormonal e metabólica completa. Entendemos por que seu corpo age como age — com dados, não achismos.',
                tags: ['Exames laboratoriais', 'Avaliação hormonal', 'Bioimpedância'],
              },
              {
                headerBg: 'bg-[#E8823A]',
                icon: '💉',
                title: 'Protocolos médicos',
                desc: 'Quando indicado, prescrevemos e aplicamos medicações modernas (agonistas de GLP-1/GIP) no consultório ou com instrução para uso em casa.',
                tags: ['GLP-1', 'Injetáveis'],
              },
              {
                headerBg: 'bg-[#12082a]',
                icon: '🎯',
                title: 'Plano individualizado',
                desc: 'Nada de protocolo copiado. Cada paciente tem um plano criado para seu corpo, histórico, rotina e objetivos — com acompanhamento real.',
                tags: ['100% personalizado', 'Contínuo', 'Com ciência'],
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
                <div className={`${item.headerBg} px-7 py-6 flex items-start gap-4`}>
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="font-playfair text-xl font-bold text-white leading-tight">{item.title}</h3>
                </div>
                <div className="bg-white px-7 py-6 flex flex-col flex-1">
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="bg-gray-50 border border-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JORNADA ── 5 etapas reais */}
      <section className="bg-[#F7F3EF] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-9">
            <span className="inline-block text-[#C4621A] text-xs font-bold tracking-widest uppercase mb-3">Como funciona</span>
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
              Do primeiro contato<br className="md:hidden" /> à transformação
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {jornada.map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 relative overflow-hidden group hover:shadow-md transition-shadow">
                <span className="absolute top-4 right-4 font-playfair text-6xl font-black text-gray-900/4 leading-none select-none">
                  {step.num}
                </span>
                <div className="w-8 h-8 bg-[#12082a] text-white rounded-lg flex items-center justify-center font-black text-xs mb-4 group-hover:bg-primary-600 transition-colors flex-shrink-0">
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1.5">{step.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            Presencial em São José/SC · Online para todo o Brasil — mesma qualidade, mesma dedicação
          </p>
        </div>
      </section>

      {/* ── MÉTODO LEVE ── */}
      <section id="metodo" className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-9">
            <span className="inline-flex items-center bg-primary-600 text-white text-xs font-bold px-5 py-2 rounded-full mb-4 tracking-wider uppercase">
              Nossa metodologia
            </span>
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-3">
              O Método LEVE
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Uma jornada em 4 etapas criada para que você não só emagreça — mas se sinta viva, forte e bem.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { letter: 'L', title: 'Levantamento', desc: 'Sua história, rotina, tentativas anteriores e relação com o corpo. Ouvida sem pressa e sem julgamento.' },
              { letter: 'E', title: 'Exames', desc: 'Exames laboratoriais e bioimpedância de alta precisão para entender como seu metabolismo funciona de verdade.' },
              { letter: 'V', title: 'Visão', desc: 'Metas reais, objetivos possíveis e um plano de ação que respeita seus limites e te impulsiona com clareza.' },
              { letter: 'E', title: 'Estratégia', desc: 'Alimentação, rotina, suplementação e protocolos individualizados. Você sai com um plano claro e acompanhamento real.' },
            ].map((item, i) => (
              <div key={i} className="bg-[#F7F3EF] rounded-2xl p-6 relative overflow-hidden group hover:shadow-md transition-shadow">
                <span className="absolute top-4 right-5 font-playfair text-8xl font-black text-primary-600/6 leading-none select-none">
                  {item.letter}
                </span>
                <div className="w-10 h-10 bg-primary-600 text-white rounded-xl flex items-center justify-center font-black text-lg mb-4 group-hover:bg-[#E8823A] transition-colors">
                  {item.letter}
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" className="bg-[#F7F3EF] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-white rounded-[2rem] transform -translate-x-4 translate-y-4 shadow-sm" />
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-[#E8823A]/10 rounded-full blur-2xl" />
              <Image
                src="/images/about.jpg"
                alt="Dra. Isabel Aragão"
                width={460}
                height={560}
                className="relative rounded-[2rem] object-cover shadow-2xl w-full max-w-sm md:max-w-none"
                sizes="(max-width: 768px) 80vw, 460px"
              />
            </div>
            <div>
              <span className="inline-block text-[#C4621A] text-xs font-bold tracking-widest uppercase mb-4">Sobre a médica</span>
              <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-5">
                Dra. Isabel Aragão
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Médica formada pela UNIVALI-SC, com especialização em Obesidade e Emagrecimento concluída no Hospital Albert Einstein. Mas mais do que credenciais, o que me move é uma razão muito pessoal.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Fui uma criança que lutou contra a obesidade. Vivi na pele o julgamento, as dietas frustradas, o efeito sanfona. Conheço essa luta por dentro — e é exatamente isso que me faz uma médica diferente.
              </p>
              <p className="text-gray-500 leading-relaxed mb-7">
                Cada paciente é tratado como único: com escuta real, estratégia baseada em ciência e acompanhamento que vai além da consulta.
              </p>
              <div className="space-y-3">
                {[
                  'Médica formada pela UNIVALI-SC · CRM-SC 26.139',
                  'Especialista em Obesidade e Emagrecimento — Hospital Albert Einstein',
                  '7 anos de experiência em atendimento em unidade básica de saúde',
                  'Cursos especializados em obesidade e emagrecimento: Obesidade 360 e Padrões Alimentares',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon />
                    </div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section className="bg-[#12082a] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-9">
            <span className="inline-block text-[#E8823A] text-xs font-bold tracking-widest uppercase mb-3">Avaliações Google</span>
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight mb-1">
              O que dizem os pacientes
            </h2>
            <p className="text-white/35 text-sm">+50 avaliações 5 estrelas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {depoimentos.map((dep, i) => (
              <div key={i} className="bg-white/8 border border-white/10 rounded-2xl p-7 flex flex-col hover:bg-white/12 transition-colors">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400 text-sm">★</span>)}
                </div>
                <p className="text-white/80 leading-relaxed text-sm flex-1 mb-5">"{dep.text}"</p>
                <div>
                  <div className="font-semibold text-white text-sm">{dep.name}</div>
                  <div className="text-white/30 text-xs mt-0.5">via Google Reviews</div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white/6 border border-white/10 rounded-2xl px-7 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⭐</span>
              <div>
                <p className="text-white font-bold text-sm">+50 avaliações 5 estrelas</p>
                <p className="text-white/40 text-xs">Veja o que outros pacientes dizem no Google</p>
              </div>
            </div>
            <a href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-[#12082a] px-7 py-3 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors">
              Ver todas no Google →
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-9">
            <span className="inline-block text-[#C4621A] text-xs font-bold tracking-widest uppercase mb-3">Atendimento</span>
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 tracking-tight">Modalidades de consulta</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {/* Primeira consulta */}
            <div className="border-2 border-primary-600 rounded-2xl p-8">
              <h3 className="font-playfair text-2xl font-black text-gray-900 mb-3">Primeira Consulta</h3>
              <div className="flex gap-2 mb-4">
                <span className="bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">Presencial · SJ/SC</span>
                <span className="bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">Online · Brasil</span>
              </div>
              <p className="text-gray-500 leading-relaxed mb-5 text-sm">
                Avaliação completa: histórico de vida, bioimpedância de alta precisão (presencial) ou com aplicativo especializado (online), definição de metas e plano personalizado. ~1h30.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-7">
                {[
                  'Exames e avaliação clínica completa',
                  'Plano 100% individualizado',
                  'Quando indicado: prescrição e aplicação de GLP-1 no consultório',
                  'Acompanhamento contínuo incluso',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#E8823A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#d4691e] transition-colors w-full">
                <WAIcon />
                Falar com a equipe
              </a>
            </div>

            {/* Consulta de Acompanhamento */}
            <div className="bg-[#F7F3EF] rounded-2xl p-8">
              <h3 className="font-playfair text-2xl font-black text-gray-900 mb-3">Consulta de Acompanhamento</h3>
              <div className="flex gap-2 mb-4">
                <span className="bg-white text-primary-700 text-xs font-semibold px-3 py-1 rounded-full border border-primary-100">Presencial · SJ/SC</span>
                <span className="bg-white text-primary-700 text-xs font-semibold px-3 py-1 rounded-full border border-primary-100">Online · Brasil</span>
              </div>
              <p className="text-gray-500 leading-relaxed mb-5 text-sm">
                Evolução, ajuste do protocolo e avaliação de resultados. Bioimpedância de alta precisão (presencial) ou com aplicativo especializado (online) — com a mesma excelência.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-7">
                {[
                  'Ajuste individualizado do protocolo',
                  'Avaliação de composição corporal',
                  'Renovação de prescrições quando indicado',
                  'Suporte contínuo entre consultas',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-bold hover:bg-primary-50 transition-colors w-full">
                <WAIcon />
                Falar com a equipe
              </a>
            </div>
          </div>

          {/* Também atende */}
          <div className="mt-4 bg-[#F7F3EF] rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="text-sm font-semibold text-gray-700 flex-shrink-0 whitespace-nowrap">Também atende:</div>
            <div className="flex flex-wrap gap-2">
              {['Lipedema', 'Saúde metabólica', 'Ganho de massa muscular', 'Disposição e energia', 'Qualidade de vida'].map((item) => (
                <span key={item} className="bg-white text-gray-600 text-xs px-4 py-1.5 rounded-full border border-gray-200 font-medium">{item}</span>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-3">
            Emitimos nota fiscal. Alguns planos permitem reembolso — consulte o seu.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-[#F7F3EF] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-9">
            <span className="inline-block text-[#C4621A] text-xs font-bold tracking-widest uppercase mb-3">Dúvidas</span>
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 tracking-tight">Perguntas frequentes</h2>
          </div>
          <div className="space-y-2">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  className="w-full text-left px-7 py-5 flex justify-between items-center gap-6 hover:bg-gray-50/80 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <span className="font-semibold text-gray-900 text-sm">{item.q}</span>
                  <span className={`text-primary-600 text-2xl font-light flex-shrink-0 transition-transform duration-200 ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === index && (
                  <div className="px-7 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-100">
                    <div className="pt-4">{item.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── compacto, usa a largura toda */}
      <section className="bg-[#12082a] py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-[#E8823A]/8 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <span className="inline-block text-[#E8823A] text-xs font-bold tracking-widest uppercase mb-3">Próximo passo</span>
              <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Pronta para entender o que está<br className="hidden md:block" /> travando seu emagrecimento?
              </h2>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center gap-2">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#E8823A] text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#d4691e] transition-all shadow-2xl hover:-translate-y-0.5">
                <WAIcon className="w-6 h-6" />
                Falar com a equipe
              </a>
              <p className="text-white/55 text-xs">Respondemos em minutos no horário comercial (seg–sex) · Presencial em São José/SC · Online no Brasil</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── compacto */}
      <footer className="bg-[#0a0515] text-white/35 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="font-playfair text-white text-lg font-bold mb-2">Dra. Isabel Aragão</div>
              <p className="text-sm leading-relaxed mb-2">Médica especialista em emagrecimento. Tratamento individualizado, baseado em ciência.</p>
              <p className="text-xs">CRM-SC 26.139</p>
            </div>
            <div>
              <div className="text-white font-semibold mb-3 text-xs tracking-wider uppercase">Consultório</div>
              <div className="space-y-1 text-sm">
                <p>Kennedy Towers · Sala 1102 B</p>
                <p>Av. Mal. Castelo Branco, 65</p>
                <p>Campinas, São José — SC</p>
                <p className="mt-2">📱 (48) 99159-3468</p>
                <p>💻 Online · Todo o Brasil</p>
              </div>
            </div>
            <div>
              <div className="text-white font-semibold mb-3 text-xs tracking-wider uppercase">Redes</div>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors mb-4">
                📸 @dra.isabelaragao
              </a>
              <div>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#E8823A] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#d4691e] transition-colors">
                  <WAIcon className="w-4 h-4" />
                  Agendar consulta
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/6 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
            <p>© {new Date().getFullYear()} Dra. Isabel Aragão. Todos os direitos reservados.</p>
            <a href="/politica" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a href={WA} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        aria-label="Falar no WhatsApp">
        <WAIcon className="w-7 h-7" />
      </a>

    </div>
  )
}
