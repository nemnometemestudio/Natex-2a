import { ProductCategory, ProductItem } from '../types';

// Imagens de Modelos Reais das Roupas por Setor
import imgJalecoSaude from '../assets/images/jaleco_medico_uniforme_1787607267372.jpg';
import imgBrimIndustrial from '../assets/images/uniforme_brim_industrial_1787607277750.jpg';
import imgTermicoFrigorifico from '../assets/images/jaqueta_termica_camara_1787607287947.jpg';
import imgEscolarModelo from '../assets/images/uniforme_escolar_modelo_1787607297536.jpg';
import imgCorporativoExecutivo from '../assets/images/uniforme_social_executivo_1787607310621.jpg';
import imgPoloExecutiva from '../assets/images/camisa_polo_piquet_modelo_1787608499467.jpg';
import imgCamisetaStreetwear from '../assets/images/camiseta_oversized_streetwear_1787608527893.jpg';
import imgWindBanner from '../assets/images/wind_banner_textil_mockup_1787608511033.jpg';
import imgBandeiras from '../assets/images/bandeiras_institucionais_textil_1787609106400.jpg';
import imgCortaVento from '../assets/images/jaqueta_cortavento_mockup_1787609117419.jpg';
import imgAvental from '../assets/images/avental_profissional_brim_1787609128909.jpg';
import imgScrub from '../assets/images/scrub_hospitalar_gabardine_1787661730600.jpg';
import imgMoletom from '../assets/images/moletom_canguru_premium_1787661743916.jpg';
import imgColetePuffer from '../assets/images/colete_puffer_executivo_1787661758010.jpg';
import imgMacacaoIndustrial from '../assets/images/macacao_industrial_seguranca_1787661768848.jpg';
import imgAgasalhoEscolar from '../assets/images/agasalho_escolar_completo_1787661783524.jpg';
import imgEcobag from '../assets/images/ecobag_lona_algodao_1787661795317.jpg';
import imgDomaChef from '../assets/images/doma_chef_gastronomia_1787661807548.jpg';
import imgJaquetaIndustrialBicolor from '../assets/images/jaqueta_industrial_bicolor_1788545719604.jpg';
import imgCalcaIndustrialCargo from '../assets/images/calca_industrial_cargo_1788545751977.jpg';
import imgColeteIndustrialZiper from '../assets/images/colete_industrial_ziper_1788545769958.jpg';
import imgBermudaIndustrialObra from '../assets/images/bermuda_industrial_obra_1788545792120.jpg';
import imgCamisaMangaCurtaBranca from '../assets/images/camisa_manga_curta_branca_1788545811247.jpg';
import imgCamisetaFigurinistaBranca from '../assets/images/camiseta_figurinista_branca_1788545831458.jpg';
import imgFrigorificoModeloCompleto from '../assets/images/frigorifico_modelo_completo_1788546808586.jpg';
import imgFrigorificoJaquetaBranca from '../assets/images/frigorifico_jaqueta_branca_1788546826588.jpg';
import imgFrigorificoPoloBranca from '../assets/images/frigorifico_polo_branca_1788546838972.jpg';
import imgFrigorificoCamisetaCurtaBranca from '../assets/images/frigorifico_camisa_curta_branca_1788546853317.jpg';
import imgFrigorificoCamisetaLongaBranca from '../assets/images/frigorifico_camisa_longa_branca_1788546874686.jpg';
import imgFrigorificoCalcaBranca from '../assets/images/frigorifico_calca_branca_1788546886395.jpg';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'cat-profissionais',
    slug: 'uniformes-profissionais',
    name: 'Uniformes Profissionais',
    shortDescription: 'Para empresas que precisam padronizar suas equipes com elegância, conforto e durabilidade.',
    fullDescription: 'Soluções completas de vestuário profissional para equipes operacionais, comerciais, de atendimento e serviços. Peças confeccionadas com modelagem ergonômica que valorizam a identidade corporativa e oferecem alta resistência à lavagem constante.',
    heroHeadline: 'Uniformes Profissionais para Empresas que Valorizam sua Marca e suas Equipes',
    heroSubheadline: 'Padronização visual, tecidos confortáveis e alta durabilidade confeccionados sob medida em escala para a sua empresa.',
    badgeText: 'Linha Corporativa & Equipes',
    iconName: 'Users',
    imageUrl: imgJalecoSaude,
    applications: [
      'Equipes de atendimento e recepção',
      'Equipes comerciais e de vendas externas',
      'Redes de franquias e varejo',
      'Prestadores de serviços técnicos e manutenção leve',
      'Setores administrativos e de logística'
    ],
    pieces: [
      'Camisas Polo Piquet (tradicional e slim)',
      'Camisas Sociais manga curta e longa',
      'Calças operacionais e sociais com elastano',
      'Camisetas em algodão e dry fit',
      'Aventais de atendimento',
      'Jaquetas e coletes institucionais'
    ],
    fabrics: [
      'Piquet 50% Algodão / 50% Poliéster (anti-pilling)',
      'Algodão 100% Penteado 30.1',
      'Microfibra acetinada e Gabardine',
      'Tricoline mista (algodão e poliéster) de fácil passadoria',
      'Sarja leve com elastano'
    ],
    customizations: [
      'Bordado computadorizado de alta precisão no peito e mangas',
      'Silk Screen têxtil com tintas de alta fixação',
      'DTF têxtil para logotipos detalhados e degradês',
      'Etiquetas personalizadas'
    ],
    productionProcess: [
      { title: 'Alinhamento de Identidade', description: 'Adequação dos padrões de cores da marca e modelagens desejadas.' },
      { title: 'Alinhamento de Modelagem', description: 'Conferência de grade e validação de medidas antes do corte.' },
      { title: 'Corte e Costura em Escala', description: 'Produção com controle rigoroso de numerações do PP ao XGG.' },
      { title: 'Expedição com Separação por Setores', description: 'Embalagem identificada para facilitar a distribuição interna na sua empresa.' }
    ],
    differentials: [
      'Modelagem anatômica e alinhamento minucioso de ficha técnica',
      'Tecidos com tratamento anti-pilling (não cria bolinhas)',
      'Reforço de costura nas áreas de maior tração',
      'Atendimento e envio para empresas em todo o Brasil'
    ],
    faqs: [
      {
        question: 'Podemos solicitar tamanhos especiais ou numerações fora do padrão?',
        answer: 'Sim. Como somos indústria e desenvolvemos as modelagens, atendemos grades do PP ao plus size (XGG/G5) mantendo a mesma proporção e caimento.'
      },
      {
        question: 'Como garantir que a cor do tecido corresponda ao manual da minha marca?',
        answer: 'Trabalhamos com cartelas têxteis homologadas e fornecedores de primeira linha para aproximar ao máximo as tonalidades das cores Pantone da sua identidade visual.'
      },
      {
        question: 'Existe reposição de lotes com o mesmo padrão no futuro?',
        answer: 'Sim. Mantemos os arquivos técnicos, moldes e arquivos de bordado/serigrafia arquivados para que futuros pedidos de novos funcionários mantenham rigorosamente o mesmo padrão.'
      }
    ],
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento para Uniformes Profissionais para minha empresa.'
  },
  {
    id: 'cat-industriais',
    slug: 'uniformes-industriais',
    name: 'Uniformes Industriais',
    shortDescription: 'Para operações que precisam de peças funcionais, altamente resistentes e seguras.',
    fullDescription: 'Vestuário operacional robusto desenvolvido para suportar ambientes fabris, construção civil, oficinas, metalúrgicas, galpões logísticos e operações pesadas. Costuras duplas ou triplas, tecidos ripstop e brim pesado com faixas refletivas homologadas.',
    heroHeadline: 'Uniformes Industriais e Operacionais de Alta Resistência e Segurança',
    heroSubheadline: 'Confeccionados em brim pesado, ripstop e tecidos técnicos com reforço estrutural para aguentar o ritmo da indústria.',
    badgeText: 'Linha Operacional Pesada',
    iconName: 'HardHat',
    imageUrl: imgBrimIndustrial,
    applications: [
      'Indústrias pesadas, montagens e metalúrgicas',
      'Construção civil, empreiteiras e infraestrutura',
      'Operações de logística, armazéns e centros de distribuição',
      'Oficinas mecânicas e manutenção eletromecânica',
      'Portos, terminais de carga e transporte rodoviário'
    ],
    pieces: [
      'Conjuntos de brim (camisa operacional + calça)',
      'Calças operacionais com reforço no joelho e bolsos cargo',
      'Macacões industriais inteiriços',
      'Camisas e jaquetas com faixas refletivas 3M ou padrão ABNT',
      'Coletes operacionais de alta visibilidade',
      'Aventais de brim e lonas técnicas'
    ],
    fabrics: [
      'Brim 100% Algodão Pesado (Santista, Cedro ou similares)',
      'Tecido Ripstop antirasgo para alta durabilidade',
      'Sarja pesada mista (67% Poliéster / 33% Algodão)',
      'Tecidos com acabamento repelente a líquidos e poeiras'
    ],
    customizations: [
      'Bordados de alta tenacidade resistentes a lavagens industriais',
      'Silk screen com tinta plastisol de alta elasticidade',
      'Aplicação de faixas refletivas de alta visibilidade certificadas',
      'Travetes reforçados nos bolsos, passadores e gavião da calça'
    ],
    productionProcess: [
      { title: 'Engenharia do Posto de Trabalho', description: 'Identificação dos pontos de abrasão, calor e movimento do operador.' },
      { title: 'Corte Reforçado com Fio Correto', description: 'Corte no sentido exato da trama do tecido para evitar torções após lavagem.' },
      { title: 'Costura em Máquinas de Braço Triplo', description: 'Fechamento com pontos duplos e travetamento estrutural em todas as junções críticas.' },
      { title: 'Inspeção de Resistência', description: 'Validação de zíperes tratorados, botões metálicos anti-arrancamento e costuras.' }
    ],
    differentials: [
      'Costuras duplas e triplas com linha de alta tenacidade',
      'Reforço de tecido nos joelhos, entrepernas e cotovelos',
      'Modelagem com folga ergonômica para garantir mobilidade ao trabalhador',
      'Alinhamento técnico ergonômico antes da produção em escala'
    ],
    faqs: [
      {
        question: 'Os uniformes resistem a lavanderias industriais?',
        answer: 'Sim. Utilizamos tecidos pré-encolhidos de primeira linha (Cedro, Santista e parceiros) e aviamentos que suportam lavagens em altas temperaturas e ciclos mecânicos agressivos.'
      },
      {
        question: 'Vocês aplicam faixas refletivas para normas de visibilidade noturna?',
        answer: 'Sim, aplicamos fitas refletivas fluorescentes e microprismáticas homologadas com costura dupla em braços, peito, pernas e costas.'
      }
    ],
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento para Uniformes Industriais e Operacionais.'
  },
  {
    id: 'cat-frigorifico',
    slug: 'uniformes-frigorifico',
    name: 'Uniformes para Frigoríficos',
    shortDescription: 'Soluções térmicas e sanitárias para ambientes industriais e operações frigoríficas.',
    fullDescription: 'Linha especializada para indústrias de carnes, laticínios, pescados e processamento de alimentos. Atende a rigorosos critérios de higiene, conforto térmico para câmaras frias e facilidade de desinfecção contínua.',
    heroHeadline: 'Uniformes Especializados para Frigoríficos, Câmaras Frias e Indústrias de Alimentos',
    heroSubheadline: 'Proteção térmica, higiene estrita e tecidos resistentes a umidade e frequentes sanitizações.',
    badgeText: 'Linha Frigorífica & Térmica',
    iconName: 'Snowflake',
    imageUrl: imgFrigorificoModeloCompleto,
    applications: [
      'Frigoríficos de aves, bovinos, suínos e pescados',
      'Câmaras frias, túneis de congelamento e salas de desossa',
      'Laticínios, indústrias de embutidos e frios',
      'Centros de distribuição de perecíveis refrigerados'
    ],
    pieces: [
      'Jaquetas térmicas para câmara fria (manta resinada interna)',
      'Calças térmicas com forro matelassado e punhos ajustáveis',
      'Conjuntos de brim branco/cinza claro higiênico',
      'Aventais impermeáveis sanitários',
      'Balaclavas e toucas térmicas integradas'
    ],
    fabrics: [
      'Nylon resinado / impermeabilizado para retenção térmica',
      'Manta térmica interna de poliéster de alta densidade',
      'Brim 100% Algodão ou misto branco de alta resistência a alvejantes',
      'Forro interno térmico matelassê'
    ],
    customizations: [
      'Fechamentos sem botões soltos (fechamento por velcro ou zíper protegido)',
      'Bordados ou termocolantes selados',
      'Identificação colorida por setores de risco/área limpa'
    ],
    productionProcess: [
      { title: 'Dimensionamento Térmico', description: 'Definição da gramatura da manta térmica conforme a temperatura do ambiente (resfriado vs. congelado).' },
      { title: 'Matelassamento e Selagem', description: 'Costuras estruturadas para evitar deslocamento do enchimento térmico nas lavagens.' },
      { title: 'Conformidade Sanitária', description: 'Ausência de bolsos externos onde possa acumular sujidade, em conformidade com boas práticas fabris.' },
      { title: 'Inspeção de Hermeticidade', description: 'Teste de vedação nos punhos, barras e golas.' }
    ],
    differentials: [
      'Camada térmica com isolamento eficiente sem limitar o movimento do operador',
      'Resistente a lavagens com desinfetantes industriais e cloro',
      'Modelagem desenvolvida especificamente para a rotina de frigoríficos',
      'Homologação de isolamento e especificações técnicas de câmara'
    ],
    faqs: [
      {
        question: 'As peças térmicas suportam que faixa de temperatura?',
        answer: 'Confeccionamos desde modelos leves para ambientes resfriados (0°C a 10°C) até jaquetas e calças térmicas pesadas com manta matelassada de alta gramatura para câmaras de congelamento profundo (-18°C a -30°C).'
      },
      {
        question: 'Como é feito o fechamento para evitar desprendimento de botões na linha de produção?',
        answer: 'Utilizamos fechamento frontal por zíper protegido com pala de velcro contínuo ou botões de pressão embutidos, eliminando riscos de desprendimento.'
      }
    ],
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento de Uniformes para Frigorífico e Câmaras Frias.'
  },
  {
    id: 'cat-corporativos',
    slug: 'uniformes-corporativos',
    name: 'Uniformes Corporativos',
    shortDescription: 'Polos, camisas sociais, calças e peças refinadas para elevar a presença da sua equipe.',
    fullDescription: 'Linha executiva e institucional focada na apresentação impecável de lideranças, escritórios, consultorias, bancos, concessionárias e áreas corporativas. Tecidos nobres com toque macio, corte refinado e acabamento premium.',
    heroHeadline: 'Uniformes Corporativos com Padrão Executivo e Alta Sofisticação',
    heroSubheadline: 'Camisas sociais, polos piquet nobres e peças refinadas que transmitem credibilidade e autoridade.',
    badgeText: 'Linha Executiva Premium',
    iconName: 'Briefcase',
    imageUrl: imgCorporativoExecutivo,
    applications: [
      'Escritórios corporativos, advocacia e consultorias',
      'Concessionárias de veículos e imobiliárias',
      'Lideranças, gerências e equipes de atendimento VIP',
      'Hotéis, eventos institucionais e recepções executivas'
    ],
    pieces: [
      'Camisas Sociais manga longa e curta (feminina e masculina com pences)',
      'Camisas Polo Piquet de fio nobre com golas trabalhadas',
      'Calças em sarja acetinada ou alfaiataria com elastano',
      'Cardigans, suéteres e coletes sociais',
      'Blazers corporativos leves e estruturados'
    ],
    fabrics: [
      'Tricoline de Algodão Nobre com Fio Egípcio / Poliéster nobre',
      'Piquet Nobre 50% Algodão / 50% Poliéster com acabamento anti-peeling',
      'Gabardine microfibra de toque suave e caimento impecável',
      'Tecidos com tecnologia Easy Iron (fácil de passar e amassa menos)'
    ],
    customizations: [
      'Bordado micro-definido monocromático ou colorido',
      'Gravação a laser em botões personalizados',
      'Pespontos finos e acabamento de gola francesa estruturada',
      'Vivo contrastante em golas e carcelas'
    ],
    productionProcess: [
      { title: 'Modelagem de Alfaiataria', description: 'Desenho de moldes anatômicos masculinos e femininos com caimento refinado.' },
      { title: 'Corte Milimétrico de Alta Costura', description: 'Alinhamento rigoroso de tramas e padronagens.' },
      { title: 'Montagem com Entretelas Importadas', description: 'Golas e punhos firmes que não desestruturam após o uso diário.' },
      { title: 'Passadoria a Vapor e Ensacamento Individual', description: 'Entrega das peças prontas para vestir no cabide ou dobradas.' }
    ],
    differentials: [
      'Acabamento interno limpo com costuras embutidas',
      'Golas e punhos que mantêm a estrutura mesmo após lavagens frequentes',
      'Grade completa com modelagens femininas e masculinas ajustadas',
      'Alinhamento minucioso de caimento e especificações executivas'
    ],
    faqs: [
      {
        question: 'As camisas sociais possuem modelagem feminina e masculina diferenciada?',
        answer: 'Sim, a modelagem feminina conta com recortes frontais e pences anatômicas que garantem conforto e elegância sem repuxar no busto, enquanto a masculina possui corte slim ou tradicional confortável.'
      },
      {
        question: 'As polos desbotam ou encolhem com o tempo?',
        answer: 'Utilizamos malhas piquet com tingimento reativo de alta solidez e fio tinto que preservam a intensidade das cores e mantêm a estabilidade dimensional.'
      }
    ],
    whatsappMessage: 'Olá! Gostaria de cotar Uniformes Corporativos e Camisas Polo para minha empresa.'
  },
  {
    id: 'cat-escolares',
    slug: 'uniformes-escolares',
    name: 'Uniformes Escolares',
    shortDescription: 'Produção para colégios, redes de ensino e projetos educacionais em grande escala.',
    fullDescription: 'Confeccionamos uniformes escolares pensados para a rotina agitada de crianças e jovens: tecidos de toque agradável, alta durabilidade, resistência a manchas, lavagens diárias intensas e excelente custo-benefício para redes de colégios.',
    heroHeadline: 'Uniformes Escolares Confortáveis, Duráveis e Produzidos em Escala para Redes de Ensino',
    heroSubheadline: 'Do maternal ao ensino médio: conjuntos esportivos, camisetas, bermudas e jaquetas com entrega pontual para início do ano letivo.',
    badgeText: 'Linha Educacional & Colégios',
    iconName: 'GraduationCap',
    imageUrl: imgEscolarModelo,
    applications: [
      'Colégios particulares e redes de franquias educacionais',
      'Secretarias municipais e projetos educacionais de prefeituras',
      'Escolas técnicas, faculdades e centros universitários',
      'Academias e escolinhas de esportes integradas'
    ],
    pieces: [
      'Camisetas em PV (Poliéster/Viscose) e 100% Algodão',
      'Bermudas em tactel pesado, suplex ou helanca',
      'Calças de agasalho em helanca flanelada ou moletom peluciado',
      'Jaquetas corta-vento forradas e casacos de frio escolares',
      'Regatas de educação física em dry fit furadinho'
    ],
    fabrics: [
      'Malha PV (67% Poliéster / 33% Viscose) - durável, anti-pilling, fácil lavagem',
      'Helanca pesada 100% poliéster para agasalhos esportivos',
      'Moletom 2 ou 3 cabos flanelado quentinho',
      'Dry Fit tecnológico respirável'
    ],
    customizations: [
      'Silk screen com tintas atóxicas de alta elasticidade',
      'Bordados de brasões escolares com fundo entretelado macio para não pinicar a pele',
      'Sublimação digital total em detalhes esportivos',
      'Etiquetas de identificação de nome do aluno'
    ],
    productionProcess: [
      { title: 'Planejamento de Safra Escolar', description: 'Cronograma antecipado para garantir entrega antes do início do ano letivo.' },
      { title: 'Graduação do Tamanho 02 ao Adulto', description: 'Moldes adaptados ao biotipo infantil e juvenil com folga de crescimento.' },
      { title: 'Costura com Reforço em Joelhos e Gancho', description: 'Garantia de resistência para brincadeiras no chão e atividades físicas.' },
      { title: 'Separação por Grades e Embalagem Master', description: 'Facilitação total para a loja escolar ou distribuição da secretaria.' }
    ],
    differentials: [
      'Pontualidade rigorosa para o calendário de volta às aulas',
      'Tecidos confortáveis que não irritam a pele sensível das crianças',
      'Golas de ribana reforçadas que não esgarçam com facilidade',
      'Alinhamento de grade e conformidade com a comissão do colégio'
    ],
    faqs: [
      {
        question: 'Com quanta antecedência devemos encomendar a remessa de volta às aulas?',
        answer: 'Recomendamos iniciar o alinhamento e prototipagem entre agosto e outubro para garantir que a produção em lote seja entregue com folga entre dezembro e janeiro.'
      },
      {
        question: 'Vocês produzem reposições durante o ano letivo?',
        answer: 'Sim, mantemos a grade técnica e matrizes salvas para atender os lotes de reposição no decorrer do ano.'
      }
    ],
    whatsappMessage: 'Olá! Gostaria de cotar Uniformes Escolares para nossa instituição de ensino.'
  },
  {
    id: 'cat-private-label',
    slug: 'private-label',
    name: 'Private Label & Confecção para Marcas',
    shortDescription: 'Produção completa de vestuário para marcas, lojas e magazines que desejam fabricar seus produtos.',
    fullDescription: 'Estrutura industrial completa para marcas de moda, streetwear, fitness, casual e corporativo. Desenvolvemos coleções inteiras com a sua identidade, moldes exclusivos, aviamentos personalizados e embalagem pronta para o seu centro de distribuição ou gôndola.',
    heroHeadline: 'Sua Marca com a Nossa Força Fabril: Produção Private Label em Escala',
    heroSubheadline: 'Da modelagem ao acabamento final: confecção de coleções sob medida para marcas próprias, lojistas e magazines em todo o país.',
    badgeText: 'Produção para Marcas & Magazines',
    iconName: 'Tag',
    imageUrl: imgCamisetaStreetwear,
    applications: [
      'Marcas próprias de vestuário casual, streetwear e basic premium',
      'Lojas multimarcas e redes de magazines',
      'Marcas esportivas, fitness e athleisure',
      'Criadores de conteúdo e empresas com linha de produtos próprios',
      'E-commerces de vestuário em expansão'
    ],
    pieces: [
      'Camisetas basic, oversized e regular fit em algodão nobre',
      'Polos premium com peitilho diferenciado',
      'Moletons canguru e gola careca pesados (3 cabos)',
      'Shorts casuais, bermudas de sarja e calças jogger',
      'Jaquetas corta-vento streetwear',
      'Vestuário feminino e masculino casual'
    ],
    fabrics: [
      'Algodão 100% Penteado Menegotti / Pettenati fio 30.1 ou 26.1',
      'Algodão com lavagem estonada, reativa ou bio-polimento',
      'Moletom 3 cabos com felpa grossa e toque aveludado',
      'Linho misto, viscose nobre e sarjas acetinadas',
      'Poliamida com elastano para linha fitness e esportiva'
    ],
    customizations: [
      'Etiquetas de marca aplicadas (tecido, cetim, transfer ou silicone)',
      'Estamparia Silk Screen de alto relevo, gel, corrosão e foil',
      'Bordados de alta densidade e apliques',
      'Tags de papel kraft/couchê e embalagem plástica individual personalizada'
    ],
    productionProcess: [
      { title: 'Recepção do Tech Pack / Briefing', description: 'Avaliação das fichas técnicas, tabelas de medidas e acabamentos da coleção.' },
      { title: 'Modelagem Digital & Ficha Técnica', description: 'Desenvolvimento e conferência de moldes no tecido escolhido para teste de vestibilidade.' },
      { title: 'Homologação e Corte Industrial', description: 'Corte com encaixe otimizado de tecidos e controle estrito de defeitos de fiação.' },
      { title: 'Costura, Etiquetagem e Tagging', description: 'Aplicação de todos os aviamentos da sua marca e inspeção 100% das peças.' }
    ],
    differentials: [
      'Total sigilo industrial e respeito à sua propriedade de design',
      'Acesso aos melhores fornecedores de malharia e tecelagem de Santa Catarina',
      'Ficha técnica e modelagem homologadas por você antes de iniciar a produção',
      'Acabamentos sofisticados prontos para o varejo de alto padrão'
    ],
    faqs: [
      {
        question: 'A Natex coloca a etiqueta da minha própria marca nas peças?',
        answer: 'Sim! No modelo Private Label, as peças saem 100% com a sua identidade: etiqueta interna de composição e marca, tags externas, fitas personalizadas e embalagens próprias.'
      },
      {
        question: 'Vocês desenvolvem a modelagem exclusiva para minha marca?',
        answer: 'Sim, nossos modelistas podem criar a modelagem a partir de uma peça de referência que você já tenha ou desenvolver moldes do zero conforme sua proposta de caimento (ex: oversized, slim, regular).'
      }
    ],
    whatsappMessage: 'Olá! Gostaria de conversar sobre produção Private Label para minha marca.'
  },
  {
    id: 'cat-camisetas-eventos',
    slug: 'camisetas-eventos',
    name: 'Camisetas, Eventos & Merchandising Têxtil',
    shortDescription: 'Produção em lote de camisetas promocionais, abadás, jaquetas corta-vento, coletes e merchandising têxtil premium para eventos, feiras e marcas corporativas em todo o Brasil.',
    fullDescription: 'Solução fabril completa que une a velocidade da confecção de camisetas para eventos, feiras, corridas e convenções à sofisticação do merchandising têxtil corporativo de alto valor agregado (jaquetas corta-vento impermeáveis, coletes matelassê, blusões de fleece, ecobags e kits de onboarding). Fabricação sob medida com suporte técnico especializado, corte industrial automatizado e estamparia digital de alta definição com entrega pontual em todos os estados do Brasil.',
    heroHeadline: 'Camisetas para Eventos, Feiras e Merchandising Têxtil Corporativo de Alto Padrão',
    heroSubheadline: 'De abadás e camisetas promocionais em grande escala a jaquetas corta-vento e kits premium para fortalecimento de marcas. Confeccionamos sob medida com entrega pontual para qualquer região do Brasil.',
    badgeText: 'Linha Eventos, Campanhas & Merchandising B2B',
    iconName: 'Sparkles',
    imageUrl: imgPoloExecutiva,
    applications: [
      'Convenções de vendas, congressos e feiras corporativas (Anhembi, SP Expo, Riocentro, Expoville, etc.)',
      'Eventos esportivos, corridas de rua, maratonas e caminhadas corporativas',
      'Kits de boas-vindas (onboarding) para novos colaboradores e presentes de fim de ano',
      'Campanhas institucionais e datas comemorativas (Outubro Rosa, Novembro Azul, SIPAT / CIPA)',
      'Festivais de música, eventos culturais, camarotes e abadás personalizados',
      'Premiação de metas comerciais, incentivo a equipes e relacionamento com parceiros VIP'
    ],
    pieces: [
      'Camisetas em Algodão Nobre Penteado 30.1 e 26.1 (Gola redonda, gola V e Oversized)',
      'Camisetas e Regatas Esportivas em Malha Dry Fit Respirável (liso ou microperfurado)',
      'Abadás em Malha Cacharrel macia de secagem ultrarrápida',
      'Jaquetas Corta-Vento impermeabilizadas com capuz e forro respirável',
      'Coletes Puffer estofados com manta térmica matelassê',
      'Blusões e Casacos em Microfleece e Soft térmico de toque aveludado',
      'Ecobags e Sacolas Ecológicas em Lona Pesada 100% Algodão Cru',
      'Camisas Polo Piquet e Poliamida para equipes de apoio e staff de eventos'
    ],
    fabrics: [
      'Algodão 100% Penteado Menegotti / Pettenati fio 30.1 e 26.1 (toque macio e anti-pilling)',
      'Dry Fit Tecnológico 100% Poliéster com proteção UV e absorção hidrofílica de suor',
      'Nylon Aspen impermeável e corta-vento com resina acrílica hidro-repelente',
      'Malha Cacharrel 100% Poliéster acetinada para abadás e eventos de alta rotatividade',
      'Fleece e Microfleece térmico antipilling para casacos corporativos de inverno',
      'Lona e Sarja 100% Algodão pesado sustentável para ecobags e mochilas saco',
      'Malha PV (67% Poliéster / 33% Viscose) prática e de alta durabilidade'
    ],
    customizations: [
      'Sublimação Digital Total Contínua (Full Print fotográfico de alta saturação sem limite de cores)',
      'Silk Screen Têxtil com tintas ecológicas plastisol, gel relevo, corrosão e toque zero',
      'DTF Têxtil HD (Direct to Film) para logotipos multicoloridos, degradês finos e microdetalhes',
      'Bordado Computadorizado de alta definição para jaquetas, polos, coletes e casacos',
      'Puxadores de zíper gravados emborrachados e etiquetas personalizadas da sua empresa ou evento',
      'Aplicação de estampas refletivas de segurança e numerações/nomes individuais para atletas'
    ],
    productionProcess: [
      { title: 'Briefing, Modelagem & Fechamento de Arte', description: 'Adequação dos padrões de cor Pantone, simulação digital 3D/mockup e validação das tabelas de medidas.' },
      { title: 'Validação de Modelagem e Arte', description: 'Homologação detalhada de medidas, tecidos e posicionamento de estampas antes da liberação do corte em lote.' },
      { title: 'Corte Industrial e Estamparia de Alta Capacidade', description: 'Corte computadorizado com encaixe milimétrico e esteira de estamparia com capacidade para milhares de peças/dia.' },
      { title: 'Revisão Unitária e Logística Pontual Brasil', description: 'Conferência de qualidade peça a peça, separação por tamanhos/grades e despacho prioritário com código de rastreio para o local do evento.' }
    ],
    differentials: [
      'Garantia inegociável de prazo: entrega antecipada à data do seu evento ou ação corporativa',
      'Validação técnica e aprovação de layout formal da sua diretoria ou comissão organizadora',
      'Estrutura fabril em Santa Catarina com envio aéreo e rodoviário expresso para todas as capitais e polos do Brasil',
      'Cores vibrantes e estampas de alta fixação que não descascam, não racham e não desbotam',
      'Desde peças promocionais com custo-benefício competitivo até artigos de vestuário premium para executivos'
    ],
    faqs: [
      {
        question: 'Qual a diferença entre camisetas promocionais para eventos e artigos de merchandising têxtil corporativo?',
        answer: 'Camisetas promocionais e abadás são desenvolvidos para ações em massa, feiras, corridas e eventos temporários, priorizando velocidade, conforto térmico (Dry Fit ou algodão leve) e forte apelo visual. Já o merchandising têxtil corporativo foca em artigos de alto valor percebido (como jaquetas corta-vento impermeáveis, coletes matelassê e blusões de fleece) que colaboradores, clientes e parceiros usam frequentemente no dia a dia, gerando exposição contínua e valorização da sua marca.'
      },
      {
        question: 'A Natex atende eventos e empresas fora de Santa Catarina? Como funciona o envio para outras capitais?',
        answer: 'Sim, atendemos e entregamos para empresas e agências de eventos em todo o Brasil. Nossa fábrica em Navegantes/SC está estrategicamente conectada à BR-101 e ao Aeroporto Internacional de Navegantes (NVT), permitindo expedição rodoviária e aérea rápida para São Paulo, Rio de Janeiro, Curitiba, Belo Horizonte, Porto Alegre, Brasília, Salvador, Recife, Fortaleza e demais polos industriais.'
      },
      {
        question: 'Como funciona a aprovação técnica antes de rodar o lote total de camisetas ou jaquetas?',
        answer: 'Para assegurar conformidade de tamanho, cor, tecido e posicionamento de estampa ou bordado, realizamos aprovação formal de layout e ficha técnica digital detalhada com tolerâncias de medidas e especificações de materiais antes da liberação do corte.'
      },
      {
        question: 'Quais as técnicas de estamparia e personalização disponíveis para grandes tiragens?',
        answer: 'Disponibilizamos Silk Screen industrial com tintas de alta fixação (ótimo custo unitário em grandes volumes), Sublimação Digital Total (ideal para dry fit e abadás sem restrição de cores), DTF Têxtil HD (para estampas ricas em degradês e detalhes) e Bordado Computadorizado de alta densidade (para polos, casacos, jaquetas e coletes).'
      },
      {
        question: 'Com quanta antecedência devemos solicitar a confecção para um evento ou feira de negócios?',
        answer: 'Recomendamos planejar com 15 a 30 dias de antecedência para permitir o alinhamento técnico detalhado e a produção do lote. No entanto, possuímos linhas expressas dedicadas para atender cronogramas de feiras e convenções com urgência.'
      }
    ],
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento para Camisetas de Evento e Merchandising Têxtil Corporativo.'
  },
  {
    id: 'cat-merchandising',
    slug: 'merchandising-textil',
    name: 'Camisetas, Eventos & Merchandising Têxtil',
    shortDescription: 'Peças e materiais têxteis premium para comunicação, endomarketing e valorização de marcas.',
    fullDescription: 'Desenvolvimento de jaquetas corta-vento impermeáveis, coletes estofados, blusões de fleece e artigos de vestuário de alto valor percebido para presentear clientes estratégicos, parceiros e colaboradores de destaque.',
    heroHeadline: 'Merchandising Têxtil de Alto Padrão e Camisetas para Eventos Corporativos',
    heroSubheadline: 'Jaquetas corta-vento, casacos térmicos, coletes, abadás e camisetas especiais que geram orgulho de vestir e máxima visibilidade para sua empresa.',
    badgeText: 'Vestuário Premium & Brindes Têxteis',
    iconName: 'Flame',
    imageUrl: imgCortaVento,
    applications: [
      'Kits de boas-vindas (onboarding) executivos',
      'Premiação de metas comerciais e endomarketing',
      'Presentes corporativos para clientes VIP e fornecedores',
      'Uniformes de representação institucional e viagens',
      'Convenções de vendas e congressos empresariais'
    ],
    pieces: [
      'Jaquetas Corta-Vento impermeáveis com forro de telinha',
      'Coletes puffer estofados matelassê',
      'Blusões de microfleece e soft térmico',
      'Camisetas em algodão penteado 30.1 e Dry Fit',
      'Bolsas tipo ecobag em lona pesada de algodão cru'
    ],
    fabrics: [
      'Nylon Aspen impermeável e corta-vento',
      'Tecido Soft e Fleece térmico aveludado',
      'Ripstop esportivo com acabamento repelente a água',
      'Algodão 100% Penteado e Dry Fit respirável',
      'Lona 100% Algodão sustentável'
    ],
    customizations: [
      'Bordados elegantes em ponto cheio',
      'Puxadores de zíper personalizados',
      'Sublimação digital total e Silk Screen',
      'DTF têxtil de alta precisão'
    ],
    productionProcess: [
      { title: 'Design Exclusivo de Produto', description: 'Criação de detalhes funcionais como capuz embutido, bolsos invisíveis e passantes de fone.' },
      { title: 'Engenharia de Modelagem & Conforto', description: 'Validação da estrutura, peso e sensação térmica da modelagem antes da produção.' },
      { title: 'Montagem Industrial de Jaquetas e Peças', description: 'Costuras seladas e aplicação de zíperes tratorados resistentes.' },
      { title: 'Embalagem Individual e Envio Nacional', description: 'Peças ensacadas e etiquetadas com visual impecável entregues em todo o Brasil.' }
    ],
    differentials: [
      'Alto valor agregado percebido por quem recebe a peça',
      'Modelagens contemporâneas que as pessoas usam no dia a dia',
      'Acabamentos e aviamentos de primeira linha',
      'Alinhamento de especificações e tolerâncias antes da produção'
    ],
    faqs: [
      {
        question: 'As jaquetas corta-vento são realmente repelentes a água?',
        answer: 'Sim, utilizamos tecidos de poliamida ou poliéster resinado com tratamento repelente a respingos e vento frio.'
      },
      {
        question: 'Vocês entregam para feiras e congressos em todo o Brasil?',
        answer: 'Sim! Enviamos para centros de eventos e convenções de todo o país com rastreio e prazo garantido.'
      }
    ],
    whatsappMessage: 'Olá! Gostaria de um orçamento para Camisetas e Merchandising Têxtil.'
  },
  {
    id: 'cat-wind-banners',
    slug: 'wind-banners',
    name: 'Wind Banners',
    shortDescription: 'Materiais têxteis promocionais para pontos de venda, eventos e comunicação visual externa.',
    fullDescription: 'Wind banners nos modelos Gota, Vela, Pena e Retangular. Produzidos em tecido poliéster de alta resistência a ventos e intempéries, com impressão digital dupla face translúcida e haste de alta flexibilidade.',
    heroHeadline: 'Wind Banners em Tecido de Alta Durabilidade para Destaque da sua Marca',
    heroSubheadline: 'Visibilidade contínua em calçadas, entradas de lojas, praias, feiras e eventos ao ar livre com cores vivas e excelente resistência.',
    badgeText: 'Comunicação Visual Têxtil',
    iconName: 'Flag',
    imageUrl: imgWindBanner,
    applications: [
      'Entradas de lojas, concessionárias e postos de combustível',
      'Feiras de agronegócio, eventos esportivos e praias',
      'Lançamentos imobiliários e estandes de vendas',
      'Campanhas promocionais temporárias e inaugurações'
    ],
    pieces: [
      'Wind Banner Modelo Gota (2,20m / 3,00m / 4,00m)',
      'Wind Banner Modelo Pena / Feather',
      'Wind Banner Modelo Faca / Vela',
      'Bases plásticas para água/areia e bases articuladas de metal',
      'Hastes de fibra de vidro com ponteira flexível'
    ],
    fabrics: [
      'Tecido Flag 100% Poliéster com trama especial para passagem de ar',
      'Costura perimetral dupla reforçada com linha resistente a raios UV'
    ],
    customizations: [
      'Sublimação digital de alta definição com passagem de cor para o verso',
      'Impressão dupla face com blackout intermediário quando necessário',
      'Bainha de reforço elástica na área da haste'
    ],
    productionProcess: [
      { title: 'Ajuste do Gabarito', description: 'Encaixe das artes nos moldes específicos de cada formato de wind banner.' },
      { title: 'Impressão por Calandra', description: 'Transferência térmica que fixa as cores profundamente na fibra do tecido.' },
      { title: 'Costura de Reforço', description: 'Acabamento com travamento nas pontas de maior atrito com a haste.' },
      { title: 'Montagem do Kit Completo', description: 'Tecido estampado + haste modular + base + bolsa de transporte opcional.' }
    ],
    differentials: [
      'Tecido não desbota facilmente sob sol e chuva',
      'Trama aerodinâmica que não rasga em ventanias moderadas',
      'Excelente visibilidade mesmo a grandes distâncias',
      'Fornecimento de kits completos ou apenas o tecido de reposição'
    ],
    faqs: [
      {
        question: 'O que acompanha o kit do wind banner?',
        answer: 'O kit padrão é composto pelo tecido estampado personalizado, conjunto de hastes modulares de alta resistência e a base (de solo ou base para preencher com água/areia).'
      },
      {
        question: 'Podemos comprar apenas o tecido caso já tenhamos as hastes?',
        answer: 'Sim, confeccionamos os tecidos sob medida para o gabarito das suas hastes existentes.'
      }
    ],
    whatsappMessage: 'Olá! Gostaria de cotar Wind Banners personalizados para minha empresa.'
  },
  {
    id: 'cat-bandeiras',
    slug: 'bandeiras',
    name: 'Bandeiras e Bandeirões',
    shortDescription: 'Bandeiras institucionais, para mastros oficiais, fachadas e eventos de grande porte.',
    fullDescription: 'Fabricação de bandeiras corporativas, institucionais (países, estados, municípios), mastros externos, bandeiras de torcida e bandeirões gigantes em tecido náutico e poliéster especial.',
    heroHeadline: 'Bandeiras Institucionais e Corporativas com Alta Definição e Resistência Têxtil',
    heroSubheadline: 'Produção sob medida para mastros externos, fachadas empresariais, eventos esportivos e comemorações cívicas.',
    badgeText: 'Bandeiras Oficiais & Promocionais',
    iconName: 'FlagTriangleRight',
    imageUrl: imgBandeiras,
    applications: [
      'Mastros de fachadas de empresas, indústrias e hotéis',
      'Órgãos públicos, tribunais, escolas e quartéis',
      'Eventos esportivos, estádios e palcos de convenções',
      'Sindicatos, associações comerciais e entidades'
    ],
    pieces: [
      'Bandeiras institucionais para mastro externo (face única ou dupla)',
      'Bandeiras para gabinete e cerimoniais de interior com franjas',
      'Bandeirolas promocionais e cordões para eventos',
      'Bandeirões gigantes para coberturas de arquibancadas ou fachadas'
    ],
    fabrics: [
      'Tecido Flag Náutico 100% Poliéster especial para intempéries',
      'Cetim encorpado para bandeiras de cerimonial interno',
      'Tafetá e microfibra para eventos temporários'
    ],
    customizations: [
      'Sublimação digital fotográfica de alta definição',
      'Ilhoses de latão que não enferrujam ou fitas de amarração reforçadas',
      'Bainha quádrupla na ponta flutuante para evitar desfiamento'
    ],
    productionProcess: [
      { title: 'Conferência de Proporções Oficiais', description: 'Respeito às dimensões padrão (1 pano, 1.5 panos, 2 panos, etc.) ou medidas personalizadas.' },
      { title: 'Sublimação Contínua', description: 'Penetração de 90%+ da cor para o verso no tecido flag translúcido.' },
      { title: 'Costura Perimetral com Linha de Nylon UV', description: 'Proteção contra ação de ventos fortes e sol diário.' },
      { title: 'Aplicação de Aviamentos de Fixação', description: 'Instalação de tralhas reforçadas e ilhoses metálicos.' }
    ],
    differentials: [
      'Bainhas reforçadas para maior vida útil em mastros externos',
      'Cores nítidas com alta resistência ao desbotamento solar',
      'Capacidade de produzir desde unidades pontuais até grandes lotes',
      'Atendimento e envio para todo o território nacional'
    ],
    faqs: [
      {
        question: 'Qual a durabilidade de uma bandeira em mastro externo?',
        answer: 'A durabilidade depende da intensidade dos ventos e incidência solar da sua região. Nossas bandeiras contam com costura quádrupla na ponta de bater e tecido náutico para maximizar a longevidade.'
      }
    ],
    whatsappMessage: 'Olá! Gostaria de um orçamento para Bandeiras Institucionais e Promocionais.'
  }
];

