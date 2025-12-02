/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Para SSG puro (static export)
  images: {
    unoptimized: true, // Necesario para static export
  },
  trailingSlash: false,
};

module.exports = nextConfig;
