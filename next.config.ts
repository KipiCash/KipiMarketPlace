/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  basePath: '/KipiMarketPlace',  // Aquí pones el nombre de tu repositorio
  assetPrefix: './',  // Esto es necesario para los assets como imágenes, CSS, JS, etc.

    // Configuración para permitir imágenes estáticas
  images: {
    loader: 'akamai', // Esto asegura que Next.js usará rutas estáticas para las imágenes
    path: './',
  },
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}
 
module.exports = nextConfig