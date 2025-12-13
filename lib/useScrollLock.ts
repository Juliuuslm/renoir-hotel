import { useEffect } from 'react';

/**
 * Hook para bloquear/desbloquear el scroll de la página
 * Permite scroll DENTRO del modal pero bloquea scroll de la página principal
 */
export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (isLocked) {
      // Solo bloquear overflow en html y body - SIN position:fixed
      // Esto permite que elementos dentro (el modal) puedan scrollear
      htmlElement.style.overflow = 'hidden';
      bodyElement.style.overflow = 'hidden';
      bodyElement.style.paddingRight = `${scrollbarWidth}px`;

      // Si Lenis está activo, pausarlo
      try {
        if ((window as any).lenis && (window as any).lenis.stop) {
          (window as any).lenis.stop();
        }
      } catch (e) {
        // Ignorar error si Lenis no existe
      }

      // Bloquear scroll wheel en document, pero permitir si está dentro del modal
      const handleWheel = (e: WheelEvent) => {
        const target = e.target as HTMLElement;

        // Subir el árbol DOM para ver si estamos en un elemento scrolleable
        let current: HTMLElement | null = target;
        while (current && current !== bodyElement) {
          const style = window.getComputedStyle(current);
          // Si encontramos un elemento con overflow-y auto/scroll y con contenido scrolleable
          if ((style.overflowY === 'auto' || style.overflowY === 'scroll') &&
              current.scrollHeight > current.clientHeight) {
            // Permitir scroll en este elemento
            return;
          }
          current = current.parentElement;
        }

        // Si no estamos en un area scrolleable, bloquear
        e.preventDefault();
      };

      const handleTouchMove = (e: TouchEvent) => {
        const target = e.target as HTMLElement;

        // Subir el árbol DOM para ver si estamos en un elemento scrolleable
        let current: HTMLElement | null = target;
        while (current && current !== bodyElement) {
          const style = window.getComputedStyle(current);
          // Si encontramos un elemento con overflow-y auto/scroll y con contenido scrolleable
          if ((style.overflowY === 'auto' || style.overflowY === 'scroll') &&
              current.scrollHeight > current.clientHeight) {
            // Permitir scroll en este elemento
            return;
          }
          current = current.parentElement;
        }

        // Si no estamos en un area scrolleable, bloquear
        e.preventDefault();
      };

      document.addEventListener('wheel', handleWheel, { passive: false });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });

      // Cleanup
      return () => {
        document.removeEventListener('wheel', handleWheel);
        document.removeEventListener('touchmove', handleTouchMove);

        // Restaurar estilos
        htmlElement.style.overflow = '';
        bodyElement.style.overflow = '';
        bodyElement.style.paddingRight = '';
      };
    } else {
      // Restaurar estilos
      htmlElement.style.overflow = '';
      bodyElement.style.overflow = '';
      bodyElement.style.paddingRight = '';

      // Reanudar Lenis
      try {
        if ((window as any).lenis && (window as any).lenis.start) {
          (window as any).lenis.start();
        }
      } catch (e) {
        // Ignorar error si Lenis no existe
      }
    }
  }, [isLocked]);
};
