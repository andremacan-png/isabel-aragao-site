// Posts 55 a 63 (novembro/2026): onda 2 do Plano de Conteúdo, "o dia a dia de quem usa".
// Mesmas regras de texto do posts-3.ts.
import type { Post } from './posts'
import { FECHO } from './posts-3'

export const POSTS_4: Post[] = [
  {
    slug: 'esqueci-a-dose-do-mounjaro-o-que-fazer',
    num: 55,
    title: 'Esqueci a Dose do Mounjaro: O Que Fazer',
    shortTitle: 'Esqueci a Dose do Mounjaro',
    intro: 'Passou o dia da aplicação e você só lembrou depois? A bula tem uma regra simples, que depende de quantos dias se passaram. Veja o que fazer em cada situação.',
    category: 'Medicamentos',
    readTime: '5 min',
    date: 'Novembro 2026',
    metaDesc: 'Esqueceu o Mounjaro? Pela bula: até 4 dias de atraso, aplique ao lembrar; mais de 4 dias, pule e siga no dia habitual. Nunca duas doses juntas. Veja cada caso.',
    related: ['uma-dose-de-mounjaro-faz-efeito-por-quantos-dias', 'quanto-tempo-mounjaro-faz-efeito', 'como-guardar-o-mounjaro-geladeira-viagem-aviao', 'onde-aplicar-o-mounjaro-barriga-coxa-ou-braco'],
    faq: [
      { q: 'Esqueci de aplicar o Mounjaro. O que eu faço?', a: 'A orientação da bula é: se passaram até 4 dias (96 horas) do dia previsto, aplique assim que lembrar. Se passaram mais de 4 dias, pule essa dose e aplique a próxima no dia habitual. Em caso de dúvida, confirme com a médica.' },
      { q: 'Posso aplicar duas doses para compensar?', a: 'Não. Nunca aplique duas doses juntas nem com menos de 3 dias de intervalo entre uma e outra.' },
      { q: 'Atrasei um dia. Perco o efeito?', a: 'Não. A meia-vida do medicamento é de cerca de 5 dias, então um ou dois dias de atraso mudam pouco. Aplique ao lembrar e siga o tratamento.' },
      { q: 'Fiquei duas semanas ou mais sem aplicar. Volto na mesma dose?', a: 'Depende. Depois de uma pausa mais longa, o corpo perde parte da adaptação e a médica pode orientar a retomar em dose menor, para evitar náusea. Não retome por conta própria na dose alta.' },
      { q: 'Posso mudar o dia da semana da aplicação?', a: 'Pode. A bula permite, desde que haja pelo menos 3 dias (72 horas) entre duas aplicações. Depois, mantenha o novo dia.' },
      { q: 'Esquecer uma dose atrapalha o resultado?', a: 'Uma dose isolada, pouco. Esquecimentos frequentes atrapalham, porque o efeito depende da constância semanal.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> pela bula do Mounjaro (tirzepatida), se passaram <strong>até 4 dias</strong> do dia previsto, aplique assim que lembrar e mantenha o seu dia habitual na semana seguinte. Se passaram <strong>mais de 4 dias</strong>, pule essa dose e aplique a próxima no dia normal. <strong>Nunca aplique duas doses juntas.</strong> Em pausas longas, cada caso é um caso: confirme com a médica antes de retomar.</div>
<p>Esquecer uma aplicação acontece: viagem, semana corrida, caneta que acabou. Não é motivo para pânico, e a regra para resolver é simples.</p>

<h2>A regra dos 4 dias</h2>
<table>
  <thead><tr><th>Quanto tempo passou do dia previsto</th><th>O que fazer</th></tr></thead>
  <tbody>
    <tr><td><strong>Até 4 dias (96 horas)</strong></td><td>Aplique assim que lembrar. Na semana seguinte, volte ao dia habitual.</td></tr>
    <tr><td><strong>Mais de 4 dias</strong></td><td>Pule a dose esquecida. Aplique a próxima no dia habitual.</td></tr>
    <tr><td><strong>Duas semanas ou mais</strong></td><td>Fale com a médica antes de retomar. Pode ser preciso voltar a uma dose menor.</td></tr>
  </tbody>
</table>
<p>Em qualquer cenário, respeite pelo menos 3 dias entre duas aplicações.</p>

<h2>Exemplos práticos</h2>
<ul>
  <li><strong>Aplico na segunda e lembrei na quarta:</strong> aplique na quarta. Na segunda seguinte, aplique normalmente.</li>
  <li><strong>Aplico na segunda e lembrei no sábado:</strong> passaram 5 dias. Pule e aplique na segunda.</li>
  <li><strong>Aplico na segunda e lembrei na sexta:</strong> são 4 dias, ainda dá para aplicar. Como a segunda seguinte fica a 3 dias, o intervalo mínimo é respeitado.</li>
</ul>

<h2>Por que não dobrar a dose</h2>
<p>Aplicar duas doses próximas não recupera o efeito perdido. Só aumenta a quantidade de medicamento de uma vez, e com ela o risco de náusea, vômito e mal-estar. O tratamento tolera bem uma falha isolada: a meia-vida é de cerca de 5 dias e parte da dose anterior ainda está circulando.</p>
<!--CTA-->

<h2>Fiquei semanas sem aplicar</h2>
<p>Depois de uma pausa longa, por falta do medicamento, doença ou viagem, o organismo perde parte da adaptação. Voltar direto para a dose em que você estava pode trazer de volta os efeitos digestivos do começo, e com mais força.</p>
<p>Não existe uma regra única para a retomada. A médica considera o tempo de pausa, a dose anterior e como foi a sua tolerância. Em geral, quanto mais longa a pausa e mais alta a dose, maior a chance de recomeçar em um degrau menor.</p>

<h2>Quero mudar o dia da aplicação</h2>
<p>Pode, desde que haja pelo menos 3 dias entre a última aplicação e a nova. A partir daí, o novo dia passa a ser o habitual. Veja <a href="/blog/mounjaro-em-quantas-horas-faz-efeito">como escolher o melhor dia</a>.</p>

<h2>Como não esquecer</h2>
<ul>
  <li>Alarme semanal no celular, com nome claro</li>
  <li>Ligar a aplicação a um hábito fixo, como o café de domingo</li>
  <li>Anotar a data na caixa ou em um aplicativo de lembretes</li>
  <li>Conferir a quantidade de doses antes de viagens e feriados</li>
</ul>
<p>Se o esquecimento virou rotina, vale conversar na consulta sobre um dia e um horário que encaixem melhor na sua semana.</p>
${FECHO}
`,
  },
  {
    slug: 'onde-aplicar-o-mounjaro-barriga-coxa-ou-braco',
    num: 56,
    title: 'Onde Aplicar o Mounjaro: Barriga, Coxa ou Braço?',
    shortTitle: 'Onde Aplicar o Mounjaro',
    intro: 'A bula indica três regiões para a aplicação do Mounjaro. Veja como escolher, por que alternar o local e os erros mais comuns na hora de aplicar.',
    category: 'Medicamentos',
    readTime: '5 min',
    date: 'Novembro 2026',
    metaDesc: 'O Mounjaro pode ser aplicado na barriga, na coxa ou na parte de trás do braço. O efeito é semelhante nos três. Veja como alternar o local e evitar erros.',
    related: ['primeira-dose-mounjaro-o-que-esperar', 'esqueci-a-dose-do-mounjaro-o-que-fazer', 'como-guardar-o-mounjaro-geladeira-viagem-aviao', 'aplicacao-tirzepatida-sao-jose'],
    faq: [
      { q: 'Onde aplicar o Mounjaro?', a: 'Sob a pele da barriga, da coxa ou da parte de trás do braço. São as três regiões indicadas na bula.' },
      { q: 'Qual o melhor lugar: barriga, coxa ou braço?', a: 'O efeito é semelhante nos três. A barriga costuma ser a mais prática para quem aplica sozinha. No braço, o ideal é que outra pessoa aplique.' },
      { q: 'Precisa mudar o local toda semana?', a: 'Sim, o recomendado é alternar. Pode ser na mesma região, desde que em um ponto diferente do anterior.' },
      { q: 'Aplicar na barriga emagrece mais a barriga?', a: 'Não. O medicamento age no corpo todo depois de absorvido. O local da aplicação não define de onde a gordura sai.' },
      { q: 'Dói para aplicar?', a: 'A agulha é fina e curta. A maioria das pessoas sente pouco ou nada. Tirar a caneta da geladeira uns 30 minutos antes costuma deixar a aplicação mais confortável.' },
      { q: 'Ficou um caroço ou uma mancha roxa. É normal?', a: 'Pequeno hematoma, vermelhidão leve ou um nódulo que some em dias podem acontecer. Dor forte, calor, vermelhidão que aumenta ou secreção devem ser avaliados.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> o Mounjaro (tirzepatida) é aplicado sob a pele em três regiões: <strong>barriga, coxa ou parte de trás do braço</strong>. O efeito é semelhante nas três. O importante é <strong>alternar o ponto a cada semana</strong> e aplicar em pele saudável. Na consulta, a técnica é ensinada e ajustada ao seu caso.</div>
<p>A dúvida sobre o local é uma das primeiras de quem vai aplicar em casa. A resposta é mais simples do que parece: não existe um lugar que emagrece mais.</p>

<h2>As três regiões indicadas</h2>
<table>
  <thead><tr><th>Região</th><th>Como aplicar</th><th>Para quem costuma ser melhor</th></tr></thead>
  <tbody>
    <tr><td><strong>Barriga</strong></td><td>A pelo menos 5 cm do umbigo, dos lados ou abaixo</td><td>Quem aplica sozinha. É a mais usada.</td></tr>
    <tr><td><strong>Coxa</strong></td><td>Parte da frente ou lateral, no terço do meio</td><td>Quem prefere variar ou tem a pele da barriga sensível.</td></tr>
    <tr><td><strong>Parte de trás do braço</strong></td><td>Região do tríceps</td><td>Quando outra pessoa aplica.</td></tr>
  </tbody>
</table>

<h2>Barriga, coxa ou braço: qual faz mais efeito?</h2>
<p>Nenhum deles de forma relevante. Os três locais têm absorção semelhante, e o tempo de ação é o mesmo. A escolha é de conforto e de praticidade.</p>
<p>E aplicar na barriga não faz perder mais gordura da barriga. O medicamento cai na circulação e age no corpo todo. De onde a gordura sai primeiro depende do organismo de cada pessoa.</p>

<h2>Por que alternar o local</h2>
<p>Aplicar sempre no mesmo ponto pode irritar a pele e formar pequenos nódulos de gordura endurecida, que atrapalham a absorção. Um jeito simples é pensar em um relógio ao redor do umbigo e avançar uma posição a cada semana, ou alternar lado direito e esquerdo.</p>
<!--CTA-->

<h2>Passo a passo resumido</h2>
<ul>
  <li>Tire a caneta da geladeira cerca de 30 minutos antes</li>
  <li>Lave as mãos e confira o nome, a dose e a validade</li>
  <li>Escolha o ponto e limpe a pele; espere secar</li>
  <li>Siga as instruções da sua caneta: a de dose única e a multidose funcionam de forma diferente</li>
  <li>Mantenha a caneta na pele pelo tempo indicado antes de retirar</li>
  <li>Descarte a agulha ou a caneta em recipiente rígido</li>
</ul>
<p>As instruções mudam conforme a apresentação. Siga sempre o folheto que acompanha a sua caneta e o que foi orientado na consulta.</p>

<h2>Erros comuns</h2>
<ul>
  <li><strong>Aplicar em cima de cicatriz, estria recente, hematoma ou pinta</strong></li>
  <li><strong>Retirar a caneta antes da hora</strong>, e parte da dose escorrer</li>
  <li><strong>Massagear o local</strong> depois da aplicação</li>
  <li><strong>Aplicar por cima da roupa</strong></li>
  <li><strong>Reutilizar agulha</strong></li>
</ul>

<h2>Reações no local</h2>
<p>Vermelhidão leve, coceira ou um pequeno hematoma podem aparecer e somem em poucos dias. Avise a médica se houver dor forte, calor, inchaço que aumenta, secreção ou placas vermelhas pelo corpo.</p>

<h2>Prefere não aplicar sozinha?</h2>
<p>É comum, principalmente nas primeiras semanas. Em São José/SC, a aplicação pode ser feita na clínica com a enfermeira, com horário marcado. Veja <a href="/blog/aplicacao-tirzepatida-sao-jose">como funciona a aplicação na clínica</a>.</p>
${FECHO}
`,
  },
  {
    slug: 'como-guardar-o-mounjaro-geladeira-viagem-aviao',
    num: 57,
    title: 'Como Guardar o Mounjaro: Geladeira, Viagem e Avião',
    shortTitle: 'Como Guardar o Mounjaro',
    intro: 'O Mounjaro é um medicamento de geladeira, mas tolera um período fora dela. Veja como guardar em casa, o que fazer se ficou fora da refrigeração e como levar em viagens.',
    category: 'Medicamentos',
    readTime: '5 min',
    date: 'Novembro 2026',
    metaDesc: 'O Mounjaro deve ficar na geladeira, entre 2 e 8 °C, sem congelar e protegido da luz. Veja quanto tempo pode ficar fora, como viajar e como levar no avião.',
    related: ['onde-aplicar-o-mounjaro-barriga-coxa-ou-braco', 'esqueci-a-dose-do-mounjaro-o-que-fazer', 'canetas-emagrecedoras-registro-anvisa', 'precisa-de-receita-mounjaro-tirzepatida'],
    faq: [
      { q: 'O Mounjaro precisa ficar na geladeira?', a: 'Sim. A bula orienta guardar entre 2 e 8 °C, na embalagem original, protegido da luz. Não pode congelar.' },
      { q: 'Quanto tempo o Mounjaro pode ficar fora da geladeira?', a: 'A bula prevê um período limitado em temperatura de até 30 °C, que varia conforme a apresentação: como referência, até 21 dias para a caneta de dose única e até 30 dias para a caneta multidose depois do primeiro uso. Confira a bula da sua caneta.' },
      { q: 'O Mounjaro congelou. Posso usar?', a: 'Não. Medicamento que congelou deve ser descartado, mesmo que tenha descongelado depois.' },
      { q: 'Posso levar o Mounjaro no avião?', a: 'Sim, sempre na bagagem de mão, com a receita e a embalagem original. Não despache: o porão pode ter temperaturas muito baixas e a mala pode extraviar.' },
      { q: 'Esqueci a caneta fora da geladeira uma noite. Estraguei?', a: 'Se a temperatura ficou abaixo de 30 °C, em geral não. Anote a data e confira o prazo da bula. Se ficou no carro, ao sol ou em lugar muito quente, o mais seguro é não usar e falar com a médica ou com o farmacêutico.' },
      { q: 'Em que parte da geladeira guardar?', a: 'Nas prateleiras do meio, longe do congelador e fora da porta, onde a temperatura oscila mais.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> guarde o Mounjaro (tirzepatida) <strong>na geladeira, entre 2 e 8 °C</strong>, na embalagem original e protegido da luz. <strong>Não congele.</strong> A bula permite um período limitado fora da geladeira, em até 30 °C, que varia conforme a apresentação. Em viagem de avião, leve na bagagem de mão, com a receita.</div>
<p>É um medicamento caro e sensível à temperatura. Guardar direito garante que a dose aplicada tenha o efeito esperado.</p>

<h2>Como guardar em casa</h2>
<ul>
  <li><strong>Geladeira, entre 2 e 8 °C</strong></li>
  <li><strong>Prateleira do meio</strong>, longe do congelador e fora da porta</li>
  <li><strong>Na caixa original</strong>, que protege da luz</li>
  <li><strong>Fora do alcance de crianças</strong></li>
  <li><strong>Nunca no congelador</strong></li>
</ul>

<h2>Quanto tempo pode ficar fora da geladeira</h2>
<table>
  <thead><tr><th>Apresentação</th><th>Referência da bula fora da geladeira (até 30 °C)</th></tr></thead>
  <tbody>
    <tr><td><strong>Caneta de dose única</strong></td><td>Até 21 dias</td></tr>
    <tr><td><strong>Caneta multidose</strong></td><td>Até 30 dias depois do primeiro uso; depois disso, descartar mesmo que sobre medicamento</td></tr>
  </tbody>
</table>
<p>Esses prazos são referência. As apresentações mudam, então vale conferir a bula que veio na sua caixa ou perguntar ao farmacêutico. Uma vez fora da geladeira por esse período, o prazo não recomeça ao voltar para ela.</p>

<h2>Situações em que é melhor não usar</h2>
<ul>
  <li>A caneta <strong>congelou</strong>, mesmo que tenha descongelado</li>
  <li>Ficou em <strong>carro fechado, ao sol ou perto de fonte de calor</strong></li>
  <li>O líquido está <strong>turvo, com partículas ou com cor diferente</strong></li>
  <li>A <strong>validade</strong> venceu</li>
  <li>A caneta está <strong>danificada</strong> ou caiu em superfície dura</li>
</ul>
<p>Na dúvida, não aplique. Fale com a médica ou com o farmacêutico.</p>
<!--CTA-->

<h2>Como levar em viagem</h2>
<ul>
  <li><strong>Bolsa térmica</strong> com gelo reciclável, sem contato direto do gelo com a caneta, para não congelar</li>
  <li><strong>Embalagem original</strong> e receita junto</li>
  <li><strong>Geladeira no destino</strong>: confirme antes com o hotel</li>
  <li><strong>Nunca no porta-luvas ou no porta-malas</strong></li>
  <li><strong>Leve doses suficientes</strong> para o período, com uma folga</li>
</ul>

<h2>Mounjaro no avião</h2>
<p>Leve sempre na bagagem de mão. O porão pode chegar a temperaturas muito baixas, e mala despachada pode atrasar ou se perder. Medicamentos de uso pessoal com receita são permitidos na cabine. Em viagens internacionais, leve a receita e, se possível, uma declaração médica, e confira as regras do país de destino.</p>
<p>Em voos longos com mudança de fuso, o intervalo semanal continua valendo. Se precisar ajustar o dia, respeite pelo menos 3 dias entre duas aplicações. Veja <a href="/blog/esqueci-a-dose-do-mounjaro-o-que-fazer">o que fazer se atrasar a dose</a>.</p>

<h2>Faltou luz em casa</h2>
<p>Mantenha a geladeira fechada. Algumas horas sem energia, com a porta fechada, costumam manter a temperatura. Se a falta de luz for longa, conte esse tempo como período fora da geladeira e confira o prazo da bula.</p>

<h2>Como descartar</h2>
<p>Agulhas e canetas usadas vão em recipiente rígido e fechado, nunca soltas no lixo comum. Muitas farmácias e unidades de saúde recebem esse material.</p>
${FECHO}
`,
  },
  {
    slug: 'mounjaro-e-alcool-pode-beber',
    num: 58,
    title: 'Mounjaro e Álcool: Pode Beber Durante o Tratamento?',
    shortTitle: 'Mounjaro e Álcool',
    intro: 'A bula não proíbe, mas isso não quer dizer que seja indiferente. Entenda o que o álcool muda no tratamento com Mounjaro e como reduzir os riscos se for beber.',
    category: 'Medicamentos',
    readTime: '5 min',
    date: 'Novembro 2026',
    metaDesc: 'A bula do Mounjaro não proíbe álcool, mas beber pode piorar náusea, atrapalhar a perda de peso e, em quem tem diabetes, baixar a glicose. Veja os cuidados.',
    related: ['efeitos-colaterais-mounjaro-tirzepatida', 'nausea-com-mounjaro-o-que-comer-e-o-que-evitar', 'o-que-comer-usando-mounjaro', 'primeira-dose-mounjaro-o-que-esperar'],
    faq: [
      { q: 'Quem toma Mounjaro pode beber álcool?', a: 'A bula não traz proibição. Na prática, a recomendação é moderar ou evitar, principalmente no início e após cada aumento de dose. Cada caso é um caso, e a orientação é dada em consulta.' },
      { q: 'O álcool corta o efeito do Mounjaro?', a: 'Não corta. Mas soma calorias, reduz o autocontrole na alimentação e pode piorar o sono, o que atrapalha o resultado.' },
      { q: 'Posso beber no dia da aplicação?', a: 'É melhor evitar no dia da aplicação e nos dois dias seguintes, quando o medicamento está no pico e a náusea é mais provável.' },
      { q: 'Por que fico mal mais rápido bebendo com Mounjaro?', a: 'Comendo menos e com o estômago mais lento, o efeito do álcool pode ser sentido de forma diferente. A desidratação também pesa.' },
      { q: 'Tenho diabetes. O cuidado é maior?', a: 'Sim. Em quem usa insulina ou alguns remédios para diabetes, o álcool aumenta o risco de hipoglicemia. Converse com a médica antes.' },
      { q: 'É verdade que o Mounjaro tira a vontade de beber?', a: 'Algumas pessoas relatam menos vontade de álcool durante o tratamento, e há estudos em andamento sobre isso. Ainda não é uma indicação do medicamento.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> a bula do Mounjaro (tirzepatida) <strong>não proíbe o álcool</strong>, mas beber durante o tratamento pode piorar a náusea, desidratar, atrapalhar a perda de peso e, em quem usa remédios para diabetes, baixar demais a glicose. A recomendação usual é <strong>moderar ou evitar</strong>, principalmente no começo e após aumentos de dose. Cada caso é avaliado em consulta.</div>
<p>É uma das perguntas mais frequentes do consultório, quase sempre antes de um casamento, uma viagem ou as festas de fim de ano. A resposta honesta não é um sim nem um não.</p>

<h2>O que o álcool muda no tratamento</h2>
<table>
  <thead><tr><th>Efeito</th><th>Por que acontece</th></tr></thead>
  <tbody>
    <tr><td><strong>Mais náusea e refluxo</strong></td><td>O álcool irrita o estômago, que já está esvaziando mais devagar.</td></tr>
    <tr><td><strong>Desidratação</strong></td><td>Você bebe menos água, come menos e o álcool aumenta a perda de líquido.</td></tr>
    <tr><td><strong>Calorias sem saciedade</strong></td><td>Bebida alcoólica tem muita caloria e não sustenta.</td></tr>
    <tr><td><strong>Escolhas piores</strong></td><td>O álcool reduz o freio na hora de comer.</td></tr>
    <tr><td><strong>Sono ruim</strong></td><td>Dormir mal aumenta a fome no dia seguinte.</td></tr>
    <tr><td><strong>Hipoglicemia</strong></td><td>Risco maior em quem usa insulina ou alguns remédios para diabetes.</td></tr>
  </tbody>
</table>

<h2>Quem deve evitar</h2>
<ul>
  <li>Quem está no primeiro mês ou acabou de subir a dose</li>
  <li>Quem está com náusea, vômito ou diarreia</li>
  <li>Quem tem diabetes e usa insulina ou sulfonilureia</li>
  <li>Quem tem histórico de pancreatite ou doença do fígado</li>
  <li>Quem está comendo muito pouco</li>
</ul>
<!--CTA-->

<h2>Se for beber, como reduzir o risco</h2>
<ul>
  <li><strong>Evite o dia da aplicação e os dois seguintes</strong></li>
  <li><strong>Não beba de estômago vazio.</strong> Coma antes, com proteína</li>
  <li><strong>Intercale com água</strong>, um copo para cada dose</li>
  <li><strong>Beba menos do que bebia antes.</strong> A tolerância pode mudar</li>
  <li><strong>Prefira bebidas menos doces</strong> e evite misturas com refrigerante e energético</li>
  <li><strong>Não dirija</strong></li>
</ul>

<h2>O álcool atrapalha o emagrecimento?</h2>
<p>Atrapalha, mesmo sem cortar o efeito do medicamento. Com o apetite reduzido, cada caloria conta mais para a nutrição. Bebida ocupa esse espaço sem oferecer proteína nem saciedade, e costuma vir acompanhada de petiscos. Uma ocasião isolada não muda o tratamento. O hábito semanal, sim.</p>

<h2>Menos vontade de beber</h2>
<p>Parte das pessoas percebe que a vontade de beber diminui durante o tratamento, assim como a vontade de doce. Há estudos investigando esse efeito em medicamentos dessa classe. Por enquanto é uma observação, não uma indicação aprovada.</p>

<h2>Sinais para procurar atendimento</h2>
<ul>
  <li>Dor forte e persistente na barriga, com ou sem vômito</li>
  <li>Vômitos repetidos, sem conseguir beber líquidos</li>
  <li>Tontura intensa, suor frio, tremor ou confusão</li>
</ul>
<p>Veja também os <a href="/blog/efeitos-colaterais-mounjaro-tirzepatida">efeitos colaterais do Mounjaro e o que merece atenção</a>.</p>
${FECHO}
`,
  },
  {
    slug: 'nausea-com-mounjaro-o-que-comer-e-o-que-evitar',
    num: 59,
    title: 'Náusea com Mounjaro: O Que Comer e O Que Evitar',
    shortTitle: 'Náusea com Mounjaro',
    intro: 'A náusea é o efeito colateral mais comum do Mounjaro, principalmente no início e a cada aumento de dose. Veja o que costuma aliviar, o que piora e quando avisar a médica.',
    category: 'Medicamentos',
    readTime: '5 min',
    date: 'Novembro 2026',
    metaDesc: 'Náusea com Mounjaro é comum no início e ao subir a dose. Porções pequenas, comer devagar e evitar gordura ajudam. Veja o que comer, o que evitar e os alertas.',
    related: ['efeitos-colaterais-mounjaro-tirzepatida', 'o-que-comer-usando-mounjaro', 'prisao-de-ventre-com-mounjaro', 'primeira-dose-mounjaro-o-que-esperar'],
    faq: [
      { q: 'É normal sentir náusea com Mounjaro?', a: 'Sim. É o efeito colateral mais relatado. Nos estudos, atingiu entre um quarto e um terço dos participantes, em geral de forma leve a moderada e passageira.' },
      { q: 'Quanto tempo dura a náusea do Mounjaro?', a: 'Costuma ser mais forte nos dois ou três dias após a aplicação e melhorar em uma a duas semanas. Pode voltar por alguns dias a cada aumento de dose.' },
      { q: 'O que comer quando estou enjoada?', a: 'Porções pequenas de alimentos leves e pouco gordurosos: arroz, batata, frango, ovo, iogurte natural, frutas, torrada, caldos. Alimentos frios ou em temperatura ambiente costumam ser mais bem tolerados.' },
      { q: 'O que piora a náusea?', a: 'Refeições grandes, comer rápido, fritura e gordura, doces em excesso, álcool, bebida gaseificada e deitar logo depois de comer.' },
      { q: 'Posso tomar remédio para enjoo?', a: 'Só com orientação médica. Em alguns casos a médica prescreve um medicamento por poucos dias ou ajusta a dose do tratamento.' },
      { q: 'Quando a náusea é sinal de alerta?', a: 'Quando vem com vômitos repetidos, impossibilidade de beber líquidos, dor forte na barriga ou sinais de desidratação. Nesses casos, procure atendimento.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> a náusea com Mounjaro (tirzepatida) é comum, costuma ser leve e aparece mais <strong>nos dias seguintes à aplicação e a cada aumento de dose</strong>. Ajuda: <strong>porções pequenas, comer devagar, pouca gordura e boa hidratação</strong>. Piora: prato cheio, fritura, álcool e deitar depois de comer. Se for intensa ou persistente, a médica pode ajustar a dose.</div>
<p>O medicamento deixa o estômago esvaziar mais devagar. É parte do que dá saciedade, e é também o motivo da náusea. A boa notícia é que o corpo se adapta, e a alimentação faz muita diferença nesse período.</p>

<h2>Quando a náusea costuma aparecer</h2>
<ul>
  <li><strong>Nos dois ou três dias após a aplicação</strong>, perto do pico do medicamento</li>
  <li><strong>No primeiro mês</strong> de tratamento</li>
  <li><strong>Por alguns dias após cada aumento de dose</strong></li>
  <li><strong>Depois de comer demais ou muito rápido</strong></li>
</ul>

<h2>O que comer e o que evitar</h2>
<table>
  <thead><tr><th>Costuma ajudar</th><th>Costuma piorar</th></tr></thead>
  <tbody>
    <tr><td>Porções pequenas, várias vezes ao dia</td><td>Refeições grandes</td></tr>
    <tr><td>Frango, peixe, ovo, iogurte natural</td><td>Fritura, embutidos, molhos gordurosos</td></tr>
    <tr><td>Arroz, batata, torrada, banana, maçã</td><td>Doces e sobremesas em excesso</td></tr>
    <tr><td>Caldos e sopas leves</td><td>Comida muito condimentada</td></tr>
    <tr><td>Alimentos frios ou em temperatura ambiente</td><td>Cheiros fortes de comida quente</td></tr>
    <tr><td>Água em pequenos goles, chá de gengibre</td><td>Álcool, refrigerante e muito líquido junto da refeição</td></tr>
  </tbody>
</table>
<!--CTA-->

<h2>Hábitos que fazem diferença</h2>
<ul>
  <li><strong>Coma devagar</strong> e pare ao primeiro sinal de saciedade</li>
  <li><strong>Não fique muitas horas em jejum.</strong> Estômago vazio também enjoa</li>
  <li><strong>Espere para deitar</strong>: pelo menos duas horas depois de comer</li>
  <li><strong>Beba líquidos entre as refeições</strong>, não durante</li>
  <li><strong>Teste o horário da aplicação.</strong> Algumas pessoas preferem aplicar à noite</li>
</ul>

<h2>E os remédios para enjoo?</h2>
<p>Não use por conta própria. Quando a náusea atrapalha a alimentação, a médica pode prescrever um medicamento por poucos dias, manter a dose atual por mais tempo ou voltar um degrau. Subir a dose devagar é a principal forma de prevenir. Usualmente, conforme a bula, os aumentos acontecem a cada 4 semanas no mínimo, e cada caso é avaliado em consulta.</p>

<h2>Mesmo enjoada, não deixe de comer</h2>
<p>Passar dias comendo quase nada leva a fraqueza, perda de músculo e intestino preso. Priorize proteína em pequenas quantidades e mantenha a hidratação. Veja <a href="/blog/o-que-comer-usando-mounjaro">o que comer usando Mounjaro</a>.</p>

<h2>Sinais de alerta</h2>
<ul>
  <li>Vômitos repetidos por mais de um dia</li>
  <li>Não conseguir manter líquidos</li>
  <li>Dor forte na barriga, que pode ir para as costas</li>
  <li>Tontura, boca muito seca e pouca urina</li>
  <li>Pele ou olhos amarelados</li>
</ul>
<p>Nessas situações, procure atendimento e avise a médica. Veja a lista completa em <a href="/blog/efeitos-colaterais-mounjaro-tirzepatida">efeitos colaterais do Mounjaro</a>.</p>
${FECHO}
`,
  },
  {
    slug: 'prisao-de-ventre-com-mounjaro',
    num: 60,
    title: 'Prisão de Ventre com Mounjaro: Por Que Acontece e O Que Fazer',
    shortTitle: 'Prisão de Ventre com Mounjaro',
    intro: 'Intestino preso é um dos efeitos mais comuns do tratamento com Mounjaro. Entenda as causas, o que ajuda no dia a dia e quando é preciso avisar a médica.',
    category: 'Medicamentos',
    readTime: '5 min',
    date: 'Novembro 2026',
    metaDesc: 'Prisão de ventre com Mounjaro é comum: o intestino fica mais lento e você come e bebe menos. Água, fibras e movimento ajudam. Veja quando avisar a médica.',
    related: ['efeitos-colaterais-mounjaro-tirzepatida', 'nausea-com-mounjaro-o-que-comer-e-o-que-evitar', 'o-que-comer-usando-mounjaro', 'quanto-tempo-mounjaro-faz-efeito'],
    faq: [
      { q: 'Mounjaro causa prisão de ventre?', a: 'Pode causar. Nos estudos, a constipação foi relatada por mais de um em cada dez participantes, em geral de forma leve.' },
      { q: 'Por que o intestino prende?', a: 'O medicamento deixa o trânsito digestivo mais lento. Além disso, a pessoa passa a comer menos, com menos fibra, e a beber menos água.' },
      { q: 'Quanto tempo dura?', a: 'Costuma ser mais intensa no início e depois dos aumentos de dose. Em parte das pessoas melhora com a adaptação; em outras, exige cuidado contínuo com água e fibras.' },
      { q: 'Posso tomar laxante?', a: 'Só com orientação. Há opções seguras para uso por períodos curtos, e a escolha depende do seu caso. Evite laxantes estimulantes por conta própria.' },
      { q: 'Quantos dias sem evacuar é preocupante?', a: 'Não há número único. Em geral, mais de três ou quatro dias com desconforto, ou qualquer período com dor forte, barriga muito distendida ou vômito, deve ser comunicado à médica.' },
      { q: 'Fibra em pó ajuda?', a: 'Pode ajudar, desde que acompanhada de bastante água. Sem água suficiente, a fibra pode piorar o quadro.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> prisão de ventre com Mounjaro (tirzepatida) é comum. Acontece porque o <strong>trânsito digestivo fica mais lento</strong> e porque a pessoa passa a <strong>comer e beber menos</strong>. O que mais ajuda: água ao longo do dia, fibras, movimento e horário regular para ir ao banheiro. Se persistir, a médica orienta o tratamento adequado.</div>
<p>É um efeito menos comentado do que a náusea, mas que incomoda por mais tempo quando não é cuidado desde o começo.</p>

<h2>Por que acontece</h2>
<ul>
  <li><strong>Digestão mais lenta:</strong> o medicamento reduz a velocidade de esvaziamento do estômago e do trânsito intestinal</li>
  <li><strong>Menos comida:</strong> menor volume no intestino significa menos estímulo para evacuar</li>
  <li><strong>Menos fibra:</strong> com pouco apetite, frutas, verduras e grãos costumam ser os primeiros a sair do prato</li>
  <li><strong>Menos água:</strong> a sede também diminui</li>
  <li><strong>Menos movimento:</strong> cansaço no início reduz a atividade</li>
</ul>

<h2>O que fazer no dia a dia</h2>
<table>
  <thead><tr><th>Medida</th><th>Como aplicar</th></tr></thead>
  <tbody>
    <tr><td><strong>Água</strong></td><td>Ao longo do dia, mesmo sem sede. Uma garrafa à vista ajuda.</td></tr>
    <tr><td><strong>Fibras</strong></td><td>Mamão, ameixa, kiwi, laranja com bagaço, aveia, chia, linhaça, feijão, verduras.</td></tr>
    <tr><td><strong>Movimento</strong></td><td>Caminhada diária, mesmo curta.</td></tr>
    <tr><td><strong>Rotina</strong></td><td>Ir ao banheiro no mesmo horário, sem pressa, de preferência após o café da manhã.</td></tr>
    <tr><td><strong>Posição</strong></td><td>Um apoio para os pés, deixando os joelhos acima do quadril.</td></tr>
    <tr><td><strong>Não segurar</strong></td><td>Atender à vontade quando ela aparecer.</td></tr>
  </tbody>
</table>
<p>Aumente a fibra aos poucos e sempre com água. Fibra demais de uma vez, sem líquido, causa gases e pode piorar.</p>
<!--CTA-->

<h2>Laxantes e suplementos</h2>
<p>Não use por conta própria. Existem opções seguras para períodos curtos, e a médica escolhe a mais adequada. Laxantes estimulantes usados com frequência podem irritar o intestino. Chás laxativos entram na mesma categoria.</p>

<h2>Quando a dose pesa</h2>
<p>Se o intestino piora muito a cada aumento de dose, vale levar isso à consulta. Manter a dose por mais tempo ou subir mais devagar são opções. A dose certa é a menor que controla o apetite com efeitos toleráveis. Veja <a href="/blog/quanto-tempo-mounjaro-faz-efeito">o efeito do Mounjaro por dose</a>.</p>

<h2>Sinais de alerta</h2>
<ul>
  <li>Dor forte ou cólica intensa na barriga</li>
  <li>Barriga muito distendida, sem eliminar gases</li>
  <li>Vômitos junto com a constipação</li>
  <li>Sangue nas fezes</li>
  <li>Vários dias sem evacuar, com mal-estar</li>
</ul>
<p>Nesses casos, procure atendimento e avise a médica. Veja também <a href="/blog/efeitos-colaterais-mounjaro-tirzepatida">os efeitos colaterais do Mounjaro</a>.</p>
${FECHO}
`,
  },
  {
    slug: 'queda-de-cabelo-emagrecimento-canetas',
    num: 61,
    title: 'Queda de Cabelo Durante o Emagrecimento com Canetas: Por Que Acontece',
    shortTitle: 'Queda de Cabelo no Emagrecimento',
    intro: 'Perder peso rápido pode fazer o cabelo cair mais, com ou sem medicamento. Entenda o que é o eflúvio telógeno, quanto tempo dura e o que ajuda a reduzir.',
    category: 'Saúde',
    readTime: '5 min',
    date: 'Novembro 2026',
    metaDesc: 'Queda de cabelo no emagrecimento costuma ser eflúvio telógeno: aparece 2 a 4 meses após a perda rápida de peso e é temporária. Veja causas e o que ajuda.',
    related: ['efeitos-colaterais-mounjaro-tirzepatida', 'o-que-comer-usando-mounjaro', 'perda-de-massa-muscular-com-canetas-como-evitar', 'perda-de-peso-saudavel-quantos-kg-por-mes'],
    faq: [
      { q: 'Mounjaro e Ozempic fazem o cabelo cair?', a: 'A queda foi relatada nos estudos por uma pequena parte dos participantes, cerca de 5% com tirzepatida. A explicação mais aceita é a perda rápida de peso e a menor ingestão de nutrientes, e não um efeito direto no fio.' },
      { q: 'Quando a queda começa?', a: 'Em geral de 2 a 4 meses depois do período de perda de peso mais intensa, porque o fio leva esse tempo para se soltar.' },
      { q: 'O cabelo volta a crescer?', a: 'Na maioria dos casos, sim. O eflúvio telógeno é temporário e tende a melhorar em alguns meses, quando o peso estabiliza e a nutrição está adequada.' },
      { q: 'O que ajuda a diminuir a queda?', a: 'Proteína suficiente, perda de peso em ritmo adequado e correção de deficiências como ferro, vitamina D, zinco e B12, quando confirmadas por exame.' },
      { q: 'Devo tomar vitamina para cabelo?', a: 'Só se houver indicação. Suplementar sem deficiência comprovada não acelera a recuperação, e alguns suplementos interferem em exames.' },
      { q: 'Preciso parar o tratamento?', a: 'Na maioria das vezes, não. A conduta costuma ser ajustar a alimentação, o ritmo de perda e investigar outras causas. A decisão é tomada em consulta.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> a queda de cabelo durante o emagrecimento costuma ser <strong>eflúvio telógeno</strong>: uma queda difusa e <strong>temporária</strong>, que aparece de 2 a 4 meses depois de uma perda de peso rápida. Está mais ligada à velocidade da perda e à falta de nutrientes do que ao medicamento em si. Proteína adequada e exames para checar deficiências são o ponto de partida.</div>
<p>Ver mais fios no ralo assusta, principalmente quando o tratamento está indo bem. Na maior parte das vezes é uma fase, com causa conhecida e recuperação esperada.</p>

<h2>O que é o eflúvio telógeno</h2>
<p>O cabelo cresce em ciclos. Diante de um estresse para o corpo, como perda de peso rápida, cirurgia, infecção ou parto, muitos fios entram ao mesmo tempo na fase de repouso e caem alguns meses depois. A raiz não é destruída, e novos fios voltam a nascer.</p>
<table>
  <thead><tr><th>Fase</th><th>O que acontece</th></tr></thead>
  <tbody>
    <tr><td><strong>Meses 1 a 3 de perda de peso</strong></td><td>O estímulo acontece, sem queda visível.</td></tr>
    <tr><td><strong>2 a 4 meses depois</strong></td><td>A queda aparece: mais fios no banho, na escova e no travesseiro.</td></tr>
    <tr><td><strong>Meses seguintes</strong></td><td>Com peso estável e boa nutrição, a queda diminui e fios novos aparecem.</td></tr>
  </tbody>
</table>

<h2>O medicamento causa a queda?</h2>
<p>Nos estudos com tirzepatida, a queda de cabelo foi relatada por cerca de 5% dos participantes, mais do que no grupo placebo. Ela também acontece com outros métodos de emagrecimento rápido, como dietas muito restritivas e cirurgia bariátrica. Por isso a explicação mais aceita é o conjunto: perda rápida de peso e ingestão baixa de proteína e nutrientes.</p>

<h2>O que aumenta o risco</h2>
<ul>
  <li>Perder peso muito rápido</li>
  <li>Comer pouca proteína</li>
  <li>Deficiência de ferro, vitamina D, zinco ou B12</li>
  <li>Alteração da tireoide</li>
  <li>Estresse intenso e sono ruim</li>
  <li>Período pós-parto e mudanças hormonais</li>
</ul>
<!--CTA-->

<h2>O que ajuda</h2>
<ul>
  <li><strong>Proteína em todas as refeições.</strong> A quantidade é individual e definida em consulta</li>
  <li><strong>Ritmo de perda adequado.</strong> Mais rápido não é melhor</li>
  <li><strong>Exames</strong> para checar ferro, ferritina, vitamina D, B12, zinco e tireoide</li>
  <li><strong>Reposição só do que estiver baixo</strong></li>
  <li><strong>Cuidado com o fio:</strong> menos calor, tração e química no período</li>
</ul>
<p>Veja <a href="/blog/o-que-comer-usando-mounjaro">o que comer usando Mounjaro</a> e <a href="/blog/perda-de-massa-muscular-com-canetas-como-evitar">como evitar a perda de massa muscular</a>, que tem as mesmas raízes.</p>

<h2>Quando investigar outras causas</h2>
<ul>
  <li>Queda em placas ou falhas bem delimitadas</li>
  <li>Coceira, descamação ou dor no couro cabeludo</li>
  <li>Queda que dura mais de 6 meses</li>
  <li>Afinamento concentrado no topo da cabeça</li>
</ul>
<p>Nesses casos, a avaliação com dermatologista pode ser indicada.</p>
${FECHO}
`,
  },
  {
    slug: 'o-que-comer-usando-mounjaro',
    num: 62,
    title: 'O Que Comer Usando Mounjaro: Proteína e Cardápio de Referência',
    shortTitle: 'O Que Comer Usando Mounjaro',
    intro: 'Com menos fome, cada refeição conta mais. Veja o que priorizar no prato, quanta proteína é referência, o que evitar e um exemplo de dia alimentar para quem usa Mounjaro.',
    category: 'Saúde',
    readTime: '6 min',
    date: 'Novembro 2026',
    metaDesc: 'O que comer usando Mounjaro: proteína em todas as refeições, fibras, água e porções pequenas. Veja a referência de proteína e um cardápio de exemplo.',
    related: ['perda-de-massa-muscular-com-canetas-como-evitar', 'nausea-com-mounjaro-o-que-comer-e-o-que-evitar', 'prisao-de-ventre-com-mounjaro', 'quanto-tempo-mounjaro-faz-efeito'],
    faq: [
      { q: 'Existe uma dieta específica para quem usa Mounjaro?', a: 'Não existe dieta obrigatória. O princípio é comer menos volume com mais qualidade: proteína em todas as refeições, fibras, água e pouca gordura em excesso.' },
      { q: 'Quanta proteína devo comer?', a: 'Cada caso é um caso. Como referência geral usada em tratamentos de perda de peso, fica entre 1,0 e 1,5 g por kg de peso por dia, ajustada em consulta conforme idade, função dos rins e atividade física.' },
      { q: 'Posso ficar sem comer se não tiver fome?', a: 'Não é recomendado. Comer muito pouco leva à perda de músculo, cansaço, queda de cabelo e intestino preso.' },
      { q: 'Preciso cortar carboidrato?', a: 'Não. A orientação é preferir os de melhor qualidade, como frutas, feijão, arroz, batata e aveia, em porções menores.' },
      { q: 'Posso tomar whey?', a: 'Pode ser uma ferramenta prática quando a fome é pouca e a proteína do prato não basta. A indicação e a quantidade são individuais.' },
      { q: 'Quais alimentos pioram os efeitos colaterais?', a: 'Fritura, comidas muito gordurosas, doces em excesso, álcool e refeições grandes são os que mais pioram náusea e refluxo.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> não há dieta obrigatória para quem usa Mounjaro (tirzepatida). O que funciona é <strong>comer menos volume com mais qualidade</strong>: proteína em todas as refeições, fibras, água e porções pequenas. Como referência geral, a proteína fica entre 1,0 e 1,5 g por kg de peso por dia, mas a quantidade certa é individual e definida em consulta.</div>
<p>O medicamento reduz a fome. O que você come com a fome que sobra define se a perda será de gordura ou de músculo, e como você vai se sentir durante o tratamento.</p>

<h2>As quatro prioridades do prato</h2>
<table>
  <thead><tr><th>Prioridade</th><th>Por quê</th><th>Exemplos</th></tr></thead>
  <tbody>
    <tr><td><strong>Proteína</strong></td><td>Protege a massa muscular e dá saciedade</td><td>Ovo, frango, peixe, carne magra, iogurte, queijo branco, feijão, lentilha</td></tr>
    <tr><td><strong>Fibras</strong></td><td>Ajudam o intestino, que fica mais lento</td><td>Verduras, legumes, frutas, aveia, chia</td></tr>
    <tr><td><strong>Água</strong></td><td>A sede diminui junto com a fome</td><td>Água, água com limão, chás sem açúcar</td></tr>
    <tr><td><strong>Carboidrato de qualidade</strong></td><td>Energia para o dia e para o treino</td><td>Arroz, batata, mandioca, frutas, pão integral</td></tr>
  </tbody>
</table>

<h2>Quanta proteína</h2>
<p>A referência geral usada em tratamentos de perda de peso fica entre 1,0 e 1,5 g por kg de peso por dia. A médica ajusta esse número conforme idade, função dos rins, composição corporal e rotina de exercício. Na prática, a regra mais útil é: <strong>comece a refeição pela proteína</strong>. Se a saciedade chegar cedo, o mais importante já foi.</p>

<h2>Um dia de exemplo</h2>
<ul>
  <li><strong>Café da manhã:</strong> ovos mexidos com uma fatia de pão e uma fruta</li>
  <li><strong>Lanche:</strong> iogurte natural com chia</li>
  <li><strong>Almoço:</strong> frango ou peixe, arroz e feijão em porção pequena, salada e legumes</li>
  <li><strong>Lanche:</strong> fruta com castanhas ou queijo branco</li>
  <li><strong>Jantar:</strong> omelete ou sopa de legumes com carne desfiada</li>
</ul>
<p>É só um exemplo de estrutura, não uma prescrição. Quantidades e escolhas variam com o peso, a rotina e as preferências de cada pessoa.</p>
<!--CTA-->

<h2>O que evitar ou reduzir</h2>
<ul>
  <li><strong>Fritura e gordura em excesso</strong>, que pioram náusea e refluxo</li>
  <li><strong>Refeições grandes</strong> e comer com pressa</li>
  <li><strong>Líquidos calóricos:</strong> suco, refrigerante, café adoçado</li>
  <li><strong>Álcool</strong>, principalmente no início</li>
  <li><strong>Ultraprocessados</strong>, que ocupam o pouco espaço sem nutrir</li>
  <li><strong>Pular refeições</strong> porque a fome sumiu</li>
</ul>

<h2>Quando a fome é quase nenhuma</h2>
<ul>
  <li>Faça refeições menores e mais frequentes, com horário</li>
  <li>Use opções práticas de proteína: iogurte, ovo cozido, queijo, shake proteico se indicado</li>
  <li>Avise a médica se você não consegue comer: pode ser o caso de manter ou reduzir a dose</li>
</ul>

<h2>Alimentação e efeitos colaterais</h2>
<p>Boa parte dos efeitos digestivos melhora com ajustes no prato. Veja <a href="/blog/nausea-com-mounjaro-o-que-comer-e-o-que-evitar">o que comer com náusea</a> e <a href="/blog/prisao-de-ventre-com-mounjaro">o que fazer com o intestino preso</a>.</p>

<h2>Como saber se está dando certo</h2>
<p>A balança não mostra a qualidade da perda. A bioimpedância mostra quanto do peso perdido é gordura e se a massa muscular está preservada. Veja <a href="/blog/perda-de-massa-muscular-com-canetas-como-evitar">como evitar a perda de massa muscular</a>.</p>
${FECHO}
`,
  },
  {
    slug: 'perda-de-massa-muscular-com-canetas-como-evitar',
    num: 63,
    title: 'Perda de Massa Muscular com Canetas Emagrecedoras: Como Evitar',
    shortTitle: 'Perda de Massa Muscular com Canetas',
    intro: 'Todo emagrecimento leva um pouco de músculo junto com a gordura. Com as canetas, isso também acontece. Veja quanto é esperado e o que fazer para preservar a massa magra.',
    category: 'Saúde',
    readTime: '6 min',
    date: 'Novembro 2026',
    metaDesc: 'Canetas emagrecedoras fazem perder músculo? Parte do peso perdido é massa magra, como em todo emagrecimento. Proteína e treino de força ajudam a evitar.',
    related: ['o-que-comer-usando-mounjaro', 'como-ler-resultado-bioimpedancia', 'bioimpedancia-o-que-e', 'quanto-emagrece-com-injetavel'],
    faq: [
      { q: 'Canetas emagrecedoras fazem perder músculo?', a: 'Em todo emagrecimento, parte do peso perdido é massa magra. Nos estudos com tirzepatida e semaglutida, cerca de um quarto a um terço da perda foi de massa magra, proporção parecida com a de outros métodos.' },
      { q: 'Como evitar a perda de massa muscular?', a: 'Com proteína suficiente, treino de força pelo menos duas vezes por semana, perda de peso em ritmo adequado e acompanhamento da composição corporal.' },
      { q: 'Preciso fazer musculação?', a: 'Algum exercício de força é o que mais protege o músculo. Pode ser musculação, pilates com carga, funcional ou exercícios com o peso do corpo, conforme a condição de cada pessoa.' },
      { q: 'Como saber se estou perdendo músculo ou gordura?', a: 'A balança não diferencia. A bioimpedância mostra a evolução da gordura e da massa muscular a cada avaliação.' },
      { q: 'Quem tem mais risco?', a: 'Pessoas acima de 60 anos, quem perde peso muito rápido, quem come pouca proteína e quem é sedentário.' },
      { q: 'Perder músculo faz o peso voltar?', a: 'Aumenta o risco. Menos músculo significa gasto de energia menor, o que facilita o reganho quando o tratamento é interrompido sem plano.' },
    ],
    content: `
<div class="resposta"><strong>Resposta rápida:</strong> em todo emagrecimento, com ou sem medicamento, parte do peso perdido é massa magra. Nos estudos com as canetas, essa parte ficou em torno de <strong>um quarto a um terço</strong> da perda total. Dá para reduzir bastante com <strong>proteína suficiente, treino de força e ritmo adequado</strong>, acompanhando pela bioimpedância.</div>
<p>O objetivo do tratamento não é pesar menos a qualquer custo. É perder gordura mantendo o que sustenta o metabolismo, a força e a autonomia: o músculo.</p>

<h2>Quanto de músculo se perde</h2>
<p>Quando o corpo recebe menos energia, usa gordura e também um pouco de massa magra. Isso acontece em dietas, na cirurgia bariátrica e com medicamentos. Nos estudos com tirzepatida e semaglutida que mediram composição corporal, a maior parte da perda foi de gordura, e uma fração foi de massa magra.</p>
<p>Massa magra não é só músculo: inclui água e outros tecidos. E a proporção varia muito de pessoa para pessoa, conforme o que ela come e o quanto se movimenta.</p>

<h2>Por que o músculo importa</h2>
<ul>
  <li><strong>Gasto de energia:</strong> músculo consome energia mesmo em repouso</li>
  <li><strong>Manutenção do peso:</strong> menos músculo facilita o reganho</li>
  <li><strong>Controle da glicose:</strong> o músculo é o principal destino do açúcar do sangue</li>
  <li><strong>Força e equilíbrio:</strong> essenciais com o passar da idade</li>
  <li><strong>Aparência:</strong> perda sem músculo deixa o corpo flácido</li>
</ul>

<h2>Quem tem mais risco</h2>
<ul>
  <li>Pessoas acima de 60 anos</li>
  <li>Quem perde peso muito rápido</li>
  <li>Quem come pouca proteína ou pula refeições</li>
  <li>Quem não faz exercício de força</li>
  <li>Mulheres na menopausa</li>
</ul>
<!--CTA-->

<h2>Como evitar</h2>
<table>
  <thead><tr><th>Medida</th><th>Na prática</th></tr></thead>
  <tbody>
    <tr><td><strong>Proteína</strong></td><td>Em todas as refeições. A referência geral é de 1,0 a 1,5 g por kg por dia, ajustada em consulta.</td></tr>
    <tr><td><strong>Treino de força</strong></td><td>Pelo menos duas vezes por semana, com progressão de carga.</td></tr>
    <tr><td><strong>Ritmo de perda</strong></td><td>Sem pressa. Perder rápido demais aumenta a parte de músculo.</td></tr>
    <tr><td><strong>Dose adequada</strong></td><td>A menor que controla o apetite sem impedir de comer.</td></tr>
    <tr><td><strong>Sono</strong></td><td>Dormir mal prejudica a recuperação muscular.</td></tr>
    <tr><td><strong>Monitoramento</strong></td><td>Bioimpedância periódica para ajustar o plano.</td></tr>
  </tbody>
</table>

<h2>O papel da bioimpedância</h2>
<p>A balança mostra um número só. A bioimpedância separa gordura, massa muscular e água, e permite comparar uma avaliação com a outra. Se a massa muscular cai mais do que deveria, dá para corrigir cedo: mais proteína, ajuste de treino ou de dose. Veja <a href="/blog/como-ler-resultado-bioimpedancia">como ler o resultado da bioimpedância</a>.</p>

<h2>Sinais de que algo não vai bem</h2>
<ul>
  <li>Fraqueza para subir escada ou carregar peso</li>
  <li>Cansaço que não melhora</li>
  <li>Queda de cabelo intensa</li>
  <li>Perda de peso muito acelerada</li>
  <li>Dias seguidos comendo quase nada</li>
</ul>
<p>Leve isso à consulta. Veja também <a href="/blog/o-que-comer-usando-mounjaro">o que comer usando Mounjaro</a>.</p>
${FECHO}
`,
  },
]
