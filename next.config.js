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
  }
}

module.exports = nextConfig
