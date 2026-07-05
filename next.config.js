/** @type {import('next').NextConfig} */
const nextConfig = {
  // Génération statique maximale pour performances SEO
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
