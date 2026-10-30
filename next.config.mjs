/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // cacheComponents: true,
  // partialPrefetching: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["@fluentui/react-components"],
  },
  basePath: process.env.PAGES_BASE_PATH,
};

export default nextConfig;
