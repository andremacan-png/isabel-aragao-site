'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Atribuição sutil de origem (só a clínica percebe): "seu site" = /saude
const WA = 'https://wa.me/5548991593468?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20agendamento%20de%20consulta'

const faqItems = [
  {
    q: 'Posso usar o tratamento injetável sem consulta médica?',
    a: 'Não. É um medicamento de prescrição retido na farmácia. O uso sem avaliação prévia expõe o paciente a riscos sérios — especialmente se houver contraindicações não identificadas como histórico tireoidiano ou uso de outros medicamentos.',
  },
  {
    q: 'Medicamentos do Paraguai são os mesmos?',
    a: 'Não. Produtos sem registro ANVISA não passam por controle de qualidade brasileiro e podem ser falsificados, adulterados ou com concentração incorreta. Já há relatos documentados de hospitalizações por uso desses produtos. O risco não vale.',
  },
  {
    q: 'O que é o fracionamento de doses?',
    a: 'É uma estratégia que permite iniciar com doses menores do que as apresentações comerciais padrão, tornando a introdução mais gradual. Isso reduz significativamente os efeitos colaterais no início e permite que cada paciente progrida no ritmo certo para o seu organismo.',
  },
  {
    q: 'Quanto tempo vou precisar usar?',
    a: 'Não há uma resposta única. O tempo depende do seu histórico, objetivos e resposta ao medicamento. O que sabemos é que ao suspender sem ter construído novos hábitos, parte do peso pode retornar — por isso o acompanhamento e o trabalho com estilo de vida são tão importantes quanto a medicação em si.',
  },
  {
    q: 'A Dra. Isabel aplica em clínica?',
    a: 'Sim, quando indicado. Oferecemos aplicação presencial em São José/SC e orientação completa para quem prefere aplicar em casa — com receita e instrução detalhada.',
  },
  {
    q: 'Preciso de exames antes de começar?',
    a: 'Sim. Exames de base são fundamentais para identificar contraindicações, causas subjacentes do ganho de peso e personalizar o protocolo desde o início.',
  },
  {
    q: 'Atende por plano de saúde?',
    a: 'Não. Emitimos nota fiscal e descritivo — alguns planos permitem reembolso. Consulte o seu.',
  },
]

