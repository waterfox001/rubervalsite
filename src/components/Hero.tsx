import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { useWhatsAppModal } from '../context/WhatsAppContext';
import { SafeImage } from './SafeImage';

export const Hero: React.FC = () => {
  const { openWhatsAppModal } = useWhatsAppModal();
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-28 pb-16 md:pt-36 md:pb-20 bg-white border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Direct, human presentation */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Subtle credential line */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#0D3B26] mb-4">
              <span className="inline-flex items-center gap-1.5 text-[#0D3B26]">
                <ShieldCheck className="w-4 h-4 text-[#D97706]" />
                Instrutor Credenciado de Trânsito
              </span>
              <span className="text-neutral-300" aria-hidden="true">·</span>
              <span className="text-neutral-600">Fortaleza – CE</span>
              <span className="text-neutral-300" aria-hidden="true">·</span>
              <span className="text-[#0D3B26]">Categorias A e B</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.18] text-balance">
              Aprenda a dirigir com quem entende de ensinar.
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl text-pretty font-normal">
              Experiência, paciência e dedicação para preparar você para o trânsito com confiança e responsabilidade.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={() => openWhatsAppModal()}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#0D3B26] hover:bg-[#072417] rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D3B26] focus-visible:ring-offset-2 shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-[#EAB308]" />
                <span>Quero aprender a dirigir</span>
              </button>

              <a
                href="#sobre"
                onClick={(e) => handleScrollTo(e, '#sobre')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-neutral-800 bg-neutral-50 hover:bg-neutral-100 rounded-xl border border-neutral-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
              >
                <span>Conheça meu trabalho</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </a>
            </div>

            {/* Grounded Key Facts Row */}
            <div className="mt-10 pt-8 border-t border-neutral-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0D3B26] tracking-tight tabular-nums">
                  27+ anos
                </p>
                <p className="text-xs text-neutral-600 mt-0.5">
                  De experiência comprovada
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0D3B26] tracking-tight tabular-nums">
                  +9.000
                </p>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Alunos capacitados
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0D3B26] tracking-tight">
                  Credenciado
                </p>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Formação oficial no trânsito
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#D97706] tracking-tight">
                  A e B
                </p>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Moto e Carro
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Genuine, clean photograph */}
          <div className="lg:col-span-5">
            <div className="max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-950 shadow-sm">
              <div className="aspect-square w-full overflow-hidden">
                <SafeImage
                  src="/images/ruberval_portrait.jpg"
                  alt="Ruberval – Instrutor de Autoescola em Fortaleza ao lado do veículo de treinamento"
                  className="w-full h-full object-cover object-center block"
                  loading="eager"
                  fallbackTitle="Ruberval – Instrutor de Autoescola"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
