/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jnzsabhbfnivdiceoefg.supabase.co',
        pathname: '/storage/v1/object/**',
      },
    ],
  },
  // Optimizaciones para carga rápida de recursos
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Headers para mejorar el caché de videos
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ]
  },
}

export default nextConfig
