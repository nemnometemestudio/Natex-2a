import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  Briefcase, 
  GraduationCap, 
  Users, 
  HardHat, 
  Tag, 
  Award, 
  Flag, 
  Layers,
  ShoppingBag,
  BookOpen
} from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { useRouter } from '../../context/RouterContext';
import { trackEvent } from '../../utils/analytics';

export const Header: React.FC = () => {
  const { currentPath, navigate, openQuoteModal } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    navigate(path);
  };

  return (
    <header id="main-header" className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Main Navbar (Architectonic Clean White with subtle shadow and blur) */}
      <div className={`transition-all duration-200 border-b ${
        isScrolled 
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-stone-300/80 shadow-md shadow-slate-950/5 py-3' 
          : 'bg-[#FAF9F6]/90 backdrop-blur-md border-stone-200/90 shadow-xs py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('/')} 
            className="cursor-pointer shrink-0 transition-transform hover:scale-[1.01] active:scale-[0.99]"
            title="Natex Confecções - Início"
          >
            <BrandLogo variant="dark" size="md" showTagline={false} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-stone-100/90 p-1 rounded-xl border border-stone-200/80">
            {/* Home */}
            <button
              onClick={() => handleNavClick('/')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                currentPath === '/' ? 'text-slate-950 bg-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Início
            </button>

            {/* Dropdown: Uniformes */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('uniformes')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('/uniformes-profissionais')}
                className={`flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  currentPath.includes('uniforme') ? 'text-[#1B365D] bg-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <span>Uniformes</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'uniformes' ? 'rotate-180 text-[#1B365D]' : ''}`} />
              </button>

              {activeDropdown === 'uniformes' && (
                <div className="absolute left-0 top-full pt-2 w-72 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="bg-white border border-stone-200 rounded-xl p-1.5 shadow-xl space-y-0.5">
                    <button
                      onClick={() => handleNavClick('/uniformes-corporativos')}
                      className="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 text-left text-xs text-slate-800 transition-colors cursor-pointer"
                    >
                      <Briefcase className="w-4 h-4 text-[#1B365D] shrink-0" />
                      <div>
                        <span className="font-bold block text-slate-900">Uniformes Corporativos</span>
                        <span className="text-[10px] text-slate-500">Polos, camisas sociais e alfaiataria</span>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNavClick('/uniformes-escolares')}
                      className="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 text-left text-xs text-slate-800 transition-colors cursor-pointer"
                    >
                      <GraduationCap className="w-4 h-4 text-[#FF6B00] shrink-0" />
                      <div>
                        <span className="font-bold block text-slate-900">Uniformes Escolares</span>
                        <span className="text-[10px] text-slate-500">Linha colégio e agasalhos</span>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNavClick('/uniformes-profissionais')}
                      className="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 text-left text-xs text-slate-800 transition-colors cursor-pointer"
                    >
                      <Users className="w-4 h-4 text-emerald-700 shrink-0" />
                      <div>
                        <span className="font-bold block text-slate-900">Uniformes para Saúde</span>
                        <span className="text-[10px] text-slate-500">Jalecos gabardine e scrubs</span>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNavClick('/uniformes-industriais')}
                      className="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 text-left text-xs text-slate-800 transition-colors cursor-pointer"
                    >
                      <HardHat className="w-4 h-4 text-amber-700 shrink-0" />
                      <div>
                        <span className="font-bold block text-slate-900">Indústria & Obras</span>
                        <span className="text-[10px] text-slate-500">Brim pesado e faixas refletivas</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown: Private Label */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('privatelabel')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('/private-label')}
                className={`flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  currentPath.includes('private-label') ? 'text-[#1B365D] bg-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <span>Private Label</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'privatelabel' ? 'rotate-180 text-[#1B365D]' : ''}`} />
              </button>

              {activeDropdown === 'privatelabel' && (
                <div className="absolute left-0 top-full pt-2 w-72 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="bg-white border border-stone-200 rounded-xl p-1.5 shadow-xl space-y-0.5">
                    <button
                      onClick={() => handleNavClick('/private-label')}
                      className="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 text-left text-xs text-slate-800 transition-colors cursor-pointer"
                    >
                      <Tag className="w-4 h-4 text-[#1B365D] shrink-0" />
                      <div>
                        <span className="font-bold block text-slate-900">Confecção para Marcas & Lojas</span>
                        <span className="text-[10px] text-slate-500">Do lojista a grandes redes</span>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNavClick('/private-label')}
                      className="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 text-left text-xs text-slate-800 transition-colors cursor-pointer"
                    >
                      <Layers className="w-4 h-4 text-emerald-700 shrink-0" />
                      <div>
                        <span className="font-bold block text-slate-900">Coleções em Escala</span>
                        <span className="text-[10px] text-slate-500">Desenvolvimento sob medida B2B</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Wind Banners & Bandeiras */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('promocional')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('/wind-banners')}
                className={`flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  currentPath.includes('wind-banners') || currentPath.includes('bandeiras') ? 'text-[#1B365D] bg-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <span>Comunicação Visual</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'promocional' ? 'rotate-180 text-[#1B365D]' : ''}`} />
              </button>

              {activeDropdown === 'promocional' && (
                <div className="absolute left-0 top-full pt-2 w-64 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="bg-white border border-stone-200 rounded-xl p-1.5 shadow-xl space-y-0.5">
                    <button
                      onClick={() => handleNavClick('/wind-banners')}
                      className="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 text-left text-xs text-slate-800 transition-colors cursor-pointer"
                    >
                      <Flag className="w-4 h-4 text-[#1B365D] shrink-0" />
                      <div>
                        <span className="font-bold block text-slate-900">Wind Banners</span>
                        <span className="text-[10px] text-slate-500">Estruturas completas e tecidos</span>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNavClick('/bandeiras')}
                      className="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-stone-50 text-left text-xs text-slate-800 transition-colors cursor-pointer"
                    >
                      <Award className="w-4 h-4 text-[#FF6B00] shrink-0" />
                      <div>
                        <span className="font-bold block text-slate-900">Bandeiras Oficiais & Promocionais</span>
                        <span className="text-[10px] text-slate-500">Estamparia digital dupla face</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Camisetas & Merchandising */}
            <button
              onClick={() => handleNavClick('/camisetas-eventos')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                currentPath.includes('camisetas-eventos') ? 'text-[#1B365D] bg-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Camisetas
            </button>

            {/* Catálogo */}
            <button
              onClick={() => handleNavClick('/catalogo')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                currentPath === '/catalogo' ? 'text-[#1B365D] bg-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Catálogo
            </button>

            {/* Outlet - Loja de Fábrica */}
            <button
              onClick={() => handleNavClick('/outlet')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                currentPath.includes('/outlet') 
                  ? 'text-white bg-[#FF6B00] shadow-xs' 
                  : 'text-[#FF6B00] hover:text-[#e05e00] hover:bg-orange-50/80 bg-orange-50/40'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Outlet</span>
            </button>

            {/* Blog */}
            <button
              onClick={() => handleNavClick('/blog')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                currentPath.includes('/blog') ? 'text-[#1B365D] bg-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Blog
            </button>

            {/* Sobre */}
            <button
              onClick={() => handleNavClick('/sobre')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                currentPath === '/sobre' ? 'text-[#1B365D] bg-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Sobre a Fábrica
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => {
                trackEvent('quote_modal_open', { origin: 'header_main_button' });
                openQuoteModal({ source: 'header' });
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs rounded-lg shadow-sm transition-all hover:translate-y-[-1px] active:translate-y-[0px] cursor-pointer whitespace-nowrap"
            >
              <span>Solicitar Orçamento</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => {
                trackEvent('quote_modal_open', { origin: 'header_mobile_button' });
                openQuoteModal({ source: 'header_mobile' });
              }}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#FF6B00] text-white font-bold text-xs rounded-lg shadow-xs cursor-pointer"
            >
              <span>Orçamento</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-stone-100 text-slate-700 hover:bg-stone-200 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (Clean White) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('/')}
              className="w-full text-left px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick('/uniformes-profissionais')}
              className="w-full text-left px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              Uniformes Profissionais & Corporativos
            </button>
            <button
              onClick={() => handleNavClick('/private-label')}
              className="w-full text-left px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              Marca Própria & Private Label
            </button>
            <button
              onClick={() => handleNavClick('/wind-banners')}
              className="w-full text-left px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              Wind Banners & Bandeiras
            </button>
            <button
              onClick={() => handleNavClick('/camisetas-eventos')}
              className="w-full text-left px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              Camisetas Promocionais & Moda
            </button>
            <button
              onClick={() => handleNavClick('/catalogo')}
              className="w-full text-left px-3 py-2 rounded-[4px] text-sm font-semibold text-slate-800 hover:bg-stone-100 flex items-center justify-between"
            >
              <span>Catálogo de Modelos</span>
              <span className="text-[10px] px-2 py-0.5 rounded-[2px] bg-[#1B365D]/10 text-[#1B365D] font-bold">Ver Peças</span>
            </button>
            <button
              onClick={() => handleNavClick('/outlet')}
              className="w-full text-left px-3 py-2 rounded-[4px] text-sm font-bold text-[#FF6B00] bg-orange-50/60 hover:bg-orange-50 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                <span>Outlet Loja de Fábrica</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-[2px] bg-[#FF6B00] text-white font-bold">Varejo</span>
            </button>
            <button
              onClick={() => handleNavClick('/blog')}
              className="w-full text-left px-3 py-2 rounded-[4px] text-sm font-semibold text-slate-800 hover:bg-stone-100 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#1B365D]" />
                <span>Blog & Artigos Têxteis</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-[2px] bg-[#1B365D]/10 text-[#1B365D] font-bold">Novidades</span>
            </button>
            <button
              onClick={() => handleNavClick('/sobre')}
              className="w-full text-left px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              Sobre a Natex (30+ Anos de Fábrica)
            </button>
            <button
              onClick={() => handleNavClick('/contato')}
              className="w-full text-left px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              Contato & Localização
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://wa.me/5547992820556?text=Ol%C3%A1%21+Vim+pelo+site+da+Natex+Confec%C3%A7%C3%B5es+e+gostaria+de+um+or%C3%A7amento+comercial."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 text-white font-bold rounded-xl text-xs"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>WhatsApp: (47) 99282-0556</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
