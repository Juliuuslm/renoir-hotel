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

      // PAUSAR Lenis completamente - esto es crítico
      // Lenis intercepta todos los eventos de scroll, asi que pausarlo es esencial
      if (lenis) {
        try {
          // Pausar Lenis
          lenis.stop();

          // Deshabilitar smooth wheel si es posible
          if (lenis.options) {
            lenis.options.smoothWheel = false;
          }
        } catch (e) {
          console.error('Error pausing Lenis:', e);
        }
      }

      // El scroll dentro del modal funciona porque:
      // 1. El modal tiene overflow-y-auto en su contenedor
      // 2. Lenis está completamente pausado y no intercepta eventos
      // 3. El navegador permite scroll nativo en elementos con overflow-y-auto
      // 4. No hay event listeners interfiriendo

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
            if (lenis.options) {
              lenis.options.smoothWheel = true;
            }
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
          if (lenis.options) {
            lenis.options.smoothWheel = true;
          }
        } catch (e) {
          console.error('Error resuming Lenis:', e);
        }
      }
    }
  }, [isLocked]);
};
