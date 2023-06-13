/** @type {import('next').NextConfig} */

const isDevelopemnt = process.env.APP_ENV === 'development'

console.log(isDevelopemnt)

const nextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{
          key: "Referrer-Policy",
          value: "no-referrer-when-downgrade"
        }]
      }
    ]
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: "/oapi/:path*",
          destination: isDevelopemnt ? "https://test-api.dazzleai.network/api/:path*" : "https://api.dazzleai.network/api/:path*"
        }
      ]
    }
  },
  // transpilePackages: ['antd'],
  // modularizeImports: {
  //   'antd': {
  //     transform: 'antd/es/{{ kebabCase member }}',
  //   },
  // }
  // transpilePackages: ['antd']
}

module.exports = nextConfig
