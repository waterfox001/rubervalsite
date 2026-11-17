import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { useWhatsAppModal } from '../context/WhatsAppContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openWhatsAppModal } = useWhatsAppModal();

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
    { label: 'Avaliações', href: '#avaliacoes' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 py-3'
          : 'bg-white/95 backdrop-blur-sm border-b border-neutral-200/50 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand mark */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            aria-label="Ruberval – Início"
            className="flex items-center group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D3B26] rounded-full"
          >
            <img
              src="/images/logo_ruberval.png"
              alt="Logo Ruberval Instrutor"
              className="h-11 w-11 sm:h-12 sm:w-12 object-contain rounded-full transition-transform group-hover:scale-105"
            />
          </a>

          {/* Zone 2: 5 Single-line Navigation Links */}
          <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap shrink-0 hover:text-[#0D3B26] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0D3B26] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-none focus-visible:text-[#0D3B26]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              type="button"
              onClick={() => openWhatsAppModal()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0D3B26] hover:bg-[#082819] rounded-lg shadow-xs hover:shadow transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D3B26] focus-visible:ring-offset-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#EAB308]" />
              <span>Fale pelo WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D3B26]"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 shadow-lg px-4 pt-2 pb-5">
          <nav aria-label="Navegação mobile" className="flex flex-col space-y-1.5 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-neutral-800 hover:text-[#0D3B26] hover:bg-emerald-50/60 font-medium px-3 py-2.5 rounded-lg transition-colors text-base"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-neutral-100">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsAppModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#0D3B26] hover:bg-[#082819] rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#EAB308]" />
                <span>Fale pelo WhatsApp</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
