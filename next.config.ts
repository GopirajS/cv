import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* basePath: '/your-repo-name', // Uncomment and set your repository name for GitHub Pages subdirectory deployment */
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
