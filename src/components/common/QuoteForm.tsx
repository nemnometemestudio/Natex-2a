import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { QuoteFormData } from '../../types';
import { createWhatsAppLink, trackEvent } from '../../utils/analytics';

interface QuoteFormProps {
  initialProductType?: string;
  sourceOrigin?: string;
  onSuccess?: () => void;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialProductType = '',
  sourceOrigin = 'formulario_site',
  onSuccess,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    companyName: '',
    contactName: '',
    email: '',
    whatsapp: '',
    city: '',
    state: 'SC',
    productType: initialProductType || 'Uniformes Profissionais',
    estimatedQuantity: '100 a 300 peças',
    segment: 'Indústria / Fábrica',
    hasReferenceModel: 'sim',
    needsModelDevelopment: 'sim',
    wantsPilotPiece: true,
    customizationTypes: ['Bordado Computadorizado'],
    desiredDeadline: 'Prazo padrão programado',
    notes: '',
    attachmentFileName: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const productOptions = [
    'Uniformes Profissionais & Equipes',
    'Uniformes Industriais & Obras (Brim)',
    'Uniformes para Frigoríficos & Câmaras',
    'Uniformes Corporativos & Polos Piquet',
    'Uniformes Escolares & Colégios',
    'Private Label / Confecção para Marcas',
    'Camisetas Promocionais & Eventos',
    'Wind Banners & Bandeiras',
    'Outro Projeto Têxtil'
  ];

  const quantityRanges = [
    '50 a 150 peças',
    '150 a 300 peças',
    '300 a 500 peças',
    '500 a 1.000 peças',
    'Acima de 1.000 peças (escala)'
  ];

  const customizationOptions = [
    'Bordado Computadorizado',
    'Silk Screen Têxtil',
    'Sublimação Total Digital',
    'DTF Têxtil',
    'Faixas Refletivas',
    'Etiquetas Personalizadas'
  ];

