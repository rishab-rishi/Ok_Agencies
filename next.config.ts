/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This ensures environment variables are properly loaded
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_PORT: process.env.EMAIL_PORT,
    EMAIL_SECURE: process.env.EMAIL_SECURE,
    EMAIL_RECEIVER: process.env.EMAIL_RECEIVER,
    // Note: We don't include EMAIL_PASS here for security
  },
};

module.exports = nextConfig;