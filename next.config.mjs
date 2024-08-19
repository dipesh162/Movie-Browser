/** @type {import('next').NextConfig} */
import withImage from 'next-images'

const nextConfig = {
    images: {
        disableStaticImages: true,
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
