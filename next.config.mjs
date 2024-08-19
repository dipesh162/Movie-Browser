/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              port: '',
              pathname: '/**',
            },
        ],
        domains: ['image.tmdb.org'],
    },  
};

export default nextConfig;
