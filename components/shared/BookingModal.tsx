'use client';

import { Modal } from '@/components/ui/Modal';
import { useModal } from '@/lib/modal-context';
import { Users } from 'lucide-react';

export const BookingModal = () => {
  const { activeModal, closeModal } = useModal();

  return (
    <Modal isOpen={activeModal === 'booking'} onClose={closeModal} title="Reservar Estancia">
      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-neutral-500">Llegada</label>
            <input
              type="date"
              className="w-full border-b border-neutral-300 py-2 focus:outline-none focus:border-neutral-900 font-serif text-lg"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-neutral-500">Salida</label>
            <input
              type="date"
              className="w-full border-b border-neutral-300 py-2 focus:outline-none focus:border-neutral-900 font-serif text-lg"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-neutral-500">Huéspedes</label>
          <div className="flex items-center space-x-4 border-b border-neutral-300 py-2">
            <Users size={18} className="text-neutral-400" />
            <select className="w-full bg-transparent focus:outline-none font-serif text-lg">
              <option>1 Adulto</option>
              <option>2 Adultos</option>
              <option>2 Adultos, 1 Niño</option>
              <option>Family Suite (4+)</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-neutral-500">
            Habitación de Preferencia
          </label>
          <select className="w-full border-b border-neutral-300 py-2 bg-transparent focus:outline-none font-serif text-lg">
            <option>Sin preferencia</option>
            <option>The Atelier</option>
            <option>Impressionist Suite</option>
            <option>Renoir Penthouse</option>
          </select>
        </div>

        <div className="pt-4">
          <button
            type="button"
            onClick={closeModal}
            className="w-full bg-neutral-900 text-white py-4 text-xs tracking-[0.2em] uppercase hover:bg-yellow-600 transition-colors"
          >
            Verificar Disponibilidad
          </button>
          <p className="text-center text-neutral-400 text-xs mt-4 font-light">
            Mejor tarifa garantizada al reservar directo.
          </p>
        </div>
      </form>
    </Modal>
  );
};
