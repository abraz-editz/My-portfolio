import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'My-portfolio';

const nextConfig: NextConfig = {
  /* config options here */
  output: isProd ? 'export':undefined,
  basePath: isProd ? `/${repoName}`:'',
  assetPrefix: isProd ? `/${repoName}`:'',
  images: {
    unoptimized: true,},
};

export default nextConfig;
