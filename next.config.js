/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  async headers() {
    // Prevent stale cache for icons (both browser & Vercel edge)
    return [
      {
        source: '/icon.svg',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }]
      },
      {
        source: '/favicon.ico',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }]
      },
      {
        source: '/apple-icon.png',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }]
      }
    ];
  }
};

module.exports = nextConfig;
