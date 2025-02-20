/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        //   pathname: '/account123/**',
      },
      {
        protocol: 'http',
        hostname: '103.78.54.180',
      },
      {
        hostname: '*',
      },
    ],
  },
};

module.exports = nextConfig;
