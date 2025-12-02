import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimasi untuk development speed
  reactStrictMode: true,
  
  // Note: SWC minify sudah default di Next.js 16, tidak perlu dikonfigurasi
  
  // Optimasi kompilasi TypeScript
  typescript: {
    // Skip type checking saat build (gunakan lint terpisah)
    ignoreBuildErrors: false,
  },
  
  // Optimasi images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Optimasi output
  compress: true, // Enable gzip compression
  
  // Optimasi experimental features untuk performa
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-select'],
  },
  
  // Optimasi webpack untuk development
  webpack: (config, { dev }) => {
    // Optimasi untuk development
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    
    return config;
  },
};

export default nextConfig;
