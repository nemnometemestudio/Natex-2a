import React from 'react';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { QuoteForm } from '../components/common/QuoteForm';
import { NatexLocationMap } from '../components/common/NatexLocationMap';
import { COMPANY_INFO } from '../data/companyData';
import { Mail, MapPin, Clock, MessageSquare, ShieldCheck, ExternalLink } from 'lucide-react';
import { createWhatsAppLink, trackEvent } from '../utils/analytics';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 pb-20">
      <SEOHead
        title="Contato & Localização | Natex Confecções Navegantes SC"
        description="Fale diretamente com a fábrica da Natex Confecções em Navegantes/SC. WhatsApp oficial: (47) 99282-0556."
      />

      <section className="pt-6 pb-10 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contato & Localização' }]} />

          <div className="mt-4 max-w-2xl space-y-2">
            <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider block">
              Canais Oficiais Fabris
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Fale com a Natex Confecções
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Estamos prontos para atender a demanda da sua empresa ou marca. Entre em contato pelos canais oficiais ou solicite um orçamento direto da fábrica.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <div className="p-6 rounded-[4px] bg-emerald-50/70 border border-emerald-200 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[4px] bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-emerald-950">WhatsApp Comercial</h3>
                  <span className="text-xs text-emerald-700 font-semibold">Atendimento Rápido</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Tire dúvidas de modelagem, tecidos e solicite uma consultoria para a sua empresa.
              </p>

              <a
                href={createWhatsAppLink('Olá! Gostaria de conversar com o departamento comercial da Natex.', 'contact_page_card')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { origin: 'contact_page_card' })}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-[6px] text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Email & Info */}
            <div className="p-6 rounded-[4px] bg-slate-50 border border-slate-200 space-y-3.5 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block text-xs">E-mail:</strong>
                  <a href={`mailto:${COMPANY_INFO.commercialEmail}`} className="text-slate-600 hover:text-slate-900 transition-colors">
                    {COMPANY_INFO.commercialEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-slate-200/80 pt-3">
                <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block text-xs">Endereço Fabril:</strong>
                  <span>{COMPANY_INFO.address.fullDisplay}</span>
                  <span className="block text-[11px] text-slate-500 mt-0.5">Navegantes - Santa Catarina</span>
                  <a
                    href={COMPANY_INFO.address.coordinates?.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#1B365D] hover:underline font-semibold mt-1"
                  >
                    <span>Ver no Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-slate-200/80 pt-3">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block text-xs">Horário:</strong>
                  <span>{COMPANY_INFO.operatingHours}</span>
                </div>
              </div>
            </div>

            {/* National Shipping Notice */}
            <div className="p-4 rounded-[4px] bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                Atendimento estruturado para empresas em todo o território nacional com frete rodoviário e aéreo.
              </span>
            </div>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-[4px] border border-slate-200 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
              Envie sua Mensagem ou Cotação
            </h2>
            <p className="text-xs text-slate-500 mb-5">
              Preencha os campos abaixo e nosso departamento técnico entrará em contato.
            </p>

            <QuoteForm sourceOrigin="contact_page_form" />
          </div>
        </div>

        {/* Interactive Location Map Component with Natex Pin */}
        <NatexLocationMap />
      </section>
    </div>
  );
};
