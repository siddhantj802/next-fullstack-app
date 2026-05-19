/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.pexels.com",
        pathname: "/**",
      },
    ],
  },

  reactCompiler: true,
  cacheComponents: true,
};

export default nextConfig;