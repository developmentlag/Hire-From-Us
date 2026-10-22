const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/l1-support-candidates',
        destination: '/L1-support-candidates',
      },
      {
        source: '/l2-support-candidates',
        destination: '/L2-support-candidates',
      },
    ];
  },
};

module.exports = nextConfig;
