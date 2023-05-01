/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output:'export',
  images:{
    unoptimized:true
  },
  env:{
    API_HOST:'http://api.cebmr'
  }
}

module.exports = nextConfig