import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { COMPANY_INFO } from '../../data/companyData';
import { createWhatsAppLink, trackEvent } from '../../utils/analytics';
import {
  Scissors,
  Layers,
  ShieldCheck,
  Factory,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  FileText,
  Microscope,
  Ruler,
  Clock,
  Sparkles,
  MessageSquare
} from 'lucide-react';

interface ProcessStep {
  id: string;
  stepNumber: string;
  phaseCode: string;
  title: string;
  headline: string;
  shortDescription: string;
  detailedNarrative: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: {
    title: string;
    description: string;
    tag: string;
  }[];
  specifications: {
    sla: string;
    tolerance: string;
    officialDocument: string;
    responsibleTeam: string;
  };
  highlightQuote: string;
}

const PRODUCTION_STAGES: ProcessStep[] = [
  {
    id: 'briefing',
    stepNumber: '01',
    phaseCode: 'PHASE-01 / DIAGNÓSTICO',
    title: 'Briefing Técnico & Demanda',
    headline: 'Mapeamento Funcional e Alinhamento de Especificações',
    shortDescription: 'Levantamento minucioso do perfil de uso, ergonomia exigida e volume pretendido.',
    detailedNarrative:
      'Toda produção de excelência inicia na escuta técnica. Analisamos a rotina operacional das suas equipes ou o posicionamento da sua marca no mercado para definir modelagens, durabilidade necessária e otimização de custo por peça produzida.',
    icon: Scissors,
    deliverables: [
      {
        title: 'Matriz de Requisitos Operacionais',
        description: 'Mapeamento de ergonomia, frequência de lavagens industriais e níveis de estresse têxtil da peça.',
        tag: 'Ergonomia B2B',
      },
      {
        title: 'Benchmarking de Modelagem & Caimento',
        description: 'Análise de peças de referência física ou desenho técnico para calibração exata de caimento.',
        tag: 'Styling & CAD',
      },
      {
        title: 'Estudo de Viabilidade por Grade',
        description: 'Simulação de custos escalonados por faixas de tiragem e definição de grade P ao XGG.',
        tag: 'Engenharia de Custos',
      },
    ],
    specifications: {
      sla: 'Alinhado de acordo com cada projeto',
      tolerance: 'Conformidade de Matriz 100%',
      officialDocument: 'Briefing Técnico de Produção (BTP)',
      responsibleTeam: 'Consultor Técnico Sênior & Estilismo B2B',
    },
    highlightQuote:
      'Antes de comprar um metro de tecido, entendemos rigorosamente o ambiente onde cada uniforme ou peça autoral irá atuar.',
  },
  {
    id: 'materia-prima',
    stepNumber: '02',
    phaseCode: 'PHASE-02 / QUÍMICA & FIOS',
    title: 'Engenharia de Tecidos & Fios',
    headline: 'Curadoria de Fiação Nobre e Homologação Laboratorial',
    shortDescription: 'Seleção das melhores tecelagens do Brasil com garantia de estabilidade dimensional.',
    detailedNarrative:
      'Trabalhamos em parceria direta com as maiores tecelagens do país (Menegotti, Cedro, Santanense, Pettenati). Homologamos fios penteados, tecidos com tratamento anti-pilling e acabamentos especiais para evitar desbotamento prematuro ou encolhimento pós-lavagem.',
    icon: Layers,
    deliverables: [
      {
        title: 'Homologação de Fiação Penteada & Nobre',
        description: 'Algodão 30.1 penteado, tricoline com elastano, piquet estruturado ou brim pesado 100% algodão.',
        tag: 'Matéria-Prima',
      },
      {
        title: 'Laudo de Solidez & Estabilidade Dimensional',
        description: 'Testes de encolhimento e resistência a fricção para assegurar longevidade extrema.',
        tag: 'Normas ABNT',
      },
      {
        title: 'Beneficiamentos Funcionais Sob Demanda',
        description: 'Tratamentos especiais como hidro-repelência, proteção UV 50+ ou acabamento peletizado.',
        tag: 'Química Têxtil',
      },
    ],
    specifications: {
      sla: 'Alinhado de acordo com cada projeto',
      tolerance: 'Taxa de Encolhimento < 3.5%',
      officialDocument: 'Ficha de Homologação de Tecido (FHT)',
      responsibleTeam: 'Engenharia de Materiais & Química Têxtil',
    },
    highlightQuote:
      'Garantimos que o tecido do seu lote número 1 tenha a exata tonalidade, toque e gramatura do lote número 20.',
  },
  {
    id: 'prototipagem',
    stepNumber: '03',
    phaseCode: 'PHASE-03 / PROTOTIPAGEM (PILOTO)',
    title: 'Modelagem CAD & Peça Piloto',
    headline: 'Digitalização de Moldes e Validação Física Pré-Corte',
    shortDescription: 'Confecção da peça física real para aprovação formal antes de liberar o corte em lote.',
    detailedNarrative:
      'O maior diferencial da Natex: digitalizamos moldes no sistema Audaces CAD e confeccionamos uma peça piloto real. Essa amostra é enviada para você experimentar, validar caimento, bolsos e costuras, eliminando qualquer incerteza antes da escala fabril.',
    icon: ShieldCheck,
    deliverables: [
      {
        title: 'Graduação Computadorizada em CAD',
        description: 'Curvas anatômicas desenhadas digitalmente com proporcionalidade milimétrica para todas as numerações.',
        tag: 'Audaces CAD',
      },
      {
        title: 'Costura e Envio de Peça Piloto Real',
        description: 'Amostra confeccionada exatamente com o tecido, aviamentos e acabamentos do pedido final.',
        tag: 'Amostra Física',
      },
      {
        title: 'Ficha Técnica de Homologação Assinada',
        description: 'Documento balizador com fotos, medidas e especificações que rege todo o controle de qualidade.',
        tag: 'Contrato de Rigor',
      },
    ],
    specifications: {
      sla: 'Alinhado de acordo com cada projeto',
      tolerance: 'Tolerância Construtiva ±2.0mm',
      officialDocument: 'Ficha Técnica Homologada (FTH)',
      responsibleTeam: 'Modelista Chefe & Piloteira Especialista',
    },
    highlightQuote:
      'A peça piloto é o contrato de qualidade: nenhuma tesoura entra em ação no corte sem a sua aprovação por escrito.',
  },
  {
    id: 'producao-envio',
    stepNumber: '04',
    phaseCode: 'PHASE-04 / MANUFATURA & LOGÍSTICA',
    title: 'Corte CNC, Costura & Expedição',
    headline: 'Manufatura em Escala Industrial com Rastreabilidade Total',
    shortDescription: 'Corte automatizado, costura reforçada e expedição com entrega para qualquer estado.',
    detailedNarrative:
      'Com a peça piloto aprovada, nosso parque fabril entra em operação. Enfesto alinhado, corte computadorizado com aproveitamento de tecido, células de costura com operadores qualificados, revisão visual peça a peça e logística ágil para todo o território nacional.',
    icon: Factory,
    deliverables: [
      {
        title: 'Enfesto & Corte CNC Automatizado',
        description: 'Precisão matemática de corte que evita torção de fio e garante caimento idêntico em todas as peças.',
        tag: 'Corte Industrial',
      },
      {
        title: 'Costura Reforçada com Ponto Cadeia',
        description: 'Linhas e fios de alta tenacidade com travetes estruturais em bolsos, cós e fendas de tração.',
        tag: 'Alta Durabilidade',
      },
      {
        title: 'Controle de Qualidade Peça a Peça & Frete',
        description: 'Passadoria a vapor, conferência dimensional, embalagem individualizada e rastreio de carga.',
        tag: 'Expedição Nacional',
      },
    ],
    specifications: {
      sla: 'Alinhado de acordo com cada projeto',
      tolerance: 'Auditoria Amostral AQL 2.5',
      officialDocument: 'Relatório de Inspeção Final & Conhecimento de Transporte',
      responsibleTeam: 'Supervisão de Linha & Gerência de Logística B2B',
    },
    highlightQuote:
      'Mais de três décadas de experiência garantem um processo limpo, prazos honrados e entregas seguras de Norte a Sul do Brasil.',
  },
];

