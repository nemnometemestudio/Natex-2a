import React from 'react';
import { useRouter } from '../context/RouterContext';
import { COMPANY_INFO } from '../data/companyData';
import { SEOHead } from '../components/layout/SEOHead';
import { NatexBlindsHero } from '../components/home/NatexBlindsHero';
import { ProductionProcessFlow } from '../components/home/ProductionProcessFlow';
import { PilotPieceHighlight } from '../components/common/PilotPieceHighlight';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { 
  ShieldCheck, 
  Factory, 
  Layers, 
  MessageSquare, 
  Scissors, 
  Users,
  HardHat,
  Briefcase,
  Snowflake,
  GraduationCap,
  Tag,
  Flag,
  FileCheck,
  ShoppingBag,
  Instagram,
  MapPin,
  Clock,
  ArrowRight,
  FileText
} from 'lucide-react';
import { createWhatsAppLink, trackEvent } from '../utils/analytics';

// Imagens de Modelos Reais das Roupas por Setor
import imgJalecoSaude from '../assets/images/jaleco_medico_uniforme_1787607267372.jpg';
import imgBrimIndustrial from '../assets/images/uniforme_brim_industrial_1787607277750.jpg';
import imgTermicoFrigorifico from '../assets/images/jaqueta_termica_camara_1787607287947.jpg';
import imgEscolarModelo from '../assets/images/uniforme_escolar_modelo_1787607297536.jpg';
import imgCorporativoExecutivo from '../assets/images/uniforme_social_executivo_1787607310621.jpg';
import imgPoloExecutiva from '../assets/images/camisa_polo_piquet_modelo_1787608499467.jpg';
import imgCamisetaStreetwear from '../assets/images/camiseta_oversized_streetwear_1787608527893.jpg';
import imgCortaVento from '../assets/images/jaqueta_cortavento_mockup_1787609117419.jpg';