  const handleCustomizationToggle = (option: string) => {
    setFormData(prev => {
      const exists = prev.customizationTypes.includes(option);
      return {
        ...prev,
        customizationTypes: exists
          ? prev.customizationTypes.filter(item => item !== option)
          : [...prev.customizationTypes, option]
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.companyName.trim() || !formData.contactName.trim() || !formData.whatsapp.trim()) {
      setErrorMessage('Por favor, preencha o Nome da Empresa, Responsável e WhatsApp.');
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 600));

      trackEvent('quote_form_submit', {
        company: formData.companyName,
        product: formData.productType,
        quantity: formData.estimatedQuantity,
        segment: formData.segment,
        origin: sourceOrigin,
      });

      setIsSuccess(true);
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setErrorMessage('Ocorreu um erro ao processar sua solicitação. Tente novamente ou use o WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppSummary = () => {
    const text = `*SOLICITAÇÃO DE ORÇAMENTO — NATEX CONFECÇÕES*
*Empresa:* ${formData.companyName}
*Responsável:* ${formData.contactName}
*WhatsApp:* ${formData.whatsapp}
*E-mail:* ${formData.email || 'Não informado'}
*Localização:* ${formData.city || 'Navegantes'} / ${formData.state}
*O que deseja produzir:* ${formData.productType}
*Quantidade estimada:* ${formData.estimatedQuantity}
*Alinhamento de Ficha Técnica/Medidas:* ${formData.wantsPilotPiece ? 'Sim' : 'Não'}
*Personalizações:* ${formData.customizationTypes.join(', ') || 'A definir'}
*Observações:* ${formData.notes || 'Sem observações adicionais'}`;

    return createWhatsAppLink(text, 'form_success');
  };

  if (isSuccess) {
    return (
      <div className="bg-slate-50 border border-emerald-300 rounded-[4px] p-6 sm:p-8 text-center text-slate-800 animate-in zoom-in-95 duration-200">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-1">
          Solicitação Recebida com Sucesso!
        </h3>
        
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-5 leading-relaxed">
          Obrigado, <strong className="text-slate-900">{formData.contactName}</strong> da <strong className="text-slate-900">{formData.companyName}</strong>. 
          Nossos consultores técnicos entrarão em contato em breve.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={generateWhatsAppSummary()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 bg-[#FF6B00] hover:bg-[#ff7b1a] text-white font-bold rounded-[6px] text-xs shadow-xs transition-all"
          >
            <span>Acelerar no WhatsApp</span>
          </a>
          
          <button
            onClick={() => setIsSuccess(false)}
            className="w-full sm:w-auto px-4 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-[6px] text-xs transition-colors cursor-pointer"
          >
            Nova Cotação
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-slate-800">
      {errorMessage && (
        <div className="p-3 rounded-[4px] bg-red-50 border border-red-200 flex items-center gap-2 text-red-700 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Section 1: Dados da Empresa */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
          1. Dados da Empresa & Contato
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Nome da Empresa *
            </label>
            <input
              type="text"
              required
              placeholder="Sua Empresa Ltda"
              value={formData.companyName}
              onChange={e => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-[4px] text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#1B365D]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Responsável / Cargo *
            </label>
            <input
              type="text"
              required
              placeholder="Seu Nome"
              value={formData.contactName}
              onChange={e => setFormData({ ...formData, contactName: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-[4px] text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#1B365D]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              WhatsApp com DDD *
            </label>
            <input
              type="tel"
              required
              placeholder="(47) 99999-9999"
              value={formData.whatsapp}
              onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-[4px] text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#1B365D]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              E-mail Corporativo
            </label>
            <input
              type="email"
              placeholder="contato@suaempresa.com"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-[4px] text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#1B365D]"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Especificações do Projeto */}
      <div className="space-y-3 pt-2 border-t border-slate-100">
        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
          2. Especificações do Lote
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Tipo de Produto
            </label>
            <select
              value={formData.productType}
              onChange={e => setFormData({ ...formData, productType: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-[4px] text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-[#1B365D]"
            >
              {productOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Volume Estimado
            </label>
            <select
              value={formData.estimatedQuantity}
              onChange={e => setFormData({ ...formData, estimatedQuantity: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-[4px] text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-[#1B365D]"
            >
              {quantityRanges.map(qty => (
                <option key={qty} value={qty}>{qty}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Customizations */}
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1.5">
            Personalizações Desejadas
          </label>
          <div className="flex flex-wrap gap-1.5">
            {customizationOptions.map(opt => {
              const active = formData.customizationTypes.includes(opt);
              return (
                <button
                  type="button"
                  key={opt}
                  onClick={() => handleCustomizationToggle(opt)}
                  className={`px-2.5 py-1 rounded-[4px] text-xs transition-colors cursor-pointer ${
                    active
                      ? 'bg-slate-900 text-white font-medium'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {/* Alinhamento de Medidas Check */}
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-[4px] flex items-center justify-between">
          <span className="text-xs text-slate-700 font-medium">
            Deseja alinhamento prévio de tabela de medidas e ficha técnica personalizada?
          </span>
          <input
            type="checkbox"
            checked={formData.wantsPilotPiece}
            onChange={e => setFormData({ ...formData, wantsPilotPiece: e.target.checked })}
            className="w-4 h-4 text-emerald-600 rounded cursor-pointer"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Observações ou Detalhes Técnicos
          </label>
          <textarea
            rows={2}
            placeholder="Informe detalhes sobre tecidos, cores, prazos ou especificações..."
            value={formData.notes}
            onChange={e => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-[4px] text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#1B365D]"
          />
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-[#FF6B00] hover:bg-[#ff7b1a] disabled:opacity-50 text-white font-bold text-xs rounded-[6px] shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? 'Enviando Proposta...' : 'Enviar Solicitação de Orçamento'}</span>
        </button>
      </div>
    </form>
  );
};
