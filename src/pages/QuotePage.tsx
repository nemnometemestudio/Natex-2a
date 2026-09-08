import React from 'react';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { QuoteForm } from '../components/common/QuoteForm';
import { COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, MessageSquare, Phone, MapPin, CheckCircle2, Clock } from 'lucide-react';
import { createWhatsAppLink, trackEvent } from '../utils/analytics';

export const QuotePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 pb-20">
      <SEOHead
        title="Solicitar Orçamento de Uniformes & Confecção B2B | Natex"
        description="Solicite sua cotação de uniformes profissionais, peças industriais, private label ou materiais têxteis em escala. Resposta rápida por consultores em Navegantes/SC."
      />

      <section className="pt-6 pb-10 sm:pt-10 sm:pb-14 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Solicitar Orçamento' }]} />

          <div className="mt-4 max-w-3xl space-y-2">
            <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider block">
              Cotação Comercial & Briefing Técnico
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-pretty">
              Solicitar Orçamento de Confecção em Escala
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-pretty">
              Preencha os detalhes do seu projeto abaixo para receber direcionamento técnico de tecidos homologados, tabela de graduação de medidas e proposta comercial direto da fábrica.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Form (8 cols) */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-[4px] border border-stone-200/90 shadow-2xs">
            <QuoteForm sourceOrigin="dedicated_quote_page" />
          </div>

          {/* Sidebar Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Quick WhatsApp Box */}
            <div className="p-5 rounded-[4px] bg-emerald-50/80 border border-emerald-200 space-y-3">
              <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>Prefere atendimento imediato?</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nossa equipe comercial está disponível no WhatsApp para tirar dúvidas de modelagem, tecidos e agilizar sua proposta.
              </p>
              <a
                href={createWhatsAppLink('Olá! Gostaria de uma cotação rápida para confecção de uniformes.', 'quote_page_sidebar')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { origin: 'quote_page_sidebar' })}
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-[6px] text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>WhatsApp: {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Guarantees Box */}
            <div className="p-5 rounded-[4px] bg-white border border-stone-200/90 space-y-3 text-xs text-slate-600 shadow-2xs">
              <h4 className="font-bold text-slate-900 uppercase text-[10px] tracking-wider font-mono">
                Padrões Fabris Natex:
              </h4>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Rigor de Modelagem:</strong> Ficha técnica e tabela de graduação conferidas antes do corte.</span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1B365D] shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Tolerância Zero a Desvios:</strong> Grade padronizada e corte computadorizado.</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Pontualidade Fabril:</strong> Cronograma de produção rastreado até a expedição.</span>
              </div>
            </div>

            {/* Location Box */}
            <div className="p-5 rounded-[4px] bg-white border border-stone-200/90 text-xs text-slate-600 space-y-1.5 shadow-2xs">
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <MapPin className="w-4 h-4 text-[#1B365D]" />
                <span>Parque Fabril & Atendimento</span>
              </div>
              <p>{COMPANY_INFO.address.fullDisplay}</p>
              <p className="text-[11px] text-slate-500">{COMPANY_INFO.operatingHours}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
