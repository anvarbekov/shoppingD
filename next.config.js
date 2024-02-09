/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecomfull.netlify.app/', // if your website has no www, drop it
      },
      {
        protocol: 'https',
        hostname: 'ecomfull.netlify.app/',
      },
    ],
  },
}

module.exports = nextConfig
