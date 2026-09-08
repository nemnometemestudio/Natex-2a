import React from 'react';
import { 
  X, 
  Clock, 
  Tag, 
  Sparkles, 
  MapPin, 
  ShoppingBag, 
  Users, 
  CheckCircle2, 
  Building2, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { OutletGuideArticle, OUTLET_INFO } from '../../data/outletData';

interface OutletArticleModalProps {
  article: OutletGuideArticle | null;
  onClose: () => void;
}

export const OutletArticleModal: React.FC<OutletArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-[4px] shadow-2xl overflow-hidden flex flex-col border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-56 sm:h-72 w-full shrink-0 bg-slate-100 overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar artigo"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges on image */}
          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-[4px] bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold shadow-sm">
              {article.categoryLabel}
            </span>
            <span className="px-3 py-1 rounded-[4px] bg-purple-600/90 backdrop-blur-md text-white text-xs font-bold shadow-sm flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              {article.audience}
            </span>
          </div>

          {/* Bottom Title on Image */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs text-slate-300 mb-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readingTime}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white leading-snug">
              {article.title}
            </h2>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
          {/* Tagline Lead */}
          <p className="text-base sm:text-lg font-medium text-[#1B365D] leading-relaxed border-l-4 border-[#1B365D] pl-4 bg-stone-100/60 py-2 rounded-r-[4px]">
            {article.tagline}
          </p>

          {/* Article paragraphs */}
          <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
            {article.fullContent.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Key highlights box */}
          <div className="p-5 rounded-[4px] bg-slate-50 border border-slate-200/90 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#FF6B00]" />
              Pontos Fundamentais
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {article.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {article.tags.map((tag, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-[4px] bg-slate-100 text-slate-600 text-xs font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0" />
            <span>Navegantes - SC • Bairro Gravatá (Anexo à Fábrica)</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {article.category === 'lojistas' ? (
              <a
                href={OUTLET_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[6px] bg-[#1B365D] hover:bg-[#142847] text-white font-bold text-xs sm:text-sm transition-all shadow-sm"
              >
                <Building2 className="w-4 h-4" />
                <span>Conversar com Consultor B2B</span>
              </a>
            ) : (
              <a
                href="#localizacao"
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[6px] bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all shadow-sm"
              >
                <ShoppingBag className="w-4 h-4 text-[#00B4D8]" />
                <span>Como Visitar a Loja</span>
              </a>
            )}

            <a
              href={OUTLET_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-[6px] bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
