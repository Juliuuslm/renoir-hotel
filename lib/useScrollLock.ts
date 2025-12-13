import { useEffect } from 'react';

/**
 * Hook para bloquear/desbloquear el scroll de la página
 * Maneja Lenis + scroll estándar
 * Permite scroll DENTRO del modal pero bloquea scroll de la página principal
 */
export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const lenis = (window as any).lenis;

    if (isLocked) {
      // Bloquear overflow en html y body
      htmlElement.style.overflow = 'hidden';
      bodyElement.style.overflow = 'hidden';
      bodyElement.style.paddingRight = `${scrollbarWidth}px`;

      // Pausar Lenis para evitar animaciones de scroll en la página principal
      if (lenis) {
        try {
          lenis.stop();
        } catch (e) {
          console.error('Error pausing Lenis:', e);
        }
      }

      // El scroll dentro del modal funciona porque:
      // 1. El modal tiene data-lenis-prevent que excluye eventos de Lenis
      // 2. El modal tiene overflow-y-auto en su contenedor
      // 3. Lenis no intercepta eventos dentro de [data-lenis-prevent]
      // 4. El navegador permite scroll nativo en el modal

      // Cleanup
      return () => {
        // Restaurar estilos
        htmlElement.style.overflow = '';
        bodyElement.style.overflow = '';
        bodyElement.style.paddingRight = '';

        // Reanudar Lenis
        if (lenis) {
          try {
            lenis.start();
          } catch (e) {
            console.error('Error resuming Lenis:', e);
          }
        }
      };
    } else {
      // Cuando se desbloquea - restaurar todo
      htmlElement.style.overflow = '';
      bodyElement.style.overflow = '';
      bodyElement.style.paddingRight = '';

      // Reanudar Lenis si estaba pausado
      if (lenis) {
        try {
          lenis.start();
        } catch (e) {
          console.error('Error resuming Lenis:', e);
        }
      }
    }
  }, [isLocked]);
};
