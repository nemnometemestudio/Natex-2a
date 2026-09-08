import React from 'react';
import { useRouter } from '../context/RouterContext';
import { SEOHead } from '../components/layout/SEOHead';
import { Scissors, Home, Layers } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#080E1E] text-slate-100 px-4 py-20">
      <SEOHead
        title="404 - Essa página saiu de produção | Natex Confecções"
        description="A página que você está procurando não foi encontrada em nossa esteira de produção."
      />

      <div className="max-w-lg w-full text-center space-y-6 p-8 rounded-[4px] bg-[#0F172A] border border-slate-800 shadow-2xl">
        <div className="w-20 h-20 bg-[#6200EA]/20 text-[#FF6B00] rounded-[4px] flex items-center justify-center mx-auto border border-[#6200EA]/30">
          <Scissors className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Essa página saiu de produção.
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            O endereço digitado não existe ou foi remanejado para outra seção do nosso catálogo de confecção.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FF6B00] hover:bg-[#ff7b1a] text-white font-bold rounded-[6px] text-xs transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Voltar para a Natex</span>
          </button>

          <button
            onClick={() => navigate('/catalogo')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-[6px] text-xs transition-colors cursor-pointer"
          >
            <Layers className="w-4 h-4" />
            <span>Conhecer nossas soluções</span>
          </button>
        </div>
      </div>
    </div>
  );
};
