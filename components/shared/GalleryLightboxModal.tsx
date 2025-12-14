'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useModal } from '@/lib/modal-context';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GalleryLightboxModal = () => {
  const { activeModal, modalData, closeModal } = useModal();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { images = [], initialIndex = 0 } = modalData || {};
  const currentImage = images[currentImageIndex] || {};
  const { image, title, category } = currentImage;

  // Reset image index when modal closes
  useEffect(() => {
    if (activeModal !== 'gallery-lightbox') {
      setCurrentImageIndex(0);
    } else if (activeModal === 'gallery-lightbox' && modalData) {
      setCurrentImageIndex(initialIndex);
    }
  }, [activeModal, initialIndex, modalData]);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModal !== 'gallery-lightbox') return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal, nextImage, prevImage, closeModal]);

  if (activeModal !== 'gallery-lightbox' || !modalData || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={closeModal}
    >
      <div
        data-lenis-prevent
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Image */}
        <div className="relative w-full h-full max-w-7xl max-h-[90vh] group">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain transition-opacity duration-300"
            sizes="100vw"
            priority
          />

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 z-10"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={32} className="text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all duration-300 z-10"
                aria-label="Siguiente imagen"
              >
                <ChevronRight size={32} className="text-white" />
              </button>
            </>
          )}

          {/* Image Info Overlay */}
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <div className="bg-black/50 backdrop-blur-md p-6 rounded-lg">
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-300 block mb-2">
                {category}
              </span>
              <h3 className="font-serif text-3xl">{title}</h3>
            </div>
          </div>

          {/* Counter */}
          {images.length > 1 && (
            <div className="absolute top-8 right-8 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-8 left-8 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-colors z-20"
          aria-label="Cerrar modal"
        >
          <X size={24} className="text-white" />
        </button>
      </div>
    </div>
  );
};
