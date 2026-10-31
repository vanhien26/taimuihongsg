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
      {
        source: '/foreign-patient-pathway',
        destination: '/english',
      },
      {
        source: '/ear-nose-throat-hospital-for-foreigners-in-ho-chi-minh-city',
        destination: '/english',
      },
      {
        source: '/ear-conditions-we-treat',
        destination: '/english',
      },
      {
        source: '/nose-conditions-we-treat',
        destination: '/english',
      },
      {
        source: '/throat-and-larynx-conditions-we-treat',
        destination: '/english',
      },
      {
        source: '/pediatric-ent-conditions-we-treat',
        destination: '/english',
      },
    ]
  },
}

module.exports = nextConfig
