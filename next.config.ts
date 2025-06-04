import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/du-prd/books/images/**",
      },
      {
        protocol: "https",
        hostname: "static01.nyt.com",
        pathname: "/bestsellers/images/**",
      },
    ],
  },
};

export default nextConfig;
