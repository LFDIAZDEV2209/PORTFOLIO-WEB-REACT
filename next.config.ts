import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  experimental: {
    optimizeCss: false, // Disabled for static export compatibility
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Disable features that don't work with static export
  swcMinify: true,
  reactStrictMode: true,
};

export default nextConfig;
