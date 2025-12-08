/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Para SSG puro (static export)
  images: {
    loader: 'custom',
    loaderFile: './lib/image-loader.ts',
    deviceSizes: [320, 375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  trailingSlash: false,
};

module.exports = nextConfig;
