'use client';

import Image from 'next/image';
import { useModal } from '@/lib/modal-context';
import { X } from 'lucide-react';

export const FacilityModal = () => {
  const { activeModal, modalData, closeModal, openBookingModal } = useModal();

  if (activeModal !== 'facility' || !modalData) return null;

  const { title, description, image } = modalData;

  return (
    <div
      className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Image */}
        <div className="relative h-[300px] w-full bg-stone-100">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          )}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full transition-colors"
            aria-label="Cerrar modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-8 md:px-8 md:py-12">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
            {title}
          </h2>

          <p className="text-stone-600 text-lg font-light leading-relaxed mb-8">
            {description}
          </p>

          {/* Features Info Box */}
          <div className="bg-stone-50 p-6 rounded-lg mb-8">
            <h3 className="font-serif text-lg text-stone-900 mb-4">Características</h3>
            <ul className="space-y-3 text-stone-600">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3 mt-1">✓</span>
                <span>Ambiente climatizado y confortable</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3 mt-1">✓</span>
                <span>Equipo profesional de última generación</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3 mt-1">✓</span>
                <span>Personal certificado y experimentado</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3 mt-1">✓</span>
                <span>Disponible para huéspedes del hotel</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <button
            onClick={() => {
              openBookingModal();
              closeModal();
            }}
            className="w-full bg-stone-900 text-white px-8 py-4 text-sm uppercase tracking-[0.2em] font-semibold hover:bg-stone-800 active:bg-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-all duration-300 rounded-lg"
          >
            Reservar Acceso
          </button>
        </div>
      </div>
    </div>
  );
};
