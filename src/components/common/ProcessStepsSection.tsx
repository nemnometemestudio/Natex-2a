import React from 'react';
import { PRODUCTION_STEPS } from '../../data/companyData';
import { Search, Layers, Shirt, CheckCircle2, Scissors, Cpu, Truck } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';

export const ProcessStepsSection: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { openQuoteModal } = useRouter();

  const iconMap: Record<string, React.ElementType> = {
    SearchCheck: Search,
    Layers: Layers,
    Shirt: Shirt,
    CheckCircle2: CheckCircle2,
    Scissors: Scissors,
    Cpu: Cpu,
    Truck: Truck,
  };

  return (
    <section className="relative py-16 sm:py-20 bg-[#FAF9F6] border-y border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider block mb-1">
            Metodologia & Controle Fabril
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-pretty">
            Fluxo de Produção Industrial em 7 Etapas Controladas
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 text-pretty">
            A Natex opera um fluxo rigoroso de engenharia têxtil para garantir escala, fidelidade milimétrica e pontualidade na entrega de uniformes e peças B2B.
          </p>
        </div>

        {/* 7 Steps Visual Timeline / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {PRODUCTION_STEPS.map((step) => {
            const IconComponent = iconMap[step.icon] || CheckCircle2;
            const isPilotStep = step.number === 3;

            return (
              <div
                key={step.number}
                className={`relative p-5 sm:p-6 rounded-[4px] bg-white border transition-all flex flex-col justify-between ${
                  isPilotStep
                    ? 'border-[#1B365D] ring-1 ring-[#1B365D]/30 shadow-sm'
                    : 'border-stone-200/90 shadow-2xs hover:border-stone-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`w-7 h-7 rounded-[4px] flex items-center justify-center font-mono font-bold text-xs ${
                      isPilotStep
                        ? 'bg-[#FF6B00] text-white'
                        : 'bg-stone-100 text-[#1B365D] border border-stone-200'
                    }`}>
                      0{step.number}
                    </span>

                    <div className={`p-2 rounded-[4px] ${
                      isPilotStep ? 'bg-[#1B365D]/10 text-[#1B365D]' : 'bg-stone-50 text-slate-600 border border-stone-200/80'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {isPilotStep && (
                    <span className="inline-block px-2 py-0.5 rounded-[2px] bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider mb-2 border border-emerald-200">
                      ★ Homologação Prévia
                    </span>
                  )}

                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                    {step.shortDesc}
                  </p>

                  <p className="text-[11px] text-slate-500 leading-relaxed border-t border-stone-100 pt-2">
                    {step.detailedDesc}
                  </p>
                </div>

                {/* Deliverable tag */}
                <div className="mt-3 pt-2.5 border-t border-stone-100 text-[11px] text-slate-700 bg-stone-50/70 p-2 rounded-[3px]">
                  <strong className="text-slate-900 block text-[9px] uppercase tracking-wider font-mono">Entregável:</strong>
                  {step.deliverable}
                </div>
              </div>
            );
          })}

          {/* 8th card: CTA Card */}
          <div className="p-5 sm:p-6 rounded-[4px] bg-[#1B365D] text-white flex flex-col justify-between shadow-sm">
            <div>
              <span className="inline-block px-2 py-0.5 rounded-[2px] bg-white/15 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                Consultoria Fabril
              </span>
              <h3 className="text-lg font-bold mb-2 text-white">
                Pronto para produzir com padrão industrial?
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                Envie o briefing da sua empresa e receba orientação de tecidos, grade de modelagem e custos direto da fábrica.
              </p>
            </div>

            <button
              onClick={() => openQuoteModal({ source: 'process_card_cta' })}
              className="mt-4 w-full flex items-center justify-center py-2.5 px-3 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold rounded-[4px] text-xs transition-colors cursor-pointer"
            >
              <span>Solicitar Cotação</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
