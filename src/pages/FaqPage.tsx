import React from 'react';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { GENERAL_FAQS } from '../data/companyData';

export const FaqPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080E1E] text-slate-100 pb-20">
      <SEOHead
        title="Dúvidas Frequentes sobre Confecção de Uniformes & B2B | Natex"
        description="Tire suas dúvidas sobre lote de uniformes, modelagem e ficha técnica, tecidos homologados, private label, formas de envio e atendimento nacional da Natex Confecções."
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': GENERAL_FAQS.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.answer
            }
          }))
        }}
      />

      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-[#0F172A]/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Perguntas Frequentes (FAQ)' }]} />

          <div className="mt-4 max-w-3xl">
            <span className="text-xs font-bold text-[#00B4D8] uppercase tracking-wider">
              Central de Ajuda & Esclarecimentos
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Perguntas Frequentes sobre a Natex Confecções
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Respostas diretas e transparentes sobre nosso processo industrial, políticas comerciais B2B, prazos, desenvolvimento de modelos e entregas para todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-4">
        <FAQAccordion showSearch={true} />
      </div>
    </div>
  );
};
