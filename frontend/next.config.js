/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'http',
  //       hostname: 'localhost',
  //       port: '8000',
  //       pathname: '/**/**/**.*',
  //     },
  //   ],
  // },
  // images: {
  //   domains: ["localhost:4200"],
  // },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
