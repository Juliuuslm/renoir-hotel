'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { useScrollLock } from './useScrollLock';

type ModalType = 'booking' | 'menu' | 'treatment' | 'facility' | 'event' | 'workshop' | 'suite-detail' | 'gallery-lightbox' | 'dish-detail' | 'pillar-detail' | 'location-detail' | null;

interface ModalContextType {
  activeModal: ModalType;
  modalData: Record<string, unknown> | null;
  openBookingModal: () => void;
  openMenuModal: () => void;
  openTreatmentModal: (data: Record<string, unknown>) => void;
  openFacilityModal: (data: Record<string, unknown>) => void;
  openEventModal: (data: Record<string, unknown>) => void;
  openWorkshopModal: (data: Record<string, unknown>) => void;
  openSuiteDetailModal: (data: Record<string, unknown>) => void;
  openGalleryLightboxModal: (data: Record<string, unknown>) => void;
  openDishDetailModal: (data: Record<string, unknown>) => void;
  openPillarDetailModal: (data: Record<string, unknown>) => void;
  openLocationDetailModal: (data: Record<string, unknown>) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [modalData, setModalData] = useState<Record<string, unknown> | null>(null);

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

  const openTreatmentModal = (data: Record<string, unknown>) => {
    setActiveModal('treatment');
    setModalData(data);
  };

  const openFacilityModal = (data: Record<string, unknown>) => {
    setActiveModal('facility');
    setModalData(data);
  };

  const openEventModal = (data: Record<string, unknown>) => {
    setActiveModal('event');
    setModalData(data);
  };

  const openWorkshopModal = (data: Record<string, unknown>) => {
    setActiveModal('workshop');
    setModalData(data);
  };

  const openSuiteDetailModal = (data: Record<string, unknown>) => {
    setActiveModal('suite-detail');
    setModalData(data);
  };

  const openGalleryLightboxModal = (data: Record<string, unknown>) => {
    setActiveModal('gallery-lightbox');
    setModalData(data);
  };

  const openDishDetailModal = (data: Record<string, unknown>) => {
    setActiveModal('dish-detail');
    setModalData(data);
  };

  const openPillarDetailModal = (data: Record<string, unknown>) => {
    setActiveModal('pillar-detail');
    setModalData(data);
  };

  const openLocationDetailModal = (data: Record<string, unknown>) => {
    setActiveModal('location-detail');
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
      openLocationDetailModal,
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
