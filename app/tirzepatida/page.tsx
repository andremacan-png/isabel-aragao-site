'use client'

import { useState } from 'react'
import Link from 'next/link'

const WA = 'https://wa.me/5548991593468?text=Ol%C3%A1%2C+gostaria+de+marcar+uma+consulta+com+a+Dra.+Isabel+Arag%C3%A3o%2C+vim+do+seu+site.'

const faqItems = [
  {
    q: 'Tirzepatida é o mesmo que Mounjaro?',
    a: 'Sim. Mounjaro é o nome comercial do medicamento cujo princípio ativo é a tirzepatida, fabricado pela Eli Lilly. No Brasil, a tirzepatida está disponível sob o nome Mounjaro e tem registro na ANVISA desde 2023.',
  },
  {
    q: 'Qual é a diferença entre tirzepatida e semaglutida (Ozempic)?',
    a: 'A semaglutida age em apenas um receptor (GLP-1). A tirzepatida age em dois receptores simultaneamente — GLP-1 e GIP — o que potencializa o efeito sobre o apetite, a saciedade e o metabolismo. Os estudos mostram resultados superiores com tirzepatida em média, embora cada organismo responda de forma diferente.',
  },
  {
    q: 'Posso comprar tirzepatida sem receita médica?',
    a: 'Não. Tirzepatida é um medicamento de uso sob prescrição médica, retido na farmácia. A venda sem receita é ilegal. Além disso, o uso sem avaliação médica prévia expõe o paciente a riscos sérios — especialmente se houver contraindicações não identificadas.',
  },
  {
    q: 'Medicamentos do Paraguai são os mesmos?',
    a: 'Não. Produtos adquiridos no Paraguai ou por canais não oficiais não têm registro ANVISA, não passam por controle de qualidade brasileiro e podem ser falsificados, adulterados ou com concentração incorreta. Há relatos de hospitalizações associadas ao uso desses produtos. O risco não vale.',
  },
  {
    q: 'O que é fracionamento de doses?',
    a: 'O fracionamento permite utilizar doses menores do que as apresentações comerciais padrão (ex: iniciar com 1,25 mg em vez de 2,5 mg). Isso reduz significativamente os efeitos colaterais no início do tratamento e permite uma progressão de doses mais gradual e personalizada.',
  },
  {
    q: 'Quanto tempo preciso usar a tirzepatida?',
    a: 'Não há uma resposta única. O tempo de uso depende do seu histórico, objetivos, resposta ao medicamento e outros fatores clínicos. O que sabemos pelos estudos é que, ao suspender, parte do peso pode retornar — o que reforça que o medicamento é uma ferramenta dentro de um tratamento mais amplo, não uma solução isolada.',
  },
  {
    q: 'A Dra. Isabel aplica tirzepatida em clínica?',
    a: 'Sim, quando indicado após avaliação. Oferecemos aplicação presencial em clínica em São José (SC), além de orientação completa para aplicação domiciliar com receita e instrução detalhada.',
  },
  {
    q: 'Preciso de exames antes de iniciar?',
    a: 'Sim. A avaliação laboratorial de base é fundamental: função tireoidiana, hemograma, glicemia, insulina, perfil lipídico, entre outros. Esses exames permitem identificar contraindicações e personalizar o protocolo.',
  },
]

const riscos = [
  {
    icon: '🤢',
    titulo: 'Náusea e vômitos',
    desc: 'Os efeitos mais comuns, especialmente no início ou ao aumentar a dose. Geralmente passageiros e manejáveis com ajuste de dose e orientação alimentar.',
  },
  {
    icon: '🫃',
    titulo: 'Desconforto gastrointestinal',
    desc: 'Diarreia, constipação, refluxo e distensão abdominal podem ocorrer. A progressão gradual de doses reduz bastante esses sintomas.',
  },
  {
    icon: '⚡',
    titulo: 'Hipoglicemia',
    desc: 'Risco maior em pacientes que usam insulina ou outros hipoglicemiantes simultaneamente. Exige ajuste cuidadoso das medicações.',
  },
  {
    icon: '🦋',
    titulo: 'Contraindicação na tireoide',
    desc: 'Não deve ser usada por pacientes com histórico pessoal ou familiar de carcinoma medular de tireoide ou síndrome NEM tipo 2. A avaliação tireoidiana prévia é obrigatória.',
  },
  {
    icon: '🫀',
    titulo: 'Pancreatite (rara)',
    desc: 'Casos raros mas documentados. Em pacientes com histórico de pancreatite, a indicação precisa ser avaliada com cuidado.',
  },
  {
    icon: '🚫',
    titulo: 'Gravidez e amamentação',
    desc: 'Contraindicada na gestação e amamentação. Mulheres em idade fértil devem usar contracepção adequada durante o tratamento.',
  },
]

