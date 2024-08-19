/** @type {import('next').NextConfig} */
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

export default nextConfig;
