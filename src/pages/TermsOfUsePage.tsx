import React from 'react';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { COMPANY_INFO } from '../data/companyData';
import { FileText, ShieldCheck, Factory, AlertCircle } from 'lucide-react';

export const TermsOfUsePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080E1E] text-slate-100 pb-20">
      <SEOHead
        title="Termos de Uso Comercial | Natex Confecções"
        description="Termos e condições de uso do site institucional, catálogo e solicitações de orçamento da Natex Confecções."
      />

      <section className="pt-8 pb-12 bg-[#0F172A]/80 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Termos de Uso' }]} />

          <div className="mt-4">
            <span className="text-xs font-bold text-[#00B4D8] uppercase tracking-wider">
              Políticas Comerciais B2B
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Termos de Uso do Site e Catálogo Comercial
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Última atualização: {new Date().toLocaleDateString('pt-BR')} • {COMPANY_INFO.name}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div className="bg-[#0F172A] p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Factory className="w-5 h-5 text-[#FF6B00]" />
            1. Natureza do Serviço e Atendimento B2B
          </h2>
          <p>
            A {COMPANY_INFO.name} atua como indústria de confecção voltada exclusivamente para o mercado corporativo (B2B), marcas, magazines e instituições. O conteúdo deste site destina-se à apresentação de soluções fabris, especificações técnicas e canal de solicitação de cotações para compras em lote.
          </p>
        </div>

        <div className="bg-[#0F172A] p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            2. Validação Técnica, Ficha Homologada e Pedidos Formais
          </h2>
          <p>
            As propostas comerciais são personalizadas conforme volume, tipo de tecido e acabamentos desejados. A confecção de lotes industriais é precedida por aprovação formal e alinhamento de especificações, tabelas de medidas e ficha técnica digital entre as partes antes do início do corte.
          </p>
        </div>

        <div className="bg-[#0F172A] p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#00B4D8]" />
            3. Propriedade Intelectual
          </h2>
          <p>
            Todos os textos, layout, marcas registradas e identidades visuais da Natex Confecções são de titularidade exclusiva. No caso de serviços Private Label, a titularidade dos designs e logotipos fornecidos pelos clientes permanece de propriedade irrestrita dos respectivos clientes contratantes.
          </p>
        </div>
      </section>
    </div>
  );
};
