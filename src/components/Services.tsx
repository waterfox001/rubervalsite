import React from 'react';
import { Bike, Car, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { SERVICES, createWhatsAppUrl } from '../data/content';

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 md:py-24 bg-white border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-[#D97706] uppercase tracking-wider mb-2">
            Aulas Práticas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
            Serviços e Categorias
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 text-pretty font-normal">
            Treinamento focado no domínio real do veículo, na segurança do trânsito e na preparação completa para o exame do Detran.
          </p>
        </div>

        {/* Two Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#FBFDFB] rounded-2xl overflow-hidden border border-neutral-200/90 flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 px-3 py-1 rounded-md text-xs font-bold text-neutral-900 border border-neutral-200 flex items-center gap-1.5 shadow-xs">
                    {service.code === 'A' ? (
                      <Bike className="w-3.5 h-3.5 text-[#0D3B26]" />
                    ) : (
                      <Car className="w-3.5 h-3.5 text-[#0D3B26]" />
                    )}
                    <span>{service.badge}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-neutral-600 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-5 pt-5 border-t border-neutral-200/70">
                    <p className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3">
                      Habilidades desenvolvidas nas aulas:
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#0D3B26] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 sm:p-7 pt-0">
                <a
                  href={createWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0D3B26] hover:bg-[#072518] rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#0D3B26]"
                >
                  <MessageCircle className="w-4 h-4 text-[#EAB308]" />
                  <span>Consultar aulas de {service.code === 'A' ? 'Moto' : 'Carro'}</span>
                  <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-neutral-500">
          Aulas práticas individuais em conformidade com as exigências dos órgãos de trânsito em Fortaleza – CE.
        </div>

      </div>
    </section>
  );
};
