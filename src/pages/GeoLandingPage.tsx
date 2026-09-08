import React from 'react';
import { GEO_PAGES } from '../data/geoPagesData';
import { useRouter } from '../context/RouterContext';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { PilotPieceHighlight } from '../components/common/PilotPieceHighlight';
import { QuoteForm } from '../components/common/QuoteForm';
import { MapPin, Truck, ShieldCheck, CheckCircle2, MessageSquare, Factory } from 'lucide-react';
import { createWhatsAppLink, trackEvent } from '../utils/analytics';
import { COMPANY_INFO } from '../data/companyData';

interface GeoLandingPageProps {
  slug: string;
}

export const GeoLandingPage: React.FC<GeoLandingPageProps> = ({ slug }) => {
  const { openQuoteModal, navigate } = useRouter();

  const geoData = GEO_PAGES.find(g => g.slug === slug) || GEO_PAGES[0];

  const handleWhatsApp = () => {
    trackEvent('whatsapp_click', { origin: 'geo_landing_page', city: geoData.city });
    const msg = `Olá! Gostaria de solicitar um orçamento de confecção para minha empresa em *${geoData.city}/${geoData.state}*.`;
    window.open(createWhatsAppLink(msg, `geo_${geoData.city}`), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#080E1E] text-slate-100 pb-20">
      <SEOHead
        title={geoData.title}
        description={geoData.metaDescription}
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          'name': `${COMPANY_INFO.name} - Atendimento ${geoData.city}`,
          'areaServed': {
            '@type': 'City',
            'name': geoData.city
          },
          'description': geoData.metaDescription
        }}
      />

      {/* Hero */}
      <section className="pt-8 pb-16 sm:pt-12 sm:pb-24 bg-industrial-grid border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: geoData.type === 'uniformes' ? 'Uniformes' : 'Private Label', path: geoData.type === 'uniformes' ? '/uniformes-profissionais' : '/private-label' },
            { label: `${geoData.city} - ${geoData.state}` }
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-6">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                {geoData.h1}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {geoData.localIntro}
              </p>

              <div className="p-4 rounded-[4px] bg-[#0F172A] border border-slate-800 flex items-start gap-3">
                <Truck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-300">
                  <strong className="text-white block mb-0.5">Logística Integrada com Santa Catarina:</strong>
                  {geoData.logisticsInfo}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => openQuoteModal({ source: `geo_page_${geoData.city}`, productType: `Confecção para ${geoData.city}` })}
                  className="px-7 py-4 bg-[#FF6B00] hover:bg-[#ff7b1a] text-white font-bold rounded-[6px] shadow-xl text-sm transition-all cursor-pointer"
                >
                  Solicitar Cotação para {geoData.city}
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-[6px] text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Fábrica</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#0F172A] p-6 rounded-[4px] border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white uppercase text-xs tracking-wider text-slate-400">
                Soluções mais pedidas em {geoData.city}:
              </h3>

              <div className="space-y-2.5">
                {geoData.recommendedSolutions.map((sol, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                <span>✓ Alinhamento técnico detalhado de modelagem e especificações antes do corte.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contexto Industrial */}
      <section className="py-16 bg-[#080E1E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Padrão Fabril de Santa Catarina Direto para sua Empresa
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {geoData.industrialContext}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-[4px] bg-[#0F172A] border border-slate-800 text-center">
              <span className="text-xl font-bold text-white block">Rigor Técnico</span>
              <span className="text-xs text-slate-400">Modelagem e fichas homologadas</span>
            </div>
            <div className="p-4 rounded-[4px] bg-[#0F172A] border border-slate-800 text-center">
              <span className="text-xl font-bold text-[#00B4D8] block">Escala</span>
              <span className="text-xs text-slate-400">Capacidade para lotes industriais</span>
            </div>
            <div className="p-4 rounded-[4px] bg-[#0F172A] border border-slate-800 text-center">
              <span className="text-xl font-bold text-emerald-400 block">30+ Anos</span>
              <span className="text-xs text-slate-400">Know-how comprovado</span>
            </div>
          </div>
        </div>
      </section>

      <PilotPieceHighlight showCta={false} />

      {/* Localized FAQ */}
      {geoData.faqs && geoData.faqs.length > 0 && (
        <FAQAccordion
          customFaqs={geoData.faqs}
          title={`Perguntas sobre Atendimento em ${geoData.city}`}
          subtitle={`Informações sobre prazos, fretes e alinhamentos técnicos para a região de ${geoData.city}.`}
        />
      )}

      {/* Form */}
      <section className="py-16 bg-[#0F172A]/80 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Solicitar Orçamento para sua Empresa em {geoData.city}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Receba contato da nossa equipe comercial com valores e estimativa de entrega para sua localidade.
            </p>
          </div>

          <div className="bg-[#080E1E] p-6 sm:p-10 rounded-[4px] border border-slate-800 shadow-2xl">
            <QuoteForm
              initialProductType={geoData.type === 'uniformes' ? 'Uniformes Profissionais' : 'Private Label'}
              sourceOrigin={`geo_landing_${geoData.slug}`}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
