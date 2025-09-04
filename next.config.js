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
        source: '/ChatReplyLogo.png',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }]
      }
    ];
  }
};

module.exports = nextConfig;
