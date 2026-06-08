'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const WA = 'https://wa.me/5548991593468?text=Ol%C3%A1%2C+gostaria+de+marcar+uma+consulta+com+a+Dra.+Isabel+Arag%C3%A3o%2C+vim+do+seu+site.'

const faqItems = [
  {
    q: 'Usar medicamento injetável é "caminho fácil"?',
    a: 'Não existe caminho fácil para algo que tem causa biológica. O tratamento injetável corrige um desequilíbrio nos sinais de fome e saciedade — da mesma forma que insulina corrige o desequilíbrio do diabetes. Chamar isso de caminho fácil seria como dizer que tratar pressão alta com medicamento é preguiça.',
  },
  {
    q: 'Vou depender do medicamento para sempre?',
    a: 'Depende do que você quer dizer com "depender". O objetivo do tratamento é construir novos hábitos e equilíbrio metabólico enquanto o medicamento reduz a resistência biológica. Para alguns pacientes, o uso pode ser longo; para outros, temporário. O que não funciona é tratar o medicamento como solução isolada — ele é parte de um processo.',
  },
  {
    q: 'Quais são os efeitos colaterais reais?',
    a: 'Os mais comuns são náusea e desconforto gástrico, especialmente no início. A progressão gradual de doses — começando abaixo do protocolo padrão quando necessário — reduz significativamente esses efeitos. Contraindicações importantes: histórico de carcinoma medular de tireoide, síndrome NEM tipo 2, gestação e amamentação.',
  },
  {
    q: 'Preciso de exames antes de começar?',
    a: 'Sim, sempre. Exames de base permitem identificar contraindicações, entender causas subjacentes (tireoide, insulina, hormônios) e personalizar o protocolo. Iniciar sem essa avaliação é tomar um medicamento poderoso no escuro.',
  },
  {
    q: 'Medicamentos do Paraguai funcionam igual?',
    a: 'Não há como saber. Sem registro ANVISA, não há controle de qualidade, rastreabilidade de lote ou garantia de concentração real. Produtos falsificados e adulterados já causaram hospitalizações documentadas no Brasil. O risco não compensa.',
  },
  {
    q: 'A Dra. Isabel aplica em clínica?',
    a: 'Sim, quando indicado após avaliação. Oferecemos aplicação presencial em São José/SC e orientação completa para aplicação domiciliar — com receita e instrução detalhada.',
  },
]

