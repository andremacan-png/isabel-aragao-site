// Posts 64 a 73 (novembro/2026): ondas 3 e 4 do Plano de Conteúdo (comparativos; lipedema, bioimpedância e peso).
// Só as pautas que não dependem de validação prévia da Dra. Mesmas regras de texto do posts-3.ts.
import type { Post } from './posts'
import { FECHO } from './posts-3'

export const POSTS_5: Post[] = [
  {
    slug: 'mounjaro-ou-wegovy-qual-a-diferenca',
    num: 64,
    title: 'Mounjaro ou Wegovy: Qual a Diferença e Como é Feita a Escolha',
    shortTitle: 'Mounjaro ou Wegovy',
    intro: 'Os dois são injetáveis semanais aprovados para obesidade no Brasil, mas têm substâncias, doses e estudos diferentes. Veja a comparação lado a lado e o que pesa na escolha.',
    category: 'Medicamentos',
    readTime: '6 min',
    date: 'Novembro 2026',
    metaDesc: 'Mounjaro (tirzepatida) ou Wegovy (semaglutida)? Compare como agem, doses, perda média nos estudos e efeitos colaterais. A escolha é feita em consulta.',
    related: ['mounjaro-ou-ozempic-qual-escolher', 'em-quanto-tempo-o-wegovy-faz-efeito', 'quanto-tempo-mounjaro-faz-efeito', 'wegovy-florianopolis'],
    faq: [
      { q: 'Qual a diferença entre Mounjaro e Wegovy?', a: 'Mounjaro é tirzepatida, que age em dois receptores hormonais (GIP e GLP-1). Wegovy é semaglutida 2,4 mg, que age no receptor de GLP-1. Os dois são aplicados uma vez por semana.' },
      { q: 'Qual emagrece mais, Mounjaro ou Wegovy?', a: 'No estudo de comparação direta (SURMOUNT-5, 72 semanas), a perda média foi de cerca de 20% com tirzepatida e 14% com semaglutida. São médias: a resposta individual varia e não é promessa de resultado.' },
      { q: 'Qual tem menos efeito colateral?', a: 'Os efeitos são parecidos, principalmente digestivos: náusea, intestino preso ou solto. A tolerância é individual, e subir a dose devagar é o que mais ajuda nos dois.' },
      { q: 'Wegovy e Ozempic são a mesma coisa?', a: 'Têm a mesma substância, a semaglutida, em doses e indicações diferentes. No Brasil, o Ozempic é aprovado para diabetes tipo 2 e o Wegovy para obesidade e sobrepeso com doenças associadas.' },
      { q: 'Posso trocar de um para o outro?', a: 'A troca é possível, mas não tem equivalência direta de dose. Deve ser planejada pela médica, com dose de início e ritmo definidos caso a caso.' },
      { q: 'Como a médica escolhe?', a: 'Pelo histórico de saúde, doenças associadas, resposta e tolerância a tratamentos anteriores, contraindicações, disponibilidade e custo ao longo dos meses.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> Mounjaro é <strong>tirzepatida</strong> (age em GIP e GLP-1) e Wegovy é <strong>semaglutida 2,4 mg</strong> (age em GLP-1). Os dois são semanais e aprovados pela Anvisa para obesidade. Na comparação direta entre eles, a perda média de peso foi maior com tirzepatida. Isso não define o melhor para cada pessoa: a escolha depende de histórico, tolerância e outros fatores avaliados em consulta.</div>
<p>Com dois medicamentos aprovados para a mesma finalidade, a pergunta é natural. A comparação ajuda a entender as diferenças, mas a decisão não sai de uma tabela.</p>

<h2>Mounjaro e Wegovy lado a lado</h2>
<table>
  <thead><tr><th></th><th>Mounjaro</th><th>Wegovy</th></tr></thead>
  <tbody>
    <tr><td><strong>Substância</strong></td><td>Tirzepatida</td><td>Semaglutida</td></tr>
    <tr><td><strong>Como age</strong></td><td>Receptores de GIP e GLP-1</td><td>Receptor de GLP-1</td></tr>
    <tr><td><strong>Aplicação</strong></td><td>Uma vez por semana</td><td>Uma vez por semana</td></tr>
    <tr><td><strong>Doses</strong></td><td>2,5 a 15 mg</td><td>0,25 a 2,4 mg</td></tr>
    <tr><td><strong>Dose inicial usual (bula)</strong></td><td>2,5 mg por 4 semanas</td><td>0,25 mg por 4 semanas</td></tr>
    <tr><td><strong>Perda média nos estudos principais</strong></td><td>15% a 21% em 72 semanas, conforme a dose (SURMOUNT-1)</td><td>Cerca de 15% em 68 semanas (STEP 1)</td></tr>
    <tr><td><strong>Efeitos mais comuns</strong></td><td>Náusea, diarreia, constipação</td><td>Náusea, diarreia, constipação</td></tr>
  </tbody>
</table>
<p>Os números são médias de grupos de pacientes em estudos, com dieta e atividade física associadas. Não são previsão individual.</p>

<h2>Qual emagrece mais</h2>
<p>O estudo SURMOUNT-5 comparou os dois diretamente por 72 semanas, em adultos com obesidade sem diabetes. A perda média foi de cerca de 20% do peso com tirzepatida e de cerca de 14% com semaglutida. Os dois grupos tiveram resultado expressivo.</p>
<p>Média não é destino. Há pessoas que respondem muito bem à semaglutida e pessoas que respondem pouco à tirzepatida. O que se vê no consultório é resposta individual.</p>

<h2>O que a semaglutida tem a seu favor</h2>
<ul>
  <li><strong>Mais tempo de uso e de estudo</strong>, com grande volume de dados de segurança</li>
  <li><strong>Estudo com desfechos cardiovasculares</strong> em pessoas com sobrepeso ou obesidade e doença cardíaca (SELECT)</li>
  <li><strong>Experiência anterior do paciente:</strong> quem já usou e tolerou bem pode ter motivo para continuar</li>
</ul>
<!--CTA-->

<h2>Efeitos colaterais</h2>
<p>O perfil é parecido: náusea, sensação de estômago cheio, diarreia e constipação, principalmente no início e nos aumentos de dose. As contraindicações também se sobrepõem, como gestação e histórico de alguns tipos de tumor de tireoide. Veja <a href="/blog/efeitos-colaterais-mounjaro-tirzepatida">efeitos colaterais do Mounjaro</a>.</p>

<h2>Como a escolha é feita</h2>
<ul>
  <li>Quanto peso há para perder e quais doenças estão associadas</li>
  <li>Presença de diabetes ou doença cardiovascular</li>
  <li>Tratamentos anteriores: o que funcionou e o que foi mal tolerado</li>
  <li>Contraindicações e outros medicamentos em uso</li>
  <li>Disponibilidade na farmácia e custo ao longo dos meses</li>
</ul>

<h2>Dá para trocar um pelo outro?</h2>
<p>Dá, mas não existe tabela de equivalência entre as doses. Cada caso é um caso: a médica define a dose de início e o ritmo da transição conforme a dose atual, o tempo de uso e a tolerância. Não troque por conta própria.</p>
<p>Veja também <a href="/blog/mounjaro-ou-ozempic-qual-escolher">Mounjaro ou Ozempic</a> e <a href="/blog/em-quanto-tempo-o-wegovy-faz-efeito">em quanto tempo o Wegovy faz efeito</a>.</p>
${FECHO}
`,
  },
  {
    slug: 'em-quanto-tempo-o-ozempic-faz-efeito',
    num: 65,
    title: 'Em Quanto Tempo o Ozempic Faz Efeito? Dias, Semanas e Meses',
    shortTitle: 'Em Quanto Tempo o Ozempic Faz Efeito',
    intro: 'O Ozempic começa a agir em dias, mas o resultado se constrói em semanas e meses. Veja o que esperar em cada fase, dose a dose, e por que a pressa atrapalha.',
    category: 'Medicamentos',
    readTime: '6 min',
    date: 'Novembro 2026',
    metaDesc: 'O Ozempic (semaglutida) atinge o pico em 1 a 3 dias; o apetite muda nas primeiras semanas e o peso responde ao longo de meses. Veja semana a semana e por dose.',
    related: ['em-quanto-tempo-o-wegovy-faz-efeito', 'quanto-tempo-mounjaro-faz-efeito', 'mounjaro-ou-ozempic-qual-escolher', 'ozempic-florianopolis-prescricao'],
    faq: [
      { q: 'Em quantos dias o Ozempic começa a fazer efeito?', a: 'Segundo a bula, a semaglutida atinge a concentração máxima no sangue de 1 a 3 dias após a aplicação. A redução do apetite costuma ser percebida nas primeiras semanas, ainda na dose inicial.' },
      { q: 'Qual a primeira dose do Ozempic?', a: 'Cada caso é um caso: depende do histórico, de uso anterior e de reações, avaliados em consulta. Usualmente, conforme a bula, inicia-se com 0,25 mg por semana durante 4 semanas, uma dose de adaptação.' },
      { q: 'Com quantas semanas o Ozempic faz efeito na balança?', a: 'A perda costuma ficar mais consistente depois do primeiro mês, quando a dose sobe. O resultado é gradual e segue por muitos meses.' },
      { q: 'Uma dose de Ozempic dura quantos dias?', a: 'A aplicação é semanal. A meia-vida da semaglutida é de cerca de uma semana, e o nível no sangue se estabiliza depois de 4 a 5 semanas de uso.' },
      { q: 'O Ozempic é aprovado para emagrecer?', a: 'No Brasil, o Ozempic é aprovado para diabetes tipo 2. A semaglutida aprovada para obesidade é o Wegovy, em dose maior. A indicação é sempre feita pela médica.' },
      { q: 'Esqueci a dose do Ozempic. O que fazer?', a: 'Pela bula, se passaram até 5 dias do dia previsto, aplique assim que lembrar. Se passaram mais de 5 dias, pule e siga no dia habitual. Nunca aplique duas doses juntas.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> o Ozempic (semaglutida) atinge o <strong>pico no sangue de 1 a 3 dias</strong> após a aplicação, segundo a bula. O <strong>apetite costuma mudar nas primeiras semanas</strong>, ainda na dose inicial. Glicose e peso respondem de forma gradual, ao longo de semanas e meses, conforme a dose é ajustada. Cada caso é um caso, avaliado em consulta.</div>
<p>A lógica é a mesma dos outros injetáveis semanais: um efeito rápido, sentido no apetite, e um efeito lento, construído com o tempo. Entender os dois evita frustração nas primeiras semanas.</p>

<h2>Resumo: o efeito do Ozempic no tempo</h2>
<table>
  <thead><tr><th>Quando</th><th>O que costuma acontecer</th></tr></thead>
  <tbody>
    <tr><td><strong>1 a 3 dias</strong></td><td>Pico do medicamento no sangue após a aplicação.</td></tr>
    <tr><td><strong>1 a 4 semanas</strong></td><td>Dose de adaptação. Menos fome para muitas pessoas; balança muda pouco.</td></tr>
    <tr><td><strong>4 a 5 semanas</strong></td><td>O nível no sangue se estabiliza.</td></tr>
    <tr><td><strong>2 a 3 meses</strong></td><td>Com o ajuste de dose, o efeito sobre glicose e peso fica mais claro.</td></tr>
    <tr><td><strong>6 meses ou mais</strong></td><td>O resultado continua se construindo e tende a estabilizar depois de um ano.</td></tr>
  </tbody>
</table>

<h2>Dose a dose</h2>
<p>Usualmente, conforme a bula, o tratamento começa com 0,25 mg por semana durante 4 semanas. Essa dose serve para o organismo se adaptar. Depois, a dose passa para 0,5 mg e pode ser aumentada, em intervalos de pelo menos 4 semanas, conforme a resposta e a tolerância.</p>
<p>Na prática cada caso é um caso: histórico, uso anterior e reações mudam o ritmo, e isso é decidido em consulta. Subir rápido não antecipa o resultado e aumenta a náusea.</p>

<h2>Por que a aplicação é semanal</h2>
<p>A semaglutida tem meia-vida de cerca de uma semana. Isso mantém o efeito de uma aplicação a outra e explica por que o nível no sangue leva de 4 a 5 semanas para se estabilizar. Também explica por que, ao parar, o medicamento leva em torno de 5 semanas para sair do organismo.</p>
<!--CTA-->

<h2>Ozempic para emagrecer</h2>
<p>No Brasil, o Ozempic é aprovado para o tratamento do diabetes tipo 2. A mesma substância, em dose maior, é aprovada para obesidade com o nome Wegovy. A decisão sobre qual medicamento usar, e com qual finalidade, é médica. Veja <a href="/blog/em-quanto-tempo-o-wegovy-faz-efeito">em quanto tempo o Wegovy faz efeito</a>.</p>

<h2>E se não estiver fazendo efeito?</h2>
<ul>
  <li><strong>Ainda é cedo:</strong> no primeiro mês, a dose é de adaptação</li>
  <li><strong>A dose pode precisar de ajuste</strong>, feito em consulta</li>
  <li><strong>A balança esconde mudanças</strong> que a bioimpedância mostra</li>
  <li><strong>Alimentação, sono e álcool</strong> pesam no resultado</li>
  <li><strong>Origem do produto:</strong> só farmácia, com receita</li>
</ul>

<h2>Ozempic ou Mounjaro: o tempo muda?</h2>
<p>O padrão é parecido: apetite primeiro, peso depois. As substâncias, as doses e os resultados médios dos estudos são diferentes. Veja <a href="/blog/mounjaro-ou-ozempic-qual-escolher">Mounjaro ou Ozempic</a> e <a href="/blog/quanto-tempo-mounjaro-faz-efeito">em quanto tempo o Mounjaro faz efeito</a>.</p>
${FECHO}
`,
  },
  {
    slug: 'em-quanto-tempo-o-wegovy-faz-efeito',
    num: 66,
    title: 'Em Quanto Tempo o Wegovy Faz Efeito? Dose a Dose',
    shortTitle: 'Em Quanto Tempo o Wegovy Faz Efeito',
    intro: 'O Wegovy leva cerca de 4 meses só para chegar à dose de manutenção. Veja o que esperar em cada etapa, de 0,25 a 2,4 mg, e quando o resultado costuma aparecer.',
    category: 'Medicamentos',
    readTime: '6 min',
    date: 'Novembro 2026',
    metaDesc: 'Wegovy (semaglutida 2,4 mg): apetite muda nas primeiras semanas e a dose de manutenção chega em cerca de 16 semanas. Veja o efeito dose a dose.',
    related: ['em-quanto-tempo-o-ozempic-faz-efeito', 'mounjaro-ou-wegovy-qual-a-diferenca', 'wegovy-florianopolis', 'quanto-tempo-mounjaro-faz-efeito'],
    faq: [
      { q: 'Em quanto tempo o Wegovy começa a fazer efeito?', a: 'O apetite costuma mudar nas primeiras semanas, ainda nas doses iniciais. A perda de peso é gradual e fica mais consistente conforme a dose sobe, ao longo dos primeiros meses.' },
      { q: 'Qual a dose inicial do Wegovy?', a: 'Cada caso é um caso, avaliado em consulta. Usualmente, conforme a bula, inicia-se com 0,25 mg por semana durante 4 semanas, com aumentos a cada 4 semanas até a dose de manutenção.' },
      { q: 'Quanto tempo leva para chegar a 2,4 mg?', a: 'No esquema de referência da bula, cerca de 16 semanas: 0,25, 0,5, 1,0 e 1,7 mg, quatro semanas em cada, antes de 2,4 mg. A médica pode alongar esse caminho conforme a tolerância.' },
      { q: 'Quanto se perde com Wegovy?', a: 'No estudo STEP 1, a perda média foi de cerca de 15% do peso em 68 semanas, com dieta e atividade física associadas. É média de grupo, não promessa individual.' },
      { q: 'Preciso chegar à dose máxima?', a: 'Nem sempre. Parte das pessoas mantém boa resposta em dose menor, e a decisão é individual.' },
      { q: 'O que acontece se eu parar?', a: 'O medicamento leva em torno de 5 semanas para sair do organismo e a fome tende a voltar. Nos estudos, parte do peso foi recuperada após a interrupção, por isso a retirada deve ser planejada.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> com Wegovy (semaglutida 2,4 mg), o <strong>apetite costuma mudar nas primeiras semanas</strong>. O esquema de referência da bula leva <strong>cerca de 16 semanas</strong> para chegar à dose de manutenção, e a perda de peso segue por mais de um ano. Cada caso é um caso: dose e ritmo são definidos em consulta, e a resposta é individual.</div>
<p>O Wegovy tem uma subida de dose longa, de propósito. Quem sabe disso desde o começo atravessa os primeiros meses com menos ansiedade.</p>

<h2>O efeito do Wegovy dose a dose</h2>
<table>
  <thead><tr><th>Período de referência</th><th>Dose semanal</th><th>O que esperar</th></tr></thead>
  <tbody>
    <tr><td>Semanas 1 a 4</td><td>0,25 mg</td><td>Adaptação. Menos fome para parte das pessoas; balança muda pouco.</td></tr>
    <tr><td>Semanas 5 a 8</td><td>0,5 mg</td><td>Apetite mais controlado. Primeiros quilos para muitas pessoas.</td></tr>
    <tr><td>Semanas 9 a 12</td><td>1,0 mg</td><td>Perda mais consistente.</td></tr>
    <tr><td>Semanas 13 a 16</td><td>1,7 mg</td><td>Efeito mais forte; efeitos digestivos podem reaparecer por alguns dias.</td></tr>
    <tr><td>A partir da semana 17</td><td>2,4 mg</td><td>Dose de manutenção do esquema de referência.</td></tr>
  </tbody>
</table>
<p>Esse é o esquema da bula e dos estudos. Na prática, histórico, uso anterior e reações mudam o ritmo: a médica pode manter uma dose por mais tempo ou parar em uma dose menor.</p>

<h2>Dois efeitos, dois tempos</h2>
<ul>
  <li><strong>Apetite:</strong> rápido. O pico no sangue acontece de 1 a 3 dias após a aplicação, e a mudança costuma ser percebida nas primeiras semanas.</li>
  <li><strong>Peso:</strong> gradual. Acompanha a subida da dose e continua por muitos meses.</li>
</ul>

<h2>O que os estudos mostram</h2>
<p>No STEP 1, com 68 semanas de tratamento, a perda média foi de cerca de 15% do peso inicial, contra cerca de 2% no grupo placebo, todos com orientação de dieta e atividade física. A curva foi mais acentuada nos primeiros meses e estabilizou depois de um ano.</p>
<!--CTA-->

<h2>Por que tanta calma para subir</h2>
<p>A subida lenta dá tempo para o estômago e o intestino se adaptarem. Pular etapas aumenta náusea, vômito e a chance de abandonar o tratamento. O resultado final não chega antes por isso.</p>

<h2>Sinais de que está funcionando</h2>
<ul>
  <li>Saciedade mais rápida e menos beliscos</li>
  <li>Menos pensamento constante em comida</li>
  <li>Roupa mais folgada antes de a balança mudar muito</li>
  <li>Bioimpedância com gordura em queda e músculo preservado</li>
</ul>

<h2>Wegovy, Ozempic e Mounjaro</h2>
<p>Wegovy e Ozempic têm a mesma substância, em doses e indicações diferentes. O Mounjaro é outra substância, a tirzepatida. Veja <a href="/blog/em-quanto-tempo-o-ozempic-faz-efeito">em quanto tempo o Ozempic faz efeito</a>, <a href="/blog/mounjaro-ou-wegovy-qual-a-diferenca">Mounjaro ou Wegovy</a> e <a href="/blog/quanto-tempo-mounjaro-faz-efeito">em quanto tempo o Mounjaro faz efeito</a>.</p>
${FECHO}
`,
  },
  {
    slug: 'lipedema-sintomas-como-saber-se-voce-tem',
    num: 67,
    title: 'Lipedema: Sintomas e Como Saber se Você Tem',
    shortTitle: 'Lipedema: Sintomas',
    intro: 'Pernas que engrossam sem acompanhar o resto do corpo, doem ao toque e ficam roxas com facilidade. Veja os sintomas do lipedema, quem tem mais risco e como é feito o diagnóstico.',
    category: 'Saúde',
    readTime: '6 min',
    date: 'Novembro 2026',
    metaDesc: 'Sintomas de lipedema: gordura simétrica em pernas ou braços, dor ao toque, hematomas fáceis e pés poupados. Veja como diferenciar e como é feito o diagnóstico.',
    related: ['lipedema-ou-gordura-localizada', 'lipedema-nas-pernas-e-nos-bracos-estagios', 'lipedema-florianopolis-tratamento', 'bioimpedancia-o-que-e'],
    faq: [
      { q: 'Quais são os sintomas do lipedema?', a: 'Acúmulo de gordura simétrico em pernas, quadris ou braços, desproporcional ao tronco; dor ou sensibilidade ao toque; hematomas com facilidade; sensação de peso; e pés e mãos poupados.' },
      { q: 'Como saber se tenho lipedema ou só gordura?', a: 'O lipedema costuma ser simétrico, doloroso, resistente a dieta e exercício e poupa os pés, formando um degrau no tornozelo. A confirmação é feita em avaliação médica.' },
      { q: 'Existe exame para lipedema?', a: 'O diagnóstico é clínico, pela história e pelo exame físico. Exames de imagem e bioimpedância ajudam a documentar e a afastar outras causas, mas não fecham o diagnóstico sozinhos.' },
      { q: 'Lipedema atinge homens?', a: 'É raro. A condição afeta quase exclusivamente mulheres e costuma aparecer ou piorar em fases de mudança hormonal.' },
      { q: 'Lipedema tem cura?', a: 'É uma condição crônica. Não há cura, mas há tratamento para controlar sintomas, reduzir a inflamação e frear a progressão.' },
      { q: 'Emagrecer resolve o lipedema?', a: 'Perder peso ajuda nos sintomas e na saúde geral, mas a gordura do lipedema responde menos do que a gordura comum. Por isso o tratamento vai além da balança.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> o lipedema é um acúmulo anormal de gordura, quase sempre em mulheres, que atinge <strong>pernas, quadris e às vezes braços dos dois lados</strong>, com <strong>dor ao toque, hematomas fáceis e pés poupados</strong>. Costuma resistir a dieta e exercício. O diagnóstico é clínico, feito em consulta.</div>
<p>Muitas mulheres passam anos ouvindo que precisam apenas emagrecer, quando o que têm é uma doença com nome, características próprias e tratamento.</p>

<h2>Principais sintomas</h2>
<ul>
  <li><strong>Desproporção:</strong> pernas e quadris mais volumosos que o tronco</li>
  <li><strong>Simetria:</strong> os dois lados são afetados de forma parecida</li>
  <li><strong>Dor ou sensibilidade</strong> ao toque e à pressão</li>
  <li><strong>Hematomas fáceis</strong>, sem lembrar de ter batido</li>
  <li><strong>Sensação de peso e cansaço</strong> nas pernas, pior no fim do dia e no calor</li>
  <li><strong>Pés e mãos poupados</strong>, com um degrau no tornozelo ou no punho</li>
  <li><strong>Textura irregular</strong>, com pequenos nódulos sob a pele</li>
  <li><strong>Pouca resposta</strong> das áreas afetadas a dieta e exercício</li>
</ul>

<h2>Lipedema, gordura comum ou linfedema</h2>
<table>
  <thead><tr><th></th><th>Lipedema</th><th>Gordura comum</th><th>Linfedema</th></tr></thead>
  <tbody>
    <tr><td><strong>Distribuição</strong></td><td>Simétrica, pernas e braços</td><td>Corpo todo</td><td>Muitas vezes de um lado só</td></tr>
    <tr><td><strong>Dor ao toque</strong></td><td>Comum</td><td>Não</td><td>Em geral não</td></tr>
    <tr><td><strong>Pés</strong></td><td>Poupados</td><td>Acompanham o peso</td><td>Inchados</td></tr>
    <tr><td><strong>Hematomas</strong></td><td>Frequentes</td><td>Não</td><td>Não</td></tr>
    <tr><td><strong>Resposta a dieta</strong></td><td>Pequena na área afetada</td><td>Boa</td><td>Não muda</td></tr>
  </tbody>
</table>
<p>As condições podem coexistir: é possível ter lipedema e obesidade ao mesmo tempo. Veja mais em <a href="/blog/lipedema-ou-gordura-localizada">lipedema ou gordura localizada</a>.</p>

<h2>Quem tem mais risco</h2>
<ul>
  <li>Mulheres, quase exclusivamente</li>
  <li>Quem tem mãe, irmã ou avó com o mesmo formato de pernas</li>
  <li>Fases de mudança hormonal: puberdade, gestação e menopausa</li>
</ul>
<!--CTA-->

<h2>Como é feito o diagnóstico</h2>
<p>Não existe um exame de sangue ou de imagem que confirme sozinho. O diagnóstico é clínico: a médica ouve a história, examina as áreas afetadas, avalia dor, simetria e o aspecto da pele, e afasta outras causas de inchaço. Bioimpedância e exames de imagem ajudam a documentar e a acompanhar a evolução.</p>

<h2>Por que diagnosticar cedo</h2>
<p>O lipedema tende a progredir ao longo dos anos, principalmente com ganho de peso e mudanças hormonais. Identificar cedo permite controlar a inflamação, aliviar a dor e frear a evolução. Veja <a href="/blog/lipedema-nas-pernas-e-nos-bracos-estagios">como reconhecer cada estágio</a>.</p>

<h2>O que o tratamento envolve</h2>
<p>O cuidado é conservador na maior parte dos casos: alimentação com perfil anti-inflamatório, atividade física adequada, compressão e drenagem quando indicadas, controle do peso e acompanhamento. A cirurgia é reservada a situações específicas. Veja <a href="/blog/lipedema-florianopolis-tratamento">como funciona o tratamento do lipedema</a>.</p>
${FECHO}
`,
  },
  {
    slug: 'lipedema-nas-pernas-e-nos-bracos-estagios',
    num: 68,
    title: 'Lipedema nas Pernas e nos Braços: Como Reconhecer Cada Estágio',
    shortTitle: 'Lipedema: Estágios',
    intro: 'O lipedema é classificado por estágio, conforme o aspecto da pele e do tecido, e por tipo, conforme a região do corpo. Entenda cada um e o que eles mudam no acompanhamento.',
    category: 'Saúde',
    readTime: '5 min',
    date: 'Novembro 2026',
    metaDesc: 'Lipedema nas pernas e nos braços: entenda os estágios (da pele lisa às dobras de tecido) e os tipos por região do corpo. Veja como reconhecer cada um.',
    related: ['lipedema-sintomas-como-saber-se-voce-tem', 'lipedema-ou-gordura-localizada', 'lipedema-florianopolis-tratamento', 'bioimpedancia-o-que-e'],
    faq: [
      { q: 'Quantos estágios o lipedema tem?', a: 'A classificação mais usada descreve três estágios, conforme o aspecto da pele e do tecido. Alguns autores incluem um quarto, quando há linfedema associado.' },
      { q: 'Como é o lipedema nas pernas?', a: 'Acúmulo simétrico do quadril ao tornozelo, com os pés poupados e um degrau característico acima do tornozelo. Pode haver dor, peso e hematomas fáceis.' },
      { q: 'Lipedema pode dar nos braços?', a: 'Sim. Em parte das mulheres os braços também são afetados, com acúmulo do ombro ao punho e as mãos poupadas.' },
      { q: 'O lipedema sempre piora de estágio?', a: 'Não necessariamente. A progressão varia muito e está ligada a ganho de peso, mudanças hormonais e falta de tratamento. Com cuidado adequado, é possível estabilizar.' },
      { q: 'O estágio define o tratamento?', a: 'Ajuda a orientar, mas não sozinho. Sintomas, limitação no dia a dia e condições associadas pesam tanto quanto o aspecto.' },
      { q: 'Dá para voltar de estágio?', a: 'O tratamento melhora dor, inchaço e volume, e pode mudar o aspecto. A classificação não costuma regredir formalmente, mas a qualidade de vida melhora.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> o lipedema é descrito em <strong>três estágios</strong>, conforme a pele e o tecido: no primeiro a pele é lisa, no segundo fica irregular e no terceiro surgem dobras e deformidades. A classificação por <strong>tipo</strong> indica a região: quadris, pernas até o joelho, pernas até o tornozelo, braços ou panturrilhas. O estágio é definido em avaliação médica.</div>
<p>Saber em que ponto a condição está ajuda a entender o que esperar e a planejar o cuidado. Mas o estágio é só uma parte da avaliação.</p>

<h2>Os estágios do lipedema</h2>
<table>
  <thead><tr><th>Estágio</th><th>Aspecto</th></tr></thead>
  <tbody>
    <tr><td><strong>Estágio 1</strong></td><td>Pele lisa. Ao toque, a gordura é mais espessa e com pequenos nódulos. A dor e os hematomas já podem existir.</td></tr>
    <tr><td><strong>Estágio 2</strong></td><td>Pele irregular, com ondulações. Os nódulos são maiores e mais perceptíveis.</td></tr>
    <tr><td><strong>Estágio 3</strong></td><td>Grandes acúmulos e dobras de tecido, principalmente em coxas e joelhos, que podem atrapalhar a caminhada.</td></tr>
    <tr><td><strong>Com linfedema associado</strong></td><td>Quando o sistema linfático fica sobrecarregado e os pés ou as mãos também incham.</td></tr>
  </tbody>
</table>
<p>A intensidade da dor não acompanha necessariamente o estágio. Há mulheres no estágio 1 com muita dor e mulheres no estágio 3 com pouca.</p>

<h2>Os tipos, por região do corpo</h2>
<ul>
  <li><strong>Tipo 1:</strong> glúteos e quadris</li>
  <li><strong>Tipo 2:</strong> do quadril aos joelhos</li>
  <li><strong>Tipo 3:</strong> do quadril aos tornozelos</li>
  <li><strong>Tipo 4:</strong> braços</li>
  <li><strong>Tipo 5:</strong> panturrilhas</li>
</ul>
<p>Uma mesma pessoa pode ter mais de um tipo, como pernas e braços ao mesmo tempo.</p>

<h2>Lipedema nas pernas</h2>
<p>É a forma mais comum. O acúmulo é simétrico e para no tornozelo, deixando o pé com formato normal. Esse degrau é um dos sinais mais característicos. Por dentro dos joelhos é comum haver um acúmulo que dificulta a marcha com o tempo.</p>

<h2>Lipedema nos braços</h2>
<p>Aparece em parte das mulheres, quase sempre junto com as pernas. O acúmulo vai do ombro ao punho, com as mãos poupadas. Costuma ser percebido pela dificuldade em encontrar roupas e pela sensibilidade ao toque.</p>
<!--CTA-->

<h2>O que faz o lipedema avançar</h2>
<ul>
  <li>Ganho de peso</li>
  <li>Mudanças hormonais: gestação e menopausa</li>
  <li>Sedentarismo</li>
  <li>Falta de diagnóstico e de tratamento</li>
</ul>
<p>A progressão não é inevitável. Com acompanhamento, muitas mulheres mantêm o quadro estável por anos.</p>

<h2>Como o estágio entra na avaliação</h2>
<p>A médica considera o estágio junto com a dor, a limitação no dia a dia, a composição corporal e as condições associadas. A bioimpedância por segmentos ajuda a comparar braços, pernas e tronco ao longo do tempo. Veja <a href="/blog/lipedema-sintomas-como-saber-se-voce-tem">os sintomas do lipedema</a> e <a href="/blog/lipedema-florianopolis-tratamento">como funciona o tratamento</a>.</p>
${FECHO}
`,
  },
  {
    slug: 'bioimpedancia-preparo-jejum-o-que-atrapalha',
    num: 69,
    title: 'Bioimpedância: Preparo, Jejum e O Que Atrapalha o Resultado',
    shortTitle: 'Preparo para Bioimpedância',
    intro: 'A bioimpedância mede o corpo pela água. Por isso o que você comeu, bebeu e fez nas horas anteriores muda o resultado. Veja como se preparar para um exame confiável.',
    category: 'Saúde',
    readTime: '5 min',
    date: 'Novembro 2026',
    metaDesc: 'Preparo para bioimpedância: jejum de 2 a 4 horas, sem álcool na véspera, sem exercício intenso e bexiga vazia. Veja o que atrapalha e quem não pode fazer.',
    related: ['bioimpedancia-o-que-e', 'como-ler-resultado-bioimpedancia', 'bioimpedancia-valores-de-referencia-gordura-e-musculo', 'bioimpedancia-sao-jose-sc'],
    faq: [
      { q: 'Precisa de jejum para fazer bioimpedância?', a: 'Em geral, sim: de 2 a 4 horas sem comer e sem grandes volumes de líquido. O tempo exato varia conforme o aparelho e o protocolo da clínica, e é informado no agendamento.' },
      { q: 'Posso beber água antes?', a: 'Hidratação normal no dia anterior é importante. Nas horas antes do exame, evite beber grandes volumes de uma vez.' },
      { q: 'Posso treinar antes da bioimpedância?', a: 'O recomendado é evitar exercício intenso no dia do exame, porque ele altera a distribuição de água no corpo.' },
      { q: 'Menstruação atrapalha?', a: 'Pode atrapalhar. A retenção de líquido do período muda o resultado. O ideal é agendar fora dele e, nas reavaliações, repetir sempre na mesma fase do ciclo.' },
      { q: 'Quem não pode fazer bioimpedância?', a: 'Pessoas com marca-passo ou outros dispositivos eletrônicos implantados e gestantes costumam ter contraindicação. Informe sempre a equipe antes.' },
      { q: 'De quanto em quanto tempo repetir?', a: 'Depende do objetivo. Em tratamentos de emagrecimento, costuma ser repetida a cada um a três meses, sempre nas mesmas condições.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> a bioimpedância estima gordura e músculo a partir da água do corpo. Para um resultado confiável, o preparo usual inclui <strong>jejum de 2 a 4 horas, nada de álcool nas 24 horas anteriores, sem exercício intenso no dia e bexiga vazia</strong>. O protocolo exato varia com o aparelho e é passado no agendamento. O mais importante é repetir sempre nas mesmas condições.</div>
<p>O exame é rápido e indolor. O que dá trabalho é chegar em condições parecidas todas as vezes, para que a comparação entre uma avaliação e outra seja justa.</p>

<h2>Preparo usual</h2>
<table>
  <thead><tr><th>Quando</th><th>O que fazer</th></tr></thead>
  <tbody>
    <tr><td><strong>24 horas antes</strong></td><td>Não beber álcool. Manter hidratação normal.</td></tr>
    <tr><td><strong>No dia</strong></td><td>Sem exercício intenso. Jejum de 2 a 4 horas antes do exame. Evitar café e chás estimulantes.</td></tr>
    <tr><td><strong>Logo antes</strong></td><td>Esvaziar a bexiga. Retirar objetos de metal, relógio e acessórios.</td></tr>
    <tr><td><strong>No exame</strong></td><td>Roupas leves, pés e mãos limpos e secos, sem creme.</td></tr>
  </tbody>
</table>
<p>É uma referência geral. Siga a orientação que a clínica enviar, porque cada aparelho tem o seu protocolo.</p>

<h2>O que altera o resultado</h2>
<ul>
  <li><strong>Refeição recente</strong>, que muda peso e distribuição de água</li>
  <li><strong>Desidratação</strong>, que faz a gordura parecer maior</li>
  <li><strong>Excesso de líquido</strong> logo antes</li>
  <li><strong>Álcool</strong> na véspera</li>
  <li><strong>Exercício intenso</strong> nas horas anteriores</li>
  <li><strong>Período menstrual</strong> e os dias anteriores, pela retenção</li>
  <li><strong>Sauna ou banho muito quente</strong> antes do exame</li>
  <li><strong>Febre ou doença aguda</strong></li>
  <li><strong>Diuréticos</strong> e outros medicamentos que mexem com a água do corpo: não suspenda, apenas informe</li>
</ul>
<!--CTA-->

<h2>Quem não deve fazer</h2>
<ul>
  <li>Pessoas com marca-passo ou dispositivos eletrônicos implantados</li>
  <li>Gestantes, em geral</li>
</ul>
<p>Próteses metálicas e grandes inchaços podem alterar a leitura. Informe a equipe para que o resultado seja interpretado com esse cuidado.</p>

<h2>A regra que mais importa: repetir igual</h2>
<p>Um exame isolado diz pouco. O valor da bioimpedância está na comparação. Para isso, as reavaliações devem ser feitas no mesmo aparelho, em horário parecido, com o mesmo preparo e, para mulheres, na mesma fase do ciclo.</p>

<h2>Depois do exame</h2>
<p>O relatório traz gordura corporal, massa muscular, água, gordura visceral e metabolismo de repouso. Veja <a href="/blog/como-ler-resultado-bioimpedancia">como ler o resultado</a> e os <a href="/blog/bioimpedancia-valores-de-referencia-gordura-e-musculo">valores de referência de gordura e músculo</a>.</p>
<p>Em São José/SC, a bioimpedância faz parte da consulta. Veja <a href="/blog/bioimpedancia-sao-jose-sc">como funciona o exame na clínica</a>.</p>
${FECHO}
`,
  },
  {
    slug: 'bioimpedancia-valores-de-referencia-gordura-e-musculo',
    num: 70,
    title: 'Bioimpedância: Valores de Referência de Gordura e Músculo por Idade',
    shortTitle: 'Bioimpedância: Valores de Referência',
    intro: 'Qual o percentual de gordura considerado adequado? Depende do sexo e da idade. Veja as faixas de referência mais usadas e por que o número isolado não conta a história toda.',
    category: 'Saúde',
    readTime: '5 min',
    date: 'Novembro 2026',
    metaDesc: 'Valores de referência da bioimpedância: percentual de gordura por sexo e idade, massa muscular, água e gordura visceral. Veja as faixas e como interpretar.',
    related: ['como-ler-resultado-bioimpedancia', 'bioimpedancia-preparo-jejum-o-que-atrapalha', 'gordura-visceral-niveis-na-bioimpedancia', 'bioimpedancia-o-que-e'],
    faq: [
      { q: 'Qual o percentual de gordura ideal?', a: 'Depende do sexo e da idade. Como referência muito usada, para mulheres adultas fica entre 21% e 35% e para homens entre 8% e 24%, com faixas mais altas conforme a idade avança.' },
      { q: 'Por que mulheres têm mais gordura que homens?', a: 'Por diferenças hormonais e biológicas. O corpo feminino mantém uma reserva maior de gordura, e por isso as faixas de referência são diferentes.' },
      { q: 'Existe valor ideal de massa muscular?', a: 'Não há um número único. A referência varia com sexo, idade, altura e aparelho. O mais útil é acompanhar a evolução e a proporção entre músculo e gordura.' },
      { q: 'Os valores mudam de um aparelho para outro?', a: 'Sim. Cada equipamento usa a própria fórmula e a própria faixa de referência. Por isso a comparação deve ser feita sempre no mesmo aparelho.' },
      { q: 'IMC normal garante gordura adequada?', a: 'Não. É possível ter IMC normal com percentual de gordura alto e pouca massa muscular. A bioimpedância mostra o que o IMC não vê.' },
      { q: 'Meu resultado deu fora da faixa. E agora?', a: 'Um valor fora da faixa é um ponto de partida para a conversa, não um diagnóstico. A interpretação considera histórico, exames e objetivos.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> os valores de referência da bioimpedância variam com <strong>sexo, idade e aparelho</strong>. Para o percentual de gordura, uma referência muito usada vai de <strong>21% a 35% em mulheres</strong> e de <strong>8% a 24% em homens</strong>, com faixas mais altas nas idades mais avançadas. O número isolado importa menos do que a evolução, avaliada em consulta.</div>
<p>Receber o relatório e não saber se os números são bons é comum. As faixas abaixo ajudam a se localizar, mas não substituem a interpretação.</p>

<h2>Percentual de gordura por sexo e idade</h2>
<table>
  <thead><tr><th>Idade</th><th>Mulheres: faixa de referência</th><th>Homens: faixa de referência</th></tr></thead>
  <tbody>
    <tr><td><strong>20 a 39 anos</strong></td><td>21% a 32%</td><td>8% a 19%</td></tr>
    <tr><td><strong>40 a 59 anos</strong></td><td>23% a 33%</td><td>11% a 21%</td></tr>
    <tr><td><strong>60 a 79 anos</strong></td><td>24% a 35%</td><td>13% a 24%</td></tr>
  </tbody>
</table>
<p>Faixas baseadas em referência internacional amplamente usada na literatura (Gallagher e colaboradores). O relatório do seu exame pode trazer limites um pouco diferentes, conforme o aparelho.</p>

<h2>Massa muscular</h2>
<p>Não existe um valor único. A quantidade esperada depende do sexo, da idade, da altura e do nível de atividade, e cada aparelho apresenta a própria faixa. O que mais interessa:</p>
<ul>
  <li><strong>Se está dentro da faixa do relatório</strong> para o seu perfil</li>
  <li><strong>A proporção entre músculo e gordura</strong></li>
  <li><strong>A evolução</strong> de um exame para o outro, principalmente durante o emagrecimento</li>
  <li><strong>O equilíbrio entre os segmentos:</strong> braços, pernas e tronco</li>
</ul>

<h2>Outros números do relatório</h2>
<table>
  <thead><tr><th>Medida</th><th>O que indica</th></tr></thead>
  <tbody>
    <tr><td><strong>Água corporal</strong></td><td>Hidratação. Em adultos costuma ficar perto de metade a 60% do peso, menor em quem tem mais gordura.</td></tr>
    <tr><td><strong>Gordura visceral</strong></td><td>Gordura entre os órgãos. A escala muda conforme o aparelho.</td></tr>
    <tr><td><strong>Metabolismo de repouso</strong></td><td>Estimativa de energia gasta em repouso. Acompanha a massa muscular.</td></tr>
    <tr><td><strong>Ângulo de fase</strong></td><td>Indicador da qualidade das células, quando o aparelho fornece.</td></tr>
  </tbody>
</table>
<p>Veja o detalhe em <a href="/blog/gordura-visceral-niveis-na-bioimpedancia">níveis de gordura visceral na bioimpedância</a>.</p>
<!--CTA-->

<h2>Por que o número isolado engana</h2>
<ul>
  <li><strong>Hidratação e preparo</strong> mudam o resultado de um dia para o outro</li>
  <li><strong>Aparelhos diferentes</strong> dão valores diferentes</li>
  <li><strong>Atletas e idosos</strong> fogem das faixas gerais</li>
  <li><strong>A faixa de referência não é meta individual</strong></li>
</ul>
<p>Para comparar bem, o preparo precisa ser o mesmo. Veja <a href="/blog/bioimpedancia-preparo-jejum-o-que-atrapalha">como se preparar para a bioimpedância</a>.</p>

<h2>IMC normal com gordura alta</h2>
<p>Duas pessoas com o mesmo peso e a mesma altura podem ter corpos muito diferentes. Quem tem pouco músculo e muita gordura pode estar com IMC normal e, ainda assim, com risco metabólico aumentado. É uma das situações em que a bioimpedância mais ajuda.</p>

<h2>Como usar o resultado</h2>
<p>O relatório é ponto de partida: mostra onde está o excesso, se há pouca massa muscular e o que priorizar. A leitura completa é feita em consulta. Veja <a href="/blog/como-ler-resultado-bioimpedancia">como ler o resultado da bioimpedância</a>.</p>
${FECHO}
`,
  },
  {
    slug: 'gordura-visceral-niveis-na-bioimpedancia',
    num: 71,
    title: 'Gordura Visceral: Os Níveis da Bioimpedância e O Que Significam',
    shortTitle: 'Níveis de Gordura Visceral',
    intro: 'O relatório mostra um número para a gordura visceral, mas a escala muda de aparelho para aparelho. Entenda o que é nível normal, alto e como a cintura ajuda a confirmar.',
    category: 'Saúde',
    readTime: '5 min',
    date: 'Novembro 2026',
    metaDesc: 'Nível de gordura visceral na bioimpedância: em muitas escalas, até 9 é adequado e a partir de 10 é elevado, mas varia por aparelho. Veja como interpretar.',
    related: ['gordura-visceral-o-que-e-como-reduzir', 'bioimpedancia-valores-de-referencia-gordura-e-musculo', 'como-ler-resultado-bioimpedancia', 'resistencia-a-insulina-ganho-de-peso'],
    faq: [
      { q: 'Qual o nível normal de gordura visceral?', a: 'Depende do aparelho. Em escalas comuns, valores até 9 são considerados adequados e a partir de 10, elevados. Outros equipamentos consideram saudável até 12. Confira a faixa impressa no seu relatório.' },
      { q: 'Nível 10 de gordura visceral é perigoso?', a: 'É um sinal de atenção, não um diagnóstico. Indica que vale avaliar cintura, glicose, colesterol, triglicerídeos, pressão e gordura no fígado.' },
      { q: 'A bioimpedância mede a gordura visceral com precisão?', a: 'Ela faz uma estimativa. Tomografia e ressonância são os métodos de referência, mas não são usados de rotina. Para acompanhamento, a bioimpedância e a cintura funcionam bem.' },
      { q: 'Pessoa magra pode ter gordura visceral alta?', a: 'Pode. Peso normal não garante pouca gordura entre os órgãos, principalmente em quem tem pouca massa muscular e cintura aumentada.' },
      { q: 'Em quanto tempo a gordura visceral baixa?', a: 'Ela costuma responder cedo ao emagrecimento e à atividade física, muitas vezes antes da gordura sob a pele. O ritmo é individual.' },
      { q: 'Que medida de cintura preocupa?', a: 'Como referência usada no Brasil, a partir de 80 cm em mulheres e 94 cm em homens o risco já aumenta; acima de 88 cm e 102 cm, aumenta mais.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> o nível de gordura visceral da bioimpedância é uma <strong>estimativa em escala própria de cada aparelho</strong>. Em escalas comuns, <strong>até 9 é considerado adequado e a partir de 10, elevado</strong>; em outras, o limite saudável vai até 12. O número deve ser lido junto com a cintura e os exames, em consulta.</div>
<p>A gordura visceral é a que fica entre os órgãos da barriga. É a mais ligada a diabetes, pressão alta, gordura no fígado e doença do coração. Por isso é um dos números mais importantes do relatório.</p>

<h2>Como ler o nível</h2>
<table>
  <thead><tr><th>Tipo de escala</th><th>Adequado</th><th>Elevado</th></tr></thead>
  <tbody>
    <tr><td><strong>Nível de 1 a 20</strong> (comum em aparelhos de clínica)</td><td>Até 9</td><td>10 ou mais</td></tr>
    <tr><td><strong>Nível de 1 a 59</strong> (comum em balanças)</td><td>Até 12</td><td>13 ou mais</td></tr>
    <tr><td><strong>Área em cm²</strong></td><td>Abaixo de 100 cm²</td><td>100 cm² ou mais</td></tr>
  </tbody>
</table>
<p>Confira sempre a faixa impressa no seu relatório. Não compare o número de um aparelho com o de outro.</p>

<h2>A cintura como segunda medida</h2>
<table>
  <thead><tr><th></th><th>Risco aumentado</th><th>Risco muito aumentado</th></tr></thead>
  <tbody>
    <tr><td><strong>Mulheres</strong></td><td>80 cm ou mais</td><td>88 cm ou mais</td></tr>
    <tr><td><strong>Homens</strong></td><td>94 cm ou mais</td><td>102 cm ou mais</td></tr>
  </tbody>
</table>
<p>A medida é feita no ponto médio entre a última costela e o osso do quadril, com a fita na horizontal, ao final de uma expiração normal.</p>

<h2>O que significa um nível elevado</h2>
<p>Não é um diagnóstico. É um sinal para investigar o conjunto: glicose, insulina, colesterol, triglicerídeos, pressão e fígado. A gordura visceral alta costuma andar junto com a <a href="/blog/resistencia-a-insulina-ganho-de-peso">resistência à insulina</a>.</p>
<!--CTA-->

<h2>Magro por fora, com gordura por dentro</h2>
<p>Pessoas com peso normal podem ter gordura visceral elevada, principalmente com pouca massa muscular, sedentarismo e consumo frequente de álcool. É um dos motivos para olhar a composição corporal, e não só o peso.</p>

<h2>O que faz o nível baixar</h2>
<ul>
  <li><strong>Perda de peso</strong>, mesmo modesta</li>
  <li><strong>Atividade física</strong>, combinando aeróbico e força</li>
  <li><strong>Menos álcool e menos açúcar líquido</strong></li>
  <li><strong>Sono adequado</strong></li>
  <li><strong>Tratamento médico</strong>, quando indicado</li>
</ul>
<p>A gordura visceral costuma responder cedo, muitas vezes antes de a mudança aparecer no espelho. Veja o guia completo em <a href="/blog/gordura-visceral-o-que-e-como-reduzir">gordura visceral: o que é e como reduzir</a>.</p>

<h2>Como acompanhar</h2>
<p>Repita a bioimpedância no mesmo aparelho e com o mesmo preparo, e meça a cintura sempre do mesmo jeito. Veja os <a href="/blog/bioimpedancia-valores-de-referencia-gordura-e-musculo">demais valores de referência</a>.</p>
${FECHO}
`,
  },
  {
    slug: 'plato-no-emagrecimento-por-que-o-peso-para',
    num: 72,
    title: 'Platô no Emagrecimento: Por Que o Peso Para e O Que Fazer',
    shortTitle: 'Platô no Emagrecimento',
    intro: 'Depois de semanas perdendo peso, a balança trava. O platô faz parte de quase todo emagrecimento e tem explicação. Veja por que acontece e o que realmente ajuda a sair dele.',
    category: 'Saúde',
    readTime: '6 min',
    date: 'Novembro 2026',
    metaDesc: 'Platô no emagrecimento: o corpo gasta menos energia conforme o peso cai e a fome aumenta. Veja como saber se é platô de verdade, as causas e o que fazer.',
    related: ['mounjaro-parou-de-funcionar', 'metabolismo-lento-existe', 'efeito-sanfona-por-que-o-peso-volta', 'perda-de-peso-saudavel-quantos-kg-por-mes'],
    faq: [
      { q: 'O que é platô no emagrecimento?', a: 'É a estabilização do peso por algumas semanas, mesmo mantendo a rotina que vinha funcionando. Acontece em quase todo processo de perda de peso.' },
      { q: 'Quanto tempo sem perder peso é platô?', a: 'Em geral se fala em platô depois de 3 a 4 semanas sem mudança no peso e nas medidas. Menos que isso costuma ser oscilação normal.' },
      { q: 'Por que o peso para de cair?', a: 'Um corpo menor gasta menos energia, o organismo reduz o gasto como forma de adaptação, a fome aumenta e a rotina tende a afrouxar sem que a pessoa perceba.' },
      { q: 'Comer menos ainda resolve o platô?', a: 'Nem sempre, e pode piorar. Restringir demais aumenta a perda de músculo e a fome. Costuma ser melhor ajustar proteína, treino de força, sono e rever o plano com a médica.' },
      { q: 'Platô significa que o tratamento falhou?', a: 'Não. Pode ser o novo ponto de equilíbrio do corpo. Manter o peso perdido já é resultado, e a partir daí se decide entre manter ou ajustar a estratégia.' },
      { q: 'Como saber se estou perdendo gordura mesmo sem perder peso?', a: 'Pela bioimpedância e pelas medidas. É possível perder gordura e ganhar ou reter água e músculo, com a balança parada.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> o platô é a <strong>estabilização do peso por 3 a 4 semanas ou mais</strong>, mesmo com a rotina mantida. Acontece porque um corpo menor gasta menos energia, o organismo se adapta e a fome aumenta. Não é falha. A saída passa por <strong>revisar proteína, treino de força, sono e o plano de tratamento</strong>, e não por comer cada vez menos.</div>
<p>Quase todo mundo que emagrece passa por isso. O problema não é o platô em si, é a forma como se reage a ele: desistir ou partir para uma restrição que não se sustenta.</p>

<h2>É platô de verdade?</h2>
<table>
  <thead><tr><th>Situação</th><th>O que provavelmente é</th></tr></thead>
  <tbody>
    <tr><td>Peso parado há uma ou duas semanas</td><td>Oscilação normal: água, intestino, ciclo menstrual.</td></tr>
    <tr><td>Peso parado, mas medidas e roupas mudando</td><td>Recomposição: gordura saindo, músculo ou água entrando.</td></tr>
    <tr><td>Peso e medidas parados há 3 a 4 semanas</td><td>Platô.</td></tr>
    <tr><td>Peso subindo por várias semanas</td><td>Reganho. Vale reavaliar o plano.</td></tr>
  </tbody>
</table>

<h2>Por que o peso para</h2>
<ul>
  <li><strong>Corpo menor, gasto menor:</strong> quem pesa menos gasta menos para viver e para se mover</li>
  <li><strong>Adaptação do metabolismo:</strong> o organismo economiza energia além do esperado pela perda de peso</li>
  <li><strong>Hormônios da fome:</strong> a fome aumenta e a saciedade diminui</li>
  <li><strong>Perda de massa muscular</strong>, quando faltou proteína e treino</li>
  <li><strong>Afrouxamento da rotina:</strong> porções maiores e menos movimento, aos poucos</li>
  <li><strong>Retenção de líquido</strong>, que esconde a perda de gordura</li>
</ul>
<p>O corpo defende o peso anterior. Isso é biologia, não falta de vontade. Veja <a href="/blog/metabolismo-lento-existe">se metabolismo lento existe</a>.</p>
<!--CTA-->

<h2>O que ajuda a sair do platô</h2>
<ul>
  <li><strong>Reavaliar com bioimpedância</strong> antes de mudar qualquer coisa</li>
  <li><strong>Conferir a proteína</strong> e reforçar se estiver baixa</li>
  <li><strong>Incluir ou progredir no treino de força</strong></li>
  <li><strong>Aumentar o movimento do dia a dia:</strong> passos, escadas, menos tempo sentado</li>
  <li><strong>Registrar a alimentação</strong> por alguns dias, para enxergar o que mudou</li>
  <li><strong>Cuidar do sono e do álcool</strong></li>
  <li><strong>Rever o tratamento com a médica</strong>, incluindo medicamentos em uso</li>
</ul>

<h2>O que não ajuda</h2>
<ul>
  <li>Cortar calorias de forma drástica</li>
  <li>Pular refeições e compensar depois</li>
  <li>Dobrar o exercício aeróbico e abandonar a força</li>
  <li>Mudar dose de medicamento por conta própria</li>
  <li>Trocar de estratégia toda semana</li>
</ul>

<h2>Quando o platô é o ponto de chegada</h2>
<p>Em algum momento o peso estabiliza. Nos estudos com medicamentos, isso acontece em geral entre 12 e 18 meses. Manter o que foi perdido é um resultado, e passa a ser o objetivo. A partir daí a conversa é sobre manutenção e sobre evitar o <a href="/blog/efeito-sanfona-por-que-o-peso-volta">efeito sanfona</a>.</p>

<h2>Platô em quem usa medicamento</h2>
<p>A lógica é a mesma, com algumas particularidades de dose e de tempo de tratamento. Veja <a href="/blog/mounjaro-parou-de-funcionar">Mounjaro parou de funcionar</a>.</p>
${FECHO}
`,
  },
  {
    slug: 'obesidade-grau-1-2-e-3-o-que-muda-no-tratamento',
    num: 73,
    title: 'Obesidade Grau 1, 2 e 3: O Que Muda no Tratamento',
    shortTitle: 'Obesidade Grau 1, 2 e 3',
    intro: 'A obesidade é classificada em três graus pelo IMC. Entenda as faixas, os limites dessa medida e como o grau, junto com a saúde de cada pessoa, orienta o tratamento.',
    category: 'Saúde',
    readTime: '6 min',
    date: 'Novembro 2026',
    metaDesc: 'Obesidade grau 1 (IMC 30 a 34,9), grau 2 (35 a 39,9) e grau 3 (40 ou mais): veja o que significa cada faixa, os limites do IMC e como o tratamento é definido.',
    related: ['obesidade-e-uma-doenca', 'quando-procurar-medico-para-emagrecer', 'bioimpedancia-o-que-e', 'como-funciona-acompanhamento-medico-emagrecimento'],
    faq: [
      { q: 'Como saber meu grau de obesidade?', a: 'Pelo IMC: peso em quilos dividido pela altura em metros ao quadrado. De 30 a 34,9 é grau 1; de 35 a 39,9, grau 2; 40 ou mais, grau 3.' },
      { q: 'Obesidade grau 1 precisa de tratamento?', a: 'Sim. É uma doença crônica em qualquer grau. A intensidade do tratamento depende do IMC, da gordura visceral, das doenças associadas e do histórico.' },
      { q: 'A partir de que IMC se usa medicamento?', a: 'Como referência das diretrizes, a partir de IMC 30, ou a partir de 27 quando há doenças associadas ao peso. A indicação é individual e feita em consulta.' },
      { q: 'Quando a cirurgia bariátrica é considerada?', a: 'Em geral com IMC a partir de 40, ou a partir de 35 com doenças associadas, e em situações específicas com IMC menor, conforme critérios do Conselho Federal de Medicina. A avaliação é feita por equipe especializada.' },
      { q: 'O IMC é suficiente para avaliar?', a: 'Não. Ele não diferencia gordura de músculo nem mostra onde a gordura está. Cintura, bioimpedância e exames completam a avaliação.' },
      { q: 'Dá para sair de um grau para outro?', a: 'Sim. Perdas de 5% a 10% do peso já melhoram pressão, glicose e outros indicadores, mesmo antes de mudar de faixa.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> a obesidade é classificada pelo IMC em <strong>grau 1 (30 a 34,9), grau 2 (35 a 39,9) e grau 3 (40 ou mais)</strong>. O grau ajuda a estimar o risco e a orientar o tratamento, mas não decide sozinho: gordura visceral, doenças associadas e histórico pesam tanto quanto. O plano é definido em consulta.</div>
<p>Saber o grau é um ponto de partida. O que importa de verdade é o que esse peso está fazendo com a saúde de cada pessoa.</p>

<h2>A classificação pelo IMC</h2>
<table>
  <thead><tr><th>IMC</th><th>Classificação</th></tr></thead>
  <tbody>
    <tr><td>18,5 a 24,9</td><td>Peso adequado</td></tr>
    <tr><td>25 a 29,9</td><td>Sobrepeso</td></tr>
    <tr><td><strong>30 a 34,9</strong></td><td><strong>Obesidade grau 1</strong></td></tr>
    <tr><td><strong>35 a 39,9</strong></td><td><strong>Obesidade grau 2</strong></td></tr>
    <tr><td><strong>40 ou mais</strong></td><td><strong>Obesidade grau 3</strong></td></tr>
  </tbody>
</table>
<p>Para calcular o seu, use a <a href="/calculadora-imc">calculadora de IMC</a>.</p>

<h2>Os limites do IMC</h2>
<ul>
  <li>Não separa gordura de músculo</li>
  <li>Não mostra onde a gordura está</li>
  <li>Pode subestimar o risco em quem tem pouca massa muscular</li>
  <li>Pode superestimar em pessoas muito musculosas</li>
</ul>
<p>Por isso a avaliação inclui cintura, <a href="/blog/bioimpedancia-o-que-e">bioimpedância</a> e exames.</p>

<h2>O que costuma mudar em cada grau</h2>
<table>
  <thead><tr><th>Grau</th><th>Em geral</th></tr></thead>
  <tbody>
    <tr><td><strong>Grau 1</strong></td><td>Mudança de estilo de vida com acompanhamento. Medicamento pode ser indicado, principalmente com doenças associadas ou tentativas anteriores sem sucesso.</td></tr>
    <tr><td><strong>Grau 2</strong></td><td>Risco maior de complicações. Tratamento medicamentoso é considerado com mais frequência. Cirurgia pode ser avaliada quando há doenças associadas.</td></tr>
    <tr><td><strong>Grau 3</strong></td><td>Risco elevado. Tratamento intensivo, com medicamento e avaliação de cirurgia por equipe especializada.</td></tr>
  </tbody>
</table>
<p>É um resumo geral das diretrizes, não uma regra. Há pessoas com grau 1 e muitas complicações, e pessoas com grau 2 e exames preservados.</p>
<!--CTA-->

<h2>O que pesa além do grau</h2>
<ul>
  <li>Diabetes, pré-diabetes e resistência à insulina</li>
  <li>Pressão alta, colesterol e triglicerídeos alterados</li>
  <li>Gordura no fígado</li>
  <li>Apneia do sono</li>
  <li>Dores articulares e limitação de movimento</li>
  <li>Histórico de peso, tentativas anteriores e saúde emocional</li>
</ul>

<h2>Sobrepeso também é tratado</h2>
<p>Com IMC entre 25 e 29,9, o cuidado já faz sentido quando há cintura aumentada, exames alterados ou ganho de peso progressivo. Tratar cedo evita chegar aos graus mais altos.</p>

<h2>Metas realistas</h2>
<p>O objetivo não precisa ser voltar ao peso adequado da tabela. Perdas de 5% a 10% do peso já melhoram glicose, pressão e gordura no fígado. A meta é construída aos poucos, com a médica. Veja <a href="/blog/obesidade-e-uma-doenca">por que a obesidade é uma doença</a> e <a href="/blog/quando-procurar-medico-para-emagrecer">quando procurar um médico para emagrecer</a>.</p>
${FECHO}
`,
  },
]
