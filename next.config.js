/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removido: output: 'export' para permitir servidor dinámico de Next.js
  // Esto permite que Next.js se ejecute como servidor en Dokploy
  images: {
    loader: 'custom',
    loaderFile: './lib/image-loader.ts',
    deviceSizes: [320, 375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  trailingSlash: false,
};

module.exports = nextConfig;
