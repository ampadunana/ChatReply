/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  async rewrites() {
    return [
      { source: '/favicon.ico', destination: '/ChatReplyLogo.png' },
      { source: '/favicon-16x16.png', destination: '/ChatReplyLogo.png' },
      { source: '/favicon-32x32.png', destination: '/ChatReplyLogo.png' },
      { source: '/favicon-48x48.png', destination: '/ChatReplyLogo.png' },
      { source: '/favicon-64x64.png', destination: '/ChatReplyLogo.png' },
      { source: '/favicon-128x128.png', destination: '/ChatReplyLogo.png' },
      { source: '/favicon-256x256.png', destination: '/ChatReplyLogo.png' }
    ];
  }
};

module.exports = nextConfig;
