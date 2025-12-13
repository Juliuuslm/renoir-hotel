'use client';

import { useModal } from '@/lib/modal-context';
import { X, Clock, Users } from 'lucide-react';

export const WorkshopModal = () => {
  const { activeModal, modalData, closeModal, openBookingModal } = useModal();

  if (activeModal !== 'workshop' || !modalData) return null;

  const {
    title,
    description = 'Sumérgete en una experiencia creativa única.',
    duration = '2 horas',
    maxParticipants = '6',
    price = '$150 USD',
    schedule = ['Miércoles 10:00 AM', 'Viernes 3:00 PM', 'Domingo 4:00 PM'],
  } = modalData;

  return (
    <div
      className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <div
        data-lenis-prevent
        className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-neutral-900 to-neutral-700 text-white px-6 py-8 flex justify-between items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-300 mb-2">Taller Creativo</p>
            <h2 className="font-serif text-3xl">{title}</h2>
          </div>
          <button
            onClick={closeModal}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Cerrar modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-8 md:px-8 md:py-12">
          <p className="text-neutral-600 text-lg font-light leading-relaxed mb-8">
            {description}
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 p-6 bg-neutral-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Clock className="text-neutral-600" size={20} />
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500">Duración</p>
                <p className="font-semibold text-neutral-900">{duration}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="text-neutral-600" size={20} />
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500">Máximo</p>
                <p className="font-semibold text-neutral-900">{maxParticipants} personas</p>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Precio</p>
              <p className="font-serif text-xl text-neutral-900">{price}</p>
            </div>
          </div>

          {/* Schedule */}
          <div className="mb-10">
            <h3 className="font-serif text-xl text-neutral-900 mb-4">Horarios Disponibles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {schedule.map((timeSlot: string, idx: number) => (
                <div
                  key={idx}
                  className="p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors text-center"
                >
                  <p className="text-neutral-600 font-light">{timeSlot}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => {
              openBookingModal();
              closeModal();
            }}
            className="w-full bg-neutral-900 text-white px-8 py-4 text-sm uppercase tracking-[0.2em] font-semibold hover:bg-neutral-800 active:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-all duration-300 rounded-lg"
          >
            Reservar Taller
          </button>
        </div>
      </div>
    </div>
  );
};
