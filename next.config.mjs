/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [60, 80],
  },
  async redirects() {
    return [{ source: "/resume", destination: "/files/resume.pdf", permanent: false }];
  },
};

export default nextConfig;
