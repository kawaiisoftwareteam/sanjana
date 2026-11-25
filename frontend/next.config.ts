import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow opening the dev server from other devices on the local network (e.g. phone testing)
  allowedDevOrigins: ["192.168.0.230"],
};

export default nextConfig;
