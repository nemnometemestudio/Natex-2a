import React from 'react';
import { COMPANY_INFO, DIFFERENTIALS } from '../data/companyData';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { PilotPieceHighlight } from '../components/common/PilotPieceHighlight';
import { DifferentialsSection } from '../components/common/DifferentialsSection';
import { useRouter } from '../context/RouterContext';
import { ShieldCheck, Factory, Award, CheckCircle2 } from 'lucide-react';

export const DifferentialsPage: React.FC = () => {
  const { openQuoteModal } = useRouter();

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 pb-20">
      <SEOHead
        title="Diferenciais Industriais da Natex Confecções | Qualidade e Escala B2B"
        description="Descubra por que indústrias, redes e marcas escolhem a Natex: mais de 30 anos de know-how, engenharia de modelagem, corte automático de precisão e atendimento nacional."
      />

      <section className="pt-6 pb-12 sm:pt-10 sm:pb-16 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Diferenciais Competitivos' }]} />

          <div className="mt-4 max-w-3xl space-y-3">
            <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider block">
              Parque Fabril & Know-How
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight text-pretty">
              Diferenciais de uma Verdadeira Indústria Têxtil B2B
            </h1>
            <p className="text-sm sm:text-base text-slate-600 text-pretty leading-relaxed">
              Não somos intermediários e nem uma pequena oficina de bairro: somos uma indústria de confecção estruturada em Santa Catarina com maquinário avançado, fornecedores homologados e processos focados em escala e repetibilidade.
            </p>
          </div>
        </div>
      </section>

      <DifferentialsSection />

      <PilotPieceHighlight showCta={true} />

      {/* Quote Banner */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-[4px] bg-white border border-stone-200/90 shadow-2xs space-y-3">
          <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider block">
            Cotação Comercial Direta da Fábrica
          </span>
          <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
            Sua empresa pronta para produzir com o melhor padrão fabril?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Envie sua demanda para nossa equipe de engenharia e receba a proposta comercial completa com opções de matérias-primas.
          </p>
          <div className="pt-3">
            <button
              onClick={() => openQuoteModal({ source: 'differentials_bottom' })}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold rounded-[6px] shadow-2xs text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <span>Solicitar Orçamento Agora</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
