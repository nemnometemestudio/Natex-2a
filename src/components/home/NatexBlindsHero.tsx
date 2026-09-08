import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { trackEvent } from '../../utils/analytics';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface BlindPanel {
  id: string;
  code: string;
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  targetId: string;
  slug: string;
  image: string;
  tag: string;
}

// 9 Linhas de Produção Completas para o Efeito Venetian Blinds (Persiana)
const BLINDS_PANELS: BlindPanel[] = [
  {
    id: 'tshirt',
    code: '01',
    number: '01',
    title: 'Camisetas & Básicos',
    shortTitle: 'Camiseta',
    subtitle: 'Algodão Penteado, Dry-Fit & Oversized',
    description: 'Meia malha 30.1 penteada, poliviscose e modelagens contemporâneas para empresas, eventos e moda.',
    targetId: 'comunicacao-visual',
    slug: 'camisetas-eventos',
    image: '/images/hero/01-tshirt.jpg',
    tag: 'Básicos & Eventos',
  },
  {
    id: 'polo',
    code: '02',
    number: '02',
    title: 'Polo Piquet',
    shortTitle: 'Polo',
    subtitle: 'Malha Piquet Premium Anti-Pilling',
    description: 'Golas e punhos com elastano que não deformam e bordado computadorizado de alta definição.',
    targetId: 'polo',
    slug: 'uniformes-corporativos',
    image: '/images/hero/02-polo.jpg',
    tag: 'Atendimento & Equipes',
  },
  {
    id: 'social',
    code: '03',
    number: '03',
    title: 'Camisa Social',
    shortTitle: 'Camisaria',
    subtitle: 'Camisaria Executiva Sob Medida',
    description: 'Tricoline maquinetado com elastano, colarinhos entretelados indeformáveis e corte slim ou clássico.',
    targetId: 'uniformes-corporativos',
    slug: 'uniformes-corporativos',
    image: '/images/hero/03-social.jpg',
    tag: 'Corporativo & Gestão',
  },
  {
    id: 'jaleco',
    code: '04',
    number: '04',
    title: 'Jaleco & Saúde',
    shortTitle: 'Jaleco',
    subtitle: 'Gabardine Nobre & Scrubs Cirúrgicos',
    description: 'Linha hospitalar e clínica com tecido antimicrobiano, barreira bacteriológica e caimento ergonômico.',
    targetId: 'saude',
    slug: 'uniformes-profissionais',
    image: '/images/hero/04-jaleco.jpg',
    tag: 'Saúde & Clínicas',
  },
  {
    id: 'blazer',
    code: '05',
    number: '05',
    title: 'Alfaiataria',
    shortTitle: 'Alfaiataria',
    subtitle: 'Blazers & Alfaiataria Executiva',
    description: 'Cortes estruturados com forração interna, ombreiras balanceadas e acabamento de alfaiataria fina.',
    targetId: 'uniformes-corporativos',
    slug: 'uniformes-corporativos',
    image: '/images/hero/05-blazer.jpg',
    tag: 'Alta Gestão & Recepção',
  },
  {
    id: 'industrial',
    code: '06',
    number: '06',
    title: 'Brim Operacional',
    shortTitle: 'Operacional',
    subtitle: 'Brim Pesado 100% Algodão & NR',
    description: 'Costura tripla reforçada ponto cadeia, faixas refletivas homologadas e resistência mecânica superior.',
    targetId: 'uniformes-industriais',
    slug: 'uniformes-industriais',
    image: '/images/hero/06-industrial.jpg',
    tag: 'Indústria & Obras',
  },
  {
    id: 'frigorifico',
    code: '07',
    number: '07',
    title: 'Térmico Sub-Zero',
    shortTitle: 'Frigorífico',
    subtitle: 'Proteção Térmica Câmaras Frias',
    description: 'Mantas térmicas homologadas (150g a 300g), nylon resinado impermeável e proteção até -30°C.',
    targetId: 'frigorificos',
    slug: 'uniformes-frigorifico',
    image: '/images/hero/07-frigo.jpg',
    tag: 'Câmaras Frias',
  },
  {
    id: 'private-label',
    code: '08',
    number: '08',
    title: 'Para sua Loja',
    shortTitle: 'Private Label',
    subtitle: 'Confecção Autoral para Marcas & Varejo',
    description: 'Produção completa sob sua marca, modelagem computadorizada em CAD e fiação nobre em escala.',
    targetId: 'private-label',
    slug: 'private-label',
    image: '/images/hero/08-dress.jpg',
    tag: 'Marcas & Varejo',
  },
  {
    id: 'wind-banner',
    code: '09',
    number: '09',
    title: 'Wind Banner',
    shortTitle: 'Comunicação',
    subtitle: 'Mídia Têxtil & Corta-Vento',
    description: 'Poliéster naval com estamparia digital de alta durabilidade e jaquetas corta-vento promocionais.',
    targetId: 'comunicacao-visual',
    slug: 'camisetas-eventos',
    image: '/images/hero/09-windbanner.jpg',
    tag: 'Mídia & Eventos',
  },
];

