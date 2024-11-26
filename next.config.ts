import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        // I do this because i don't know if all pokemon images are in the same domain
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
