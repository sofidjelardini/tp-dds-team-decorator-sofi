/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com'
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/api/external/:path*',
                destination: 'http://localhost:8086/api/:path*' // Usa la URL dinámica para redirigir a la API externa
            }
        ];
    }
};

export default nextConfig;
