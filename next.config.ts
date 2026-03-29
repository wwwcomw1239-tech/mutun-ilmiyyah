import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mutun-ilmiyyah",
  assetPrefix: "/mutun-ilmiyyah/",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: false,
  trailingSlash: true,
};

export default nextConfig;
