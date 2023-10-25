/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['https://a.supabase.co'],
  },
  experimental: {
    appDir: true,
  },
}