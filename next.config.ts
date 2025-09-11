import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    dirs: ['src'], // Only run ESLint on these directories
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'preview.colorlib.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/auth/login',
        destination: '/auth',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
