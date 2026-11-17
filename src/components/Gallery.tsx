import React, { useState, useEffect } from 'react';
import { Instagram, Eye, Play, X, ExternalLink, Video } from 'lucide-react';
import { GALLERY_ITEMS, INSTRUCTOR_INFO } from '../data/content';
import { GalleryItem } from '../types';
import { SafeImage } from './SafeImage';
import { Reveal } from './Reveal';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'category-a' | 'category-b' | 'instructor'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedItem]);

  const filterTabs = [
    { id: 'all', label: 'Todos os Registros' },
    { id: 'instructor', label: 'Instrutor e Aulas' },
    { id: 'category-a', label: 'Categoria A (Moto)' },
    { id: 'category-b', label: 'Categoria B (Carro)' },
  ] as const;

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const videoItems = filteredItems.filter((item) => item.mediaType === 'video');
  const photoItems = filteredItems.filter((item) => item.mediaType === 'image');

  return (
    <section id="galeria" className="py-20 md:py-24 bg-[#FBFDFB] border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-bold text-[#D97706] uppercase tracking-wider mb-2">
              Na Prática em Fortaleza
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
              Vídeos e Fotos das Aulas
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-600 text-pretty font-normal">
              Assista a trechos reais das aulas de carro, moto e dicas de baliza com o instrutor Ruberval.
            </p>
          </div>
        </Reveal>

        {/* Filter Segmented Controls */}
        <div className="flex items-center gap-1.5 mb-8 overflow-x-auto pb-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D3B26] cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#0D3B26] text-white border-[#0D3B26]'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:text-neutral-900 hover:border-neutral-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Vertical 9:16 Videos Grid (renders at crisp native proportions) */}
        {videoItems.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {videoItems.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.05} className="h-full">
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="w-full h-full text-left group cursor-pointer rounded-2xl overflow-hidden border border-neutral-200 bg-white hover:border-[#0D3B26]/40 hover:shadow-md transition-all flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D3B26]"
                >
                  <div className="relative aspect-[9/16] w-full overflow-hidden bg-neutral-900">
                    <SafeImage
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                      fallbackTitle={item.title}
                    />

                    {/* Subtle dark scrim for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/25 transition-opacity group-hover:from-black/75" />

                    {/* Top badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/65 text-white text-[11px] font-semibold backdrop-blur-xs">
                        <Video className="w-3 h-3 text-[#EAB308]" />
                        <span>Aula Real</span>
                      </span>
                      {item.duration && (
                        <span className="px-2 py-0.5 rounded bg-black/65 text-white text-[11px] font-medium tabular-nums">
                          {item.duration}
                        </span>
                      )}
                    </div>

                    {/* Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#0D3B26]/90 group-hover:bg-[#0D3B26] border-2 border-[#EAB308] text-white flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                        <Play className="w-6 h-6 fill-[#EAB308] text-[#EAB308] ml-0.5" />
                      </div>
                    </div>

                    {/* Bottom CTA label inside thumbnail */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[11px] font-semibold text-[#EAB308] uppercase tracking-wide">
                        {item.categoryLabel}
                      </span>
                      <h3 className="font-bold text-sm sm:text-base leading-snug mt-0.5 text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 flex-1 flex items-center justify-between gap-2 bg-white">
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        )}

        {/* Square 1:1 Photos Row (matches native 1080x1080 Instagram images with zero cropping) */}
        {photoItems.length > 0 && (
          <div className={`${videoItems.length > 0 ? 'mt-8 pt-8 border-t border-neutral-200/70' : ''} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6`}>
            {photoItems.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.05} className="h-full">
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="w-full h-full text-left group cursor-pointer rounded-2xl overflow-hidden border border-neutral-200 bg-white hover:border-[#0D3B26]/40 hover:shadow-md transition-all flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D3B26]"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-neutral-950">
                    <SafeImage
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                      fallbackTitle={item.title}
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <div className="flex items-center gap-1.5 bg-black/75 px-3 py-1.5 rounded-lg text-xs font-medium">
                        <Eye className="w-4 h-4" />
                        <span>Ampliar foto</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between w-full">
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
                </button>
              </Reveal>
            ))}
          </div>
        )}

        {/* Real Instagram Banner */}
        <Reveal delay={0.1}>
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
                  Vídeos de aulas práticas, aprovações de alunos e dicas de direção em Fortaleza.
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
        </Reveal>

      </div>

      {/* Lightbox Modal (supports both crisp Video Player with sound and Photo view) */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className={`relative w-full bg-white rounded-2xl overflow-hidden shadow-2xl ${
              selectedItem.mediaType === 'video' ? 'max-w-sm' : 'max-w-xl'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-black/90 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>

            {selectedItem.mediaType === 'video' && selectedItem.videoUrl ? (
              <div className="aspect-[9/16] w-full bg-black max-h-[75vh]">
                <video
                  key={selectedItem.id}
                  src={selectedItem.videoUrl}
                  poster={selectedItem.imageUrl}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain bg-black"
                />
              </div>
            ) : (
              <div className="aspect-square w-full bg-neutral-950 max-h-[75vh]">
                <SafeImage
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                  loading="eager"
                  fallbackTitle={selectedItem.title}
                />
              </div>
            )}

            <div className="p-4 sm:p-5 bg-white border-t border-neutral-100">
              <span className="text-[11px] font-semibold text-[#0D3B26] uppercase">
                {selectedItem.categoryLabel}
              </span>
              <h3 className="text-base font-bold text-neutral-900 mt-0.5">
                {selectedItem.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
