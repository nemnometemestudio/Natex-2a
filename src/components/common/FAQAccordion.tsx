import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQItem } from '../../types';
import { GENERAL_FAQS, COMPANY_INFO } from '../../data/companyData';
import { createWhatsAppLink, trackEvent } from '../../utils/analytics';

interface FAQAccordionProps {
  customFaqs?: { question: string; answer: string }[];
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  customFaqs,
  title = 'Perguntas Frequentes sobre a Natex',
  subtitle = 'Tire suas dúvidas técnicas e comerciais sobre prazos, modelagem e atendimento.',
  showSearch = false,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const faqsToDisplay: FAQItem[] = customFaqs
    ? customFaqs.map((f, i) => ({
        id: `custom-faq-${i}`,
        category: 'geral',
        question: f.question,
        answer: f.answer,
      }))
    : GENERAL_FAQS;

  const categories = [
    { id: 'todos', label: 'Todas as Dúvidas' },
    { id: 'geral', label: 'Geral & Empresa' },
    { id: 'producao', label: 'Produção & Modelagem' },
    { id: 'uniformes', label: 'Uniformes' },
    { id: 'private-label', label: 'Private Label' },
  ];

  const filteredFaqs = faqsToDisplay.filter(faq => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = activeCategory === 'todos' || faq.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-white/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-[4px] bg-stone-100 border border-stone-200 text-slate-700 text-[11px] font-bold uppercase tracking-wider font-mono">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Perguntas Frequentes & Suporte B2B</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Optional Search and Categories */}
        {showSearch && (
          <div className="mb-6 space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar dúvida técnica ou comercial..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-[4px] text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 shadow-2xs focus:outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D]/20"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {categories.map(c => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-3 py-1.5 rounded-[4px] text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    activeCategory === c.id
                      ? 'bg-[#1B365D] text-white shadow-2xs'
                      : 'bg-stone-100 text-slate-600 hover:text-slate-900 hover:bg-stone-200/70 border border-stone-200/80'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Accordion items with clean depth */}
        <div className="space-y-2.5">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 bg-stone-50 rounded-[4px] border border-stone-200 text-slate-500 text-xs">
              Nenhuma pergunta encontrada para sua busca.
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id || index}
                  className={`rounded-[4px] border transition-all duration-150 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-stone-300 shadow-2xs'
                      : 'bg-white border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-slate-900 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4 leading-snug">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-150 ${
                        isOpen ? 'rotate-180 text-[#1B365D]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-stone-100 pt-3">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Contact CTA below FAQ */}
        <div className="mt-10 p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div>
            <h4 className="text-base font-bold text-slate-900">Tem outra dúvida técnica?</h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Nossos especialistas atendem você diretamente pelo WhatsApp oficial.
            </p>
          </div>

          <a
            href={createWhatsAppLink('Olá! Tenho uma dúvida sobre produção com a Natex Confecções.', 'faq_section')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { origin: 'faq_cta' })}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-all shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
