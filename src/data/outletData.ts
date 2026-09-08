export interface OutletGuideArticle {
  id: string;
  title: string;
  tagline: string;
  category: 'guia' | 'qualidade' | 'pronta-entrega' | 'lojistas' | 'colecao';
  categoryLabel: string;
  readingTime: string;
  imageUrl: string;
  summary: string;
  fullContent: string[];
  keyHighlights: string[];
  tags: string[];
  audience: 'Cliente Final' | 'Lojistas & Revenda' | 'Para Todos';
  actionPrompt: string;
}

// Keep OutletInstagramPost alias for backwards compatibility if needed
export type OutletInstagramPost = {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  tags: string[];
  postUrl: string;
  category: 'feminina' | 'masculina' | 'infantil' | 'loja' | 'promocao';
  dateDisplay: string;
};

export interface OutletDepartment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  tag: string;
  iconName: string;
}

export const OUTLET_INFO = {
  name: 'Natex Outlet',
  title: 'Outlet Loja de Fábrica Natex',
  tagline: 'Moda feminina, masculina e infantil com preço direto da fábrica em Navegantes – SC.',
  instagramHandle: '@natexoutlet',
  instagramUrl: 'https://www.instagram.com/natexoutlet/',
  phoneDisplay: '(47) 99282-0556',
  phoneRaw: '5547992820556',
  whatsappUrl: 'https://wa.me/5547992820556?text=Ol%C3%A1%21+Vim+pelo+site+da+Natex+e+gostaria+de+saber+mais+sobre+a+loja+Outlet+da+f%C3%A1brica.',
  address: {
    street: 'Bairro Gravatá (Anexo ao Parque Fabril Natex)',
    city: 'Navegantes',
    state: 'SC',
    cep: '88370-000',
    fullDisplay: 'Bairro Gravatá, Navegantes - SC, Santa Catarina, Brasil',
    googleMapsUrl: 'https://www.google.com/maps/place/Natex+Confec%C3%A7%C3%B5es/@-26.8370166,-48.6307307,17z/data=!3m1!4b1!4m6!3m5!1s0x94d8cfb43bdb9bb5:0xdb94f21fac8f2cd1!8m2!3d-26.8370166!4d-48.6307307!16s%2Fg%2F11ntp_r7hw',
    wazeUrl: 'https://waze.com/ul?ll=-26.8370166,-48.6307307&navigate=yes',
    embedUrl: 'https://maps.google.com/maps?q=-26.8370166,-48.6307307&hl=pt-BR&z=17&output=embed',
  },
  operatingHours: {
    weekdays: 'Segunda a Sexta: 07:30 às 18:00',
    saturday: 'Sábados: 08:00 às 12:00',
    sunday: 'Domingos e Feriados: Fechado',
  },
  benefits: [
    {
      title: 'Preço Direto de Fábrica',
      desc: 'Sem intermediários. Peças de ponta de estoque e excedentes selecionados da confecção com valores especiais.',
      icon: 'Tag',
    },
    {
      title: 'Moda para Toda a Família',
      desc: 'Araras rotativas com opções femininas, masculinas e infantis variando conforme os lotes fabris.',
      icon: 'Users',
    },
    {
      title: 'Qualidade Construtiva',
      desc: 'Acabamentos e tecidos de indústria têxtil com mais de 30 anos de tradição em Santa Catarina.',
      icon: 'Sparkles',
    },
    {
      title: 'Estacionamento & Fácil Acesso',
      desc: 'Localização no Bairro Gravatá em Navegantes, anexo ao parque fabril e com estacionamento.',
      icon: 'MapPin',
    },
  ]
};

export const OUTLET_DEPARTMENTS: OutletDepartment[] = [
  {
    id: 'feminina',
    title: 'Moda Feminina',
    subtitle: 'Elegância, Conforto & Versatilidade',
    description: 'Vestidos, blusas, regatas, calças casuais, conjuntos, shorts e peças em malha nobre com caimento impecável para todas as ocasiões.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
    highlights: ['Vestidos & Conjuntos', 'Blusas e Camisaria', 'Calças & Shorts Casuais', 'Tecidos leves e respiráveis'],
    tag: 'Feminino',
    iconName: 'Heart',
  },
  {
    id: 'masculina',
    title: 'Moda Masculina',
    subtitle: 'Básicos Nobres & Estilo Urbano',
    description: 'Camisetas em algodão penteado, polos em piquet, bermudas casuais, calças e casacos com modelagem ergonômica e alta durabilidade.',
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80',
    highlights: ['Camisetas 100% Algodão', 'Polos Clássicas & Modernas', 'Bermudas e Shorts', 'Linha Básicos Essenciais'],
    tag: 'Masculino',
    iconName: 'Shirt',
  },
  {
    id: 'infantil',
    title: 'Moda Infantil',
    subtitle: 'Liberdade, Conforto & Diversão',
    description: 'Roupas infantis pensadas para acompanhar a energia dos pequenos: tecidos macios, costuras antialérgicas, cores vivas e alta resistência.',
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80',
    highlights: ['Conjuntos Macios e Duráveis', 'Camisetas & Vestidinhos', 'Shorts e Bermudinhas', 'Toque suave para a pele'],
    tag: 'Infantil',
    iconName: 'Smile',
  },
];

