/** @type {import('next').NextConfig} */
const nextConfig = {
  // Headers de Segurança
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // HSTS - Forçar HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://api.github.com https://www.google-analytics.com; frame-ancestors 'none'; form-action 'self'; base-uri 'self'"
          },
          // X-Content-Type-Options
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // Referrer Policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // Permissions Policy
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=(), payment=()'
          },
          // X-Frame-Options
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ]
      }
    ]
  },

  // Otimização de imagens
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      }
    ]
  },

  // Compressão
  compress: true,

  // Remover header X-Powered-By
  poweredByHeader: false,

  // React Strict Mode
  reactStrictMode: true,
}

export default nextConfig