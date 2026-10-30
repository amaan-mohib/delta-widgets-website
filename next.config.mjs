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
  // basePath:
  //   process.env.NEXT_PUBLIC_WEBSITE_URL || "https://delta-widgets.vercel.app",
};

export default nextConfig;
