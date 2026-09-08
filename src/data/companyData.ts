import { DifferentialItem, FAQItem, ProductionStep } from '../types';

export const COMPANY_INFO = {
  name: 'Natex Confecções',
  tagline: 'Da Ideia ao Tecido, Soluções Completas em Confecção de Escala.',
  secondaryTagline: 'Sua Marca, Nossa Confecção: Qualidade, Escala e Precisão Têxtil.',
  heroHeadline: 'Uniformes e soluções têxteis produzidos para empresas que precisam de escala, padrão e qualidade.',
  heroSubheadline: 'A Natex desenvolve e produz uniformes profissionais, peças corporativas, private label e materiais têxteis personalizados para empresas, instituições e marcas em todo o Brasil.',
  phoneDisplay: '(47) 99282-0556',
  phoneRaw: '5547992820556',
  whatsappUrl: 'https://wa.me/5547992820556',
  email: 'contato@natexconfeccoes.com.br',
  commercialEmail: 'comercial@natexconfeccoes.com.br',
  address: {
    street: 'Bairro Gravatá',
    city: 'Navegantes',
    state: 'SC',
    country: 'Brasil',
    cep: '88370-000',
    fullDisplay: 'Bairro Gravatá, Navegantes - SC, Santa Catarina, Brasil',
    coordinates: {
      lat: -26.8370166,
      lng: -48.6307307,
      mapsUrl: 'https://www.google.com/maps/place/Natex+Confec%C3%A7%C3%B5es/@-26.8370166,-48.6307307,17z/data=!3m1!4b1!4m6!3m5!1s0x94d8cfb43bdb9bb5:0xdb94f21fac8f2cd1!8m2!3d-26.8370166!4d-48.6307307!16s%2Fg%2F11ntp_r7hw',
      embedUrl: 'https://maps.google.com/maps?q=-26.8370166,-48.6307307&hl=pt-BR&z=17&output=embed',
    }
  },
  experienceYears: '30+',
  experienceText: 'Sócios com mais de 30 anos de experiência e estrutura consolidada no mercado industrial de confecção têxtil.',
  scope: 'Atendimento e expedição logística para todo o território nacional.',
  businessType: 'B2B / Atendimento Corporativo e Lotes Industriais',
  operatingHours: 'Segunda a Sexta: 07:30 às 17:30',
  colors: {
    navyDark: '#080E1E',
    purpleElectric: '#6200EA',
    orangeCta: '#FF6B00',
    cyanTech: '#00B4D8',
    pureWhite: '#FFFFFF',
  }
};

