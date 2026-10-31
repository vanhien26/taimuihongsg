/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/khoa-kham-noi-soi-tai-mui-hong',
        destination: '/chuyen-khoa/khoa-kham-noi-soi-tai-mui-hong',
      },
      {
        source: '/khoa-phau-thuat-tai-mui-hong',
        destination: '/chuyen-khoa/khoa-phau-thuat-tai-mui-hong',
      },
      {
        source: '/khoa-noi-tru',
        destination: '/chuyen-khoa/khoa-noi-tru',
      },
      {
        source: '/chuyen-khoa/do-da-ki-giac-ngu',
        destination: '/do-da-ki-giac-ngu',
      },
      {
        source: '/chuyen-khoa/do-da-ky-giac-ngu',
        destination: '/do-da-ki-giac-ngu',
      },
    ]
  },
}

module.exports = nextConfig
