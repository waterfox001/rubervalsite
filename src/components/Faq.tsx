import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS, createWhatsAppUrl } from '../data/content';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-24 bg-white border-t border-neutral-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-[#D97706] uppercase tracking-wider mb-2">
            Tire suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-base text-neutral-600 font-normal">
            Respostas diretas para as dúvidas mais comuns de novos alunos.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-neutral-200 overflow-hidden bg-[#FBFDFB]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-neutral-900 text-sm sm:text-base hover:bg-neutral-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0D3B26]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-8 text-center">
          <p className="text-xs text-neutral-500">
            Ficou com alguma dúvida específica sobre sua situação?
          </p>
          <a
            href={createWhatsAppUrl('Olá, Ruberval! Gostaria de tirar uma dúvida sobre minhas aulas.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#0D3B26] hover:underline"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>Pergunte direto no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
