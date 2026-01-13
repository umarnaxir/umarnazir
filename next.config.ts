import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  transpilePackages: ['react-fast-compare'],
};

export default nextConfig;
