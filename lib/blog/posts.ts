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
    title: 'Perda de Peso Saudável: Quanto Kg por Mês é Seguro (e Por Que Emagrecer Rápido é Perigoso)',
    shortTitle: 'Quanto Kg por Mês é Seguro Emagrecer',
    intro: 'Emagrecer rápido parece ótimo — até você descobrir o preço. Perda de cabelo, perda de músculo, cálculos na vesícula e efeito sanfona. Entenda por que o ritmo certo é fundamental.',
    category: 'Saúde',
    readTime: '5 min',
    date: 'Julho 2026',
    metaDesc: 'Quanto kg por mês é saudável perder: o ritmo ideal (0,5 a 1kg/semana), riscos do emagrecimento rápido (músculo, cabelo, vesícula), diferença entre perda de gordura e de peso.',
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
]

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug)
}

export function getRelatedPosts(post: Post): Post[] {
  return post.related
    .map((s) => POSTS.find((p) => p.slug === s))
    .filter(Boolean) as Post[]
}
