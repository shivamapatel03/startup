import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.29.212", "localhost"],
  images: {
    qualities: [75, 100],
  },
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
