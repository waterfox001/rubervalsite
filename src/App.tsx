/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { WhatsAppProvider } from './context/WhatsAppContext';
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
    <WhatsAppProvider>
      <div className="min-h-screen flex flex-col bg-[#FBFDFB] text-neutral-900 selection:bg-[#0D3B26] selection:text-[#EAB308]">
        <Header />

        <main className="flex-1">
          <Hero />
          <About />
          <Services />
          <Diferenciais />
          <Testimonials />
          <Faq />
          <Gallery />
          <CtaBanner />
          <ContactLocation />
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </WhatsAppProvider>
  );
}
