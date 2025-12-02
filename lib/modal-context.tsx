'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type ModalType = 'booking' | 'menu' | null;

interface ModalContextType {
  activeModal: ModalType;
  openBookingModal: () => void;
  openMenuModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openBookingModal = () => setActiveModal('booking');
  const openMenuModal = () => setActiveModal('menu');
  const closeModal = () => setActiveModal(null);

  return (
    <ModalContext.Provider value={{ activeModal, openBookingModal, openMenuModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
};
