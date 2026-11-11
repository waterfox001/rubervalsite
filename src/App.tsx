/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Diferenciais } from './components/Diferenciais';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Gallery } from './components/Gallery';
import { CtaBanner } from './components/CtaBanner';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFDFB] text-neutral-900 selection:bg-[#0D3B26] selection:text-[#EAB308]">
      {/* 1. Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Hero - Apresentação */}
        <Hero />

        {/* 3. Sobre o Ruberval */}
        <About />

        {/* 4. Serviços e Categorias (A e B) */}
        <Services />

        {/* 5. Diferenciais de Ensino */}
        <Diferenciais />

        {/* 6. Avaliações dos Alunos (Google) */}
        <Testimonials />

        {/* 7. Perguntas Frequentes Reais */}
        <Faq />

        {/* 8. Galeria de Fotos */}
        <Gallery />

        {/* 9. Chamada para Ação */}
        <CtaBanner />

        {/* 10. Contato e Localização */}
        <ContactLocation />
      </main>

      {/* 11. Rodapé */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