export default function SaudePage() {
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

      {/* Hero — dor do paciente */}
      <section className="bg-[#12082a] text-white pt-14 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/80 mb-6">
            <span className="w-2 h-2 bg-[#E8823A] rounded-full shrink-0" />
            <span>Tratamento médico supervisionado ·{' '}<span className="whitespace-nowrap">São José/SC e online</span></span>
          </div>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Você faz tudo certo durante a semana — e na sexta à noite desfaz tudo, sem conseguir parar
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Não é falta de disciplina. É biologia. A fome que você sente, a compulsão que aparece à noite, a resistência do corpo a emagrecer — tudo isso tem causa, e tem tratamento médico.
          </p>
          <a
            href="#sobre-tratamento"
            className="inline-flex items-center gap-2 bg-[#E8823A] hover:bg-[#d4732e] text-white font-semibold px-7 py-3.5 rounded-full text-base transition-colors"
          >
            Entender o tratamento
            <span>↓</span>
          </a>
        </div>
      </section>

      {/* Dores — reconhecimento */}
      <section className="py-14 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-widest font-medium">Você se identifica com algum desses?</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icone: '😞', texto: 'Já perdeu peso antes e recuperou tudo — mais um pouco' },
              { icone: '🍽️', texto: 'Controla a alimentação durante a semana e compensa no fim de semana sem conseguir parar' },
              { icone: '😴', texto: 'Dorme mal, acorda cansada e tem fome o dia todo' },
              { icone: '⚖️', texto: 'A balança não se move mesmo com dieta e exercício' },
              { icone: '🧠', texto: 'Sente que a fome é maior do que a vontade de emagrecer' },
              { icone: '💊', texto: 'Ouviu falar em tratamento injetável para emagrecer mas não sabe se é para você' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-cream rounded-2xl p-4 border border-[#E8E0D5]">
                <span className="text-xl shrink-0">{item.icone}</span>
                <p className="text-sm text-gray-700 leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Se você se identificou, provavelmente não é falta de disciplina. É biologia.
          </p>
        </div>
      </section>

      {/* Isabel — apresentação */}
      <section id="sobre-tratamento" className="py-16 px-4 sm:px-6 bg-[#12082a] text-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
            <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-[#695192]">
              <Image src="/images/hero.jpg" alt="Dra. Isabel Aragão" width={80} height={80} className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <p className="text-[#E8823A] text-sm font-medium mb-1">Quem vai cuidar de você</p>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold mb-2">Dra. Isabel Aragão</h2>
              <p className="text-white/60 text-sm">CRM-SC 26.139 · Especialização em Obesidade e Emagrecimento — Hospital Albert Einstein</p>
            </div>
          </div>
          <div className="space-y-4 text-white/80 leading-relaxed">
            <p>
              Médica formada pela UNIVALI-SC, com especialização em Obesidade e Emagrecimento pelo Hospital Albert Einstein e 7 anos de experiência em atendimento clínico. Cursos em Obesidade 360 e Padrões Alimentares.
            </p>
            <p>
              A Dra. Isabel não trata só o peso. Ela investiga o que está por baixo — hormônios, sono, estresse, metabolismo, histórico de vida — e monta um plano que faz sentido para a sua realidade.
            </p>
            <p>
              Atende presencialmente em São José/SC (Grande Florianópolis) e online para todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Método LEVE */}
      <section className="py-16 px-4 sm:px-6 bg-cream overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#E8823A] text-sm font-medium mb-2 uppercase tracking-widest">A abordagem</p>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#12082a] mb-3">
              Método LEVE
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Emagrecer de verdade exige olhar o paciente por inteiro. Quatro frentes que trabalham juntas.
            </p>
          </div>

          {/* Cards grandes com visual */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-[#12082a] text-white rounded-3xl p-7 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 text-8xl opacity-10 font-playfair font-bold">L</div>
              <div className="text-3xl mb-4">🎙️</div>
              <div className="inline-block bg-white/10 rounded-full px-3 py-1 text-xs text-white/60 mb-3">Passo 1</div>
              <h3 className="font-playfair text-xl font-bold mb-2">Levantamento</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Sua história, rotina, tentativas anteriores e relação com o corpo. Ouvida sem pressa e sem julgamento.
              </p>
            </div>

            <div className="bg-[#E8823A] text-white rounded-3xl p-7 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 text-8xl opacity-10 font-playfair font-bold">E</div>
              <div className="text-3xl mb-4">🔬</div>
              <div className="inline-block bg-white/20 rounded-full px-3 py-1 text-xs text-white/80 mb-3">Passo 2</div>
              <h3 className="font-playfair text-xl font-bold mb-2">Exames</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Exames laboratoriais e bioimpedância de alta precisão para entender como seu metabolismo funciona de verdade.
              </p>
            </div>

            <div className="bg-[#695192] text-white rounded-3xl p-7 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 text-8xl opacity-10 font-playfair font-bold">V</div>
              <div className="text-3xl mb-4">🎯</div>
              <div className="inline-block bg-white/10 rounded-full px-3 py-1 text-xs text-white/60 mb-3">Passo 3</div>
              <h3 className="font-playfair text-xl font-bold mb-2">Visão</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Metas reais, objetivos possíveis e um plano de ação que respeita seus limites e te impulsiona com clareza.
              </p>
            </div>

            <div className="bg-white border-2 border-[#12082a] rounded-3xl p-7 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 text-8xl opacity-5 font-playfair font-bold text-[#12082a]">E</div>
              <div className="text-3xl mb-4">📋</div>
              <div className="inline-block bg-primary-100 rounded-full px-3 py-1 text-xs text-[#695192] mb-3">Passo 4</div>
              <h3 className="font-playfair text-xl font-bold text-[#12082a] mb-2">Estratégia</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Alimentação, rotina, suplementação e protocolos individualizados. Você sai com um plano claro e acompanhamento real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tratamento injetável — o papel dentro do tratamento */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#E8823A] text-sm font-medium mb-2 uppercase tracking-widest">A ferramenta</p>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#12082a] mb-5">
            Tratamento injetável: quando a biologia precisa de apoio médico
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Este medicamento injetável tem aprovação da ANVISA e age diretamente nos mecanismos biológicos da fome, saciedade e metabolismo. Para pacientes que têm resistência biológica ao emagrecimento, ele pode ser o que faltava para o corpo responder.
            </p>
            <p>
              Os estudos clínicos mostram resultados expressivos — com perdas médias de peso que superam qualquer outro medicamento disponível até hoje. Mas esses resultados acontecem <strong>dentro de um tratamento completo</strong>, não de forma isolada.
            </p>
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 my-6">
              <h3 className="font-semibold text-[#12082a] mb-4 text-sm">O que o tratamento faz pelo seu corpo</h3>
              <div className="space-y-3">
                {[
                  'Reduz significativamente a sensação de fome ao longo do dia',
                  'Aumenta a saciedade — você come menos sem sentir privação',
                  'Melhora a resistência insulínica e o metabolismo da glicose',
                  'Favorece a perda de gordura visceral — a mais associada a doenças',
                  'Tem efeito positivo no perfil metabólico geral',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#E8823A] shrink-0 mt-0.5 font-bold">→</span>
                    <p className="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Ela não substitui alimentação adequada, movimento ou cuidado com o sono. É uma ferramenta poderosa — que funciona melhor dentro de um tratamento que cuida do paciente por inteiro.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios além do peso */}
      <section className="py-16 px-4 sm:px-6 bg-[#12082a] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#E8823A] text-sm font-medium mb-2 uppercase tracking-widest">Mais do que emagrecer</p>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold mb-3">
              O que muda além da balança
            </h2>
            <p className="text-white/60 text-sm max-w-xl mx-auto">
              Os estudos mostram benefícios que vão muito além da perda de peso — e que transformam a saúde de forma ampla.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icone: '❤️',
                titulo: 'Proteção cardiovascular',
                desc: 'Estudos demonstraram redução significativa de eventos cardiovasculares graves — infarto, AVC e mortalidade — em pacientes com risco cardiovascular elevado.',
              },
              {
                icone: '🍷',
                titulo: 'Menos compulsão e álcool',
                desc: 'O medicamento age nos receptores do sistema de recompensa do cérebro. Muitos pacientes relatam redução espontânea do consumo de álcool e de comportamentos compulsivos com comida.',
              },
              {
                icone: '🩸',
                titulo: 'Controle glicêmico',
                desc: 'Melhora expressiva da glicemia e da resistência insulínica — com impacto direto na prevenção e controle do diabetes tipo 2.',
              },
              {
                icone: '💧',
                titulo: 'Pressão arterial',
                desc: 'Redução da pressão arterial associada à perda de gordura visceral e à melhora do perfil metabólico geral.',
              },
              {
                icone: '😴',
                titulo: 'Qualidade do sono',
                desc: 'A perda de gordura, especialmente a visceral e cervical, melhora a apneia do sono — com impacto direto na energia e no humor.',
              },
              {
                icone: '🦴',
                titulo: 'Menos dor e mais mobilidade',
                desc: 'Com menos peso sobre as articulações, dores no joelho, quadril e coluna tendem a diminuir — facilitando o movimento e a atividade física.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/8 border border-white/10 rounded-2xl p-5 hover:border-[#E8823A]/40 transition-colors">
                <div className="text-2xl mb-3">{item.icone}</div>
                <h3 className="font-semibold text-white mb-2 text-sm">{item.titulo}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bioimpedância */}
      <section className="py-16 px-4 sm:px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#E8823A] text-sm font-medium mb-2 uppercase tracking-widest">Monitoramento real</p>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#12082a] mb-5">
            Bioimpedância: emagrecer sem perder quem você é por dentro
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              A balança mostra um número. A bioimpedância mostra o que esse número significa — quanto é gordura, quanto é músculo, qual é a sua hidratação e como está o seu metabolismo.
            </p>
            <p>
              Isso é fundamental durante o tratamento injetável. O medicamento ajuda o corpo a perder peso, mas sem acompanhamento, parte dessa perda pode vir do músculo — e não da gordura. E perder músculo é exatamente o que vai dificultar manter o resultado depois.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="bg-white border border-[#E8E0D5] rounded-2xl p-5">
                <div className="text-2xl mb-3">💪</div>
                <h3 className="font-semibold text-[#12082a] mb-2 text-sm">Por que o músculo importa</h3>
                <p className="text-xs text-gray-600 leading-relaxed">Músculo é metabolicamente ativo. Quanto mais você preserva, maior o seu gasto calórico em repouso — e mais fácil manter o peso no longo prazo.</p>
              </div>
              <div className="bg-white border border-[#E8E0D5] rounded-2xl p-5">
                <div className="text-2xl mb-3">📊</div>
                <h3 className="font-semibold text-[#12082a] mb-2 text-sm">O que monitoramos</h3>
                <p className="text-xs text-gray-600 leading-relaxed">Composição corporal em cada consulta — para garantir que a perda está vindo de gordura e ajustar protocolo, alimentação e exercício quando necessário.</p>
              </div>
            </div>
            <p className="text-sm bg-white border border-[#E8E0D5] rounded-xl p-4 text-gray-600">
              A bioimpedância é realizada nas consultas presenciais com equipamento de alta precisão. Para atendimentos online, utilizamos protocolos validados de avaliação remota com a mesma qualidade de análise.
            </p>
          </div>
        </div>
      </section>

      {/* Fracionamento */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#E8823A] text-sm font-medium mb-2 uppercase tracking-widest">Mais tolerância, menos abandono</p>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#12082a] mb-5">
            Progressão de doses no seu ritmo
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Um dos maiores motivos de abandono do tratamento injetável são os efeitos colaterais no início — especialmente náuseas. E eles são quase sempre dose-dependentes: acontecem quando o corpo recebe mais do que está pronto para receber.
            </p>
            <p>
              Trabalhamos com uma progressão cuidadosa e personalizada, começando com doses abaixo do protocolo padrão quando necessário, e avançando de acordo com a tolerância de cada paciente.
            </p>
            <div className="bg-[#12082a] text-white rounded-2xl p-6 my-6">
              <h3 className="font-semibold mb-4 text-sm">O que essa abordagem garante</h3>
              <div className="space-y-3">
                {[
                  'Menos náuseas e desconfortos no início do tratamento',
                  'Mais adesão — você não abandona por intolerância',
                  'Progressão adaptada ao que o seu organismo consegue absorver bem',
                  'Possibilidade de manter doses menores quando o resultado já é satisfatório',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#E8823A] shrink-0 mt-0.5">✓</span>
                    <p className="text-sm text-white/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supervisão médica e ANVISA */}
      <section className="py-16 px-4 sm:px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#12082a] mb-6">
            Por que supervisão médica não é opcional
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Com o crescimento da demanda, virou comum ver medicamentos para emagrecimento sendo vendidos sem receita, vindos do Paraguai, ou por canais online sem procedência. A lógica parece simples: é o mesmo medicamento, mais barato.
            </p>
            <p>Não é bem assim.</p>
            <div className="grid sm:grid-cols-2 gap-4 my-4">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                <h3 className="font-semibold text-red-900 mb-3 text-sm">Sem supervisão e sem registro ANVISA</h3>
                <div className="space-y-2 text-xs text-red-800">
                  <p>→ Produto pode ser falsificado ou adulterado</p>
                  <p>→ Concentração real pode ser diferente do rótulo</p>
                  <p>→ Sem controle de temperatura no transporte</p>
                  <p>→ Sem como identificar contraindicações pessoais</p>
                  <p>→ Efeitos adversos graves sem suporte médico</p>
                  <p>→ Hospitalizações já foram documentadas</p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                <h3 className="font-semibold text-green-900 mb-3 text-sm">Com medicamento ANVISA e acompanhamento</h3>
                <div className="space-y-2 text-xs text-green-800">
                  <p>→ Qualidade e concentração garantidas</p>
                  <p>→ Rastreabilidade do lote</p>
                  <p>→ Contraindicações identificadas antes de iniciar</p>
                  <p>→ Efeitos adversos manejados com orientação</p>
                  <p>→ Ajuste de doses baseado na sua resposta real</p>
                  <p>→ Resultado sustentável, não só enquanto usa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#12082a] mb-8 text-center">
            Para quem pode ser indicada
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="font-semibold text-[#12082a] text-sm mb-3 flex items-center gap-2"><span className="text-green-500">✓</span> Pode ser indicada para quem</p>
              {[
                'Tem sobrepeso ou obesidade com critério médico',
                'Tem resistência ao emagrecimento apesar de mudanças de hábito',
                'Apresenta resistência insulínica ou síndrome metabólica',
                'Não tem contraindicações identificadas em consulta',
                'Está disposta a realizar o acompanhamento regular',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-green-400 shrink-0 mt-0.5">→</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-[#12082a] text-sm mb-3 flex items-center gap-2"><span className="text-red-400">✗</span> Não é indicada para</p>
              {[
                'Gestantes ou mulheres amamentando',
                'Histórico pessoal ou familiar de carcinoma medular de tireoide',
                'Síndrome NEM tipo 2',
                'Quem busca resultado sem mudança de hábito',
                'Uso sem avaliação e acompanhamento médico',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-red-400 shrink-0 mt-0.5">→</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">
            A única forma de saber se é indicada para você é por meio de uma avaliação médica.
          </p>
        </div>
      </section>

      {/* O que é GLP-1 — para quem quer entender */}
      <section className="py-16 px-4 sm:px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-3">Para quem quer entender mais</p>
          <h2 className="font-playfair text-2xl font-bold text-[#12082a] mb-5">
            Como o tratamento injetável age no organismo
          </h2>
          <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
            <p>
              O medicamento age em dois receptores no organismo simultaneamente — GLP-1 e GIP — o que o diferencia dos tratamentos anteriores, que agiam em apenas um. Essa ação dupla potencializa os efeitos sobre o apetite, a saciedade e o metabolismo.
            </p>
            <p>
              Na prática, o organismo recebe sinais mais intensos de que está satisfeito, o esvaziamento gástrico fica mais lento (a comida "fica" mais tempo no estômago), e o metabolismo da glicose melhora. O resultado é que comer menos se torna mais natural — não uma luta constante.
            </p>
            <p>
              Os estudos clínicos da série SURMOUNT, publicados no New England Journal of Medicine, demonstraram perdas médias de peso entre 15% e 22% do peso corporal ao longo do tratamento — os maiores resultados já documentados para um medicamento não cirúrgico.
            </p>
            <p className="text-xs bg-white border border-gray-200 rounded-xl p-4 text-gray-500">
              Esses resultados foram obtidos em estudos clínicos controlados, com dieta e atividade física supervisionadas. Na prática clínica real, os resultados variam conforme o histórico do paciente e a adesão ao tratamento como um todo.
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
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
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
            O primeiro passo é entender o que está acontecendo com o seu corpo
          </h2>
          <p className="text-white/70 text-base mb-8 leading-relaxed">
            A consulta com a Dra. Isabel começa por uma investigação completa — sem promessas, sem pressa, sem protocolo genérico.
            Se o tratamento injetável for indicado para você, vai fazer parte de um plano que faz sentido para a sua vida.
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
            Presencial em São José/SC · Online para todo o Brasil
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
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="text-sm font-medium hidden sm:inline">Agendar pelo WhatsApp</span>
      </a>
    </div>
  )
}
