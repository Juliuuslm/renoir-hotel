'use client';

import Image from 'next/image';
import { useModal } from '@/lib/modal-context';
import { X, Palette, Volume2, Sparkles } from 'lucide-react';

export const PillarDetailModal = () => {
  const { activeModal, modalData, closeModal, openBookingModal } = useModal();

  if (activeModal !== 'pillar-detail' || !modalData) return null;

  const {
    pillar = 'arte',
    title = 'Pilar',
    subtitle = 'Descripción',
    description = 'Descripción del pilar',
    image,
    details = [],
    highlights = [],
  } = modalData;

  // Determinar ícono según pilar
  const getIcon = () => {
    switch (pillar) {
      case 'arte':
        return <Palette size={64} className="text-yellow-600" strokeWidth={1.5} />;
      case 'silencio':
        return <Volume2 size={64} className="text-yellow-600" strokeWidth={1.5} />;
      case 'detalle':
        return <Sparkles size={64} className="text-yellow-600" strokeWidth={1.5} />;
      default:
        return <Palette size={64} className="text-yellow-600" strokeWidth={1.5} />;
    }
  };

  return (
    <div
      className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <div
        data-lenis-prevent
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image or Color Block */}
        <div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full bg-gradient-to-br from-neutral-900 to-neutral-800">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover opacity-70"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Icon and Title Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <div className="mb-6">
              {getIcon()}
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-2">{title}</h2>
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-600 font-semibold">
              {subtitle}
            </p>
          </div>

          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full transition-colors z-20"
            aria-label="Cerrar modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-8 md:px-12 md:py-12">
          {/* Description */}
          <p className="text-neutral-600 text-lg font-light leading-relaxed mb-10">
            {description}
          </p>

          {/* Details Grid */}
          {details.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {details.map((detail: any, idx: number) => (
                <div key={idx} className="border-l-4 border-yellow-600 pl-6">
                  <h3 className="font-serif text-xl text-neutral-900 mb-3">
                    {detail.title}
                  </h3>
                  <p className="text-neutral-600 font-light leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Highlights */}
          {highlights.length > 0 && (
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg mb-10">
              <p className="text-xs uppercase tracking-widest text-yellow-800 mb-4 font-semibold">
                Características Principales
              </p>
              <ul className="space-y-3">
                {highlights.map((highlight: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-yellow-600 mr-3 mt-1">→</span>
                    <span className="text-neutral-700 font-light">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <button
            onClick={() => {
              openBookingModal();
              closeModal();
            }}
            className="w-full bg-neutral-900 text-white px-8 py-4 text-sm uppercase tracking-[0.2em] font-semibold hover:bg-neutral-800 active:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-all duration-300 rounded-lg"
          >
            Experimentar Este Pilar
          </button>
        </div>
      </div>
    </div>
  );
};