export const ProductionProcessFlow: React.FC = () => {
  const { openQuoteModal } = useRouter();
  const [activeStepIndex, setActiveStepIndex] = useState<number>(2); // Default to Phase 03 (Piloto - Key differentiator)

  const activeStage = PRODUCTION_STAGES[activeStepIndex];
  const IconComponent = activeStage.icon;

  const handleSelectStep = (index: number) => {
    setActiveStepIndex(index);
    trackEvent('category_click', { category: PRODUCTION_STAGES[index].id, source: 'process_flow' });
  };

  const handlePrevStep = () => {
    if (activeStepIndex > 0) {
      handleSelectStep(activeStepIndex - 1);
    }
  };

  const handleNextStep = () => {
    if (activeStepIndex < PRODUCTION_STAGES.length - 1) {
      handleSelectStep(activeStepIndex + 1);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FCFAF7] border-y border-stone-200/80 relative overflow-hidden">
      {/* Detalhe de fundo sutil com malha arquitetônica refinada */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e1da_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção com Estética de Design Studio */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-stone-100 border border-stone-200 text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <span>Engenharia de Processo & Rigor Fabril</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Como Funciona a Sua Produção
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Um fluxo produtivo transparente e sem atalhos: da modelagem computadorizada à entrega com controle peça a peça.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>Interaja com as etapas do processo:</span>
          </div>
        </div>

        {/* Trilha Interativa Contínua (Trilha Orgânica e Elegante) */}
        <div className="mb-8 lg:mb-12">
          {/* Linha de Conexão Superior para Telas Maiores */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-stone-200 -translate-y-1/2 hidden md:block z-0" />
            
            {/* Progresso visual sobre a linha */}
            <div 
              className="absolute top-1/2 left-0 h-[2px] bg-[#1B365D] -translate-y-1/2 hidden md:block transition-all duration-500 z-0"
              style={{ width: `${(activeStepIndex / (PRODUCTION_STAGES.length - 1)) * 100}%` }}
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative z-10">
              {PRODUCTION_STAGES.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                const isPassed = idx < activeStepIndex;
                const StepIcon = step.icon;

                return (
                  <button
                    key={step.id}
                    onClick={() => handleSelectStep(idx)}
                    className={`group text-left p-4 sm:p-5 rounded-[4px] border transition-all duration-300 relative cursor-pointer ${
                      isActive
                        ? 'bg-white border-[#1B365D] shadow-md shadow-slate-900/5 ring-1 ring-[#1B365D]/30'
                        : isPassed
                        ? 'bg-white/80 hover:bg-white border-stone-300/80 text-slate-700'
                        : 'bg-stone-50/70 hover:bg-white border-stone-200/90 text-slate-600'
                    }`}
                  >
                    {/* Top bar indicator */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-[2px] transition-colors ${
                        isActive 
                          ? 'bg-[#1B365D] text-white' 
                          : isPassed 
                          ? 'bg-stone-200 text-slate-800' 
                          : 'bg-stone-200/70 text-slate-500'
                      }`}>
                        ETAPA {step.stepNumber}
                      </span>

                      <div className={`transition-colors ${isActive ? 'text-[#FF6B00]' : 'text-slate-400 group-hover:text-slate-600'}`}>
                        <StepIcon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className={`font-display text-sm sm:text-base font-bold leading-snug transition-colors line-clamp-1 ${
                      isActive ? 'text-slate-950 font-extrabold' : 'text-slate-700 group-hover:text-slate-900'
                    }`}>
                      {step.title}
                    </h3>

                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-1 font-normal hidden sm:block">
                      {step.shortDescription}
                    </p>

                    {/* Sutil indicador ativo na base */}
                    {isActive && (
                      <div className="absolute -bottom-1 left-4 right-4 h-0.5 bg-[#FF6B00]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Console Ativo da Etapa — Layout Assimétrico & Editorial de Alto Padrão */}
        <div className="bg-white border border-stone-200/90 rounded-[4px] shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* LADO ESQUERDO (7 Colunas): Narrativa e Entregáveis da Fase */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-stone-200/80 space-y-6">
              
              {/* Badge da Fase */}
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs font-bold text-[#FF6B00] tracking-wider uppercase">
                  {activeStage.phaseCode}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                  <span>Passo {activeStage.stepNumber} de 04</span>
                </div>
              </div>

              {/* Título e Narrativa Principal */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
                  {activeStage.headline}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {activeStage.detailedNarrative}
                </p>
              </div>

              {/* Entregáveis Concretos da Etapa (Cards Técnicos sem Poluição) */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono font-bold uppercase text-slate-600 tracking-wider block">
                  Entregáveis & Ações Desta Fase:
                </span>

                <div className="grid grid-cols-1 gap-2.5">
                  {activeStage.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-[4px] bg-stone-50/80 border border-stone-200/70 hover:border-stone-300 transition-colors flex items-start gap-3.5"
                    >
                      <div className="w-6 h-6 rounded-[2px] bg-white border border-stone-200 flex items-center justify-center shrink-0 mt-0.5 text-[#1B365D]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0 space-y-0.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs sm:text-sm font-bold text-slate-900">
                            {item.title}
                          </span>
                          <span className="font-mono text-[10px] text-stone-500 bg-white px-2 py-0.5 rounded-[2px] border border-stone-200/80 shrink-0">
                            {item.tag}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Citação Técnica Fabril */}
              <div className="p-4 rounded-[4px] bg-stone-100/60 border-l-2 border-[#1B365D] text-xs text-slate-700 italic">
                "{activeStage.highlightQuote}"
              </div>
            </div>

            {/* LADO DIREITO (5 Colunas): Painel de Conformidade & Ações B2B */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-[#FAF9F6] flex flex-col justify-between space-y-8">
              
              <div className="space-y-6">
                {/* Cabeçalho do Passaporte Fabril */}
                <div className="pb-4 border-b border-stone-200/90 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Microscope className="w-4 h-4 text-[#1B365D]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                      Parâmetros de Auditoria Fabril
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" title="Sistema Operando" />
                </div>

                {/* Grade de Especificações da Fase */}
                <div className="space-y-4">
                  <div className="p-3.5 rounded-[4px] bg-white border border-stone-200/90 space-y-1">
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">
                      Cronograma & Prazos
                    </span>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900">
                      <Clock className="w-4 h-4 text-[#FF6B00] shrink-0" />
                      <span>{activeStage.specifications.sla}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-[4px] bg-white border border-stone-200/90 space-y-1">
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">
                      Tolerância Técnica Construtiva
                    </span>
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                      <Ruler className="w-4 h-4 text-[#1B365D]" />
                      <span>{activeStage.specifications.tolerance}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-[4px] bg-white border border-stone-200/90 space-y-1">
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">
                      Documento Emitido
                    </span>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                      <FileText className="w-4 h-4 text-slate-600" />
                      <span>{activeStage.specifications.officialDocument}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-[4px] bg-white border border-stone-200/90 space-y-1">
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">
                      Responsabilidade Técnica
                    </span>
                    <div className="text-xs font-semibold text-slate-800">
                      {activeStage.specifications.responsibleTeam}
                    </div>
                  </div>
                </div>
              </div>

              {/* Controles de Navegação & Ação B2B */}
              <div className="pt-4 border-t border-stone-200/80 space-y-3">
                {/* Botão para avançar/voltar etapa */}
                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={handlePrevStep}
                    disabled={activeStepIndex === 0}
                    className={`px-3 py-2 rounded-[4px] text-xs font-bold border transition-colors flex items-center gap-1.5 cursor-pointer ${
                      activeStepIndex === 0
                        ? 'border-stone-200 text-stone-400 opacity-50 cursor-not-allowed'
                        : 'border-stone-300 bg-white text-slate-700 hover:bg-stone-100'
                    }`}
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Anterior</span>
                  </button>

                  <button
                    onClick={handleNextStep}
                    disabled={activeStepIndex === PRODUCTION_STAGES.length - 1}
                    className={`flex-1 px-4 py-2 rounded-[4px] text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeStepIndex === PRODUCTION_STAGES.length - 1
                        ? 'border-stone-200 text-stone-400 opacity-50 cursor-not-allowed'
                        : 'border-[#1B365D] bg-[#1B365D] text-white hover:bg-[#142847]'
                    }`}
                  >
                    <span>Próxima Etapa ({PRODUCTION_STAGES[Math.min(activeStepIndex + 1, PRODUCTION_STAGES.length - 1)].title})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Call To Action Direto */}
                <button
                  onClick={() => openQuoteModal({ source: `process_step_${activeStage.id}` })}
                  className="w-full py-3 px-4 rounded-[4px] bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs sm:text-sm font-bold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Iniciar Produção com a Natex</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Rodapé do Processo — Garantias Fabris Claras */}
        <div className="mt-8 pt-6 border-t border-stone-200/70 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Peça piloto real para validação sem risco</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Audaces CAD com graduação milimétrica</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Envio com seguro de carga para todo o Brasil</span>
            </span>
          </div>

          <a
            href={createWhatsAppLink(COMPANY_INFO.phoneRaw, `Olá! Gostaria de conversar com a equipe técnica da Natex sobre o processo de produção na etapa: ${activeStage.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { source: 'process_footer' })}
            className="font-bold text-[#1B365D] hover:text-[#FF6B00] transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Falar com Engenheiro Têxtil no WhatsApp →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
