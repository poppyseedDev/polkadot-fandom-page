/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nftstorage.link',
        port: '',
        pathname: '/ipfs/**',
      },
    ],
  },
}

module.exports = nextConfig
