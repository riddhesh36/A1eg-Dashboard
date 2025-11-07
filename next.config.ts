import type { NextConfig } from "next";

const nextConfig = {
  images: {
    // ✅ Option 1: For standard domains
    domains: ["images.unsplash.com", "cdn.pixabay.com", "yourdomain.com", "yt3.ggpht.com"],

    // ✅ Option 2: For remote patterns (recommended for complex URLs)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.your-external-source.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};


export default nextConfig;
