import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  Tag, 
  Clock, 
  Calendar, 
  Sparkles, 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  Share2, 
  MessageSquare, 
  ShieldCheck,
  TrendingUp,
  MapPin,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Columns3,
  SlidersHorizontal,
  X
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { BlogPost } from '../types';
import { BLOG_CATEGORIES } from '../data/blogData';
import { GooglePostsService } from '../services/googlePostsService';
import { trackEvent, createWhatsAppLink } from '../utils/analytics';
import { COMPANY_INFO } from '../data/companyData';
import { getOptimizedImageUrl } from '../utils/imageOptimizer';
import { getCategoryFallbackImage } from '../data/blogImageAssets';
import { MagazineTopicRow } from '../components/blog/MagazineTopicRow';
import { MagazinePosterCard } from '../components/blog/MagazinePosterCard';

const POSTS_PER_PAGE = 9;

export const BlogPage: React.FC = () => {
  const { navigate, openQuoteModal } = useRouter();
  
  // Instant synchronous state from in-memory catalog
  const [posts] = useState<BlogPost[]>(() => GooglePostsService.getInitialPosts());
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('todos');
  const [viewMode, setViewMode] = useState<'magazine' | 'grid'>('magazine');
  const [currentPage, setCurrentPage] = useState(1);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Reset page when category or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  // Filter posts based on search query and category
  const filteredPosts = useMemo(() => {
    let result = posts;

    // Category filter
    if (activeCategory !== 'todos') {
      result = result.filter(post => post.categorySlug === activeCategory);
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(post => 
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some(t => t.toLowerCase().includes(q)) ||
        (post.seo?.keywords && post.seo.keywords.some(k => k.toLowerCase().includes(q)))
      );
    }

    return result;
  }, [posts, activeCategory, searchQuery]);

  // Group posts by topic categories for the Magazine Staggered Carousel view
  const categorizedSections = useMemo(() => {
    const validCategories = BLOG_CATEGORIES.filter(c => c.slug !== 'todos');

    return validCategories.map((cat, idx) => {
      // Find all posts for this category, matching search if any
      const categoryPosts = posts.filter(post => {
        const matchesCategory = post.categorySlug === cat.slug;
        if (!matchesCategory) return false;
        if (!searchQuery.trim()) return true;

        const q = searchQuery.toLowerCase().trim();
        return (
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q) ||
          post.tags.some(t => t.toLowerCase().includes(q)) ||
          (post.seo?.keywords && post.seo.keywords.some(k => k.toLowerCase().includes(q)))
        );
      });

      return {
        category: cat,
        posts: categoryPosts,
        rowIndex: idx
      };
    }).filter(section => section.posts.length > 0);
  }, [posts, searchQuery]);

  // If on first page and default view (no search, 'todos' category), show featured post in grid view
  const isDefaultView = !searchQuery && activeCategory === 'todos';
  const featuredPost = isDefaultView && filteredPosts.length > 0 ? filteredPosts[0] : null;

  // Posts to be paginated in grid view
  const gridSourcePosts = useMemo(() => {
    if (isDefaultView && featuredPost && viewMode === 'grid') {
      return filteredPosts.slice(1);
    }
    return filteredPosts;
  }, [filteredPosts, isDefaultView, featuredPost, viewMode]);

  // Total pages
  const totalPages = Math.max(1, Math.ceil(gridSourcePosts.length / POSTS_PER_PAGE));

  // Current page posts
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return gridSourcePosts.slice(start, start + POSTS_PER_PAGE);
  }, [gridSourcePosts, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const gridEl = document.getElementById('articles-list');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTopic = (categorySlug: string) => {
    if (categorySlug === 'todos') {
      setActiveCategory('todos');
      const el = document.getElementById('magazine-mosaic');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    if (viewMode !== 'magazine') {
      setViewMode('magazine');
    }

    setTimeout(() => {
      const topicEl = document.getElementById(`topic-row-${categorySlug}`);
      if (topicEl) {
        topicEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        setActiveCategory(categorySlug);
      }
    }, 50);
  };

  // JSON-LD Schema for SEO / AEO / GEO
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'Blog da Natex Confecções | Indústria Têxtil, Private Label e Uniformes',
    'description': 'Artigos técnicos, comparativos de malhas e tecidos, guias de confecção para marcas (Private Label) e novidades do polo têxtil catarinense.',
    'url': 'https://natexconfeccoes.com.br/blog',
    'publisher': {
      '@type': 'Organization',
      'name': COMPANY_INFO.name,
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://natexconfeccoes.com.br/logo.png'
      },
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': COMPANY_INFO.address.city,
        'addressRegion': COMPANY_INFO.address.state,
        'addressCountry': 'BR'
      }
    },
    'blogPost': posts.slice(0, 10).map(post => ({
      '@type': 'BlogPosting',
      'headline': post.title,
      'description': post.excerpt,
      'datePublished': post.publishedAt,
      'author': {
        '@type': 'Organization',
        'name': post.author
      },
      'image': post.coverImage,
      'url': `https://natexconfeccoes.com.br/blog/${post.slug}`
    }))
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      {/* 1. HERO HEADER SECTION - Editorial Magazine Style */}
      <section className="bg-slate-950 text-white pt-14 pb-16 sm:pt-18 sm:pb-20 relative overflow-hidden border-b border-slate-900">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />
        
        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl space-y-4">
            {/* Magazine Header Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#FF6B00] text-white font-mono text-xs font-black uppercase tracking-widest rounded-none">
                REVISTA TÉXTIL SC
              </span>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider hidden sm:inline-block">
                EDIÇÃO INDUSTRIAL & CADERNO DE CONFECÇÃO
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] uppercase">
              Engenharia Têxtil, Private Label & Caderno de Produção
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
              Diagramação viva de artigos técnicos, comparativos de malhas, tabelas de gramatura e diretrizes industriais direto do polo confeccionista de Santa Catarina.
            </p>

            {/* Quick stats pills with straight corners */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2 text-xs font-mono text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-none">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Navegantes • Vale do Itajaí SC</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-none">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{posts.length} Artigos Técnicos Publicados</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-none">
                <Layers className="w-3.5 h-3.5 text-[#00B4D8]" />
                <span>{BLOG_CATEGORIES.length - 1} Seções Temáticas</span>
              </span>
            </div>
          </div>

          {/* Search bar inside Hero with straight corners */}
          <div className="mt-8 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por tecido, private label, polo piquet, uniformes, brim, gramatura..."
                className="w-full pl-12 pr-12 py-3.5 bg-slate-900/90 hover:bg-slate-900 focus:bg-white text-white focus:text-slate-900 placeholder:text-slate-400 text-sm font-medium rounded-none border border-slate-700 focus:border-[#FF6B00] focus:ring-0 transition-all outline-none shadow-xl"
                style={{ borderRadius: '0px' }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-slate-400 hover:text-white px-2 py-1 rounded-none bg-slate-800 cursor-pointer"
                  style={{ borderRadius: '0px' }}
                >
                  LIMPAR
                </button>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 2. MAGAZINE INDEX & VIEW SWITCHER BAR */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-900 shadow-xs">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            
            {/* Topic Quick Jump Pills (Editorial Magazine Index) */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 w-full md:w-auto">
              <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest mr-2 shrink-0 hidden lg:inline-block">
                CADERNO:
              </span>

              <button
                onClick={() => scrollToTopic('todos')}
                className={`px-3.5 py-1.5 rounded-none font-mono text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                  activeCategory === 'todos'
                    ? 'bg-slate-950 text-white border-slate-950 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-900 hover:text-slate-900'
                }`}
                style={{ borderRadius: '0px' }}
              >
                TODOS OS TÓPICOS
              </button>

              {BLOG_CATEGORIES.filter(c => c.slug !== 'todos').map((cat, idx) => {
                const isActive = activeCategory === cat.slug;
                const number = String(idx + 1).padStart(2, '0');
                return (
                  <button
                    key={cat.slug}
                    onClick={() => scrollToTopic(cat.slug)}
                    className={`px-3 py-1.5 rounded-none font-mono text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-[#6200EA] text-white border-[#6200EA] shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-900 hover:text-slate-900'
                    }`}
                    style={{ borderRadius: '0px' }}
                  >
                    <span className="text-slate-400 font-normal mr-1">{number}.</span>
                    <span>{cat.name.split('&')[0].trim()}</span>
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle (Magazine Staggered vs Standard Grid) */}
            <div className="flex items-center gap-2 shrink-0 self-end md:self-auto pt-1 md:pt-0">
              <div className="inline-flex items-center p-1 bg-slate-100 border border-slate-200 rounded-none text-xs font-mono">
                <button
                  onClick={() => setViewMode('magazine')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-none text-xs font-bold transition-colors cursor-pointer ${
                    viewMode === 'magazine'
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  style={{ borderRadius: '0px' }}
                  title="Diagramação de Revista com Linhas Desincronizadas"
                >
                  <Columns3 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mosaico Revista</span>
                </button>

                <button
                  onClick={() => setViewMode('grid')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-none text-xs font-bold transition-colors cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  style={{ borderRadius: '0px' }}
                  title="Exibição em Grade Tradicional"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Grade</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MAIN ARTICLES CONTENT AREA */}
      <main id="articles-list" className="min-h-[500px]">

        {/* Search / Filter Active Feedback Banner */}
        {searchQuery.trim() && (
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <div className="p-4 sm:p-5 bg-amber-500/10 border border-amber-500/30 rounded-none flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-amber-600 shrink-0" />
                <div className="text-xs sm:text-sm text-slate-800">
                  <span>Filtrando por termo: </span>
                  <strong className="font-mono text-slate-950">"{searchQuery}"</strong>
                  <span className="text-slate-500 ml-2">({filteredPosts.length} artigos encontrados)</span>
                </div>
              </div>

              <button
                onClick={() => setSearchQuery('')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-amber-500/40 text-slate-900 font-mono text-xs font-bold rounded-none hover:bg-amber-500 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Limpar Filtro</span>
              </button>
            </div>
          </div>
        )}

        {filteredPosts.length === 0 ? (
          <div className="py-24 text-center max-w-lg mx-auto px-4">
            <div className="p-8 sm:p-12 bg-white border border-slate-900 rounded-none shadow-xl space-y-4">
              <Search className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-xl font-black text-slate-950 uppercase tracking-tight">Nenhum artigo encontrado</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Não encontramos publicações correspondentes a "{searchQuery}". Tente pesquisar por malhas, uniformes, private label ou bordado.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('todos');
                }}
                className="px-6 py-3 rounded-none bg-slate-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#6200EA] transition-colors cursor-pointer"
                style={{ borderRadius: '0px' }}
              >
                Ver Mosaico Completo
              </button>
            </div>
          </div>
        ) : viewMode === 'magazine' && activeCategory === 'todos' && !searchQuery.trim() ? (
          /* =========================================================================
             A. EDITORIAL MAGAZINE MOSAIC VIEW (Posters Horizontais Sincronizados)
             ========================================================================= */
          <div id="magazine-mosaic" className="py-4 sm:py-6 space-y-1">
            
            {/* Editorial Lead Intro Bar */}
            <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 mb-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-2 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <span className="text-slate-900 font-bold uppercase tracking-wider">
                    GALERIA EDITORIAL • {categorizedSections.length} SEÇÕES EM RETÂNGULOS HORIZONTAIS
                  </span>
                  <span>•</span>
                  <span>{posts.length} ARTIGOS TÉCNICOS</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-slate-400">
                  <span>A arte é a própria moldura • Tipografia interna • Diagramação Revista Web</span>
                </div>
              </div>
            </div>

            {/* TOPIC ROWS */}
            {categorizedSections.map(({ category, posts: topicPosts, rowIndex }) => (
              <MagazineTopicRow
                key={category.slug}
                category={category}
                posts={topicPosts}
                rowIndex={rowIndex}
                onNavigate={(slug) => {
                  trackEvent('blog_post_click', { slug, category: category.slug });
                  navigate(`/blog/${slug}`);
                }}
                onSelectCategory={(slug) => {
                  setActiveCategory(slug);
                  setViewMode('grid');
                }}
              />
            ))}

          </div>
        ) : (
          /* =========================================================================
             B. GRID / FILTERED CATEGORY VIEW (Posters Horizontais Limpos)
             ========================================================================= */
          <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
            
            {/* Category header when filtering */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-slate-900">
              <div className="space-y-1">
                <span className="font-mono text-xs font-black text-[#FF6B00] uppercase tracking-widest">
                  VISUALIZAÇÃO EM GRADE
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">
                  {activeCategory === 'todos' ? 'Todos os Artigos Catalogados' : BLOG_CATEGORIES.find(c => c.slug === activeCategory)?.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Exibindo {filteredPosts.length} artigos em formato de arte gráfica horizontal, com tags e palavras-chave na própria imagem.
                </p>
              </div>

              {activeCategory !== 'todos' && (
                <button
                  onClick={() => {
                    setActiveCategory('todos');
                    setViewMode('magazine');
                  }}
                  className="text-xs font-mono font-bold text-slate-900 hover:text-[#6200EA] transition-colors cursor-pointer self-start sm:self-auto"
                >
                  ← Voltar para as Seções da Revista
                </button>
              )}
            </div>

            {/* Articles Grid with horizontal posters and tight spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {paginatedPosts.map((post, postIdx) => (
                <MagazinePosterCard
                  key={post.id}
                  post={post}
                  index={postIdx}
                  widthClass="w-full"
                  heightClass="h-[250px] sm:h-[280px]"
                  onNavigate={(slug) => {
                    trackEvent('blog_post_click', { slug });
                    navigate(`/blog/${slug}`);
                  }}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pt-8 pb-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`inline-flex items-center gap-1 px-4 py-2.5 font-mono text-xs font-bold transition-all rounded-none ${
                      currentPage === 1
                        ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                        : 'bg-white border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white shadow-xs cursor-pointer'
                    }`}
                    style={{ borderRadius: '0px' }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Anterior</span>
                  </button>

                  <div className="flex items-center gap-1 px-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                      const isActive = pageNum === currentPage;
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`w-9 h-9 font-mono text-xs font-bold transition-all cursor-pointer flex items-center justify-center rounded-none border ${
                            isActive
                              ? 'bg-slate-950 text-white border-slate-950 shadow-sm font-black'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-900 hover:text-slate-900'
                          }`}
                          style={{ borderRadius: '0px' }}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className={`inline-flex items-center gap-1 px-4 py-2.5 font-mono text-xs font-bold transition-all rounded-none ${
                      currentPage === totalPages
                        ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                        : 'bg-white border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white shadow-xs cursor-pointer'
                    }`}
                    style={{ borderRadius: '0px' }}
                  >
                    <span>Próxima</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

      </main>

      {/* 4. GEO & AEO QUICK KNOWLEDGE / FAQ FOR AI ENGINES */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Principais Dúvidas sobre Confecção Industrial em Santa Catarina
            </h2>
            <p className="text-sm text-slate-600">
              Respostas diretas homologadas pelos diretores técnicos e engenheiros têxteis da Natex Confecções.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-[4px] bg-slate-50 border border-slate-200/80 space-y-3">
              <h3 className="text-base font-bold text-slate-900">
                O que é necessário para iniciar uma produção Private Label na Natex?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Basta enviar os modelos de referência, quantidade estimada por cor/tamanho e as especificações de tecido. A Natex desenvolve a modelagem digital CAD e alinha as fichas técnicas antes de iniciar o corte.
              </p>
            </div>

            <div className="p-6 rounded-[4px] bg-slate-50 border border-slate-200/80 space-y-3">
              <h3 className="text-base font-bold text-slate-900">
                Qual a diferença entre Algodão Fio 30.1 Penteado e Cardado?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                O algodão penteado passa por um penteador industrial que elimina fibras curtas e impurezas, gerando uma malha muito mais macia, sem nós e resistente à formação de bolinhas (anti-pilling), enquanto o cardado é mais rústico.
              </p>
            </div>

            <div className="p-6 rounded-[4px] bg-slate-50 border border-slate-200/80 space-y-3">
              <h3 className="text-base font-bold text-slate-900">
                A Natex envia roupas e uniformes para outros estados do Brasil?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sim! Sediada em Navegantes – SC (próxima ao Aeroporto Internacional e ao Porto), a Natex possui contratos de expedição diária com as principais transportadoras e companhias aéreas com seguro integral de carga.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FINAL CONVERSION BANNER */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Pronto para Desenvolver Sua Coleção ou Uniformes com a Fábrica?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Fale com nossa equipe técnica de vendas, solicite uma cotação para sua empresa ou visite nossa loja de fábrica no Bairro Gravatá em Navegantes – SC.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => openQuoteModal({ source: 'blog_index_cta' })}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FF6B00] hover:bg-[#ff7b1a] text-white font-bold text-xs sm:text-sm rounded-[6px] shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Solicitar Orçamento de Produção</span>
            </button>

            <a
              href={createWhatsAppLink('Olá! Estava lendo o Blog da Natex e gostaria de conversar com um especialista da fábrica.', 'blog_index_whatsapp')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm rounded-[6px] border border-slate-700 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
