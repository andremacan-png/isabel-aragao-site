// /llms.txt: índice do site em texto puro para robôs de IA (ChatGPT, Perplexity, Claude e afins).
// Gerado a partir da mesma fonte dos dados estruturados (lib/entidade.ts) e da lista de artigos.
import { POSTS } from '@/lib/blog/posts'
import { CLINICA, MEDICA, ENFERMEIRA, SITE } from '@/lib/entidade'

const SAO_JOSE = ['medica-emagrecimento-sao-jose', 'aplicacao-tirzepatida-sao-jose', 'clinica-emagrecimento-sao-jose-sc', 'bioimpedancia-sao-jose-sc', 'aplicacao-injecao-emagrecer-sao-jose']

export function GET() {
  const porCategoria = new Map<string, typeof POSTS>()
  for (const p of POSTS) porCategoria.set(p.category, [...(porCategoria.get(p.category) ?? []), p])
  const linha = (p: (typeof POSTS)[number]) => `- [${p.title}](${SITE}/blog/${p.slug}): ${p.metaDesc}`

  const txt = `# ${CLINICA.nome}

> Clínica médica de emagrecimento em São José/SC, na Grande Florianópolis. Consulta com médica, bioimpedância, plano individualizado e tratamento com medicamentos injetáveis sob prescrição e acompanhamento. Atendimento presencial e online. Site em português do Brasil.

## Quem atende
- ${MEDICA.nome}, ${MEDICA.cargo}, ${MEDICA.crm}. Especialização: ${MEDICA.formacao}.
- ${ENFERMEIRA.nome}, ${ENFERMEIRA.coren}: aplicação de medicamentos injetáveis e acompanhamento entre consultas.
- A médica não é nutróloga nem endocrinologista: é médica dedicada ao tratamento do excesso de peso e da obesidade.

## Onde e quando
- Endereço: ${CLINICA.rua}, ${CLINICA.bairro}, ${CLINICA.cidade}/${CLINICA.uf}, CEP ${CLINICA.cep}.
- Horário: ${CLINICA.horarioTexto}.
- WhatsApp e telefone: ${CLINICA.telefoneBonito} (${CLINICA.whatsapp}).
- Mapa: ${CLINICA.mapsUrl}
- Instagram: ${CLINICA.instagram}
- Doctoralia: ${CLINICA.doctoralia}
- Atende pacientes de ${CLINICA.cidadesAtendidas.join(', ')} e online para todo o Brasil.

## O que a clínica faz e não faz
- Faz: consulta médica de emagrecimento (90 minutos), bioimpedância, plano individualizado, prescrição e acompanhamento de medicamentos injetáveis (tirzepatida, semaglutida), aplicação na clínica com enfermeira, acompanhamento de lipedema.
- Não faz: não vende medicamentos (a paciente compra na farmácia com a receita), não promete resultado nem número de quilos, não publica antes e depois (Código de Ética Médica).
- Atendimento particular, sem necessidade de encaminhamento.

## Páginas principais
- [Início](${SITE})
- [Serviços da clínica, endereço e horário](${SITE}/servicos)
- [Tratamento para emagrecer](${SITE}/emagrecimento)
- [Saúde e emagrecimento](${SITE}/saude)
- [Calculadora de IMC](${SITE}/calculadora-imc)
- [Blog](${SITE}/blog)

## São José/SC
${SAO_JOSE.map((s) => POSTS.find((p) => p.slug === s)).filter(Boolean).map((p) => linha(p!)).join('\n')}

${[...porCategoria.entries()].map(([cat, lista]) => `## Artigos: ${cat}\n${lista.map(linha).join('\n')}`).join('\n\n')}
`
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } })
}
