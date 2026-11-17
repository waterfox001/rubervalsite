import React, { useState } from 'react';
import { CarFront } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fallbackTitle?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  loading = 'lazy',
  fallbackTitle,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F2F7F4] to-[#E6EFE9] text-[#0D3B26] p-6 text-center ${className}`}
      >
        <div className="w-12 h-12 rounded-xl bg-white/80 border border-emerald-200 flex items-center justify-center mb-3 shadow-xs">
          <CarFront className="w-6 h-6 text-[#0D3B26]" />
        </div>
        <p className="text-xs font-bold text-[#0D3B26]">
          {fallbackTitle || 'Ruberval – Instrutor de Autoescola'}
        </p>
        <p className="text-[11px] text-neutral-600 mt-1">
          Categorias A e B · Fortaleza – CE
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      loading={loading}
      onError={() => setHasError(true)}
    />
  );
};
