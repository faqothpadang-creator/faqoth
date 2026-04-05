import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Memaksa mesin untuk mengabaikan peringatan ESLint
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Memaksa mesin untuk mengabaikan peringatan TypeScript
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;