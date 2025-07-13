import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // App Router is enabled by default in Next.js 13+
    distDir: ".next",
    images: {
        formats: ["image/webp", "image/avif"],
    },
    eslint: {
        // Only run ESLint on specific directories during build
        dirs: ["src/app", "src/Components"],
        // Don't fail the build on ESLint errors during production
        ignoreDuringBuilds: false,
    },
    typescript: {
        // Don't fail the build on TypeScript errors during production
        ignoreBuildErrors: false,
    },
    // Configure development server
    ...(process.env.NODE_ENV === "development" && {
        async headers() {
            return [
                {
                    source: "/:path*",
                    headers: [
                        {
                            key: "Access-Control-Allow-Origin",
                            value: "*",
                        },
                    ],
                },
            ];
        },
    }),
};

export default nextConfig;
