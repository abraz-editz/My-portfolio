import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/My-portfolio',
  assetPrefix: '/My-portfolio/',
  images: {
    unoptimized: true,},
};

export default nextConfig;
