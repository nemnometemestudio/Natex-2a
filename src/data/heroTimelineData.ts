export interface HeroMilestone {
  id: string;
  progress: number; // 0 to 1
  label: string;
  shortLabel: string;
  category: string;
  categorySlug: string;
  title: string;
  subtitle: string;
  specs: {
    fabric: string;
    durability: string;
    customization: string;
    targetAudience: string;
  };
  minBatch: string;
  imageSrc: string;
  colorTheme: string;
  accentColor: string;
}

export const HERO_MILESTONES: HeroMilestone[] = [
  {
    id: 'tshirt',
    progress: 0.0,
    label: '01. Camiseta Básica & Promocional',
    shortLabel: 'Camiseta',
    category: 'Linha Promocional & Eventos',
    categorySlug: 'camisetas-eventos',
    title: 'Camiseta Penteada 30.1',
    subtitle: 'Conforto térmico, toque macio e estamparia em alta definição para ações de marketing e grandes eventos.',
    specs: {
      fabric: '100% Algodão Penteado 30.1 ou Poliviscose PV',
      durability: 'Tratamento antipilling contra bolinhas e desbotamento',
      customization: 'Silk-screen digital, DTF têxtil, bordado localizado',
      targetAudience: 'Eventos corporativos, feiras, ações promocionais e endomarketing'
    },
    minBatch: 'Produção sob demanda em lote',
    imageSrc: '/hero-frames/frame-001.webp',
    colorTheme: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    accentColor: '#00B4D8'
  },
  {
    id: 'polo',
    progress: 0.176,
    label: '02. Camisa Polo Corporativa',
    shortLabel: 'Polo',
    category: 'Atendimento & Comercial',
    categorySlug: 'uniformes-corporativos',
    title: 'Polo Piquet Premium',
    subtitle: 'Alinhamento profissional para equipes de atendimento, lojas, concessionárias e supervisão comercial.',
    specs: {
      fabric: 'Piquet 50% Algodão / 50% Poliéster (Gramatura 210g/m²)',
      durability: 'Gola e punhos com costura dupla anti-ondulação',
      customization: 'Bordado computadorizado de alta definição no peito e mangas',
      targetAudience: 'Equipes de vendas, recepção, consultores e atendimento'
    },
    minBatch: 'Produção sob demanda em lote',
    imageSrc: '/hero-frames/frame-036.webp',
    colorTheme: 'from-[#00B4D8]/20 via-[#6200EA]/10 to-transparent',
    accentColor: '#00B4D8'
  },
  {
    id: 'social',
    progress: 0.312,
    label: '03. Camisa Social Sob Medida',
    shortLabel: 'Camisaria',
    category: 'Camisaria & Executivo',
    categorySlug: 'uniformes-corporativos',
    title: 'Camisa Social Fio 60/80',
    subtitle: 'Elegância e imponência visual com cortes Slim Fit ou Tradicional e colarinho estruturado.',
    specs: {
      fabric: 'Algodão Nobre Fio Tinto Maquinetado com Elastano',
      durability: 'Costura inglesa embutida e entretela italiana na gola',
      customization: 'Monograma bordado discreto e botões personalizados',
      targetAudience: 'Executivos, gerentes, setor financeiro e hotelaria'
    },
    minBatch: 'Produção sob demanda em lote',
    imageSrc: '/hero-frames/frame-063.webp',
    colorTheme: 'from-[#6200EA]/25 via-indigo-600/10 to-transparent',
    accentColor: '#8A2BE2'
  },
  {
    id: 'jaleco',
    progress: 0.397,
    label: '04. Jaleco & Linha Saúde',
    shortLabel: 'Jalecos',
    category: 'Saúde, Clínicas & Lab',
    categorySlug: 'uniformes-profissionais',
    title: 'Jaleco Gabardine Hospitalar',
    subtitle: 'Proteção biológica com caimento ergonômico, resistência a lavagens industriais e toque sedoso.',
    specs: {
      fabric: 'Gabardine Premium com elastano ou Microfibra Pesada',
      durability: 'Tratamento hidrorrepelente e antimicrobiano',
      customization: 'Bordado do brasão institucional e identificação do profissional',
      targetAudience: 'Hospitais, clínicas odontológicas, laboratórios e farmácias'
    },
    minBatch: 'Produção sob demanda em lote',
    imageSrc: '/hero-frames/frame-080.webp',
    colorTheme: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    accentColor: '#10B981'
  },
  {
    id: 'blazer',
    progress: 0.528,
    label: '05. Alfaiataria & Blazer Executivo',
    shortLabel: 'Alfaiataria',
    category: 'Alta Gestão & Diretoria',
    categorySlug: 'uniformes-corporativos',
    title: 'Terno & Blazer Corporativo',
    subtitle: 'Acabamento de alfaiataria fina com modelagem estruturada para diretoria e recepção de alto padrão.',
    specs: {
      fabric: 'Tecido Two Way com elastano e forro em cetim acetinado',
      durability: 'Ombreiras anatômicas e entretelas termo-colantes',
      customization: 'Modelagens exclusivas feminina e masculina sob medida',
      targetAudience: 'Diretoria, aviação, eventos solenes e recepções VIP'
    },
    minBatch: 'Produção sob demanda em lote',
    imageSrc: '/hero-frames/frame-106.webp',
    colorTheme: 'from-slate-700/40 via-[#6200EA]/20 to-transparent',
    accentColor: '#A78BFA'
  },
  {
    id: 'industrial',
    progress: 0.623,
    label: '06. Uniforme Operacional & Industrial',
    shortLabel: 'Industrial',
    category: 'Indústria Pesada & Obras',
    categorySlug: 'uniformes-industriais',
    title: 'Conjunto Brim Pesado 100% Algodão',
    subtitle: 'Resistência extrema contra abrasão, rasgos e calor para chão de fábrica e construção civil.',
    specs: {
      fabric: 'Brim Pesado Santanense / Cedro 100% Algodão (260g/m²)',
      durability: 'Costura tripla travada e reforço de entrepernas',
      customization: 'Faixas refletivas homologadas e bolsos cargo multifunção',
      targetAudience: 'Montadoras, metalúrgicas, construção civil e logística'
    },
    minBatch: 'Produção sob demanda em lote',
    imageSrc: '/hero-frames/frame-125.webp',
    colorTheme: 'from-[#FF6B00]/25 via-amber-600/10 to-transparent',
    accentColor: '#FF6B00'
  },
  {
    id: 'frigo',
    progress: 0.724,
    label: '07. Frigorífico & Indústria Alimentícia',
    shortLabel: 'Frigorífico',
    category: 'Câmaras Frias & Alimentos',
    categorySlug: 'uniformes-frigorifico',
    title: 'Uniforme Térmico & Sanitário',
    subtitle: 'Isolamento térmico até -35°C e tecidos sem botões externos para conformidade rigorosa com normas ANVISA/MAPA.',
    specs: {
      fabric: 'Manta térmica resinada com forro impermeabilizado',
      durability: 'Resistente a higienização com hipoclorito e autoclave',
      customization: 'Fechamento em velcro técnico e capuz integrado',
      targetAudience: 'Frigoríficos, laticínios, indústrias de pescados e congelados'
    },
    minBatch: 'Produção sob demanda em lote',
    imageSrc: '/hero-frames/frame-145.webp',
    colorTheme: 'from-sky-500/20 via-blue-600/10 to-transparent',
    accentColor: '#38BDF8'
  },
  {
    id: 'dress',
    progress: 0.824,
    label: '08. Para sua Loja & Marcas de Moda',
    shortLabel: 'Para sua Loja',
    category: 'Coleções Próprias B2B',
    categorySlug: 'private-label',
    title: 'Confecção para Marcas & Estilistas',
    subtitle: 'Desenvolvimento full-package: desde a criação da modelagem, corte a laser até etiquetagem e embalagem final.',
    specs: {
      fabric: 'Viscose maquinetada, linho puro, malharia nobre e crepes',
      durability: 'Controle de qualidade peça a peça com prova física',
      customization: 'Tags personalizadas, etiquetas bordadas e aviamentos exclusivos',
      targetAudience: 'Marcas de vestuário, e-commerces de moda e lojistas'
    },
    minBatch: 'Produção sob demanda em escala',
    imageSrc: '/hero-frames/frame-165.webp',
    colorTheme: 'from-emerald-600/25 via-[#6200EA]/15 to-transparent',
    accentColor: '#34D399'
  },
  {
    id: 'windbanner',
    progress: 1.0,
    label: '09. Wind Banners & Comunicação Têxtil',
    shortLabel: 'Wind Banners',
    category: 'Merchandising & Pontos de Venda',
    categorySlug: 'wind-banners',
    title: 'Wind Banner Flag Dupla Face',
    subtitle: 'Visibilidade máxima para sua marca com tecido naval resistente a vento, sol e chuva e estamparia digital UV.',
    specs: {
      fabric: 'Tecido Flag Microperfurado 100% Poliéster Premium',
      durability: 'Haste de fibra de vidro flexível e base giratória',
      customization: 'Sublimação digital fotográfica em alta definição',
      targetAudience: 'Concessionárias, eventos, praias, postos e feiras'
    },
    minBatch: 'Produção sob demanda em lote',
    imageSrc: '/hero-frames/frame-200.webp',
    colorTheme: 'from-[#00B4D8]/25 via-[#FF6B00]/15 to-transparent',
    accentColor: '#00B4D8'
  }
];