export const OUTLET_ARTICLES: OutletGuideArticle[] = [
  {
    id: 'artigo-visita-qualidade',
    title: 'Por Que Visitar a Loja Física? Toque, Caimento e Qualidade de Fábrica',
    tagline: 'Sinta a textura dos tecidos nobres e conheça de perto a costura industrial de mais de 30 anos',
    category: 'qualidade',
    categoryLabel: 'Qualidade & Experiência',
    readingTime: '3 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    summary: 'Comprar moda direto da fábrica vai além do preço baixo: ao visitar nossa loja anexa ao parque fabril em Navegantes, você confere nos provadores a maciez das malhas penteadas, o peso do piquet e a costura reforçada de quem produz em escala técnica.',
    fullContent: [
      'Muitos clientes perguntam por que mantemos uma loja física aberta ao público anexa à confecção. A resposta está na experiência sensorial que nenhuma foto digital consegue transmitir com total fidelidade: o toque do tecido, o peso da malha e o caimento perfeito no corpo.',
      'Na confecção têxtil, detalhes milimétricos fazem toda a diferença: a densidade do fio de algodão, a elasticidade das fibras com elastano, o acabamento da gola que não deforma com as lavagens e as costuras com pesponto duplo.',
      'Ao entrar no espaço Outlet da Natex no Bairro Gravatá, você tem acesso a provadores amplos e confortáveis para experimentar cada modelo, comprovar a durabilidade dos materiais e entender por que a Natex é referência em Santa Catarina há mais de três décadas.'
    ],
    keyHighlights: [
      'Provadores higienizados e confortáveis no local',
      'Confirmação visual e tátil da espessura e toque das malhas',
      'Atendimento consultivo e acolhedor direto da confecção'
    ],
    tags: ['Qualidade Industrial', 'Visite a Loja', 'Navegantes SC', 'Toque Têxtil'],
    audience: 'Cliente Final',
    actionPrompt: 'Planejar Visita no Gravatá'
  },
  {
    id: 'artigo-como-funciona-outlet',
    title: 'Como Funciona o Outlet Natex: Ponta de Estoque e Oportunidades Reais',
    tagline: 'Entenda como os lotes fabris chegam às araras e por que cada visita traz surpresas diferentes',
    category: 'guia',
    categoryLabel: 'Como Funciona o Outlet',
    readingTime: '4 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80',
    summary: 'Diferente do varejo convencional com coleções estáticas, nosso espaço físico trabalha com excedentes selecionados e pontas de estoque da produção industrial. Isso significa renovação contínua e economia direta sem margem de revendedores intermediários.',
    fullContent: [
      'A indústria de confecção produz diariamente centenas de peças sob rígidos padrões de qualidade. Periodicamente, lotes de excedente de tecelagem nobre, cores sazonais de alto padrão e pontas de produções industriais são disponibilizados diretamente na loja anexa à fábrica.',
      'Por esse motivo, as araras do Outlet Natex são dinâmicas e rotativas: o que está disponível nesta semana pode ser totalmente diferente do lote da semana seguinte. Essa rotação constante garante preços muito vantajosos e oportunidades únicas de compras tanto para o dia a dia quanto para renovar o guarda-roupa da família inteira.',
      'Não é necessário possuir CNPJ para comprar na loja. O espaço atende pessoas físicas que buscam roupas duráveis com o melhor custo-benefício do litoral de Santa Catarina.'
    ],
    keyHighlights: [
      'Preços de fábrica sem intermediários comerciais',
      'Araras rotativas atualizadas conforme o fluxo fabril',
      'Compra liberada para consumidor final sem exigência de CNPJ'
    ],
    tags: ['Preço de Fábrica', 'Ponta de Estoque', 'Consumo Inteligente', 'Varejo Fabril'],
    audience: 'Para Todos',
    actionPrompt: 'Ver Horários de Atendimento'
  },
  {
    id: 'artigo-lojistas-revenda',
    title: 'Para Lojistas & Revendedores: Como Adquirir Produtos para sua Loja',
    tagline: 'Margem atrativa, pronta entrega e canal dedicado para abastecer o seu comércio',
    category: 'lojistas',
    categoryLabel: 'Lojistas & Revenda B2B',
    readingTime: '4 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
    summary: 'Comerciantes, butiques e lojistas de moda encontram na Natex uma oportunidade sólida: adquira lotes a pronta entrega ou agende reuniões para desenvolver coleções e abastecer seu ponto de venda com alta competitividade e confiabilidade de entrega.',
    fullContent: [
      'Se você é lojista, empreendedor de moda ou revendedor autônomo, a pontualidade e o padrão construtivo dos seus fornecedores determinam o sucesso do seu negócio. A Natex oferece suporte duplo: opções para compra a pronta entrega no espaço físico ou atendimento consultivo B2B para pedidos em maior volume.',
      'Comprar direto de quem tem infraestrutura de tecelagem, corte automático, estamparia, bordado e costura integrada permite que sua loja trabalhe com margens de lucro saudáveis e produtos que conquistam a fidelidade do consumidor final pela durabilidade extrema.',
      'Nossos consultores comerciais estão preparados para orientar lojistas sobre faturamento corporativo, pedidos em grade e viabilidade de coleções exclusivas com a identidade da sua marca.'
    ],
    keyHighlights: [
      'Atendimento consultivo especializado para lojistas',
      'Produtos com excelente apelo visual e padrão de costura',
      'Possibilidade de reposição e agilidade logística'
    ],
    tags: ['Lojistas', 'Revenda', 'Moda B2B', 'Atacado e Pronta Entrega'],
    audience: 'Lojistas & Revenda',
    actionPrompt: 'Falar com Consultor B2B'
  },
  {
    id: 'artigo-pronta-entrega',
    title: 'Pronta Entrega na Fábrica: Agilidade Sem Esperar Prazos de Produção',
    tagline: 'Escolha suas peças, experimente e leve na hora sem filas de espera fabril',
    category: 'pronta-entrega',
    categoryLabel: 'Pronta Entrega',
    readingTime: '3 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
    summary: 'Enquanto encomendas sob demanda exigem tempo de corte e costura, a loja Outlet é o local ideal para quem precisa de vestuário imediato: araras abastecidas com opções femininas, masculinas e infantis prontas para levar.',
    fullContent: [
      'A conveniência da pronta entrega é um dos pilares mais valorizados por quem nos visita. Clientes residentes em Navegantes, Itajaí, Penha, Balneário Piçarras e Balneário Camboriú aproveitam a proximidade para comprar roupas de qualidade sem enfrentar fretes ou prazos de envio.',
      'Você escolhe, prova no local, efetua o pagamento com condições facilitadas (cartões, PIX ou dinheiro) e sai com as suas peças em mãos no mesmo instante.',
      'Para quem está montando malas de viagem, precisando de looks versáteis de emergência ou querendo vestir a família no final de semana, a pronta entrega da Natex é sinônimo de tranquilidade e praticidade.'
    ],
    keyHighlights: [
      'Leve suas peças na hora sem espera de frete',
      'Formas de pagamento facilitadas (PIX, cartões e parcelamento)',
      'Local de fácil estacionamento ao lado da BR e do litoral'
    ],
    tags: ['Pronta Entrega', 'Sem Espera', 'Comodidade', 'Moda Imediata'],
    audience: 'Cliente Final',
    actionPrompt: 'Ver Como Chegar'
  },
  {
    id: 'artigo-moda-feminina-outlet',
    title: 'Moda Feminina de Fábrica: Vestidos, Conjuntos e Peças Casuais',
    tagline: 'Modelagens ergonômicas, frescor para o litoral e elegância descomplicada',
    category: 'colecao',
    categoryLabel: 'Moda Feminina',
    readingTime: '3 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    summary: 'A seção feminina da loja reúne vestidos leves, conjuntos confortáveis, blusas e camisaria desenhadas com tecidos fluidos que combinam perfeitamente com a rotina e o clima da região litorânea.',
    fullContent: [
      'O vestuário feminino produzido no parque fabril da Natex combina caimento impecável com tecidos que deixam a pele respirar. Nossas peças são desenvolvidas com atenção rigorosa à modelagem, garantindo liberdade de movimento e elegância em qualquer hora do dia.',
      'Nas araras da loja de fábrica, você encontra opções que transitam com facilidade do ambiente de trabalho ao momento de lazer à beira-mar, com estampas contemporâneas, cortes clássicos e cores harmoniosas.',
      'Vale a pena conferir a seção semanalmente, pois novas remessas de saias, shorts, calças e vestidos chegam com frequência.'
    ],
    keyHighlights: [
      'Tecidos leves com ótimo toque contra a pele',
      'Versatilidade do visual corporativo ao lazer',
      'Preços de confecção direta para renovar seu guarda-roupa'
    ],
    tags: ['Feminino', 'Vestidos', 'Conjuntos', 'Elegância Prática'],
    audience: 'Cliente Final',
    actionPrompt: 'Conferir no Gravatá'
  },
  {
    id: 'artigo-moda-masculina-basicos',
    title: 'Básicos Nobres Masculinos: A Força do Algodão Penteado e Piquet',
    tagline: 'Camisetas que não deformam a gola e polos elegantes com costura reforçada',
    category: 'colecao',
    categoryLabel: 'Moda Masculina',
    readingTime: '3 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    summary: 'Camisetas 100% algodão com toque aveludado e camisas polo com estrutura de gola impecável. Os básicos essenciais que todo homem precisa, com padrão de qualidade que suporta dezenas de lavagens.',
    fullContent: [
      'Todo homem sabe o valor de uma boa camiseta básica que não desbota, não cria bolinhas facilmente e cuja gola permanece firme após as lavagens. Essa durabilidade só é alcançada quando a malha utilizada possui fios selecionados e torção adequada.',
      'Na linha masculina disponível no Outlet Natex, destacam-se as t-shirts em malha penteada 30.1 de puro algodão e as polos clássicas em malha piquet com peitilho reforçado e botões personalizados.',
      'São peças curingas para compor looks casuais ou executivos modernos, com corte anatômico do tamanho P ao Plus Size.'
    ],
    keyHighlights: [
      'Malhas penteadas 100% algodão de alta densidade',
      'Golas caneladas resistentes que mantêm a estrutura',
      'Grade completa com modelagem pensada no homem contemporâneo'
    ],
    tags: ['Masculino', 'Camisetas Básicas', 'Polo Piquet', 'Durabilidade'],
    audience: 'Cliente Final',
    actionPrompt: 'Conhecer Linha Masculina'
  },
  {
    id: 'artigo-moda-infantil-conforto',
    title: 'Moda Infantil: Liberdade e Resistência para Brincar com Conforto',
    tagline: 'Roupas infantis confeccionadas para suportar a energia da criançada com toque hipoalergênico',
    category: 'colecao',
    categoryLabel: 'Moda Infantil',
    readingTime: '3 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80',
    summary: 'Roupas para crianças precisam de duas coisas fundamentais: maciez extrema para não irritar a pele sensível e costuras robustas para resistir às brincadeiras do dia a dia. Encontre conjuntinhos completos na fábrica.',
    fullContent: [
      'A infância é movimento contínuo. Pensando nisso, a produção infantil da Natex foca em costuras rebatidas, etiquetas confortáveis e tecidos de algodão respiráveis que evitam alergias e superaquecimento.',
      'Os pais encontram na loja de fábrica uma solução de economia inteligente: roupas com qualidade superior às do grande varejo comum por uma fração do preço, ideais para o ritmo acelerado de crescimento dos filhos.',
      'São opções de conjuntos, bermudinhas, camisetas e vestidos que unem cores alegres, estampas infantis lúdicas e facilidade na hora de lavar.'
    ],
    keyHighlights: [
      'Tecidos macios e seguros para a pele infantil',
      'Costuras com resistência reforçada para o dia a dia',
      'Economia essencial para o guarda-roupa que cresce rápido'
    ],
    tags: ['Infantil', 'Conforto dos Pequenos', 'Roupas Resistentes', 'Dia a Dia'],
    audience: 'Cliente Final',
    actionPrompt: 'Ver Seção Infantil'
  },
  {
    id: 'artigo-sustentabilidade-industria',
    title: 'Aproveitamento Têxtil Inteligente: Menos Desperdício, Mais Valor',
    tagline: 'Como o modelo de outlet da fábrica valoriza cada metro de tecido produzido',
    category: 'qualidade',
    categoryLabel: 'Sustentabilidade Fabril',
    readingTime: '4 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80',
    summary: 'Disponibilizar os excedentes nobres diretamente na loja anexa é uma prática sustentável que reduz o descarte industrial e democratiza o acesso a roupas confeccionadas com rigor técnico.',
    fullContent: [
      'Na indústria da moda global, o descarte de sobras têxteis é um dos maiores desafios ecológicos. Na Natex, adotamos uma abordagem de corte computadorizado com encaixe milimétrico para maximizar o rendimento das malhas e transformar os excedentes em vestuário útil e acessível.',
      'Quando você adquire uma peça no nosso outlet de fábrica, está participando de um ciclo produtivo responsável que valoriza a mão de obra local catarinense e o uso integral das matérias-primas nobres.',
      'É a combinação perfeita entre economia financeira para você e menor impacto ambiental para a nossa região.'
    ],
    keyHighlights: [
      'Redução de resíduos através do aproveitamento integral de lotes',
      'Valorização do polo confeccionista de Santa Catarina',
      'Consumo consciente e direto da fonte produtora'
    ],
    tags: ['Sustentabilidade', 'Indústria Têxtil', 'Consumo Consciente', 'Navegantes'],
    audience: 'Para Todos',
    actionPrompt: 'Apoiar Produção Local'
  },
  {
    id: 'artigo-dicas-compras-outlet',
    title: 'Dicas Práticas para Aproveitar Sua Visita ao Outlet da Fábrica',
    tagline: 'Melhores horários, estacionamento, formas de pagamento e como planejar seu roteiro',
    category: 'guia',
    categoryLabel: 'Guia do Visitante',
    readingTime: '3 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80',
    summary: 'Vai passar por Navegantes ou mora na região? Confira as orientações para aproveitar sua experiência de compras com tranquilidade, facilidade de estacionamento e atendimento personalizado.',
    fullContent: [
      'Planejar sua visita ao Outlet Natex é simples: nossa fábrica fica no Bairro Gravatá, com acesso fácil pelas principais vias de Navegantes e a poucos minutos das praias e do aeroporto.',
      'Contamos com vagas de estacionamento no próprio parque fabril, facilitando a parada tanto para famílias quanto para compradores que transportam compras maiores.',
      'Se você busca araras recém-repostas, os primeiros dias da semana e as manhãs de sábado são excelentes momentos. Venha com tempo para provar as peças nos nossos provadores e descobrir achados imperdíveis!'
    ],
    keyHighlights: [
      'Estacionamento anexo no parque fabril',
      'Localização estratégica no Gravatá em Navegantes',
      'Aceitamos cartões de crédito, débito, PIX e dinheiro'
    ],
    tags: ['Guia de Compras', 'Estacionamento Próprio', 'Gravatá Navegantes', 'Dicas de Visita'],
    audience: 'Para Todos',
    actionPrompt: 'Traçar Rota no Mapa'
  }
];

