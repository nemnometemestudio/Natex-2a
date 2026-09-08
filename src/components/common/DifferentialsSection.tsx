import React from 'react';
import { DIFFERENTIALS, COMPANY_INFO } from '../../data/companyData';
import { Factory, ShieldCheck, Award, Maximize2, Briefcase, MapPin } from 'lucide-react';

export const DifferentialsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Factory: Factory,
    ShieldCheck: ShieldCheck,
    Award: Award,
    Maximize2: Maximize2,
    Briefcase: Briefcase,
    MapPin: MapPin,
  };

  return (
    <section className="relative py-16 sm:py-20 bg-white border-y border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-2">
          <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider block">
            Engenharia & Confiabilidade Têxtil
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-pretty">
            Por que produzir com a Natex Confecções?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 text-pretty">
            Combinamos mais de {COMPANY_INFO.experienceYears} anos de experiência têxtil com uma esteira produtiva moderna para entregar o melhor padrão de confecção B2B do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIFFERENTIALS.map((diff) => {
            const IconComponent = iconMap[diff.icon] || Award;

            return (
              <div
                key={diff.id}
                className="p-5 sm:p-6 rounded-[4px] bg-[#FAF9F6] border border-stone-200/80 hover:border-[#1B365D]/60 transition-all flex flex-col justify-between group shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[4px] bg-white border border-stone-200 text-[#1B365D] flex items-center justify-center transition-colors group-hover:bg-[#1B365D] group-hover:text-white">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {diff.highlight && (
                      <span className="px-2 py-0.5 rounded-[2px] bg-stone-100 border border-stone-200/80 text-[10px] font-mono font-medium text-slate-700">
                        {diff.highlight}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#1B365D] transition-colors">
                    {diff.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
