// Posts 49+ (novembro/2026): Plano de Conteúdo nov/2026 a jan/2027, onda 1 ("filhos do campeão").
// Cada artigo responde UMA pergunta prática de quem usa Mounjaro, como a pessoa digita no Google.
// Regras de texto: perguntas de dose, tempo e troca respondem com a referência da bula e dos estudos
// E dizem que cada caso é avaliado em consulta; sem travessão; sem promessa de resultado; sem preço.
import type { Post } from './posts'

export const FECHO = `<p>A Dra. Isabel Aragão (CRM-SC 26139) atende em São José/SC e por teleconsulta para pacientes de todo o Brasil. A avaliação inclui histórico, exames e, no atendimento presencial, bioimpedância. A clínica não vende o medicamento: quando há indicação, a paciente compra na farmácia com a receita.</p>`

export const POSTS_3: Post[] = [
  {
    slug: 'uma-dose-de-mounjaro-faz-efeito-por-quantos-dias',
    num: 49,
    title: 'Uma Dose de Mounjaro Faz Efeito por Quantos Dias?',
    shortTitle: 'Uma Dose de Mounjaro Dura Quantos Dias',
    intro: 'A aplicação é semanal, mas o efeito não é igual do primeiro ao sétimo dia. Entenda quanto tempo uma dose age, por que a fome pode voltar no fim da semana e quanto tempo o medicamento fica no corpo.',
    category: 'Medicamentos',
    readTime: '6 min',
    date: 'Novembro 2026',
    metaDesc: 'Uma dose de Mounjaro cobre os 7 dias: efeito mais forte do 1º ao 3º dia e mais fraco no fim da semana. Meia-vida de cerca de 5 dias. Veja dia a dia.',
    related: ['quanto-tempo-mounjaro-faz-efeito', 'mounjaro-em-quantas-horas-faz-efeito', 'mounjaro-tira-a-fome-em-quanto-tempo', 'primeira-dose-mounjaro-o-que-esperar'],
    faq: [
      { q: 'Uma dose de Mounjaro dura quantos dias?', a: 'A dose é pensada para cobrir 7 dias. Segundo a bula, a meia-vida da tirzepatida é de cerca de 5 dias, por isso o efeito é mais forte nos primeiros dias e mais fraco perto da aplicação seguinte.' },
      { q: 'Por que a fome volta no sexto ou sétimo dia?', a: 'Porque o nível do medicamento no sangue está mais baixo no fim da semana. É mais comum no primeiro mês, antes de o nível se estabilizar, o que leva cerca de 4 aplicações seguidas.' },
      { q: 'Posso aplicar antes dos 7 dias se a fome voltar?', a: 'Não por conta própria. A bula prevê uma aplicação por semana e um intervalo mínimo de 3 dias entre duas doses apenas quando se muda o dia da semana. Se a fome volta cedo, o ajuste é feito em consulta.' },
      { q: 'Quanto tempo o Mounjaro fica no organismo depois que eu paro?', a: 'Cerca de um mês. Com meia-vida de aproximadamente 5 dias, são necessárias em torno de 5 meias-vidas para o medicamento ser eliminado. O efeito no apetite diminui aos poucos nesse período.' },
      { q: 'Atrasei a dose. O efeito acaba?', a: 'Diminui, mas não some de um dia para o outro. A orientação da bula é aplicar assim que lembrar se passaram até 4 dias do dia previsto; depois disso, pular a dose e seguir no dia habitual. Em caso de dúvida, confirme com a médica.' },
      { q: 'Dose maior dura mais dias?', a: 'Não. A dose maior aumenta a intensidade do efeito, não a duração. O intervalo continua sendo de uma semana em todas as doses, de 2,5 a 15 mg.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> uma dose de Mounjaro (tirzepatida) é feita para agir por <strong>7 dias</strong>. O efeito costuma ser mais forte entre o 1º e o 3º dia e mais fraco no 6º e no 7º, porque a meia-vida do medicamento é de cerca de 5 dias, segundo a bula. Cada caso é um caso: a percepção varia com a dose, o tempo de uso e a resposta individual, avaliados em consulta.</div>
<p>Quem aplica o Mounjaro uma vez por semana logo percebe que os dias não são iguais. Tem o dia em que a fome some e tem o dia em que ela parece voltar. Isso tem explicação e, na maioria das vezes, é esperado.</p>

<h2>Uma dose de Mounjaro dia a dia</h2>
<table>
  <thead><tr><th>Dia após a aplicação</th><th>O que costuma acontecer</th></tr></thead>
  <tbody>
    <tr><td><strong>Dia 1</strong></td><td>O medicamento começa a ser absorvido. Algumas pessoas já sentem menos fome.</td></tr>
    <tr><td><strong>Dias 2 e 3</strong></td><td>Período próximo do pico no sangue. Fome mais baixa, saciedade rápida. Náusea é mais provável aqui.</td></tr>
    <tr><td><strong>Dias 4 e 5</strong></td><td>Efeito presente e mais estável. Costuma ser a fase mais confortável da semana.</td></tr>
    <tr><td><strong>Dias 6 e 7</strong></td><td>Nível mais baixo. A fome pode voltar um pouco, principalmente no primeiro mês.</td></tr>
  </tbody>
</table>
<p>São referências gerais. Há quem não perceba diferença nenhuma entre os dias e quem sinta bastante.</p>

<h2>Por que a aplicação é semanal</h2>
<p>A tirzepatida foi desenhada para durar. Segundo a bula, a concentração máxima no sangue acontece entre 8 e 72 horas após a aplicação e a meia-vida é de cerca de 5 dias. Meia-vida é o tempo que o corpo leva para eliminar metade da dose. Ou seja: cinco dias depois da aplicação, ainda há aproximadamente metade do medicamento circulando.</p>
<p>É isso que permite uma única aplicação por semana. E é também por isso que o efeito cai um pouco antes da dose seguinte, sem desaparecer.</p>

<h2>Por que a fome volta no fim da semana</h2>
<p>No começo do tratamento, o corpo ainda não acumulou o medicamento. Cada aplicação soma com o que sobrou da anterior, e o nível só fica estável depois de umas 4 semanas de uso contínuo. Até lá, a diferença entre o começo e o fim da semana é mais sentida.</p>
<p>Outros fatores pesam: a dose inicial de 2,5 mg é de adaptação, noites mal dormidas aumentam a fome, e períodos de mais estresse também. Veja mais em <a href="/blog/mounjaro-tira-a-fome-em-quanto-tempo">em quanto tempo o Mounjaro tira a fome e por que ela volta</a>.</p>
<div class="pratica"><strong>Na prática do consultório, com a Dra. Isabel Aragão:</strong> é normal sentir um pouco mais de fome perto da próxima aplicação, porque a meia-vida do medicamento é de 5 a 7 dias. Se isso se repete toda semana, ou se a fome fica descontrolada, é sinal de que a dose precisa ser ajustada.</div>
<!--CTA-->

<h2>Posso antecipar a dose?</h2>
<p>Não por conta própria. A bula prevê uma aplicação por semana, no mesmo dia. Quando é preciso mudar o dia da semana, a orientação é respeitar pelo menos 3 dias entre duas aplicações. Antecipar toda semana equivale a aumentar a dose sem avaliação, e o preço costuma ser mais náusea.</p>
<p>Se a fome volta sempre antes da hora, isso é uma informação útil para a consulta. A médica avalia se é o caso de manter, de ajustar a dose ou de rever alimentação e sono.</p>

<h2>Quanto tempo o Mounjaro fica no organismo</h2>
<p>Depois da última aplicação, o medicamento leva cerca de um mês para ser eliminado. O efeito no apetite não acaba de repente: ele vai diminuindo ao longo dessas semanas. Por isso quem interrompe o tratamento costuma perceber a fome voltando aos poucos, e não no dia seguinte.</p>
<p>Esse dado também importa em situações como planejamento de gravidez e cirurgias, em que a médica pode orientar a suspensão com antecedência.</p>

<h2>Dose maior dura mais?</h2>
<p>Não. De 2,5 a 15 mg, o intervalo é sempre de uma semana. O que muda com a dose é a intensidade do efeito, não a duração. Usualmente, conforme a bula e os estudos, o tratamento começa com 2,5 mg por 4 semanas e os aumentos acontecem a cada 4 semanas no mínimo. Na prática cada caso é um caso, e nem todo mundo precisa chegar às doses mais altas. Veja o <a href="/blog/quanto-tempo-mounjaro-faz-efeito">efeito do Mounjaro por dose e por semana</a>.</p>

<h2>Quando falar com a médica</h2>
<ul>
  <li>A fome volta com força já no terceiro ou quarto dia, por várias semanas seguidas</li>
  <li>Você sente vontade de antecipar a aplicação</li>
  <li>A náusea dos primeiros dias atrapalha a alimentação</li>
  <li>Você atrasou a dose e não sabe como retomar</li>
</ul>
${FECHO}
`,
  },
  {
    slug: 'primeira-dose-mounjaro-o-que-esperar',
    num: 50,
    title: 'Primeira Dose de Mounjaro: O Que Esperar nas 4 Primeiras Semanas',
    shortTitle: 'Primeira Dose de Mounjaro',
    intro: 'O primeiro mês de Mounjaro é de adaptação, não de resultado. Veja o que costuma acontecer em cada semana, quais efeitos são comuns, o que comer e quais sinais merecem atenção.',
    category: 'Medicamentos',
    readTime: '7 min',
    date: 'Novembro 2026',
    metaDesc: 'Primeira dose de Mounjaro: usualmente 2,5 mg por 4 semanas. Menos fome na 1ª ou 2ª semana, balança muda pouco. Semana a semana, efeitos e sinais de alerta.',
    related: ['quanto-tempo-mounjaro-faz-efeito', 'tomei-mounjaro-e-nao-senti-nada', 'efeitos-colaterais-mounjaro-tirzepatida', 'uma-dose-de-mounjaro-faz-efeito-por-quantos-dias'],
    faq: [
      { q: 'Qual é a primeira dose de Mounjaro?', a: 'Cada caso é um caso: depende do histórico, de uso anterior de outros medicamentos e de reações, avaliados em consulta. Usualmente, conforme a bula, o tratamento inicia com 2,5 mg uma vez por semana, por 4 semanas.' },
      { q: 'A primeira dose de Mounjaro já emagrece?', a: 'A dose inicial serve para adaptação. No primeiro mês a balança costuma mudar pouco, em geral de 1 a 3 kg, e não perder peso nesse período também pode estar dentro do esperado.' },
      { q: 'Em quanto tempo a primeira dose faz efeito?', a: 'O pico no sangue acontece entre 8 e 72 horas após a aplicação. Algumas pessoas sentem menos fome nos primeiros dias; para a maioria, a mudança fica clara entre a primeira e a segunda semana.' },
      { q: 'Quais efeitos colaterais são comuns na primeira dose?', a: 'Náusea leve, sensação de estômago cheio, intestino mais lento ou mais solto e, às vezes, cansaço. Costumam ser leves e passar em alguns dias. Dor abdominal forte e vômitos persistentes não são esperados e exigem contato com a médica.' },
      { q: 'Não senti nada na primeira dose. É normal?', a: 'É comum. A dose de 2,5 mg é baixa de propósito e parte das pessoas só percebe o efeito depois da segunda ou terceira aplicação, ou quando a dose sobe.' },
      { q: 'Posso beber álcool no primeiro mês?', a: 'O ideal é evitar ou reduzir bastante no começo. O álcool piora a náusea, soma calorias e pode atrapalhar a leitura de como o corpo está reagindo. Converse com a médica sobre o seu caso.' },
      { q: 'Em que dia e horário aplicar a primeira dose?', a: 'Em qualquer horário, com ou sem alimento, sempre no mesmo dia da semana. Muita gente prefere um dia que permita descansar nos dois dias seguintes, quando a náusea é mais provável.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> cada caso é um caso, e a dose inicial é definida em consulta. Usualmente, conforme a bula, o Mounjaro (tirzepatida) começa com <strong>2,5 mg por semana, durante 4 semanas</strong>. Nesse período o esperado é <strong>adaptação</strong>: menos fome já na primeira ou segunda semana para a maioria, efeitos digestivos leves e pouca mudança na balança. A resposta é individual e não é promessa de resultado.</div>
<p>A primeira aplicação costuma vir com ansiedade: vai doer, vou passar mal, vou emagrecer logo? Saber o que é esperado no primeiro mês evita os dois erros mais comuns do começo, que são desanimar cedo e querer acelerar.</p>

<h2>Qual é a primeira dose de Mounjaro</h2>
<p>O esquema de referência da bula e dos estudos é começar com 2,5 mg uma vez por semana, por 4 semanas, e só depois avaliar o aumento para 5 mg. Essa primeira dose não é considerada dose de tratamento: ela existe para o organismo se acostumar.</p>
<p>Na prática, a médica considera o histórico de cada paciente: uso anterior de medicamentos da mesma classe, sensibilidade a efeitos digestivos, outras doenças e remédios em uso. É isso que define a dose e o ritmo.</p>

<h2>O primeiro mês, semana a semana</h2>
<table>
  <thead><tr><th>Semana</th><th>O que costuma acontecer</th></tr></thead>
  <tbody>
    <tr><td><strong>Semana 1</strong></td><td>Primeira aplicação. Algumas pessoas sentem menos fome em 1 a 3 dias. Náusea leve e estômago cheio são os efeitos mais relatados.</td></tr>
    <tr><td><strong>Semana 2</strong></td><td>Para a maioria, a mudança no apetite fica mais clara. O prato de sempre começa a sobrar.</td></tr>
    <tr><td><strong>Semana 3</strong></td><td>O corpo se adapta e os efeitos digestivos tendem a diminuir. A fome pode voltar um pouco no fim da semana.</td></tr>
    <tr><td><strong>Semana 4</strong></td><td>O nível do medicamento se estabiliza. É o momento de avaliar com a médica se a dose sobe ou se mantém.</td></tr>
  </tbody>
</table>

<h2>A primeira dose já emagrece?</h2>
<p>Um pouco, para algumas pessoas. No primeiro mês a queda costuma ser pequena, muitas vezes de 1 a 3 kg, parte dela por comer menos e reter menos líquido. Não perder nada nesse período também pode estar dentro do esperado. A perda consistente costuma começar depois, entre a quinta e a oitava semana. Veja a evolução completa em <a href="/blog/quanto-tempo-mounjaro-faz-efeito">em quanto tempo o Mounjaro faz efeito</a>.</p>

<h2>Efeitos colaterais mais comuns no começo</h2>
<ul>
  <li><strong>Náusea leve</strong>, principalmente nos dois ou três dias após a aplicação</li>
  <li><strong>Sensação de estômago cheio</strong> e arrotos</li>
  <li><strong>Intestino mais lento</strong> ou, em algumas pessoas, mais solto</li>
  <li><strong>Menos vontade de comer</strong>, a ponto de esquecer refeições</li>
  <li><strong>Cansaço</strong> nos primeiros dias, muitas vezes por comer e beber pouco</li>
</ul>
<p>Em geral são leves e passam em alguns dias. Eles podem reaparecer por pouco tempo a cada aumento de dose. Veja <a href="/blog/efeitos-colaterais-mounjaro-tirzepatida">o que é normal e o que merece atenção</a>.</p>
<div class="pratica"><strong>Na prática do consultório, com a Dra. Isabel Aragão:</strong> na primeira semana é comum um enjoo leve, parecido com o do começo da gravidez: olhar a comida e sentir náusea. O intestino também muda. Quem ia ao banheiro todo dia pode passar a ir a cada dois dias, e isso é esperado, porque a quantidade de comida diminuiu. O que não pode é as fezes ficarem duras, em bolinhas. Nesse caso a paciente precisa me avisar, para tratarmos.</div>
<!--CTA-->

<h2>O que ajuda nas primeiras semanas</h2>
<ul>
  <li><strong>Comer devagar e em porções menores.</strong> A saciedade chega antes, e insistir no prato cheio é o que mais causa mal-estar.</li>
  <li><strong>Priorizar proteína</strong> em todas as refeições, para proteger a massa muscular.</li>
  <li><strong>Beber água ao longo do dia</strong>, mesmo sem sede.</li>
  <li><strong>Evitar gordura e fritura em excesso</strong>, que pioram a náusea.</li>
  <li><strong>Reduzir o álcool</strong>, pelo menos no início.</li>
  <li><strong>Não pular refeições</strong> só porque a fome sumiu.</li>
</ul>

<h2>Como é a primeira aplicação</h2>
<p>A aplicação é feita sob a pele, na barriga, na coxa ou na parte de trás do braço, uma vez por semana, no mesmo dia. Pode ser em qualquer horário, com ou sem alimento. A agulha é fina e a maioria das pessoas sente pouco ou nada. Vale alternar o local a cada semana.</p>
<p>Quem prefere pode fazer a aplicação com a enfermeira. Em São José/SC, a clínica oferece esse atendimento com horário marcado: veja <a href="/blog/aplicacao-tirzepatida-sao-jose">como funciona a aplicação na clínica</a>.</p>

<h2>Sinais de alerta</h2>
<p>Procure a médica ou um pronto atendimento se houver:</p>
<ul>
  <li>Dor forte e persistente na barriga, que pode irradiar para as costas</li>
  <li>Vômitos repetidos, que impedem de beber líquidos</li>
  <li>Sinais de desidratação: tontura, boca muito seca, pouca urina</li>
  <li>Inchaço no rosto ou na garganta, falta de ar ou coceira intensa pelo corpo</li>
</ul>

<h2>O que vem depois das 4 semanas</h2>
<p>Usualmente, conforme a bula, o passo seguinte é 5 mg por semana. Mas isso não é automático: algumas pessoas ficam mais tempo na dose inicial, por tolerância ou porque já estão respondendo bem. Subir mais rápido não antecipa o resultado. Essa decisão é tomada em consulta, com o que o primeiro mês mostrou.</p>
${FECHO}
`,
  },
  {
    slug: 'mounjaro-em-quantas-horas-faz-efeito',
    num: 51,
    title: 'Em Quantas Horas o Mounjaro Faz Efeito? O Pico de Ação Após a Aplicação',
    shortTitle: 'Em Quantas Horas o Mounjaro Faz Efeito',
    intro: 'Depois da aplicação, quanto tempo leva para o Mounjaro começar a agir? A resposta está na bula: o pico acontece entre 8 e 72 horas. Entenda o que isso muda na sua semana.',
    category: 'Medicamentos',
    readTime: '5 min',
    date: 'Novembro 2026',
    metaDesc: 'O Mounjaro começa a agir no mesmo dia e atinge o pico entre 8 e 72 horas após a aplicação, segundo a bula. Veja hora a hora e o melhor dia para aplicar.',
    related: ['quanto-tempo-mounjaro-faz-efeito', 'uma-dose-de-mounjaro-faz-efeito-por-quantos-dias', 'primeira-dose-mounjaro-o-que-esperar', 'mounjaro-tira-a-fome-em-quanto-tempo'],
    faq: [
      { q: 'Em quantas horas o Mounjaro começa a fazer efeito?', a: 'A absorção começa logo após a aplicação e, segundo a bula, a concentração máxima no sangue é atingida entre 8 e 72 horas. A percepção varia: há quem sinta menos fome no mesmo dia e quem só perceba depois de algumas aplicações.' },
      { q: 'Quando é o pico de ação do Mounjaro?', a: 'Entre 8 e 72 horas após a aplicação, ou seja, do primeiro ao terceiro dia. É quando a fome costuma estar mais baixa e a náusea é mais provável.' },
      { q: 'O horário da aplicação muda o efeito?', a: 'Não. A bula permite aplicar em qualquer horário do dia, com ou sem alimento. O importante é manter o mesmo dia da semana.' },
      { q: 'Aplicar na barriga faz efeito mais rápido que na coxa?', a: 'Não de forma relevante. Barriga, coxa e parte de trás do braço são os locais indicados na bula, com absorção semelhante. O recomendado é alternar o local a cada semana.' },
      { q: 'Apliquei e não senti nada depois de 3 dias. O que significa?', a: 'Na maioria das vezes, nada de errado. Na dose inicial de 2,5 mg o efeito pode ser discreto. Se continuar assim depois de algumas semanas, leve à consulta.' },
      { q: 'Qual o melhor dia da semana para aplicar?', a: 'Depende da rotina. Como o efeito mais forte e a náusea caem nos dois ou três dias seguintes, muita gente escolhe o dia pensando em quando prefere ter menos apetite ou poder descansar.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> o Mounjaro (tirzepatida) começa a ser absorvido logo após a aplicação e atinge o <strong>pico no sangue entre 8 e 72 horas</strong>, segundo a bula. Na prática, o efeito mais forte da semana cai entre o 1º e o 3º dia. Cada caso é um caso: na dose inicial, parte das pessoas não percebe nada nas primeiras horas, e isso é avaliado em consulta.</div>
<p>Quem acabou de aplicar costuma ficar atento ao relógio. Quanto tempo até a fome diminuir? Quando a náusea pode aparecer? A resposta em horas existe, mas ela descreve o que acontece no sangue, e a sensação nem sempre acompanha no mesmo ritmo.</p>

<h2>O que acontece depois da aplicação, hora a hora</h2>
<table>
  <thead><tr><th>Tempo após a aplicação</th><th>O que acontece</th></tr></thead>
  <tbody>
    <tr><td><strong>Primeiras horas</strong></td><td>O medicamento começa a passar do tecido sob a pele para o sangue, de forma lenta.</td></tr>
    <tr><td><strong>8 a 24 horas</strong></td><td>O nível sobe. Algumas pessoas já notam menos fome ou saciedade mais rápida.</td></tr>
    <tr><td><strong>24 a 72 horas</strong></td><td>Faixa em que o pico costuma ocorrer. Fome mais baixa. Náusea, se houver, é mais provável aqui.</td></tr>
    <tr><td><strong>Depois de 72 horas</strong></td><td>O nível cai devagar ao longo da semana. A meia-vida é de cerca de 5 dias.</td></tr>
  </tbody>
</table>
<p>Os números são da bula. A percepção de cada pessoa varia com a dose, o tempo de tratamento e a sensibilidade individual.</p>

<h2>Por que o efeito não é imediato</h2>
<p>A tirzepatida é aplicada sob a pele justamente para ser absorvida aos poucos. A molécula se liga a uma proteína do sangue, a albumina, e por isso circula por vários dias. É uma liberação lenta e sustentada, diferente de um remédio que age em minutos e acaba em horas.</p>
<p>Isso tem um lado bom: o efeito cobre a semana inteira. Veja <a href="/blog/uma-dose-de-mounjaro-faz-efeito-por-quantos-dias">por quantos dias uma dose faz efeito</a>.</p>

<h2>Pico no sangue não é o mesmo que sentir o efeito</h2>
<p>No primeiro mês, a dose usual de 2,5 mg é de adaptação. É comum não sentir nada nas primeiras horas, nem nos primeiros dias. O apetite costuma mudar de forma mais clara entre a primeira e a segunda semana, e fica mais estável quando o medicamento se acumula, depois de umas 4 aplicações.</p>
<p>Se você <a href="/blog/tomei-mounjaro-e-nao-senti-nada">tomou e não sentiu nada</a>, isso não indica que o tratamento não vai funcionar.</p>
<!--CTA-->

<h2>O horário da aplicação faz diferença?</h2>
<p>Não. A bula permite aplicar em qualquer horário, com ou sem alimento. O que importa é manter o mesmo dia da semana. Aplicar de manhã ou à noite não acelera nem atrasa o efeito de forma relevante.</p>
<p>Há uma questão prática: quem sente náusea nas primeiras 24 a 48 horas às vezes prefere aplicar à noite, para dormir durante o início. Vale testar o que funciona na sua rotina e contar à médica.</p>

<h2>O local da aplicação muda o tempo?</h2>
<p>Barriga, coxa e parte de trás do braço são os locais indicados, com absorção semelhante. O recomendado é alternar a cada semana, para não irritar a pele sempre no mesmo ponto.</p>

<h2>Como escolher o dia da aplicação</h2>
<ul>
  <li><strong>Quer menos apetite no fim de semana?</strong> Aplicar na quinta ou na sexta coloca o pico no sábado e no domingo.</li>
  <li><strong>Tem náusea nos primeiros dias?</strong> Escolha um dia que permita descansar nos dois seguintes.</li>
  <li><strong>Precisa mudar o dia?</strong> A bula permite, desde que haja pelo menos 3 dias entre duas aplicações.</li>
</ul>

<h2>E em quantas horas começa a emagrecer?</h2>
<p>Em horas, não. O que muda em horas ou dias é o apetite. A perda de peso é construída em semanas e meses, acompanhando o ajuste da dose. A referência completa está em <a href="/blog/quanto-tempo-mounjaro-faz-efeito">em quanto tempo o Mounjaro faz efeito</a>.</p>
${FECHO}
`,
  },
  {
    slug: 'tomei-mounjaro-e-nao-senti-nada',
    num: 52,
    title: 'Tomei Mounjaro e Não Senti Nada: É Normal?',
    shortTitle: 'Tomei Mounjaro e Não Senti Nada',
    intro: 'Aplicou a primeira dose, esperou a fome sumir e nada mudou? Na maioria das vezes isso é esperado. Veja os motivos mais comuns, quanto tempo aguardar e quando vale investigar.',
    category: 'Medicamentos',
    readTime: '6 min',
    date: 'Novembro 2026',
    metaDesc: 'Tomou Mounjaro e não sentiu nada? Na dose inicial de 2,5 mg isso é comum e não indica falha. Veja 7 motivos, quanto tempo esperar e quando falar com a médica.',
    related: ['quanto-tempo-mounjaro-faz-efeito', 'primeira-dose-mounjaro-o-que-esperar', 'mounjaro-parou-de-funcionar', 'mounjaro-em-quantas-horas-faz-efeito'],
    faq: [
      { q: 'É normal tomar Mounjaro e não sentir nada?', a: 'Sim, principalmente na dose inicial. Usualmente o tratamento começa com 2,5 mg por 4 semanas, uma dose de adaptação. Parte das pessoas só percebe o efeito depois de algumas aplicações ou quando a dose sobe.' },
      { q: 'Não senti náusea nem efeito colateral. O remédio está funcionando?', a: 'Efeito colateral não é sinal de eficácia. Muitas pessoas respondem bem sem ter náusea. O que mostra resposta é o apetite, as medidas e a composição corporal ao longo das semanas.' },
      { q: 'Quanto tempo devo esperar antes de concluir que não fez efeito?', a: 'Cada caso é um caso. Algumas pessoas precisam de pelo menos 15 dias para sentir algo, e a dose sobe aos poucos enquanto a fome continua. Na prática da Dra. Isabel, só se conclui que o medicamento não funcionou depois de 8 semanas na dose máxima sem perda de peso.' },
      { q: 'Posso aumentar a dose por conta própria?', a: 'Não. Conforme a bula, os aumentos acontecem a cada 4 semanas no mínimo e são definidos em consulta. Subir antes não antecipa o resultado e aumenta o risco de passar mal.' },
      { q: 'A caneta pode estar com defeito?', a: 'É raro, mas erros de aplicação acontecem: não destravar a caneta, retirar antes do segundo clique ou não manter o tempo indicado. Se sair líquido na pele, é sinal de que parte da dose se perdeu. Leve a dúvida à consulta.' },
      { q: 'Comprei tirzepatida pela internet e não senti nada. Por quê?', a: 'Produtos sem registro na Anvisa podem não conter a substância ou ter dose errada. Medicamento comprado em farmácia, com receita, é a única garantia do que está na caneta.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> sim, é comum, e <strong>não significa que o tratamento não vai funcionar</strong>. Usualmente, conforme a bula, o Mounjaro (tirzepatida) começa com 2,5 mg por 4 semanas, uma dose de adaptação. Parte das pessoas só percebe o efeito depois da segunda ou terceira aplicação, ou quando a dose sobe. Cada caso é um caso, e a avaliação é feita em consulta.</div>
<p>Você leu que a fome some na primeira semana, aplicou e continuou com o mesmo apetite. A frustração é compreensível. Só que as histórias que circulam são as mais chamativas, e a resposta real é bem mais variada.</p>

<h2>Por que algumas pessoas não sentem nada no começo</h2>
<h3>1. A dose inicial é de adaptação</h3>
<p>A dose de 2,5 mg existe para o organismo se acostumar, não para tratar. Nos estudos, o efeito sobre o peso foi avaliado nas doses de 5 mg ou mais.</p>
<h3>2. O medicamento ainda está se acumulando</h3>
<p>Com meia-vida de cerca de 5 dias, a tirzepatida leva umas 4 aplicações seguidas para atingir um nível estável no sangue. A primeira dose, sozinha, é o ponto mais baixo de todo o tratamento.</p>
<h3>3. A resposta é individual</h3>
<p>Peso, metabolismo, genética e uso anterior de medicamentos da mesma classe mudam a sensibilidade. Quem já usou semaglutida, por exemplo, pode notar menos diferença no início.</p>
<h3>4. O efeito veio, mas discreto</h3>
<p>Nem sempre a fome some. Às vezes o sinal é sutil: sobrar comida no prato, esquecer o lanche da tarde, pensar menos em comida. Vale observar por alguns dias antes de concluir.</p>
<h3>5. Fome emocional não é fome física</h3>
<p>O medicamento age na fome e na saciedade. A vontade de comer por ansiedade, tédio ou hábito pode continuar, e precisa de outra abordagem.</p>
<h3>6. Erro na aplicação</h3>
<p>Não destravar a caneta, retirar antes da hora ou aplicar com a caneta fria e com pressa são erros possíveis. Se sair líquido na pele, parte da dose se perdeu.</p>
<h3>7. Origem do produto</h3>
<p>Tirzepatida comprada em site ou rede social, sem registro na Anvisa, pode não ter a substância ou ter dose errada. Veja <a href="/blog/canetas-emagrecedoras-registro-anvisa">quais canetas têm registro na Anvisa</a>.</p>
<div class="pratica"><strong>Na prática do consultório, com a Dra. Isabel Aragão:</strong> algumas pacientes precisam de pelo menos 15 dias de medicação para sentir o efeito. Os resultados mais expressivos dos estudos foram com as doses mais altas. Por isso, se a fome continua, a dose vai subindo aos poucos. Só dá para dizer que o medicamento não funcionou quando a paciente ficou 8 semanas na dose máxima sem perder peso.</div>
<!--CTA-->

<h2>Não ter efeito colateral é mau sinal?</h2>
<p>Não. Náusea não é prova de que o remédio está agindo. Muitas pessoas têm boa resposta sem nenhum desconforto, e esse é o melhor cenário. O que mostra resposta é o apetite, as medidas e a composição corporal ao longo das semanas.</p>

<h2>Quanto tempo esperar</h2>
<table>
  <thead><tr><th>Tempo de uso</th><th>Como interpretar</th></tr></thead>
  <tbody>
    <tr><td><strong>Até 4 semanas</strong></td><td>Dose de adaptação. Não sentir nada é comum.</td></tr>
    <tr><td><strong>5 a 8 semanas</strong></td><td>Com o ajuste de dose, a maioria passa a perceber o efeito no apetite.</td></tr>
    <tr><td><strong>Meses seguintes</strong></td><td>Se a fome continua, a dose sobe aos poucos, com bioimpedância e medidas a cada etapa.</td></tr>
    <tr><td><strong>8 semanas na dose máxima sem perder peso</strong></td><td>Só aqui dá para dizer que o medicamento não funcionou. Vale investigar hábitos, outros medicamentos e causas associadas.</td></tr>
  </tbody>
</table>
<p>São referências gerais. A médica define o tempo e o próximo passo a partir do seu caso.</p>

<h2>O que não fazer</h2>
<ul>
  <li><strong>Aumentar a dose por conta própria.</strong> Conforme a bula, os aumentos são a cada 4 semanas no mínimo, definidos em consulta.</li>
  <li><strong>Aplicar duas doses na mesma semana.</strong></li>
  <li><strong>Desistir no primeiro mês.</strong></li>
  <li><strong>Comparar com outra pessoa.</strong> Dose, ponto de partida e organismo são diferentes.</li>
</ul>

<h2>O que levar para a consulta</h2>
<ul>
  <li>Há quantas semanas você usa e em qual dose</li>
  <li>Como foi a aplicação e se saiu líquido na pele</li>
  <li>Onde o medicamento foi comprado</li>
  <li>O que mudou, mesmo que pouco: fome, saciedade, intestino, sono</li>
  <li>Outros remédios em uso</li>
</ul>
<p>Se o tratamento funcionava e deixou de funcionar depois de meses, a situação é outra: veja <a href="/blog/mounjaro-parou-de-funcionar">Mounjaro parou de funcionar</a>.</p>
${FECHO}
`,
  },
  {
    slug: 'como-o-mounjaro-age-no-organismo',
    num: 53,
    title: 'Como o Mounjaro Age no Organismo? O Efeito Explicado Passo a Passo',
    shortTitle: 'Como o Mounjaro Age no Organismo',
    intro: 'O Mounjaro imita dois hormônios que o intestino produz depois das refeições. Entenda, em linguagem simples, o que ele faz no cérebro, no estômago e no pâncreas, e o que ele não faz.',
    category: 'Medicamentos',
    readTime: '6 min',
    date: 'Novembro 2026',
    metaDesc: 'O Mounjaro (tirzepatida) age em dois hormônios, GIP e GLP-1: reduz a fome no cérebro, retarda o esvaziamento do estômago e melhora a glicose. Entenda.',
    related: ['quanto-tempo-mounjaro-faz-efeito', 'glp1-medicamentos-injetaveis-emagrecer', 'mounjaro-ou-ozempic-qual-escolher', 'efeitos-colaterais-mounjaro-tirzepatida'],
    faq: [
      { q: 'Como o Mounjaro age no organismo?', a: 'A tirzepatida ativa os receptores de dois hormônios intestinais, GIP e GLP-1. Com isso reduz a fome, aumenta a saciedade, deixa o estômago esvaziar mais devagar e ajuda o pâncreas a liberar insulina quando a glicose está alta.' },
      { q: 'O Mounjaro queima gordura?', a: 'Não diretamente. Ele reduz a fome e a quantidade de comida, e a perda de gordura vem dessa mudança sustentada ao longo de meses. Por isso alimentação com proteína e atividade física continuam contando.' },
      { q: 'O Mounjaro acelera o metabolismo?', a: 'Não é esse o mecanismo principal. O efeito central é sobre o apetite e a saciedade, com melhora do controle da glicose.' },
      { q: 'Qual a diferença entre Mounjaro e Ozempic no modo de agir?', a: 'O Ozempic (semaglutida) age no receptor de GLP-1. O Mounjaro (tirzepatida) age em dois receptores, GIP e GLP-1. A escolha entre eles depende do caso e é feita em consulta.' },
      { q: 'Por que o Mounjaro dá náusea?', a: 'Porque deixa o estômago esvaziar mais devagar e age em áreas do cérebro ligadas à saciedade. O efeito é maior no início e a cada aumento de dose, e tende a diminuir com o tempo.' },
      { q: 'O efeito continua depois que eu paro?', a: 'Não. O medicamento sai do organismo em cerca de um mês e a fome tende a voltar ao padrão anterior. Por isso a obesidade é tratada como condição crônica, com plano de manutenção.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> o Mounjaro (tirzepatida) imita dois hormônios produzidos pelo intestino, o <strong>GIP</strong> e o <strong>GLP-1</strong>. Com isso ele reduz a fome no cérebro, aumenta a saciedade, deixa o estômago esvaziar mais devagar e ajuda no controle da glicose. Ele não queima gordura sozinho: a perda de peso vem de comer menos, de forma sustentada, com acompanhamento médico.</div>
<p>Entender como o medicamento age ajuda a usar melhor e a ter expectativas realistas. Explica por que a fome muda antes da balança, por que a náusea aparece no começo e por que a dose sobe devagar.</p>

<h2>Dois hormônios do intestino</h2>
<p>Depois de uma refeição, o intestino libera hormônios que avisam o corpo de que a comida chegou. Dois deles são o GLP-1 e o GIP. Eles duram poucos minutos no sangue. A tirzepatida é uma molécula que ativa os receptores desses dois hormônios e permanece em circulação por dias, o que permite a aplicação semanal.</p>
<p>É essa ação dupla que diferencia o Mounjaro de medicamentos que agem só no GLP-1. Veja a comparação em <a href="/blog/mounjaro-ou-ozempic-qual-escolher">Mounjaro ou Ozempic</a>.</p>

<h2>O que acontece em cada parte do corpo</h2>
<table>
  <thead><tr><th>Onde age</th><th>O que faz</th><th>O que você percebe</th></tr></thead>
  <tbody>
    <tr><td><strong>Cérebro</strong></td><td>Atua nas áreas que regulam fome e saciedade</td><td>Menos fome e menos pensamento constante em comida</td></tr>
    <tr><td><strong>Estômago</strong></td><td>Esvazia mais devagar, principalmente no início</td><td>Saciedade com menos comida; às vezes estômago cheio e náusea</td></tr>
    <tr><td><strong>Pâncreas</strong></td><td>Estimula a insulina quando a glicose está alta e reduz o glucagon</td><td>Melhora da glicemia nos exames</td></tr>
    <tr><td><strong>Tecido de gordura</strong></td><td>Com menos calorias entrando, o corpo usa a reserva</td><td>Perda de gordura ao longo de meses</td></tr>
  </tbody>
</table>

<h2>No cérebro: menos fome e menos ruído</h2>
<p>O efeito mais percebido é no apetite. A fome diminui, a saciedade chega antes e muita gente descreve um silêncio em relação à comida: para de pensar no próximo lanche o tempo todo. Esse efeito costuma aparecer nas primeiras semanas. Veja <a href="/blog/mounjaro-tira-a-fome-em-quanto-tempo">em quanto tempo o Mounjaro tira a fome</a>.</p>

<h2>No estômago: digestão mais lenta</h2>
<p>O medicamento atrasa o esvaziamento do estômago. A comida fica mais tempo ali, e a sensação de estar satisfeito dura mais. Segundo a bula, esse efeito é maior depois da primeira dose e diminui com o tempo. É por isso que a náusea e o estômago cheio são mais comuns no começo e a cada aumento de dose.</p>
<p>Esse atraso também importa para quem usa anticoncepcional oral e para quem vai fazer cirurgia ou exame com sedação. São situações em que a médica orienta cuidados específicos.</p>
<!--CTA-->

<h2>No pâncreas: controle da glicose</h2>
<p>A tirzepatida foi desenvolvida primeiro para o diabetes tipo 2. Ela estimula a liberação de insulina de forma dependente da glicose, ou seja, age quando o açúcar no sangue está alto. Por isso, usada sozinha, tem baixo risco de causar hipoglicemia. O risco aumenta quando é combinada com insulina ou com alguns remédios para diabetes, e a médica ajusta essas doses.</p>

<h2>O que o Mounjaro não faz</h2>
<ul>
  <li><strong>Não queima gordura diretamente.</strong> A gordura sai porque você come menos por meses.</li>
  <li><strong>Não escolhe de onde a gordura sai.</strong> Não existe efeito localizado.</li>
  <li><strong>Não protege o músculo sozinho.</strong> Sem proteína e exercício de força, parte do peso perdido é massa muscular.</li>
  <li><strong>Não corrige o que causa o ganho de peso.</strong> Sono, estresse e outras condições seguem sendo tratados.</li>
  <li><strong>Não tem efeito permanente.</strong> Ao parar, a fome tende a voltar.</li>
</ul>

<h2>Por que a dose sobe devagar</h2>
<p>O corpo precisa se adaptar ao efeito no estômago. Usualmente, conforme a bula e os estudos, o tratamento começa com 2,5 mg por 4 semanas e os aumentos acontecem a cada 4 semanas no mínimo. Cada caso é um caso: histórico, tolerância e resposta definem o ritmo, em consulta. Veja <a href="/blog/quanto-tempo-mounjaro-faz-efeito">o efeito por dose e por semana</a>.</p>

<h2>Quanto tempo ele age</h2>
<p>O pico no sangue acontece entre 8 e 72 horas após a aplicação e a meia-vida é de cerca de 5 dias. Uma dose cobre a semana, e o medicamento leva cerca de um mês para sair do organismo depois da última aplicação. Veja <a href="/blog/uma-dose-de-mounjaro-faz-efeito-por-quantos-dias">por quantos dias uma dose faz efeito</a>.</p>

<h2>Quem não deve usar</h2>
<p>Há situações em que o medicamento é contraindicado, como gestação e histórico pessoal ou familiar de alguns tipos de tumor de tireoide. Outras exigem cuidado, como histórico de pancreatite e doenças da vesícula. Por isso a indicação é sempre feita em consulta, depois de avaliar o histórico e os exames.</p>
${FECHO}
`,
  },
  {
    slug: 'mounjaro-tira-a-fome-em-quanto-tempo',
    num: 54,
    title: 'Mounjaro Tira a Fome em Quanto Tempo? E Por Que Ela Volta no Fim da Semana',
    shortTitle: 'Mounjaro Tira a Fome em Quanto Tempo',
    intro: 'A redução da fome é o primeiro efeito do Mounjaro, mas não vem igual para todo mundo nem dura igual a semana inteira. Veja quando ela costuma aparecer e o que fazer quando a fome volta.',
    category: 'Medicamentos',
    readTime: '6 min',
    date: 'Novembro 2026',
    metaDesc: 'O Mounjaro costuma reduzir a fome entre 1 e 14 dias, ainda na dose inicial. No fim da semana ela pode voltar, sobretudo no 1º mês. Veja por quê e o que fazer.',
    related: ['quanto-tempo-mounjaro-faz-efeito', 'uma-dose-de-mounjaro-faz-efeito-por-quantos-dias', 'tomei-mounjaro-e-nao-senti-nada', 'compulsao-alimentar-noite'],
    faq: [
      { q: 'O Mounjaro tira a fome em quanto tempo?', a: 'Algumas pessoas notam em 1 a 3 dias após a primeira aplicação. Para a maioria, a mudança fica clara entre a primeira e a segunda semana, ainda na dose inicial. A resposta é individual.' },
      { q: 'O Mounjaro tira a fome por completo?', a: 'Não é esse o objetivo. O esperado é fome menor e saciedade mais rápida, com apetite suficiente para se alimentar bem. Ficar sem conseguir comer é sinal de dose alta para o momento e deve ser levado à médica.' },
      { q: 'Por que a fome volta antes da próxima aplicação?', a: 'Porque o nível do medicamento cai ao longo da semana. É mais comum no primeiro mês, antes de o nível se estabilizar, e na dose inicial, que é de adaptação.' },
      { q: 'A fome voltou depois de meses de tratamento. O que fazer?', a: 'Pode ser adaptação do organismo, mudança de rotina, sono ruim ou necessidade de ajuste. A conduta é individual e definida em consulta, não por aumento de dose por conta própria.' },
      { q: 'O Mounjaro tira a vontade de comer doce?', a: 'Muitas pessoas relatam menos vontade de doce e de beliscar. A fome emocional, ligada a ansiedade e hábito, pode continuar e pede outras estratégias.' },
      { q: 'Estou sem fome nenhuma. Posso ficar sem comer?', a: 'Não é recomendado. Comer muito pouco leva à perda de massa muscular, cansaço e queda de cabelo. O ideal é manter refeições pequenas, com proteína, e hidratação.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> a redução da fome é o primeiro efeito do Mounjaro (tirzepatida). Algumas pessoas percebem em <strong>1 a 3 dias</strong>; para a maioria, fica clara <strong>entre a primeira e a segunda semana</strong>, ainda na dose inicial. No fim da semana a fome pode voltar um pouco, principalmente no primeiro mês, porque o nível do medicamento cai antes da próxima aplicação. Cada caso é um caso, avaliado em consulta.</div>
<p>Menos fome é o efeito que quase todo mundo espera primeiro. Ele costuma vir cedo, mas de um jeito diferente do que se imagina: não é a fome que desaparece, é a relação com a comida que fica mais tranquila.</p>

<h2>Quando a fome costuma diminuir</h2>
<table>
  <thead><tr><th>Momento</th><th>O que costuma acontecer com a fome</th></tr></thead>
  <tbody>
    <tr><td><strong>1 a 3 dias</strong></td><td>Parte das pessoas já sente menos apetite, perto do pico do medicamento no sangue.</td></tr>
    <tr><td><strong>1 a 2 semanas</strong></td><td>Para a maioria, a mudança fica clara: saciedade mais rápida, menos beliscos.</td></tr>
    <tr><td><strong>4 semanas</strong></td><td>O nível se estabiliza e a oscilação ao longo da semana diminui.</td></tr>
    <tr><td><strong>Após o ajuste de dose</strong></td><td>O controle do apetite tende a ficar mais constante de uma aplicação a outra.</td></tr>
  </tbody>
</table>
<p>São referências gerais da prática e dos estudos. Há quem só perceba depois de algumas aplicações: veja <a href="/blog/tomei-mounjaro-e-nao-senti-nada">tomei Mounjaro e não senti nada</a>.</p>

<h2>Como é essa redução da fome</h2>
<ul>
  <li>Você se satisfaz com menos comida e para de comer antes</li>
  <li>Passa mais horas sem lembrar de comer</li>
  <li>Pensa menos em comida ao longo do dia</li>
  <li>Sente menos vontade de doce e de beliscar</li>
  <li>Alimentos muito gordurosos passam a pesar</li>
</ul>
<p>O objetivo não é zerar o apetite. É ter fome suficiente para se alimentar bem e saciedade suficiente para parar.</p>

<h2>Por que a fome volta no fim da semana</h2>
<p>O Mounjaro atinge o pico entre 8 e 72 horas após a aplicação e tem meia-vida de cerca de 5 dias, segundo a bula. No sexto e no sétimo dia o nível está mais baixo, e algumas pessoas sentem a fome voltar. Isso é mais comum:</p>
<ul>
  <li><strong>No primeiro mês</strong>, antes de o medicamento se acumular</li>
  <li><strong>Na dose inicial de 2,5 mg</strong>, que é de adaptação</li>
  <li><strong>Em semanas de sono ruim ou mais estresse</strong></li>
  <li><strong>Antes da menstruação</strong>, quando o apetite aumenta naturalmente</li>
</ul>
<p>Veja o detalhe dia a dia em <a href="/blog/uma-dose-de-mounjaro-faz-efeito-por-quantos-dias">por quantos dias uma dose faz efeito</a>.</p>
<div class="pratica"><strong>Na prática do consultório, com a Dra. Isabel Aragão:</strong> é normal sentir um pouco mais de fome perto da próxima aplicação, porque a meia-vida do medicamento é de 5 a 7 dias. Se isso se repete toda semana, ou se a fome fica descontrolada, é sinal de que a dose precisa ser ajustada.</div>
<!--CTA-->

<h2>O que fazer quando a fome volta</h2>
<ul>
  <li><strong>Não antecipe a dose.</strong> A aplicação é semanal, e o ajuste é feito em consulta.</li>
  <li><strong>Reforce a proteína</strong> no café da manhã e no almoço dos últimos dias da semana.</li>
  <li><strong>Cuide do sono.</strong> Dormir mal aumenta a fome no dia seguinte.</li>
  <li><strong>Diferencie fome de vontade.</strong> Fome física aceita qualquer comida; vontade pede uma comida específica.</li>
  <li><strong>Anote em que dia a fome volta</strong> e leve para a consulta.</li>
</ul>

<h2>Fome física e fome emocional</h2>
<p>O medicamento age na fome e na saciedade. Comer por ansiedade, tédio, cansaço ou hábito é outro mecanismo, e pode continuar mesmo com o apetite controlado. Quando isso acontece muito à noite, vale ler sobre <a href="/blog/compulsao-alimentar-noite">compulsão alimentar à noite</a> e conversar com a médica.</p>

<h2>E quando a fome some demais</h2>
<p>Ficar o dia todo sem conseguir comer não é o resultado desejado. Comer muito pouco leva à perda de músculo, cansaço, queda de cabelo e intestino preso. Se isso acontecer, avise a médica: pode ser o caso de manter a dose por mais tempo ou ajustar o plano alimentar.</p>

<h2>A fome voltou depois de meses</h2>
<p>Com o tempo, o corpo se adapta e o efeito no apetite pode ficar menos intenso. Isso nem sempre pede aumento de dose. Usualmente, conforme a bula, os ajustes são feitos a cada 4 semanas no mínimo, mas a decisão depende do histórico e da resposta de cada paciente. Veja também <a href="/blog/mounjaro-parou-de-funcionar">Mounjaro parou de funcionar</a>.</p>
${FECHO}
`,
  },
]
