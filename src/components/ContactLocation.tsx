import React from 'react';
import { MapPin, Instagram, ExternalLink, Navigation } from 'lucide-react';
import { INSTRUCTOR_INFO } from '../data/content';
import { Reveal } from './Reveal';

export const ContactLocation: React.FC = () => {
  return (
    <section id="contato" className="py-20 md:py-24 bg-[#FBFDFB] border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold text-[#D97706] uppercase tracking-wider mb-2">
              Localização e Contato
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
              Fale com o Ruberval
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-600 text-pretty font-normal">
              Atendimento direto e sem burocracia para tirar dúvidas e agendar suas aulas práticas em Fortaleza.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-5 flex flex-col">
              
              {/* Contact Details Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    {INSTRUCTOR_INFO.fullName}
                  </h3>
                  <p className="text-xs font-medium text-[#0D3B26] mt-1">
                    {INSTRUCTOR_INFO.role} · {INSTRUCTOR_INFO.categories}
                  </p>

                  <div className="mt-8 space-y-6 text-sm">

                    {/* Address */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-[#0D3B26]" />
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 block">Endereço</span>
                        <p className="font-semibold text-neutral-900 mt-0.5">
                          {INSTRUCTOR_INFO.address.street}
                        </p>
                        <p className="text-xs text-neutral-600 mt-0.5">
                          {INSTRUCTOR_INFO.address.neighborhood}, {INSTRUCTOR_INFO.address.city} – {INSTRUCTOR_INFO.address.state}
                        </p>
                        <p className="text-xs text-neutral-400 font-mono mt-0.5">
                          CEP: {INSTRUCTOR_INFO.address.zip}
                        </p>
                      </div>
                    </div>

                    {/* Instagram */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                        <Instagram className="w-4 h-4 text-[#0D3B26]" />
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 block">Instagram</span>
                        <a
                          href={INSTRUCTOR_INFO.instagram.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-[#0D3B26] hover:underline inline-flex items-center gap-1 mt-0.5"
                        >
                          <span>{INSTRUCTOR_INFO.instagram.handle}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Google Maps Location Card */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-xs flex flex-col">
                
                <div className="p-4 border-b border-neutral-100 flex items-center justify-between gap-4 bg-neutral-50">
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm">
                      Localização no Google Maps
                    </h4>
                    <p className="text-xs text-neutral-500">
                      Parque Dois Irmãos – Fortaleza, CE
                    </p>
                  </div>

                  <a
                    href={INSTRUCTOR_INFO.googleMaps.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0D3B26] bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>Abrir Rota</span>
                  </a>
                </div>

                <div className="w-full h-[380px] sm:h-[420px] bg-neutral-200">
                  <iframe
                    title="Localização do Instrutor Ruberval no Google Maps"
                    src={INSTRUCTOR_INFO.googleMaps.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full block"
                  />
                </div>

                <div className="p-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600">
                  <span>Rua 110, CJ Tupã Mirim, 46</span>
                  <a
                    href={INSTRUCTOR_INFO.googleMaps.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#0D3B26] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Ver perfil no Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};
