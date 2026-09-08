import React from 'react';
import { PRODUCTION_STEPS } from '../../src/data/companyData';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { PilotPieceHighlight } from '../components/common/PilotPieceHighlight';
import { useRouter } from '../context/RouterContext';
import { Search, Layers, Shirt, CheckCircle2, Scissors, Cpu, Truck, ShieldCheck } from 'lucide-react';

export const ProcessPage: React.FC = () => {
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
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 pb-20">
      <SEOHead
        title="Processo de Produção Industrial Têxtil em 7 Etapas | Natex Confecções"
        description="Conheça o método de engenharia têxtil em 7 etapas da Natex: consultoria, seleção de tecido, modelagem e ficha técnica, corte automático, costura, controle de qualidade e expedição."
      />

      <section className="pt-6 pb-12 sm:pt-10 sm:pb-16 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Processo de Produção Industrial' }]} />

          <div className="mt-4 max-w-3xl space-y-3">
            <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider block">
              Engenharia Fabril em Navegantes/SC
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight text-pretty">
              Processo de Produção em 7 Etapas Controladas
            </h1>
            <p className="text-sm sm:text-base text-slate-600 text-pretty leading-relaxed">
              A confecção de uniformes e peças em escala exige um fluxo rigoroso para eliminar divergências de medidas, variações de tingimento e atrasos de entrega. Conheça a esteira de produção da Natex do briefing ao lote expedido:
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Step-by-Step Sections */}
      <section className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {PRODUCTION_STEPS.map((step) => {
          const Icon = iconMap[step.icon] || CheckCircle2;
          const isPilot = step.number === 3;

          return (
            <div
              key={step.number}
              className={`p-6 sm:p-8 rounded-[4px] bg-white border transition-all ${
                isPilot
                  ? 'border-[#1B365D] ring-1 ring-[#1B365D]/20 shadow-sm'
                  : 'border-stone-200/90 shadow-2xs'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5">
                  <span className={`w-10 h-10 rounded-[4px] flex items-center justify-center font-mono font-bold text-sm ${
                    isPilot ? 'bg-[#FF6B00] text-white' : 'bg-stone-100 text-[#1B365D] border border-stone-200'
                  }`}>
                    0{step.number}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Etapa Industrial
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                      {step.title}
                    </h2>
                  </div>
                </div>

                <div className="p-2.5 rounded-[4px] bg-stone-50 border border-stone-200/80 text-slate-600 self-start sm:self-auto">
                  <Icon className="w-5 h-5 text-[#1B365D]" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {step.detailedDesc}
              </p>

              <div className="p-3.5 rounded-[4px] bg-[#FAF9F6] border border-stone-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                <span className="text-slate-600">
                  <strong className="text-slate-900 uppercase tracking-wider text-[10px] font-mono block sm:inline mr-2">Entregável da fase:</strong>
                  {step.deliverable}
                </span>

                {isPilot && (
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold shrink-0 bg-emerald-50 px-2 py-0.5 rounded-[2px] border border-emerald-200 text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Validação em Mãos
                  </span>
                )}
              </div>
            </div>
          );
        })}

        <div className="text-center pt-6">
          <button
            onClick={() => openQuoteModal({ source: 'process_page_bottom' })}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold rounded-[6px] shadow-2xs text-sm transition-colors cursor-pointer"
          >
            <span>Iniciar Projeto com a Engenharia Natex</span>
          </button>
        </div>
      </section>

      <PilotPieceHighlight showCta={false} />
    </div>
  );
};
