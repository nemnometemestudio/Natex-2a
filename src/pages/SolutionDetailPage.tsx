import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { PRODUCT_CATEGORIES, CATALOG_PRODUCTS } from '../data/productsData';
import { ProductItem } from '../types';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { PilotPieceHighlight } from '../components/common/PilotPieceHighlight';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { QuoteForm } from '../components/common/QuoteForm';
import { 
  ShieldCheck, CheckCircle2, MessageSquare, 
  Layers, Scissors, Shield, Shirt, Flame, X
} from 'lucide-react';
import { createWhatsAppLink, trackEvent } from '../utils/analytics';

interface SolutionDetailPageProps {
  categorySlug: string;
}

export const SolutionDetailPage: React.FC<SolutionDetailPageProps> = ({ categorySlug }) => {
  const { openQuoteModal } = useRouter();
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);

  const isEventOrMerch = categorySlug === 'camisetas-eventos' || categorySlug === 'merchandising-textil';
  const normalizedSlug = categorySlug === 'confeccao-para-marcas' 
    ? 'private-label' 
    : categorySlug === 'merchandising-textil'
    ? 'camisetas-eventos'
    : categorySlug;

  const category = PRODUCT_CATEGORIES.find(c => c.slug === normalizedSlug) || PRODUCT_CATEGORIES[0];

  // Produtos desta categoria específica no catálogo
  const categoryProducts = CATALOG_PRODUCTS.filter(p => p.categorySlug === category.slug);

  const handleWhatsApp = () => {
    trackEvent('whatsapp_click', { origin: 'solution_page_hero', category: category.slug });
    window.open(createWhatsAppLink(category.whatsappMessage, `solution_${category.slug}`), '_blank');
  };

  const handleProductWhatsApp = (prod: ProductItem) => {
    trackEvent('whatsapp_click', { origin: 'solution_product_card', product: prod.name });
    const msg = `Olá! Tenho interesse no modelo "${prod.name}" da linha de ${category.name}. Gostaria de solicitar uma cotação com as opções de matéria-prima disponíveis.`;
    window.open(createWhatsAppLink(msg, `sol_prod_${prod.id}`), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 pb-20">
      <SEOHead
        title={`${category.name} | Confecção B2B em Santa Catarina | Natex`}
        description={category.fullDescription}
      />

      {/* Hero Section */}
      <section className="pt-6 pb-12 sm:pb-16 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Soluções', path: '/catalogo' }, { label: category.name }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {category.heroHeadline}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                {category.heroSubheadline}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => openQuoteModal({ productType: category.name, source: `solution_page_${category.slug}` })}
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold rounded-[6px] text-xs sm:text-sm shadow-2xs transition-all cursor-pointer"
                >
                  <span>Peça agora</span>
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#1B365D] hover:bg-[#142847] text-white font-semibold rounded-[6px] text-xs sm:text-sm transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Fale com o nosso comercial</span>
                </button>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Validação técnica prévia</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Corte computadorizado</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Entrega para todo o Brasil</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[4px] overflow-hidden border border-stone-200/90 shadow-2xs bg-stone-100">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-72 sm:h-84 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO PRINCIPAL DE PRODUTOS: MODELO COM CONJUNTO EM USO & ROUPAS SEPARADAS */}
      {categoryProducts.length > 0 && (
        <section className="py-12 sm:py-16 bg-[#FAF9F6] border-b border-stone-200/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {category.slug === 'uniformes-frigorifico' 
                  ? 'Uniformes Brancos para Frigorífico: Modelo em Uso e Roupas Separadas'
                  : `Modelos da Linha ${category.name}: Conjunto em Uso e Peças Avulsas`}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {category.slug === 'uniformes-frigorifico'
                  ? 'Confira o uniforme completo vestindo o operador e as peças individualizadas: jaqueta corta-vento térmica branca, camiseta polo branca, camisetas manga curta e manga comprida e calça sanitária com elástico. Todas as peças podem ser cotadas avulsas ou em kit completo.'
                  : 'Apresentamos abaixo a visualização da modelagem em uso pelo trabalhador e as peças técnicas avulsas para que você monte a composição exata da sua empresa.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map(product => {
                const isFullSetModel = product.pieceType === 'Conjunto em Uso';

                return (
                  <div
                    key={product.id}
                    className={`group rounded-[4px] bg-white border overflow-hidden transition-all flex flex-col justify-between ${
                      isFullSetModel 
                        ? 'border-[#1B365D] ring-1 ring-[#1B365D]/30 shadow-md sm:col-span-2 lg:col-span-1' 
                        : 'border-stone-200/90 shadow-2xs hover:shadow-md hover:border-stone-400'
                    }`}
                  >
                    <div>
                      {/* Image container */}
                      <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-100 flex items-center justify-center">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                          loading="lazy"
                        />

                        {/* Top badges */}
                        <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-[4px] text-[10px] font-medium text-slate-800 shadow-2xs border border-stone-200/80">
                          {product.categoryName}
                        </div>

                        {product.pieceType && (
                          <div className={`absolute top-2.5 right-2.5 backdrop-blur-md text-white px-2 py-0.5 rounded-[4px] text-[10px] font-medium shadow-2xs ${
                            isFullSetModel ? 'bg-[#1B365D]' : 'bg-[#0F172A]/90'
                          }`}>
                            {product.pieceType}
                          </div>
                        )}

                        {/* Bottom highlight banner if full set */}
                        {isFullSetModel && (
                          <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#1B365D]/95 backdrop-blur-md text-white px-3 py-1 rounded-[4px] text-[10px] font-medium shadow-2xs text-center">
                            ★ Modelo Vestindo Todos os Itens do Conjunto
                          </div>
                        )}
                      </div>

                      <div className="p-4 sm:p-5 space-y-3">
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#1B365D] transition-colors leading-snug">
                            {product.name}
                          </h3>
                          <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        <div className="text-[11px] text-slate-600 bg-stone-50 p-2.5 rounded-[4px] border border-stone-200/80 space-y-1">
                          <div>
                            <span className="font-semibold text-slate-800">Matéria-Prima: </span>
                            <span className="text-slate-600">Definida na cotação conforme escolha do cliente e mercado</span>
                          </div>
                          {product.sector && (
                            <div>
                              <span className="font-semibold text-slate-800">Setor: </span>
                              <span className="text-slate-600">{product.sector}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="p-4 sm:p-5 pt-0 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedProductModal(product)}
                        className="py-2 px-3 bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-semibold rounded-[6px] transition-colors cursor-pointer text-center border border-stone-200/80"
                      >
                        Saiba mais
                      </button>

                      <button
                        onClick={() => openQuoteModal({ productType: `${category.name} - ${product.name}`, source: `solution_item_${product.id}` })}
                        className="py-2 px-3 bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs font-bold rounded-[6px] transition-all shadow-2xs cursor-pointer text-center"
                      >
                        Peça agora
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Special Event / Merch Dual Pillar */}
      {isEventOrMerch && (
        <section className="py-12 sm:py-16 bg-white border-b border-stone-200/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Duas Linhas Completas para sua Empresa
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#FAF9F6] p-6 rounded-[4px] border border-stone-200/90 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-[4px] bg-stone-200 text-slate-800">
                    <Shirt className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Camisetas & Eventos</h3>
                    <span className="text-xs text-slate-500">Alta tiragem e entrega rápida</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Camisetas em algodão penteado 30.1, dry-fit esportivo para corridas e convenções corporativas.
                </p>
              </div>

              <div className="bg-[#FAF9F6] p-6 rounded-[4px] border border-stone-200/90 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-[4px] bg-stone-200 text-slate-800">
                    <Flame className="w-5 h-5 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Merchandising & Corta-Vento</h3>
                    <span className="text-xs text-slate-500">Alto valor de marca</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Jaquetas corta-vento impermeáveis, coletes matelassê e ecobags para kits institucionais de boas-vindas.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Detailed Description & Pieces */}
      <section className="py-12 sm:py-16 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Detailed explanation */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  Confecção Sob Medida para {category.name}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {category.fullDescription}
              </p>

              {/* Pieces list */}
              <div className="bg-[#FAF9F6] p-5 rounded-[4px] border border-stone-200/90">
                <h3 className="text-xs font-bold text-slate-900 mb-3">
                  Modelos & Peças Fabricadas:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {category.pieces.map((piece, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] shrink-0" />
                      <span>{piece}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Applications list */}
            <div className="lg:col-span-5 bg-[#FAF9F6] p-6 rounded-[4px] border border-stone-200/90 space-y-3">
              <h3 className="text-sm font-bold text-slate-900">
                Aplicações e Setores Atendidos:
              </h3>

              <div className="space-y-2 pt-1">
                {category.applications.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-[4px] bg-white border border-stone-200/80 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suggested Fabrics & Customizations */}
      <section className="py-12 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-[4px] bg-[#FAF9F6] border border-stone-200/90 space-y-3">
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-[#1B365D]" />
                <h3 className="text-sm font-bold text-slate-900">Tecidos Homologados Sugeridos</h3>
              </div>
              <div className="space-y-1.5">
                {category.fabrics.map((fabric, idx) => (
                  <div key={idx} className="p-2.5 rounded-[4px] bg-white border border-stone-200/80 text-xs text-slate-700">
                    {fabric}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-[4px] bg-[#FAF9F6] border border-stone-200/90 space-y-3">
              <div className="flex items-center gap-2.5">
                <Scissors className="w-4 h-4 text-[#FF6B00]" />
                <h3 className="text-sm font-bold text-slate-900">Personalização & Estamparia</h3>
              </div>
              <div className="space-y-1.5">
                {category.customizations.map((cust, idx) => (
                  <div key={idx} className="p-2.5 rounded-[4px] bg-white border border-stone-200/80 text-xs text-slate-700">
                    {cust}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Piece Highlight */}
      <PilotPieceHighlight showCta={false} />

      {/* Category Specific FAQ */}
      {category.faqs && category.faqs.length > 0 && (
        <FAQAccordion
          customFaqs={category.faqs}
          title={`Dúvidas sobre ${category.name}`}
          subtitle="Tire suas dúvidas técnicas sobre prazos, tecidos e quantidades mínimas."
        />
      )}

      {/* Quote Form Section */}
      <section className="py-12 sm:py-16 bg-[#FAF9F6] border-t border-stone-200/90">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Solicitar Orçamento de {category.name}
            </h2>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-[4px] border border-stone-200/90 shadow-2xs">
            <QuoteForm
              initialProductType={category.name}
              sourceOrigin={`pagina_solucao_${category.slug}`}
            />
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-3xl bg-white border border-stone-200 rounded-[4px] shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
            <button
              onClick={() => setSelectedProductModal(null)}
              className="absolute top-3.5 right-3.5 z-20 p-2 text-slate-500 hover:text-slate-900 bg-white/95 rounded-[4px] shadow-2xs cursor-pointer border border-stone-200 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="overflow-y-auto">
              <div className="h-64 sm:h-80 overflow-hidden bg-stone-100 relative group">
                <img
                  src={selectedProductModal.imageUrl}
                  alt={selectedProductModal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-[4px] text-[11px] font-medium text-slate-800 shadow-2xs border border-stone-200">
                    {selectedProductModal.categoryName}
                  </span>
                  {selectedProductModal.pieceType && (
                    <span className="bg-[#0F172A]/90 backdrop-blur-md text-white px-2.5 py-1 rounded-[4px] text-[11px] font-medium shadow-2xs">
                      {selectedProductModal.pieceType}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5 sm:p-7 space-y-4 text-xs sm:text-sm text-slate-600">
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-slate-900">
                    {selectedProductModal.name}
                  </h3>
                  <p className="mt-1.5 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {selectedProductModal.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 bg-stone-50 rounded-[4px] border border-stone-200">
                    <h4 className="font-bold text-slate-900 text-xs mb-1">Matérias-Primas & Mercado</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed mb-2">
                      O tecido e a gramatura são definidos na sua cotação de acordo com a escolha do cliente e as opções dos fornecedores têxteis de mercado.
                    </p>
                  </div>

                  <div className="p-3.5 bg-stone-50 rounded-[4px] border border-stone-200">
                    <h4 className="font-bold text-slate-900 text-xs mb-1.5">Personalização Fabril</h4>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {selectedProductModal.customizationOptions.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#FF6B00] font-bold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {selectedProductModal.technicalSpecs && selectedProductModal.technicalSpecs.length > 0 && (
                  <div className="p-3.5 bg-stone-50 rounded-[4px] border border-stone-200">
                    <h4 className="font-bold text-slate-900 text-xs mb-1.5">Especificações Técnicas da Ficha</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {selectedProductModal.technicalSpecs.map((spec, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-[10px] text-slate-500 font-medium">{spec.label}</span>
                          <span className="text-slate-800 font-medium text-[11px] sm:text-xs">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => {
                      const prod = selectedProductModal;
                      setSelectedProductModal(null);
                      openQuoteModal({ productType: `${category.name} - ${prod.name}`, source: `modal_prod_${prod.id}` });
                    }}
                    className="flex-1 py-3 px-4 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold rounded-[6px] text-xs text-center cursor-pointer shadow-2xs transition-colors"
                  >
                    Peça agora
                  </button>

                  <button
                    onClick={() => handleProductWhatsApp(selectedProductModal)}
                    className="py-3 px-5 bg-[#1B365D] hover:bg-[#142847] text-white font-semibold rounded-[6px] text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Fale com o nosso comercial</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
