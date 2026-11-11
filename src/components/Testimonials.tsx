import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, INSTRUCTOR_INFO } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-20 md:py-24 bg-white border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-[#D97706] uppercase tracking-wider mb-2">
            Avaliações do Google
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
            Depoimentos de Alunos
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 text-pretty font-normal">
            Opinião espontânea de quem aprendeu na prática com o instrutor Ruberval.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Summary Box */}
          <div className="lg:col-span-4 bg-[#FBFDFB] p-6 rounded-2xl border border-neutral-200">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-extrabold text-neutral-900 tabular-nums">5.0</span>
              <div>
                <div className="flex items-center text-[#EAB308]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#EAB308] text-[#EAB308]" />
                  ))}
                </div>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Avaliação no Perfil da Empresa no Google
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs text-neutral-600 leading-relaxed">
              Avaliações reais deixadas diretamente por alunos no Google Maps.
            </p>

            <a
              href={INSTRUCTOR_INFO.googleMaps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#0D3B26] bg-white border border-neutral-300 hover:bg-neutral-50 rounded-lg transition-colors"
            >
              <span>Ver no Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Testimonial Card */}
          <div className="lg:col-span-8">
            {TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="bg-[#FBFDFB] rounded-2xl p-6 sm:p-8 border border-neutral-200"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0D3B26] text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {review.avatarText}
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 text-sm">
                        {review.author}
                      </h3>
                      <p className="text-xs text-neutral-500">
                        {review.reviewDate}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-[#EAB308]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#EAB308] text-[#EAB308]" />
                    ))}
                  </div>
                </div>

                <blockquote className="mt-4 text-neutral-800 text-base sm:text-lg leading-relaxed italic font-normal">
                  "{review.text}"
                </blockquote>
              </div>
            ))}

            <div className="mt-4 text-right">
              <a
                href={INSTRUCTOR_INFO.googleMaps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#0D3B26] hover:underline inline-flex items-center gap-1"
              >
                <span>Avaliar o Ruberval no Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
