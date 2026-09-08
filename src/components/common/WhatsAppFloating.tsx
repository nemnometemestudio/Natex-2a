import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { createWhatsAppLink, trackEvent } from '../../utils/analytics';
import { useRouter } from '../../context/RouterContext';

export const WhatsAppFloating: React.FC = () => {
  const { currentPath } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const getContextMessage = () => {
    if (currentPath.includes('private-label')) {
      return 'Olá! Gostaria de conversar com um consultor sobre produção Private Label para minha marca.';
    }
    if (currentPath.includes('frigorifico')) {
      return 'Olá! Gostaria de solicitar um orçamento de uniformes térmicos para frigorífico.';
    }
    if (currentPath.includes('industrial')) {
      return 'Olá! Gostaria de solicitar um orçamento para uniformes industriais e operacionais.';
    }
    if (currentPath.includes('corporativo')) {
      return 'Olá! Gostaria de cotar camisas polo e uniformes corporativos para minha empresa.';
    }
    return 'Olá! Gostaria de solicitar um orçamento de confecção sob medida com a Natex.';
  };

  const handleWhatsAppClick = (customMsg?: string) => {
    const message = customMsg || getContextMessage();
    trackEvent('whatsapp_click', {
      origin: 'floating_button',
      path: currentPath,
      message,
    });
    window.open(createWhatsAppLink(message, 'floating_widget'), '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end print:hidden">
      {/* Popover Card (Minimalist Clean White) */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2rem)] rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl p-4 text-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Atendimento Comercial</h4>
                <p className="text-[10px] text-slate-500">Natex Confecções • Navegantes/SC</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-lg transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 mb-3 leading-relaxed">
            Precisa de orçamento de uniformes, private label ou materiais têxteis em escala?
          </p>

          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 text-[11px] text-slate-600 mb-3 space-y-0.5">
            <span className="text-emerald-700 font-semibold block">✓ Alinhamento técnico e modelagem</span>
            <span>✓ Atendimento para todo o Brasil</span>
          </div>

          <button
            onClick={() => handleWhatsAppClick()}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Fale com o nosso comercial</span>
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Fale com nossa equipe de vendas"
        className="group relative flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl shadow-slate-900/15 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-emerald-500/50"
      >
        <MessageSquare className="w-5 h-5 shrink-0" />
        <span className="text-xs font-bold whitespace-nowrap hidden sm:inline">
          Fale com nossa equipe de vendas
        </span>
      </button>
    </div>
  );
};
