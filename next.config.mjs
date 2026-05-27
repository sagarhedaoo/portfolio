/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [50, 75],
    remotePatterns: [
      { protocol: "https", hostname: "api.microlink.io" },
      { protocol: "https", hostname: "assets.aceternity.com" },
    ],
  },
};

export default nextConfig;
