/**
 * Custom Image Loader para optimizar imágenes de Unsplash en dispositivos mobile
 * Este loader ajusta automáticamente el ancho, calidad y formato según el dispositivo
 */

export default function unsplashLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // Si no es una URL de Unsplash, devolver el src original
  if (!src.includes('unsplash.com')) {
    return src;
  }

  // Si no hay width (ej: cuando se usa fill en Image), devolver sin optimizar
  if (!width || typeof width !== 'number') {
    return src;
  }

  try {
    const url = new URL(src);
    const params = new URLSearchParams(url.search);

    // Ajustar width para mobile (optimizar tamaño)
    // En mobile, cargamos 2x para Retina, pero con un máximo de 750px
    const optimalWidth = width <= 640 ? Math.min(width * 2, 750) : width;
    params.set('w', optimalWidth.toString());

    // Ajustar quality para mobile (menor calidad = menor tamaño)
    // Mobile: 70%, Desktop: 80%
    const optimalQuality = width <= 640 ? 70 : quality || 80;
    params.set('q', optimalQuality.toString());

    // Forzar formato WebP en mobile para mejor compresión
    if (width <= 768) {
      params.set('fm', 'webp');
    }

    // Auto: permite a Unsplash optimizar automáticamente
    params.set('auto', 'format,compress');

    // Fit: crop para mantener aspect ratio
    if (!params.has('fit')) {
      params.set('fit', 'crop');
    }

    url.search = params.toString();
    return url.toString();
  } catch (error) {
    // Si hay error parseando la URL, devolver original
    console.error('Error en image loader:', error);
    return src;
  }
}