export const PRODUCTION_STEPS: ProductionStep[] = [
  {
    number: 1,
    title: 'Consultoria & Entendimento',
    shortDesc: 'Alinhamento técnico das necessidades operacionais, de marca ou de projeto.',
    detailedDesc: 'Análise minuciosa do segmento do cliente, ambiente de uso das peças, exigências ergonômicas, durabilidade requerida e identidade visual corporativa.',
    icon: 'SearchCheck',
    deliverable: 'Briefing técnico estruturado e direcionamento de tecidos.'
  },
  {
    number: 2,
    title: 'Seleção do Tecido & Modelagem',
    shortDesc: 'Definição de composições têxteis e desenvolvimento de moldes precisos.',
    detailedDesc: 'Escolha assertiva entre tecidos tecnológicos, ripstop, brim industrial, piquet nobre, dry fit ou composições sob medida com graduação computadorizada de tamanhos.',
    icon: 'Layers',
    deliverable: 'Ficha técnica de engenharia de produto e tabelas de medidas.'
  },
  {
    number: 3,
    title: 'Modelagem & Ficha Técnica',
    shortDesc: 'Alinhamento minucioso de engenharia, moldes e tabela de medidas.',
    detailedDesc: 'Desenvolvimento e conferência da ficha técnica completa, tabelas de graduação computadorizada e aprovação de aviamentos, cores e personalizações antes da liberação do corte.',
    icon: 'Shirt',
    deliverable: 'Ficha técnica homologada e especificações aprovadas.'
  },
  {
    number: 4,
    title: 'Aprovação & Programação',
    shortDesc: 'Ajustes finos homologados e inserção na esteira de produção industrial.',
    detailedDesc: 'Com as especificações e layout formalmente validados pelo cliente, iniciamos o cronograma de corte, separação de matéria-prima homologada e programação das células de costura.',
    icon: 'CheckCircle2',
    deliverable: 'Confirmação do lote e liberação para esteira industrial.'
  },
  {
    number: 5,
    title: 'Corte Industrial & Personalização',
    shortDesc: 'Corte automático de alta precisão e aplicação de bordados ou estamparia.',
    detailedDesc: 'Enfestamento padronizado, corte milimétrico para garantir simetria em todas as numerações, seguido por bordado computadorizado de alta definição, silk screen, DTF ou sublimação digital total.',
    icon: 'Scissors',
    deliverable: 'Painéis cortados e personalizados com tolerância zero a desvios.'
  },
  {
    number: 6,
    title: 'Costura, Fechamento & Acabamento',
    shortDesc: 'Montagem em linhas especializadas com costuras reforçadas e travetamento.',
    detailedDesc: 'Células de costura dedicadas por tipo de produto (alfaiataria, malharia pesada, operacional reforçado). Aplicação de aviamentos de alta resistência, botões, zíperes e etiquetas.',
    icon: 'Cpu',
    deliverable: 'Peças montadas com acabamento de alto padrão fabril.'
  },
  {
    number: 7,
    title: 'Inspeção de Qualidade & Expedição',
    shortDesc: 'Revisão peça por peça, passadoria, embalagem e envio para todo o Brasil.',
    detailedDesc: 'Conferência rigorosa de costura, medidas e acabamento. As peças são limpas, passadas a vapor, dobradas, ensacadas em lotes identificados e despachadas via transportadoras parceiras.',
    icon: 'Truck',
    deliverable: 'Lote pronto com rastreamento e entrega pontual.'
  }
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: 'escala-industrial',
    title: 'Capacidade de Produção em Escala',
    description: 'Parque fabril estruturado para atender demandas de médio e grande porte com constância, velocidade e pontualidade na entrega.',
    icon: 'Factory',
    highlight: 'Escala Industrial'
  },
  {
    id: 'validacao-tecnica',
    title: 'Rigor Técnico e Homologação Prévia',
    description: 'Você alinha modelagem, tecidos homologados, tabela de medidas e acabamentos com nossa equipe técnica antes do corte do lote.',
    icon: 'ShieldCheck',
    highlight: 'Rigor Técnico'
  },
  {
    id: 'know-how',
    title: 'Mais de 30 Anos de Experiência dos Sócios',
    description: 'Expertise técnica comprovada no desenvolvimento têxtil, corte industrial, modelagem avançada e gestão fabril.',
    icon: 'Award',
    highlight: '30+ Anos de Know-how'
  },
  {
    id: 'padronizacao-rigorosa',
    title: 'Padronização e Repetibilidade de Lote',
    description: 'Graduação de moldes computadorizada e tolerâncias fabris rigorosas para que o pedido de hoje tenha o mesmo padrão dos próximos anos.',
    icon: 'Maximize2',
    highlight: 'Padrão Fabril'
  },
  {
    id: 'atendimento-b2b',
    title: 'Atendimento Especializado B2B',
    description: 'Foco exclusivo em empresas, marcas, indústrias e instituições, compreendendo prazos corporativos, faturamento e demandas contratuais.',
    icon: 'Briefcase',
    highlight: 'Foco B2B'
  },
  {
    id: 'alcance-nacional',
    title: 'Atendimento e Envio para Todo o Brasil',
    description: 'Sede estratégica no polo têxtil de Santa Catarina (Navegantes), com logística ágil para escoamento rodoviário e aéreo nacional.',
    icon: 'MapPin',
    highlight: 'Brasil Inteiro'
  }
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'geral',
    question: 'Qual é a quantidade inicial ou lote mínimo para produção?',
    answer: 'Trabalhamos com quantidade inicial de lote mínimo sob consulta, avaliando a viabilidade de cada modelo, tecido e segmento. Entre em contato para alinharmos as melhores condições para o seu projeto.'
  },
  {
    id: 'faq-2',
    category: 'uniformes',
    question: 'Como funciona a escolha de tecidos e espessura (grossos, leves, térmicos)?',
    answer: 'Você pode indicar o tecido exato que sua empresa deseja ou, se preferir, informar sua necessidade de uso (ex: ambiente quente, trabalho pesado, câmara fria) para que nossos especialistas da Natex apresentem as melhores opções de tecidos recomendados do mercado.'
  },
  {
    id: 'faq-3',
    category: 'uniformes',
    question: 'Como funciona a escolha das cores das peças?',
    answer: 'Não nos limitamos a cores fixas. Você pode consultar opções de cores sob demanda, alinhar a cartela exata com a identidade visual da sua marca ou trazer suas referências pantone para avaliação técnica.'
  },
  {
    id: 'faq-4',
    category: 'producao',
    question: 'Os modelos mostrados no site são os únicos disponíveis?',
    answer: 'Não! Os modelos mostrados no site são exemplos ilustrativos de confecções que realizamos. Confeccionamos sob medida: você pode solicitar adaptações, trazer sua própria peça de referência física/foto ou pedir para construirmos uma modelagem exclusiva.'
  },
  {
    id: 'faq-5',
    category: 'producao',
    question: 'Como funciona a validação dos modelos antes do corte do lote?',
    answer: 'Trabalhamos com alinhamento rigoroso de fichas técnicas, tabelas de graduação de medidas corporativas e tecidos homologados. Todas as especificações técnicas, aviamentos e layouts são validados formalmente antes do início do corte.'
  },
  {
    id: 'faq-6',
    category: 'private-label',
    question: 'Vocês desenvolvem coleções e peças em modelo Private Label para marcas?',
    answer: 'Sim. Oferecemos estrutura completa de Private Label para marcas, lojas e e-commerces. Cuidamos do corte, costura, etiquetagem personalizada da sua marca, estamparia/bordado e embalagem com total confidencialidade.'
  },
  {
    id: 'faq-7',
    category: 'geral',
    question: 'A Natex atende empresas e clientes fora de Santa Catarina?',
    answer: 'Sim, atendemos empresas e marcas em todo o Brasil. Estamos sediados em Navegantes/SC, um polo logístico privilegiado, e expedimos pedidos para todos os estados brasileiros com transportadoras parceiras e rastreamento.'
  },
  {
    id: 'faq-8',
    category: 'orcamento',
    question: 'Como solicitar um orçamento comercial consultivo?',
    answer: 'Você pode preencher o formulário de cotação online aqui no site detalhando sua ideia ou clicar no botão de WhatsApp para falar diretamente com nossos consultores técnicos comerciais.'
  }
];
