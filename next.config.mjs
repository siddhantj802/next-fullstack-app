/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images:{
    domains: ["images.pexels.com" , "dummyimage.com"]
  },
  reactCompiler: true,
  cacheComponents: true,
};

export default nextConfig;
