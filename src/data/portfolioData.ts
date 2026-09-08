import { PortfolioItem } from '../types';

// Imagens de Modelos Reais das Roupas por Setor
import imgBrimIndustrial from '../assets/images/uniforme_brim_industrial_1787607277750.jpg';
import imgTermicoFrigorifico from '../assets/images/jaqueta_termica_camara_1787607287947.jpg';
import imgEscolarModelo from '../assets/images/uniforme_escolar_modelo_1787607297536.jpg';
import imgPoloExecutiva from '../assets/images/camisa_polo_piquet_modelo_1787608499467.jpg';
import imgCamisetaStreetwear from '../assets/images/camiseta_oversized_streetwear_1787608527893.jpg';
import imgWindBanner from '../assets/images/wind_banner_textil_mockup_1787608511033.jpg';
import imgBandeiras from '../assets/images/bandeiras_institucionais_textil_1787609106400.jpg';
import imgCortaVento from '../assets/images/jaqueta_cortavento_mockup_1787609117419.jpg';

export const PORTFOLIO_CATEGORIES = [
  { id: 'todos', name: 'Todos os Projetos' },
  { id: 'uniformes-corporativos', name: 'Uniformes Corporativos' },
  { id: 'uniformes-industriais', name: 'Uniformes Industriais' },
  { id: 'frigorifico', name: 'Frigorífico & Câmaras' },
  { id: 'escolares', name: 'Escolares' },
  { id: 'camisetas-eventos-merch', name: 'Camisetas, Eventos & Merch' },
  { id: 'private-label', name: 'Private Label' },
  { id: 'wind-banners', name: 'Wind Banners' },
  { id: 'bandeiras', name: 'Bandeiras' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Polos Corporativas em Piquet Nobre Anti-Pilling',
    category: 'Uniformes Corporativos',
    categorySlug: 'uniformes-corporativos',
    segment: 'Rede de Concessionárias e Atendimento',
    description: 'Desenvolvimento de camisas polo com gola e peitilho estruturados, bordado de alta resolução no peito e acabamento fino.',
    fabricUsed: 'Malha Piquet Confort (tecido definido sob contrato)',
    customizationUsed: 'Bordado computadorizado 8.000 pontos',
    imageUrl: imgPoloExecutiva,
    featured: true
  },
  {
    id: 'port-2',
    title: 'Conjuntos Operacionais em Brim Pesado com Refletivo',
    category: 'Uniformes Industriais',
    categorySlug: 'uniformes-industriais',
    segment: 'Operação Logística Portuária e Armazéns',
    description: 'Conjunto completo de calça e camisa em brim resistente com costuras triplas nos pontos de tração e fitas refletivas 3M.',
    fabricUsed: 'Brim Pesado Industrial (tecido definido sob contrato)',
    customizationUsed: 'Faixas refletivas aplicadas com costura dupla e bordado nas costas',
    imageUrl: imgBrimIndustrial,
    featured: true
  },
  {
    id: 'port-3',
    title: 'Jaquetas e Calças Térmicas para Indústria Frigorífica',
    category: 'Frigorífico & Câmaras',
    categorySlug: 'frigorifico',
    segment: 'Frigorífico e Indústria de Alimentos',
    description: 'Peças com isolamento térmico em manta especial, tecido exterior hidro-repelente e pala de proteção contra sujidade.',
    fabricUsed: 'Nylon Resinado com Forro Térmico (conforme especificação)',
    customizationUsed: 'Velcro industrial vedado e termocolante de identificação setorial',
    imageUrl: imgTermicoFrigorifico,
    featured: true
  },
  {
    id: 'port-4',
    title: 'Coleção Streetwear Masculina e Feminina Private Label',
    category: 'Private Label',
    categorySlug: 'private-label',
    segment: 'Marca Própria de Moda e Varejo',
    description: 'Produção completa de camisetas oversized e moletons com modelagem exclusiva, etiquetagem interna da marca e embalagem individual.',
    fabricUsed: 'Algodão Penteado Encorpado e Moletom Estruturado',
    customizationUsed: 'Estamparia Silk Screen em relevo gel e etiquetas tecidas',
    imageUrl: imgCamisetaStreetwear,
    featured: true
  },
  {
    id: 'port-5',
    title: 'Jaquetas Corta-Vento Esportivas Repelentes a Água',
    category: 'Camisetas, Eventos & Merch',
    categorySlug: 'camisetas-eventos-merch',
    segment: 'Programa de Endomarketing e Premiação Corporativa',
    description: 'Corta-ventos com capuz embutido, forro de tela e zíperes tratorados em tom contrastante, entregues para equipe comercial nacional.',
    fabricUsed: 'Nylon Tecnológico Repelente a Água',
    customizationUsed: 'Bordado frontal no peito e puxadores de zíper gravados',
    imageUrl: imgCortaVento,
    featured: true
  },
  {
    id: 'port-6',
    title: 'Kit de Wind Banners Gota para Ação de Ponto de Venda',
    category: 'Wind Banners',
    categorySlug: 'wind-banners',
    segment: 'Rede de Postos de Combustíveis e Serviços',
    description: 'Impressão digital contínua em tecido flag com haste flexível e bases de solo, com alta resistência a ventos constantes.',
    fabricUsed: 'Tecido Flag Especial para Fluxo Aerodinâmico',
    customizationUsed: 'Sublimação digital de alta saturação com passagem para o verso',
    imageUrl: imgWindBanner,
    featured: true
  },
  {
    id: 'port-7',
    title: 'Camisetas em Dry Fit para Corrida Corporativa e Feiras',
    category: 'Camisetas, Eventos & Merch',
    categorySlug: 'camisetas-eventos-merch',
    segment: 'Convenção de Vendas e Eventos Esportivos',
    description: 'Lote de camisetas esportivas com respirabilidade avançada, costura flatlock anti-atrito e estampa total sublimada.',
    fabricUsed: 'Dry Fit Respirável de Alta Absorção',
    customizationUsed: 'Sublimação digital contínua em alta fidelidade de cores',
    imageUrl: imgCamisetaStreetwear,
    featured: false
  },
  {
    id: 'port-8',
    title: 'Agasalhos Escolares e Camisetas em PV para Rede de Ensino',
    category: 'Escolares',
    categorySlug: 'escolares',
    segment: 'Rede de Colégios Particulares',
    description: 'Grade completa do infantil ao ensino médio, com tecidos de alta durabilidade para lavagens frequentes.',
    fabricUsed: 'Malha Escolar e Helanca Reforçada',
    customizationUsed: 'Brasão bordado com entretela macia e serigrafia atóxica',
    imageUrl: imgEscolarModelo,
    featured: false
  },
  {
    id: 'port-9',
    title: 'Bandeiras Oficiais Institucionais para Mastro Externo',
    category: 'Bandeiras',
    categorySlug: 'bandeiras',
    segment: 'Sedes Corporativas e Órgãos Institucionais',
    description: 'Bandeiras de grande porte com costura perimetral quádrupla e tralha reforçada com ilhoses de latão antioxidante.',
    fabricUsed: 'Tecido Náutico Especial para Intempéries',
    customizationUsed: 'Sublimação digital direta com penetração total',
    imageUrl: imgBandeiras,
    featured: false
  }
];
