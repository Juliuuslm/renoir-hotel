'use client';

import { useModal } from '@/lib/modal-context';
import { X, Clock, DollarSign } from 'lucide-react';

export const TreatmentModal = () => {
  const { activeModal, modalData, closeModal, openBookingModal } = useModal();

  if (activeModal !== 'treatment' || !modalData) return null;

  const { title, duration, price, desc } = modalData;

  return (
    <div
      className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 flex justify-between items-center">
          <h2 className="font-serif text-2xl text-neutral-900">{title}</h2>
          <button
            onClick={closeModal}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
            aria-label="Cerrar modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          <p className="text-neutral-600 text-lg font-light leading-relaxed mb-8">
            {desc}
          </p>

          {/* Details */}
          <div className="grid grid-cols-2 gap-6 mb-12 p-6 bg-stone-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Clock className="text-stone-600" size={24} />
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500">Duración</p>
                <p className="font-serif text-xl text-stone-900">{duration}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <DollarSign className="text-yellow-600" size={24} />
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500">Precio</p>
                <p className="font-serif text-xl text-stone-900">{price}</p>
              </div>
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
            Reservar Ahora
          </button>
        </div>
      </div>
    </div>
  );
};
