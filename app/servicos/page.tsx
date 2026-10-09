// /servicos: a "lista de serviços" da clínica, em uma página só. Serve de link de serviços no
// Perfil da Empresa do Google, de resposta direta para as IAs ("o que a clínica faz") e de
// página de entrada para quem busca o serviço pelo nome. Dados vêm de lib/entidade.ts (igual ao Maps).
import type { Metadata } from 'next'
import Link from 'next/link'
import { CLINICA, MEDICA, ENFERMEIRA, SITE } from '@/lib/entidade'

export const metadata: Metadata = {
  title: 'Serviços da clínica em São José/SC | Dra. Isabel Aragão',
  description:
    'Consulta de emagrecimento (90 min), bioimpedância, injetáveis sob prescrição, aplicação com enfermeira e atendimento online. Kennedy Towers, São José/SC.',
  alternates: { canonical: `${SITE}/servicos` },
  openGraph: {
    title: 'Serviços da clínica · Dra. Isabel Aragão · São José/SC',
    description: 'O que a clínica faz, onde fica e como agendar. Consulta de emagrecimento, bioimpedância, injetáveis com acompanhamento e atendimento online.',
    url: `${SITE}/servicos`,
    siteName: 'Dra. Isabel Aragão',
    locale: 'pt_BR',
    type: 'website',
  },
}

const WA = `${CLINICA.whatsapp}?text=${encodeURIComponent('Olá, vi a página de serviços da Dra. Isabel e gostaria de agendar uma consulta.')}`

const SERVICOS = [
  {
    nome: 'Consulta médica de emagrecimento',
    detalhe: '90 minutos · presencial ou online',
    texto: 'A primeira consulta com a Dra. Isabel: histórico de saúde e de tentativas anteriores, bioimpedância na hora, exames quando necessários e um plano individual. A paciente sai sabendo o caminho, não com um protocolo pronto.',
    para: 'Quem quer começar um tratamento sério para emagrecer, com médica.',
  },
  {
    nome: 'Bioimpedância',
    detalhe: 'na consulta, resultado na hora',
    texto: 'Exame de composição corporal: percentual de gordura, massa muscular, gordura visceral, hidratação e metabolismo de repouso. A médica interpreta o laudo na mesma consulta e repete o exame ao longo do tratamento para medir o que mudou de verdade.',
    para: 'Toda paciente em tratamento. Também para quem quer saber como está antes de decidir.',
  },
  {
    nome: 'Consultas de acompanhamento',
    detalhe: 'periódicas, com ajuste do plano',
    texto: 'O tratamento é um processo: nas consultas seguintes o plano é ajustado conforme a resposta do corpo, a bioimpedância e a rotina de cada paciente. É aqui que o resultado se consolida.',
    para: 'Pacientes em tratamento com a Dra. Isabel.',
  },
  {
    nome: 'Tratamento com medicamentos injetáveis',
    detalhe: 'sob prescrição e acompanhamento',
    texto: 'Quando há indicação, a médica prescreve e conduz o tratamento com medicamentos injetáveis para emagrecer (como tirzepatida e semaglutida): avaliação, receita, dose que sobe por etapas e acompanhamento dos efeitos. A clínica não vende o medicamento: a paciente compra na farmácia com a receita.',
    para: 'Quem tem indicação médica. Não é para todo mundo e exige avaliação antes.',
  },
  {
    nome: 'Aplicação de injetável na clínica',
    detalhe: `com a ${ENFERMEIRA.nome}`,
    texto: 'Para quem prefere não se autoaplicar ou quer suporte nas primeiras doses: aplicação semanal feita pela enfermeira, com conferência da dose, orientação de armazenamento e registro. Quem quiser aprende a autoaplicação com orientação.',
    para: 'Pacientes com prescrição, da Dra. Isabel ou de outro médico (avaliado caso a caso).',
  },
  {
    nome: 'Avaliação e acompanhamento de lipedema',
    detalhe: 'diagnóstico clínico e plano',
    texto: 'Diferenciar lipedema de gordura localizada muda o tratamento. A avaliação clínica define o diagnóstico e o plano de cuidado, incluindo o que o emagrecimento pode e o que não pode resolver.',
    para: 'Mulheres com gordura desproporcional nas pernas, dor e sensibilidade ao toque.',
  },
  {
    nome: 'Atendimento online',
    detalhe: 'para todo o Brasil',
    texto: 'Consulta e acompanhamento por vídeo para quem mora longe ou não pode ir até São José. A bioimpedância, por exigir o aparelho, é feita só presencialmente.',
    para: 'Quem está fora da Grande Florianópolis ou prefere o formato remoto.',
  },
]

