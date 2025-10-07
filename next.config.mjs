/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '1716637182.rsc.cdn77.org',
      },
      {
        protocol: 'https',
        hostname: 'jnzsabhbfnivdiceoefg.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'player.vimeo.com',
      },
    ],
  },
  // Optimizaciones de compilación
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimización de headers para cache
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|gif|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  // Comprimir respuestas
  compress: true,
  // Habilitar SWC minification
  swcMinify: true,
  // Optimización de módulos
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
    },
  },
}

export default nextConfig