export const NatexBlindsHero: React.FC = () => {
  const { navigate } = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Estado para desktop (hover) e mobile (tap/ativo) - nenhum ativo por padrão para revelar o vídeo contínuo
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number | null>(null);

  // Garante autoplay muted instantâneo
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay garantido com muted
        });
      }
    }
  }, []);

  // Rolagem suave até a seção correspondente
  const handlePanelScroll = (targetId: string, slug: string, index: number) => {
    trackEvent('category_click', { category: targetId, source: 'blinds_hero' });
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Realce sutil de foco visual para guiar o olhar do cliente
      element.classList.add('ring-2', 'ring-[#FF6B00]', 'ring-offset-4');
      setTimeout(() => {
        element.classList.remove('ring-2', 'ring-[#FF6B00]', 'ring-offset-4');
      }, 2000);
    } else {
      navigate(`/${slug}`);
    }
  };

  const handleMobileTap = (index: number, targetId: string, slug: string) => {
    if (mobileActiveIndex === index) {
      handlePanelScroll(targetId, slug, index);
    } else {
      setMobileActiveIndex(index);
    }
  };

  return (
    <section 
      aria-label="Linhas de Produção Natex"
      className="relative w-full h-[65vh] min-h-[480px] max-h-[700px] bg-slate-950 overflow-hidden select-none border-b border-stone-200/40"
    >
      {/* 
        1 & 2. ÚNICO ELEMENTO DE VÍDEO REAL NA ÁRVORE DOM
        Posicionado absolutamente no fundo cobrindo todo o container (object-fit: cover).
        Os 9 painéis por cima revelam a fatia natural do vídeo sem duplicar elementos.
      */}
      <video
        ref={videoRef}
        key="/videos/natex-morph-hero.mp4"
        src="/videos/natex-morph-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
      >
        <source src="/videos/natex-morph-hero.mp4" type="video/mp4" />
      </video>

      {/* Camada sutil de contraste para reforçar legibilidade geral */}
      <div className="absolute inset-0 bg-slate-950/20 pointer-events-none z-[1]" />

      {/* 
        3. CAMADA DE 9 PAINÉIS "PERSIANA" (VENETIAN BLINDS)
        No desktop: 9 colunas flexíveis com expansão suave no hover.
        No mobile: scroll snap horizontal limpo.
        Sem barras ou botões sobrepostos atropelando a foto e o cabeçalho.
      */}
      <div 
        className="relative z-10 w-full h-full flex flex-row overflow-x-auto snap-x snap-mandatory md:overflow-visible scrollbar-none"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {BLINDS_PANELS.map((panel, idx) => {
          const isHovered = hoveredIndex === idx;
          const isMobileActive = mobileActiveIndex === idx;

          // Cálculo do flex dinâmico no desktop para 9 painéis:
          // Se nenhum hover: todos têm flex 1 (11.1% cada).
          // Se este está com hover: expande para flex 3.8 (~39% da largura), e os outros 8 contraem para flex 0.65 (~7.6% cada).
          const desktopFlexValue = hoveredIndex === null ? 1 : isHovered ? 3.8 : 0.65;

          return (
            <div
              key={panel.id}
              onClick={() => handlePanelScroll(panel.targetId, panel.slug, idx)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onTouchStart={() => handleMobileTap(idx, panel.targetId, panel.slug)}
              style={{
                flex: desktopFlexValue,
                transition: 'flex 420ms cubic-bezier(0.2, 0.8, 0.2, 1)',
              }}
              className={`
                group relative h-full cursor-pointer bg-transparent
                w-[65vw] sm:w-[40vw] md:w-auto shrink-0 md:shrink
                snap-start
                border-r border-white/20 last:border-r-0
                overflow-hidden
              `}
            >
              {/* 
                ESTADO EM REPOUSO: TRANSPARENTE
                Permite ver a fatia do vídeo único passando por baixo.
                Na base, etiqueta limpa com número e nome resumido.
              */}
              <div 
                className={`
                  absolute bottom-0 inset-x-0 p-3 sm:p-4 md:p-3 lg:p-4
                  bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent 
                  pointer-events-none transition-opacity duration-300
                  ${isHovered ? 'opacity-0' : 'opacity-100'}
                `}
              >
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="font-mono text-[11px] font-extrabold text-[#FF6B00]">
                    {panel.number}
                  </span>
                  <span className="text-white/40 text-[10px] font-mono hidden lg:inline">/</span>
                  <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider truncate hidden lg:inline">
                    {panel.shortTitle}
                  </span>
                </div>
                
                <h3 className="font-display text-xs sm:text-sm lg:text-base font-bold text-white tracking-tight leading-snug line-clamp-2 drop-shadow-sm">
                  {panel.title}
                </h3>
              </div>

              {/* 
                ESTADO EXPANDIDO (HOVER NO DESKTOP OU TAP NO MOBILE):
                Fade cross-dissolve para a foto estática real da categoria,
                com gradiente escurecido e informações detalhadas.
              */}
              <div
                className={`
                  absolute inset-0 transition-opacity duration-400 ease-out z-10
                  ${(isHovered || (isMobileActive && hoveredIndex === null)) ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
              >
                {/* Foto real estática da categoria */}
                <img
                  src={panel.image}
                  alt={panel.title}
                  className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Gradiente escuro para contraste impecável */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/30" />

                {/* Conteúdo do Painel Expandido */}
                <div className="absolute inset-0 p-5 sm:p-6 lg:p-8 flex flex-col justify-between">
                  {/* Topo: identificador limpo */}
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded-[2px] bg-white/20 backdrop-blur-md border border-white/25 text-xs font-mono font-bold text-white tracking-wider">
                      LINHA {panel.code}
                    </span>

                    <span className="text-[11px] font-mono font-semibold text-[#FF6B00] uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded-[2px] border border-[#FF6B00]/40">
                      {panel.tag}
                    </span>
                  </div>

                  {/* Base: título, subtítulo e descrição sem botões redundantes */}
                  <div className="space-y-2 max-w-xl">
                    <p className="text-[11px] sm:text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                      {panel.subtitle}
                    </p>

                    <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                      {panel.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal line-clamp-2 sm:line-clamp-3">
                      {panel.description}
                    </p>

                    <div className="pt-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] group-hover:text-white transition-colors">
                        <span>Ver especificações e tecidos</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Indicador de status no topo do painel */}
              <div 
                className={`
                  absolute top-0 inset-x-0 h-[3px] transition-colors duration-300 z-20
                  ${isHovered ? 'bg-[#FF6B00]' : 'bg-transparent'}
                `}
              />
            </div>
          );
        })}
      </div>

      {/* Indicador de navegação no mobile (bolinhas de scroll) */}
      <div className="absolute bottom-2.5 left-0 right-0 z-20 flex justify-center gap-1.5 md:hidden pointer-events-none">
        {BLINDS_PANELS.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              mobileActiveIndex === i ? 'w-5 bg-[#FF6B00]' : 'w-1.5 bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
