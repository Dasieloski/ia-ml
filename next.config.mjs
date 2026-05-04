/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    // Tree-shake large icon/component libraries on the edge
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