const FAQ = [
  { q: 'Quanto tempo dura a primeira consulta?', a: 'Cerca de 90 minutos. Inclui histórico, bioimpedância e a montagem do plano individual.' },
  { q: 'Preciso de encaminhamento ou de pedido médico?', a: 'Não. O atendimento é particular e a consulta é marcada direto pelo WhatsApp (48) 99159-3468.' },
  { q: 'A clínica vende os medicamentos?', a: 'Não. Quando há indicação, a médica prescreve e a paciente compra na farmácia com a receita. A clínica cuida da avaliação, da prescrição, da aplicação (se a paciente preferir fazer na clínica) e do acompanhamento.' },
  { q: 'Quais formas de pagamento?', a: 'Pix, cartão de crédito, cartão de débito e dinheiro. Atendimento particular.' },
  { q: 'Onde fica e qual é o horário?', a: `${CLINICA.rua}, ${CLINICA.bairro}, ${CLINICA.cidade}/${CLINICA.uf}, vizinho ao Kobrasol. Atendimento de ${CLINICA.horarioTexto}, com hora marcada.` },
]

export default function ServicosPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE}/servicos`,
      url: `${SITE}/servicos`,
      name: 'Serviços da clínica · Dra. Isabel Aragão · São José/SC',
      about: { '@id': CLINICA.id },
      breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: SITE }, { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${SITE}/servicos` }] },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: SERVICOS.map((s, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'Service', name: s.nome, description: s.texto, provider: { '@id': CLINICA.id }, areaServed: CLINICA.cidadesAtendidas.map((c) => ({ '@type': 'City', name: c })) } })),
      },
    },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ]

  return (
    <div className="min-h-screen bg-cream text-gray-800">
      <nav className="bg-[#12082a] shadow-lg shadow-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/marca/simbolo-branco.png" alt="" width={14} height={24} />
            <span className="font-playfair text-lg font-bold text-white tracking-tight">Dra. Isabel Aragão</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/blog" className="hidden sm:inline text-sm text-white/70 hover:text-white">Blog</Link>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="bg-white text-[#12082a] px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors">Agendar consulta</a>
          </div>
        </div>
      </nav>

      <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-10 sm:pt-16">
        <span className="inline-flex items-center gap-2 bg-[#E8823A]/10 text-[#C4621A] text-xs font-bold px-4 py-2 rounded-full mb-5 tracking-wider uppercase">São José/SC · Grande Florianópolis</span>
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-[3.25rem] font-black text-gray-900 leading-[1.1] tracking-tight mb-5 max-w-3xl">Serviços da clínica</h1>
        <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
          Clínica médica de emagrecimento da {MEDICA.nome} ({MEDICA.crm}), no Kennedy Towers, bairro Campinas, em São José/SC. Consulta de 90 minutos com bioimpedância, plano individual, tratamento com injetáveis sob prescrição e aplicação com enfermeira. Atendimento presencial e online, {CLINICA.horarioTexto}.
        </p>
        <div className="flex flex-wrap gap-3 mt-7">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#E8823A] text-white px-6 py-3.5 rounded-2xl text-base font-bold shadow-lg shadow-black/10 hover:brightness-105">Agendar pelo WhatsApp</a>
          <a href={CLINICA.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3.5 rounded-2xl text-base font-bold border border-sand hover:bg-gray-50">Ver no Google Maps</a>
        </div>
      </header>

      <main>
        <section className="bg-white py-12" aria-labelledby="lista">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 id="lista" className="font-playfair text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-8">O que a clínica faz</h2>
            <ol className="grid md:grid-cols-2 gap-5">
              {SERVICOS.map((s) => (
                <li key={s.nome} className="rounded-3xl border border-sand bg-cream p-6 sm:p-7">
                  <h3 className="font-playfair text-xl font-bold text-gray-900 leading-snug">{s.nome}</h3>
                  <p className="text-[#C4621A] text-xs font-bold uppercase tracking-wider mt-1.5 mb-3">{s.detalhe}</p>
                  <p className="text-gray-700 leading-relaxed">{s.texto}</p>
                  <p className="text-sm text-gray-500 mt-3"><span className="font-semibold text-gray-700">Para quem:</span> {s.para}</p>
                </li>
              ))}
            </ol>
            <p className="text-sm text-gray-500 mt-6 max-w-3xl">Não fazemos promessa de resultado nem publicamos antes e depois (Código de Ética Médica). Cada tratamento começa por uma avaliação; o plano é individual e a resposta varia de pessoa para pessoa.</p>
          </div>
        </section>

        <section className="py-12" aria-labelledby="onde">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8">
            <div>
              <h2 id="onde" className="font-playfair text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-4">Onde e quando</h2>
              <address className="not-italic text-gray-700 leading-relaxed">
                <strong className="text-gray-900">{CLINICA.nome}</strong><br />
                {CLINICA.rua}<br />
                {CLINICA.bairro}, {CLINICA.cidade}/{CLINICA.uf}, CEP {CLINICA.cep}<br />
                Vizinho ao Kobrasol. <a href={CLINICA.mapsUrl} target="_blank" rel="noopener noreferrer" className="underline">Abrir no Google Maps</a>
              </address>
              <ul className="mt-4 space-y-1.5 text-gray-700">
                <li><span className="font-semibold text-gray-900">Horário:</span> {CLINICA.horarioTexto}, com hora marcada.</li>
                <li><span className="font-semibold text-gray-900">WhatsApp:</span> <a href={WA} className="underline">{CLINICA.telefoneBonito}</a></li>
                <li><span className="font-semibold text-gray-900">Pagamento:</span> Pix, cartão de crédito, cartão de débito e dinheiro. Atendimento particular.</li>
                <li><span className="font-semibold text-gray-900">Atende:</span> {CLINICA.cidadesAtendidas.join(', ')} e, online, todo o Brasil.</li>
              </ul>
            </div>
            <div>
              <h2 className="font-playfair text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-4">Equipe</h2>
              <div className="space-y-4">
                <div className="rounded-3xl bg-white border border-sand p-5">
                  <p className="font-bold text-gray-900">{MEDICA.nome} · {MEDICA.crm}</p>
                  <p className="text-gray-700 mt-1">{MEDICA.cargo}. Especialização no {MEDICA.formacao}. Conduz a avaliação, a prescrição e o acompanhamento de cada paciente.</p>
                </div>
                <div className="rounded-3xl bg-white border border-sand p-5">
                  <p className="font-bold text-gray-900">{ENFERMEIRA.nome} · {ENFERMEIRA.coren}</p>
                  <p className="text-gray-700 mt-1">Enfermeira da clínica. Responsável pelas aplicações de injetáveis, pela orientação de autoaplicação e pelo suporte entre as consultas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12" aria-labelledby="faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 id="faq" className="font-playfair text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-6">Perguntas frequentes</h2>
            <div className="space-y-3">
              {FAQ.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-sand bg-cream px-5 py-4">
                  <summary className="cursor-pointer font-semibold text-gray-900 list-none flex justify-between gap-4">
                    {f.q}
                    <span className="text-[#E8823A] font-bold group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                  </summary>
                  <p className="text-gray-700 mt-3 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#12082a] py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-3">Quer começar com uma avaliação?</h2>
            <p className="text-white/70 mb-7">Mande mensagem, tire dúvidas e marque o melhor horário. Respondemos em minutos no horário comercial.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#E8823A] text-white px-7 py-4 rounded-2xl text-base font-bold shadow-lg shadow-black/30">Agendar pelo WhatsApp</a>
            <p className="text-white/55 text-xs mt-6">Presencial em São José/SC · Online no Brasil · <Link href="/" className="underline">Página inicial</Link> · <Link href="/blog" className="underline">Blog</Link> · <a href={CLINICA.instagram} target="_blank" rel="noopener noreferrer" className="underline">Instagram</a></p>
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
