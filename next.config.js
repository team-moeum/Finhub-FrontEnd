/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=31536000, max-age=0',
          },
        ],
      },
    ];
  },
  images: {
    domains: ['finhub-bucket.s3.ap-northeast-2.amazonaws.com']
  }
}


module.exports = nextConfig
