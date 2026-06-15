import type { Metadata } from 'next'
import Link from 'next/link'

// Mensagem com a origem ("Política de Privacidade") pra atribuição de lead na revisão diária do WhatsApp
const WA =
  'https://wa.me/5548991593468?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20a%20Pol%C3%ADtica%20de%20Privacidade.'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Dra. Isabel Aragão',
  description:
    'Como a Dra. Isabel Aragão coleta, usa e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://isabelaragao.com.br/politica',
  },
}

// Última revisão do texto — atualizar quando o conteúdo mudar
const ULTIMA_ATUALIZACAO = 'junho de 2026'

export default function PoliticaPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EF] text-[#12082a]">
      {/* ── HEADER ── */}
      <header className="bg-[#12082a] text-white">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-playfair text-lg font-bold tracking-tight hover:text-[#E8823A] transition-colors"
          >
            Dra. Isabel Aragão
          </Link>
          <Link
            href="/"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            ← Voltar ao site
          </Link>
        </div>
      </header>

      {/* ── CONTEÚDO ── */}
      <article className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <div className="mb-10">
          <span className="inline-block text-[#E8823A] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Privacidade & LGPD
          </span>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold leading-tight">
            Política de Privacidade
          </h1>
          <p className="text-sm text-[#12082a]/50 mt-3">
            Última atualização: {ULTIMA_ATUALIZACAO}
          </p>
        </div>

        <div className="space-y-9 text-[15px] leading-relaxed text-[#12082a]/80">
          <p>
            Esta Política de Privacidade descreve como os dados pessoais de
            visitantes e pacientes são coletados, utilizados e protegidos no
            site <strong>isabelaragao.com.br</strong>, em conformidade com a Lei
            nº 13.709/2018 — <strong>Lei Geral de Proteção de Dados (LGPD)</strong>.
            Ao utilizar este site e entrar em contato pelos nossos canais, você
            declara estar ciente das práticas descritas abaixo.
          </p>

          <Section title="1. Quem é o responsável pelos seus dados">
            <p>
              O tratamento dos dados é realizado por <strong>Dra. Isabel Aragão</strong>
              {' '}(CRM-SC 26.139), médica responsável pelo atendimento. Para
              qualquer questão relacionada a esta política ou aos seus dados
              pessoais, utilize os contatos indicados ao final.
            </p>
          </Section>

          <Section title="2. Quais dados coletamos">
            <p>
              Coletamos apenas os dados necessários para responder ao seu contato
              e organizar o atendimento:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>
                <strong>Dados de contato que você nos fornece:</strong> ao clicar
                nos botões de agendamento, você é direcionado ao WhatsApp e, ao
                iniciar a conversa, compartilha conosco informações como nome,
                número de telefone e o conteúdo das mensagens que decidir enviar.
              </li>
              <li>
                <strong>Dados de navegação:</strong> de forma automática, podemos
                coletar informações técnicas como endereço IP, tipo de
                dispositivo, navegador, páginas visitadas e origem do acesso, por
                meio de cookies e ferramentas de análise (veja a seção 4).
              </li>
            </ul>
            <p className="mt-3">
              Não solicitamos dados sensíveis de saúde por meio deste site.
              Informações clínicas são tratadas exclusivamente no âmbito do
              atendimento médico, protegidas pelo sigilo profissional.
            </p>
          </Section>

          <Section title="3. Para que usamos seus dados">
            <p>Os dados coletados são utilizados para as seguintes finalidades:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>responder às suas mensagens e dúvidas;</li>
              <li>agendar e organizar consultas e atendimentos;</li>
              <li>
                enviar informações, confirmações e lembretes relacionados ao seu
                atendimento;
              </li>
              <li>
                entender como o site é utilizado e melhorar a experiência de
                navegação;
              </li>
              <li>
                mensurar o desempenho de campanhas de divulgação (publicidade
                online).
              </li>
            </ul>
          </Section>

          <Section title="4. Cookies, Google Tag Manager e Google Ads">
            <p>
              Este site utiliza <strong>cookies</strong> e tecnologias
              semelhantes para funcionar corretamente, analisar o tráfego e
              mensurar campanhas. Entre as ferramentas utilizadas estão:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>
                <strong>Google Tag Manager</strong> — gerenciador que organiza as
                etiquetas (tags) de medição utilizadas no site;
              </li>
              <li>
                <strong>Google Ads</strong> e ferramentas de análise do Google —
                usados para medir resultados de anúncios e entender de onde vêm
                as visitas, podendo registrar cookies no seu navegador.
              </li>
            </ul>
            <p className="mt-3">
              Esses serviços podem coletar dados de navegação de forma
              pseudonimizada. Você pode, a qualquer momento, gerenciar ou
              bloquear cookies nas configurações do seu navegador — ainda que
              isso possa afetar algumas funcionalidades do site.
            </p>
          </Section>

          <Section title="5. Compartilhamento de dados">
            <p>
              Não vendemos seus dados pessoais. O compartilhamento ocorre apenas
              quando necessário e limitado às finalidades acima, podendo envolver:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>
                provedores de tecnologia que viabilizam o funcionamento do site e
                a comunicação (por exemplo, WhatsApp/Meta e Google);
              </li>
              <li>
                autoridades públicas, quando houver obrigação legal ou
                regulatória.
              </li>
            </ul>
          </Section>

          <Section title="6. Armazenamento e segurança">
            <p>
              Adotamos medidas técnicas e organizacionais razoáveis para proteger
              seus dados contra acessos não autorizados, perda ou uso indevido. Os
              dados são mantidos pelo tempo necessário para cumprir as finalidades
              desta política e as obrigações legais aplicáveis — inclusive as
              relativas à guarda de prontuários médicos, conforme as normas do
              Conselho Federal de Medicina.
            </p>
          </Section>

          <Section title="7. Seus direitos como titular (LGPD)">
            <p>
              A LGPD garante a você, como titular dos dados, o direito de
              solicitar a qualquer momento:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>confirmação da existência de tratamento dos seus dados;</li>
              <li>acesso aos dados que mantemos sobre você;</li>
              <li>correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>
                anonimização, bloqueio ou eliminação de dados desnecessários ou
                tratados em desconformidade com a lei;
              </li>
              <li>
                portabilidade dos dados e informação sobre com quem os
                compartilhamos;
              </li>
              <li>
                revogação do consentimento, quando o tratamento se basear nele.
              </li>
            </ul>
          </Section>

          <Section title="8. Alterações desta política">
            <p>
              Esta política pode ser atualizada periodicamente para refletir
              mudanças em nossas práticas ou na legislação. A versão vigente estará
              sempre disponível nesta página, com a data da última atualização.
            </p>
          </Section>

          {/* ── CONTATO ── */}
          <div className="bg-white rounded-2xl border border-[#12082a]/8 p-6 md:p-8 mt-4">
            <h2 className="font-playfair text-xl font-bold mb-4">
              Contato do responsável
            </h2>
            <div className="space-y-1.5 text-[15px] text-[#12082a]/80">
              <p><strong>Dra. Isabel Aragão</strong> — CRM-SC 26.139</p>
              <p>Kennedy Towers · Av. Mal. Castelo Branco, 65, Sala 1102 B</p>
              <p>Campinas, São José — SC</p>
              <p className="pt-1">
                WhatsApp:{' '}
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E8823A] font-semibold hover:underline"
                >
                  (48) 99159-3468
                </a>
              </p>
            </div>
          </div>

          <p className="text-xs text-[#12082a]/45 leading-relaxed pt-2">
            Este texto tem caráter informativo e segue um modelo genérico de
            política de privacidade. Recomenda-se a revisão por um(a)
            advogado(a) para adequá-lo integralmente à realidade do consultório e
            às exigências legais aplicáveis.
          </p>
        </div>
      </article>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0a0515] text-white/35 py-7">
        <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <p>© {new Date().getFullYear()} Dra. Isabel Aragão. Todos os direitos reservados.</p>
          <Link href="/" className="hover:text-white transition-colors">
            Voltar ao início
          </Link>
        </div>
      </footer>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-playfair text-xl font-bold text-[#12082a] mb-3">
        {title}
      </h2>
      {children}
    </section>
  )
}
