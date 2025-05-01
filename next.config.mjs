/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            // Optionally, you can specify port and pathname too:
            // port: '',
            // pathname: '/images/**',
          },
        ],
      },
};

export default nextConfig;
