import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { createWhatsAppUrl } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2"
    >
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-neutral-800 text-xs font-semibold py-2 px-3 rounded-lg shadow-md border border-neutral-200">
          <span>Dúvidas? Fale com o Ruberval</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-neutral-600 focus:outline-none"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={createWhatsAppUrl('Olá, Ruberval! Gostaria de tirar dúvidas sobre as aulas de autoescola.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com Ruberval pelo WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </aside>
  );
};
