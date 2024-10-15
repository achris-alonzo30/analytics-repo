/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GA_ID: process.env.GA_ID,
        MC_ID: process.env.MC_ID,
    }
};

export default nextConfig;
