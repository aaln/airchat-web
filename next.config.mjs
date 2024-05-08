/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'air.chat',
        protocol: 'https',
        port: ''
      }
    ]
  }
};

export default nextConfig;
