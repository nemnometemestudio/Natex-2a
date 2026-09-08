import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { QuoteForm } from './QuoteForm';
import { BrandLogo } from './BrandLogo';

export const QuoteFormModal: React.FC = () => {
  const { isQuoteModalOpen, closeQuoteModal, quoteModalContext } = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isQuoteModalOpen) {
        closeQuoteModal();
      }
    };

    if (isQuoteModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isQuoteModalOpen, closeQuoteModal]);

  if (!isQuoteModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl my-8 bg-white border border-stone-200 rounded-[4px] shadow-xl overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50">
          <BrandLogo variant="dark" size="sm" />
          <button
            onClick={closeQuoteModal}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-[4px] hover:bg-stone-200 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          <div className="mb-6 space-y-1">
            <span className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider font-mono">
              Cotação Industrial Direta da Fábrica
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Solicitar Orçamento B2B
            </h2>
            <p className="text-xs text-slate-500">
              Preencha os dados da sua empresa para receber a proposta técnica.
            </p>
          </div>

          <QuoteForm
            initialProductType={quoteModalContext.productType}
            sourceOrigin={quoteModalContext.source || 'modal_orcamento'}
            onSuccess={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
