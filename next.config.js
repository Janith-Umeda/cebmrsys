/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output:'export',
  images:{
    unoptimized:true
  },
  env:{
    API_HOST:'http://127.0.0.1:8000'
  }
}

module.exports = nextConfig