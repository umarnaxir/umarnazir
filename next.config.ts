import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.2', '172.20.10.11'],
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  transpilePackages: ['react-fast-compare'],
};

export default nextConfig;
