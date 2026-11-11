import React, { useState } from 'react';
import { Instagram, Eye, X, ExternalLink } from 'lucide-react';
import { GALLERY_ITEMS, INSTRUCTOR_INFO } from '../data/content';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'category-a' | 'category-b' | 'instructor'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'Todas as Fotos' },
    { id: 'instructor', label: 'Instrutor e Aulas' },
    { id: 'category-a', label: 'Categoria A (Moto)' },
    { id: 'category-b', label: 'Categoria B (Carro)' },
  ] as const;

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="galeria" className="py-20 md:py-24 bg-[#FBFDFB] border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-[#D97706] uppercase tracking-wider mb-2">
            Momentos das Aulas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
            Galeria de Fotos
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 text-pretty font-normal">
            Registros reais do cotidiano de treinamento prático, veículos e pistas de instrução.
          </p>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center gap-1.5 mb-8 overflow-x-auto pb-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap border ${
                activeFilter === tab.id
                  ? 'bg-[#0D3B26] text-white border-[#0D3B26]'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:text-neutral-900 hover:border-neutral-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-neutral-200 bg-white hover:border-neutral-300 transition-all flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-lg text-xs font-medium">
                    <Eye className="w-4 h-4" />
                    <span>Ampliar</span>
                  </div>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-[#0D3B26] uppercase">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-bold text-neutral-900 text-sm mt-0.5">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Instagram Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 shrink-0">
              <Instagram className="w-5 h-5 text-neutral-800" />
            </div>
            <div>
              <p className="font-bold text-neutral-900 text-sm">
                Acompanhe o Instagram: {INSTRUCTOR_INFO.instagram.handle}
              </p>
              <p className="text-xs text-neutral-500 mt-0.5">
                Fotos de aprovação de alunos, dicas de trânsito e rotina de aulas em Fortaleza.
              </p>
            </div>
          </div>

          <a
            href={INSTRUCTOR_INFO.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-800 bg-neutral-50 hover:bg-neutral-100 border border-neutral-300 rounded-lg transition-colors whitespace-nowrap"
          >
            <span>Acessar Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[4/3] w-full bg-neutral-900">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 bg-white border-t border-neutral-100">
              <span className="text-xs font-semibold text-[#0D3B26]">
                {selectedItem.categoryLabel}
              </span>
              <h3 className="text-base font-bold text-neutral-900 mt-0.5">
                {selectedItem.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
