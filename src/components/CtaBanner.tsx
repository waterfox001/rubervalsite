import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { INSTRUCTOR_INFO, createWhatsAppUrl } from '../data/content';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0D3B26] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="text-xs font-semibold uppercase tracking-wider text-[#EAB308] mb-3">
          Atendimento em Fortaleza – CE
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white text-balance">
          Seu próximo passo começa aqui!
        </h2>

        <p className="mt-4 text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed font-normal text-pretty">
          Prepare-se para conquistar sua habilitação com acompanhamento e experiência de quem entende do assunto.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={createWhatsAppUrl('Olá, Ruberval! Gostaria de conversar com você sobre as aulas de autoescola.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-bold text-[#0D3B26] bg-[#EAB308] hover:bg-[#F59E0B] rounded-xl transition-colors shadow-xs"
          >
            <MessageCircle className="w-5 h-5 text-[#0D3B26]" />
            <span>Fale comigo pelo WhatsApp</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </a>
        </div>

        <div className="mt-6 text-xs text-emerald-200/70">
          <span>Telefone direto: </span>
          <a
            href={`tel:${INSTRUCTOR_INFO.phoneRaw}`}
            className="font-semibold text-white underline hover:text-[#EAB308]"
          >
            {INSTRUCTOR_INFO.phoneDisplay}
          </a>
          <span className="mx-2">·</span>
          <span>Mais de 27 anos de credibilidade</span>
        </div>

      </div>
    </section>
  );
};
