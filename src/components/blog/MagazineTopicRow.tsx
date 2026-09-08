import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { BlogPost, BlogCategory } from '../../types';
import { MagazinePosterCard } from './MagazinePosterCard';

interface MagazineTopicRowProps {
  category: BlogCategory;
  posts: BlogPost[];
  rowIndex: number;
  onNavigate: (slug: string) => void;
  onSelectCategory?: (categorySlug: string) => void;
}

export const MagazineTopicRow: React.FC<MagazineTopicRowProps> = ({
  category,
  posts,
  rowIndex,
  onNavigate,
  onSelectCategory
}) => {
  const rowScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calcula a posição do scroll para controlar as setas
  const checkScroll = useCallback(() => {
    const el = rowScrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);

    if (scrollWidth > clientWidth) {
      const progress = Math.min(100, Math.max(0, (scrollLeft / (scrollWidth - clientWidth)) * 100));
      setScrollProgress(progress);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    const el = rowScrollRef.current;
    if (!el) return;

    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll, posts]);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = rowScrollRef.current;
    if (!el) return;

    // Desloca aproximadamente 1 a 2 cartazes horizontais
    const cardStep = el.clientWidth > 1024 ? 500 : 360;
    const targetScroll = direction === 'right' ? el.scrollLeft + cardStep : el.scrollLeft - cardStep;

    el.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  if (!posts || posts.length === 0) {
    return null;
  }

  const topicNumber = String(rowIndex + 1).padStart(2, '0');

  return (
    <section 
      id={`topic-row-${category.slug}`}
      className="py-6 sm:py-8 border-b border-slate-200/90 last:border-b-0 relative"
    >
      {/* 1. SEÇÃO HEADER - Limpo, Gráfico, Sincronizado */}
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center justify-between gap-4 pb-3 border-b border-slate-900">
          
          {/* Título da Seção alinhado à esquerda */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-xs font-black tracking-widest text-[#FF6B00] uppercase">
              SEÇÃO {topicNumber}
            </span>
            <span className="text-slate-300">/</span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-950 tracking-tight uppercase">
              {category.name}
            </h2>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              ({posts.length} {posts.length === 1 ? 'conteúdo' : 'conteúdos'})
            </span>

            {onSelectCategory && (
              <button
                onClick={() => onSelectCategory(category.slug)}
                className="text-xs font-mono font-bold text-[#6200EA] hover:text-[#FF6B00] inline-flex items-center gap-1 transition-colors cursor-pointer ml-2"
              >
                <span>Ver todos</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Controles de Navegação Horizontal */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Linha de progresso sutil */}
            <div className="hidden sm:flex flex-col gap-1 w-20">
              <div className="w-full h-1 bg-slate-200 rounded-none overflow-hidden">
                <div 
                  className="h-full bg-slate-900 transition-all duration-200"
                  style={{ width: `${Math.max(15, scrollProgress)}%` }}
                />
              </div>
            </div>

            {/* Setas de navegação sem borda pesada, limpas */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                aria-label="Artigos anteriores"
                className={`p-2 rounded-none border border-slate-900 transition-all cursor-pointer flex items-center justify-center ${
                  !canScrollLeft
                    ? 'border-slate-200 text-slate-300 bg-slate-50 cursor-not-allowed'
                    : 'bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow-xs active:translate-y-0.5'
                }`}
                style={{ borderRadius: '0px' }}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                aria-label="Próximos artigos"
                className={`p-2 rounded-none border border-slate-900 transition-all cursor-pointer flex items-center justify-center ${
                  !canScrollRight
                    ? 'border-slate-200 text-slate-300 bg-slate-50 cursor-not-allowed'
                    : 'bg-slate-900 text-white hover:bg-[#6200EA] shadow-xs active:translate-y-0.5'
                }`}
                style={{ borderRadius: '0px' }}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 2. LINHA HORIZONTAL SINCRONIZADA DE IMAGENS POSTER */}
      {/* Gap pequeno (gap-3 sm:gap-4) para alta proximidade, como na referência de e-commerce/web magazine */}
      <div className="relative w-full">
        <div
          ref={rowScrollRef}
          className="overflow-x-auto no-scrollbar scroll-smooth flex items-stretch gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 pb-2"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {posts.map((post, postIndex) => (
            <MagazinePosterCard
              key={post.id}
              post={post}
              index={postIndex}
              onNavigate={onNavigate}
              // Formato retangular horizontal generoso (ex: 460px x 270px)
              widthClass="w-[300px] sm:w-[380px] md:w-[440px] lg:w-[480px]"
              heightClass="h-[220px] sm:h-[260px] md:h-[280px]"
            />
          ))}

          {/* Card de fechamento temático e direto */}
          <div className="flex-shrink-0 w-[240px] sm:w-[280px] h-[220px] sm:h-[260px] md:h-[280px] bg-slate-950 text-white p-5 sm:p-6 flex flex-col justify-between rounded-none select-none">
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF6B00] font-bold">
                CONSULTORIA FABRIL
              </span>
              <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-tight leading-snug">
                Dúvidas sobre {category.name}?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                Consulte nossos técnicos têxteis para gramaturas, tecidos e private label sob medida.
              </p>
            </div>

            <div>
              <a
                href="https://wa.me/5547992820556?text=Ol%C3%A1%2C%20estava%20lendo%20o%20blog%20da%20Natex%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20t%C3%A9cnica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full py-2 px-3 bg-white text-slate-950 font-mono text-xs font-bold uppercase tracking-wider rounded-none hover:bg-amber-400 transition-colors"
                style={{ borderRadius: '0px' }}
              >
                <span>Chamar no Whats</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
