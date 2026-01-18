import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/uc/**', // Allows paths starting with /uc (common for direct image links)
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Needed for some Google images
        port: '',
        pathname: '/**',
      },
      // You may also need a pattern for thumbnail URLs if used
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/thumbnail/**',
      },
    ],
  },
};

module.exports = nextConfig;