const fatores = [
  {
    icone: '😴',
    titulo: 'Sono',
    desc: 'Privação de sono eleva os níveis de grelina (hormônio da fome) e reduz leptina (saciedade). Tratar o sono é tão importante quanto qualquer protocolo medicamentoso.',
  },
  {
    icone: '🧠',
    titulo: 'Estresse e cortisol',
    desc: 'Cortisol cronicamente elevado favorece acúmulo de gordura abdominal, resistência à insulina e compulsão alimentar. Sem manejo do estresse, os resultados são limitados.',
  },
  {
    icone: '⚗️',
    titulo: 'Avaliação hormonal',
    desc: 'Hipotireoidismo subclínico, resistência à insulina, alterações estrogênicas e androgênicas podem ser a causa real da dificuldade em emagrecer — e precisam ser tratadas.',
  },
  {
    icone: '🥗',
    titulo: 'Alimentação',
    desc: 'A tirzepatida reduz o apetite, mas não define a qualidade do que você come. O padrão alimentar continua sendo fundamental para resultados duradouros e saúde metabólica.',
  },
  {
    icone: '🏃',
    titulo: 'Movimento',
    desc: 'Atividade física preserva massa muscular durante o emagrecimento — crucial, já que a perda de músculo reduz o metabolismo basal. O tipo e a intensidade devem ser adaptados à sua realidade.',
  },
  {
    icone: '🧬',
    titulo: 'Genética e microbioma',
    desc: 'Parte da resposta ao medicamento e à dieta é individual. Entender seu histórico familiar e sua resposta metabólica permite personalizar melhor o protocolo.',
  },
  {
    icone: '📊',
    titulo: 'Bioimpedância e massa magra',
    desc: 'Durante o emagrecimento com tirzepatida, parte do peso perdido pode ser massa muscular. A bioimpedância monitora essa composição — e o protocolo é ajustado para preservar ao máximo o músculo.',
  },
]

