import React, { useState, useMemo } from 'react';
import { 
  Instagram, 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  ShoppingBag, 
  Sparkles, 
  Tag, 
  Users, 
  Heart, 
  Shirt, 
  Smile, 
  ExternalLink, 
  Check, 
  Navigation, 
  ChevronDown, 
  Share2, 
  Layers,
  Copy,
  Calendar,
  AlertCircle,
  BookOpen,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { 
  OUTLET_INFO, 
  OUTLET_DEPARTMENTS, 
  OUTLET_ARTICLES, 
  OUTLET_FAQS,
  OutletGuideArticle 
} from '../data/outletData';
import { OutletArticleModal } from '../components/outlet/OutletArticleModal';
import { NatexSymbol } from '../components/common/BrandLogo';
import { trackEvent } from '../utils/analytics';

export const OutletPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<OutletGuideArticle | null>(null);

  const articles = OUTLET_ARTICLES;

  // Filter articles
  const filteredArticles = useMemo(() => {
    if (activeCategory === 'todos') {
      return articles;
    }
    if (activeCategory === 'qualidade') {
      return articles.filter(a => a.category === 'qualidade');
    }
    if (activeCategory === 'guia') {
      return articles.filter(a => a.category === 'guia');
    }
    if (activeCategory === 'lojistas') {
      return articles.filter(a => a.category === 'lojistas');
    }
    if (activeCategory === 'pronta-entrega') {
      return articles.filter(a => a.category === 'pronta-entrega');
    }
    if (activeCategory === 'colecao') {
      return articles.filter(a => a.category === 'colecao');
    }
    // Fallback search match by category or tag
    return articles.filter(a => 
      a.category === activeCategory || 
      a.tags.some(t => t.toLowerCase().includes(activeCategory.toLowerCase()))
    );
  }, [articles, activeCategory]);

  // Compute if store is currently open (Brazil timezone: -03:00)
  const isStoreOpenNow = useMemo(() => {
    try {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        timeZone: 'America/Sao_Paulo', 
        weekday: 'short', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: false 
      };
      const formatter = new Intl.DateTimeFormat('pt-BR', options);
      const parts = formatter.formatToParts(now);
      
      const weekdayStr = parts.find(p => p.type === 'weekday')?.value.toLowerCase() || '';
      const hour = parseInt(parts.find(p => p.type === 'hour')?.value || '0', 10);
      const minute = parseInt(parts.find(p => p.type === 'minute')?.value || '0', 10);
      const timeInMinutes = hour * 60 + minute;

      // Monday to Friday: 07:30 to 18:00
      const isWeekday = ['seg', 'ter', 'qua', 'qui', 'sex'].some(d => weekdayStr.includes(d));
      if (isWeekday) {
        return timeInMinutes >= 7 * 60 + 30 && timeInMinutes <= 18 * 60;
      }

      // Saturday: 08:00 to 12:00
      const isSaturday = weekdayStr.includes('sáb') || weekdayStr.includes('sab');
      if (isSaturday) {
        return timeInMinutes >= 8 * 60 && timeInMinutes <= 12 * 60;
      }

      // Sunday: closed
      return false;
    } catch {
      return null;
    }
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('Natex Confecções - Bairro Gravatá, Navegantes - SC');
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleArticleClick = (article: OutletGuideArticle) => {
    trackEvent('outlet_article_click', { articleId: article.id, category: article.category });
    setSelectedArticle(article);
  };

  const handleFollowInstagram = () => {
    trackEvent('instagram_follow_click', { origin: 'outlet_page' });
    window.open(OUTLET_INFO.instagramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO BANNER DO OUTLET */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 border-b border-slate-200/80 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40">
        {/* Background glow & subtle patterns */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 right-1/4 w-96 h-96 bg-purple-100/60 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-20 w-80 h-80 bg-orange-100/50 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6200EA]/10 border border-[#6200EA]/20 text-[#6200EA] text-xs font-bold uppercase tracking-wider">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Loja de Fábrica Anexa</span>
                </span>
                
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Venda no Varejo sem CNPJ</span>
                </span>

                {isStoreOpenNow !== null && (
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                    isStoreOpenNow 
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300' 
                      : 'bg-amber-50 text-amber-800 border-amber-300'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${isStoreOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                    <span>{isStoreOpenNow ? 'Loja Aberta Agora' : 'Fechada no Momento'}</span>
                  </span>
                )}
              </div>

              {/* Title */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                  Natex Outlet: <br />
                  <span className="text-[#6200EA]">Moda com Preço Direto da Fábrica</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                  Visite nossa loja anexa ao parque fabril em <strong className="text-slate-900">Navegantes - SC</strong>. 
                  Araras completas com moda feminina, masculina e infantil, reposições semanais e toda a qualidade de quem fabrica há mais de 30 anos.
                </p>
              </div>

              {/* Quick Info Grid Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 max-w-xl">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="p-2 rounded-xl bg-purple-50 text-[#6200EA] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <strong className="block text-slate-900 font-bold">Horário de Atendimento</strong>
                    <span className="text-slate-600 block">Seg a Sex: 07:30 às 18:00</span>
                    <span className="text-slate-600 block font-medium">Sábados: 08:00 às 12:00</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="p-2 rounded-xl bg-orange-50 text-[#FF6B00] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <strong className="block text-slate-900 font-bold">Fábrica & Loja Física</strong>
                    <span className="text-slate-600 block">Bairro Gravatá, Navegantes - SC</span>
                    <span className="text-emerald-700 font-bold block">Estacionamento próprio</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#instagram-feed"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-pink-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Ver Novidades no Instagram @natexoutlet</span>
                </a>

                <a
                  href="#localizacao"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#00B4D8]" />
                  <span>Como Chegar na Loja</span>
                </a>

                <a
                  href={OUTLET_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp da Loja</span>
                </a>
              </div>

            </div>

            {/* Right Card / Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xl shadow-slate-900/10 p-3 sm:p-4">
                
                {/* Image Banner */}
                <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
                    alt="Loja Outlet Natex na Fábrica"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>Novas Peças Toda Semana</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Navegantes • Gravatá</span>
                    </div>
                    <h3 className="text-xl font-bold text-white leading-snug">
                      Ambiente Amplo com Provadores & Araras Completas
                    </h3>
                  </div>
                </div>

                {/* Micro Stats inside Card */}
                <div className="grid grid-cols-3 gap-2 pt-3 text-center">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-base font-black text-slate-900">100%</span>
                    <span className="text-[10px] text-slate-500 font-medium leading-tight">Fábrica Própria</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-base font-black text-[#6200EA]">Feminino</span>
                    <span className="text-[10px] text-slate-500 font-medium leading-tight">+ Masc & Infantil</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-base font-black text-emerald-600">Varejo</span>
                    <span className="text-[10px] text-slate-500 font-medium leading-tight">Aberto a Todos</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DEPARTAMENTOS: FEMININO, MASCULINO, INFANTIL */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-[#6200EA] uppercase tracking-wider">
              Departamentos da Loja
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Moda para Toda a Família
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Conheça as três principais linhas disponíveis no Outlet da Natex. Do básico ao look completo, sempre com tecidos de toque nobre e preços imperdíveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OUTLET_DEPARTMENTS.map((dept) => {
              return (
                <div
                  key={dept.id}
                  className="group rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-slate-900/10 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Photo Header */}
                  <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                    <img
                      src={dept.image}
                      alt={dept.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                    
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-slate-900 shadow-sm border border-slate-200/60">
                      {dept.tag}
                    </span>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs text-slate-200 font-medium block">{dept.subtitle}</span>
                      <h3 className="text-2xl font-black text-white">{dept.title}</h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {dept.description}
                    </p>

                    {/* Highlights check list */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {dept.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button trigger */}
                    <div className="pt-3">
                      <a
                        href="#instagram-feed"
                        onClick={() => setActiveCategory(dept.id === 'feminina' ? 'colecao' : (dept.id === 'masculina' ? 'colecao' : 'colecao'))}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-[6px] bg-slate-50 hover:bg-purple-50 text-[#6200EA] hover:text-[#6200EA] text-xs font-bold border border-slate-200 hover:border-purple-200 transition-colors"
                      >
                        <span>Conhecer linha de {dept.title}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. CONTEÚDOS & GUIA COMPLETO DO OUTLET NATEX */}
      <section id="instagram-feed" className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/80 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Instagram Profile Header Card - Kept intact with Bio and Follow CTA */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
              
              {/* Profile info with Official Natex Emblem */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                
                {/* Authentic Avatar with Instagram Gradient Ring */}
                <a
                  href={OUTLET_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group cursor-pointer shrink-0"
                  title="Abrir perfil @natexoutlet no Instagram"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[3px] bg-gradient-to-tr from-[#fd5949] via-[#d6249f] to-[#285AEB] group-hover:scale-105 transition-transform shadow-md">
                    <div className="w-full h-full rounded-full bg-slate-900 p-2 flex flex-col items-center justify-center text-white overflow-hidden relative">
                      {/* Official 3D X Emblem */}
                      <NatexSymbol className="w-9 h-9 drop-shadow-sm" />
                      <span className="text-[8px] font-black tracking-widest text-orange-400 uppercase mt-0.5">OUTLET</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-gradient-to-tr from-[#fd5949] to-[#d6249f] p-1.5 rounded-full text-white shadow-md">
                    <Instagram className="w-3.5 h-3.5" />
                  </div>
                </a>

                {/* Text details */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <a
                      href={OUTLET_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl sm:text-3xl font-black text-slate-900 hover:text-[#6200EA] transition-colors"
                    >
                      {OUTLET_INFO.instagramHandle}
                    </a>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-200">
                      Perfil Oficial
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Loja Física & Fábrica</span>
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 max-w-xl leading-relaxed">
                    🛍️ <strong>Natex Outlet</strong> | Loja de Fábrica no Bairro Gravatá, Navegantes - SC. <br />
                    ✨ Moda Feminina, Masculina e Infantil com preço direto de confecção. Siga nosso Instagram para conferir os stories diários com as araras e novidades da semana!
                  </p>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-slate-500 pt-1">
                    <span className="text-slate-800 font-bold">Varejo Aberto a Todos</span>
                    <span>•</span>
                    <span className="text-slate-800 font-bold">Canal B2B para Lojistas</span>
                    <span>•</span>
                    <span className="text-emerald-700 font-bold">Pronta Entrega Imediata</span>
                  </div>
                </div>

              </div>

              {/* Action button on Profile Header */}
              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <button
                  onClick={handleFollowInstagram}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-pink-500/20 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Seguir @natexoutlet no Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Explanatory hint banner */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#6200EA] shrink-0" />
                <span>Explore nossos artigos explicativos abaixo para entender a qualidade de fábrica, pronta entrega e compras para revenda.</span>
              </div>
              <span className="text-slate-400 font-medium">Clique em qualquer card para ler na íntegra</span>
            </div>
          </div>

          {/* Section Heading */}
          <div className="max-w-3xl mb-8 space-y-2 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-[#6200EA] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Conteúdo & Guia do Cliente</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Tudo o Que Você Precisa Saber Sobre o Outlet Natex
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Entenda como funciona o nosso modelo de loja de fábrica, a importância de tocar nos tecidos, a conveniência da pronta entrega e como lojistas podem abastecer seus estoques.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar w-full sm:w-auto">
              {[
                { id: 'todos', label: 'Todos os Artigos (9)' },
                { id: 'qualidade', label: 'Qualidade Fabril & Toque' },
                { id: 'guia', label: 'Como Funciona o Outlet' },
                { id: 'lojistas', label: 'Para Lojistas & Revenda' },
                { id: 'pronta-entrega', label: 'Pronta Entrega' },
                { id: 'colecao', label: 'Coleções & Roupas' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <BookOpen className="w-3.5 h-3.5 text-[#6200EA]" />
              <span>{filteredArticles.length} artigos disponíveis</span>
            </div>
          </div>

          {/* 9 ARTICLE CARDS GRID (Replacing Instagram Post Mockups) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, idx) => (
              <article
                key={article.id || idx}
                onClick={() => handleArticleClick(article)}
                className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-slate-900/10 hover:border-purple-200 transition-all duration-300 cursor-pointer flex flex-col justify-between text-left"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />

                  {/* Category Pill Top Left */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-slate-900 shadow-xs border border-slate-200/60">
                      {article.categoryLabel}
                    </span>
                  </div>

                  {/* Reading Time Pill Top Right */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[11px] font-bold text-white shadow-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readingTime}</span>
                    </span>
                  </div>

                  {/* Title overlay on bottom of image for visual richness */}
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-orange-400 mb-0.5">
                      {article.audience}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white leading-snug group-hover:text-purple-200 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content under image */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>

                  {/* Key Highlights mini bullets */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {article.keyHighlights.slice(0, 2).map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Footer Action */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-slate-400 font-medium">
                      <span>#{article.tags[0]}</span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[#6200EA] font-bold group-hover:text-[#5200c7]">
                      <span>Ler Artigo Completo</span>
                    </span>
                  </div>

                </div>

              </article>
            ))}
          </div>

          {/* Bottom Banner with Instagram and Factory invitation */}
          <div className="mt-12 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-base sm:text-lg font-black text-slate-900">
                Quer Acompanhar as Araras e Novidades em Tempo Real?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Postamos diariamente nos stories do Instagram com fotos das peças disponíveis, provadores e horários especiais.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={handleFollowInstagram}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-pink-500/20 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
                <span>Seguir @natexoutlet</span>
              </button>

              <a
                href="#localizacao"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-all hover:scale-[1.02] cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#FF6B00]" />
                <span>Como Chegar na Fábrica</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. BENEFÍCIOS DO OUTLET DE FÁBRICA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-[#6200EA] uppercase tracking-wider">
              Vantagens Exclusivas
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Por que Comprar no Outlet Natex?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Economia real comprando de quem produz, com atendimento dedicado e qualidade reconhecida no polo têxtil catarinense.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OUTLET_INFO.benefits.map((benefit, i) => (
              <div
                key={i}
                className="p-7 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#6200EA]/10 text-[#6200EA] flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. LOCALIZAÇÃO, MAPA & HORÁRIOS */}
      <section id="localizacao" className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-[#6200EA] uppercase tracking-wider">
              Localização & Visita
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Venha Conhecer Nossa Loja de Fábrica
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Fácil acesso no Bairro Gravatá em Navegantes – SC, anexo ao parque de confecção da Natex.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Info & Schedule Cards */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Hours Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-purple-50 text-[#6200EA]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Horário de Atendimento</h3>
                      <p className="text-xs text-slate-500">Horário Oficial do Outlet</p>
                    </div>
                  </div>

                  {isStoreOpenNow !== null && (
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      isStoreOpenNow ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      {isStoreOpenNow ? 'Aberto' : 'Fechado'}
                    </span>
                  )}
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50">
                    <span className="font-semibold text-slate-700">Segunda a Sexta</span>
                    <span className="font-bold text-slate-900">07:30 às 18:00</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50">
                    <span className="font-semibold text-slate-700">Sábados</span>
                    <span className="font-bold text-slate-900">08:00 ao 12:00</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50/50 text-slate-400">
                    <span>Domingos e Feriados</span>
                    <span className="font-medium">Fechado</span>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-orange-50 text-[#FF6B00] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900">Endereço da Fábrica</h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {OUTLET_INFO.address.fullDisplay}
                    </p>
                    <p className="text-xs text-slate-400">
                      Anexo ao parque fabril da Natex Confecções
                    </p>
                  </div>
                </div>

                {/* Action Buttons for Navigation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  <a
                    href={OUTLET_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-[#00B4D8]" />
                    <span>Abrir Google Maps</span>
                  </a>

                  <a
                    href={OUTLET_INFO.address.wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-[#FF6B00]" />
                    <span>Abrir no Waze</span>
                  </a>
                </div>

                {/* Copy address button */}
                <button
                  onClick={handleCopyAddress}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Endereço copiado para a área de transferência!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar endereço completo</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp direct contact */}
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-emerald-900 block">Dúvida sobre modelos ou tamanhos?</span>
                  <span className="text-xs text-emerald-700">Fale com a equipe do Outlet pelo WhatsApp</span>
                </div>
                <a
                  href={OUTLET_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shrink-0 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right Column: Google Maps Embed */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-md p-2 h-[420px] sm:h-[500px] flex flex-col">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <iframe
                    title="Mapa da Fábrica e Outlet Natex em Navegantes"
                    src={OUTLET_INFO.address.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                  
                  {/* Overlay badge on map */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-md border border-slate-200/80 max-w-xs pointer-events-none">
                    <span className="text-xs font-bold text-slate-900 block">Natex Confecções & Outlet</span>
                    <span className="text-[11px] text-slate-500 block">Gravatá, Navegantes - SC</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. FAQ DO OUTLET */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-[#6200EA] uppercase tracking-wider">
              Tire Suas Dúvidas
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Perguntas Frequentes sobre o Outlet
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Tudo o que você precisa saber antes de nos visitar no Gravatá.
            </p>
          </div>

          <div className="space-y-3.5">
            {OUTLET_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-slate-300 shadow-md shadow-slate-900/5'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left text-base font-bold text-slate-900 cursor-pointer focus:outline-none"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#6200EA]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. FINAL CTA: CONVITE PARA VISITA E INSTAGRAM */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Esperamos Você em Nossa Fábrica</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Venha Garantir Seus Looks Favoritos com Preço Direto da Fábrica
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Visite nossa loja de segunda a sábado no Bairro Gravatá ou acompanhe os stories em <strong className="text-white">@natexoutlet</strong> para conferir as araras em tempo real!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={OUTLET_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-pink-500/20 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              <span>Seguir @natexoutlet no Instagram</span>
            </a>

            <a
              href={OUTLET_INFO.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all hover:scale-[1.02] cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#FF6B00]" />
              <span>Como Chegar ao Outlet</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. ARTICLE MODAL */}
      <OutletArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
};
