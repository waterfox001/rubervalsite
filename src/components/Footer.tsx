import React from 'react';
import { Phone, MapPin, Instagram, ShieldCheck, ArrowUp, MessageCircle } from 'lucide-react';
import { INSTRUCTOR_INFO, createWhatsAppUrl } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#092719] text-neutral-300 border-t border-emerald-950/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-emerald-900/40">
          
          {/* Brand & Credentials */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#EAB308] border border-white/15 flex items-center justify-center font-bold text-xl">
                R
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight block">
                  {INSTRUCTOR_INFO.name}
                </span>
                <span className="text-xs text-emerald-300/80 font-medium tracking-wide uppercase">
                  {INSTRUCTOR_INFO.role}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300/80 leading-relaxed max-w-sm">
              Mais de 27 anos de dedicação na formação de condutores responsáveis e seguros para as Categorias A (moto) e B (carro) em Fortaleza – CE.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#EAB308] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Instrutor Credenciado Oficial Detran-CE</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Navegação
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre o Instrutor
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Categorias A e B
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Diferenciais de Ensino
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">
                  Avaliações no Google
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">
                  Galeria de Fotos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato e Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Info */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Canais de Atendimento
            </p>
            
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
                <a
                  href={`tel:${INSTRUCTOR_INFO.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {INSTRUCTOR_INFO.phoneDisplay}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
                <a
                  href={createWhatsAppUrl('Olá, Ruberval! Gostaria de informações.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {INSTRUCTOR_INFO.phoneDisplay}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
                <a
                  href={INSTRUCTOR_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram: {INSTRUCTOR_INFO.instagram.handle}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
                <span className="text-neutral-300/80 leading-snug">
                  {INSTRUCTOR_INFO.address.full}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            <p>© {new Date().getFullYear()} {INSTRUCTOR_INFO.fullName}. Todos os direitos reservados.</p>
            <p className="text-[11px] text-neutral-500 mt-0.5">
              Formação de condutores categorias A e B · Fortaleza - Ceará.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors border border-white/10"
            aria-label="Voltar ao início"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
