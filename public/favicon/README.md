# Favicon

Esta carpeta contiene los archivos del favicon del sitio Hotel Renoir.

## Archivos esperados:

- `favicon.ico` - Favicon de 32x32px (compatible con navegadores antiguos)
- `favicon-16x16.png` - Favicon de 16x16px
- `favicon-32x32.png` - Favicon de 32x32px
- `favicon-96x96.png` - Favicon de 96x96px
- `apple-touch-icon.png` - Icono de 180x180px para iOS
- `android-chrome-192x192.png` - Icono para Android
- `android-chrome-512x512.png` - Icono grande para Android
- `site.webmanifest` - Manifest para PWA

## Configuración en Next.js:

El favicon se configura en `app/layout.tsx` usando la metadata:

```tsx
export const metadata = {
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', url: '/favicon/favicon-32x32.png', sizes: '32x32' },
    ],
  },
};
```
