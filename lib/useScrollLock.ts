import { useEffect } from 'react';

/**
 * Hook para bloquear/desbloquear el scroll de la página
 * Maneja tanto scroll estándar como Lenis si está configurado
 */
export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    if (isLocked) {
      // Guardar scroll actual
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      // Aplicar estilos inline directamente
      htmlElement.style.overflow = 'hidden';
      htmlElement.style.height = '100vh';
      htmlElement.style.width = '100vw';

      bodyElement.style.overflow = 'hidden';
      bodyElement.style.height = '100vh';
      bodyElement.style.width = '100vw';
      bodyElement.style.position = 'fixed';
      bodyElement.style.top = '0';
      bodyElement.style.left = '0';
      bodyElement.style.right = '0';
      bodyElement.style.bottom = '0';
      bodyElement.style.paddingRight = `${scrollbarWidth}px`;

      // Si Lenis está activo, pausarlo
      try {
        if ((window as any).lenis && (window as any).lenis.stop) {
          (window as any).lenis.stop();
        }
      } catch (e) {
        // Ignorar error si Lenis no existe
      }

      // Retorno de cleanup
      return () => {
        // Restaurar estilos del body
        bodyElement.style.position = '';
        bodyElement.style.top = '';
        bodyElement.style.left = '';
        bodyElement.style.right = '';
        bodyElement.style.bottom = '';
        bodyElement.style.overflow = '';
        bodyElement.style.height = '';
        bodyElement.style.width = '';
        bodyElement.style.paddingRight = '';

        // Restaurar estilos del html
        htmlElement.style.overflow = '';
        htmlElement.style.height = '';
        htmlElement.style.width = '';
      };
    } else {
      // Cuando se desbloquea
      bodyElement.style.position = '';
      bodyElement.style.top = '';
      bodyElement.style.left = '';
      bodyElement.style.right = '';
      bodyElement.style.bottom = '';
      bodyElement.style.overflow = '';
      bodyElement.style.height = '';
      bodyElement.style.width = '';
      bodyElement.style.paddingRight = '';

      htmlElement.style.overflow = '';
      htmlElement.style.height = '';
      htmlElement.style.width = '';

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
