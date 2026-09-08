import React, { useState } from 'react';
import { CATALOG_PRODUCTS, PRODUCT_CATEGORIES } from '../data/productsData';
import { ProductItem } from '../types';
import { useRouter } from '../context/RouterContext';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Search, CheckCircle2, X, MessageSquare, Shield, Flame, FileText } from 'lucide-react';
import { createWhatsAppLink, trackEvent } from '../utils/analytics';

const PIECE_TYPES = [
  { id: 'todas', label: 'Todas as Peças' },
  { id: 'Conjunto em Uso', label: 'Modelos com Uniforme Completo' },
  { id: 'Camiseta', label: 'Camiseta' },
  { id: 'Camisa Polo', label: 'Camisa Polo' },
  { id: 'Camisa com Botão', label: 'Camisa com Botão' },
  { id: 'Manga Curta', label: 'Manga Curta' },
  { id: 'Bermuda', label: 'Bermuda' },
  { id: 'Calça Comprida', label: 'Calça Comprida' },
  { id: 'Colete', label: 'Colete' },
  { id: 'Jaqueta Corta-Vento', label: 'Jaqueta Corta-Vento' },
  { id: 'Banner', label: 'Banners' },
];

export const CatalogPage: React.FC = () => {
  const { openQuoteModal } = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [selectedPieceType, setSelectedPieceType] = useState<string>('todas');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const handleOpenProductModal = (prod: ProductItem) => {
    setActiveModalProduct(prod);
  };

  const filteredProducts = CATALOG_PRODUCTS.filter(prod => {
    const matchesSearch = 
      prod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (prod.pieceType && prod.pieceType.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (prod.sector && prod.sector.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (prod.seoKeywords && prod.seoKeywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase())));

    const matchesCategory = selectedCategory === 'todas' || prod.categorySlug === selectedCategory;

    let matchesPiece = true;
    if (selectedPieceType !== 'todas') {
      if (selectedPieceType === 'Conjunto em Uso') {
        matchesPiece = prod.pieceType === 'Conjunto em Uso' || prod.name.toLowerCase().includes('completo em uso') || prod.tags.includes('conjunto completo');
      } else if (selectedPieceType === 'Camisa com Botão') {
        matchesPiece = prod.pieceType?.includes('Camisa Botão') || prod.name.toLowerCase().includes('botão') || prod.name.toLowerCase().includes('social');
      } else if (selectedPieceType === 'Manga Curta') {
        matchesPiece = prod.name.toLowerCase().includes('manga curta') || prod.pieceType?.includes('Manga Curta');
      } else if (selectedPieceType === 'Jaqueta Corta-Vento') {
        matchesPiece = prod.pieceType?.includes('Jaqueta') || prod.name.toLowerCase().includes('corta-vento') || prod.name.toLowerCase().includes('jaqueta');
      } else if (selectedPieceType === 'Bermuda') {
        matchesPiece = prod.pieceType === 'Bermuda' || prod.name.toLowerCase().includes('bermuda');
      } else if (selectedPieceType === 'Calça Comprida') {
        matchesPiece = prod.pieceType?.includes('Calça') || prod.name.toLowerCase().includes('calça');
      } else {
        matchesPiece = prod.pieceType === selectedPieceType || prod.name.toLowerCase().includes(selectedPieceType.toLowerCase());
      }
    }

    return matchesSearch && matchesCategory && matchesPiece;
  });

  const handleProductQuote = (product: ProductItem) => {
    trackEvent('catalog_view_item', { item_name: product.name, category: product.categoryName });
    openQuoteModal({
      productType: `${product.name} (${product.categoryName})`,
      source: 'catalog_card',
      initialMessage: `Interesse no modelo: ${product.name}.`
    });
  };

  const handleWhatsAppProduct = (product: ProductItem) => {
    trackEvent('whatsapp_click', { product: product.name, source: 'catalog_modal' });
    const text = `Olá! Gostaria de solicitar um orçamento para o modelo: *${product.name}* (Ref: ${product.id}).`;
    window.open(createWhatsAppLink(text, 'catalog_direct'), '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      <SEOHead
        title="Catálogo de Modelos de Uniformes & Vestuário B2B | Natex"
        description="Explore nosso catálogo de uniformes industriais, frigoríficos, corporativos, eventos e escolares com confecção sob medida em Santa Catarina."
        keywords="catalogo uniformes, modelos uniforme, uniforme frigorifico branco, jaqueta cortavento branca, polo personalizada, bermuda industrial obra, calca cargo brim, natex confeccoes"
        canonicalUrl="/catalogo"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'Catálogo de Modelos' }]} />
      </div>

      {/* Hero Header */}
      <section className="pt-6 pb-7 border-b border-stone-200/90 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Modelos de Uniformes & Referências de Peças
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Consulte os modelos das peças e conjuntos completos em uso para cada área (frigorífico branco sanitário, industrial pesado, corporativo, merchandising, eventos e escolar). Peças operacionais como jaquetas, calças, bermudas, polos e camisetas são representadas individualmente e orçadas de acordo com a sua cotação.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-5 flex flex-col md:flex-row gap-3 items-stretch md:items-center">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por modelo (frigorífico branco, jaqueta cortavento, calça, polo, obra)..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-stone-300 rounded-[6px] text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1B365D]"
              />
            </div>
          </div>

          {/* Filter Bar: Rediagramada Compacta com Quebra Natural e Leitura Completa */}
          <div className="mt-4 p-3.5 sm:p-4 rounded-[4px] bg-white border border-stone-200/90 shadow-2xs space-y-3">
            {/* Linha de Áreas */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  Áreas de Aplicação:
                </span>
                <span className="text-xs text-slate-400">
                  {filteredProducts.length} referências
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                <button
                  onClick={() => setSelectedCategory('todas')}
                  className={`px-2 py-1 rounded-[4px] text-[10px] sm:text-[11px] font-medium transition-colors cursor-pointer ${
                    selectedCategory === 'todas'
                      ? 'bg-[#0F172A] text-white font-bold shadow-2xs'
                      : 'bg-stone-100 text-slate-600 hover:text-slate-900 hover:bg-stone-200/80'
                  }`}
                >
                  Todas as Áreas ({CATALOG_PRODUCTS.length})
                </button>

                {PRODUCT_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`px-2 py-1 rounded-[4px] text-[10px] sm:text-[11px] font-medium transition-colors cursor-pointer ${
                      selectedCategory === cat.slug
                        ? 'bg-[#1B365D] text-white font-bold shadow-2xs'
                        : 'bg-stone-100 text-slate-600 hover:text-slate-900 hover:bg-stone-200/80'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Linha de Peças */}
            <div className="border-t border-stone-100 pt-2 space-y-1.5">
              <span className="text-xs font-semibold text-slate-500 block">
                Tipo de Peça / Referência:
              </span>
              <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                {PIECE_TYPES.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedPieceType(type.id)}
                    className={`px-2 py-1 rounded-[4px] text-[10px] sm:text-[11px] font-medium transition-colors cursor-pointer ${
                      selectedPieceType === type.id
                        ? 'bg-[#FF6B00] text-white font-bold shadow-2xs'
                        : 'bg-stone-100 text-slate-600 hover:text-slate-900 hover:bg-stone-200/80'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Context Notice */}
          <div className="mt-3 p-3 bg-stone-50 rounded-[4px] border border-stone-200 text-xs text-slate-700 flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#1B365D] shrink-0" />
            <span className="text-[11px] sm:text-xs">
              <strong>Peças Separadas & Sob Medida:</strong> Jaquetas, calças, bermudas, polos e camisetas são apresentadas individualmente e podem ser cotadas de forma avulsa ou em conjuntos completos com modelos em uso. Matéria-prima definida conforme opções de mercado e escolha do cliente.
            </span>
          </div>
        </div>
      </section>

      {/* Catalog Grid with Amplified Images */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#FAF9F6] rounded-[4px] border border-stone-200 text-slate-500 text-xs space-y-2">
            <p className="font-semibold text-slate-700">Nenhum modelo encontrado com os filtros selecionados.</p>
            <p>Tente alterar o termo da busca ou selecionar outra área.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('todas');
                setSelectedPieceType('todas');
              }}
              className="mt-2 inline-block px-4 py-2 bg-slate-900 text-white rounded-[6px] text-xs font-bold cursor-pointer"
            >
              Ver Todos os Modelos
            </button>
          </div>
        ) : (
          <div className="border border-stone-200/90 bg-white">
            {/* Cabeçalho da Ficha Técnica (Desktop) */}
            <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3.5 bg-stone-100/90 border-b border-stone-200 text-[11px] font-mono font-bold text-slate-700 uppercase tracking-wider">
              <div className="col-span-4">Ref. & Modelo / Peça</div>
              <div className="col-span-3">Tecido Homologado & Matéria-Prima</div>
              <div className="col-span-2">Aplicação & Setor</div>
              <div className="col-span-3">Diferencial Técnico & Ações</div>
            </div>

            {/* Linhas da Ficha Técnica */}
            <div className="divide-y divide-stone-200">
              {filteredProducts.map(product => {
                const isSeparatePiece = product.id === 'prod-jaqueta-industrial-bicolor' || product.id === 'prod-calca-industrial-cargo';
                const isExtremeHeat = product.id === 'prod-bermuda-industrial-obra';
                const isFrigorifico = product.categorySlug === 'uniformes-frigorifico';
                const refCode = product.id.replace('prod-', 'FT-').toUpperCase();

                // Diferencial Técnico formatado
                const techDifferential = product.technicalSpecs?.[0] 
                  ? `${product.technicalSpecs[0].label}: ${product.technicalSpecs[0].value}`
                  : product.customizationOptions?.[0] || 'Costuras reforçadas e modelagem anatômica em CAD';

                return (
                  <div
                    key={product.id}
                    className="p-4 sm:p-5 lg:px-6 lg:py-4 bg-white hover:bg-stone-50/90 transition-colors duration-150 flex flex-col lg:grid lg:grid-cols-12 lg:gap-4 lg:items-center"
                  >
                    {/* Col 1: Imagem + Ref + Título */}
                    <div className="lg:col-span-4 flex items-center gap-4">
                      {/* Thumbnail da Imagem (Mantida, sem sombra, sem elevação translateY) */}
                      <div className="relative w-20 h-24 sm:w-24 sm:h-28 shrink-0 overflow-hidden bg-stone-100 border border-stone-200/90 rounded-[2px] flex items-center justify-center">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        {/* Selos especiais em micro-etiquetas */}
                        {isExtremeHeat && (
                          <span className="absolute bottom-1 left-1 bg-[#FF6B00] text-white text-[9px] font-bold px-1 rounded-[1px]">
                            Calor
                          </span>
                        )}
                        {isFrigorifico && (
                          <span className="absolute bottom-1 left-1 bg-[#1B365D] text-white text-[9px] font-bold px-1 rounded-[1px]">
                            Térmico
                          </span>
                        )}
                      </div>

                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-mono text-[10px] font-bold text-slate-600 bg-stone-100 px-1.5 py-0.5 rounded-[2px] border border-stone-200/80">
                            {refCode}
                          </span>
                          <span className="text-[10px] font-medium text-slate-600 bg-stone-100 px-1.5 py-0.5 rounded-[2px]">
                            {product.categoryName}
                          </span>
                          {product.pieceType && (
                            <span className="text-[10px] font-medium text-slate-700 bg-stone-200/80 px-1.5 py-0.5 rounded-[2px]">
                              {product.pieceType}
                            </span>
                          )}
                          {isSeparatePiece && (
                            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-[2px] border border-amber-200/70">
                              Peça Avulsa
                            </span>
                          )}
                        </div>

                        <h3 className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#1B365D] transition-colors leading-snug">
                          {product.name}
                        </h3>

                        <p className="text-xs text-slate-600 line-clamp-1">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Col 2: Tipo de Tecido & Matéria-Prima */}
                    <div className="lg:col-span-3 mt-3 lg:mt-0 text-xs">
                      <span className="lg:hidden text-[10px] font-mono uppercase font-bold text-slate-500 block mb-0.5">
                        Tecido Homologado:
                      </span>
                      <div className="font-semibold text-slate-800 leading-relaxed">
                        {product.recommendedFabrics?.[0] || 'Malha / Tecido homologado sob medida'}
                      </div>
                      {product.recommendedFabrics && product.recommendedFabrics.length > 1 && (
                        <div className="text-[11px] text-slate-500 mt-1 flex flex-wrap gap-1">
                          {product.recommendedFabrics.slice(1, 3).map((fab, i) => (
                            <span key={i} className="inline-block bg-stone-100 px-1.5 py-0.5 rounded-[2px] border border-stone-200/70 font-mono text-[10px]">
                              {fab}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="text-[10px] text-slate-400 font-mono mt-1">
                        Matéria-prima definida no briefing do lote
                      </div>
                    </div>

                    {/* Col 3: Aplicação & Setor */}
                    <div className="lg:col-span-2 mt-2 lg:mt-0 text-xs text-slate-600">
                      <span className="lg:hidden text-[10px] font-mono uppercase font-bold text-slate-500 block mb-0.5">
                        Aplicação & Setor:
                      </span>
                      <div className="font-medium text-slate-800 leading-relaxed">
                        {product.applications?.[0] || 'Uso corporativo e equipes operacionais'}
                      </div>
                      {product.sector && (
                        <div className="text-[11px] text-slate-500 mt-0.5 font-mono">
                          Setor: {product.sector}
                        </div>
                      )}
                    </div>

                    {/* Col 4: Diferencial Técnico & Ações */}
                    <div className="lg:col-span-3 mt-3 lg:mt-0 text-xs flex flex-col justify-between space-y-2.5">
                      <div>
                        <span className="lg:hidden text-[10px] font-mono uppercase font-bold text-slate-500 block mb-0.5">
                          Diferencial Técnico:
                        </span>
                        <div className="text-slate-700 leading-relaxed font-normal">
                          {techDifferential}
                        </div>
                      </div>

                      {/* Ações Técnicas (Sem sombras, hover de cor plano) */}
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          onClick={() => handleOpenProductModal(product)}
                          className="flex-1 py-1.5 px-3 bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-semibold rounded-[2px] border border-stone-200/90 transition-colors text-center cursor-pointer"
                        >
                          Saiba mais
                        </button>

                        <button
                          onClick={() => handleProductQuote(product)}
                          className="flex-1 py-1.5 px-3 bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs font-bold rounded-[2px] transition-colors text-center cursor-pointer"
                        >
                          Peça agora
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-3xl bg-white border border-stone-200 rounded-[4px] shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-3.5 right-3.5 z-20 p-2 text-slate-500 hover:text-slate-900 bg-white/95 rounded-[6px] shadow-2xs cursor-pointer border border-stone-200 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="overflow-y-auto">
              {/* Modal Amplified Image */}
              <div className="h-64 sm:h-80 overflow-hidden bg-stone-100 relative group">
                <img
                  src={activeModalProduct.imageUrl}
                  alt={activeModalProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-[4px] text-[11px] font-medium text-slate-800 shadow-2xs border border-stone-200">
                    {activeModalProduct.categoryName}
                  </span>
                  {activeModalProduct.pieceType && (
                    <span className="bg-[#0F172A]/90 backdrop-blur-md text-white px-2.5 py-1 rounded-[4px] text-[11px] font-medium shadow-2xs">
                      {activeModalProduct.pieceType}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5 sm:p-7 space-y-4 text-xs sm:text-sm text-slate-600">
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-slate-900">
                    {activeModalProduct.name}
                  </h3>
                  <p className="mt-1.5 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {activeModalProduct.description}
                  </p>
                </div>

                {/* Separate Piece Callout */}
                {(activeModalProduct.id === 'prod-jaqueta-industrial-bicolor' || activeModalProduct.id === 'prod-calca-industrial-cargo') && (
                  <div className="p-3.5 bg-amber-50 rounded-[4px] border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
                    <Shield className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-amber-950 mb-0.5">Peça Avulsa Independente</h4>
                      <p className="leading-relaxed text-[11px] sm:text-xs">
                        Esta peça pode ser orçada e adquirida separadamente ou combinada com outros itens. Não é obrigatório comprar o conjunto completo, permitindo escolher grades diferentes para tronco e pernas.
                      </p>
                    </div>
                  </div>
                )}

                {/* Frigorifico Callout */}
                {activeModalProduct.categorySlug === 'uniformes-frigorifico' && (
                  <div className="p-3.5 bg-blue-50 rounded-[4px] border border-blue-200 text-blue-950 text-xs flex items-start gap-2.5">
                    <Shield className="w-4 h-4 text-[#1B365D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-0.5">Padrão Sanitário Branco para Indústria de Alimentos & Câmaras Frias</h4>
                      <p className="leading-relaxed text-[11px] sm:text-xs text-slate-700">
                        Peça em conformidade com exigências higiênico-sanitárias (SIF / ANVISA), resistente a desinfecções industriais contínuas e isolamento térmico adequado ao setor.
                      </p>
                    </div>
                  </div>
                )}

                {/* Extreme Heat Industrial Bermuda Callout */}
                {activeModalProduct.id === 'prod-bermuda-industrial-obra' && (
                  <div className="p-3.5 bg-orange-50 rounded-[4px] border border-orange-200 text-orange-950 text-xs flex items-start gap-2.5">
                    <Flame className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-0.5">Modelagem Especial para Calor Extremo em Canteiro de Obras</h4>
                      <p className="leading-relaxed text-[11px] sm:text-xs text-slate-700">
                        Desenvolvida com brim pesado 100% algodão respirável, bolsos cargo laterais funcionais e passantes largos. Proporciona ventilação térmica em áreas quentes sob sol intenso.
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Matérias-Primas & Mercado */}
                  <div className="p-3.5 bg-stone-50 rounded-[4px] border border-stone-200">
                    <h4 className="font-bold text-slate-900 text-xs mb-1">Matérias-Primas & Mercado</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed mb-2">
                      O tecido e a gramatura são definidos na sua cotação de acordo com a escolha do cliente e as opções dos fornecedores têxteis de mercado.
                    </p>
                    <div className="flex flex-wrap gap-1 text-[10px]">
                      <span className="bg-white px-1.5 py-0.5 rounded-[4px] border border-stone-200 text-slate-700">Brins & Sarjas</span>
                      <span className="bg-white px-1.5 py-0.5 rounded-[4px] border border-stone-200 text-slate-700">Piquet & PV</span>
                      <span className="bg-white px-1.5 py-0.5 rounded-[4px] border border-stone-200 text-slate-700">Nylon Térmico</span>
                      <span className="bg-white px-1.5 py-0.5 rounded-[4px] border border-stone-200 text-slate-700">Dry Fit</span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-stone-50 rounded-[4px] border border-stone-200">
                    <h4 className="font-bold text-slate-900 text-xs mb-1.5">Personalização Fabril</h4>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {activeModalProduct.customizationOptions.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#FF6B00] font-bold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {activeModalProduct.technicalSpecs && activeModalProduct.technicalSpecs.length > 0 && (
                  <div className="p-3.5 bg-stone-50 rounded-[4px] border border-stone-200">
                    <h4 className="font-bold text-slate-900 text-xs mb-1.5">Especificações Técnicas da Ficha</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {activeModalProduct.technicalSpecs.map((spec, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-[10px] text-slate-500 uppercase font-medium">{spec.label}</span>
                          <span className="text-slate-800 font-medium text-[11px] sm:text-xs">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-3 rounded-[4px] bg-stone-50 border border-stone-200 text-slate-700 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B365D] shrink-0" />
                  <span className="text-[11px] sm:text-xs">Alinhamento técnico de modelagem, medidas e ficha de confecção realizado antes do corte fabril.</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => {
                      const prod = activeModalProduct;
                      setActiveModalProduct(null);
                      handleProductQuote(prod);
                    }}
                    className="flex-1 py-3 px-4 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold rounded-[6px] text-xs text-center cursor-pointer shadow-2xs transition-colors"
                  >
                    Peça agora
                  </button>

                  <button
                    onClick={() => handleWhatsAppProduct(activeModalProduct)}
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

