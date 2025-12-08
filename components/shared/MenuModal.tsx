'use client';

import { Modal } from '@/components/ui/Modal';
import { useModal } from '@/lib/modal-context';

export const MenuModal = () => {
  const { activeModal, closeModal } = useModal();

  return (
    <Modal isOpen={activeModal === 'menu'} onClose={closeModal} title="Menú Degustación">
      <div className="text-center space-y-12">
        <div>
          <h4 className="font-serif text-xl italic text-neutral-500 mb-6">- Primer Tiempo -</h4>
          <ul className="space-y-4">
            <li>
              <h5 className="font-bold text-neutral-900 uppercase text-sm tracking-wide">
                Carpaccio de Betabel
              </h5>
              <p className="text-neutral-500 text-sm font-light">
                Queso de cabra cenizo, pistache, reducción de balsámico.
              </p>
              <span className="text-xs text-neutral-400">$18</span>
            </li>
            <li>
              <h5 className="font-bold text-neutral-900 uppercase text-sm tracking-wide">
                Velouté de Calabaza
              </h5>
              <p className="text-neutral-500 text-sm font-light">
                Aceite de trufa blanca, semillas tostadas.
              </p>
              <span className="text-xs text-neutral-400">$16</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl italic text-neutral-500 mb-6">- Platos Fuertes -</h4>
          <ul className="space-y-4">
            <li>
              <h5 className="font-bold text-neutral-900 uppercase text-sm tracking-wide">
                Pato Confitado
              </h5>
              <p className="text-neutral-500 text-sm font-light">
                Puré de camote, salsa de frutos rojos, vegetales glaseados.
              </p>
              <span className="text-xs text-neutral-400">$42</span>
            </li>
            <li>
              <h5 className="font-bold text-neutral-900 uppercase text-sm tracking-wide">
                Robalo a la Sal
              </h5>
              <p className="text-neutral-500 text-sm font-light">
                Hinojo rostizado, mantequilla de limón eureka.
              </p>
              <span className="text-xs text-neutral-400">$45</span>
            </li>
          </ul>
        </div>

        <button
          onClick={closeModal}
          className="border-b border-neutral-900 pb-1 text-xs uppercase tracking-widest hover:text-neutral-600 active:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 transition-colors"
        >
          Cerrar Menú
        </button>
      </div>
    </Modal>
  );
};
