import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '../data/portfolioData';
import { PortfolioItem } from '../types';
import { useRouter } from '../context/RouterContext';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Eye, Layers, Scissors, Tag, X, MessageSquare, ShieldCheck } from 'lucide-react';
import { createWhatsAppLink, trackEvent } from '../utils/analytics';

export const PortfolioPage: React.FC = () => {
  const { openQuoteModal } = useRouter();
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === 'todos'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.categorySlug === activeCategory);

  const handleQuote = (item: PortfolioItem) => {
    trackEvent('quote_modal_open', { source: 'portfolio_gallery', item_title: item.title });
    openQuoteModal({ productType: `${item.title} (${item.category})`, source: 'portfolio_item' });
  };

  const handleWhatsApp = (item: PortfolioItem) => {
    trackEvent('whatsapp_click', { origin: 'portfolio_modal', item_title: item.title });
    const msg = `Olá! Vi o projeto *${item.title}* no portfólio da Natex e gostaria de solicitar uma cotação similar para minha empresa.`;
    window.open(createWhatsAppLink(msg, 'portfolio_inquiry'), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 pb-20">
      <SEOHead
        title="Portfólio de Produção Têxtil B2B | Natex Confecções"
        description="Conheça projetos de uniformes corporativos, industriais, peças para frigoríficos, private label, eventos e comunicação têxtil fabricados com precisão."
      />

      {/* Header */}
      <section className="pt-6 pb-10 sm:pt-10 sm:pb-14 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Portfólio de Produção' }]} />

          <div className="mt-4 max-w-3xl space-y-2">
            <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider block">
              Galeria de Produção Fabril
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Projetos e Lotes Entregues
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Veja a aplicação real de tecidos tecnológicos, modelagens anatômicas e personalizações têxteis em lotes fabricados para indústrias, redes corporativas e marcas.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {PORTFOLIO_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  trackEvent('portfolio_filter', { category: cat.id });
                }}
                className={`px-3.5 py-1.5 rounded-[4px] text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#1B365D] text-white shadow-2xs'
                    : 'bg-stone-100 border border-stone-200/80 text-slate-600 hover:text-slate-900 hover:bg-stone-200/60'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group rounded-[4px] bg-white border border-stone-200/90 hover:border-[#1B365D]/60 overflow-hidden transition-all duration-200 flex flex-col justify-between cursor-pointer shadow-2xs hover:shadow-md"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-stone-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-[3px] text-[10px] font-semibold text-slate-800 border border-stone-200/80 shadow-2xs">
                    {item.category}
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-white">
                    <span className="font-semibold text-white uppercase tracking-wider truncate text-[10px]">
                      {item.segment}
                    </span>
                    <span className="flex items-center gap-1 text-slate-200 bg-slate-900/80 px-2 py-0.5 rounded-[3px] text-[10px]">
                      <Eye className="w-3 h-3" /> Ver detalhes
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 group-hover:text-[#1B365D] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3">
                    {item.description}
                  </p>

                  <div className="space-y-1 text-[11px] text-slate-600 bg-stone-50 p-2.5 rounded-[4px] border border-stone-200/80 font-mono">
                    <div className="flex items-start gap-1.5">
                      <Layers className="w-3 h-3 text-[#1B365D] shrink-0 mt-0.5" />
                      <span className="line-clamp-1"><strong className="text-slate-800">Tecido:</strong> {item.fabricUsed}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <Scissors className="w-3 h-3 text-[#FF6B00] shrink-0 mt-0.5" />
                      <span className="line-clamp-1"><strong className="text-slate-800">Personalização:</strong> {item.customizationUsed}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleQuote(item);
                  }}
                  className="w-full py-2 px-3 bg-stone-100 hover:bg-[#FF6B00] text-slate-700 hover:text-white text-xs font-semibold rounded-[4px] transition-colors flex items-center justify-center gap-2 cursor-pointer border border-stone-200/80 hover:border-[#FF6B00]"
                >
                  <span>Solicitar Cotação Similar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-2xl bg-white border border-stone-200 rounded-[4px] shadow-xl overflow-hidden my-8 animate-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 z-10 p-1.5 text-slate-600 hover:text-slate-900 bg-white/90 rounded-full border border-stone-200/80 cursor-pointer shadow-2xs"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="h-64 sm:h-80 overflow-hidden bg-stone-100 relative">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[10px] font-semibold text-white uppercase tracking-wider bg-[#FF6B00] px-2 py-0.5 rounded-[2px]">
                  {selectedItem.segment}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                  {selectedItem.title}
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-4 text-slate-600 text-xs sm:text-sm">
              <p className="leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#FAF9F6] p-3 rounded-[4px] border border-stone-200/80">
                  <span className="text-[9px] font-mono font-bold text-[#1B365D] uppercase tracking-wider block mb-0.5">
                    Tecido do Projeto
                  </span>
                  <p className="text-slate-900 font-medium text-xs">
                    {selectedItem.fabricUsed}
                  </p>
                </div>

                <div className="bg-[#FAF9F6] p-3 rounded-[4px] border border-stone-200/80">
                  <span className="text-[9px] font-mono font-bold text-[#FF6B00] uppercase tracking-wider block mb-0.5">
                    Personalização Fabril
                  </span>
                  <p className="text-slate-900 font-medium text-xs">
                    {selectedItem.customizationUsed}
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-[4px] bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>
                  Todos os pedidos contam com <strong>validação prévia de modelagem</strong> e tabela de medidas homologada antes da esteira de corte.
                </span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => {
                    const item = selectedItem;
                    setSelectedItem(null);
                    handleQuote(item);
                  }}
                  className="flex-1 py-2.5 px-4 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold rounded-[6px] text-xs text-center shadow-2xs transition-colors cursor-pointer"
                >
                  Peça agora este modelo
                </button>

                <button
                  onClick={() => handleWhatsApp(selectedItem)}
                  className="py-2.5 px-4 bg-[#1B365D] hover:bg-[#142847] text-white font-semibold rounded-[6px] text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Fale com o nosso comercial</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
