'use client';

import Image from 'next/image';
import { useModal } from '@/lib/modal-context';
import { X, MapPin, Clock, Phone, ArrowRight } from 'lucide-react';

export const LocationDetailModal = () => {
  const { activeModal, modalData, closeModal, openBookingModal } = useModal();

  if (activeModal !== 'location-detail' || !modalData) return null;

  const {
    title = 'Ubicación',
    description = 'Descripción del lugar',
    image,
    address = 'Dirección',
    hours = 'Horarios',
    distance = 'Distancia',
    contactInfo = 'Contacto',
    howToGetThere = [],
    tips = [],
    conciergeNote = 'Nota del concierge',
  } = modalData;

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
        {/* Header Image */}
        <div className="relative h-[350px] w-full bg-neutral-900">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover opacity-80"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h2 className="font-serif text-4xl md:text-5xl">{title}</h2>
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

          {/* Info Grid - Address, Hours, Distance, Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 p-6 bg-neutral-50 rounded-lg">
            <div className="flex items-start space-x-3">
              <MapPin className="text-neutral-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
                  Dirección
                </p>
                <p className="text-neutral-900 font-light mt-1">{address}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="text-neutral-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
                  Horarios
                </p>
                <p className="text-neutral-900 font-light mt-1">{hours}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <ArrowRight className="text-neutral-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
                  Distancia desde Hotel
                </p>
                <p className="text-neutral-900 font-light mt-1">{distance}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="text-neutral-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
                  Contacto
                </p>
                <p className="text-neutral-900 font-light mt-1">{contactInfo}</p>
              </div>
            </div>
          </div>

          {/* How to Get There */}
          {howToGetThere.length > 0 && (
            <div className="mb-10">
              <h3 className="font-serif text-2xl text-neutral-900 mb-6">
                Cómo Llegar
              </h3>
              <div className="space-y-4">
                {howToGetThere.map((step: string, idx: number) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-yellow-600 text-white rounded-full font-semibold text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-neutral-600 font-light pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Concierge Tips */}
          {tips.length > 0 && (
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg mb-10">
              <p className="text-xs uppercase tracking-widest text-yellow-800 mb-4 font-semibold">
                Consejos del Concierge
              </p>
              <ul className="space-y-3">
                {tips.map((tip: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-yellow-600 mr-3 mt-1">→</span>
                    <span className="text-neutral-700 font-light">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Concierge Note */}
          {conciergeNote && (
            <div className="bg-neutral-100 p-6 rounded-lg mb-10 border-l-4 border-neutral-600">
              <p className="text-xs uppercase tracking-widest text-neutral-700 mb-3 font-semibold">
                Nota Personal del Concierge
              </p>
              <p className="text-neutral-700 font-light italic leading-relaxed">
                {conciergeNote}
              </p>
            </div>
          )}

          {/* CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => {
                openBookingModal();
                closeModal();
              }}
              className="bg-neutral-900 text-white px-8 py-4 text-sm uppercase tracking-[0.2em] font-semibold hover:bg-neutral-800 active:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-all duration-300 rounded-lg"
            >
              Reservar Transporte
            </button>
            <a
              href="https://wa.me/525574533388?text=Hola%20aurrora33,%20me%20gusto%20su%20diseño"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-neutral-100 text-neutral-900 px-8 py-4 text-sm uppercase tracking-[0.2em] font-semibold hover:bg-neutral-200 active:bg-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-all duration-300 rounded-lg text-center"
            >
              Contactar Concierge
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
