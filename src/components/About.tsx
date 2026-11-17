import React from 'react';
import { MessageCircle, Check } from 'lucide-react';
import { useWhatsAppModal } from '../context/WhatsAppContext';
import { SafeImage } from './SafeImage';
import { Reveal } from './Reveal';

export const About: React.FC = () => {
  const { openWhatsAppModal } = useWhatsAppModal();
  return (
    <section id="sobre" className="py-20 md:py-24 bg-[#FBFDFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Natural In-Car Lesson Photo */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <SafeImage
                    src="/images/car_lesson.jpg"
                    alt="Aluna durante aula prática de direção veicular com acompanhamento em Fortaleza"
                    className="w-full h-full object-cover block"
                    loading="lazy"
                    fallbackTitle="Aula prática no trânsito"
                  />
                </div>
                <div className="p-4 bg-white border-t border-neutral-200 text-xs text-neutral-600">
                  <p className="font-medium text-neutral-800">
                    Instrução prática com tranquilidade no trânsito real de Fortaleza.
                  </p>
                  <p className="text-neutral-500 mt-0.5">
                    Respeito ao tempo e às dúvidas de cada aluno.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Institutional Story */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="text-xs font-bold text-[#D97706] uppercase tracking-wider mb-2">
                Sobre a Trajetória
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight text-balance">
                Experiência que transforma alunos em bons condutores.
              </h2>

              <div className="mt-6 space-y-4 text-neutral-700 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Com mais de <strong>27 anos de experiência</strong> na formação de condutores,{' '}
                  <strong>Ruberval</strong> construiu sua trajetória ajudando milhares de pessoas a
                  conquistarem sua habilitação. São mais de <strong>9 mil alunos capacitados</strong>,
                  sempre com dedicação, paciência e compromisso com um ensino responsável.
                </p>
                <p className="text-neutral-600 text-base">
                  Para muitas pessoas, aprender a dirigir é um grande desafio acompanhado de insegurança,
                  medo do trânsito ou receio de errar a baliza. A metodologia do Ruberval prioriza um
                  ambiente calmo, seguro e didático, onde o aluno aprende de verdade sem se sentir pressionado.
                </p>
              </div>

              {/* Checklist of Teaching Values */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#0D3B26] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm text-neutral-800 font-medium">
                    Instrutor oficial credenciado de trânsito
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#0D3B26] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm text-neutral-800 font-medium">
                    Didática paciente, sem broncas ou estresse
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#0D3B26] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm text-neutral-800 font-medium">
                    Treino específico no percurso do Detran-CE
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#0D3B26] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm text-neutral-800 font-medium">
                    Apoio especial para quem tem medo ou trauma
                  </span>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => openWhatsAppModal()}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0D3B26] hover:bg-[#072417] rounded-xl transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D3B26] focus-visible:ring-offset-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#EAB308]" />
                  <span>Falar diretamente com o Ruberval</span>
                </button>
              </div>

            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};