// Re-export backwards-compatible OUTLET_INSTAGRAM_POSTS for existing references
export const OUTLET_INSTAGRAM_POSTS: OutletInstagramPost[] = OUTLET_ARTICLES.map((art, idx) => ({
  id: art.id,
  imageUrl: art.imageUrl,
  caption: `${art.title} - ${art.tagline}`,
  likes: 150 + (idx * 23),
  comments: 18 + (idx * 4),
  tags: art.tags.map(t => `#${t.replace(/\s+/g, '')}`),
  postUrl: OUTLET_INFO.instagramUrl,
  category: art.category === 'colecao' ? 'feminina' : (art.category === 'lojistas' ? 'loja' : 'promocao'),
  dateDisplay: art.readingTime
}));

export const OUTLET_FAQS = [
  {
    question: 'A loja Outlet é aberta ao público em geral?',
    answer: 'Sim! Nossa loja Outlet é aberta para todos os consumidores finais. Você não precisa ter CNPJ para comprar. Qualquer pessoa pode visitar a loja na fábrica e aproveitar os preços especiais direto de confecção.',
  },
  {
    question: 'Quais são as formas de pagamento aceitas na loja física?',
    answer: 'Aceitamos cartões de crédito e débito de todas as principais bandeiras, PIX instantâneo e dinheiro. Também oferecemos opções de parcelamento no cartão.',
  },
  {
    question: 'Quais tamanhos vocês disponibilizam nas araras?',
    answer: 'Disponibilizamos opções na moda feminina, masculina e infantil, do juvenil ao adulto. Por se tratar de ponta de estoque e excedentes da indústria, a disponibilidade de modelos, cores e numerações é rotativa e sujeita ao estoque físico existente no momento da visita.',
  },
  {
    question: 'Onde a loja fica localizada exatamente?',
    answer: 'A loja fica localizada no Bairro Gravatá em Navegantes - SC, anexa ao parque fabril da Natex Confecções. Temos fácil acesso e espaço de estacionamento para clientes.',
  },
  {
    question: 'Como fico sabendo das reposições e novidades da semana?',
    answer: 'Acompanhe nosso perfil oficial no Instagram @natexoutlet! Postamos diariamente nos stories e no feed as novidades que chegam às araras, provadores, promoções relâmpago e lançamentos.',
  },
];
