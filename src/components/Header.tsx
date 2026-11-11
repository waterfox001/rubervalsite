import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import { INSTRUCTOR_INFO, createWhatsAppUrl } from '../data/content';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/70 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-neutral-200/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text wordmark with subtle credential crest */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0"
          >
            <div className="w-9 h-9 rounded-lg bg-[#0D3B26] text-[#EAB308] flex items-center justify-center font-bold text-lg shadow-sm transition-transform group-hover:scale-105">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#0D3B26] leading-none">
                Ruberval
              </span>
              <span className="text-[11px] font-medium text-neutral-500 tracking-wide uppercase mt-0.5">
                Instrutor de Autoescola
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-neutral-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap shrink-0 hover:text-[#0D3B26] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0D3B26] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={createWhatsAppUrl('Olá, Ruberval! Gostaria de falar sobre aulas práticas de autoescola.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0D3B26] hover:bg-[#082819] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 focus:outline-none focus:ring-2 focus:ring-[#0D3B26] focus:ring-offset-2"
            >
              <MessageCircle className="w-4 h-4 text-[#EAB308]" />
              <span>Fale pelo WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0D3B26]"
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-neutral-800 hover:text-[#0D3B26] hover:bg-emerald-50/60 font-medium px-3 py-2 rounded-md transition-colors text-base"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-neutral-100">
              <a
                href={createWhatsAppUrl('Olá, Ruberval! Gostaria de falar sobre aulas práticas de autoescola.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#0D3B26] hover:bg-[#082819] rounded-lg shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#EAB308]" />
                <span>Fale pelo WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
