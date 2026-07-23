export type Post = {
  slug: string
  num: number
  title: string
  shortTitle: string
  intro: string
  category: string
  readTime: string
  date: string
  metaDesc: string
  // HTML content — split on <!--CTA--> to inject mid-article CTA block
  content: string
  related: string[]
}

export const POSTS: Post[] = [
  {
    slug: 'medica-emagrecimento-sao-jose',
    num: 1,
    title: 'Médica de Emagrecimento em São José/SC — Como Funciona o Tratamento',
    shortTitle: 'Médica de Emagrecimento em São José/SC',
    intro: 'Se você mora na Grande Florianópolis e busca tratamento médico para emagrecer, entender como funciona esse cuidado é o primeiro passo para uma escolha segura e eficiente.',
    category: 'Tratamento',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Entenda como funciona o tratamento com médica de emagrecimento em São José/SC: avaliação, bioimpedância, plano individualizado e acompanhamento com a Dra. Isabel Aragão (CRM-SC 26139).',
    related: ['quando-procurar-medico-para-emagrecer', 'primeira-consulta-medica-emagrecimento', 'como-funciona-acompanhamento-medico-emagrecimento', 'bioimpedancia-o-que-e'],
    content: `
<p>Se você mora em São José ou na Grande Florianópolis e está buscando tratamento médico para emagrecer, entender como funciona esse tipo de cuidado é o primeiro passo para fazer uma escolha segura e eficiente.</p>
<p>A medicina do emagrecimento é uma área que se consolidou nas últimas décadas à medida que ficou claro que a obesidade é uma doença crônica com causas complexas — e que exige uma abordagem médica, não apenas de força de vontade ou dieta.</p>
<h2>O que faz uma médica de emagrecimento</h2>
<p>Diferente de um plano de dieta genérico, o atendimento médico começa com uma investigação. A ideia é entender por que aquela pessoa específica está com dificuldade de perder peso — e não apenas prescrever um protocolo igual para todo mundo.</p>
<p>Na prática, isso envolve:</p>
<ul>
  <li><strong>Avaliação da composição corporal por bioimpedância</strong> — análise precisa de gordura, músculo, hidratação e metabolismo de repouso</li>
  <li><strong>Histórico de tentativas anteriores</strong> — o que funcionou, o que não funcionou e por quê</li>
  <li><strong>Avaliação de condições associadas</strong> — hipertensão, diabetes, apneia do sono, síndrome dos ovários policísticos</li>
  <li><strong>Fatores comportamentais e emocionais</strong> — padrão de sono, nível de estresse, relação com a alimentação</li>
</ul>
<h2>Como funciona o tratamento na prática</h2>
<p>Após a avaliação inicial, é construído um plano individualizado. O acompanhamento é feito em consultas regulares, onde o plano é ajustado conforme o progresso — porque o metabolismo muda ao longo do tratamento e a estratégia precisa evoluir junto.</p>
<p>É um processo, não uma solução rápida. Nos primeiros dois a três meses, o foco é entender a resposta do organismo e ajustar o plano. Resultados consistentes aparecem nesse período, mas é na marca dos seis a doze meses que o impacto na saúde se consolida.</p>
<!--CTA-->
<h2>Por que o atendimento presencial faz diferença</h2>
<p>O atendimento presencial permite uma avaliação muito mais completa. A bioimpedância, por exemplo, exige presença física e equipamento calibrado. Além disso, a relação médico-paciente se aprofunda quando há contato direto — fundamental em um tratamento que envolve aspectos emocionais e comportamentais.</p>
<p>Para quem está em São José ou na Grande Florianópolis, a Clínica da Dra. Isabel Aragão (CRM-SC 26139) oferece atendimento presencial com equipe completa, incluindo a Enf. Maria Fernanda Loccioni.</p>
<h2>O que esperar nos primeiros meses</h2>
<p>O objetivo não é só a balança. É melhorar a composição corporal — perder gordura enquanto preserva músculo —, regularizar os indicadores metabólicos e criar uma base que sustente o resultado a longo prazo. Com acompanhamento médico adequado, o resultado que vem é o resultado que fica.</p>`,
  },
  {
    slug: 'obesidade-e-uma-doenca',
    num: 2,
    title: 'Obesidade é uma Doença — O Que Isso Muda no Tratamento para Emagrecer',
    shortTitle: 'Obesidade é uma Doença',
    intro: 'Desde 1997, a OMS classifica a obesidade como doença crônica. Mas o que isso realmente muda na forma de tratar? A resposta transforma completamente a abordagem — e o resultado.',
    category: 'Ciência',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Entenda por que a obesidade é classificada como doença crônica pela OMS e como isso muda o tratamento: da culpa para a ciência, do esforço solitário para o acompanhamento médico.',
    related: ['por-que-dieta-sozinha-falha', 'hormonios-ganho-de-peso', 'quando-procurar-medico-para-emagrecer', 'como-funciona-acompanhamento-medico-emagrecimento'],
    content: `
<p>A Organização Mundial da Saúde classifica a obesidade como doença crônica desde 1997. Mas essa definição ainda não chegou ao entendimento popular — e isso tem consequências sérias na forma como as pessoas buscam (ou não buscam) tratamento.</p>
<p>Quando tratamos obesidade como "falta de disciplina", a resposta óbvia é "se esforce mais". Quando entendemos que é uma doença com causas biológicas, genéticas e ambientais, a resposta muda completamente — e os resultados também.</p>
<h2>O que a ciência diz sobre as causas do excesso de peso</h2>
<p>O peso corporal é regulado por sistemas complexos que envolvem hormônios, genética, microbioma intestinal, sono, estresse e muito mais. Alguns exemplos concretos:</p>
<ul>
  <li><strong>Genética:</strong> estudos com gêmeos indicam que entre 40% e 70% da variação no peso corporal tem componente genético</li>
  <li><strong>Hormônios da fome:</strong> a grelina (hormônio que dá fome) e a leptina (que dá saciedade) funcionam de forma diferente em pessoas com obesidade — o cérebro literalmente não recebe o sinal de "estou satisfeita"</li>
  <li><strong>Set point metabólico:</strong> o organismo tem um "ponto de ajuste" de peso que defende ativamente — quando você emagrece, o metabolismo desacelera e a fome aumenta para tentar recuperar</li>
  <li><strong>Microbioma:</strong> a composição da flora intestinal influencia a absorção de calorias e a produção de substâncias que afetam o apetite</li>
</ul>
<h2>Por que isso não é desculpa — é biologia</h2>
<p>Entender que há causas biológicas não significa que não há nada a fazer. Significa que a abordagem precisa ser adequada à causa. Tratar uma infecção com "força de vontade" não funciona — é preciso antibiótico. Da mesma forma, tratar obesidade apenas com dieta restritiva ignora os mecanismos que a mantêm.</p>
<!--CTA-->
<h2>O que muda quando a obesidade é tratada como doença</h2>
<p>Quando a abordagem é médica, a investigação começa pelas causas. Há resistência à insulina? Alteração tireoidiana? Privação de sono crônica? Cada um desses fatores pede uma estratégia diferente — e uma dieta genérica não vai resolver nenhum deles de forma eficiente.</p>
<p>Além disso, o acompanhamento médico permite ajustar o tratamento conforme o organismo responde. O metabolismo não é estático — e o plano de tratamento também não pode ser.</p>
<h2>Da culpa para o cuidado</h2>
<p>Talvez a mudança mais importante que vem de entender a obesidade como doença seja essa: substituir a culpa pelo cuidado. Você não falhou porque não tem força de vontade. Você estava enfrentando uma condição complexa sem o suporte adequado. Com o tratamento certo, o resultado é diferente.</p>`,
  },
  {
    slug: 'bioimpedancia-o-que-e',
    num: 3,
    title: 'Bioimpedância: O Que É, Para Que Serve e Como Interpretar o Resultado',
    shortTitle: 'Bioimpedância: O Que É e Como Interpretar',
    intro: 'A balança mostra um número. A bioimpedância mostra o que está por trás desse número — quanto é gordura, quanto é músculo e o que isso significa para a sua saúde.',
    category: 'Exames',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Bioimpedância: o que é, como funciona, quais métricas importam (massa magra, gordura visceral, TMB) e como interpretar o laudo. Exame realizado na Clínica Dra. Isabel Aragão em São José/SC.',
    related: ['bioimpedancia-sao-jose-sc', 'medica-emagrecimento-sao-jose', 'primeira-consulta-medica-emagrecimento', 'perda-de-peso-saudavel-quantos-kg-por-mes'],
    content: `
<p>A balança é um instrumento limitado. Ela mostra um número total, mas não revela o que compõe esse peso. Você pode estar perdendo músculo e ganhando gordura e a balança mostrar o mesmo valor — ou até menos. A bioimpedância resolve esse problema.</p>
<p>É um exame simples, rápido e indolor que analisa a composição corporal com muito mais precisão do que qualquer balança convencional.</p>
<h2>Como funciona a bioimpedância</h2>
<p>O exame funciona através da passagem de uma corrente elétrica de baixíssima intensidade pelo corpo — completamente imperceptível. A velocidade com que essa corrente passa varia conforme o tipo de tecido: gordura é má condutora (a corrente passa devagar), músculo e água são bons condutores (a corrente passa rápido). A partir dessa diferença, o equipamento calcula a composição do seu corpo.</p>
<h2>O que a bioimpedância mede</h2>
<ul>
  <li><strong>Massa de gordura (kg e %):</strong> quanto do seu peso é tecido adiposo — o número mais importante do relatório</li>
  <li><strong>Massa muscular / massa magra:</strong> peso dos músculos, ossos e órgãos — o que você quer preservar ao emagrecer</li>
  <li><strong>Gordura visceral:</strong> gordura que envolve os órgãos internos, associada a risco cardiovascular e metabólico</li>
  <li><strong>Taxa metabólica basal (TMB):</strong> quantas calorias seu corpo gasta em repouso — fundamental para planejar o deficit calórico certo</li>
  <li><strong>Hidratação:</strong> percentual de água corporal — baixa hidratação pode inflar o peso e mascarar o progresso real</li>
  <li><strong>Idade metabólica:</strong> estimativa da "idade" do seu metabolismo comparada à média populacional</li>
</ul>
<!--CTA-->
<h2>Como interpretar o resultado</h2>
<p>Os parâmetros de referência variam por sexo, idade e biotipo. O laudo traz faixas de classificação, mas o mais importante não é um único exame — é a evolução ao longo do tempo. Um bom resultado de bioimpedância é aquele que mostra redução de gordura com manutenção (ou aumento) de massa muscular.</p>
<p>A gordura visceral merece atenção especial: valores elevados estão associados a resistência à insulina, inflamação e risco cardiovascular, independentemente do peso total.</p>
<h2>Como se preparar para o exame</h2>
<p>Para um resultado preciso: evite exercício físico intenso nas 12 horas anteriores; mantenha hidratação normal (não exagere na água); evite álcool no dia anterior; realize o exame sempre no mesmo horário do dia; mulheres devem evitar o período menstrual (retenção de líquidos altera os valores). A Dra. Isabel orienta sobre a preparação ideal na consulta inicial.</p>
<h2>Com que frequência fazer</h2>
<p>Durante o tratamento, a bioimpedância é realizada a cada 30 a 60 dias — prazo suficiente para que mudanças reais sejam detectadas. É ela que guia os ajustes no plano de tratamento.</p>`,
  },
  {
    slug: 'endocrinologista-nutrologo-medico-emagrecimento',
    num: 4,
    title: 'Endocrinologista, Nutrólogo ou Médico do Emagrecimento — Qual a Diferença?',
    shortTitle: 'Endocrinologista, Nutrólogo ou Médico do Emagrecimento?',
    intro: 'Você quer tratar o peso com acompanhamento médico, mas não sabe qual especialidade procurar. A confusão é comum — e entender as diferenças ajuda a fazer a escolha certa para o seu caso.',
    category: 'Especialidades',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Diferença entre endocrinologista, nutrólogo e médico de emagrecimento: o que cada um trata, quando procurar cada especialidade e qual é o mais indicado para tratamento de obesidade.',
    related: ['medica-emagrecimento-sao-jose', 'quando-procurar-medico-para-emagrecer', 'como-funciona-acompanhamento-medico-emagrecimento', 'primeira-consulta-medica-emagrecimento'],
    content: `
<p>Quando a decisão de buscar acompanhamento médico para emagrecer finalmente é tomada, a próxima dúvida quase sempre é: qual médico procurar? Endocrinologista? Nutrólogo? Clínico com foco em obesidade? A diferença importa — e entendê-la evita frustração.</p>
<h2>Endocrinologista</h2>
<p>O endocrinologista é especialista em glândulas e hormônios: tireoide, suprarrenais, pâncreas, hipófise. É o médico ideal quando há uma condição hormonal que precisa ser investigada ou tratada — hipotireoidismo, síndrome dos ovários policísticos, diabetes mellitus, síndrome de Cushing.</p>
<p>Muitas pessoas com sobrepeso buscam o endocrinologista esperando encontrar uma causa hormonal para o peso. Em alguns casos, ela existe — e o endocrinologista é quem vai identificar e tratar. Mas a maioria dos casos de obesidade não tem uma causa endócrina isolada. Nesse cenário, o endocrinologista pode ser uma peça do tratamento, mas não necessariamente o centro.</p>
<h2>Nutrólogo</h2>
<p>O nutrólogo é médico especializado em nutrição clínica — na forma como os alimentos afetam o organismo. Trata deficiências nutricionais, transtornos alimentares, necessidades nutricionais especiais (idosos, atletas, pacientes com doenças crônicas) e pode acompanhar o emagrecimento com foco na parte alimentar do tratamento.</p>
<p>Importante: nutrólogo é médico (tem CRM); nutricionista é profissional de saúde com formação específica (tem CRN). São profissões distintas e complementares.</p>
<!--CTA-->
<h2>Médico com foco em emagrecimento e obesidade</h2>
<p>Não existe uma especialidade médica chamada "medicina do emagrecimento" reconhecida pelo CFM como especialidade formal. O que existe são médicos de diferentes formações — clínica médica, endocrinologia, nutrologia — que desenvolveram expertise específica no tratamento da obesidade.</p>
<p>Esse é o perfil mais completo para quem busca tratamento de emagrecimento: um médico que avalia a composição corporal, investiga as causas do excesso de peso (hormonais, metabólicas, comportamentais), monta um plano individualizado e acompanha a evolução ao longo do tempo.</p>
<h2>Qual escolher para o meu caso?</h2>
<ul>
  <li>Se você suspeita de condição hormonal específica (tireoide, SOP, diabetes) → <strong>endocrinologista</strong></li>
  <li>Se você tem deficiência nutricional ou transtorno alimentar → <strong>nutrólogo</strong></li>
  <li>Se você quer tratamento completo de emagrecimento com acompanhamento próximo → <strong>médico com foco em obesidade e emagrecimento</strong></li>
  <li>Muitas vezes, a abordagem mais eficiente combina mais de um profissional em equipe</li>
</ul>
<p>A Dra. Isabel Aragão (CRM-SC 26139) atua com foco em emagrecimento e obesidade, com avaliação completa que inclui bioimpedância e análise individualizada. O objetivo é entender por que cada paciente está com dificuldade de emagrecer — e não aplicar um protocolo genérico.</p>`,
  },
  {
    slug: 'por-que-dieta-sozinha-falha',
    num: 5,
    title: 'Por Que a Dieta Sozinha Quase Sempre Falha — O Que a Ciência Explica',
    shortTitle: 'Por Que a Dieta Sozinha Quase Sempre Falha',
    intro: 'Você já fez dieta, perdeu peso e recuperou depois? Isso acontece com a maioria das pessoas — e a ciência explica exatamente por quê. A resposta não tem nada a ver com força de vontade.',
    category: 'Ciência',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Por que a dieta sozinha quase sempre falha: adaptação metabólica, set point, hormônios da fome e o que a ciência diz sobre emagrecimento sustentável com acompanhamento médico.',
    related: ['obesidade-e-uma-doenca', 'hormonios-ganho-de-peso', 'quando-procurar-medico-para-emagrecer', 'perda-de-peso-saudavel-quantos-kg-por-mes'],
    content: `
<p>Pesquisas indicam que entre 80% e 95% das pessoas que emagrecem com dieta recuperam o peso em cinco anos. Esse número assustador não é resultado de preguiça ou falta de disciplina. É resultado de como o corpo humano funciona — e de como a dieta restritiva interage com essa biologia.</p>
<h2>O que acontece no corpo quando você faz dieta</h2>
<p>Quando você reduz drasticamente as calorias, o seu organismo interpreta isso como escassez de alimento — uma ameaça à sobrevivência. A resposta é imediata e automática:</p>
<ul>
  <li><strong>Metabolismo basal cai:</strong> o corpo passa a gastar menos energia em repouso para "economizar combustível"</li>
  <li><strong>Grelina sobe:</strong> o hormônio da fome aumenta — literalmente sentindo mais fome do que antes da dieta</li>
  <li><strong>Leptina cai:</strong> o hormônio da saciedade diminui — demorando mais para se sentir satisfeita</li>
  <li><strong>Massa muscular diminui:</strong> em dietas muito restritivas, o corpo usa músculo como combustível além da gordura</li>
</ul>
<p>Esse conjunto de respostas é chamado de <strong>adaptação metabólica</strong> — e ele persiste por muito tempo após o fim da dieta. É por isso que quem faz dieta tende a recuperar mais rápido do que perdeu.</p>
<h2>O set point: o peso que o seu corpo quer ter</h2>
<p>O organismo possui um "set point" — um peso de referência que ele defende ativamente. Quando você emagrece abaixo desse ponto, o corpo usa todos os mecanismos disponíveis para voltar a ele: aumenta a fome, reduz o metabolismo, diminui a disposição para se mover.</p>
<p>Dietas sozinhas não reprogramam o set point — elas lutam contra ele. E o corpo quase sempre vence essa batalha.</p>
<!--CTA-->
<h2>Por que isso não é desculpa</h2>
<p>Entender os mecanismos biológicos não significa que não há nada a fazer. Significa que a abordagem precisa ser diferente. O tratamento médico do emagrecimento atua justamente nesses pontos:</p>
<ul>
  <li>Estratégias que preservam massa muscular enquanto perdem gordura — reduzindo a queda metabólica</li>
  <li>Monitoramento da composição corporal por bioimpedância — diferenciando perda de gordura de perda de músculo</li>
  <li>Ajustes regulares no plano conforme o metabolismo responde</li>
  <li>Quando indicado, recursos que atuam diretamente nos mecanismos hormonais da fome e saciedade</li>
</ul>
<h2>O que a ciência recomenda</h2>
<p>Revisões sistemáticas mostram que a combinação de intervenção médica com mudanças de estilo de vida gera resultados significativamente melhores a longo prazo do que dieta isolada. A chave não é mais restrição — é uma estratégia inteligente que trabalha com a biologia, não contra ela.</p>
<p>Se você já tentou mais de uma vez com dieta sozinha, o problema não foi o esforço. Foi a falta de suporte adequado para o que o seu corpo precisa.</p>`,
  },
  {
    slug: 'como-funciona-acompanhamento-medico-emagrecimento',
    num: 6,
    title: 'Como Funciona o Acompanhamento Médico para Emagrecer (Do Primeiro ao Último Passo)',
    shortTitle: 'Como Funciona o Acompanhamento Médico',
    intro: 'O que acontece depois que você marca a consulta? Como são as revisitas? Quando o plano muda? Entenda todos os passos do acompanhamento médico para emagrecimento — do primeiro ao último.',
    category: 'Tratamento',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Como funciona o acompanhamento médico para emagrecer: da primeira consulta às revisitas, bioimpedância, ajustes de plano e o que esperar em 3, 6 e 12 meses de tratamento.',
    related: ['primeira-consulta-medica-emagrecimento', 'medica-emagrecimento-sao-jose', 'bioimpedancia-o-que-e', 'quando-procurar-medico-para-emagrecer'],
    content: `
<p>Quando as pessoas pensam em acompanhamento médico para emagrecer, muitas imaginam uma consulta onde o médico passa uma dieta e um remédio — e pronto. Na prática, um tratamento bem feito é muito mais do que isso.</p>
<h2>A primeira consulta</h2>
<p>A primeira consulta costuma durar entre 45 minutos e 1 hora. O objetivo é fazer uma avaliação completa e já começar a montar um plano. Isso inclui:</p>
<ul>
  <li><strong>Bioimpedância:</strong> composição corporal completa — gordura, músculo, hidratação, taxa metabólica basal</li>
  <li><strong>Anamnese detalhada:</strong> histórico de peso, tentativas anteriores, histórico familiar, uso de medicamentos, padrão de sono e estresse</li>
  <li><strong>Revisão de exames recentes:</strong> se você trouxer exames dos últimos 12 meses, a médica já os inclui na avaliação do dia</li>
  <li><strong>Avaliação de comorbidades:</strong> pressão arterial, condições associadas ao excesso de peso</li>
</ul>
<p>Você sai da primeira consulta com uma avaliação completa e uma orientação inicial de tratamento. Trazer exames recentes ajuda a tornar esse primeiro encontro mais produtivo.</p>
<!--CTA-->
<h2>As revisitas mensais ou bimestrais</h2>
<p>O acompanhamento regular é o coração do tratamento. Em cada revisita:</p>
<ul>
  <li>Nova bioimpedância para avaliar a composição corporal — não só o peso</li>
  <li>Avaliação dos resultados dos exames periódicos</li>
  <li>Ajuste do plano conforme a resposta do organismo</li>
  <li>Escuta dos desafios do período — o que funcionou, o que está difícil</li>
</ul>
<p>Esse ajuste regular é o que diferencia o resultado sustentável do resultado temporário. O metabolismo muda ao longo do tratamento — o plano não pode ser estático.</p>
<h2>O que esperar em cada fase</h2>
<ul>
  <li><strong>1 a 3 meses:</strong> fase de adaptação. O corpo responde às mudanças; os exames iniciam normalização. A bioimpedância mostra as primeiras mudanças de composição.</li>
  <li><strong>3 a 6 meses:</strong> consolidação dos resultados. A perda de gordura é consistente; a massa muscular está sendo preservada. Indicadores metabólicos em melhora visível.</li>
  <li><strong>6 a 12 meses:</strong> resultado consolidado. Foco na manutenção, reprogramação do set point metabólico e construção dos hábitos de longo prazo.</li>
</ul>
<p>O tratamento não tem uma data de fim no sentido de "parar de cuidar da saúde". Mas o acompanhamento intensivo tende a ser maior nos primeiros 12 meses, quando o processo de reprogramação está ativo.</p>`,
  },
  {
    slug: 'glp1-medicamentos-injetaveis-emagrecer',
    num: 7,
    title: 'GLP-1: O Que São os Medicamentos Injetáveis para Emagrecer e Como Funcionam',
    shortTitle: 'GLP-1: Medicamentos Injetáveis para Emagrecer',
    intro: 'Você já ouviu falar nos medicamentos injetáveis para emagrecimento que viraram notícia nos últimos anos. Entenda o que são, como funcionam e — o mais importante — quem realmente se beneficia deles.',
    category: 'Medicamentos',
    readTime: '6 min',
    date: 'Julho 2026',
    metaDesc: 'O que são os análogos de GLP-1, como funcionam (saciedade, insulina, esvaziamento gástrico), quem pode usar, efeitos colaterais e por que só funcionam com acompanhamento médico.',
    related: ['quando-procurar-medico-para-emagrecer', 'por-que-dieta-sozinha-falha', 'como-funciona-acompanhamento-medico-emagrecimento', 'emagrecimento-apos-40-anos'],
    content: `
<p>Nos últimos anos, uma classe de medicamentos injetáveis para emagrecimento ganhou grande visibilidade — e gerou tanto entusiasmo quanto confusão. São os análogos de GLP-1, e entender como funcionam é essencial para ter expectativas realistas sobre eles.</p>
<h2>O que é o GLP-1</h2>
<p>GLP-1 (Glucagon-Like Peptide 1) é um hormônio produzido naturalmente pelo intestino após a refeição. Ele atua em múltiplos sistemas:</p>
<ul>
  <li><strong>No pâncreas:</strong> estimula a produção de insulina (reduz o açúcar no sangue) e inibe o glucagon</li>
  <li><strong>No estômago:</strong> retarda o esvaziamento gástrico — você fica satisfeita por mais tempo após comer</li>
  <li><strong>No cérebro:</strong> atua em regiões relacionadas ao apetite, reduzindo a fome e aumentando a sensação de saciedade</li>
</ul>
<p>Os medicamentos análogos de GLP-1 são moléculas desenvolvidas para imitar e potencializar esse efeito do hormônio natural — com duração muito maior no organismo.</p>
<h2>Como funcionam na prática</h2>
<p>Na prática, quem usa esses medicamentos costuma relatar uma redução significativa da fome e uma saciedade que aparece mais rápido nas refeições. A comida ainda tem sabor, mas o interesse em comer diminui. Para muitas pessoas com obesidade — onde os mecanismos de fome e saciedade estão desregulados — esse efeito é transformador.</p>
<p>Os estudos clínicos mostram redução média de 10% a 15% do peso corporal com uso adequado, associado a mudanças no estilo de vida. Em alguns perfis de pacientes, os resultados são ainda mais expressivos.</p>
<!--CTA-->
<h2>Quem pode se beneficiar</h2>
<p>A indicação desses medicamentos é médica e individualizada. De forma geral, são considerados para pacientes com:</p>
<ul>
  <li>IMC igual ou superior a 30 (obesidade grau I ou mais)</li>
  <li>IMC entre 27 e 30 com comorbidades associadas (diabetes tipo 2, hipertensão, dislipidemia)</li>
  <li>Histórico de tentativas de emagrecimento sem resultado sustentado</li>
  <li>Ausência de contraindicações específicas (que a avaliação médica identifica)</li>
</ul>
<h2>O que eles não fazem</h2>
<p>Os análogos de GLP-1 não são uma solução isolada. Sem mudanças no estilo de vida — alimentação, atividade física, sono —, os resultados são limitados e pouco duradouros. Além disso, efeitos colaterais gastrointestinais (náusea, vômito, constipação) são comuns especialmente no início, e a dose precisa ser ajustada gradualmente com supervisão médica.</p>
<p><strong>Atenção:</strong> a compra desses medicamentos sem prescrição ou sem acompanhamento médico é perigosa. A avaliação prévia é essencial para confirmar a indicação, identificar contraindicações e garantir uso seguro.</p>
<h2>Faz sentido para o meu caso?</h2>
<p>Só a avaliação médica responde essa pergunta. Na consulta com a Dra. Isabel Aragão (CRM-SC 26139), é feita uma investigação completa antes de qualquer decisão de tratamento. Quando esse recurso é indicado, faz parte de uma estratégia maior — não é o tratamento em si.</p>`,
  },
  {
    slug: 'emagrecimento-apos-40-anos',
    num: 8,
    title: 'Emagrecimento Após os 40 Anos: Por Que Fica Mais Difícil e O Que Fazer',
    shortTitle: 'Emagrecimento Após os 40 Anos',
    intro: 'O que funcionava aos 30 não funciona mais. Se você está acima dos 40 e sente que o corpo mudou as regras do jogo, você está certa — e tem explicação científica para isso.',
    category: 'Saúde',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Por que emagrecer depois dos 40 fica mais difícil: mudanças hormonais, sarcopenia, metabolismo mais lento. O que fazer para perder gordura preservando músculo com acompanhamento médico.',
    related: ['hormonios-ganho-de-peso', 'por-que-dieta-sozinha-falha', 'bioimpedancia-o-que-e', 'quando-procurar-medico-para-emagrecer'],
    content: `
<p>É muito comum ouvir de pacientes acima dos 40: "Eu como a mesma coisa de antes e engordei. Faço a mesma academia e não emagreço mais." Não é impressão. É biologia.</p>
<p>A partir dos 40 anos, uma série de mudanças acontece no organismo que torna o emagrecimento genuinamente mais difícil — e que exige uma abordagem diferente da que funcionava antes.</p>
<h2>O que muda no corpo após os 40</h2>
<ul>
  <li><strong>Sarcopenia:</strong> perda natural de massa muscular que começa por volta dos 35 anos e acelera após os 40. Menos músculo = metabolismo mais lento, pois o músculo é o tecido que mais consome energia</li>
  <li><strong>Mudanças hormonais:</strong> queda de estrogênio (na perimenopausa/menopausa) e progesterona nas mulheres; queda de testosterona nos homens — todos esses hormônios influenciam a distribuição de gordura e a massa muscular</li>
  <li><strong>Redistribuição de gordura:</strong> a gordura tende a se acumular mais na região abdominal — a mais preocupante do ponto de vista de saúde cardiovascular e metabólica</li>
  <li><strong>Resistência à insulina:</strong> mais comum após os 40, torna mais difícil usar a glicose como energia e facilita o acúmulo de gordura</li>
  <li><strong>Piora do sono:</strong> sono mais fragmentado é comum nessa faixa etária, e sono ruim aumenta a grelina (fome) e reduz a leptina (saciedade)</li>
</ul>
<h2>Por que as estratégias antigas não funcionam mais</h2>
<p>Dietas muito restritivas aceleradas, típicas de quem quer perder peso rápido, são especialmente prejudiciais após os 40. Com menos músculo para preservar e metabolismo mais lento, o corpo perde músculo com muito mais facilidade — piorando ainda mais o metabolismo e criando um ciclo difícil de reverter.</p>
<!--CTA-->
<h2>O que funciona após os 40</h2>
<p>A abordagem precisa mudar. Os pilares de um tratamento eficiente nessa faixa etária:</p>
<ul>
  <li><strong>Preservar massa muscular:</strong> não só a quantidade de gordura que perde, mas a composição — a bioimpedância acompanha isso</li>
  <li><strong>Avaliação clínica completa:</strong> identificar condições que podem estar dificultando o processo, como hipotireoidismo ou resistência à insulina</li>
  <li><strong>Proteína adequada:</strong> ingestão de proteína é ainda mais importante após os 40 para preservar músculo</li>
  <li><strong>Treinamento de força:</strong> é o principal estímulo para manutenção e recuperação de massa muscular</li>
  <li><strong>Qualidade do sono:</strong> sono adequado tem impacto direto nos hormônios do apetite</li>
</ul>
<h2>A avaliação médica importa mais aqui</h2>
<p>Após os 40, a avaliação médica completa é ainda mais importante antes de começar um tratamento. Hipotireoidismo, resistência à insulina, deficiências de vitaminas e minerais — condições comuns nessa faixa etária — interferem diretamente no peso e precisam ser diagnosticadas e tratadas. A Dra. Isabel Aragão (CRM-SC 26139) faz essa avaliação na primeira consulta.</p>`,
  },
  {
    slug: 'hormonios-ganho-de-peso',
    num: 9,
    title: 'O Papel dos Hormônios no Ganho de Peso — Insulina, Leptina e Cortisol Explicados',
    shortTitle: 'O Papel dos Hormônios no Ganho de Peso',
    intro: 'O peso não é determinado só pelo que você come. Hormônios como insulina, leptina, cortisol e grelina influenciam diretamente o acúmulo de gordura — e ignorá-los é um erro comum em tratamentos que falham.',
    category: 'Ciência',
    readTime: '6 min',
    date: 'Julho 2026',
    metaDesc: 'Como a insulina, leptina, cortisol, grelina e a tireoide influenciam o ganho de peso. O que é resistência à insulina e à leptina, e como o tratamento médico aborda esses fatores.',
    related: ['obesidade-e-uma-doenca', 'por-que-dieta-sozinha-falha', 'emagrecimento-apos-40-anos', 'quando-procurar-medico-para-emagrecer'],
    content: `
<p>Quando falamos em emagrecimento, a equação "coma menos, gaste mais" captura apenas uma parte da realidade. O que poucos explicam é que hormônios regulam diretamente o quanto você come, onde o corpo armazena gordura e como o metabolismo funciona. Ignorar esse sistema é a principal razão pela qual tantos tratamentos falham.</p>
<h2>Insulina: o hormônio do armazenamento</h2>
<p>A insulina é produzida pelo pâncreas em resposta à glicose no sangue. Ela "abre a porta" das células para receber essa glicose como energia. O problema começa quando há exposição crônica a níveis elevados de insulina — geralmente por dietas ricas em carboidratos refinados e açúcar:</p>
<ul>
  <li>As células ficam menos sensíveis à insulina (resistência à insulina)</li>
  <li>O pâncreas produz mais insulina para compensar</li>
  <li>Com insulina elevada, o corpo armazena mais gordura e dificulta sua queima</li>
  <li>A resistência à insulina está diretamente associada ao ganho de gordura abdominal</li>
</ul>
<h2>Leptina: quando o cérebro não ouve a saciedade</h2>
<p>A leptina é produzida pelo tecido adiposo e sinaliza ao cérebro que as reservas de energia estão adequadas — o sinal de "pare de comer". Em pessoas com obesidade, há um fenômeno chamado <strong>resistência à leptina</strong>: o cérebro recebe muito leptina (pois há muito tecido gorduroso), mas para de ouvi-la. O resultado é que a pessoa não sente saciedade adequada mesmo tendo reservas energéticas abundantes.</p>
<!--CTA-->
<h2>Grelina: o hormônio da fome</h2>
<p>A grelina é produzida principalmente pelo estômago e sinaliza fome ao cérebro. Ela sobe antes das refeições e cai depois. Em pessoas que fazem dietas restritivas, a grelina fica cronicamente elevada — o organismo responde à restrição calórica aumentando o sinal de fome. É por isso que ficar com fome não é "frescura": é um hormônio dizendo ativamente ao cérebro para comer.</p>
<h2>Cortisol: o hormônio do estresse e da gordura abdominal</h2>
<p>O cortisol é o hormônio do estresse. Em situações de estresse crônico, os níveis de cortisol ficam persistentemente elevados, o que:</p>
<ul>
  <li>Aumenta o apetite, especialmente por alimentos calóricos</li>
  <li>Favorece o acúmulo de gordura visceral (abdominal)</li>
  <li>Interfere na qualidade do sono — que por sua vez afeta grelina e leptina</li>
  <li>Contribui para resistência à insulina</li>
</ul>
<h2>Tireoide: o regulador do metabolismo</h2>
<p>Os hormônios da tireoide controlam o ritmo metabólico basal. Quando a tireoide está funcionando abaixo do ideal (hipotireoidismo), o metabolismo desacelera, o cansaço aumenta e o peso sobe — mesmo com hábitos alimentares inalterados. É uma das condições mais comuns e mais subdiagnosticadas entre mulheres.</p>
<h2>Por que isso importa para o tratamento</h2>
<p>Tratar o peso sem investigar esses sistemas hormonais é como tentar arrumar o telhado sem olhar para os alicerces. A avaliação médica completa identifica quais desses fatores estão ativos em cada paciente — e o plano de tratamento endereça especificamente o que foi encontrado.</p>`,
  },
  {
    slug: 'perda-de-peso-saudavel-quantos-kg-por-mes',
    num: 10,
    title: 'Quantos Kg por Mês é Saudável Perder? O Ritmo Seguro e os Riscos da Pressa',
    shortTitle: 'Quanto Kg por Mês é Seguro Emagrecer',
    intro: 'Emagrecer rápido parece ótimo, até você descobrir o preço. Perda de cabelo, perda de músculo, cálculos na vesícula e efeito sanfona. Entenda por que o ritmo certo é fundamental.',
    category: 'Saúde',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Quantos kg por mês é saudável perder? O ritmo seguro (0,5 a 1 kg por semana), os riscos de emagrecer rápido (músculo, cabelo, vesícula) e como saber se você perde gordura ou água.',
    related: ['bioimpedancia-o-que-e', 'por-que-dieta-sozinha-falha', 'como-funciona-acompanhamento-medico-emagrecimento', 'emagrecimento-apos-40-anos'],
    content: `
<p>Toda paciente quer emagrecer o mais rápido possível. É compreensível — carregar peso extra é desconfortável, e a motivação no início do tratamento costuma ser alta. Mas a velocidade importa: emagrecer muito rápido cobra um preço que muitas pessoas não sabem que estão pagando.</p>
<h2>O ritmo saudável segundo as evidências</h2>
<p>As principais diretrizes de medicina da obesidade recomendam uma perda de peso de <strong>0,5 a 1 kg por semana</strong>, o que equivale a <strong>2 a 4 kg por mês</strong>. Esse ritmo:</p>
<ul>
  <li>Permite que a maior parte do peso perdido seja gordura, não músculo</li>
  <li>É sustentável a longo prazo sem adaptação metabólica severa</li>
  <li>Reduz o risco de complicações associadas ao emagrecimento rápido</li>
  <li>Favorece resultados mantidos após o término do tratamento ativo</li>
</ul>
<p>Em alguns casos específicos, com supervisão médica rigorosa, ritmos um pouco mais acelerados são conduzidos com segurança — mas são exceção, não regra.</p>
<h2>O que acontece quando você perde peso muito rápido</h2>
<p>Dietas muito restritivas (<1.200 kcal/dia sem supervisão) e métodos radicais têm consequências documentadas:</p>
<ul>
  <li><strong>Perda de massa muscular:</strong> em jejuns e dietas extremas, até 30-40% da perda de peso pode ser músculo — não gordura. Menos músculo = metabolismo permanentemente mais lento</li>
  <li><strong>Queda de cabelo (eflúvio telógeno):</strong> ocorre 2 a 4 meses após uma dieta muito restritiva e pode durar até 6 meses</li>
  <li><strong>Cálculos biliares:</strong> emagrecimento rápido aumenta significativamente o risco de formação de pedras na vesícula</li>
  <li><strong>Deficiências nutricionais:</strong> vitaminas, minerais e proteínas ficam abaixo do necessário</li>
  <li><strong>Efeito sanfona acelerado:</strong> quanto mais rápido se perde, mais rápido se recupera</li>
</ul>
<!--CTA-->
<h2>Peso ≠ gordura: a confusão que atrapalha</h2>
<p>A balança mede peso total: gordura, músculo, água, ossos. Você pode perder 3 kg de músculo e água e ganhar 1 kg de gordura — e a balança vai mostrar que você "emagreceu" 2 kg. A bioimpedância desfaz essa confusão: ela mede separadamente cada componente e mostra se o processo está indo no caminho certo.</p>
<p>Por isso, o acompanhamento médico com bioimpedância regular é tão importante: ele garante que a perda que está acontecendo é a perda que importa.</p>
<h2>O número que não aparece na balança</h2>
<p>A meta não é um número na balança — é uma composição corporal mais saudável. Com o tratamento adequado, é possível reduzir gordura enquanto mantém (ou até aumenta) massa muscular. Isso não se consegue com dietas radicais: se consegue com um plano individualizado e bem monitorado.</p>`,
  },
  {
    slug: 'primeira-consulta-medica-emagrecimento',
    num: 11,
    title: 'Primeira Consulta com Médica de Emagrecimento: O Que Acontece, O Que Levar e O Que Esperar',
    shortTitle: 'Primeira Consulta: O Que Esperar',
    intro: 'Marcar a primeira consulta é fácil. Saber o que vai acontecer lá dentro ajuda a chegar preparada — e aproveitar muito mais o tempo com a médica.',
    category: 'Tratamento',
    readTime: '4 min',
    date: 'Julho 2026',
    metaDesc: 'O que acontece na primeira consulta com médica de emagrecimento: bioimpedância, anamnese, avaliação completa, o que levar e o que esperar ao sair. Clínica Dra. Isabel Aragão — São José/SC.',
    related: ['medica-emagrecimento-sao-jose', 'como-funciona-acompanhamento-medico-emagrecimento', 'bioimpedancia-o-que-e', 'quando-procurar-medico-para-emagrecer'],
    content: `
<p>Muitas pessoas adiam a consulta porque não sabem o que vai acontecer — e o desconhecido gera ansiedade. Este artigo detalha exatamente o que você vai encontrar, para que você chegue preparada e aproveite ao máximo o tempo com a médica.</p>
<h2>O que levar na primeira consulta</h2>
<ul>
  <li><strong>Exames recentes</strong> (últimos 6 a 12 meses): glicemia, insulina, hemograma, perfil lipídico, TSH/T4, vitamina D, vitamina B12 — se tiver, ótimo. Se não tiver, não é problema</li>
  <li><strong>Lista de medicamentos</strong> em uso (inclusive suplementos, anticoncepcional, remédio para pressão)</li>
  <li><strong>Histórico de peso:</strong> quanto você pesava antes, quando começou a ganhar, quais tratamentos já tentou</li>
  <li>Roupas confortáveis — a bioimpedância é feita com a paciente de pé ou deitada sobre a balança de análise</li>
</ul>
<h2>O que acontece durante a consulta</h2>
<p><strong>Bioimpedância:</strong> realizada no início da consulta. Você fica descalça sobre o equipamento por cerca de 30 segundos. O laudo mostra composição corporal completa — gordura, músculo, hidratação, metabolismo basal.</p>
<p><strong>Anamnese:</strong> a médica vai perguntar sobre histórico de peso, tentativas anteriores, como é sua alimentação, sono, nível de estresse, atividade física, condições de saúde e uso de medicamentos. É uma conversa, não um interrogatório — e quanto mais honesta você for, melhor o plano que será montado.</p>
<p><strong>Exame físico básico:</strong> pressão arterial, avaliação geral do estado de saúde.</p>
<p><strong>Revisão de exames:</strong> se você trouxer exames recentes (dos últimos 12 meses), a médica já os inclui na avaliação do mesmo dia.</p>
<!--CTA-->
<h2>O que você vai ouvir que pode surpreender</h2>
<p>Uma coisa que muitas pacientes relatam da primeira consulta com a Dra. Isabel: a ausência de julgamento. Não há crítica sobre o peso, sobre tentativas anteriores que não funcionaram ou sobre escolhas alimentares. O objetivo é entender, não culpar — e construir juntas uma estratégia que funcione para a sua realidade.</p>
<h2>O que você vai sair com</h2>
<ul>
  <li>O laudo da bioimpedância explicado</li>
  <li>Uma avaliação completa do seu quadro de saúde</li>
  <li>Orientações iniciais de tratamento</li>
</ul>
<p>Você sai da primeira consulta com uma avaliação completa e uma orientação inicial de tratamento — não precisa esperar uma segunda consulta para começar.</p>
<h2>Dúvidas frequentes antes da consulta</h2>
<p><strong>"Tenho vergonha do meu peso."</strong> É a dúvida mais comum. E é completamente desnecessária. A médica já cuidou de pacientes com todos os perfis de peso e de trajetória — e o consultório é um espaço de acolhimento, não de julgamento.</p>
<p><strong>"Preciso chegar com tudo organizado?"</strong> Não. Venha como você está. Qualquer informação que faltar, a médica pergunta na consulta.</p>`,
  },
  {
    slug: 'quando-procurar-medico-para-emagrecer',
    num: 12,
    title: 'Quando Procurar um Médico para Emagrecer — Sinais de Que a Dieta Sozinha Não Basta',
    shortTitle: 'Quando Procurar um Médico para Emagrecer',
    intro: 'Você já tentou emagrecer mais de uma vez e sempre voltou ao ponto de partida? Isso não é falta de força de vontade — e este artigo explica por quê, e quando o acompanhamento médico muda tudo.',
    category: 'Emagrecimento',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Sinais de que chegou a hora de buscar acompanhamento médico para emagrecer: tentativas sem resultado, sensação de fome constante, IMC acima de 30, condições associadas. Dra. Isabel Aragão — São José/SC.',
    related: ['primeira-consulta-medica-emagrecimento', 'por-que-dieta-sozinha-falha', 'como-funciona-acompanhamento-medico-emagrecimento', 'hormonios-ganho-de-peso'],
    content: `
<p>Todo mundo sabe o que fazer para emagrecer, certo? Comer menos, se mexer mais. Parece simples. Então por que tanta gente tenta — com disciplina, com esforço real — e não consegue resultados duradouros?</p>
<p>A resposta está na biologia, não na força de vontade. E entender isso é o primeiro passo para sair do ciclo de tentativas frustradas.</p>
<h2>Por que a dieta sozinha quase sempre falha</h2>
<p>Quando você restringe calorias, o seu corpo entende que está passando por uma escassez. A resposta dele é automática: reduz o metabolismo, aumenta o hormônio da fome (grelina) e diminui o da saciedade (leptina). É um mecanismo de sobrevivência que evoluiu ao longo de milênios — e ele age contra você toda vez que você tenta emagrecer sem o suporte certo.</p>
<p>Isso explica por que tantas pessoas conseguem emagrecer no começo e depois empacam. Ou pior: emagrecem, param a dieta e recuperam tudo em poucos meses. <strong>Não é fraqueza — é fisiologia.</strong></p>
<h2>Sinais de que chegou a hora de buscar acompanhamento médico</h2>
<p>Nem todo mundo precisa de um médico para emagrecer. Mas para muitas pessoas, o acompanhamento médico é a diferença entre um resultado duradouro e mais um ciclo de frustração. Veja os sinais:</p>
<ul>
  <li><strong>Você já tentou mais de duas vezes</strong> com disciplina real e não sustentou o resultado por mais de 6 meses</li>
  <li><strong>Você perdeu peso, mas se sente pior:</strong> cansaço excessivo, queda de cabelo, irritabilidade, fome constante</li>
  <li><strong>A balança não se move</strong> mesmo fazendo &quot;tudo certo&quot; — pode indicar resistência à insulina ou hipotireoidismo</li>
  <li><strong>Seu IMC está acima de 30</strong> — nessa faixa, mudanças isoladas de estilo de vida têm taxa de sucesso baixa a longo prazo</li>
  <li><strong>Você tem condições associadas:</strong> pressão alta, diabetes tipo 2, apneia do sono, síndrome dos ovários policísticos</li>
  <li><strong>A sua relação com a comida causa sofrimento</strong> — ansiedade, culpa intensa, episódios de compulsão</li>
</ul>
<p>Se você se identificou com pelo menos dois desses pontos, o acompanhamento médico provavelmente vai mudar o seu resultado.</p>
<!--CTA-->
<h2>O que um médico de emagrecimento faz de diferente</h2>
<p>Uma consulta de emagrecimento não é chegar e sair com uma receita. É uma avaliação completa que investiga <em>por que</em> você está engordando — e não apenas <em>quanto</em> você está pesando.</p>
<ul>
  <li><strong>Bioimpedância:</strong> análise precisa de composição corporal — gordura, músculo, hidratação, metabolismo basal</li>
  <li><strong>Histórico metabólico:</strong> quantas vezes você emagreceu e engordou, como seu corpo respondeu</li>
  <li><strong>Exames laboratoriais:</strong> análise do estado metabólico geral para identificar condições que dificultam o emagrecimento</li>
  <li><strong>Fatores comportamentais:</strong> sono, estresse, padrões alimentares</li>
</ul>
<h2>Não espere mais</h2>
<p>Muitas pacientes chegam ao consultório depois de anos tentando sozinhas. Elas esperaram até o sobrepeso virar obesidade, até a pressão subir. O tratamento funciona em todos os estágios — mas é sempre mais fácil e mais eficiente quando começa antes.</p>
<p>Se você está pensando nisso há algum tempo, o melhor momento para dar o primeiro passo é agora.</p>`,
  },
  {
    slug: 'bioimpedancia-sao-jose-sc',
    num: 14,
    title: 'Bioimpedância em São José/SC — Onde Fazer e Como Interpretar os Resultados',
    shortTitle: 'Bioimpedância em São José/SC',
    intro: 'A bioimpedância é o exame que mostra a composição real do seu corpo — não apenas o peso. Saiba onde realizar em São José/SC, como se preparar e o que os números significam.',
    category: 'Exames',
    readTime: '4 min',
    date: 'Julho 2026',
    metaDesc: 'Onde fazer bioimpedância em São José/SC, como se preparar para o exame e como interpretar os resultados. Disponível na Clínica Dra. Isabel Aragão (CRM-SC 26139).',
    related: ['bioimpedancia-o-que-e', 'medica-emagrecimento-sao-jose', 'primeira-consulta-medica-emagrecimento', 'perda-de-peso-saudavel-quantos-kg-por-mes'],
    content: `
<p>Se você mora em São José ou na Grande Florianópolis e quer fazer uma avaliação de composição corporal por bioimpedância, este artigo explica tudo o que você precisa saber — onde realizar, como se preparar e como interpretar o que o laudo diz.</p>
<h2>O que é e para que serve</h2>
<p>A bioimpedância é um exame que analisa a composição do seu corpo através da passagem de uma corrente elétrica de baixíssima intensidade (imperceptível). Ela mede separadamente:</p>
<ul>
  <li>Massa de gordura (total e percentual)</li>
  <li>Massa muscular e massa magra</li>
  <li>Gordura visceral (a que envolve os órgãos)</li>
  <li>Taxa metabólica basal — quantas calorias você gasta em repouso</li>
  <li>Hidratação corporal</li>
</ul>
<p>Essas informações são muito mais úteis para guiar um tratamento de emagrecimento do que o peso na balança — que não diferencia gordura de músculo de água.</p>
<h2>Onde fazer bioimpedância em São José/SC</h2>
<p>A bioimpedância está disponível na Clínica da Dra. Isabel Aragão (CRM-SC 26139), em São José/SC. O exame é realizado como parte da consulta de avaliação de emagrecimento — e os resultados são interpretados pela médica na mesma consulta, já relacionando com o histórico e os objetivos de cada paciente.</p>
<!--CTA-->
<h2>Como se preparar para o exame</h2>
<p>Para garantir um resultado preciso:</p>
<ul>
  <li><strong>Hidratação normal:</strong> beba água normalmente nos dias anteriores — não exagere nem restrinja</li>
  <li><strong>Sem exercício intenso</strong> nas 12 horas anteriores</li>
  <li><strong>Sem álcool</strong> no dia anterior</li>
  <li><strong>Horário:</strong> realize sempre no mesmo horário do dia para comparações ao longo do tratamento (de preferência pela manhã, em jejum de 4 horas)</li>
  <li><strong>Mulheres:</strong> evitar o período menstrual (a retenção de líquidos altera os valores)</li>
  <li><strong>Roupas:</strong> venha de roupa leve e fique descalça durante o exame</li>
</ul>
<h2>Com que frequência repetir</h2>
<p>Durante o tratamento, a bioimpedância é repetida a cada 30 a 60 dias. Esse intervalo é o suficiente para que mudanças reais sejam detectadas e o plano seja ajustado com base nos dados atuais. Fazer semanalmente não é recomendado — variações naturais de hidratação podem criar falsa impressão de progresso ou regressão.</p>
<h2>Como ler o laudo</h2>
<p>O número mais importante não é o peso total — é a relação entre massa de gordura e massa magra. O objetivo do tratamento é reduzir a gordura enquanto preserva (ou aumenta) o músculo. Se o peso caiu 2 kg mas a massa muscular também caiu, o resultado não é bom. Se o peso caiu 2 kg e a massa muscular se manteve ou subiu, o resultado é excelente — mesmo que pareça pouco na balança.</p>`,
  },
  {
    slug: 'como-escolher-medico-emagrecimento',
    num: 15,
    title: 'Como Escolher o Médico Certo para Tratamento de Emagrecimento (O Que Avaliar)',
    shortTitle: 'Como Escolher o Médico Certo para Emagrecer',
    intro: 'Com tantos médicos, clínicas e promessas no mercado, como diferenciar um tratamento sério de uma abordagem que vai te frustrar? Alguns critérios claros ajudam a fazer a escolha certa.',
    category: 'Tratamento',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Como escolher o médico certo para tratamento de emagrecimento: o que verificar (CRM, abordagem, avaliação completa), red flags a evitar e perguntas para fazer na primeira consulta.',
    related: ['medica-emagrecimento-sao-jose', 'quando-procurar-medico-para-emagrecer', 'primeira-consulta-medica-emagrecimento', 'como-funciona-acompanhamento-medico-emagrecimento'],
    content: `
<p>O mercado de emagrecimento é enorme — e, infelizmente, cheio de profissionais que oferecem resultados rápidos sem a estrutura necessária para entregá-los com segurança. Saber o que avaliar antes de iniciar um tratamento pode poupar meses de frustração.</p>
<h2>O que verificar antes da consulta</h2>
<ul>
  <li><strong>CRM ativo:</strong> todo médico deve ter registro ativo no Conselho Regional de Medicina. Você pode verificar no site do CFM (cfm.org.br) buscando pelo nome ou CRM. Desconfie de qualquer profissional que não divulgue o CRM ou que use títulos como "especialista" sem registro.</li>
  <li><strong>Comunicação dentro dos limites éticos:</strong> o CFM proíbe antes e depois, promessas de resultado numérico ("emagreça X kg em Y dias"), imagens de pacientes sem autorização e publicidade que explore vulnerabilidade. Quem não segue essas regras nos canais de comunicação provavelmente também não as segue no consultório.</li>
  <li><strong>Formação e experiência com obesidade:</strong> peça informações sobre a formação. Um médico que trata emagrecimento como área principal deve ter atualização constante nesse campo.</li>
</ul>
<h2>O que esperar de uma consulta séria</h2>
<p>Uma consulta de qualidade não começa com prescrição. Começa com avaliação. Se o médico propõe um tratamento antes de entender sua composição corporal, seus exames, seu histórico e suas condições de saúde, isso é um sinal de alerta.</p>
<p>Uma avaliação séria inclui pelo menos:</p>
<ul>
  <li>Bioimpedância ou avaliação de composição corporal equivalente</li>
  <li>Anamnese detalhada (histórico de peso, tentativas anteriores, condições de saúde)</li>
  <li>Pedido de exames laboratoriais antes de qualquer prescrição</li>
  <li>Explicação clara da proposta de tratamento e das expectativas realistas</li>
</ul>
<!--CTA-->
<h2>Red flags: sinais de alerta</h2>
<ul>
  <li>Promessas de resultado em tempo determinado ("emagreça 10 kg em 30 dias")</li>
  <li>Prescrição sem avaliação prévia adequada</li>
  <li>Foco exclusivo em medicamentos, sem abordar estilo de vida</li>
  <li>Preço de pacotes que incluem medicamento de alto custo sem investigação do caso</li>
  <li>Ausência de acompanhamento após a prescrição inicial</li>
</ul>
<h2>Perguntas para fazer na primeira consulta</h2>
<p>Algumas perguntas que ajudam a avaliar se o profissional é o certo para você:</p>
<ul>
  <li>"Como você avalia a composição corporal dos pacientes?"</li>
  <li>"Quais exames você solicita antes de propor o tratamento?"</li>
  <li>"Com que frequência faríamos o acompanhamento?"</li>
  <li>"Como você ajusta o plano se o resultado não está vindo?"</li>
</ul>
<h2>Uma relação de longo prazo</h2>
<p>O tratamento de emagrecimento não é um episódio — é um processo. O médico certo é aquele com quem você vai construir uma relação de confiança ao longo do tempo. Vale investir na escolha certa desde o início.</p>
<p>A Dra. Isabel Aragão (CRM-SC 26139) atende em São José/SC com avaliação completa, bioimpedância e acompanhamento individualizado. Você sai da primeira consulta com uma avaliação completa e uma orientação inicial de tratamento.</p>`,
  },
  {
    slug: 'tirzepatida-florianopolis',
    num: 13,
    title: 'Tirzepatida em Florianópolis e São José/SC — Médica, Prescrição e Acompanhamento',
    shortTitle: 'Tirzepatida em Florianópolis',
    intro: 'Se você está procurando tirzepatida em Florianópolis ou na região de São José/SC, este artigo explica o que você precisa saber sobre o tratamento e onde encontrar acompanhamento adequado.',
    category: 'Medicamentos',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Tirzepatida em Florianópolis e São José/SC: como funciona, quem pode usar, por que exige prescrição e acompanhamento médico, e onde encontrar médica especializada na Grande Florianópolis.',
    related: ['mounjaro-florianopolis', 'ozempic-florianopolis-prescricao', 'aplicacao-injecao-emagrecer-sao-jose', 'medica-emagrecimento-sao-jose'],
    content: `
<p>Se você chegou até aqui buscando tirzepatida em Florianópolis ou na região de São José/SC, provavelmente já conhece o medicamento e está procurando onde iniciar ou continuar o tratamento com acompanhamento adequado. Este artigo explica o que você precisa saber.</p>
<h2>O que é a tirzepatida</h2>
<p>A tirzepatida é um medicamento injetável de uso semanal desenvolvido para o tratamento da obesidade. Ela pertence a uma nova geração de tratamentos: atua como agonista dual de GLP-1 e GIP — dois hormônios intestinais que influenciam o apetite, a saciedade e o controle da glicose no sangue. Essa ação dupla é o que diferencia a tirzepatida de outros medicamentos da mesma família.</p>
<p>Os ensaios clínicos mostraram reduções médias de peso de 15% a 22% em 72 semanas de tratamento — resultados que colocam a tirzepatida entre os medicamentos mais eficazes disponíveis para obesidade.</p>
<h2>Como funciona na prática</h2>
<p>A aplicação é subcutânea (sob a pele), geralmente no abdômen, coxa ou parte de trás do braço, uma vez por semana. O tratamento começa com doses menores, que sobem gradualmente conforme a tolerância — protocolo necessário para minimizar os efeitos colaterais gastrointestinais mais comuns no início, como náusea e desconforto.</p>
<p>Os primeiros efeitos costumam aparecer nas semanas iniciais: redução da fome, saciedade mais rápida durante as refeições e menos interesse em comer entre elas. Os resultados de composição corporal — perda de gordura com preservação de músculo — se consolidam ao longo de meses de tratamento contínuo.</p>
<h2>Quem pode usar</h2>
<p>A indicação geral é para adultos com IMC igual ou superior a 30 (obesidade), ou com IMC entre 27 e 30 associado a comorbidades como diabetes tipo 2, hipertensão ou alterações no colesterol. Existem contraindicações específicas — histórico pessoal ou familiar de carcinoma medular de tireoide e síndrome de neoplasia endócrina múltipla tipo 2, entre outras — que a avaliação médica identifica antes de qualquer prescrição.</p>
<!--CTA-->
<h2>Por que exige acompanhamento médico</h2>
<p>A tirzepatida é um medicamento de uso controlado — não um suplemento. Exige prescrição e, mais do que isso, acompanhamento regular ao longo do tratamento. Os motivos são concretos:</p>
<ul>
  <li>A dose precisa ser ajustada progressivamente com base na tolerância e na resposta individual</li>
  <li>Efeitos colaterais precisam ser monitorados e manejados — especialmente nos primeiros meses</li>
  <li>A composição corporal deve ser acompanhada por bioimpedância para garantir perda de gordura, não de músculo</li>
  <li>O medicamento é um recurso dentro de um plano de tratamento — não funciona de forma isolada com resultados duradouros</li>
</ul>
<p>Quem adquire tirzepatida sem acompanhamento médico frequentemente enfrenta efeitos colaterais sem suporte, ajuste inadequado de dose e perda significativa de massa muscular — comprometendo saúde e resultado.</p>
<h2>Tirzepatida em Florianópolis e São José/SC</h2>
<p>A Dra. Isabel Aragão (CRM-SC 26139) atende presencialmente em São José/SC com foco em emagrecimento e obesidade. A avaliação inicial inclui bioimpedância completa e revisão do histórico de saúde — o conjunto necessário para definir se a tirzepatida é indicada para o seu caso específico e, quando indicada, iniciar o tratamento com segurança e acompanhamento próximo.</p>
<p>O atendimento também está disponível online para pacientes de outras regiões de Santa Catarina e do Brasil, com avaliação de composição corporal realizada por aplicativo.</p>
<h2>O que esperar do tratamento</h2>
<p>Com indicação correta e acompanhamento adequado, os primeiros resultados de composição corporal costumam aparecer nos três a seis primeiros meses. O objetivo não é um número específico na balança — é redução de gordura com preservação de massa muscular, melhora dos indicadores metabólicos e uma relação mais tranquila com a fome e a alimentação ao longo do tempo.</p>`,
  },
  {
    slug: 'mounjaro-florianopolis',
    num: 16,
    title: 'Mounjaro em Florianópolis — O Que É, Onde Encontrar Médico e Como Funciona o Tratamento',
    shortTitle: 'Mounjaro em Florianópolis',
    intro: 'O Mounjaro é o nome de marca da tirzepatida. Se você está buscando Mounjaro em Florianópolis, este artigo explica o que está disponível e o que envolve iniciar o tratamento.',
    category: 'Medicamentos',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Mounjaro em Florianópolis: o que é (tirzepatida), como funciona o tratamento, por que exige prescrição médica e onde encontrar médica especializada em São José/SC e na Grande Florianópolis.',
    related: ['tirzepatida-florianopolis', 'ozempic-florianopolis-prescricao', 'aplicacao-injecao-emagrecer-sao-jose', 'medica-emagrecimento-sao-jose'],
    content: `
<p>O Mounjaro é o nome de marca da tirzepatida — medicamento injetável desenvolvido pelo laboratório Eli Lilly para o tratamento de obesidade e diabetes tipo 2. Se você está buscando Mounjaro em Florianópolis ou na Grande Florianópolis, este artigo explica o que está disponível e o que envolve iniciar o tratamento.</p>
<h2>Mounjaro e tirzepatida: é o mesmo medicamento</h2>
<p>Sim. Mounjaro é o nome comercial — a molécula ativa é a tirzepatida. As duas denominações circulam: médicos e pacientes com mais familiaridade com a literatura científica tendem a usar "tirzepatida"; a maioria dos pacientes busca pelo nome de marca. É importante saber isso porque na receita médica e na farmácia podem aparecer ambos os nomes.</p>
<h2>Como o Mounjaro funciona</h2>
<p>A tirzepatida/Mounjaro age como agonista dual de GLP-1 e GIP — dois hormônios produzidos pelo intestino após as refeições. Essa ação dupla distingue o Mounjaro de medicamentos que atuam apenas no GLP-1. Na prática:</p>
<ul>
  <li>Reduz a fome de forma significativa — a pessoa sente menos vontade de comer e se satisfaz mais rápido nas refeições</li>
  <li>Retarda o esvaziamento do estômago — prolongando a saciedade após comer</li>
  <li>Melhora a resposta à insulina e o controle glicêmico</li>
  <li>Atua em regiões do cérebro relacionadas ao apetite</li>
</ul>
<p>Os ensaios clínicos mostraram reduções médias de 15% a 22% do peso corporal em 72 semanas — com manutenção dos resultados enquanto o tratamento continua.</p>
<h2>Quem pode usar o Mounjaro</h2>
<p>A indicação é para adultos com IMC igual ou superior a 30, ou com IMC entre 27 e 30 associado a condições como diabetes tipo 2, hipertensão ou dislipidemia. A avaliação médica define se há indicação e identifica eventuais contraindicações antes de qualquer prescrição.</p>
<!--CTA-->
<h2>O que envolve o tratamento</h2>
<p>O Mounjaro é aplicado uma vez por semana por via subcutânea — geralmente no abdômen, coxa ou braço. O tratamento começa na dose mais baixa e sobe gradualmente ao longo de semanas, o que permite que o organismo se adapte e reduz os efeitos colaterais gastrointestinais comuns no início (náusea, desconforto).</p>
<p>O tratamento exige acompanhamento médico regular para ajuste de dose, monitoramento de composição corporal por bioimpedância e avaliação periódica de exames. O Mounjaro é um recurso dentro de um plano de tratamento — não funciona de forma isolada a longo prazo.</p>
<h2>Sobre a compra sem prescrição</h2>
<p>O Mounjaro/tirzepatida é um medicamento de uso controlado. A compra sem receita médica válida é irregular e, mais importante, arriscada: sem avaliação prévia não há como confirmar a indicação, identificar contraindicações nem saber qual dose é adequada para o caso. O tratamento iniciado sem acompanhamento costuma gerar resultados menores e riscos maiores.</p>
<h2>Onde encontrar médica para Mounjaro em Florianópolis</h2>
<p>A Dra. Isabel Aragão (CRM-SC 26139) atende em São José/SC com foco em emagrecimento e obesidade. Na consulta inicial é feita uma avaliação completa — bioimpedância e histórico de saúde — para definir se o Mounjaro/tirzepatida é a opção mais adequada para o seu caso e iniciar o tratamento com segurança. O atendimento também está disponível online para pacientes de outras regiões do Brasil.</p>`,
  },
  {
    slug: 'ozempic-florianopolis-prescricao',
    num: 17,
    title: 'Ozempic em Florianópolis — Médico para Prescrição, Acompanhamento e Alternativas ao Tratamento',
    shortTitle: 'Ozempic em Florianópolis',
    intro: 'Se você está procurando Ozempic em Florianópolis — para iniciar, continuar ou entender as opções de tratamento —, este artigo traz o que você precisa saber.',
    category: 'Medicamentos',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Ozempic em Florianópolis: o que é (semaglutida), como funciona, por que exige prescrição médica, onde encontrar médica em São José/SC e quais alternativas existem para tratamento de obesidade.',
    related: ['tirzepatida-florianopolis', 'mounjaro-florianopolis', 'medica-emagrecimento-sao-jose', 'glp1-medicamentos-injetaveis-emagrecer'],
    content: `
<p>O Ozempic é um dos medicamentos injetáveis mais buscados para emagrecimento no Brasil. Se você está procurando Ozempic em Florianópolis — para iniciar o tratamento, continuar com acompanhamento médico adequado ou entender as opções disponíveis —, este artigo traz o que você precisa saber.</p>
<h2>O que é o Ozempic</h2>
<p>O Ozempic é o nome de marca da semaglutida, desenvolvido pelo laboratório Novo Nordisk. Foi aprovado originalmente para o tratamento de diabetes tipo 2, mas tornou-se amplamente conhecido pelo efeito de redução de peso. A semaglutida age como agonista de GLP-1 — um hormônio intestinal que sinaliza saciedade ao cérebro, retarda o esvaziamento gástrico e melhora o controle glicêmico.</p>
<h2>Ozempic e Wegovy: qual a diferença</h2>
<p>A semaglutida existe em duas formulações com indicações distintas: o Ozempic (doses de até 2 mg) foi aprovado para diabetes tipo 2; o Wegovy (doses de até 2,4 mg) foi aprovado especificamente para obesidade. O princípio ativo é o mesmo — a diferença está na dose máxima e na indicação formal. Na prática clínica, o Ozempic é utilizado para tratamento de obesidade em muitos contextos, uso que exige avaliação individualizada pelo médico prescritor.</p>
<h2>Ozempic versus tirzepatida (Mounjaro)</h2>
<p>A tirzepatida (Mounjaro) é um medicamento mais recente que age em dois receptores — GLP-1 e GIP —, enquanto a semaglutida (Ozempic/Wegovy) age apenas no GLP-1. Os estudos comparativos mostram que a tirzepatida tende a produzir reduções de peso maiores em média, mas a escolha entre os dois depende do histórico clínico, tolerância, custo e disponibilidade de cada paciente — uma decisão médica, não de preferência pessoal.</p>
<!--CTA-->
<h2>Por que o Ozempic exige prescrição e acompanhamento</h2>
<p>O Ozempic é um medicamento de uso controlado. Para além da obrigatoriedade legal da receita, o acompanhamento médico é necessário por razões clínicas concretas:</p>
<ul>
  <li>A dose precisa ser ajustada progressivamente ao longo do tratamento</li>
  <li>Efeitos colaterais gastrointestinais são comuns no início e precisam de manejo adequado</li>
  <li>A composição corporal deve ser monitorada — perda de gordura com preservação de músculo não é automática</li>
  <li>Há contraindicações que precisam ser avaliadas antes do início do tratamento</li>
</ul>
<p>O uso sem acompanhamento frequentemente resulta em abandono por efeitos colaterais, perda de massa muscular não monitorada ou resultado abaixo do esperado por ausência de um plano estruturado.</p>
<h2>Onde encontrar médica para prescrição em Florianópolis</h2>
<p>A Dra. Isabel Aragão (CRM-SC 26139) atende em São José/SC com foco em emagrecimento e obesidade. Na consulta inicial é feita uma avaliação completa para definir qual medicamento é mais adequado para cada caso — semaglutida, tirzepatida ou outro recurso terapêutico — e iniciar o tratamento com a estrutura de acompanhamento necessária. O atendimento também está disponível online para pacientes de outras regiões do Brasil.</p>`,
  },
  {
    slug: 'clinica-emagrecimento-sao-jose-sc',
    num: 18,
    title: 'Clínica de Emagrecimento em São José/SC — O Que Avaliar Antes de Escolher',
    shortTitle: 'Clínica de Emagrecimento em São José/SC',
    intro: 'Se você está pesquisando clínicas de emagrecimento em São José/SC, saber o que avaliar pode poupar meses de tratamento inadequado. Este artigo explica o que distingue uma abordagem séria.',
    category: 'Tratamento',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Como escolher uma clínica de emagrecimento em São José/SC: o que avaliar na equipe, na abordagem e no acompanhamento, red flags a evitar e perguntas importantes para fazer antes de começar.',
    related: ['medica-emagrecimento-sao-jose', 'primeira-consulta-medica-emagrecimento', 'como-escolher-medico-emagrecimento', 'bioimpedancia-sao-jose-sc'],
    content: `
<p>Se você está pesquisando clínica de emagrecimento em São José/SC ou na Grande Florianópolis, provavelmente já percebeu que a oferta é variada — e que as diferenças entre uma clínica e outra vão muito além do preço. Saber o que avaliar pode poupar meses de tratamento inadequado.</p>
<h2>O que é uma clínica de emagrecimento</h2>
<p>Uma clínica de emagrecimento é um espaço de saúde que oferece tratamento médico para perda de peso. Isso pode envolver avaliação clínica, exames, prescrição de medicamentos quando indicada e acompanhamento de composição corporal. O que diferencia uma clínica de qualidade não é o espaço físico nem a lista de serviços — é a abordagem. Tratamento sério de emagrecimento começa com avaliação, não com prescrição.</p>
<h2>O que avaliar na equipe</h2>
<p>Verifique se o médico responsável tem CRM ativo e experiência comprovada com obesidade. Você pode confirmar qualquer CRM no site do CFM (cfm.org.br). Desconfie de clínicas que não informam claramente quem é o responsável médico pelo tratamento.</p>
<p>A presença de enfermeiro(a) qualificado(a) na equipe é um diferencial concreto: garante suporte especializado na aplicação de medicamentos injetáveis e no acompanhamento entre consultas.</p>
<h2>O que avaliar na abordagem clínica</h2>
<p>Uma abordagem séria inclui, no mínimo:</p>
<ul>
  <li><strong>Avaliação de composição corporal:</strong> bioimpedância ou método equivalente — não apenas o peso na balança</li>
  <li><strong>Avaliação antes da prescrição:</strong> exames, histórico de saúde e condições associadas</li>
  <li><strong>Plano individualizado:</strong> não um protocolo único para todos os pacientes</li>
  <li><strong>Acompanhamento regular:</strong> revisitas com ajuste do plano conforme a resposta de cada paciente</li>
</ul>
<p>Se a proposta chega antes da avaliação — pacote já definido, medicamento prescrito sem exames —, é um sinal de alerta.</p>
<!--CTA-->
<h2>Red flags: o que evitar</h2>
<ul>
  <li>Promessas de resultado em tempo determinado ou garantias de número de quilos perdidos</li>
  <li>Imagens de antes e depois de pacientes na comunicação (prática vedada pelo Código de Ética Médica)</li>
  <li>Prescrição de medicamentos sem avaliação prévia completa</li>
  <li>Ausência de acompanhamento após a prescrição inicial</li>
  <li>Profissional sem CRM visível ou identificável</li>
</ul>
<h2>Perguntas para fazer antes de começar</h2>
<ul>
  <li>"Qual exame vocês fazem para avaliar a composição corporal?"</li>
  <li>"Que exames são solicitados antes da prescrição?"</li>
  <li>"Com que frequência são feitas as revisitas?"</li>
  <li>"Como o plano é ajustado se o resultado não estiver vindo?"</li>
</ul>
<p>Respostas vagas ou evasivas a essas perguntas já dizem muito sobre o que esperar do tratamento.</p>
<h2>Clínica de emagrecimento em São José/SC — o que a Dra. Isabel Aragão oferece</h2>
<p>A Dra. Isabel Aragão (CRM-SC 26139) atende em São José/SC com foco exclusivo em emagrecimento e obesidade. O tratamento começa com avaliação completa — bioimpedância e histórico detalhado de saúde — antes de qualquer decisão de plano. O acompanhamento é feito com revisitas regulares e ajuste contínuo conforme a evolução de cada paciente. A equipe inclui a Enf. Maria Fernanda Loccioni (COREN/SC 441029), responsável pelas aplicações de medicamentos injetáveis. O atendimento também está disponível online.</p>`,
  },
  {
    slug: 'lipedema-florianopolis-tratamento',
    num: 19,
    title: 'Lipedema em Florianópolis — Como é Feito o Diagnóstico e O Que o Tratamento Médico Oferece',
    shortTitle: 'Lipedema em Florianópolis',
    intro: 'O lipedema é frequentemente confundido com obesidade — e permanece sem diagnóstico por anos. Se você mora em Florianópolis e suspeita da condição, este artigo explica o que é e o que o tratamento oferece.',
    category: 'Saúde',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Lipedema em Florianópolis: o que é, por que é diferente da obesidade comum, como é diagnosticado e o que o acompanhamento médico oferece para pacientes na Grande Florianópolis e São José/SC.',
    related: ['medica-emagrecimento-sao-jose', 'quando-procurar-medico-para-emagrecer', 'emagrecimento-apos-40-anos', 'clinica-emagrecimento-sao-jose-sc'],
    content: `
<p>O lipedema é uma condição crônica caracterizada pelo acúmulo anormal e desproporcional de gordura — geralmente nos membros inferiores — que acomete principalmente mulheres. Apesar de relativamente comum, é frequentemente confundido com obesidade ou com "inchaço" e permanece sem diagnóstico por anos. Se você mora em Florianópolis ou na Grande Florianópolis e suspeita de lipedema, este artigo explica o que é a condição e o que o tratamento médico oferece.</p>
<h2>O que é o lipedema</h2>
<p>O lipedema é uma doença do tecido adiposo em que o acúmulo acontece em padrões específicos — principalmente quadris, coxas e pernas —, é simétrico nos dois lados do corpo e não responde da forma esperada à dieta ou ao exercício. A gordura do lipedema tem características distintas da gordura convencional: é dolorosa ao toque, causa formação fácil de hematomas e não diminui proporcionalmente com a perda de peso.</p>
<p>É importante distinguir: lipedema não é obesidade. Uma mulher com lipedema pode ter peso e IMC normais no tronco e nos braços, com acúmulo desproporcional apenas nos membros inferiores. Esse padrão é uma pista diagnóstica importante.</p>
<h2>Por que é frequentemente confundido e mal diagnosticado</h2>
<p>O lipedema ainda é pouco reconhecido por profissionais de saúde em geral. Muitas pacientes passam anos ouvindo que "é só questão de dieta" ou "precisa se exercitar mais" — sem resultado, porque a condição tem causa diferente. Algumas recebem diagnóstico de obesidade ou linfedema (condição relacionada mas distinta) e seguem com tratamento inadequado para o seu caso.</p>
<p>O diagnóstico correto muda completamente a abordagem — porque o que funciona para lipedema é diferente do que funciona para obesidade convencional.</p>
<h2>Sintomas comuns</h2>
<ul>
  <li>Acúmulo de gordura desproporcional em membros inferiores (quadril, coxas, pernas), simétrico nos dois lados</li>
  <li>Dor, sensibilidade ou desconforto ao toque nas áreas afetadas</li>
  <li>Formação fácil de hematomas sem causa aparente</li>
  <li>Sensação de peso e cansaço nas pernas ao longo do dia</li>
  <li>Resultado insatisfatório de dietas e exercícios nas regiões afetadas</li>
  <li>Desproporção visível entre os membros inferiores e o restante do corpo</li>
</ul>
<!--CTA-->
<h2>Como é feito o diagnóstico</h2>
<p>Não existe exame de sangue ou de imagem específico para diagnosticar lipedema. O diagnóstico é clínico — feito com base na apresentação dos sintomas, no exame físico e no descarte de outras condições. Por isso é fundamental buscar um profissional com experiência no reconhecimento da condição.</p>
<h2>O que o tratamento médico oferece</h2>
<p>O lipedema não tem cura, mas tem tratamento — e o cuidado adequado melhora significativamente a qualidade de vida. As abordagens incluem:</p>
<ul>
  <li><strong>Terapia de compressão:</strong> uso de meias compressivas para controlar o inchaço e o desconforto</li>
  <li><strong>Drenagem linfática manual:</strong> realizada por profissional habilitado para reduzir a retenção de líquido</li>
  <li><strong>Atividade física adaptada:</strong> exercícios de baixo impacto, aquáticos e de força — que ajudam sem agravar a condição</li>
  <li><strong>Controle de peso associado:</strong> quando há obesidade coexistente, o controle do peso reduz a sobrecarga nos tecidos afetados, sem eliminar o lipedema em si</li>
  <li><strong>Medicamentos:</strong> em casos selecionados, recursos que atuam na inflamação ou no controle de peso coexistente</li>
</ul>
<h2>Avaliação e acompanhamento em Florianópolis</h2>
<p>A Dra. Isabel Aragão (CRM-SC 26139) atende em São José/SC e realiza avaliação de composição corporal e análise clínica para pacientes que suspeitam de lipedema ou que já têm diagnóstico e buscam acompanhamento médico estruturado. O objetivo é identificar corretamente a condição e montar um plano adequado para cada caso — não um protocolo genérico de emagrecimento.</p>`,
  },
  {
    slug: 'aplicacao-injecao-emagrecer-sao-jose',
    num: 20,
    title: 'Aplicação de Injeção para Emagrecer em São José/SC — Como Funciona na Clínica',
    shortTitle: 'Aplicação de Injeção para Emagrecer',
    intro: 'Os medicamentos injetáveis para emagrecimento são aplicados semanalmente. Muitos pacientes preferem fazer a aplicação na clínica, especialmente no início. Veja como funciona em São José/SC.',
    category: 'Tratamento',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Aplicação de injeção para emagrecer em São José/SC: quais medicamentos são injetáveis, como é feita a aplicação, diferença entre autoaplicação e clínica, e como funciona na Clínica Dra. Isabel Aragão.',
    related: ['tirzepatida-florianopolis', 'mounjaro-florianopolis', 'ozempic-florianopolis-prescricao', 'glp1-medicamentos-injetaveis-emagrecer'],
    content: `
<p>Os medicamentos injetáveis para emagrecimento — os análogos de GLP-1 e GIP como tirzepatida e semaglutida — são aplicados uma vez por semana. Muitos pacientes preferem ou precisam fazer a aplicação na clínica. Este artigo explica como funciona esse processo em São José/SC e o que esperar de cada visita.</p>
<h2>Quais medicamentos são aplicados por injeção</h2>
<p>A classe de medicamentos mais utilizada atualmente para emagrecimento por via injetável inclui:</p>
<ul>
  <li><strong>Tirzepatida</strong> (nome de marca Mounjaro) — agonista dual GLP-1/GIP, aplicação semanal</li>
  <li><strong>Semaglutida</strong> (nomes de marca Ozempic e Wegovy) — agonista de GLP-1, aplicação semanal</li>
</ul>
<p>Ambos são administrados por via subcutânea — uma agulha fina é inserida sob a pele, não no músculo. A aplicação é rápida, com canetas aplicadoras (pen) projetadas para mínimo desconforto e facilidade de uso.</p>
<h2>Autoaplicação versus aplicação na clínica</h2>
<p>A maioria dos pacientes aprende a se autoaplicar. As canetas aplicadoras são projetadas para uso domiciliar — e o treinamento de como manusear, armazenar e aplicar corretamente faz parte do protocolo de início do tratamento. Para muitas pessoas, a autoaplicação é prática e funciona bem ao longo do tempo.</p>
<p>A aplicação na clínica é uma alternativa válida para quem:</p>
<ul>
  <li>Tem insegurança ou dificuldade com a autoaplicação</li>
  <li>Está nas primeiras doses e quer se familiarizar com o processo com suporte profissional</li>
  <li>Prefere o acompanhamento próximo a cada dose, especialmente no início do tratamento</li>
  <li>Tem alguma limitação física que dificulta a aplicação sozinho</li>
</ul>
<!--CTA-->
<h2>Como funciona a aplicação na clínica em São José/SC</h2>
<p>Na Clínica da Dra. Isabel Aragão, as aplicações são realizadas pela Enf. Maria Fernanda Loccioni (COREN/SC 441029). O processo inclui:</p>
<ul>
  <li>Confirmação da dose prescrita pela médica</li>
  <li>Verificação do armazenamento correto do medicamento (tirzepatida e semaglutida devem ser mantidos refrigerados entre 2°C e 8°C)</li>
  <li>Orientação sobre o local de aplicação e rodízio de regiões — importante para evitar lipodistrofia local</li>
  <li>Aplicação subcutânea com técnica adequada</li>
  <li>Registro da aplicação e orientações pós-aplicação</li>
</ul>
<h2>O que esperar após a aplicação</h2>
<p>Na maior parte dos casos, a aplicação é bem tolerada. Um leve desconforto local e passageiro pode ocorrer nas primeiras doses. Os efeitos do medicamento — redução do apetite, saciedade mais rápida — costumam se manifestar nas horas ou dias seguintes. Sintomas gastrointestinais (náusea, desconforto) são mais comuns nas primeiras semanas e tendem a diminuir com o tempo e o ajuste progressivo de dose.</p>
<h2>Aplicação e acompanhamento: por que os dois andam juntos</h2>
<p>A aplicação do medicamento é um componente do tratamento — não o tratamento completo. O acompanhamento médico regular com a Dra. Isabel permite ajustar a dose conforme a resposta, monitorar a composição corporal por bioimpedância e avaliar a evolução dos indicadores de saúde. A aplicação isolada, sem esse suporte, tende a gerar resultados menores e sem sustentabilidade ao longo do tempo.</p>
<p>Para pacientes que já têm prescrição de outro médico e buscam o serviço de aplicação: entre em contato com a clínica para verificar disponibilidade e protocolos.</p>`,
  },
  {
    slug: 'mounjaro-ou-ozempic-qual-escolher',
    num: 21,
    title: 'Mounjaro ou Ozempic: Qual a Diferença e Como Escolher o Melhor para Você',
    shortTitle: 'Mounjaro ou Ozempic: Qual Escolher',
    intro: 'Mounjaro e Ozempic são os dois injetáveis mais buscados para emagrecer. Eles não são iguais, e a escolha entre um e outro é uma decisão médica. Entenda as diferenças de forma clara.',
    category: 'Medicamentos',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Mounjaro (tirzepatida) ou Ozempic (semaglutida): entenda a diferença entre os dois injetáveis para emagrecer, o que os estudos mostram sobre cada um e por que a escolha é uma decisão médica.',
    related: ['tirzepatida-florianopolis', 'ozempic-florianopolis-prescricao', 'mounjaro-florianopolis', 'glp1-medicamentos-injetaveis-emagrecer'],
    content: `
<p>Se você está pesquisando tratamento injetável para emagrecer, provavelmente já se deparou com os dois nomes mais buscados: Mounjaro e Ozempic. Eles funcionam de formas parecidas, mas não são o mesmo medicamento, e a diferença entre eles importa na hora de decidir. Este artigo explica cada um em linguagem clara.</p>
<h2>O que é cada um</h2>
<p>Os dois são medicamentos injetáveis de uso semanal, mas têm princípios ativos diferentes:</p>
<ul>
  <li><strong>Ozempic</strong> é o nome de marca da <strong>semaglutida</strong>, do laboratório Novo Nordisk. Ela age como agonista de GLP-1, um hormônio intestinal que sinaliza saciedade ao cérebro e retarda o esvaziamento do estômago.</li>
  <li><strong>Mounjaro</strong> é o nome de marca da <strong>tirzepatida</strong>, do laboratório Eli Lilly. Ela age em dois receptores ao mesmo tempo, GLP-1 e GIP, no que se chama de ação dual.</li>
</ul>
<p>Essa é a diferença central: o Ozempic atua em uma via, o Mounjaro em duas.</p>
<h2>O que os estudos mostram</h2>
<p>Nos ensaios clínicos, a tirzepatida (Mounjaro) tende a produzir reduções de peso maiores na média do que a semaglutida (Ozempic). Isso não significa que o Mounjaro seja sempre a melhor escolha para todo mundo: os estudos medem médias de grupos, e a resposta individual varia bastante de pessoa para pessoa.</p>
<p>Vale um esclarecimento importante sobre nomes. A semaglutida existe em duas versões: o Ozempic (aprovado para diabetes tipo 2) e o Wegovy (aprovado especificamente para obesidade, em dose mais alta). O princípio ativo é o mesmo. Na prática clínica, o Ozempic é utilizado no tratamento de obesidade em muitos contextos, sempre com avaliação individual do médico prescritor.</p>
<!--CTA-->
<h2>Como a escolha é feita na prática</h2>
<p>A decisão entre um e outro não se baseia só em qual emagrece mais. O médico considera vários fatores:</p>
<ul>
  <li><strong>Histórico de saúde e condições associadas</strong>, como diabetes, pressão alta e alterações no colesterol</li>
  <li><strong>Tolerância aos efeitos colaterais</strong>, especialmente os gastrointestinais, mais comuns no início</li>
  <li><strong>Resposta ao tratamento</strong>, avaliada ao longo das primeiras semanas</li>
  <li><strong>Disponibilidade e custo</strong> de cada medicamento no momento</li>
</ul>
<p>Por isso, a mesma pergunta (qual é melhor?) tem respostas diferentes para pessoas diferentes. O que funciona muito bem para uma paciente pode não ser a melhor opção para outra.</p>
<h2>Por que os dois exigem prescrição e acompanhamento</h2>
<p>Tanto o Mounjaro quanto o Ozempic são medicamentos de uso controlado. Além da receita obrigatória, o acompanhamento médico é necessário porque a dose sobe de forma gradual, os efeitos colaterais precisam ser manejados e a composição corporal deve ser monitorada por bioimpedância, para garantir que a perda seja de gordura e não de músculo. Nenhum dos dois funciona de forma isolada e sustentável sem um plano por trás.</p>
<h2>Onde avaliar qual é o mais indicado em Florianópolis</h2>
<p>A Dra. Isabel Aragão (CRM-SC 26139) atende em São José/SC com foco em emagrecimento e obesidade. Na primeira consulta é feita uma avaliação completa, com bioimpedância e revisão do histórico de saúde, para definir se o tratamento injetável é indicado e, se for, qual opção faz mais sentido para o seu caso. O atendimento também está disponível online para pacientes de outras regiões do Brasil.</p>`,
  },
  {
    slug: 'efeitos-colaterais-mounjaro-tirzepatida',
    num: 22,
    title: 'Efeitos Colaterais do Mounjaro (Tirzepatida): O Que é Normal e Quando se Preocupar',
    shortTitle: 'Efeitos Colaterais do Mounjaro',
    intro: 'Náusea, estômago cheio, mudança no apetite. Os efeitos colaterais do Mounjaro assustam quem está começando, mas a maioria é previsível e passageira. Entenda o que é esperado e o que merece atenção.',
    category: 'Medicamentos',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Efeitos colaterais do Mounjaro (tirzepatida): quais são os mais comuns, por que acontecem, quanto tempo duram e quais sinais merecem atenção médica. Guia claro para quem vai começar ou já usa.',
    related: ['tirzepatida-florianopolis', 'mounjaro-florianopolis', 'mounjaro-ou-ozempic-qual-escolher', 'glp1-medicamentos-injetaveis-emagrecer'],
    content: `
<p>Quem pensa em começar o tratamento com Mounjaro (tirzepatida) quase sempre tem a mesma dúvida: quais são os efeitos colaterais e o quanto eles atrapalham a vida. É uma preocupação legítima. A boa notícia é que a maioria dos efeitos é previsível, ligada ao início do tratamento, e tende a diminuir com o tempo. Este artigo explica o que costuma acontecer e o que merece atenção.</p>
<p>Importante: este conteúdo é informativo e não substitui a orientação da sua médica. Qualquer sintoma que preocupe deve ser conversado com quem acompanha o seu tratamento.</p>
<h2>Por que o Mounjaro causa efeitos colaterais</h2>
<p>A tirzepatida age retardando o esvaziamento do estômago e reduzindo o apetite. É justamente esse mecanismo, o que ajuda no emagrecimento, que provoca os efeitos gastrointestinais mais comuns. Ou seja, sentir um pouco desses efeitos no começo faz parte do medicamento estar agindo. O objetivo do acompanhamento é manter isso dentro de um limite tolerável.</p>
<h2>Os efeitos mais comuns (e geralmente passageiros)</h2>
<ul>
  <li><strong>Náusea:</strong> o efeito mais frequente, especialmente nas primeiras semanas e a cada aumento de dose. Costuma melhorar conforme o corpo se adapta.</li>
  <li><strong>Sensação de estômago cheio:</strong> comer menos e se saciar rápido é esperado. Refeições menores ajudam.</li>
  <li><strong>Prisão de ventre ou diarreia:</strong> alterações no ritmo intestinal são comuns no início.</li>
  <li><strong>Desconforto abdominal, gases e arrotos:</strong> tendem a ser leves e temporários.</li>
  <li><strong>Cansaço:</strong> pode aparecer nas primeiras semanas, ligado à redução da quantidade de comida.</li>
</ul>
<p>A maior parte desses sintomas é mais intensa logo após iniciar o tratamento ou subir a dose, e vai perdendo força nas semanas seguintes.</p>
<h2>Como reduzir o desconforto</h2>
<ul>
  <li>Comer em menor quantidade e mais devagar, respeitando a saciedade</li>
  <li>Evitar refeições muito gordurosas ou pesadas, que pioram a náusea</li>
  <li>Manter boa hidratação ao longo do dia</li>
  <li>Subir a dose de forma gradual, sempre conforme a orientação médica, sem pressa</li>
</ul>
<p>O aumento lento e progressivo da dose é uma das principais ferramentas para minimizar efeitos. Pular etapas para acelerar o resultado costuma trazer mais desconforto sem benefício real.</p>
<!--CTA-->
<h2>Sinais que merecem atenção médica</h2>
<p>A maioria dos efeitos é leve, mas alguns sinais pedem contato com o médico:</p>
<ul>
  <li>Dor abdominal forte e persistente, especialmente se irradia para as costas</li>
  <li>Vômitos intensos ou que impedem de se hidratar</li>
  <li>Sinais de desidratação, como tontura e boca muito seca</li>
  <li>Qualquer reação alérgica, como inchaço e falta de ar</li>
</ul>
<p>Esses casos são raros, mas conhecer os sinais faz parte de um tratamento seguro. É por isso que o Mounjaro não é um medicamento para usar por conta própria: o acompanhamento existe justamente para agir cedo se algo sair do esperado.</p>
<h2>Por que o acompanhamento muda a experiência</h2>
<p>A diferença entre um tratamento tranquilo e um tratamento sofrido costuma estar no acompanhamento. Com ajuste de dose no ritmo certo, orientação alimentar e um canal aberto para tirar dúvidas, os efeitos colaterais deixam de ser um obstáculo. A Dra. Isabel Aragão (CRM-SC 26139) atende em São José/SC e conduz o tratamento com injetáveis de forma individualizada, com atenção justamente a essa fase inicial. O atendimento também está disponível online.</p>`,
  },
  {
    slug: 'wegovy-florianopolis',
    num: 23,
    title: 'Wegovy em Florianópolis: O Que É, Como Funciona e Onde Encontrar Médica',
    shortTitle: 'Wegovy em Florianópolis',
    intro: 'O Wegovy é a versão da semaglutida aprovada especificamente para obesidade. Se você procura Wegovy em Florianópolis, entenda o que é, como funciona e o que envolve começar o tratamento com acompanhamento.',
    category: 'Medicamentos',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Wegovy em Florianópolis: o que é (semaglutida para obesidade), como funciona, a diferença para o Ozempic, por que exige prescrição e onde encontrar médica em São José/SC.',
    related: ['ozempic-florianopolis-prescricao', 'mounjaro-ou-ozempic-qual-escolher', 'glp1-medicamentos-injetaveis-emagrecer', 'tirzepatida-florianopolis'],
    content: `
<p>O Wegovy é um dos medicamentos injetáveis mais associados ao tratamento da obesidade. Se você está buscando Wegovy em Florianópolis ou na Grande Florianópolis, este artigo explica o que ele é, como funciona e o que envolve iniciar o tratamento com acompanhamento adequado.</p>
<h2>O que é o Wegovy</h2>
<p>O Wegovy é o nome de marca da <strong>semaglutida</strong>, do laboratório Novo Nordisk, na formulação aprovada especificamente para o tratamento da obesidade. A semaglutida age como agonista de GLP-1, um hormônio intestinal que reduz o apetite, aumenta a saciedade e retarda o esvaziamento do estômago. O resultado, na prática, é comer menos e se sentir satisfeito por mais tempo.</p>
<h2>Wegovy e Ozempic: qual a diferença</h2>
<p>Essa é a confusão mais comum, e a resposta é simples: os dois têm o mesmo princípio ativo, a semaglutida. A diferença está na indicação e na dose:</p>
<ul>
  <li><strong>Ozempic:</strong> aprovado para diabetes tipo 2, em doses de até 2 mg.</li>
  <li><strong>Wegovy:</strong> aprovado especificamente para obesidade, em dose mais alta (até 2,4 mg).</li>
</ul>
<p>Por ter sido desenhado para o tratamento do peso, o Wegovy é a formulação pensada para esse objetivo. Qual dos dois é mais indicado em cada caso é uma decisão do médico prescritor, considerando o histórico e os objetivos de cada paciente.</p>
<h2>Wegovy e Mounjaro</h2>
<p>Outra dúvida frequente é como o Wegovy se compara ao Mounjaro. O Wegovy (semaglutida) age em uma via, o GLP-1. O Mounjaro (tirzepatida) age em duas, GLP-1 e GIP. Nos estudos, a tirzepatida tende a mostrar reduções de peso maiores na média, mas a escolha depende de vários fatores individuais, não só desse número.</p>
<!--CTA-->
<h2>Como funciona o tratamento</h2>
<p>O Wegovy é aplicado uma vez por semana, por via subcutânea (sob a pele), com caneta aplicadora. O tratamento começa na dose mais baixa e sobe gradualmente ao longo de semanas, o que permite ao organismo se adaptar e reduz os efeitos colaterais gastrointestinais mais comuns no início, como náusea e desconforto.</p>
<p>Como todo medicamento dessa classe, o Wegovy exige acompanhamento médico regular: para ajustar a dose, monitorar a composição corporal por bioimpedância e garantir que a perda de peso seja de gordura, preservando a massa muscular. Ele é um recurso dentro de um plano de tratamento, não uma solução isolada.</p>
<h2>Sobre uso sem prescrição</h2>
<p>O Wegovy é um medicamento de uso controlado e exige receita. Mais do que uma exigência legal, a avaliação prévia é o que permite confirmar a indicação, identificar contraindicações e definir a dose adequada. Começar por conta própria costuma resultar em mais efeitos colaterais e menos resultado.</p>
<h2>Onde encontrar médica para Wegovy em Florianópolis</h2>
<p>A Dra. Isabel Aragão (CRM-SC 26139) atende em São José/SC com foco em emagrecimento e obesidade. Na primeira consulta é feita uma avaliação completa, com bioimpedância e revisão do histórico de saúde, para definir se o tratamento com semaglutida ou outro recurso é o mais indicado para o seu caso. O atendimento também está disponível online para pacientes de outras regiões do Brasil.</p>`,
  },
  {
    slug: 'quanto-tempo-mounjaro-faz-efeito',
    num: 24,
    title: 'Em Quanto Tempo o Mounjaro Começa a Fazer Efeito? O Que Esperar',
    shortTitle: 'Em Quanto Tempo o Mounjaro Faz Efeito',
    intro: 'Uma das primeiras perguntas de quem começa o Mounjaro é: quando eu vou sentir o efeito? A resposta tem duas partes, e entender isso ajuda a ter expectativas realistas e a não desistir cedo demais.',
    category: 'Medicamentos',
    readTime: '4 min',
    date: 'Julho 2026',
    metaDesc: 'Em quanto tempo o Mounjaro (tirzepatida) começa a fazer efeito: o que esperar nas primeiras semanas, por que o resultado é gradual e por que a expectativa realista faz diferença no tratamento.',
    related: ['tirzepatida-florianopolis', 'mounjaro-florianopolis', 'efeitos-colaterais-mounjaro-tirzepatida', 'perda-de-peso-saudavel-quantos-kg-por-mes'],
    content: `
<p>Entre as dúvidas mais comuns de quem vai começar o Mounjaro (tirzepatida), essa é quase sempre a primeira: em quanto tempo ele começa a fazer efeito? A resposta ajuda a criar expectativas realistas, e isso importa mais do que parece. Muita gente desiste cedo demais por esperar um resultado que ainda não era para ter aparecido.</p>
<p>Antes de tudo, um aviso: os prazos abaixo são referências gerais, baseadas no que costuma acontecer e no que os estudos observam em grupos de pacientes. A resposta é individual e varia de pessoa para pessoa. Nada aqui é promessa de resultado.</p>
<h2>O efeito no apetite aparece cedo</h2>
<p>Há dois tipos de efeito, e eles acontecem em tempos diferentes. O primeiro é o efeito sobre o apetite, e esse costuma ser percebido logo. Já nas primeiras semanas, muitas pessoas relatam:</p>
<ul>
  <li>Menos fome ao longo do dia</li>
  <li>Saciedade mais rápida durante as refeições</li>
  <li>Menos vontade de beliscar entre as refeições</li>
  <li>Uma relação mais tranquila com a comida, com menos pensamento constante em comer</li>
</ul>
<p>Esse é o sinal de que o medicamento está agindo. Ele aparece antes de qualquer mudança grande na balança.</p>
<h2>A mudança no corpo é gradual</h2>
<p>O segundo efeito, a mudança de composição corporal, é mais lento e progressivo. Isso é proposital e é o jeito saudável de acontecer. O tratamento começa em dose baixa e sobe aos poucos, ao longo de semanas, justamente para o organismo se adaptar com menos efeitos colaterais. É por isso que o resultado se constrói ao longo de meses, não de dias.</p>
<p>Nos estudos clínicos, os resultados mais expressivos de composição corporal se consolidam ao longo de vários meses de tratamento contínuo. Querer antecipar isso subindo a dose rápido demais só aumenta o desconforto, sem ganho real.</p>
<!--CTA-->
<h2>Por que a expectativa realista protege o resultado</h2>
<p>Entender esses dois tempos, o rápido (apetite) e o gradual (corpo), evita duas armadilhas comuns. A primeira é desanimar na terceira semana porque a balança não mudou o suficiente, quando o corpo está exatamente onde deveria estar. A segunda é a pressa de acelerar, que cobra o preço em náusea e desconforto. O tratamento bem conduzido respeita o ritmo do organismo.</p>
<h2>O papel do acompanhamento</h2>
<p>É no acompanhamento que essas expectativas ganham realidade. Com bioimpedância regular, dá para enxergar o que a balança sozinha esconde: se a perda está sendo de gordura, se a massa muscular está preservada, se o ritmo está adequado. A Dra. Isabel Aragão (CRM-SC 26139) atende em São José/SC e conduz o tratamento com injetáveis de forma individualizada, ajustando a dose conforme a resposta de cada paciente. O atendimento também está disponível online.</p>`,
  },
  {
    slug: 'lipedema-ou-gordura-localizada',
    num: 25,
    title: 'Lipedema ou Gordura Localizada: Como Saber a Diferença',
    shortTitle: 'Lipedema ou Gordura Localizada',
    intro: 'Gordura que não sai com dieta nem exercício, concentrada nas pernas e dolorida ao toque. Pode ser lipedema, e não gordura localizada comum. Saber a diferença muda todo o tratamento.',
    category: 'Saúde',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Lipedema ou gordura localizada: como diferenciar as duas, quais sinais apontam para lipedema (dor, simetria, resistência a dieta) e por que o diagnóstico correto muda o tratamento. Avaliação em São José/SC.',
    related: ['lipedema-florianopolis-tratamento', 'bioimpedancia-o-que-e', 'medica-emagrecimento-sao-jose', 'quando-procurar-medico-para-emagrecer'],
    content: `
<p>Muita gente convive por anos com um acúmulo de gordura nas pernas que não responde a dieta nem a exercício, e ouve sempre a mesma explicação: é só se esforçar mais. Em parte dos casos, o problema não é falta de esforço. É lipedema, uma condição diferente da gordura localizada comum, que exige um olhar médico específico. Saber diferenciar as duas é o primeiro passo.</p>
<h2>O que é gordura localizada</h2>
<p>A gordura localizada é o acúmulo de gordura em regiões específicas do corpo, como abdômen, culote ou coxas. Ela é influenciada por genética, hormônios e estilo de vida e, apesar de teimosa, tende a responder, ainda que devagar, à perda de peso geral, à alimentação e ao exercício. É uma questão estética e metabólica comum, sem a dor característica do lipedema.</p>
<h2>O que é lipedema</h2>
<p>O lipedema é uma doença crônica do tecido adiposo que atinge principalmente mulheres. A gordura se acumula de forma anormal e desproporcional, quase sempre nos membros inferiores, e tem características que a gordura comum não tem. É mais do que um acúmulo: é uma condição de saúde que costuma passar anos sem diagnóstico.</p>
<h2>Os sinais que apontam para lipedema</h2>
<p>Alguns sinais ajudam a diferenciar o lipedema da gordura localizada comum:</p>
<ul>
  <li><strong>Simetria:</strong> o acúmulo acontece nos dois lados do corpo de forma parecida, não em um lugar só</li>
  <li><strong>Dor e sensibilidade:</strong> a área afetada dói ou incomoda ao toque e à pressão, algo que a gordura comum não provoca</li>
  <li><strong>Facilidade de hematomas:</strong> surgem manchas roxas sem lembrar de ter batido</li>
  <li><strong>Resistência a dieta e exercício:</strong> mesmo emagrecendo no resto do corpo, as pernas quase não mudam</li>
  <li><strong>Desproporção:</strong> tronco e braços em uma proporção, pernas e quadril em outra bem diferente</li>
  <li><strong>Sensação de peso nas pernas</strong> ao longo do dia</li>
</ul>
<p>Se vários desses sinais soam familiares, vale uma avaliação com um profissional que reconheça a condição.</p>
<!--CTA-->
<h2>Por que a diferença muda o tratamento</h2>
<p>Confundir lipedema com gordura localizada leva a anos de frustração, porque o que funciona para um não funciona para o outro. A gordura localizada comum melhora com controle de peso e mudança de estilo de vida. O lipedema não responde da mesma forma, e insistir só na dieta gera a sensação de fracasso, quando o problema era o diagnóstico. O cuidado do lipedema envolve outras abordagens, como terapia de compressão, drenagem, atividade física adaptada e controle de peso quando há obesidade associada.</p>
<h2>Como é feito o diagnóstico</h2>
<p>Não existe um exame de sangue ou de imagem que detecte o lipedema. O diagnóstico é clínico, feito com base na história da paciente, no exame físico e no descarte de outras condições. Por isso, o mais importante é buscar um profissional com experiência em reconhecer a condição, que muitas vezes passa despercebida.</p>
<h2>Avaliação em São José/SC</h2>
<p>A Dra. Isabel Aragão (CRM-SC 26139) atende em São José/SC e realiza avaliação de composição corporal e avaliação clínica para pacientes que suspeitam de lipedema ou que já têm o diagnóstico e buscam acompanhamento. O objetivo é identificar corretamente a condição e montar um plano adequado para cada caso, e não aplicar um protocolo genérico de emagrecimento. O atendimento também está disponível online.</p>`,
  },
]

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug)
}

export function getRelatedPosts(post: Post): Post[] {
  return post.related
    .map((s) => POSTS.find((p) => p.slug === s))
    .filter(Boolean) as Post[]
}
