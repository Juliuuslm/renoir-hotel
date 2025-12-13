import { useEffect } from 'react';

/**
 * Hook para bloquear/desbloquear el scroll de la página
 * Maneja tanto scroll estándar como Lenis si está configurado
 */
export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
      // Calcular ancho de scrollbar para evitar layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      // Aplicar a html para máxima compatibilidad
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.paddingRight = `${scrollbarWidth}px`;

      // También en body por compatibilidad
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      // Si Lenis está activo (window.lenis), pausarlo
      if ((window as any).lenis) {
        (window as any).lenis.stop();
      }
    } else {
      // Restaurar estilos
      document.documentElement.style.overflow = '';
      document.documentElement.style.paddingRight = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';

      // Reanudar Lenis si estaba pausado
      if ((window as any).lenis) {
        (window as any).lenis.start();
      }
    }

    // Cleanup
    return () => {
      document.documentElement.style.overflow = '';
      document.documentElement.style.paddingRight = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isLocked]);
};
