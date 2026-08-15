/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Allow cross-origin requests for this development host
  allowedDevOrigins: ['10.67.15.151', 'localhost', '127.0.0.1'],
  // Enable webpack mode explicitly
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

module.exports = nextConfig;