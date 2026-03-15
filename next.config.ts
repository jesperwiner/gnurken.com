import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gnurken.com",
        port: "",
        pathname: "/static/**",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
    ],
  },
};

export default nextConfig;