export const CATALOG_PRODUCTS: ProductItem[] = [
  // 1. LINHA UNIFORMES PROFISSIONAIS & CORPORATIVOS
  {
    id: 'prod-camisa-social-manga-curta',
    name: 'Camisa Social com Botão Manga Curta Corporativa & Recepção',
    categorySlug: 'uniformes-corporativos',
    categoryName: 'Uniformes Corporativos',
    pieceType: 'Camisa Botão Manga Curta',
    sector: 'Corporativo & Escritório',
    description: 'Camisa social executiva com manga curta de alfaiataria, colarinho estruturado francês, botões de 4 furos reforçados em X e tecido tricoline nobre com acabamento Easy Iron. Ideal para climas amenos, recepção e equipes de atendimento com alta elegância.',
    recommendedFabrics: ['Tricoline Fio 50/1 Algodão/Poliéster Easy Iron', 'Microfibra Acetinada Leve', 'Gabardine Two-Way com Elastano'],
    customizationOptions: ['Bordado computadorizado com logotipo no bolso/peito', 'Pesponto fino italiano', 'Gravação a laser nos botões'],
    applications: ['Recepção corporativa e atendimento presencial', 'Equipes de vendas e consultores comerciais', 'Concessionárias e escritórios executivos', 'Figurinistas e equipes de produção executiva'],
    tags: ['social', 'manga curta', 'camisa com botao', 'corporativo', 'alfaiataria', 'tricoline'],
    imageUrl: imgCamisaMangaCurtaBranca,
    featured: true,
    colorVariations: [
      { name: 'Branco Clássico Executivo', hex: '#FFFFFF', isWhite: true },
      { name: 'Azul Céu Suave', hex: '#BAE6FD' },
      { name: 'Cinza Prata Refinado', hex: '#E2E8F0' },
      { name: 'Azul Marinho Corporativo', hex: '#1E293B' },
      { name: 'Preto Autoridade', hex: '#0F172A' }
    ],
    seoKeywords: ['camisa social manga curta uniforme atacado', 'camisa com botao manga curta empresa sc', 'confeccao camisa social corporativa sc'],
    geoScope: 'Atendimento direto de fábrica em SC com envio seguro e pontual para empresas em todo o território nacional.',
    aeoQuickAnswer: 'Camisa social de manga curta com corte ergonômico, entretela alemã indeformável no colarinho e tecido fresco de passadoria fácil que mantém a equipe alinhada durante toda a jornada de trabalho.',
    technicalSpecs: [
      { label: 'Tecido', value: 'Tricoline Maquinetada Easy Iron (conforme especificação do cliente)' },
      { label: 'Colarinho', value: 'Gola estruturada com entretela termocolante indeformável' },
      { label: 'Mangas', value: 'Manga curta com acabamento de bainha italiana dupla pespontada' },
      { label: 'Botões', value: 'Costura em cruz (X) anti-arrancamento' }
    ],
    sizeGrade: 'Tamanhos do 1 ao 8 / PP ao Plus Size G5 (Cortes Slim Fit e Classic)'
  },
  {
    id: 'prod-polo-piquet',
    name: 'Camisa Polo Piquet Corporativa Masculina & Feminina',
    categorySlug: 'uniformes-profissionais',
    categoryName: 'Uniformes Profissionais',
    pieceType: 'Camisa Polo',
    sector: 'Corporativo & Escritório',
    description: 'Polo executiva em malha piquet mista de alta durabilidade com tratamento anti-pilling. Gola e punhos com estrutura reforçada que não enrolam.',
    recommendedFabrics: ['Piquet Confort Antipilling', 'Piquet Algodão Nobre', 'Malha Poliamida UV50+'],
    customizationOptions: ['Bordado computadorizado de alta definição', 'Silk Screen fino toque zero', 'Botões gravados a laser'],
    applications: ['Equipes de vendas e consultoria', 'Recepção e atendimento ao cliente', 'Supervisão de operações', 'Redes de franquias e varejo'],
    tags: ['polo', 'corporativo', 'piquet', 'bordado', 'atendimento'],
    imageUrl: imgPoloExecutiva,
    featured: true,
    colorVariations: [
      { name: 'Branco Nobre', hex: '#FFFFFF', isWhite: true },
      { name: 'Azul Marinho Institucional', hex: '#1E293B' },
      { name: 'Preto Clássico', hex: '#18181B' },
      { name: 'Cinza Mescla Chumbo', hex: '#64748B' },
      { name: 'Bordô / Vinho Corporativo', hex: '#881337' },
      { name: 'Verde Floresta / Petróleo', hex: '#14532D' }
    ],
    seoKeywords: ['camisa polo uniforme corporativo', 'fabrica de polo piquet empresa', 'polo personalizada bordada atacado'],
    geoScope: 'Fabricado em Navegantes/SC com envio rodoviário e aéreo expresso para todo o Brasil (SP, RJ, PR, RS, MG, DF e demais estados).',
    aeoQuickAnswer: 'A Camisa Polo Corporativa Natex é confeccionada com piquet nobre anti-pilling, garantindo resistência a lavagens industriais contínuas e caimento executivo estruturado com ficha técnica homologada.',
    technicalSpecs: [
      { label: 'Gramatura', value: '200g/m² a 220g/m²' },
      { label: 'Acabamento', value: 'Tratamento antipilling e tingimento reativo durável' },
      { label: 'Costura', value: 'Overlock 4 fios e reforço ombro a ombro' },
      { label: 'Gola', value: 'Ribana retilínea encorpada anti-deformação' }
    ],
    sizeGrade: 'PP, P, M, G, GG, XGG, G1 ao G5 (Modelagens Regular, Slim e Feminina Babylook)'
  },
  {
    id: 'prod-camisa-social',
    name: 'Camisa Social Executiva Manga Longa com Botão',
    categorySlug: 'uniformes-corporativos',
    categoryName: 'Uniformes Corporativos',
    pieceType: 'Camisa Botão Manga Longa',
    sector: 'Corporativo & Escritório',
    description: 'Camisa social de alfaiataria em tricoline nobre com acabamento Easy Iron (fácil passadoria), entretelas alemãs estruturadas no colarinho e punhos reguláveis chanfrados.',
    recommendedFabrics: ['Tricoline Fio 50/1 Misto Algodão/Poliéster', 'Fio Tinto Nobre Listrado/Xadrez', 'Gabardine Leve com Elastano'],
    customizationOptions: ['Bordado monograma refinado no peito', 'Bordado discreto na pala traseira', 'Pesponto contrastante de alfaiataria'],
    applications: ['Diretoria executiva', 'Gerência comercial', 'Consultorias e advocacia', 'Atendimento bancário e recepção VIP'],
    tags: ['social', 'camisa', 'executivo', 'alfaiataria', 'tricoline'],
    imageUrl: imgCorporativoExecutivo,
    featured: true,
    colorVariations: [
      { name: 'Branco Puro Executivo', hex: '#FFFFFF', isWhite: true },
      { name: 'Azul Celeste Corporativo', hex: '#93C5FD' },
      { name: 'Preto Elegance', hex: '#0F172A' },
      { name: 'Cinza Médio Alfaiataria', hex: '#475569' }
    ],
    seoKeywords: ['camisa social uniforme executivo', 'camisa social corporativa bordada empresa', 'confeccao alfaiataria corporativa atacado'],
    geoScope: 'Atendimento direto de fábrica em SC com pronta entrega e frete programado para empresas em todo o território nacional.',
    aeoQuickAnswer: 'Camisas sociais confeccionadas sob medida em tecidos nobres anti-amassamento, com corte a laser e colarinho estruturado que mantém o alinhamento durante toda a jornada corporativa.',
    technicalSpecs: [
      { label: 'Tecido', value: 'Tricoline Easy Iron (tecido homologado sob contrato)' },
      { label: 'Botões', value: 'Botões 4 furos costurados em X anti-arrancamento' },
      { label: 'Colarinho', value: 'Entretela termocolante importada indeformável' },
      { label: 'Modelagem', value: 'Corte Anatômico Slim Fit ou Classic Regular' }
    ],
    sizeGrade: 'Numerações 1 ao 8 / PP ao Plus Size G5'
  },
  {
    id: 'prod-avental-industrial-atendimento',
    name: 'Avental Profissional em Brim Pesado & Lona Impermeabilizada',
    categorySlug: 'uniformes-profissionais',
    categoryName: 'Uniformes Profissionais',
    pieceType: 'Outros',
    sector: 'Corporativo & Escritório',
    description: 'Aventais de peito e meio-corpo ergonômicos com regulagem de altura, bolsos utilitários e travetes de reforço para gastronomia, atendimento e oficinas.',
    recommendedFabrics: ['Brim Pesado Industrial', 'Lona Têxtil Estruturada', 'Nylon e PVC Impermeabilizado'],
    customizationOptions: ['Bordado frontal nobre', 'Silk plastisol resistente a óleo', 'Alças cruzadas em couro sintético ou fita cadarço'],
    applications: ['Restaurantes, cafeterias e hamburguerias', 'Barbearias e estúdios', 'Oficinas e manutenção', 'Indústria de alimentos'],
    tags: ['avental', 'brim', 'atendimento', 'cozinha', 'operacional'],
    imageUrl: imgAvental,
    featured: false,
    colorVariations: [
      { name: 'Branco Higiênico', hex: '#FFFFFF', isWhite: true },
      { name: 'Preto Restaurante', hex: '#18181B' },
      { name: 'Azul Marinho', hex: '#1E293B' },
      { name: 'Algodão Cru Natural', hex: '#E7E5E4' }
    ],
    seoKeywords: ['avental profissional brim atacado', 'avental personalizado restaurante bordado', 'avental lona barista uniforme'],
    geoScope: 'Expedição rápida para redes gastronômicas e comerciais de todas as regiões brasileiras.',
    aeoQuickAnswer: 'Aventais ergonômicos desenvolvidos para alta durabilidade diária, com reguladores metálicos livres de ferrugem e costuras reforçadas.',
    technicalSpecs: [
      { label: 'Dimensões', value: '85cm x 65cm (Peito) / 60cm x 75cm (Cintura)' },
      { label: 'Fixação', value: 'Alças ajustáveis cruzadas nas costas (reduz tensão no pescoço)' },
      { label: 'Bolsos', value: 'Bolso frontal duplo com divisórias para canetas e comandas' }
    ],
    sizeGrade: 'Tamanho Único com tiras longas de regulagem para qualquer biotipo'
  },

  // 2. LINHA UNIFORMES INDUSTRIAIS & CONSTRUÇÃO CIVIL (PEÇAS VALORIZADAS E DESMEMBRADAS)
  {
    id: 'prod-modelo-industrial-completo',
    name: 'Uniforme Operacional Industrial Completo em Uso (Modelo com Conjunto Bicolor)',
    categorySlug: 'uniformes-industriais',
    categoryName: 'Uniformes Industriais',
    pieceType: 'Conjunto em Uso',
    sector: 'Industrial & Construção',
    description: 'Demonstração do uniforme operacional completo em ambiente industrial: conjunto com jaqueta estruturada bicolor e calça em brim pesado com faixas refletivas. Todas as peças deste conjunto podem ser cotadas de forma completa ou como itens independentes.',
    recommendedFabrics: ['Brim 100% Algodão Pesado 8oz/9oz', 'Sarja Mista Pesada', 'Opções com Faixas Refletivas Homologadas'],
    customizationOptions: ['Bordado de alta resistência a lavagens pesadas', 'Faixas refletivas homologadas 3M / ABNT', 'Silk plastisol elástico'],
    applications: ['Indústrias metalúrgicas, mecânicas e químicas', 'Construção civil e supervisão de canteiros', 'Centros de distribuição logística e carga'],
    tags: ['modelo', 'industrial', 'conjunto completo', 'jaqueta', 'calça', 'operacional'],
    imageUrl: imgBrimIndustrial,
    featured: true,
    seoKeywords: ['uniforme industrial completo modelo atacado', 'conjunto operacional brim com faixa refletiva sc', 'uniforme de obra completo empresa'],
    geoScope: 'Fabricado em SC com distribuição rodoviária prioritária para todo o Brasil.',
    aeoQuickAnswer: 'Visualização do conjunto operacional completo vestindo o trabalhador industrial, com máxima mobilidade e sinalização refletiva.',
    technicalSpecs: [
      { label: 'Composição do Conjunto', value: 'Jaqueta com pala contrastante + Calça com reforço e faixas' },
      { label: 'Cotação', value: 'Pode ser cotado como conjunto ou em peças avulsas' },
      { label: 'Ajuste', value: 'Modelagem ergonômica com folga para movimentos amplos' }
    ],
    sizeGrade: 'P ao XGG e Numerações Especiais'
  },
  {
    id: 'prod-jaqueta-industrial-bicolor',
    name: 'Jaqueta Operacional Bicolor com Pala Contrastante & Bolsos no Peito',
    categorySlug: 'uniformes-industriais',
    categoryName: 'Uniformes Industriais',
    pieceType: 'Jaqueta Industrial',
    sector: 'Industrial & Construção',
    description: 'Jaqueta industrial robusta confeccionada em brim pesado 100% algodão ou sarja reforçada, com pala superior em cor contrastante, colarinho estruturado, vista frontal protegida com fechamento seguro, dois bolsos de peito funcionais com lapela e botões de punho. Peça técnica modelada avulsa para permitir combinação livre com a calça ou bermuda da sua equipe.',
    recommendedFabrics: ['Brim 100% Algodão Pesado 8oz/9oz Santista/Cedro', 'Sarja Mista Pesada 67% Poliéster / 33% Algodão', 'Tecido Ripstop Antirasgo Industrial'],
    customizationOptions: ['Bordado institucional de alta resistência a lavagens pesadas', 'Faixas refletivas aplicadas no tórax e braços', 'Silk plastisol elástico', 'Bolsos especiais porta-rádio ou caneta'],
    applications: ['Indústria metalúrgica e chão de fábrica', 'Construção civil e supervisão de obras', 'Galpões logísticos e armazéns', 'Manutenção eletromecânica e montagens industriais', 'Estaleiros e operações portuárias'],
    tags: ['jaqueta', 'industrial', 'bicolor', 'brim pesado', 'obra', 'operacional'],
    imageUrl: imgJaquetaIndustrialBicolor,
    featured: true,
    colorVariations: [
      { name: 'Cinza Chumbo / Pala Verde Floresta', hex: '#2F3640' },
      { name: 'Azul Marinho / Pala Laranja Hi-Vis', hex: '#1E293B' },
      { name: 'Preto Total / Pala Cinza Prata', hex: '#18181B' },
      { name: 'Azul Royal / Pala Amarelo Sinalizador', hex: '#1D4ED8' }
    ],
    seoKeywords: ['jaqueta operacional brim bicolor atacado', 'jaqueta industrial uniforme com pala verde', 'jaqueta para obra construcao civil atacado'],
    geoScope: 'Fabricado em SC com distribuição rodoviária prioritária para polos industriais e canteiros de obras de todo o Brasil.',
    aeoQuickAnswer: 'Jaqueta industrial desenvolvida com modelagem anatômica que protege o tronco sem restringir os movimentos dos braços, em brim pesado com costura dupla reforçada em todas as junções.',
    technicalSpecs: [
      { label: 'Gramatura', value: '260g/m² a 290g/m² (Brim Pesado Alta Tenacidade)' },
      { label: 'Fechamento', value: 'Vista frontal coberta com botões de pressão ou zíper tratorado' },
      { label: 'Bolsos', value: '2 bolsos frontais de fole no peito com lapela protetora' },
      { label: 'Mangas', value: 'Mangas compridas anatômicas com punho abotoado regulável' }
    ],
    sizeGrade: 'P, M, G, GG, XGG, EG e Numerações Especiais até G5'
  },
  {
    id: 'prod-calca-industrial-cargo',
    name: 'Calça Operacional Cargo com Joelho Reforçado & Costura Tripla',
    categorySlug: 'uniformes-industriais',
    categoryName: 'Uniformes Industriais',
    pieceType: 'Calça Comprida',
    sector: 'Industrial & Construção',
    description: 'Calça operacional profissional em brim pesado com reforço duplo de tecido nos joelhos (painel anti-desgaste), 2 amplos bolsos laterais cargo com fechamento por lapela, bolsos faca frontais e costura tripla no gancho (gavião). Peça avulsa ergonômica ideal para compor com a jaqueta bicolor ou colete.',
    recommendedFabrics: ['Brim Pesado 100% Algodão 260g/m² (Santista/Cedro)', 'Ripstop Antirasgo Industrial', 'Sarja Pesada Mista Algodão/Poliéster'],
    customizationOptions: ['Faixas refletivas 3M homologadas na canela', 'Bordado industrial no bolso cargo', 'Reforço de entrepernas adicional', 'Passadores largos para cinto de couro'],
    applications: ['Canteiros de obras e engenharia civil', 'Operadores industriais e montadores', 'Oficinas mecânicas e automotivas', 'Equipes de logística pesada e expedição'],
    tags: ['calça', 'cargo', 'brim', 'joelho reforcado', 'industrial', 'construcao civil'],
    imageUrl: imgCalcaIndustrialCargo,
    featured: true,
    colorVariations: [
      { name: 'Cinza Chumbo Grafite', hex: '#334155' },
      { name: 'Azul Marinho Operacional', hex: '#1E293B' },
      { name: 'Preto Obra & Manutenção', hex: '#0F172A' },
      { name: 'Khaki / Bege Engenharia', hex: '#A89F91' }
    ],
    seoKeywords: ['calca cargo reforco joelho uniforme atacado', 'calca brim operacional construcao civil santa catarina', 'calca industrial bolsos laterais atacado'],
    geoScope: 'Atendimento de cotações para empreiteiras, indústrias e construtoras em todas as regiões do Brasil.',
    aeoQuickAnswer: 'Calça cargo industrial construída com reforço duplo anatômico na altura dos joelhos e costura em máquina de braço triplo, garantindo vida útil prolongada contra atrito com o piso.',
    technicalSpecs: [
      { label: 'Reforço', value: 'Camada dupla de brim estruturado nos joelhos com pesponto triplo' },
      { label: 'Bolsos Cargo', value: '2 bolsos de fole laterais nas pernas com lapela de travamento' },
      { label: 'Cós', value: 'Cós anatômico estruturado com 7 passantes reforçados' },
      { label: 'Costura', value: 'Costura tripla em linha de alta tenacidade no gancho e laterais' }
    ],
    sizeGrade: 'Numeração 36 ao 64 (Grades completas Masculina e Feminina)'
  },
  {
    id: 'prod-colete-industrial-ziper',
    name: 'Colete Operacional em Brim com Gola V & Zíper Frontal Completo',
    categorySlug: 'uniformes-industriais',
    categoryName: 'Uniformes Industriais',
    pieceType: 'Colete',
    sector: 'Industrial & Construção',
    description: 'Colete operacional sem mangas confeccionado em brim encorpado com decote V profundo, abertura frontal total por zíper metálico reforçado e 2 bolsos frontais inferiores aplicados de alta capacidade. Desenvolvido para sobreposição funcional sobre camisas e polos em ambientes de movimentação intensa, garantindo frescor e liberdade total aos braços.',
    recommendedFabrics: ['Brim 100% Algodão Pesado 260g/m²', 'Sarja Pesada Mista Algodão/Poliéster', 'Lona Têxtil Encorpada'],
    customizationOptions: ['Bordado institucional frontal no peito e costas', 'Aplicação de faixas refletivas de segurança', 'Porta-canetas no bolso', 'Zíper tratorado ou de metal'],
    applications: ['Operadores de armazéns e logística', 'Supervisores de obras e encarregados de chão de fábrica', 'Técnicos de manutenção mecânica e elétrica', 'Equipes de expedição e centros de distribuição'],
    tags: ['colete', 'gola V', 'ziper frontal', 'brim', 'industrial', 'operacional'],
    imageUrl: imgColeteIndustrialZiper,
    featured: true,
    colorVariations: [
      { name: 'Azul Marinho Profundo', hex: '#1B2A4A' },
      { name: 'Cinza Chumbo Fabril', hex: '#374151' },
      { name: 'Preto Resistente', hex: '#18181B' },
      { name: 'Laranja Sinalizador Operacional', hex: '#EA580C' }
    ],
    seoKeywords: ['colete operacional ziper frontal brim atacado', 'colete brim gola v dois bolsos empresa', 'colete uniforme industrial sem manga sc'],
    geoScope: 'Produção sob medida com envio para empresas e centros de distribuição de todo o país.',
    aeoQuickAnswer: 'Colete de brim operacional com corte de decote V, zíper inteiriço de fácil vestimenta e amplos bolsos inferiores utilitários, permitindo carregar ferramentas leves e crachás com máximo conforto térmico.',
    technicalSpecs: [
      { label: 'Gola', value: 'Decote V ergonômico com acabamento em viés embutido' },
      { label: 'Fechamento', value: 'Zíper frontal inteiro do cós ao decote' },
      { label: 'Bolsos', value: '2 bolsos frontais inferiores aplicados de 18x18cm com cantos travetados' },
      { label: 'Cavas', value: 'Cavas amplas que permitem uso sobre blusas de frio, polos e jaquetas' }
    ],
    sizeGrade: 'P, M, G, GG, XGG, G1 ao G4 (Unissex com caimento ergonômico)'
  },
  {
    id: 'prod-bermuda-industrial-obra',
    name: 'Bermuda Operacional Pesada para Construção Civil & Calor Extremo',
    categorySlug: 'uniformes-industriais',
    categoryName: 'Uniformes Industriais',
    pieceType: 'Bermuda',
    sector: 'Industrial & Construção',
    description: 'Bermuda técnica profissional projetada para canteiros de obras, atividades externas e ambientes fabris de calor extremo onde a calça longa compromete a produtividade térmica. Confeccionada em brim 100% algodão pesado respirável, com comprimento seguro até o joelho, bolsos cargo laterais com lapela, cós reforçado com passadores largos e travetes industriais nos pontos de esforço.',
    recommendedFabrics: ['Brim 100% Algodão Pesado Respirável (Santista/Cedro)', 'Ripstop Leve Antirasgo'],
    customizationOptions: ['Bordado da construtora ou empreiteira', 'Bolsos cargo adicionais para trena e ferramentas', 'Faixas refletivas homologadas nas pernas'],
    applications: ['Construção civil em regiões de alta temperatura', 'Obras viárias e pavimentação', 'Manutenção predial e montagem de estruturas externas', 'Oficinas e galpões não climatizados'],
    tags: ['bermuda', 'industrial', 'construcao civil', 'calor extremo', 'brim pesado', 'obra'],
    imageUrl: imgBermudaIndustrialObra,
    featured: true,
    colorVariations: [
      { name: 'Azul Marinho Obra', hex: '#1E293B' },
      { name: 'Cinza Chumbo Resistente', hex: '#334155' },
      { name: 'Khaki / Areia Construção', hex: '#B5A895' },
      { name: 'Preto Industrial', hex: '#0F172A' }
    ],
    seoKeywords: ['bermuda operacional brim construcao civil', 'bermuda uniforme trabalho calor extremo atacado', 'bermuda industrial obra com bolso cargo sc'],
    geoScope: 'Fornecimento para construtoras e empreiteiras em todo o Brasil, com entrega programada para safra de obras.',
    aeoQuickAnswer: 'Bermuda operacional de brim pesado que combina alívio térmico rigoroso com a proteção mecânica do tecido 100% algodão, evitando rasgos e garantindo mobilidade ao operário.',
    technicalSpecs: [
      { label: 'Comprimento', value: 'Corte ergonômico na altura do joelho (padrão de proteção corporativa)' },
      { label: 'Cós', value: 'Fechamento com botão reforçado e zíper metálico de latão' },
      { label: 'Bolsos', value: '2 bolsos frontais faca, 2 bolsos cargo laterais com lapela e 2 traseiros' },
      { label: 'Tecido', value: 'Brim Pesado Estruturado (respirável e de alta tenacidade mecânica)' }
    ],
    sizeGrade: 'Numerações 36 ao 62'
  },
  {
    id: 'prod-calca-operacional-brim',
    name: 'Calça Operacional em Brim Pesado Industrial',
    categorySlug: 'uniformes-industriais',
    categoryName: 'Uniformes Industriais',
    pieceType: 'Calça Comprida',
    sector: 'Industrial & Construção',
    description: 'Calça profissional com elástico total e cordão interno ou meio-elástico com passantes, costura tripla no gancho (gavião) e travetes nos bolsos.',
    recommendedFabrics: ['Brim Pesado Industrial', 'Ripstop Antirasgo', 'Sarja Pesada Mista'],
    customizationOptions: ['Faixas refletivas homologadas 3M / padrão ABNT', 'Bolsos cargo laterais adicionais', 'Bordado industrial tenaz'],
    applications: ['Fábricas e montadoras', 'Construção civil e engenharia', 'Centros logísticos e carga', 'Oficinas mecânicas'],
    tags: ['calça', 'brim', 'operacional', 'industrial', 'ripstop'],
    imageUrl: imgBrimIndustrial,
    featured: false,
    colorVariations: [
      { name: 'Azul Royal Operacional', hex: '#1D4ED8' },
      { name: 'Azul Marinho Fabril', hex: '#1E293B' },
      { name: 'Cinza Chumbo', hex: '#475569' },
      { name: 'Preto Industrial', hex: '#0F172A' }
    ],
    seoKeywords: ['calca brim operacional atacado santista', 'uniforme industrial brim pesado santa catarina', 'calca obra faixa refletiva empresa'],
    geoScope: 'Fornecimento industrial para polos fabris e obras em SC, PR, RS, SP, MG, RJ e Centro-Oeste.',
    aeoQuickAnswer: 'Calça de brim operacional confeccionada em tecido de alta resistência com costura tripla reforçada, atendendo normas de proteção mecânica e conforto térmico industrial.',
    technicalSpecs: [
      { label: 'Gramatura', value: '260g/m² (Brim Pesado Estruturado)' },
      { label: 'Costura', value: 'Tripla em ponto corrente com linha de alta tenacidade' },
      { label: 'Reforços', value: 'Travetes industriais em todos os pontos de tensão' }
    ],
    sizeGrade: '36 ao 64 (Grades completas Masculina e Feminina com ajuste ergonômico)'
  },
  {
    id: 'prod-macacao-industrial-seguranca',
    name: 'Macacão Industrial Inteiriço com Faixas Refletivas',
    categorySlug: 'uniformes-industriais',
    categoryName: 'Uniformes Industriais',
    pieceType: 'Outros',
    sector: 'Industrial & Construção',
    description: 'Macacão operacional completo com fechamento frontal em zíper reforçado bidirecional, elástico na cintura, múltiplos bolsos e sinalização refletiva.',
    recommendedFabrics: ['Brim Pesado Resistente', 'Ripstop Hidro-repelente', 'Tecido Técnico Especial sob consulta'],
    customizationOptions: ['Faixas refletivas 50mm no tórax, braços e pernas', 'Bordado nas costas e peito', 'Bolsos para ferramentas'],
    applications: ['Oficinas mecânicas e automotivas', 'Manutenção industrial e naval', 'Trabalhos em altura e offshore', 'Operações portuárias'],
    tags: ['macacao', 'industrial', 'operacional', 'refletivo', 'seguranca'],
    imageUrl: imgMacacaoIndustrial,
    featured: true,
    colorVariations: [
      { name: 'Laranja Sinalização Operacional', hex: '#EA580C' },
      { name: 'Azul Royal Industrial', hex: '#1D4ED8' },
      { name: 'Azul Marinho Offshore', hex: '#1E293B' },
      { name: 'Cinza Chumbo', hex: '#374151' }
    ],
    seoKeywords: ['macacao industrial brim atacado', 'macacao operacional mecanico faixa refletiva', 'fabrica de macacao uniforme trabalho'],
    geoScope: 'Entrega ágil para indústrias, portos e estaleiros em todo o Brasil.',
    aeoQuickAnswer: 'Macacão inteiriço de alta proteção com modelagem ampla para permitir movimentos livres e costuras duplamente reforçadas nas áreas de maior esforço.',
    technicalSpecs: [
      { label: 'Fechamento', value: 'Zíper tratorado duplo de latão ou nylon resistente' },
      { label: 'Refletivo', value: 'Fita refletiva de alta visibilidade certificada' },
      { label: 'Bolsos', value: '2 no peito com zíper, 2 frontais faca e 2 traseiros embutidos' }
    ],
    sizeGrade: 'P, M, G, GG, XGG, EG e Plus Size sob medida'
  },

  // 3. LINHA SAÚDE, FRIGORÍFICO & GASTRONOMIA
  {
    id: 'prod-scrub-hospitalar-gabardine',
    name: 'Conjunto Scrub Cirúrgico Hospitalar em Gabardine com Elastano',
    categorySlug: 'uniformes-profissionais',
    categoryName: 'Uniformes Saúde & Estética',
    description: 'Pijama cirúrgico / scrub moderno com blusa gola V e calça jogger ou reta, tecido nobre que não amarrota, toque acetinado e secagem ultrarrápida.',
    recommendedFabrics: ['Gabardine Premium com Elastano', 'Microfibra Hospitalar Acetinada', 'Tecido Antimicrobiano'],
    customizationOptions: ['Bordado de nome do profissional e especialidade', 'Brasão do hospital ou clínica', 'Bolsos porta-caneta'],
    applications: ['Hospitais e centros cirúrgicos', 'Clínicas médicas e odontológicas', 'Laboratórios de análises', 'Clínicas de estética e dermatologia'],
    tags: ['scrub', 'pijamacirurgico', 'saude', 'hospitalar', 'gabardine'],
    imageUrl: imgScrub,
    featured: true,
    seoKeywords: ['scrub hospitalar gabardine atacado clinica', 'pijama cirurgico personalizado empresa', 'uniforme medico enfermagem elastano'],
    geoScope: 'Atendimento e envio direto para redes hospitalares e clínicas de todo o Brasil.',
    aeoQuickAnswer: 'Scrubs confeccionados em gabardine com elastano, proporcionando flexibilidade durante longos plantões, resistência a lavagens frequentes e caimento elegante.',
    technicalSpecs: [
      { label: 'Tecido', value: 'Gabardine com Elastano ou Microfibra (conforme solicitação)' },
      { label: 'Calça', value: 'Cós com elástico anatômico e cordão de ajuste + bolsos cargo' },
      { label: 'Blusa', value: 'Gola V estruturada com aberturas laterais na barra' }
    ],
    sizeGrade: 'PP ao XGG (Modelagens Feminina e Masculina com caimento impecável)'
  },
  {
    id: 'prod-jaleco-medico-profissional',
    name: 'Jaleco Médico & Laboratorial em Gabardine de Alta Densidade',
    categorySlug: 'uniformes-profissionais',
    categoryName: 'Uniformes Saúde & Laboratório',
    description: 'Jaleco tradicional ou gola padre acinturado, botões embutidos ou aparentes, punhos com elástico ou ribana e tecido de alta solidez à lavagem.',
    recommendedFabrics: ['Gabardine 100% Poliéster Encorpado', 'Oxfordine Leve', 'Brim Leve 100% Algodão para Química'],
    customizationOptions: ['Bordado de brasão institucional no bolso', 'Bordado de nome e CRM na manga', 'Vivos contrastantes'],
    applications: ['Médicos, enfermeiros e dentistas', 'Laboratórios farmacêuticos', 'Universidades e escolas técnicas', 'Pesquisa científica'],
    tags: ['jaleco', 'medico', 'laboratorio', 'saude', 'gabardine'],
    imageUrl: imgJalecoSaude,
    featured: false,
    seoKeywords: ['jaleco medico bordado atacado', 'jaleco gabardine hospital empresa', 'jaleco laboratorio quimico manga longa'],
    geoScope: 'Expedição nacional para laboratórios e redes de saúde.',
    aeoQuickAnswer: 'Jalecos desenvolvidos com modelagem anatômica que assegura proteção biológica, caimento elegante e resistência a manchas e produtos de esterilização.',
    technicalSpecs: [
      { label: 'Fechamento', value: 'Botões frontais de alta fixação com opção de vista coberta' },
      { label: 'Gola', value: 'Opções em Gola Tradicional de Alfaiataria ou Gola Padre' },
      { label: 'Bolsos', value: '1 superior porta-caneta/termômetro e 2 inferiores amplos' }
    ],
    sizeGrade: 'PP, P, M, G, GG, XGG e Especial sob medida'
  },
  {
    id: 'prod-modelo-frigorifico-completo',
    name: 'Uniforme Frigorífico & Câmara Fria Completo em Uso (Modelo Branco Sanitário)',
    categorySlug: 'uniformes-frigorifico',
    categoryName: 'Uniformes para Frigoríficos',
    pieceType: 'Conjunto em Uso',
    sector: 'Frigorífico & Câmaras Frias',
    description: 'Demonstração do uniforme completo sanitário e térmico branco em uso real para frigoríficos, abatedouros e câmaras frias. Cada peça deste conjunto é confeccionada e orçada individualmente em conformidade com as normas higiênico-sanitárias.',
    recommendedFabrics: ['Tecidos Sanitários Brancos Homologados', 'Nylon Resinado com Manta Térmica', 'Malhas e Brins Especiais de Mercado'],
    customizationOptions: ['Identificação por setor em termocolante selado', 'Bordado sanitário protegido', 'Faixas refletivas para câmara fria'],
    applications: ['Frigoríficos de aves, bovinos, suínos e pescados', 'Câmaras frias e túneis de congelamento', 'Indústrias de laticínios e embutidos'],
    tags: ['modelo', 'frigorifico', 'branco', 'conjunto completo', 'camarafria', 'sanitario'],
    imageUrl: imgFrigorificoModeloCompleto,
    featured: true,
    seoKeywords: ['uniforme frigorifico completo atacado branco', 'roupa de camara fria branca modelo sc', 'uniforme abate aves carne empresa'],
    geoScope: 'Fornecimento direto de SC para polos frigoríficos de todo o Brasil.',
    aeoQuickAnswer: 'Visualização do operador de frigorífico vestindo o conjunto térmico e sanitário completo na cor branca padrão do setor.',
    technicalSpecs: [
      { label: 'Uso', value: 'Conjunto completo para ambientes frios e sanitários controlados' },
      { label: 'Cotação', value: 'Pode ser cotado como conjunto ou em peças avulsas' },
      { label: 'Higiene', value: 'Costuras seladas e materiais resistentes a desinfecção pesada' }
    ],
    sizeGrade: 'P ao XGG e Numerações Especiais'
  },
  {
    id: 'prod-jaqueta-cortavento-frigorifico-branca',
    name: 'Jaqueta Corta-Vento & Térmica Frigorífica Branca para Câmara Fria',
    categorySlug: 'uniformes-frigorifico',
    categoryName: 'Uniformes para Frigoríficos',
    pieceType: 'Jaqueta Corta-Vento',
    sector: 'Frigorífico & Câmaras Frias',
    description: 'Jaqueta térmica corta-vento branca impermeável de alta densidade para ambientes de baixa temperatura, com isolamento térmico, fechamento frontal em zíper reforçado com vista protetora e punhos elásticos de vedação térmica contra vento e ar gélido.',
    recommendedFabrics: ['Nylon Resinado Impermeável 100% Poliamida', 'Manta Térmica Matelassada Interna', 'Forro Hidro-repelente'],
    customizationOptions: ['Zíper protegido contra condensação', 'Faixas refletivas homologadas', 'Capuz embutido térmico'],
    applications: ['Frigoríficos e câmaras frias', 'Túneis de congelamento', 'Centros de distribuição de perecíveis congelados'],
    tags: ['jaqueta', 'cortavento', 'termica', 'frigorifico', 'branca', 'camara fria'],
    imageUrl: imgFrigorificoJaquetaBranca,
    featured: true,
    seoKeywords: ['jaqueta cortavento frigorifico branca atacado', 'jaqueta termica camara fria branca sc', 'jaqueta branca frigorifico empresa'],
    geoScope: 'Fornecimento para indústrias de carnes e laticínios em todo o Brasil.',
    aeoQuickAnswer: 'Jaqueta térmica branca projetada para ambientes de até -35°C com isolamento térmico por manta e barreira contra vento.',
    technicalSpecs: [
      { label: 'Exterior', value: 'Nylon paraquedas resinado branco hidro-repelente' },
      { label: 'Vedação', value: 'Punhos com barreira térmica e cordão na barra' },
      { label: 'Fechamento', value: 'Zíper frontal reforçado com vista protetora' }
    ],
    sizeGrade: 'P, M, G, GG, XGG, G1 ao G5'
  },
  {
    id: 'prod-polo-frigorifico-branca',
    name: 'Camisa Polo Branca para Frigorífico & Indústria de Alimentos',
    categorySlug: 'uniformes-frigorifico',
    categoryName: 'Uniformes para Frigoríficos',
    pieceType: 'Camisa Polo',
    sector: 'Frigorífico & Câmaras Frias',
    description: 'Camisa polo branca de padrão sanitário alimentar em malha piquet encorpada com colarinho estruturado, peitilho reforçado com botões anti-queda e costuras travetadas, ideal para supervisão, inspeção de qualidade e setores de embalagem.',
    recommendedFabrics: ['Piquet 50% Algodão / 50% Poliéster Antipilling', 'Malha PV Sanitária Branca'],
    customizationOptions: ['Bordado de alta fixação', 'Botões costurados com travete reforçado sanitário', 'Bolso porta-caneta sob consulta'],
    applications: ['Supervisão e inspeção sanitária de frigoríficos', 'Salas de embalagem secundária', 'Laticínios e processamento de alimentos'],
    tags: ['polo', 'branca', 'frigorifico', 'alimentos', 'piquet', 'sanitario'],
    imageUrl: imgFrigorificoPoloBranca,
    featured: true,
    seoKeywords: ['camisa polo branca frigorifico atacado', 'polo branca industria alimentos uniforme', 'polo piquet branca frigorifico sc'],
    geoScope: 'Atendimento direto com envio fracionado ou em grandes lotes.',
    aeoQuickAnswer: 'Camisa polo branca confeccionada em malha piquet resistente a lavagens industriais contínuas e alvejantes.',
    technicalSpecs: [
      { label: 'Malha', value: 'Piquet de alta densidade 220g/m²' },
      { label: 'Gola', value: 'Colarinho em ribana estruturada de alta estabilidade dimensional' },
      { label: 'Peitilho', value: 'Abertura frontal com botões reforçados' }
    ],
    sizeGrade: 'PP ao XGG e Especiais'
  },
  {
    id: 'prod-camiseta-manga-curta-frigorifico-branca',
    name: 'Camiseta Manga Curta Branca para Frigorífico & Higiene Alimentícia',
    categorySlug: 'uniformes-frigorifico',
    categoryName: 'Uniformes para Frigoríficos',
    pieceType: 'Camiseta',
    sector: 'Frigorífico & Câmaras Frias',
    description: 'Camiseta branca de manga curta confeccionada em malha respirável de alta durabilidade e solidez a lavagens frequentes com produtos sanitizantes, desenvolvida para linhas de desossa, manipulação e processos de alta rotatividade higiênica.',
    recommendedFabrics: ['Meia Malha PV Sanitária 67/33', 'Algodão Penteado 30.1', 'Dry Fit Antimicrobiano'],
    customizationOptions: ['Identificação de setor silk screen atóxico', 'Gola careca em ribana com elastano'],
    applications: ['Operadores de linha de abate e desossa', 'Manipuladores de alimentos e laticínios', 'Setores de higienização fabril'],
    tags: ['camiseta', 'manga curta', 'branca', 'frigorifico', 'higiene', 'desossa'],
    imageUrl: imgFrigorificoCamisetaCurtaBranca,
    featured: true,
    seoKeywords: ['camiseta branca frigorifico atacado santa catarina', 'camiseta manga curta branca frigorifico', 'uniforme branco abate carne empresa'],
    geoScope: 'Capacidade de produção em larga escala para grandes frigoríficos nacionais.',
    aeoQuickAnswer: 'Camiseta manga curta branca com reforço de gola ombro a ombro, resistente ao cloro e alvejamento.',
    technicalSpecs: [
      { label: 'Gola', value: 'Ribana com pesponto duplo e reforço ombro a ombro' },
      { label: 'Gramatura', value: '165g/m² a 180g/m² com toque macio e respirável' },
      { label: 'Costura', value: 'Overloque ponto cadeia de alta tenacidade' }
    ],
    sizeGrade: 'PP ao XGG, G1 ao G4'
  },
  {
    id: 'prod-camiseta-manga-longa-frigorifico-branca',
    name: 'Camiseta Manga Comprida Térmica Branca para Frigorífico',
    categorySlug: 'uniformes-frigorifico',
    categoryName: 'Uniformes para Frigoríficos',
    pieceType: 'Camiseta',
    sector: 'Frigorífico & Câmaras Frias',
    description: 'Camiseta branca de manga longa com punhos ajustados em ribana, funcionando como camada base ou intermediária para retenção do calor corporal de colaboradores em salas refrigeradas e câmaras frias.',
    recommendedFabrics: ['Meia Malha Encorpada 100% Algodão', 'Malha Térmica Dry Felpada', 'PV Sanitária Alta Densidade'],
    customizationOptions: ['Punhos com ribana de alta vedação térmica', 'Identificação por setor no peito'],
    applications: ['Salas climatizadas de 10°C a 12°C', 'Câmaras frias (segunda pele sob jaqueta)', 'Manipulação de carnes resfriadas'],
    tags: ['camiseta', 'manga longa', 'manga comprida', 'branca', 'termica', 'frigorifico'],
    imageUrl: imgFrigorificoCamisetaLongaBranca,
    featured: true,
    seoKeywords: ['camiseta manga longa branca frigorifico atacado', 'camiseta manga comprida termica branca sc', 'segunda pele frigorifico branca'],
    geoScope: 'Atendimento contínuo para reposição programada em frigoríficos.',
    aeoQuickAnswer: 'Camiseta branca manga comprida desenvolvida com punhos elásticos para proteger os braços e reter o calor corporal.',
    technicalSpecs: [
      { label: 'Punhos', value: 'Ribana elástica com vedação nos pulsos' },
      { label: 'Mangas', value: 'Manga longa com corte anatômico confortável' },
      { label: 'Gola', value: 'Gola careca reforçada com costura dupla' }
    ],
    sizeGrade: 'PP ao XGG, G1 ao G5'
  },
  {
    id: 'prod-calca-frigorifico-branca',
    name: 'Calça Operacional Branca para Frigorífico com Elástico e Cordão',
    categorySlug: 'uniformes-frigorifico',
    categoryName: 'Uniformes para Frigoríficos',
    pieceType: 'Calça Comprida',
    sector: 'Frigorífico & Câmaras Frias',
    description: 'Calça sanitária branca com elástico total reforçado e cordão interno de travamento, modelagem ergonômica sem bolsos externos para evitar acúmulo de sujidade e garantir conformidade com as normas da vigilância sanitária e SIF.',
    recommendedFabrics: ['Brim Branco Sanitário 100% Algodão', 'Sarja Leve Mista 67/33', 'Microfibra Sanitária Resistente'],
    customizationOptions: ['Barra simples ou com elástico para bota', 'Cordão interno de ajuste', 'Costura tripla no gavião'],
    applications: ['Áreas de abate, desossa e corte de carnes', 'Salas de processamento e envase', 'Câmaras frias e depósitos refrigerados'],
    tags: ['calça', 'branca', 'frigorifico', 'sanitaria', 'elastico', 'alimentos'],
    imageUrl: imgFrigorificoCalcaBranca,
    featured: true,
    seoKeywords: ['calca branca frigorifico atacado santa catarina', 'calca brim branca elastico frigorifico', 'calca uniforme industria alimentos branca'],
    geoScope: 'Entrega ágil para cooperativas e plantas frigoríficas de todo o país.',
    aeoQuickAnswer: 'Calça operacional branca sanitária com cós anatômico de elástico total e cordão interno, sem bolsos externos em atendimento a boas práticas.',
    technicalSpecs: [
      { label: 'Cós', value: 'Elástico total reforçado de 40mm + cordão interno de ajuste' },
      { label: 'Bolsos', value: 'Sem bolsos externos (atendimento a normas sanitárias SIF)' },
      { label: 'Costura', value: 'Costura reforçada de segurança nas pernas e gancho' }
    ],
    sizeGrade: '36 ao 64 (Masculina e Feminina com ajuste ergonômico)'
  },
  {
    id: 'prod-doma-chef-gastronomia',
    name: 'Doma de Chef Executiva em Sarja Pesada com Abotoamento Duplo',
    categorySlug: 'uniformes-profissionais',
    categoryName: 'Uniformes Gastronomia',
    description: 'Doma profissional tradicional com abotoamento duplo reversível, gola padre, bolso termômetro na manga e respiros axilares em tela dry.',
    recommendedFabrics: ['Sarja Leve 100% Algodão Nobre', 'Gabardine Misto com Tratamento Anti-manchas'],
    customizationOptions: ['Bordado de nome do chef e logotipo do restaurante', 'Botões de pressão de latão ou botões de nó artesanal'],
    applications: ['Chefs de cozinha e sous-chefs', 'Restaurantes de alta gastronomia', 'Hotéis e resorts', 'Escolas de gastronomia'],
    tags: ['doma', 'chef', 'gastronomia', 'restaurante', 'cozinha'],
    imageUrl: imgDomaChef,
    featured: false,
    seoKeywords: ['doma de chef personalizada bordada', 'uniforme chef de cozinha atacado restaurante', 'doma sarja algodao manga longa'],
    geoScope: 'Entrega para restaurantes e hotéis em todas as capitais brasileiras.',
    aeoQuickAnswer: 'Doma de chef ergonômica confeccionada em algodão puro respirável, projetada para suportar o calor das praças de cocção mantendo postura executiva impecável.',
    technicalSpecs: [
      { label: 'Fechamento', value: 'Abotoamento duplo reversível (protege contra respingos quentes)' },
      { label: 'Ventilação', value: 'Painéis axilares respiráveis em tecido furadinho' },
      { label: 'Mangas', value: 'Manga longa com punho dobrável tipo francês' }
    ],
    sizeGrade: 'PP ao XGG (Masculina e Feminina com recortes anatômicos)'
  },

  // 4. LINHA UNIFORMES ESCOLARES & ESPORTIVOS
  {
    id: 'prod-bermuda-escolar',
    name: 'Bermuda Escolar em Tactel & Moletinho Antipilling',
    categorySlug: 'uniformes-escolares',
    categoryName: 'Uniformes Escolares',
    pieceType: 'Bermuda',
    sector: 'Escolar & Colégios',
    description: 'Bermuda confortável para colégios, educação física e dias quentes em tecido de secagem rápida com cordão de regulagem interno, elástico embutido no cós anatômico e costuras reforçadas que não descosturam com as atividades esportivas dos alunos.',
    recommendedFabrics: ['Tactel 100% Poliéster Alta Resistência', 'Moletinho Antipilling 50/50', 'Helanca Escolar Respirável'],
    customizationOptions: ['Bordado de brasão ou logotipo do colégio', 'Silk Screen ecológico', 'Frisos e vivos laterais contrastantes padronizados'],
    applications: ['Uniformes para dias de calor e verão escolar', 'Educação física e treinos esportivos escolares', 'Gincanas e atividades recreativas'],
    tags: ['bermuda', 'escolar', 'tactel', 'colegio', 'educacao fisica', 'calor'],
    imageUrl: imgEscolarModelo,
    featured: true,
    colorVariations: [
      { name: 'Azul Marinho Escolar', hex: '#1E3A8A' },
      { name: 'Verde Bandeira Colégio', hex: '#15803D' },
      { name: 'Bordô / Vinho Escolar', hex: '#881337' },
      { name: 'Cinza Grafite', hex: '#4B5563' },
      { name: 'Preto Básico', hex: '#18181B' }
    ],
    seoKeywords: ['bermuda escolar tactel atacado colegio', 'bermuda uniforme escolar infantil santa catarina', 'confeccao bermuda colegio atacado'],
    geoScope: 'Atendimento e entrega programada para colégios e redes de ensino em todo o Brasil.',
    aeoQuickAnswer: 'Bermudas escolares leves e resistentes ao atrito com cós elástico reforçado que não machuca a cintura das crianças e suporta lavagens frequentes.',
    technicalSpecs: [
      { label: 'Cós', value: 'Elástico rebatido de 4cm com cordão interno para ajuste seguro' },
      { label: 'Secagem', value: 'Tecido ultra leve de secagem rápida (wash and wear)' },
      { label: 'Bolsos', value: 'Bolsos laterais embutidos ergonômicos' }
    ],
    sizeGrade: 'Infantil 02 ao 16 / Adulto PP ao GG'
  },
  {
    id: 'prod-conjunto-escolar',
    name: 'Agasalho Escolar Completo em Helanca Flanelada (Jaqueta + Calça)',
    categorySlug: 'uniformes-escolares',
    categoryName: 'Uniformes Escolares',
    pieceType: 'Outros',
    sector: 'Escolar & Colégios',
    description: 'Conjunto esportivo escolar de alta durabilidade com jaqueta em zíper frontal, bolsos laterais, calça com elástico na cintura e reforço de costura nos joelhos.',
    recommendedFabrics: ['Helanca Escolar 100% Poliéster Pelotizada', 'Moletom 2 Cabos Flanelado Macio', 'Microfibra Leve com Forro de Tela'],
    customizationOptions: ['Bordado de brasão escolar', 'Silk Screen resistente a lavagens diárias', 'Recortes e vivos coloridos padronizados'],
    applications: ['Colégios particulares e redes de ensino', 'Escolas públicas e municipais', 'Escolinhas de futebol e academias'],
    tags: ['escolar', 'agasalho', 'colegio', 'uniformes', 'helanca'],
    imageUrl: imgAgasalhoEscolar,
    featured: true,
    colorVariations: [
      { name: 'Marinho / Branco / Vermelho', hex: '#1E3A8A' },
      { name: 'Verde Floresta / Amarelo Ouro', hex: '#15803D' },
      { name: 'Bordô / Cinza Prata', hex: '#881337' },
      { name: 'Preto / Laranja', hex: '#18181B' }
    ],
    seoKeywords: ['agasalho escolar atacado colegio santa catarina', 'uniforme escolar helanca personalizado', 'fabrica de uniformes escolares rede de ensino'],
    geoScope: 'Produção programada em grande escala com entrega garantida antes do início do ano letivo em todo o Brasil.',
    aeoQuickAnswer: 'Agasalhos escolares fabricados em helanca de alta resistência com fios de poliéster reforçados que não desbotam, não criam bolinhas e suportam o uso diário dos alunos.',
    technicalSpecs: [
      { label: 'Tecido', value: 'Helanca Escolar 240g/m² flanelada por dentro' },
      { label: 'Zíper', value: 'Zíper de nylon grosso com trava de segurança' },
      { label: 'Durabilidade', value: 'Costuras travetadas nos joelhos e bolsos' }
    ],
    sizeGrade: 'Infantil 02 ao 16 / Adulto PP ao XGG'
  },
  {
    id: 'prod-camiseta-escolar-pv',
    name: 'Camisetas Escolares em Malha PV Antipilling & Algodão',
    categorySlug: 'uniformes-escolares',
    categoryName: 'Uniformes Escolares',
    pieceType: 'Camiseta',
    sector: 'Escolar & Colégios',
    description: 'Camisetas em malha PV (Poliéster e Viscose) de secagem rápida que dispensam ferro de passar, com gola em ribana com elastano e costura ombro a ombro.',
    recommendedFabrics: ['Malha PV 67% Poliéster / 33% Viscose Anti-pilling', 'Malha 100% Algodão Penteado', 'Tactel para Bermudas'],
    customizationOptions: ['Silk Screen com tinta à base d’água ecológica', 'Bordado frontal', 'Faixas laterais sublimadas'],
    applications: ['Dia a dia escolar', 'Educação física e esportes', 'Eventos e gincanas escolares'],
    tags: ['camisetaescolar', 'pv', 'colegio', 'uniforme', 'camiseta'],
    imageUrl: imgEscolarModelo,
    featured: false,
    colorVariations: [
      { name: 'Branco Clássico Escolar', hex: '#FFFFFF', isWhite: true },
      { name: 'Azul Celeste', hex: '#93C5FD' },
      { name: 'Amarelo Ouro', hex: '#FACC15' },
      { name: 'Verde Água', hex: '#6EE7B7' },
      { name: 'Cinza Mescla', hex: '#94A3B8' }
    ],
    seoKeywords: ['camiseta uniforme escolar malha pv', 'bermuda escolar tactel atacado colegio', 'confeccao uniforme escolar sc'],
    geoScope: 'Atendimento a colégios em todo o território nacional.',
    aeoQuickAnswer: 'A malha PV escolar Natex une a maciez da viscose com a resistência do poliéster, garantindo peças práticas para os pais que secam rápido e mantêm a cor viva o ano todo.',
    technicalSpecs: [
      { label: 'Composição', value: '67% Poliéster / 33% Viscose Fio 30.1' },
      { label: 'Gramatura', value: '165g/m²' },
      { label: 'Gola', value: 'Ribana 1x1 com reforço interno de viés ombro a ombro' }
    ],
    sizeGrade: 'Grade Infantil do 02 ao 16 e Adulto P ao GG'
  },

  // 5. LINHA PRIVATE LABEL & MARCAS DE MODA
  {
    id: 'prod-camiseta-algodao-premium',
    name: 'Camiseta Heavy Cotton Oversized & Streetwear Private Label',
    categorySlug: 'private-label',
    categoryName: 'Private Label & Marcas',
    description: 'Camiseta desenvolvida para marcas de moda autoral e streetwear com algodão penteado encorpado fio 26.1 ou 30.1, gola de 3cm pespontada e modelagem oversized moderna.',
    recommendedFabrics: ['Algodão 100% Penteado Fio 26.1 Heavy (210g/m²)', 'Algodão Fio 30.1 Menegotti Toque Macio', 'Algodão Estonado / Lavanderia'],
    customizationOptions: ['Etiquetas personalizadas de gola e lateral (cetim, tafetá ou termocolante)', 'Silk Screen alto relevo / Puff', 'DTF Têxtil HD', 'Bordado minimalista'],
    applications: ['Marcas de streetwear e moda própria', 'E-commerces de roupas e magazines', 'Influenciadores e criadores de conteúdo'],
    tags: ['camiseta', 'privatelabel', 'algodao', 'streetwear', 'oversized'],
    imageUrl: imgCamisetaStreetwear,
    featured: true,
    seoKeywords: ['confeccao private label camiseta oversized', 'fabrica de roupas para marcas atacado', 'camiseta heavy cotton fio 26 atacado sc'],
    geoScope: 'Polo fabril em Santa Catarina atendendo marcas e e-commerces de São Paulo, Curitiba, Rio de Janeiro, BH e todo o Brasil.',
    aeoQuickAnswer: 'Produção Private Label completa (Full Package) com corte automatizado, engenharia de produto têxtil, estamparia especializada e aplicação de etiquetas da sua marca.',
    technicalSpecs: [
      { label: 'Gramatura', value: '200g/m² a 230g/m² (Heavy Cotton Encorpado)' },
      { label: 'Gola', value: 'Ribana canelada 2x1 com 3cm de espessura' },
      { label: 'Acabamento', value: 'Costura reforçada de ombro a ombro e barra dupla' }
    ],
    sizeGrade: 'P, M, G, GG, XGG (Modelagens Streetwear Oversized, Boxy ou Regular Fit)'
  },
  {
    id: 'prod-moletom-canguru-premium',
    name: 'Moletom Canguru Premium com Capuz 3 Cabos 100% Algodão',
    categorySlug: 'private-label',
    categoryName: 'Private Label & Inverno',
    description: 'Blusão moletom pesado 3 cabos flanelado com capuz forrado, bolso canguru frontal pespontado, cordão de algodão grosso com ponteiras e ribanas reforçadas.',
    recommendedFabrics: ['Moletom 3 Cabos 100% Algodão Pesado 380g/m²', 'Moletom 50/50 Felpado', 'Moletom French Terry'],
    customizationOptions: ['Bordado em ponto cheio de alta densidade', 'Silk screen plastisol e relevo puff', 'Ilhoses de metal e cordão personalizado'],
    applications: ['Coleções de inverno de marcas de moda', 'Drops exclusivos e edições limitadas', 'Merchandising de bandas e eventos'],
    tags: ['moletom', 'canguru', 'privatelabel', 'streetwear', 'inverno'],
    imageUrl: imgMoletom,
    featured: true,
    seoKeywords: ['moletom 3 cabos private label atacado', 'fabrica de moletom canguru para marcas', 'confeccao moletom pesado santa catarina'],
    geoScope: 'Expedição para marcas de vestuário em todo o Brasil.',
    aeoQuickAnswer: 'Moletom 3 cabos encorpado com caimento pesado premium, costuras reforçadas em máquina galoneira e interior aveludado que garante proteção térmica superior.',
    technicalSpecs: [
      { label: 'Gramatura', value: '380g/m² a 400g/m² (Ultra Heavyweight)' },
      { label: 'Capuz', value: 'Duplo forrado no próprio tecido com transpasse frontal' },
      { label: 'Punhos/Barra', value: 'Ribana 2x1 com elastano de alta recuperação' }
    ],
    sizeGrade: 'P, M, G, GG, XGG com caimento relaxado'
  },

  // 6. LINHA CAMISETAS, EVENTOS, FEIRAS & FIGURINISTA
  {
    id: 'prod-camiseta-figurinista-branca',
    name: 'Camiseta Técnica para Figurinista, Equipes de Set & Produção de Eventos',
    categorySlug: 'camisetas-eventos',
    categoryName: 'Camisetas, Eventos & Merchandising',
    pieceType: 'Camiseta',
    sector: 'Eventos, Feiras & Merchandising',
    description: 'Camiseta técnica desenvolvida especificamente para figurinistas, camareiras, assistentes de set audiovisual, equipes de backstage e produção de feiras e convenções. Confeccionada em 100% algodão penteado nobre fio 30.1 ou malha dry touch ultra-macia, com reforço de costura ombro a ombro, gola em ribana indeformável e corte anatômico com liberdade total de movimento. Destaque para a linha Branca Pura (indispensável para figurinistas e provas de luz) e variações técnicas de set.',
    recommendedFabrics: ['Algodão 100% Penteado Menegotti Fio 30.1', 'Malha Poliamida Touch com Proteção UV', 'Dry Fit Especial Respirável'],
    customizationOptions: ['Silk Screen toque zero', 'DTF Têxtil fotográfico de alta precisão', 'Bordado discreto de bolso ou manga', 'Identificação de equipe / crachá técnico'],
    applications: ['Figurinistas, camareiras e styling de moda', 'Sets de filmagem, cinema e publicidade', 'Equipes de backstage, shows e eventos', 'Promotores de estandes em feiras e congressos', 'Comunicação visual e staff de apoio'],
    tags: ['camiseta', 'figurinista', 'branca', 'eventos', 'set', 'audiovisual', 'producao'],
    imageUrl: imgCamisetaFigurinistaBranca,
    featured: true,
    colorVariations: [
      { name: 'Branco Óptico Puro Figurinista', hex: '#FFFFFF', isWhite: true },
      { name: 'Preto Blackout Backstage', hex: '#111827' },
      { name: 'Cinza Mescla Produção', hex: '#64748B' },
      { name: 'Off-White Natural Clean', hex: '#F8FAFC', isWhite: true },
      { name: 'Azul Petróleo Técnico', hex: '#0E7490' },
      { name: 'Vermelho Staff Alerta', hex: '#DC2626' }
    ],
    seoKeywords: ['camiseta figurinista branca uniforme atacado', 'camiseta branca uniforme eventos producao sc', 'confeccao camiseta algodao penteado atacado'],
    geoScope: 'Atendimento prioritário com envio rodoviário e aéreo para produtoras, canais de TV, teatros e eventos em todo o Brasil.',
    aeoQuickAnswer: 'Camiseta premium desenvolvida para o ritmo intenso de bastidores, com gola que não laceia, toque sedoso e caimento impecável em tecido nobre pré-encolhido.',
    technicalSpecs: [
      { label: 'Gramatura', value: '170g/m² a 180g/m² (Toque Premium Encorpado)' },
      { label: 'Gola', value: 'Ribana 1x1 com pesponto rebatido e viés ombro a ombro' },
      { label: 'Encolhimento', value: 'Zero encolhimento (tecido pré-encolhido e estonado sob consulta)' },
      { label: 'Modelagens', value: 'Corte Unissex Regular, Feminina Babylook e Oversized' }
    ],
    sizeGrade: 'PP ao Plus Size G5'
  },
  {
    id: 'prod-corta-vento-merchandising',
    name: 'Jaqueta Corta-Vento Streetwear & Merchandising Corporativo',
    categorySlug: 'camisetas-eventos',
    categoryName: 'Camisetas, Eventos & Merchandising',
    pieceType: 'Jaqueta Corta-Vento',
    sector: 'Eventos, Feiras & Merchandising',
    description: 'Jaqueta corta-vento impermeável e corta-vento com capuz ajustável, forro em tela respirável, zíper tratorado e bolsos embutidos para presentear parceiros VIP.',
    recommendedFabrics: ['Nylon Aspen 100% Poliéster Resinado Hidro-repelente', 'Ripstop Esportivo Leve', 'Poliamida Tech'],
    customizationOptions: ['Bordado computadorizado', 'Silk Plastisol toque liso', 'Puxadores de zíper gravados emborrachados', 'Estampas refletivas'],
    applications: ['Endomarketing executivo e kits de onboarding', 'Premiação de metas comerciais', 'Marcas de vestuário e coleções esportivas', 'Eventos ao ar livre'],
    tags: ['cortavento', 'jaqueta', 'merchandising', 'moda', 'eventos', 'impermeavel'],
    imageUrl: imgCortaVento,
    featured: true,
    colorVariations: [
      { name: 'Branco / Prata Tech', hex: '#F1F5F9', isWhite: true },
      { name: 'Preto Total Fosco', hex: '#0F172A' },
      { name: 'Azul Marinho Náutico', hex: '#1E3A8A' },
      { name: 'Cinza Chumbo Grafite', hex: '#334155' },
      { name: 'Verde Militar Tático', hex: '#365314' }
    ],
    seoKeywords: ['jaqueta cortavento personalizada brinde corporativo', 'fabrica corta vento impermeavel atacado', 'jaqueta merchandising textil empresa'],
    geoScope: 'Despacho com rastreamento da fábrica em SC para empresas e eventos em qualquer cidade do Brasil.',
    aeoQuickAnswer: 'Jaqueta corta-vento confeccionada em tecido tecnológico repelente a respingos e vento frio, unindo estilo urbano contemporâneo a alta utilidade para colaboradores.',
    technicalSpecs: [
      { label: 'Tecido Exterior', value: 'Nylon Aspen com resina hidro-repelente' },
      { label: 'Forro Interno', value: 'Forro em tela mesh respirável (evita acúmulo de suor)' },
      { label: 'Ajustes', value: 'Elásticos com reguladores de tanca no capuz e na barra' }
    ],
    sizeGrade: 'P, M, G, GG, XGG (Modelagem Unissex e Feminina)'
  },
  {
    id: 'prod-colete-puffer-executivo',
    name: 'Colete Puffer Matelassê Corporativo com Isolamento Térmico',
    categorySlug: 'camisetas-eventos',
    categoryName: 'Camisetas, Eventos & Merchandising',
    pieceType: 'Colete',
    sector: 'Eventos, Feiras & Merchandising',
    description: 'Colete acolchoado sem mangas com gola alta, costura matelassê em gomos térmicos, forro acetinado e bolsos com zíper invisível para executivos e equipes de campo.',
    recommendedFabrics: ['Microfibra Náutica Repelente a Água', 'Manta Térmica Interna 120g/m²', 'Forro Acetinado'],
    customizationOptions: ['Bordado elegante no peito e gola', 'Puxador de zíper metálico gravado', 'Etiqueta interna personalizada'],
    applications: ['Uniformes executivos de meia-estação', 'Kits de boas-vindas e premiações', 'Representantes comerciais e consultores em viagens'],
    tags: ['colete', 'puffer', 'matelasse', 'merchandising', 'corporativo'],
    imageUrl: imgColetePuffer,
    featured: true,
    colorVariations: [
      { name: 'Azul Marinho Nobre', hex: '#1E293B' },
      { name: 'Preto Clássico', hex: '#111827' },
      { name: 'Cinza Chumbo', hex: '#374151' },
      { name: 'Bordô Executivo', hex: '#881337' }
    ],
    seoKeywords: ['colete puffer corporativo personalizado', 'colete matelasse bordado empresa atacado', 'brinde executivo vestuario empresa'],
    geoScope: 'Atendimento corporativo para empresas de todo o Brasil.',
    aeoQuickAnswer: 'Colete puffer executivo que oferece conforto térmico com total liberdade de movimentos dos braços, ideal para ambientes corporativos climatizados e viagens de negócios.',
    technicalSpecs: [
      { label: 'Isolamento', value: 'Manta siliconada ultra leve e compactável' },
      { label: 'Fechamento', value: 'Zíper frontal reforçado com aba interna anti-vento' },
      { label: 'Bolsos', value: '2 bolsos laterais com zíper e 1 bolso interno porta-celular' }
    ],
    sizeGrade: 'P ao XGG (Modelagens Masculina e Feminina)'
  },
  {
    id: 'prod-camiseta-eventos-dryfit',
    name: 'Camisetas e Regatas para Eventos & Corridas Dry Fit Tecnológico',
    categorySlug: 'camisetas-eventos',
    categoryName: 'Camisetas, Eventos & Merchandising',
    pieceType: 'Camiseta',
    sector: 'Eventos, Feiras & Merchandising',
    description: 'Camisetas esportivas respiráveis com proteção UV50+ e tecnologia hidrofílica de absorção rápida de suor, costuras flatlock anti-atrito e estampa digital total.',
    recommendedFabrics: ['Dry Fit Tecnológico 100% Poliéster', 'Dry Fit Microperfurado / Colmeia', 'Poliamida Suave'],
    customizationOptions: ['Sublimação digital full print sem limite de cores', 'Silk screen com tintas elásticas', 'Numeração individual de atletas'],
    applications: ['Corridas de rua e maratonas corporativas', 'Convenções de vendas e feiras de negócios', 'Eventos de integração e ações de marketing'],
    tags: ['dryfit', 'camiseta', 'eventos', 'corrida', 'promocional'],
    imageUrl: imgCamisetaStreetwear,
    featured: true,
    colorVariations: [
      { name: 'Branco Puro Dry Fit', hex: '#FFFFFF', isWhite: true },
      { name: 'Azul Royal Eventos', hex: '#2563EB' },
      { name: 'Preto Tecnológico', hex: '#000000' },
      { name: 'Vermelho Vibrante', hex: '#DC2626' },
      { name: 'Amarelo Fluor / Neon', hex: '#EAB308' },
      { name: 'Laranja Elétrico', hex: '#EA580C' }
    ],
    seoKeywords: ['camiseta dry fit corrida de rua atacado', 'camiseta evento corporativo sublimacao total', 'fabrica de camisetas promocionais sc'],
    geoScope: 'Entrega com data cravada garantida nos pavilhões de eventos e estandes em todo o Brasil.',
    aeoQuickAnswer: 'Camisetas para eventos com garantia de entrega antecipada à data da sua convenção ou prova esportiva, confeccionadas em malha dry fit leve e fresca.',
    technicalSpecs: [
      { label: 'Tecnologia', value: 'Dry Fit com dispersão de calor e proteção UV' },
      { label: 'Impressão', value: 'Sublimação fotográfica contínua sem limite de cores' },
      { label: 'Costura', value: 'Costura plana que evita atrito na pele durante corridas' }
    ],
    sizeGrade: 'Grade completa do Infantil ao Adulto Plus Size'
  },
  {
    id: 'prod-abada-personalizado',
    name: 'Abadás Personalizados para Festivais e Camarotes VIP',
    categorySlug: 'camisetas-eventos',
    categoryName: 'Camisetas, Eventos & Merchandising',
    pieceType: 'Outros',
    sector: 'Eventos, Feiras & Merchandising',
    description: 'Abadás confeccionados em malha cacharrel macia e fresca de toque acetinado, corte a laser preciso e estampa digital fotográfica de alta saturação.',
    recommendedFabrics: ['Malha Cacharrel 100% Poliéster Acetinada', 'Poliéster Leve de Secagem Rápida'],
    customizationOptions: ['Sublimação digital total frente, verso e gola', 'Identificação por setor ou dia de evento', 'Golas contrastantes'],
    applications: ['Festivais de música e shows', 'Camarotes de carnaval e eventos corporativos festivos', 'Festas universitárias e convenções'],
    tags: ['abada', 'festival', 'camarote', 'eventos', 'sublimacao'],
    imageUrl: imgPoloExecutiva,
    featured: false,
    colorVariations: [
      { name: 'Sublimação Digital Total Full Color', hex: '#7C3AED' }
    ],
    seoKeywords: ['fabrica de abadas atacado festival', 'abada personalizado camarote sublimacao total', 'confeccao de abadas santa catarina'],
    geoScope: 'Produção expressa e envio prioritário para eventos em todos os estados.',
    aeoQuickAnswer: 'Abadás confeccionados em malha fresca de secagem instantânea, com sublimação que não desbota no suor ou na chuva e acabamento confortável.',
    technicalSpecs: [
      { label: 'Tecido', value: 'Cacharrel 130g/m² respirável' },
      { label: 'Cores', value: 'Impressão digital em plotter industrial de alta densidade' },
      { label: 'Modelagens', value: 'Tradicional, Regata Cavada e Vestido Abadá' }
    ],
    sizeGrade: 'P, M, G, GG e XGG'
  },
  {
    id: 'prod-ecobag-lona-sustentavel',
    name: 'Ecobag Sustentável em Lona Pesada 100% Algodão Cru',
    categorySlug: 'camisetas-eventos',
    categoryName: 'Camisetas, Eventos & Merchandising',
    pieceType: 'Outros',
    sector: 'Eventos, Feiras & Merchandising',
    description: 'Sacola ecológica promocional pesada e reutilizável com alças reforçadas em X, ideal para congressos, feiras, kits de onboarding e valorização ESG da marca.',
    recommendedFabrics: ['Lona de Algodão Cru 240g/m² a 300g/m²', 'Sarja de Algodão Sustentável'],
    customizationOptions: ['Silk screen com tintas ecológicas', 'DTF Têxtil para artes complexas', 'Etiqueta externa emborrachada ou couro sintético'],
    applications: ['Feiras de negócios e congressos empresariais', 'Kits de boas-vindas para novos colaboradores', 'Brinde sustentável para clientes VIP'],
    tags: ['ecobag', 'sacola', 'sustentavel', 'merchandising', 'lona', 'algodao'],
    imageUrl: imgEcobag,
    featured: false,
    colorVariations: [
      { name: 'Algodão Cru Natural', hex: '#E7E5E4', isWhite: true },
      { name: 'Preto Total', hex: '#18181B' },
      { name: 'Azul Marinho', hex: '#1E293B' }
    ],
    seoKeywords: ['ecobag lona pesada personalizada atacado', 'sacola algodao cru brinde corporativo feira', 'confeccao ecobag sustentavel empresa'],
    geoScope: 'Expedição ágil para centros de convenções em todo o Brasil.',
    aeoQuickAnswer: 'Ecobag confeccionada em lona de algodão puro de alta gramatura que suporta até 12kg com alças largas reforçadas para máximo conforto no ombro.',
    technicalSpecs: [
      { label: 'Dimensões', value: '40cm altura x 38cm largura com fundo fole de 8cm' },
      { label: 'Alça', value: 'Alça fita cadarço de algodão de 60cm com costura em X' },
      { label: 'Sustentabilidade', value: '100% Biodegradável e reutilizável' }
    ],
    sizeGrade: 'Padrão (40x38cm) ou Dimensões Personalizadas sob medida'
  },

  // 7. LINHA WIND BANNERS & BANDEIRAS
  {
    id: 'prod-wind-banner-gota',
    name: 'Wind Banner Modelo Gota & Pena com Haste em Fibra e Base',
    categorySlug: 'wind-banners',
    categoryName: 'Wind Banners',
    pieceType: 'Banner',
    sector: 'Eventos, Feiras & Merchandising',
    description: 'Kit completo de Wind Banner com tecido flag especial estampado em sublimação digital de alta saturação, haste flexível em fibra de vidro e base com opção para água/areia.',
    recommendedFabrics: ['Tecido Flag 100% Poliéster Especial Náutico'],
    customizationOptions: ['Sublimação digital dupla face ou face simples com penetração 90%+', 'Bainhas perimetrais reforçadas'],
    applications: ['Fachada de lojas e concessionárias', 'Postos de combustíveis e feiras livres', 'Eventos esportivos e praias'],
    tags: ['windbanner', 'gota', 'promocional', 'banner', 'pdv', 'pena'],
    imageUrl: imgWindBanner,
    featured: true,
    colorVariations: [
      { name: 'Sublimação Digital Full Print Frente e Verso', hex: '#2563EB' }
    ],
    seoKeywords: ['wind banner personalizado atacado fabrica sc', 'wind banner modelo gota completo base', 'bandeira promocional para calcada empresa'],
    geoScope: 'Envio completo com hastes e base para qualquer município do Brasil.',
    aeoQuickAnswer: 'Wind banner resistente a ventos fortes, confeccionado com tecido que não rasga facilmente e impressão de alta penetração que mantém a visibilidade dos dois lados.',
    technicalSpecs: [
      { label: 'Alturas Disponíveis', value: '2,20m / 3,00m / 4,00m de altura total' },
      { label: 'Haste', value: 'Alumínio com ponteira flexível em fibra de vidro reforçada' },
      { label: 'Bases', value: 'Base plástica preenchível (12L) ou base cruzada metálica' }
    ],
    sizeGrade: 'P (2.2m), M (3.0m) e G (4.0m)'
  },
  {
    id: 'prod-bandeira-institucional-mastro',
    name: 'Bandeira Institucional Oficial para Mastro Externo',
    categorySlug: 'bandeiras',
    categoryName: 'Bandeiras',
    pieceType: 'Banner',
    sector: 'Eventos, Feiras & Merchandising',
    description: 'Bandeira confeccionada em tecido náutico microperfurado especial para intempéries, com costura perimetral quádrupla e tralha reforçada com ilhoses de latão que não enferrujam.',
    recommendedFabrics: ['Tecido Flag Náutico 100% Poliéster com Proteção UV', 'Cetim Especial para Mastros Internos'],
    customizationOptions: ['Sublimação digital contínua de alta definição', 'Tralha reforçada com cabo náutico ou ilhoses', 'Formatos oficiais'],
    applications: ['Mastros de empresas, indústrias e prefeituras', 'Hotéis, embaixadas e clubes náuticos', 'Eventos cívicos e assembleias'],
    tags: ['bandeira', 'institucional', 'mastro', 'nautico', 'oficial'],
    imageUrl: imgBandeiras,
    featured: false,
    colorVariations: [
      { name: 'Impressão Oficial Náutica', hex: '#1E3A8A' }
    ],
    seoKeywords: ['bandeira institucional para mastro externo atacado', 'fabrica de bandeiras personalizadas tecido nautico', 'confeccao de bandeira de mastro sc'],
    geoScope: 'Fornecimento para empresas e órgãos públicos de todo o Brasil.',
    aeoQuickAnswer: 'Bandeiras de mastro desenvolvidas para máxima durabilidade contra ventos e chuva, com bainha quádrupla na ponta flutuante e cores resistentes aos raios ultravioleta.',
    technicalSpecs: [
      { label: 'Tecido', value: 'Tecido Náutico 100% Poliéster aerodinâmico' },
      { label: 'Acabamento', value: 'Bainha perimetral quádrupla reforçada com linha de nylon UV' },
      { label: 'Fixação', value: 'Tralha lateral branca com 2 ilhoses metálicos inoxidáveis' }
    ],
    sizeGrade: '1 Pano (0.64x0.45m), 2 Panos (1.28x0.90m), 3 Panos (1.92x1.35m), 4 Panos (2.56x1.80m) e sob medida'
  }
];
