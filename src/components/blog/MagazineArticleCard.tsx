import React from 'react';
import { Clock, Calendar, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { BlogPost } from '../../types';
import { getOptimizedImageUrl } from '../../utils/imageOptimizer';
import { getCategoryFallbackImage } from '../../data/blogImageAssets';

interface MagazineArticleCardProps {
  post: BlogPost;
  index: number;
  onNavigate: (slug: string) => void;
  widthClass?: string;
  featuredQuotePosition?: 'overlay' | 'below';
}

export const MagazineArticleCard: React.FC<MagazineArticleCardProps> = ({
  post,
  index,
  onNavigate,
  widthClass = 'w-[320px] sm:w-[380px] lg:w-[420px]',
  featuredQuotePosition = 'overlay'
}) => {
  // Extrai uma frase de impacto inteligente do post
  const impactQuote = React.useMemo(() => {
    if (post.seo?.aeoQuickAnswer && post.seo.aeoQuickAnswer.length < 140) {
      return post.seo.aeoQuickAnswer;
    }
    if (post.seo?.keyTakeaways && post.seo.keyTakeaways.length > 0) {
      return post.seo.keyTakeaways[0];
    }
    if (post.excerpt) {
      // Primeira oração ou até 120 caracteres
      const firstSentence = post.excerpt.split(/[.!?]/)[0];
      if (firstSentence && firstSentence.length > 15 && firstSentence.length < 130) {
        return firstSentence + '.';
      }
      return post.excerpt.slice(0, 110) + '...';
    }
    return 'Guia prático e especificações técnicas de confecção industrial.';
  }, [post]);

  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <article
      onClick={() => onNavigate(post.slug)}
      className={`group flex-shrink-0 ${widthClass} bg-white border border-slate-200/90 hover:border-slate-900 transition-all duration-300 flex flex-col justify-between cursor-pointer rounded-none select-none relative shadow-xs hover:shadow-xl`}
      style={{ borderRadius: '0px' }}
    >
      {/* Top Media Block */}
      <div className="flex flex-col">
        {/* Straight-corner Image Frame */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 rounded-none border-b border-slate-200/80">
          <img
            src={getOptimizedImageUrl(post.coverImage, 700, 75)}
            alt={post.title}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = getCategoryFallbackImage(post.categorySlug);
            }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out rounded-none"
          />

          {/* Minimalist Straight Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            <span className="px-2.5 py-1 bg-slate-950/90 text-white font-mono text-[10px] uppercase tracking-wider rounded-none font-bold backdrop-blur-xs border border-white/10">
              {post.category}
            </span>
            {post.isGooglePost && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-600/95 text-white font-mono text-[9px] uppercase tracking-wider rounded-none font-bold">
                <MapPin className="w-2.5 h-2.5 text-white" />
                Google
              </span>
            )}
          </div>

          <div className="absolute top-3 right-3 z-10">
            <span className="px-2 py-0.5 bg-white/90 text-slate-900 font-mono text-[10px] font-black uppercase tracking-widest rounded-none border border-slate-200">
              #{formattedIndex}
            </span>
          </div>

          {/* Editorial Impact Quote Overlay directly ON the image */}
          {featuredQuotePosition === 'overlay' && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-transparent pt-10 pb-3 px-4 flex flex-col justify-end">
              <div className="flex items-start gap-2">
                <span className="text-amber-400 text-sm font-serif leading-none select-none font-bold">“</span>
                <p className="text-[12px] sm:text-[13px] font-medium text-white/95 leading-snug line-clamp-2 drop-shadow-xs italic">
                  {impactQuote}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Text Details Area */}
        <div className="p-5 sm:p-6 flex flex-col space-y-3">
          {/* Metadata Row */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#6200EA]" />
              <span className="font-semibold text-slate-700">{post.readTimeMinutes} MIN LEITURA</span>
            </div>
            <div className="flex items-center gap-1 text-slate-400">
              <Calendar className="w-3 h-3" />
              <span>{post.formattedDate}</span>
            </div>
          </div>

          {/* Article Title */}
          <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug group-hover:text-[#6200EA] transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Editorial Excerpt */}
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-2 font-normal">
            {post.excerpt}
          </p>

          {/* Key tags preview */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1">
              {post.tags.slice(0, 2).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-slate-100 text-slate-600 font-mono text-[10px] rounded-none border border-slate-200/60"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Footer with Straight Border Action */}
      <div className="px-5 sm:px-6 pb-5 pt-1 mt-auto">
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-bold text-slate-900 group-hover:text-[#6200EA] transition-colors">
          <span className="uppercase tracking-wider font-mono text-[11px]">Ler Artigo Completo</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
        </div>
      </div>
    </article>
  );
};
