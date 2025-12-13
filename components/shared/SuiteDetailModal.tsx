'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useModal } from '@/lib/modal-context';
import { X, Check, ChevronLeft, ChevronRight } from 'lucide-react';

export const SuiteDetailModal = () => {
  const { activeModal, modalData, closeModal, openBookingModal } = useModal();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when modal closes
  useEffect(() => {
    if (activeModal !== 'suite-detail') {
      setCurrentImageIndex(0);
    }
  }, [activeModal]);

  if (activeModal !== 'suite-detail' || !modalData) {
    return null;
  }

  const {
    title = 'Renoir Suite',
    price = '$450 USD',
    description = 'Una suite diseñada con los más altos estándares de lujo.',
    image = '/images/suites/atelier-suite-main.jpg',
    gallery = [],
    features = [],
    amenities = [
      'Minibar premium',
      'Cafetera de especialidad',
      'Ropa de cama de lino belga',
      'Amenities de perfumistas artesanales',
      'Servicio de turndown',
      'Wi-Fi de alta velocidad',
    ],
  } = modalData;

  const galleryImages = gallery.length > 0 ? gallery : [image];
  const currentImage = galleryImages[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
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
        {/* Header Image Carousel */}
        <div className="relative h-[400px] w-full bg-neutral-100 group">
          <Image
            src={currentImage}
            alt={title}
            fill
            className="object-cover transition-opacity duration-300"
          />

          {/* Navigation Buttons */}
          {galleryImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={24} className="text-neutral-900" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                aria-label="Siguiente imagen"
              >
                <ChevronRight size={24} className="text-neutral-900" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-neutral-900/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </>
          )}

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
          <div className="mb-8">
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4">
              {title}
            </h2>
            <p className="text-neutral-600 text-xl font-light leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>

          {/* Grid: Features + Amenities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Features */}
            {features && features.length > 0 && (
              <div>
                <h3 className="font-serif text-2xl text-neutral-900 mb-6">Características</h3>
                <ul className="space-y-3">
                  {features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center text-neutral-600">
                      <span className="text-yellow-600 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Amenities */}
            {amenities && amenities.length > 0 && (
              <div>
                <h3 className="font-serif text-2xl text-neutral-900 mb-6">Amenidades</h3>
                <ul className="space-y-3">
                  {amenities.map((amenity: string, idx: number) => (
                    <li key={idx} className="flex items-center text-neutral-600">
                      <Check size={18} className="text-yellow-600 mr-3 flex-shrink-0" />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Price and CTA */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Desde</p>
              <p className="font-serif text-4xl text-neutral-900">{price}</p>
              <p className="text-xs text-neutral-500 mt-2">por noche</p>
            </div>
            <button
              onClick={() => {
                openBookingModal();
                closeModal();
              }}
              className="bg-neutral-900 text-white px-12 py-4 text-sm uppercase tracking-[0.2em] font-semibold hover:bg-neutral-800 active:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-all duration-300 rounded-lg md:w-auto w-full"
            >
              Reservar Suite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
