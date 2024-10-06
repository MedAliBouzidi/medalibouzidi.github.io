/** @type {import('next').NextConfig} */
const nextConfig = {};

/**
 * Error: Invalid src prop (https://images.pexels.com/photos/18150916/pexels-photo-18150916/free-photo-of-woman-hand-pouring-water-and-brewing-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) on `next/image`, hostname "images.pexels.com" is not configured under images in your `next.config.js`
 */
nextConfig.images = {
    domains: ['images.pexels.com'],
};

export default nextConfig;
