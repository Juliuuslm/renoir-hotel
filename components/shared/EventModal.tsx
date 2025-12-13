'use client';

import Image from 'next/image';
import { useModal } from '@/lib/modal-context';
import { X, Calendar, Clock, MapPin } from 'lucide-react';

export const EventModal = () => {
  const { activeModal, modalData, closeModal, openBookingModal } = useModal();

  if (activeModal !== 'event' || !modalData) return null;

  const {
    title,
    category,
    image,
    month,
    day,
    description = '',
    time = '8:00 PM',
    location = 'Hotel Renoir',
  } = modalData as any;

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
        <div className="relative h-[300px] w-full bg-neutral-100">
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
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-2">{category}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-6">
            {title}
          </h2>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-neutral-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Calendar className="text-neutral-600" size={24} />
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500">Fecha</p>
                <p className="font-serif text-lg text-neutral-900">{month} {day}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="text-neutral-600" size={24} />
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500">Hora</p>
                <p className="font-serif text-lg text-neutral-900">{time}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-neutral-600" size={24} />
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500">Ubicación</p>
                <p className="font-serif text-lg text-neutral-900">{location}</p>
              </div>
            </div>
          </div>

          {description && (
            <p className="text-neutral-600 text-lg font-light leading-relaxed mb-8">
              {description}
            </p>
          )}

          {/* CTA */}
          <button
            onClick={() => {
              openBookingModal();
              closeModal();
            }}
            className="w-full bg-neutral-900 text-white px-8 py-4 text-sm uppercase tracking-[0.2em] font-semibold hover:bg-neutral-800 active:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-all duration-300 rounded-lg"
          >
            Reservar Lugar
          </button>
        </div>
      </div>
    </div>
  );
};
