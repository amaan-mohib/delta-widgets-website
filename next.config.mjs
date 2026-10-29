/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    optimizePackageImports: ["@fluentui/react-components"],
  },
};

export default nextConfig;
