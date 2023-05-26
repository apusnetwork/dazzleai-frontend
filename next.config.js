/** @type {import('next').NextConfig} */
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
  // transpilePackages: ['antd'],
  // modularizeImports: {
  //   'antd': {
  //     transform: 'antd/es/{{ kebabCase member }}',
  //   },
  // }
  // transpilePackages: ['antd']
}

module.exports = nextConfig
