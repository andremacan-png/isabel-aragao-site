// Hubs do blog: uma página por tema (/blog/tema/[slug]) que concentra os artigos em ordem de leitura.
// Cada artigo pertence a UM tema (primeiro em que aparece). Textos: informar, nunca prometer resultado.
import { POSTS, type Post } from './posts'

export type Tema = {
  slug: string
  nome: string
  titulo: string
  metaDesc: string
  resumo: string
  resposta: string
  intro: string
  posts: string[]
  faq: { q: string; a: string }[]
  atualizadoEm: string
}

export const TEMAS: Tema[] = [
  {
    slug: 'tirzepatida-mounjaro',
    nome: 'Tirzepatida e Mounjaro',
    titulo: 'Tirzepatida (Mounjaro): guia completo com a médica',
    metaDesc: 'Tudo sobre tirzepatida e Mounjaro: como age, em quanto tempo faz efeito, efeitos colaterais, receita, comparação com Ozempic e onde aplicar na Grande Florianópolis.',
    resumo: 'Como age, em quanto tempo faz efeito, efeitos colaterais, receita e aplicação.',
    resposta: 'A tirzepatida, vendida como Mounjaro, é um medicamento injetável semanal aprovado pela Anvisa para diabetes tipo 2 e para obesidade. Ela age em dois hormônios do apetite (GLP-1 e GIP), reduz a fome e a velocidade com que o estômago esvazia. Exige receita, acompanhamento médico e, na obesidade, faz parte de um tratamento que inclui alimentação, atividade física e revisão de outras causas de ganho de peso.',
    intro: 'Os artigos abaixo foram escritos pela Dra. Isabel Aragão (CRM-SC 26139) e estão em ordem de leitura: primeiro o que o medicamento é e o que esperar, depois efeitos colaterais e dúvidas práticas, por fim onde fazer o acompanhamento e a aplicação na Grande Florianópolis. A clínica não vende o medicamento: a paciente compra na farmácia com a receita.',
    posts: [
      'glp1-medicamentos-injetaveis-emagrecer',
      'quanto-tempo-mounjaro-faz-efeito',
      'quanto-emagrece-com-injetavel',
      'mounjaro-ou-ozempic-qual-escolher',
      'efeitos-colaterais-mounjaro-tirzepatida',
      'precisa-de-receita-mounjaro-tirzepatida', 'mounjaro-parou-de-funcionar',
      'quanto-custa-tratamento-mounjaro-tirzepatida', 'canetas-emagrecedoras-registro-anvisa', 'retatrutida-o-que-e-quando-chega',
      'tirzepatida-florianopolis',
      'mounjaro-florianopolis',
      'aplicacao-tirzepatida-sao-jose', 'mounjaro-sao-jose-sc',
      'aplicacao-tirzepatida-florianopolis',
      'aplicacao-tirzepatida-palhoca',
      'aplicacao-tirzepatida-biguacu',
    ],
    faq: [
      { q: 'Tirzepatida e Mounjaro são a mesma coisa?', a: 'Sim. Tirzepatida é o nome do princípio ativo e Mounjaro é o nome comercial do laboratório Eli Lilly, o único com registro na Anvisa até outubro de 2026. Produtos vendidos como "tirzepatida" em sites sem registro são irregulares e a Anvisa determinou a apreensão deles.' },
      { q: 'Qualquer pessoa pode usar para emagrecer?', a: 'Não. A indicação é avaliada na consulta a partir do IMC, das doenças associadas, do histórico e dos exames. Há situações em que o medicamento não deve ser usado, como gestação e histórico de alguns tipos de tumor de tireoide.' },
      { q: 'Preciso ir à clínica para aplicar?', a: 'Não é obrigatório. A aplicação é simples e a paciente aprende na consulta. Quem prefere pode aplicar na clínica com a enfermeira, em São José, com horário marcado.' },
      { q: 'Quanto custa o tratamento?', a: 'O medicamento é comprado na farmácia e o preço varia por dose e apresentação. Na consulta a médica explica as doses, o que entra além do medicamento e como o custo muda ao longo dos meses.' },
    ],
    atualizadoEm: '2026-10-29',
  },
  {
    slug: 'semaglutida',
    nome: 'Semaglutida: Ozempic e Wegovy',
    titulo: 'Semaglutida (Ozempic e Wegovy): o que saber antes de usar',
    metaDesc: 'Ozempic, Wegovy e o genérico da semaglutida: diferenças, indicação para obesidade, receita e acompanhamento médico em Florianópolis e São José.',
    resumo: 'Diferença entre Ozempic e Wegovy, o genérico, receita e acompanhamento.',
    resposta: 'A semaglutida é o princípio ativo do Ozempic (registrado para diabetes tipo 2) e do Wegovy (registrado para obesidade), ambos injetáveis semanais. Em 2026 a Anvisa aprovou os primeiros genéricos da semaglutida no Brasil, o que deve reduzir o preço. O uso para emagrecer exige receita e acompanhamento médico, e a escolha entre semaglutida e tirzepatida depende do caso.',
    intro: 'Os artigos deste tema explicam como a semaglutida é usada no tratamento da obesidade e como funciona a prescrição e o acompanhamento com a Dra. Isabel Aragão (CRM-SC 26139). Artigos sobre o genérico e a versão em comprimido estão no calendário do blog.',
    posts: ['ozempic-florianopolis-prescricao', 'wegovy-florianopolis', 'semaglutida-generica-o-que-muda'],
    faq: [
      { q: 'Ozempic e Wegovy são iguais?', a: 'O princípio ativo é o mesmo, a semaglutida. A diferença está na dose máxima e no registro: o Ozempic é registrado para diabetes tipo 2 e o Wegovy para obesidade e sobrepeso com doença associada.' },
      { q: 'O genérico já está na farmácia?', a: 'A Anvisa registrou os primeiros genéricos em agosto de 2026 (EMS e Germed). A chegada às farmácias e o preço dependem de cada laboratório e da definição da CMED. Pela lei, o genérico precisa custar pelo menos 35% menos que o produto de referência.' },
      { q: 'Semaglutida ou tirzepatida: qual é melhor?', a: 'Nos estudos, a tirzepatida levou a uma perda de peso média maior, mas resposta, efeitos colaterais, custo e doenças associadas pesam na escolha. A decisão é individual e feita na consulta.' },
    ],
    atualizadoEm: '2026-10-29',
  },
  {
    slug: 'lipedema',
    nome: 'Lipedema',
    titulo: 'Lipedema: o que é, como diferenciar e como tratar',
    metaDesc: 'Lipedema: sintomas, diferença para gordura localizada e obesidade, diagnóstico e tratamento com acompanhamento médico em Florianópolis e São José.',
    resumo: 'Sintomas, diferença para gordura localizada e como é o tratamento.',
    resposta: 'Lipedema é uma doença do tecido gorduroso que atinge quase só mulheres, com acúmulo desproporcional nas pernas e às vezes nos braços, dor ao toque, facilidade para hematomas e pouca resposta a dieta. Não é obesidade nem gordura localizada comum, embora possa coexistir com as duas. O diagnóstico é clínico e o tratamento combina controle do peso, atividade física, compressão e, em alguns casos, medicamentos e cirurgia.',
    intro: 'Os artigos deste tema ajudam a reconhecer o lipedema e a entender o que o acompanhamento médico com a Dra. Isabel Aragão (CRM-SC 26139) pode fazer. Novos artigos sobre os estágios da doença e a relação com os medicamentos injetáveis estão no calendário.',
    posts: ['lipedema-ou-gordura-localizada', 'lipedema-florianopolis-tratamento'],
    faq: [
      { q: 'Lipedema tem cura?', a: 'Não há cura, mas há tratamento que controla a dor, reduz a progressão e melhora a qualidade de vida. Quanto mais cedo o diagnóstico, melhor a resposta.' },
      { q: 'Emagrecer resolve o lipedema?', a: 'Emagrecer ajuda, principalmente quando há obesidade junto, mas a gordura do lipedema responde menos à dieta do que a gordura comum. Por isso o tratamento é combinado.' },
      { q: 'Qual médico trata lipedema?', a: 'O diagnóstico e o acompanhamento clínico podem ser feitos por médica com experiência em obesidade e composição corporal. Quando há indicação de cirurgia, a paciente é encaminhada ao cirurgião.' },
    ],
    atualizadoEm: '2026-10-29',
  },
  {
    slug: 'bioimpedancia',
    nome: 'Bioimpedância e composição corporal',
    titulo: 'Bioimpedância: o que é, como ler o resultado e onde fazer',
    metaDesc: 'Bioimpedância explicada pela médica: o que o exame mede, como interpretar gordura, músculo e água, como se preparar e onde fazer em São José e Florianópolis.',
    resumo: 'O que o exame mede, como ler gordura, músculo e água, e onde fazer.',
    resposta: 'A bioimpedância é um exame rápido e indolor que estima a composição do corpo: gordura, massa muscular, água e taxa metabólica basal. Ela mostra o que a balança esconde, por exemplo se o peso perdido foi gordura ou músculo. Na clínica o exame é feito na própria consulta e repetido ao longo do tratamento para ajustar o plano.',
    intro: 'Os artigos abaixo explicam o exame, ensinam a ler o laudo e mostram como ele é usado no acompanhamento com a Dra. Isabel Aragão (CRM-SC 26139). Artigos sobre gordura visceral e preparo para o exame estão no calendário.',
    posts: ['bioimpedancia-o-que-e', 'como-ler-resultado-bioimpedancia', 'gordura-visceral-o-que-e-como-reduzir', 'bioimpedancia-sao-jose-sc'],
    faq: [
      { q: 'Como me preparar para a bioimpedância?', a: 'Jejum de 2 a 4 horas, sem álcool nas 24 horas anteriores, sem exercício intenso no dia, bexiga vazia e sem creme no corpo. Quem usa marca-passo não deve fazer o exame.' },
      { q: 'A bioimpedância substitui a balança?', a: 'Não substitui, complementa. A balança mostra o peso total; a bioimpedância mostra do que ele é feito. As duas juntas orientam o tratamento.' },
      { q: 'O exame é feito na consulta?', a: 'Sim. Na primeira consulta e nas reavaliações, sem custo separado, na clínica em São José.' },
    ],
    atualizadoEm: '2026-10-29',
  },
  {
    slug: 'por-que-o-peso-sobe',
    nome: 'Por que o peso sobe',
    titulo: 'Por que o peso sobe (e volta): obesidade, hormônios, metabolismo e compulsão',
    metaDesc: 'Por que emagrecer é difícil: obesidade como doença, hormônios, menopausa, metabolismo, efeito sanfona e compulsão alimentar, explicados pela médica.',
    resumo: 'Obesidade como doença, hormônios, menopausa, efeito sanfona e compulsão.',
    resposta: 'O peso sobe e volta por causas que não dependem só de força de vontade: a obesidade é uma doença crônica em que o corpo defende o peso mais alto, os hormônios do apetite mudam depois de dietas, a menopausa e a idade alteram a distribuição de gordura, e a compulsão alimentar tem tratamento próprio. Entender a causa é o que permite escolher o tratamento certo.',
    intro: 'Estes artigos da Dra. Isabel Aragão (CRM-SC 26139) explicam a ciência por trás do ganho de peso e do reganho, em linguagem simples. Comece por "Obesidade é uma doença" e siga a ordem. Artigos sobre resistência à insulina e sono estão no calendário.',
    posts: [
      'obesidade-e-uma-doenca',
      'por-que-dieta-sozinha-falha',
      'efeito-sanfona-por-que-o-peso-volta',
      'hormonios-ganho-de-peso',
      'metabolismo-lento-existe',
      'emagrecimento-apos-40-anos',
      'menopausa-ganho-de-peso',
      'compulsao-alimentar-noite',
      'perda-de-peso-saudavel-quantos-kg-por-mes',
    ],
    faq: [
      { q: 'Obesidade é mesmo uma doença?', a: 'Sim. É reconhecida como doença crônica pela Organização Mundial da Saúde e pelas sociedades médicas, com causas genéticas, hormonais, ambientais e comportamentais. Por isso o tratamento é contínuo, como o de hipertensão ou diabetes.' },
      { q: 'Por que o peso volta depois da dieta?', a: 'Depois de emagrecer, o corpo reduz o gasto de energia e aumenta os hormônios da fome, e esse efeito dura meses ou anos. Sem acompanhamento e, em alguns casos, sem medicamento, o reganho é a regra, não a exceção.' },
      { q: 'Quantos quilos por mês é saudável perder?', a: 'Em geral de 0,5 a 1% do peso por semana, o que dá de 2 a 4 kg por mês para a maioria das pessoas. Mais rápido que isso costuma significar perda de músculo e água.' },
    ],
    atualizadoEm: '2026-10-29',
  },
  {
    slug: 'grande-florianopolis',
    nome: 'Consulta e tratamento na Grande Florianópolis',
    titulo: 'Médica para emagrecer em São José e Grande Florianópolis: como funciona a consulta',
    metaDesc: 'Como é a consulta e o tratamento de emagrecimento com a Dra. Isabel Aragão em São José/SC: primeira consulta, acompanhamento, aplicação e atendimento para Florianópolis, Palhoça e Biguaçu.',
    resumo: 'Primeira consulta, acompanhamento, aplicação e atendimento por cidade.',
    resposta: 'A Dra. Isabel Aragão (CRM-SC 26139) atende emagrecimento e obesidade em São José/SC, no Kennedy Towers, com consulta de 90 minutos, bioimpedância na hora e plano individual. Recebe pacientes de Florianópolis, Palhoça, Biguaçu e região, e atende online para quem mora longe. O agendamento é direto pelo WhatsApp, sem encaminhamento.',
    intro: 'Os artigos abaixo explicam como funciona o atendimento, o que esperar da primeira consulta, como escolher o médico certo e como é o acompanhamento em cada cidade da Grande Florianópolis.',
    posts: [
      'quando-procurar-medico-para-emagrecer',
      'endocrinologista-nutrologo-medico-emagrecimento',
      'como-escolher-medico-emagrecimento',
      'primeira-consulta-medica-emagrecimento',
      'como-funciona-acompanhamento-medico-emagrecimento',
      'medica-emagrecimento-sao-jose',
      'clinica-emagrecimento-sao-jose-sc',
      'aplicacao-injecao-emagrecer-sao-jose',
      'medica-emagrecimento-florianopolis',
      'medica-emagrecimento-palhoca',
      'medica-emagrecimento-biguacu',
    ],
    faq: [
      { q: 'Onde fica a clínica?', a: 'Av. Mal. Castelo Branco, 65, Sala 1102 B, Kennedy Towers, bairro Campinas, São José/SC, ao lado do Kobrasol. Atendimento de segunda a sexta, das 8h às 18h.' },
      { q: 'Preciso de encaminhamento?', a: 'Não. O atendimento é particular e a consulta é marcada direto pelo WhatsApp (48) 99159-3468.' },
      { q: 'Atende online?', a: 'Sim, para quem não pode ir presencialmente. A bioimpedância, por exigir o aparelho, é feita só na clínica.' },
    ],
    atualizadoEm: '2026-10-29',
  },
]

export function getTema(slug: string): Tema | undefined {
  return TEMAS.find((t) => t.slug === slug)
}

/** Tema a que o post pertence (o primeiro que o lista). */
export function temaDoPost(slug: string): Tema | undefined {
  return TEMAS.find((t) => t.posts.includes(slug))
}

/** Posts do tema, na ordem de leitura definida no hub (ignora slugs que não existem). */
export function postsDoTema(tema: Tema): Post[] {
  return tema.posts.map((s) => POSTS.find((p) => p.slug === s)).filter((p): p is Post => Boolean(p))
}
