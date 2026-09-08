import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { useRouter } from '../context/RouterContext';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { PilotPieceHighlight } from '../components/common/PilotPieceHighlight';
import { NatexLocationMap } from '../components/common/NatexLocationMap';
import { 
  Award, 
  Factory, 
  ShieldCheck, 
  MapPin, 
  Truck, 
  Clock, 
  Phone, 
  Mail, 
  MessageSquare, 
  ExternalLink,
  Navigation,
  CheckCircle2, 
  Plane,
  Anchor
} from 'lucide-react';
import { createWhatsAppLink, trackEvent } from '../utils/analytics';
import imgPoloExecutiva from '../assets/images/camisa_polo_piquet_modelo_1787608499467.jpg';

export const AboutPage: React.FC = () => {
  const { openQuoteModal } = useRouter();

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      <SEOHead
        title="Sobre a Natex Confecções | Indústria Têxtil B2B em Navegantes/SC"
        description="Conheça a história, estrutura fabril e localização da Natex Confecções em Navegantes/SC. Sócios com mais de 30 anos de know-how e atendimento nacional."
      />

      {/* Hero Header */}
      <section className="pt-6 pb-12 sm:pb-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Sobre a Empresa' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Da Ideia ao Tecido, Soluções em Confecção de Escala
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A <strong>Natex Confecções</strong> é uma indústria têxtil sediada em Navegantes (SC), estruturada para atender empresas e marcas em todo o Brasil com uniformes de alto padrão e soluções private label sob medida.
              </p>

              <div className="p-4 rounded-[4px] bg-white border border-slate-200 flex items-start gap-3">
                <Factory className="w-5 h-5 text-[#1B365D] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600 space-y-0.5">
                  <strong className="text-slate-900 block font-semibold">Mais de 30 Anos de Experiência dos Sócios</strong>
                  <p>Fundadores com mais de três décadas de experiência comprovada no polo têxtil catarinense.</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => openQuoteModal({ source: 'about_hero_cta' })}
                  className="px-6 py-3 bg-[#FF6B00] hover:bg-[#ff7b1a] text-white font-bold rounded-[6px] text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
                >
                  Solicitar Cotação
                </button>
                <a
                  href="#localizacao-mapa"
                  className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-[6px] text-xs sm:text-sm transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#1B365D]" />
                  <span>Ver Endereço & Mapa</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-[4px] overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <img
                  src={imgPoloExecutiva}
                  alt="Natex Confecções em Navegantes SC"
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Estrutura & Pilares */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[4px] bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="w-10 h-10 rounded-[4px] bg-slate-200 text-slate-800 flex items-center justify-center mb-2">
                <Factory className="w-5 h-5 text-[#1B365D]" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Estrutura Fabril Própria</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Corte industrial, modelagem computadorizada e células de costura especializadas por segmento.
              </p>
            </div>

            <div className="p-6 rounded-[4px] bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="w-10 h-10 rounded-[4px] bg-slate-200 text-slate-800 flex items-center justify-center mb-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Rigor Técnico e Moldes</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modelagem digital precisa, tolerância milimétrica e conferência de especificações antes da esteira de corte.
              </p>
            </div>

            <div className="p-6 rounded-[4px] bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="w-10 h-10 rounded-[4px] bg-slate-200 text-slate-800 flex items-center justify-center mb-2">
                <Truck className="w-5 h-5 text-[#FF6B00]" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Logística Nacional</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Navegantes/SC conta com malha aérea e rodoviária integrada para envios rápidos para todo o país.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Piece */}
      <PilotPieceHighlight />

      {/* Map Section */}
      <section id="localizacao-mapa" className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NatexLocationMap />
        </div>
      </section>
    </div>
  );
};