export const HomePage: React.FC = () => {
  const { navigate, openQuoteModal } = useRouter();

  // Fichas Técnicas de Linhas Têxteis Fabris
  const EDITORIAL_CATEGORIES = [
    {
      id: 'colecoes',
      anchorId: 'private-label',
      title: 'Private Label & Marcas Próprias',
      description: 'Desenvolvimento e confecção sob medida para lojistas e marcas de vestuário.',
      slug: 'private-label',
      tag: 'Moda & Streetwear B2B',
      refCode: 'FT-PL01',
      fabric: 'Meia Malha Penteada 30.1 / Algodão Egípcio / Moletom 3 Cabos 380g',
      application: 'Coleções autorais, streetwear, moda básica e marcas de moda em escala',
      differential: 'Modelagem computadorizada em CAD, fichas técnicas homologadas e etiquetagem completa',
      image: imgCamisetaStreetwear,
    },
    {
      id: 'corporativo',
      anchorId: 'uniformes-corporativos',
      title: 'Uniformes Corporativos & Executivos',
      description: 'Polos piquet, camisas sociais sob medida, blazers e calças executivas.',
      slug: 'uniformes-corporativos',
      tag: 'Executivo & Atendimento',
      refCode: 'FT-CORP02',
      fabric: 'Tricoline com Elastano / Piquet Misto Anti-Pilling / Oxford Nobre Easy Iron',
      application: 'Recepção, escritórios, consultorias, concessionárias e liderança corporativa',
      differential: 'Colarinhos estruturados com entretela indeformável, alfaiataria fina e bordado digital',
      image: imgCorporativoExecutivo,
    },
    {
      id: 'industria',
      anchorId: 'uniformes-industriais',
      title: 'Indústria, Construção & Obras',
      description: 'Brim pesado 100% algodão, costura tripla e faixas refletivas homologadas.',
      slug: 'uniformes-industriais',
      tag: 'Operacional Pesado & NR',
      refCode: 'FT-IND03',
      fabric: 'Brim Pesado 100% Algodão 260g/m² / Ripstop Antirrasgo / Sarja Mista',
      application: 'Canteiros de obras, linhas de montagem, manutenção predial e logística pesada',
      differential: 'Costura tripla reforçada ponto cadeia, travetes estruturais e faixas refletivas',
      image: imgBrimIndustrial,
    },
    {
      id: 'polo',
      title: 'Camisas Polo & Camisaria Fina',
      description: 'Malhas nobres piquet anti-pilling e camisaria com bordado computadorizado.',
      slug: 'uniformes-corporativos',
      tag: 'Padrão Corporativo & Vendas',
      refCode: 'FT-POLO04',
      fabric: 'Piquet Nobre 50% Algodão / 50% Poliéster Menegotti / Piquet Penteado 100%',
      application: 'Equipes comerciais de campo, atendimento presencial, franquias e eventos',
      differential: 'Golas e punhos com elastano que não enrolam, carcela dupla e botões em cruz',
      image: imgPoloExecutiva,
    },
    {
      id: 'frigorificos',
      anchorId: 'frigorificos',
      title: 'Frigoríficos & Câmaras Frias Sub-Zero',
      description: 'Proteção térmica para baixas temperaturas conforme normas sanitárias.',
      slug: 'uniformes-frigorifico',
      tag: 'Térmico & Sanitário',
      refCode: 'FT-FRIG05',
      fabric: 'Nylon Resinado Impermeável com Manta Térmica Interna 150g a 300g/m²',
      application: 'Câmaras de congelamento profundo (-18°C a -30°C) e linhas de desossa/abate',
      differential: 'Isolamento térmico homologado, punhos em ribana corta-frio e zíper com pala protetora',
      image: imgTermicoFrigorifico,
    },
    {
      id: 'saude',
      title: 'Saúde, Clínicas & Laboratórios',
      description: 'Jalecos em gabardine nobre e scrubs cirúrgicos com barreira de proteção.',
      slug: 'uniformes-profissionais',
      tag: 'Hospitalar & Odonto',
      refCode: 'FT-SAU06',
      fabric: 'Gabardine Microfibra Acetinada / Two-Way com Elastano / Barreira Bacteriológica',
      application: 'Hospitais, consultórios médicos, clínicas odontológicas e laboratórios de análise',
      differential: 'Toque suave, não amarrota facilmente, caimento ergonômico e suporte a autoclave',
      image: imgJalecoSaude,
    },
    {
      id: 'escolar',
      title: 'Uniformes Escolares & Colégios',
      description: 'Linha completa para colégios com tecidos de alta durabilidade e solidez de cor.',
      slug: 'uniformes-escolares',
      tag: 'Redes de Ensino',
      refCode: 'FT-ESC07',
      fabric: 'Helanca Pesada 100% Poliéster / PV (Malha Fria) Anti-Pilling / Moletom Peluciado',
      application: 'Educação infantil, ensino fundamental, colégios de ensino médio e unidades técnicas',
      differential: 'Tinturaria reativa com solidez a lavagens contínuas, costuras duplas e corte anatômico',
      image: imgEscolarModelo,
    },
    {
      id: 'camisetas-merchandising',
      anchorId: 'comunicacao-visual',
      title: 'Merchandising, Eventos & Corta-Vento',
      description: 'Jaquetas corta-vento, camisetas promocionais e produtos têxteis sob medida.',
      slug: 'camisetas-eventos',
      tag: 'Eventos & Promoção',
      refCode: 'FT-MER08',
      fabric: 'Tactel Resinado Hidrorrepelente / Meia Malha Penteada / Dry Fit Tecnológico',
      application: 'Ações de marketing, convenções, corridas de rua, feiras industriais e eventos',
      differential: 'Estamparia têxtil em alta definição (DTF/Silk/Sublimação) e zíperes reforçados',
      image: imgCortaVento,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#FF6B00] selection:text-white">
      <SEOHead
        title="Natex Confecções | Indústria Têxtil B2B, Uniformes e Private Label"
        description="Soluções completas em confecção de escala. Fábrica própria em Navegantes/SC com mais de 30 anos de know-how e atendimento nacional."
      />

      {/* 1. HERO PERSIANA (VENETIAN BLINDS) COM VÍDEO INDUSTRIAL REAL & FOTOS HOMOLOGADAS */}
      <NatexBlindsHero />

      {/* 2. TRUST METRICS STRIP (INDUSTRIAL SPECIFICATION BAR) */}
      <section className="border-b border-stone-200/90 bg-white/75 backdrop-blur-md py-7 px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-200/70 text-center">
          <div className="space-y-1 p-3">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">30+ Anos</span>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Experiência Fabril</p>
          </div>
          <div className="space-y-1 p-3">
            <span className="text-2xl sm:text-3xl font-black text-[#1B365D] tracking-tight font-display">100% Própria</span>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Fábrica em Navegantes/SC</p>
          </div>
          <div className="space-y-1 p-3">
            <span className="text-2xl sm:text-3xl font-black text-emerald-700 tracking-tight font-display">Rigor Fabril</span>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Engenharia Têxtil</p>
          </div>
          <div className="space-y-1 p-3">
            <span className="text-2xl sm:text-3xl font-black text-[#FF6B00] tracking-tight font-display">Brasil Todo</span>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Logística Nacional B2B</p>
          </div>
        </div>
      </section>

      {/* 3. SOLUÇÕES EM CONFECÇÃO — LAYOUT DE GALERIA EDITORIAL */}
      <section className="py-16 sm:py-24 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-stone-100 border border-stone-200/80 text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Galeria de Linhas de Produção</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
                Linhas de Produção
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Conheça os modelos e linhas de vestuário desenvolvidos sob medida com padrão fabril em escala pela Natex.
              </p>
            </div>

            <button
              onClick={() => navigate('/catalogo')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1B365D] hover:text-[#FF6B00] transition-colors pb-1 cursor-pointer whitespace-nowrap self-start md:self-end"
            >
              <span>Ver Catálogo Completo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Grid de Galeria — Foco Visual com Imagens em Destaque e Apenas o Nome do Modelo Abaixo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12">
            {EDITORIAL_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                id={cat.anchorId || cat.id}
                onClick={() => navigate(`/${cat.slug}`)}
                className="group cursor-pointer flex flex-col text-left scroll-mt-28 transition-all duration-300 rounded-[2px]"
              >
                {/* Imagem em Destaque da Galeria (Enquadramento Editorial 4:5) */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100 border border-stone-200/70 rounded-[2px] mb-3.5">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300 pointer-events-none" />
                </div>

                {/* Apenas o Nome do Modelo Abaixo da Imagem */}
                <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#1B365D] transition-colors leading-snug tracking-tight">
                  {cat.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Barra Inferior Discreta de Apoio B2B */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-stone-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500 font-mono">
            <span>* Modelagens computadorizadas em CAD adaptáveis às especificações da sua marca ou empresa.</span>
            <button
              onClick={() => openQuoteModal({ source: 'home_gallery' })}
              className="font-bold text-[#FF6B00] hover:underline cursor-pointer"
            >
              Solicitar Orçamento para Lote Personalizado →
            </button>
          </div>

        </div>
      </section>

      {/* 4. FLUXO INDUSTRIAL CONTÍNUO & ENGENHARIA DE PROCESSO */}
      <ProductionProcessFlow />

      {/* 5. VALIDAÇÃO TÉCNICA E HOMOLOGAÇÃO */}
      <PilotPieceHighlight />

      {/* 6. OUTLET LOJA DE FÁBRICA & INSTAGRAM @NATEXOUTLET */}
      <section className="py-16 sm:py-20 bg-stone-100/60 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[4px] overflow-hidden bg-[#0F172A] text-white p-8 sm:p-12 relative shadow-xl shadow-slate-950/15 border border-slate-800">
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-semibold">
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Loja Outlet Anexa à Fábrica</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-stone-800 border border-stone-700 text-stone-200 text-xs font-semibold">
                    <Instagram className="w-3.5 h-3.5 text-pink-400" />
                    <span>@natexoutlet</span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Conheça Nossa Loja Outlet em Navegantes – SC
                </h2>

                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Além da confecção industrial B2B, mantemos uma loja aberta ao público anexa ao parque fabril no Bairro Gravatá. 
                  Moda feminina, masculina e infantil com preço direto de fábrica e novidades semanais no Instagram!
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>Seg a Sex: 07:30 às 18:00 | Sáb: 08:00 às 12:00</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>Gravatá, Navegantes - SC</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={() => navigate('/outlet')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs sm:text-sm rounded-[6px] shadow-sm transition-all hover:translate-y-[-1px] cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Visitar Página do Outlet</span>
                </button>

                <a
                  href="https://www.instagram.com/natexoutlet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm rounded-[6px] border border-white/20 transition-all hover:translate-y-[-1px] cursor-pointer"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram @natexoutlet</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PERGUNTAS FREQUENTES */}
      <FAQAccordion />

      {/* 8. CTA FINAL DE ALTA CONVERSÃO */}
      <section className="py-16 sm:py-20 bg-[#0F172A] text-white text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pronto para produzir com a Natex?
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Converse diretamente com nossos consultores técnicos. Receba orientação sobre tecidos, modelagens e atendimento para todo o Brasil.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => openQuoteModal({ source: 'home_bottom_form' })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold rounded-[6px] text-xs shadow-sm transition-all hover:translate-y-[-1px] cursor-pointer"
            >
              <FileCheck className="w-4 h-4" />
              <span>Solicitar Cotação Online</span>
            </button>

            <a
              href="https://wa.me/5547992820556?text=Ol%C3%A1%21+Vim+pelo+site+e+quero+solicitar+um+or%C3%A7amento+para+minha+empresa."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { origin: 'home_bottom_cta' })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-[6px] text-xs border border-white/20 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>WhatsApp Comercial</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
