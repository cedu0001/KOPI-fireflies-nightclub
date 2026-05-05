/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nightclub-api.onrender.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
