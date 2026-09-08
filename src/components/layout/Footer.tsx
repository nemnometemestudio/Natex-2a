import React from 'react';
import { BrandLogo } from '../common/BrandLogo';
import { COMPANY_INFO } from '../../data/companyData';
import { GEO_PAGES } from '../../data/geoPagesData';
import { useRouter } from '../../context/RouterContext';
import { MapPin, Phone, Mail, Clock, ShieldCheck, MessageSquare, ChevronRight } from 'lucide-react';
import { createWhatsAppLink, trackEvent } from '../../utils/analytics';

export const Footer: React.FC = () => {
  const { navigate, openQuoteModal } = useRouter();

  const FOOTER_CATEGORIES = [
    { name: 'Uniformes Corporativos & Sociais', slug: 'uniformes-corporativos' },
    { name: 'Uniformes Industriais & Obras', slug: 'uniformes-industriais' },
    { name: 'Uniformes para Frigoríficos', slug: 'uniformes-frigorifico' },
    { name: 'Uniformes Escolares', slug: 'uniformes-escolares' },
    { name: 'Private Label & Marcas', slug: 'private-label' },
    { name: 'Camisetas & Moda', slug: 'camisetas-eventos' },
    { name: 'Wind Banners & Bandeiras', slug: 'wind-banners' },
  ];

  const INSTITUTIONAL_LINKS = [
    { label: 'Outlet Loja de Fábrica', path: '/outlet' },
    { label: 'Blog & Conhecimento Têxtil', path: '/blog' },
    { label: 'Sobre a Fábrica', path: '/sobre' },
    { label: 'Processo de Produção', path: '/processo' },
    { label: 'Diferenciais Industriais', path: '/diferenciais' },
    { label: 'Catálogo de Modelos', path: '/catalogo' },
    { label: 'Perguntas Frequentes (FAQ)', path: '/faq' },
    { label: 'Contato & Localização', path: '/contato' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Actions */}
          <div className="space-y-4">
            <div onClick={() => navigate('/')} className="cursor-pointer inline-block">
              <BrandLogo variant="light" size="md" showTagline={true} />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Indústria têxtil catarinense especializada em uniformes profissionais, private label e materiais têxteis sob medida.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <button
                onClick={() => openQuoteModal({ source: 'footer_cta' })}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#FF6B00] hover:bg-[#ff7b1a] text-white text-xs font-bold rounded-[6px] shadow-xs transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Solicitar Cotação</span>
              </button>

              <a
                href={createWhatsAppLink('Olá! Gostaria de conversar com a equipe comercial da Natex.', 'footer_brand_btn')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { origin: 'footer_brand_btn' })}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-[6px] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Linhas de Confecção */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Linhas de Confecção
            </h4>
            
            <ul className="space-y-2 text-xs">
              {FOOTER_CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <button
                    onClick={() => navigate(`/${cat.slug}`)}
                    className="group flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#FF6B00] transition-colors shrink-0" />
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Institucional */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Institucional
            </h4>

            <ul className="space-y-2 text-xs">
              {INSTITUTIONAL_LINKS.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="group flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#FF6B00] transition-colors shrink-0" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Fábrica & Contato */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Fábrica em Santa Catarina
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                <div>
                  <a
                    href="https://www.google.com/maps/place/Natex+Confec%C3%A7%C3%B5es/@-26.8370166,-48.6307307,17z/data=!3m1!4b1!4m6!3m5!1s0x94d8cfb43bdb9bb5:0xdb94f21fac8f2cd1!8m2!3d-26.8370166!4d-48.6307307!16s%2Fg%2F11ntp_r7hw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-[#00B4D8] transition-colors"
                  >
                    Bairro Gravatá, Navegantes – SC
                  </a>
                  <span className="block text-slate-500 text-[11px]">Polo Têxtil Catarinense</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-200">{COMPANY_INFO.phoneDisplay}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-slate-300">{COMPANY_INFO.commercialEmail}</span>
              </div>

              <div className="pt-2">
                <div className="p-2.5 rounded-[4px] bg-slate-800/80 border border-slate-700/60 flex items-center gap-2 text-[11px] text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Padrão Fabril:</strong> Fichas e modelagem homologadas antes do corte.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Major Cities Coverage */}
        <div className="py-6 border-b border-slate-800 text-xs">
          <span className="font-bold text-slate-300 text-[11px] uppercase tracking-wider block mb-2">
            Polos Industriais Atendidos:
          </span>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
            {GEO_PAGES.map((geo) => (
              <button
                key={geo.slug}
                onClick={() => navigate(`/${geo.slug}`)}
                className="px-2.5 py-1 rounded-[4px] bg-slate-800/50 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
              >
                {geo.city} ({geo.state})
              </button>
            ))}
            <span className="self-center text-slate-500 text-[11px] italic">
              + Todo o território brasileiro
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/politica-de-privacidade')} className="hover:text-slate-300">
              Privacidade
            </button>
            <span>•</span>
            <button onClick={() => navigate('/termos-de-uso')} className="hover:text-slate-300">
              Termos de Uso
            </button>
            <span>•</span>
            <button onClick={() => navigate('/contato')} className="hover:text-slate-300">
              Contato
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
