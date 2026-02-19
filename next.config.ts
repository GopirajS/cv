import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/cv',
  assetPrefix: '/cv/',
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
