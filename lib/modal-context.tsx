'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { useScrollLock } from './useScrollLock';

type ModalType = 'booking' | 'menu' | 'treatment' | 'facility' | 'event' | 'workshop' | 'suite-detail' | 'gallery-lightbox' | 'dish-detail' | 'pillar-detail' | null;

interface ModalContextType {
  activeModal: ModalType;
  modalData: any;
  openBookingModal: () => void;
  openMenuModal: () => void;
  openTreatmentModal: (data: any) => void;
  openFacilityModal: (data: any) => void;
  openEventModal: (data: any) => void;
  openWorkshopModal: (data: any) => void;
  openSuiteDetailModal: (data: any) => void;
  openGalleryLightboxModal: (data: any) => void;
  openDishDetailModal: (data: any) => void;
  openPillarDetailModal: (data: any) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [modalData, setModalData] = useState<any>(null);

  // Usar hook para manejar scroll lock
  useScrollLock(!!activeModal);

  const openBookingModal = () => {
    setActiveModal('booking');
    setModalData(null);
  };

  const openMenuModal = () => {
    setActiveModal('menu');
    setModalData(null);
  };

  const openTreatmentModal = (data: any) => {
    setActiveModal('treatment');
    setModalData(data);
  };

  const openFacilityModal = (data: any) => {
    setActiveModal('facility');
    setModalData(data);
  };

  const openEventModal = (data: any) => {
    setActiveModal('event');
    setModalData(data);
  };

  const openWorkshopModal = (data: any) => {
    setActiveModal('workshop');
    setModalData(data);
  };

  const openSuiteDetailModal = (data: any) => {
    setActiveModal('suite-detail');
    setModalData(data);
  };

  const openGalleryLightboxModal = (data: any) => {
    setActiveModal('gallery-lightbox');
    setModalData(data);
  };

  const openDishDetailModal = (data: any) => {
    setActiveModal('dish-detail');
    setModalData(data);
  };

  const openPillarDetailModal = (data: any) => {
    setActiveModal('pillar-detail');
    setModalData(data);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalData(null);
  };

  return (
    <ModalContext.Provider value={{
      activeModal,
      modalData,
      openBookingModal,
      openMenuModal,
      openTreatmentModal,
      openFacilityModal,
      openEventModal,
      openWorkshopModal,
      openSuiteDetailModal,
      openGalleryLightboxModal,
      openDishDetailModal,
      openPillarDetailModal,
      closeModal,
    }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
};