export default function TirzepatidaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-cream font-sans">
      {/* Navbar */}
      <nav className="bg-[#12082a] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-playfair text-lg font-semibold">
            Dra. Isabel Aragão
          </Link>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E8823A] hover:bg-[#d4732e] text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            Agendar consulta
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#12082a] text-white pt-14 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/80 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            Com aprovação ANVISA · Uso médico supervisionado
          </div>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Tirzepatida: o que a ciência realmente diz sobre o tratamento da obesidade
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Uma análise honesta — benefícios reais baseados em estudos, riscos que você precisa conhecer,
            e por que o acompanhamento médico não é opcional.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E8823A] hover:bg-[#d4732e] text-white font-semibold px-7 py-3.5 rounded-full text-base transition-colors"
          >
            Agendar avaliação médica
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Aviso importante */}
      <section className="bg-amber-50 border-y border-amber-200 px-4 sm:px-6 py-5">
        <div className="max-w-3xl mx-auto flex gap-3 items-start">
          <span className="text-amber-600 text-xl mt-0.5 shrink-0">⚠️</span>
          <p className="text-amber-900 text-sm leading-relaxed">
            <strong>Esta página tem caráter educativo e não substitui uma consulta médica.</strong> Tirzepatida é um medicamento de prescrição — sua indicação, dose e monitoramento precisam ser individualizados por um médico. Nunca inicie tratamento por conta própria.
          </p>
        </div>
      </section>

      {/* O que é tirzepatida */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#12082a] mb-6">
            O que é tirzepatida e como ela age no corpo
          </h2>
          <div className="prose prose-gray max-w-none space-y-5 text-gray-700 leading-relaxed">
            <p>
              A tirzepatida é um medicamento injetável desenvolvido pela Eli Lilly, comercializado no Brasil sob o nome <strong>Mounjaro</strong>, com registro na ANVISA desde 2023. Ela pertence a uma nova classe de medicamentos chamados <strong>agonistas duplos GIP/GLP-1</strong>.
            </p>
            <p>
              O que isso significa na prática? Ao contrário da semaglutida (Ozempic, Wegovy), que age em apenas um receptor, a tirzepatida age em <strong>dois receptores simultaneamente</strong>:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="bg-primary-50 rounded-2xl p-5 border border-primary-100">
                <div className="text-2xl mb-2">🔬</div>
                <h3 className="font-semibold text-[#12082a] mb-1">Receptor GLP-1</h3>
                <p className="text-sm text-gray-600">Reduz o apetite, diminui o esvaziamento gástrico, melhora a sensibilidade à insulina e regula a glicemia pós-prandial.</p>
              </div>
              <div className="bg-[#E8823A]/10 rounded-2xl p-5 border border-[#E8823A]/20">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-semibold text-[#12082a] mb-1">Receptor GIP</h3>
                <p className="text-sm text-gray-600">Potencializa o efeito do GLP-1, atua no metabolismo da gordura, melhora a composição corporal e tem efeito positivo no sistema de recompensa alimentar.</p>
              </div>
            </div>
            <p>
              Essa ação dupla é o que diferencia a tirzepatida dos medicamentos anteriores. Os estudos clínicos da série <strong>SURMOUNT</strong>, publicados no New England Journal of Medicine, demonstraram perdas médias de peso entre <strong>15% e 22,5%</strong> do peso corporal em 72 semanas — resultados inéditos para um medicamento não cirúrgico.
            </p>
            <p className="text-sm bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-600">
              <strong>Contexto importante:</strong> esses resultados foram obtidos em estudos clínicos controlados, com dieta hipocalórica e atividade física supervisionada. Na prática clínica real, os resultados variam conforme a adesão ao tratamento, o histórico do paciente e outros fatores individuais.
            </p>
          </div>
        </div>
      </section>

      {/* ANVISA e segurança */}
      <section className="py-16 px-4 sm:px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#12082a] mb-6">
            Por que a aprovação ANVISA importa
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              A ANVISA (Agência Nacional de Vigilância Sanitária) é o órgão responsável por garantir que medicamentos comercializados no Brasil passaram por avaliação rigorosa de segurança, eficácia e qualidade. Quando um medicamento tem registro ANVISA, você tem a garantia de que:
            </p>
            <div className="space-y-3 my-6">
              {[
                'O produto foi fabricado seguindo boas práticas de fabricação (BPF)',
                'A concentração declarada no rótulo corresponde ao conteúdo real do frasco',
                'Os excipientes e conservantes foram avaliados quanto à segurança',
                'Há rastreabilidade do lote — em caso de problema, há como identificar e acionar o fabricante',
                'O medicamento pode ser prescrito com receituário válido e dispensado em farmácia regulamentada',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mt-6">
              <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                <span>🚨</span> O perigo dos medicamentos sem registro — incluindo os do Paraguai
              </h3>
              <div className="space-y-3 text-sm text-red-800 leading-relaxed">
                <p>
                  Com o crescimento da demanda por medicamentos emagrecedores, aumentou exponencialmente a oferta de produtos falsificados, adulterados ou sem registro — muitos vindos do Paraguai ou de canais informais online.
                </p>
                <p>
                  <strong>O que tem sido encontrado nessas amostras:</strong> concentração incorreta (mais ou menos do que o declarado), substâncias não identificadas, ausência do princípio ativo, contaminações bacterianas e problemas de conservação por transporte inadequado.
                </p>
                <p>
                  Já há relatos documentados de pacientes hospitalizados por hipoglicemia severa, reações alérgicas e complicações gastrointestinais graves após uso de produtos sem procedência. Além do risco à saúde, a importação sem autorização é ilegal no Brasil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Riscos e efeitos colaterais */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#12082a] mb-3">
              Riscos e efeitos colaterais reais
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Qualquer médico sério vai falar sobre isso antes de prescrever. Conhecer os riscos faz parte de uma decisão informada.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {riscos.map((r, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <div className="text-2xl mb-3">{r.icon}</div>
                <h3 className="font-semibold text-[#12082a] mb-2 text-sm">{r.titulo}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            A maioria dos efeitos colaterais é dose-dependente e temporária. A progressão gradual de doses — especialmente com fracionamento — reduz significativamente a incidência.
          </p>
        </div>
      </section>

      {/* Fracionamento */}
      <section className="py-16 px-4 sm:px-6 bg-[#12082a] text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold mb-6">
            Fracionamento: mais controle, menos efeitos colaterais
          </h2>
          <div className="space-y-5 text-white/80 leading-relaxed">
            <p>
              O protocolo padrão da tirzepatida começa em 2,5 mg e pode progredir até 15 mg. Mas para muitos pacientes, iniciar diretamente na dose mínima comercial já pode causar náuseas e desconfortos significativos.
            </p>
            <p>
              O <strong className="text-white">fracionamento</strong> é uma estratégia que permite usar doses menores que as apresentações comerciais — por exemplo, iniciar com 1,25 mg ou 1 mg — fazendo uma introdução ainda mais gradual ao medicamento.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 my-6">
              <h3 className="font-semibold text-white mb-4">Vantagens do fracionamento e progressão gradual</h3>
              <div className="space-y-3">
                {[
                  'Menor incidência de náuseas e vômitos no início',
                  'Melhor adesão ao tratamento (paciente não abandona por intolerância)',
                  'Progressão de doses adaptada à resposta individual',
                  'Possibilidade de usar doses menores de manutenção quando o resultado já é satisfatório',
                  'Redução de custo para o paciente em alguns cenários',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#E8823A] shrink-0 mt-0.5">→</span>
                    <p className="text-sm text-white/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-white/60">
              O fracionamento precisa ser feito com orientação médica e farmacêutica adequada, garantindo a estabilidade do produto e a precisão da dose.
            </p>
          </div>
        </div>
      </section>

      {/* Outros fatores */}
      <section className="py-16 px-4 sm:px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#12082a] mb-3">
              A tirzepatida é uma ferramenta — não a solução completa
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              O medicamento reduz o apetite e melhora o metabolismo. Mas o emagrecimento sustentável depende de um conjunto de fatores que precisam ser avaliados e tratados.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fatores.map((f, i) => (
              <div key={i} className="bg-white border border-[#E8E0D5] rounded-2xl p-5 hover:border-[#E8823A]/40 transition-colors">
                <div className="text-2xl mb-3">{f.icone}</div>
                <h3 className="font-semibold text-[#12082a] mb-2 text-sm">{f.titulo}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bioimpedância */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#12082a] mb-6">
            Bioimpedância: monitorar vai além do número na balança
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Um dos maiores riscos do emagrecimento rápido — incluindo com uso de medicamentos — é a <strong>perda de massa muscular</strong>. E a balança não diferencia gordura de músculo.
            </p>
            <p>
              A <strong>bioimpedância</strong> é o exame que analisa a composição corporal de forma detalhada: quanto é gordura, quanto é músculo, qual o percentual de água corporal e qual a taxa metabólica basal estimada. Esses dados são essenciais para conduzir o tratamento com segurança.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                <h3 className="font-semibold text-red-900 mb-3 text-sm flex items-center gap-2">
                  <span>⚠️</span> Por que preservar músculo importa
                </h3>
                <div className="space-y-2 text-xs text-red-800 leading-relaxed">
                  <p>→ Músculo é metabolicamente ativo: quanto mais músculo, maior o gasto calórico em repouso</p>
                  <p>→ Perder músculo reduz o metabolismo basal — dificultando a manutenção do peso após o tratamento</p>
                  <p>→ Sarcopenia (perda de músculo) tem impacto negativo na saúde a longo prazo, especialmente em mulheres após os 40</p>
                  <p>→ Pacientes que perdem muita massa magra tendem a ter o famoso "efeito rebote" ao suspender a medicação</p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                <h3 className="font-semibold text-green-900 mb-3 text-sm flex items-center gap-2">
                  <span>✓</span> Como a bioimpedância protege você
                </h3>
                <div className="space-y-2 text-xs text-green-800 leading-relaxed">
                  <p>→ Avaliação de composição corporal no início, para ter a linha de base real</p>
                  <p>→ Acompanhamento regular para checar se a perda está vindo de gordura, não de músculo</p>
                  <p>→ Ajuste do protocolo se houver perda de massa magra — dose, alimentação proteica, exercício</p>
                  <p>→ Monitoramento da hidratação, que impacta diretamente na eficácia do tratamento</p>
                </div>
              </div>
            </div>
            <p className="text-sm bg-primary-50 border border-primary-100 rounded-xl p-4 text-gray-600">
              <strong>No consultório da Dra. Isabel:</strong> a bioimpedância é realizada nas consultas presenciais com equipamento de alta precisão. Para atendimentos online, utilizamos protocolos validados de avaliação remota — com a mesma qualidade de análise.
            </p>
          </div>
        </div>
      </section>

      {/* Protocolo Isabel */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#12082a] mb-6">
            A abordagem da Dra. Isabel: visão sistêmica, não só a medicação
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Prescrever tirzepatida é a parte mais simples do tratamento. O que faz a diferença é o que vem antes, durante e depois.
            </p>
            <div className="space-y-4 my-6">
              {[
                {
                  titulo: 'Avaliação completa antes de qualquer prescrição',
                  desc: 'Exames laboratoriais de base, avaliação hormonal, histórico clínico detalhado, bioimpedância — para entender o que está por trás da dificuldade em emagrecer.',
                },
                {
                  titulo: 'Identificação de causas subjacentes',
                  desc: 'Hipotireoidismo, resistência insulínica, alterações hormonais, privação crônica de sono, uso de medicamentos que engordam — essas causas precisam ser tratadas em paralelo.',
                },
                {
                  titulo: 'Protocolo individualizado de doses',
                  desc: 'A progressão de doses é feita respeitando a tolerância de cada paciente, com possibilidade de fracionamento quando necessário.',
                },
                {
                  titulo: 'Aplicação em clínica disponível',
                  desc: 'Para quem prefere não aplicar em casa, oferecemos aplicação presencial no consultório em São José (SC).',
                },
                {
                  titulo: 'Acompanhamento contínuo',
                  desc: 'Consultas regulares para avaliar composição corporal, ajustar doses, monitorar exames e adaptar o protocolo conforme a evolução.',
                },
                {
                  titulo: 'Plano para depois da medicação',
                  desc: 'O tratamento não termina quando a dose é prescrita. A construção de hábitos, o trabalho com alimentação e o cuidado com o sono e o estresse são o que vai sustentar os resultados.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start border-b border-gray-100 pb-4 last:border-0">
                  <div className="bg-[#12082a] text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#12082a] mb-1 text-sm">{item.titulo}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quem é a Isabel */}
      <section className="py-14 px-4 sm:px-6 bg-primary-50 border-y border-primary-100">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-20 h-20 rounded-full bg-[#695192] shrink-0 flex items-center justify-center text-white text-2xl font-playfair font-bold">
            IA
          </div>
          <div>
            <h3 className="font-playfair text-xl font-bold text-[#12082a] mb-2">Dra. Isabel Aragão</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Médica formada pela UNIVALI-SC (CRM-SC 26.139), com especialização em Obesidade e Emagrecimento pelo Hospital Albert Einstein. 7 anos de experiência em atendimento clínico e cursos especializados em obesidade: Obesidade 360 e Padrões Alimentares.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Atende presencialmente em São José/SC (Grande Florianópolis) e online para todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#12082a] mb-8 text-center">
            Perguntas frequentes
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-[#12082a] text-sm leading-snug">{item.q}</span>
                  <span className="text-[#695192] shrink-0 text-lg">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 sm:px-6 bg-[#12082a] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold mb-4">
            Pronta para uma avaliação médica real?
          </h2>
          <p className="text-white/70 text-base mb-8 leading-relaxed">
            A tirzepatida pode ser uma ferramenta poderosa — quando prescrita para a pessoa certa, na dose certa, dentro de um plano completo. A consulta começa por uma conversa.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E8823A] hover:bg-[#d4732e] text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
          >
            Agendar avaliação pelo WhatsApp
            <span>→</span>
          </a>
          <p className="text-white/40 text-xs mt-4">
            Atendimento presencial em São José/SC · Online para todo o Brasil
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0e0620] text-white/50 py-8 px-4 sm:px-6 text-center text-xs">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="text-white/70 font-medium">Dra. Isabel Aragão — CRM-SC 26.139</p>
          <p>Av. Mal. Castelo Branco, 65 · Sala 1102 B · Kennedy Towers · Campinas · São José – SC</p>
          <p className="mt-3">
            <Link href="/" className="underline underline-offset-2 hover:text-white/80 transition-colors">
              ← Voltar ao site principal
            </Link>
          </p>
          <p className="mt-4">Esta página tem caráter informativo e não substitui consulta médica.</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-colors flex items-center gap-2 px-4 py-3"
        aria-label="WhatsApp"
      >
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="text-sm font-medium hidden sm:inline">Agendar pelo WhatsApp</span>
      </a>
    </div>
  )
}
