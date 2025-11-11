/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath eliminado para despliegue en la raíz de GOTS.github.io
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
