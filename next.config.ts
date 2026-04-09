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
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }, // Change '*' to your domain for production
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};

export default nextConfig;
