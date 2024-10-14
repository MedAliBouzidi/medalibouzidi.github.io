/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    //basePath:  '/portfolio',
    //assetPrefix: '/portfolio/',
    reactStrictMode: true,
    images: {
        domains: ['images.pexels.com'],
        //  unoptimized: true,
    }
};

export default nextConfig;
