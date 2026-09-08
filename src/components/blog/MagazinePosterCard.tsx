import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { BlogPost } from '../../types';
import { getOptimizedImageUrl } from '../../utils/imageOptimizer';
import { getCategoryFallbackImage } from '../../data/blogImageAssets';

interface MagazinePosterCardProps {
  post: BlogPost;
  index: number;
  onNavigate: (slug: string) => void;
  widthClass?: string;
  heightClass?: string;
}

export const MagazinePosterCard: React.FC<MagazinePosterCardProps> = ({
  post,
  index,
  onNavigate,
  widthClass = 'w-[320px] sm:w-[400px] md:w-[460px] lg:w-[500px]',
  heightClass = 'h-[240px] sm:h-[270px] md:h-[300px]'
}) => {
  // Palavras-chave ou tags para exibição dentro do card (estilo YouTube thumb / editorial poster)
  const displayTags = React.useMemo(() => {
    if (post.tags && post.tags.length > 0) {
      return post.tags.slice(0, 3);
    }
    if (post.seo?.keywords && post.seo.keywords.length > 0) {
      return post.seo.keywords.slice(0, 3);
    }
    return ['Indústria', 'Têxtil', 'Confecção'];
  }, [post]);

  // Frase de impacto ou palavra-chave de destaque
  const highlightTag = displayTags[0] || post.category;

  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <article
      onClick={() => onNavigate(post.slug)}
      className={`group flex-shrink-0 ${widthClass} ${heightClass} relative overflow-hidden cursor-pointer select-none rounded-none transition-transform duration-300 hover:scale-[1.015] active:scale-[0.99]`}
      style={{ borderRadius: '0px' }}
    >
      {/* 1. Fotografia de Fundo (A própria imagem é a moldura, sem bordas externas adicionadas) */}
      <img
        src={getOptimizedImageUrl(post.coverImage, 800, 80)}
        alt={post.title}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={(e) => {
          e.currentTarget.src = getCategoryFallbackImage(post.categorySlug);
        }}
        className="absolute inset-0 w-full h-full object-cover rounded-none transition-transform duration-700 ease-out group-hover:scale-108"
        style={{ borderRadius: '0px' }}
      />

      {/* 2. Camada Gradiente Cinematográfica / YouTube Poster Style */}
      {/* Gradiente sutil em cima para contraste dos selos e gradiente mais denso na base para título e tags */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-slate-950/30 transition-opacity duration-300 group-hover:from-slate-950/98 group-hover:via-slate-950/55" />

      {/* 3. Conteúdo Sobreposto Diretamente Dentro da Arte (Sem resumo embaixo) */}
      <div className="relative h-full w-full p-4 sm:p-5 md:p-6 flex flex-col justify-between z-10">
        
        {/* Topo do Poster: Tag da Categoria + Tempo de leitura + Número de sequência */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {/* Tag Categoria com visual limpo */}
            <span className="px-2.5 py-1 bg-white/95 text-slate-950 font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider backdrop-blur-md rounded-none shadow-sm">
              {post.category}
            </span>

            {/* Destaque / Palavra-chave principal estilo YouTube Badge */}
            <span className="px-2 py-0.5 bg-[#FF6B00] text-white font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-none">
              #{highlightTag}
            </span>
          </div>

          {/* Duração de leitura e índice */}
          <div className="flex items-center gap-1.5 bg-slate-950/75 backdrop-blur-md px-2 py-0.5 rounded-none text-[10px] font-mono text-slate-200">
            <Clock className="w-3 h-3 text-[#FF6B00]" />
            <span>{post.readTimeMinutes} MIN</span>
          </div>
        </div>

        {/* Base do Poster: Título Grande e Forte + Tags em Pílula + Ação de Ler */}
        <div className="space-y-2.5">
          {/* Título Principal Tipográfico de Impacto (como capa de revista / miniatura YouTube) */}
          <h3 className="text-base sm:text-lg md:text-xl font-black text-white tracking-tight leading-snug group-hover:text-amber-300 transition-colors line-clamp-2 uppercase drop-shadow-md">
            {post.title}
          </h3>

          {/* Linha inferior: Tags e indicador de acesso */}
          <div className="flex items-center justify-between gap-3 pt-1 border-t border-white/20">
            {/* Palavras-chave / Tags embutidas na arte */}
            <div className="flex items-center gap-1.5 overflow-hidden">
              {displayTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-slate-200 font-mono text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider rounded-none whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Ícone de Ação / Ler Artigo */}
            <div className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-white group-hover:text-[#FF6B00] transition-colors shrink-0">
              <span className="hidden sm:inline uppercase">Ler</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>

      </div>
    </article>
  );
};