export default function EmagrecimentoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#F7F3EF] font-sans">

      {/* Navbar */}
      <nav className="bg-[#12082a] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-playfair text-lg font-semibold">
            Dra. Isabel Aragão
          </Link>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="bg-[#E8823A] hover:bg-[#d4732e] text-white text-sm font-medium px-4 py-2 rounded-full transition-colors">
            Agendar consulta
          </a>
        </div>
      </nav>

      {/* Hero — curiosity gap, não dor */}
      <section className="bg-[#12082a] text-white pt-16 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/50 text-xs uppercase tracking-widest mb-6">Uma perspectiva diferente sobre emagrecimento</p>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-[3.2rem] font-bold leading-tight mb-6">
            Seu corpo não está te traindo.<br className="hidden sm:block" />
            Está fazendo exatamente o que<br className="hidden sm:block" />
            foi programado para fazer.
          </h1>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            O problema nunca foi você. Foi entender a biologia por trás da resistência ao emagrecimento — e saber o que fazer com ela.
          </p>
          <a href="#reframe"
            className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white/80 hover:text-white px-6 py-3 rounded-full text-sm transition-colors">
            Entender por quê
            <span>↓</span>
          </a>
        </div>
      </section>

      {/* O reframe biológico */}
      <section id="reframe" className="py-20 px-4 sm:px-6 bg-[#F7F3EF]">
        <div className="max-w-3xl mx-auto">

          {/* Pull quote */}
          <div className="border-l-4 border-[#E8823A] pl-6 mb-12">
            <p className="font-playfair text-2xl sm:text-3xl text-[#12082a] leading-snug italic">
              "Cada dieta que você fez ensinou o seu corpo a guardar mais gordura na próxima vez."
            </p>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Não é teoria. É fisiologia documentada. Quando o corpo entra em restrição calórica, interpreta isso como ameaça de escassez — e responde da única forma que sabe: reduzindo o metabolismo, aumentando a fome e priorizando o armazenamento de gordura quando a restrição acabar.
            </p>
            <p>
              Quanto mais vezes você fez isso, mais eficiente o seu corpo ficou em se defender. O "efeito sanfona" não é fraqueza. É adaptação metabólica — um mecanismo de sobrevivência que funcionou perfeitamente por milhares de anos de escassez humana, e que hoje trabalha contra você.
            </p>
          </div>

          {/* Stat visual */}
          <div className="my-12 grid sm:grid-cols-3 gap-6 text-center">
            {[
              { num: '95%', label: 'das pessoas que emagrecem por restrição recuperam o peso em 5 anos' },
              { num: '40%', label: 'do metabolismo pode reduzir após uma dieta restritiva severa' },
              { num: '3×', label: 'mais fome após restrição — efeito documentado do hormônio grelina' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#E8E0D5]">
                <p className="font-playfair text-4xl font-bold text-[#12082a] mb-2">{s.num}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Isso explica por que você fez tudo "certo" — e o resultado ainda não veio. Não porque faltou esforço. Porque a abordagem lutava contra a biologia em vez de trabalhar com ela.
            </p>
          </div>
        </div>
      </section>

      {/* O sinal que faltava */}
      <section className="py-20 px-4 sm:px-6 bg-[#12082a] text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#E8823A] text-xs uppercase tracking-widest mb-4">O que muda com tratamento médico</p>
          <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-snug">
            O problema não era força de vontade.<br className="hidden sm:block" /> Era um sinal biológico ausente.
          </h2>
          <div className="space-y-5 text-white/70 leading-relaxed mb-10">
            <p>
              O seu organismo regula a fome, a saciedade e o metabolismo através de hormônios. Dois deles — GLP-1 e GIP — são especialmente importantes: eles dizem ao cérebro quando você está satisfeita, regulam a velocidade do esvaziamento gástrico e modulam como o corpo lida com a glicose.
            </p>
            <p>
              Em muitos pacientes com resistência ao emagrecimento, esses sinais estão enfraquecidos — a mensagem "estou satisfeita" simplesmente não chega com força suficiente. Resultado: fome constante, saciedade que dura pouco, e um metabolismo que insiste em poupar energia.
            </p>
            <p>
              O tratamento injetável age diretamente nesses dois receptores — restaurando sinais que deveriam estar lá. Não suprime artificialmente o apetite. Ele devolve ao sistema o que estava faltando.
            </p>
          </div>

          {/* Comparação visual */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Sem o sinal correto</p>
              <div className="space-y-3">
                {[
                  'Fome que persiste mesmo após comer',
                  'Saciedade que dura 1-2 horas',
                  'Metabolismo em modo de conservação',
                  'Compulsão noturna difícil de controlar',
                  'Peso que volta ao mínimo sinal de flexibilização',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-white/60">
                    <span className="text-red-400 shrink-0 mt-0.5">×</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/8 border border-[#E8823A]/30 rounded-2xl p-6">
              <p className="text-[#E8823A] text-xs uppercase tracking-widest mb-4">Com o sinal restaurado</p>
              <div className="space-y-3">
                {[
                  'Saciedade real, que dura horas',
                  'Fome que aparece na hora certa — e passa',
                  'Metabolismo que responde ao tratamento',
                  'Compulsão reduzida naturalmente',
                  'Resultado que se mantém com acompanhamento',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="text-[#E8823A] shrink-0 mt-0.5">→</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Além do peso */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#E8823A] text-xs uppercase tracking-widest mb-3">O que os estudos mostram</p>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#12082a]">
              O que muda — além da balança
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icone: '❤️', titulo: 'Coração', desc: 'Redução de eventos cardiovasculares graves — infarto, AVC — em pacientes com risco elevado. Resultado inédito para um medicamento desta classe.' },
              { icone: '🍷', titulo: 'Compulsão e álcool', desc: 'Age nos receptores do sistema de recompensa. Pacientes relatam redução espontânea do consumo de álcool e de episódios compulsivos com comida.' },
              { icone: '🩸', titulo: 'Metabolismo', desc: 'Melhora da glicemia, resistência insulínica e perfil lipídico — impacto direto na prevenção e controle do diabetes tipo 2.' },
              { icone: '💧', titulo: 'Pressão arterial', desc: 'Queda da pressão associada à perda de gordura visceral — a mais inflamatória e metabolicamente ativa.' },
              { icone: '😴', titulo: 'Sono', desc: 'Melhora da apneia do sono com a perda de gordura cervical. Quem dorme melhor tem menos fome — um ciclo que se reforça.' },
              { icone: '⚡', titulo: 'Energia', desc: 'Com menos inflamação sistêmica e melhor regulação metabólica, a maioria dos pacientes relata mais disposição ao longo do dia.' },
            ].map((item, i) => (
              <div key={i} className="bg-[#F7F3EF] border border-[#E8E0D5] rounded-2xl p-5 hover:border-[#E8823A]/40 transition-colors">
                <div className="text-2xl mb-3">{item.icone}</div>
                <h3 className="font-semibold text-[#12082a] mb-2 text-sm">{item.titulo}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Isabel — posicionamento diferente */}
      <section className="py-20 px-4 sm:px-6 bg-[#F7F3EF]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-[#E8E0D5] rounded-3xl p-8 sm:p-10">
            <p className="text-[#E8823A] text-xs uppercase tracking-widest mb-4">Quem vai cuidar de você</p>

            {/* Pull quote da Isabel */}
            <blockquote className="font-playfair text-xl sm:text-2xl text-[#12082a] italic leading-snug mb-6 border-l-4 border-[#695192] pl-5">
              "Depois de anos vendo pacientes que faziam tudo certo e não conseguiam resultado, entendi que o problema quase nunca era eles."
            </blockquote>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-[#695192]">
                <Image src="/images/hero.jpg" alt="Dra. Isabel Aragão" width={56} height={56} className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <p className="font-semibold text-[#12082a]">Dra. Isabel Aragão</p>
                <p className="text-xs text-gray-500">CRM-SC 26.139 · Especialização em Obesidade — Hospital Albert Einstein</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Médica formada pela UNIVALI-SC, com especialização em Obesidade e Emagrecimento pelo Hospital Albert Einstein. 7 anos de experiência clínica, incluindo atendimento em unidade básica de saúde — onde aprendeu que o problema do peso raramente é o que parece na superfície.
              </p>
              <p>
                Sua abordagem parte de uma investigação real: exames, histórico, composição corporal, padrão de sono, estresse. Só depois de entender o que está acontecendo no organismo de cada paciente é que o protocolo — incluindo ou não o tratamento injetável — é montado.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Albert Einstein', 'Obesidade 360', 'Padrões Alimentares', 'Bioimpedância', 'Aplicação em clínica'].map((tag, i) => (
                <span key={i} className="bg-primary-50 text-[#695192] text-xs px-3 py-1 rounded-full border border-primary-100">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O tratamento — visual timeline */}
      <section className="py-20 px-4 sm:px-6 bg-[#12082a] text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#E8823A] text-xs uppercase tracking-widest mb-4">Como funciona na prática</p>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold mb-10">
            Um tratamento que entende que você é mais do que um número na balança
          </h2>

          <div className="space-y-0">
            {[
              {
                num: '01',
                titulo: 'Investigação completa',
                desc: 'Exames laboratoriais, avaliação hormonal, bioimpedância e escuta do seu histórico. A causa do ganho de peso precisa ser entendida antes de qualquer protocolo.',
                cor: 'border-[#E8823A]',
              },
              {
                num: '02',
                titulo: 'Protocolo individualizado',
                desc: 'Se o tratamento injetável for indicado, a progressão de doses é feita no seu ritmo — começando abaixo do padrão quando necessário para minimizar efeitos colaterais. Aplicação em clínica disponível.',
                cor: 'border-[#695192]',
              },
              {
                num: '03',
                titulo: 'Monitoramento real',
                desc: 'Bioimpedância em cada consulta para garantir que você está perdendo gordura — não músculo. A composição corporal importa tanto quanto o peso.',
                cor: 'border-white/30',
              },
              {
                num: '04',
                titulo: 'As outras peças do quebra-cabeça',
                desc: 'Sono, estresse, alimentação, movimento. O medicamento corrige o sinal biológico; o tratamento completo garante que o resultado dure depois que ele for reduzido.',
                cor: 'border-[#E8823A]',
              },
            ].map((item, i) => (
              <div key={i} className={`relative pl-8 pb-10 border-l-2 ${item.cor} last:pb-0`}>
                <div className="absolute -left-3.5 top-0 w-6 h-6 bg-[#12082a] border-2 border-[#E8823A] rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#E8823A] rounded-full" />
                </div>
                <div className="ml-2">
                  <span className="text-white/30 text-xs font-mono">{item.num}</span>
                  <h3 className="font-semibold text-white text-base mt-1 mb-2">{item.titulo}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honestidade — o que não prometemos */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">Transparência</p>
          <h2 className="font-playfair text-2xl font-bold text-[#12082a] mb-8">O que você não vai ouvir aqui</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            {[
              { titulo: 'Quanto você vai perder', desc: 'Resultados variam por pessoa, histórico, adesão e protocolo. Prometê-los seria desonesto.' },
              { titulo: 'Que vai ser fácil', desc: 'O medicamento reduz a resistência biológica. O trabalho de construir novos hábitos ainda é seu.' },
              { titulo: 'Que não tem riscos', desc: 'Tem. Efeitos colaterais existem, contraindicações existem. Por isso a avaliação médica é inegociável.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <div className="text-red-400 text-lg mb-2">✗</div>
                <h3 className="font-semibold text-[#12082a] text-sm mb-2">{item.titulo}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 sm:px-6 bg-[#F7F3EF]">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-400 text-xs uppercase tracking-widest mb-8">O que pacientes dizem</p>
          <div className="space-y-4">
            {[
              { texto: 'Excelente atendimento e atenção, abordagem holística (física, emocional e social), atendendo as minhas necessidades em sua totalidade, escuta ativa, construção de confiança.', autora: 'Paciente · mulher' },
              { texto: 'Ela tem um atendimento acolhedor, explica tudo com muita clareza e transmite confiança. É perceptível o quanto se dedica a cada paciente, sempre olhando além dos números e exames.', autora: 'Paciente · mulher' },
              { texto: 'Fui muito bem recebido e atendido com todo cuidado e profissionalismo. Parabéns a todos pelo trabalho e atenção com os pacientes!', autora: 'Paciente · homem' },
            ].map((d, i) => (
              <div key={i} className="bg-white border border-[#E8E0D5] rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <span key={j} className="text-[#E8823A] text-sm">★</span>)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic mb-3">"{d.texto}"</p>
                <p className="text-xs text-gray-400">{d.autora}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#12082a] mb-8 text-center">Perguntas reais</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-[#12082a] text-sm leading-snug">{item.q}</span>
                  <span className="text-[#695192] shrink-0 text-lg">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — diferente do padrão */}
      <section className="py-20 px-4 sm:px-6 bg-[#12082a] text-white">
        <div className="max-w-2xl mx-auto">
          {/* Pull quote final */}
          <div className="border-l-4 border-[#E8823A] pl-6 mb-10">
            <p className="font-playfair text-xl sm:text-2xl italic text-white/80 leading-snug">
              "A consulta não começa com o que você quer perder.<br className="hidden sm:block" /> Começa com o que está impedindo você de chegar lá."
            </p>
            <p className="text-white/40 text-sm mt-3">— Dra. Isabel Aragão</p>
          </div>

          <h2 className="font-playfair text-2xl sm:text-3xl font-bold mb-4">
            Pronta para entender o que está acontecendo de verdade?
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-lg">
            A primeira consulta é uma investigação — não uma prescrição imediata. Se o tratamento injetável fizer sentido para o seu caso, vai fazer parte de um plano que respeita a sua biologia.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E8823A] hover:bg-[#d4732e] text-white font-semibold px-8 py-4 rounded-full text-base transition-colors">
            Conversar com a equipe da Dra. Isabel
            <span>→</span>
          </a>
          <p className="text-white/30 text-xs mt-4">Presencial em São José/SC · Online para todo o Brasil</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0e0620] text-white/40 py-8 px-4 sm:px-6 text-center text-xs">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="text-white/60 font-medium">Dra. Isabel Aragão — CRM-SC 26.139</p>
          <p>Av. Mal. Castelo Branco, 65 · Sala 1102 B · Kennedy Towers · Campinas · São José – SC</p>
          <p className="mt-3">
            <Link href="/" className="underline underline-offset-2 hover:text-white/70 transition-colors">← Voltar ao site principal</Link>
          </p>
          <p className="mt-4">Esta página tem caráter informativo e não substitui consulta médica.</p>
        </div>
      </footer>

      {/* Floating WA */}
      <a href={WA} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-4 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-colors flex items-center gap-2 px-4 py-3"
        aria-label="WhatsApp">
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="text-sm font-medium hidden sm:inline">Agendar pelo WhatsApp</span>
      </a>
    </div>
  )
}
