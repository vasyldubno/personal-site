/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { 
        protocol: 'https', 
        hostname: 'res.cloudinary.com'
      }
    ]
    // loader: 'cloudinary',
    // path: 'https://res.cloudinary.com/dtkchspyx/image/upload',
  }
};

export default nextConfig;