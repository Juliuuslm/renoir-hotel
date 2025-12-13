'use client';

import { X } from 'lucide-react';
import { ReactNode, useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup: restaurar scroll cuando el componente se desmonta
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handlers para swipe down gesture (solo mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaY = e.touches[0].clientY - startY;
    // Solo permitir drag hacia abajo
    if (deltaY > 0) {
      setCurrentY(deltaY);
    }
  };

  const handleTouchEnd = () => {
    // Si drag > 100px, cerrar modal
    if (currentY > 100) {
      onClose();
    }
    setCurrentY(0);
    setIsDragging(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        data-lenis-prevent
        className={`
          relative bg-white w-full
          max-h-[90vh] sm:max-h-[85vh] overflow-hidden
          shadow-2xl animate-fadeInUp

          /* Mobile: Bottom sheet con bordes redondeados superiores */
          sm:max-w-2xl
          rounded-t-3xl sm:rounded-xl

          /* Transformación para swipe gesture */
          transition-transform duration-200
        `}
        style={{
          transform: `translateY(${currentY}px)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Handle bar para mobile - indicador visual de swipe */}
        <div className="sm:hidden flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-neutral-300 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-neutral-100 sticky top-0 bg-white z-10">
          <h3 className="font-serif text-xl sm:text-2xl text-neutral-900">{title}</h3>
          <button
            onClick={onClose}
            className="p-3 sm:p-4 hover:bg-neutral-100 active:bg-neutral-200 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content con scroll interno */}
        <div className="p-4 sm:p-6 md:p-10 overflow-y-auto max-h-[calc(90vh-80px)]">
          {children}
        </div>
      </div>
    </div>
  );
};
