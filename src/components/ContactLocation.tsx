import React, { useState } from 'react';
import { MapPin, Phone, Instagram, MessageCircle, ExternalLink, Navigation } from 'lucide-react';
import { INSTRUCTOR_INFO, createWhatsAppUrl } from '../data/content';

export const ContactLocation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'B' | 'A' | 'AB' | 'duvida'>('B');
  const [name, setName] = useState('');
  const [userNote, setUserNote] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    let categoryText = '';
    if (selectedCategory === 'B') categoryText = 'Categoria B (Carro)';
    else if (selectedCategory === 'A') categoryText = 'Categoria A (Moto)';
    else if (selectedCategory === 'AB') categoryText = 'Categorias A e B (Carro e Moto)';
    else categoryText = 'Tirar Dúvidas Gerais';

    const greeting = name.trim() ? `Olá, Ruberval! Meu nome é ${name.trim()}.` : 'Olá, Ruberval!';
    const details = userNote.trim() ? ` Observação: ${userNote.trim()}` : '';
    const message = `${greeting} Gostaria de informações sobre aulas práticas para: ${categoryText}.${details}`;

    window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 md:py-24 bg-[#FBFDFB] border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct info and WhatsApp quick message */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200">
              <h3 className="text-lg font-bold text-neutral-900">
                {INSTRUCTOR_INFO.fullName}
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                {INSTRUCTOR_INFO.role} · {INSTRUCTOR_INFO.categories}
              </p>

              <div className="mt-6 space-y-4 text-sm">
                
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0D3B26] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-neutral-500 block">Telefone e WhatsApp</span>
                    <a
                      href={`tel:${INSTRUCTOR_INFO.phoneRaw}`}
                      className="font-bold text-neutral-900 hover:text-[#0D3B26] transition-colors"
                    >
                      {INSTRUCTOR_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0D3B26] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-neutral-500 block">Endereço</span>
                    <p className="font-medium text-neutral-900">
                      {INSTRUCTOR_INFO.address.street}
                    </p>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      {INSTRUCTOR_INFO.address.neighborhood}, {INSTRUCTOR_INFO.address.city} – {INSTRUCTOR_INFO.address.state}
                    </p>
                    <p className="text-xs text-neutral-400 font-mono">
                      CEP: {INSTRUCTOR_INFO.address.zip}
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3">
                  <Instagram className="w-4 h-4 text-[#0D3B26] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-neutral-500 block">Instagram</span>
                    <a
                      href={INSTRUCTOR_INFO.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#0D3B26] hover:underline inline-flex items-center gap-1"
                    >
                      <span>{INSTRUCTOR_INFO.instagram.handle}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick WhatsApp Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200">
              <h4 className="text-base font-bold text-neutral-900">
                Enviar mensagem no WhatsApp
              </h4>
              <p className="text-xs text-neutral-500 mt-1">
                Selecione a categoria para enviar uma mensagem pré-formatada.
              </p>

              <form onSubmit={handleSendMessage} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Categoria pretendida:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCategory('B')}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-colors text-left ${
                        selectedCategory === 'B'
                          ? 'border-[#0D3B26] bg-[#0D3B26] text-white'
                          : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      Categoria B (Carro)
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedCategory('A')}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-colors text-left ${
                        selectedCategory === 'A'
                          ? 'border-[#0D3B26] bg-[#0D3B26] text-white'
                          : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      Categoria A (Moto)
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedCategory('AB')}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-colors text-left ${
                        selectedCategory === 'AB'
                          ? 'border-[#0D3B26] bg-[#0D3B26] text-white'
                          : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      Ambas (A e B)
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedCategory('duvida')}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-colors text-left ${
                        selectedCategory === 'duvida'
                          ? 'border-[#0D3B26] bg-[#0D3B26] text-white'
                          : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      Dúvidas Gerais
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="student-name-input" className="block text-xs font-semibold text-neutral-700 mb-1">
                    Seu Nome (opcional):
                  </label>
                  <input
                    id="student-name-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Carlos Oliveira"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-[#0D3B26] focus:border-[#0D3B26]"
                  />
                </div>

                <div>
                  <label htmlFor="student-note-input" className="block text-xs font-semibold text-neutral-700 mb-1">
                    Alguma observação ou dúvida?
                  </label>
                  <input
                    id="student-note-input"
                    type="text"
                    value={userNote}
                    onChange={(e) => setUserNote(e.target.value)}
                    placeholder="Ex: Gostaria de saber horários disponíveis"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:ring-1 focus:ring-[#0D3B26] focus:border-[#0D3B26]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0D3B26] hover:bg-[#082819] rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#EAB308]" />
                  <span>Chamar no WhatsApp</span>
                </button>
              </form>
            </div>

          </div>

          {/* Right Column: Google Maps Location Card */}
          <div className="lg:col-span-6">
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

      </div>
    </section>
  );
};
