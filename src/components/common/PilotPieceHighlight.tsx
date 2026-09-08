import React from 'react';
import { ShieldCheck, Check, Eye, Scissors, Ruler, Layers } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';

export const PilotPieceHighlight: React.FC<{ showCta?: boolean }> = ({ showCta = true }) => {
  const { openQuoteModal } = useRouter();

  const benefits = [
    {
      icon: Ruler,
      title: 'Engenharia de Medidas & Modelagem',
      desc: 'Graduação computadorizada e tabelas de medidas conferidas para garantir caimento ergonômico no uso diário.'
    },
    {
      icon: Layers,
      title: 'Tecidos Homologados & Fiações de Ponta',
      desc: 'Gramatura, solidez de cor e estabilidade dimensional verificadas para suportar lavagens contínuas.'
    },
    {
      icon: Scissors,
      title: 'Fidelidade de Bordados e Cores',
      desc: 'Alinhamento preciso de pantone, definição milimétrica de bordados computadorizados e acabamentos têxteis.'
    },
    {
      icon: Eye,
      title: 'Ficha Técnica & Homologação',
      desc: 'Cada detalhe de aviamentos, costuras e personalizações é registrado formalmente antes da liberação fabril.'
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#FAF9F6] border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Antes de produzir em escala,{' '}
              <span className="text-[#1B365D]">
                validamos cada especificação técnica.
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Produzir uniformes ou coleções em lote exige precisão absoluta e previsibilidade. 
              Na Natex, o início do corte é precedido por rigoroso alinhamento de modelagens, 
              tecidos homologados, tabela de graduação e especificações de acabamento. 
              Todas as medidas, tolerâncias de costura e personalizações são validadas formalmente em ficha técnica digital antes da liberação do lote de corte.
            </p>

            <div className="p-4 sm:p-5 rounded-[4px] bg-white border border-stone-200/90 shadow-xs flex items-start gap-4">
              <div className="p-2 rounded-[4px] bg-emerald-50 border border-emerald-200 text-emerald-800 shrink-0 mt-0.5">
                <Check className="w-5 h-5" />
              </div>
              <div className="text-sm text-slate-600 space-y-1">
                <strong className="text-slate-900 block font-bold">Padronização e previsibilidade para sua empresa</strong>
                <p className="text-xs sm:text-sm">100% das peças entregues seguem rigorosamente a ficha técnica homologada, tolerâncias industriais e costuras reforçadas.</p>
              </div>
            </div>

            {showCta && (
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={() => openQuoteModal({ source: 'pilot_piece_highlight' })}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs sm:text-sm rounded-[6px] shadow-sm transition-all hover:translate-y-[-1px] cursor-pointer whitespace-nowrap"
                >
                  <span>Solicitar Orçamento & Consultoria Técnica</span>
                </button>
                <span className="text-xs text-slate-500 font-medium">
                  Atendimento para todo o Brasil
                </span>
              </div>
            )}
          </div>

          {/* Right Column: 4 Key Validation Steps Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {benefits.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-[4px] bg-white border border-stone-200/90 shadow-xs hover:shadow-md hover:border-[#1B365D]/60 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-[4px] bg-stone-100 text-[#1B365D] border border-stone-200/70 flex items-center justify-center mb-3.5 group-hover:bg-[#1B365D] group-hover:text-white transition-colors">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
