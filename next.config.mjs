/** @type {import('next').NextConfig} */
const withImage=require('next-images')

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
        domains: ['image.tmdb.org','*.vercel.app',],
    },  
};

export default withImage(nextConfig);
