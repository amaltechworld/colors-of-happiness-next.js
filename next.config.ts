import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // App Router is enabled by default in Next.js 13+
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
