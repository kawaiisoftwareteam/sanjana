import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes the site to the `out` folder
  output: "export",
  // Emit /about/index.html etc. so plain static hosts serve routes correctly
  trailingSlash: true,
  images: { unoptimized: true },
  // Allow opening the dev server from other devices on the local network (e.g. phone testing)
  allowedDevOrigins: ["192.168.0.230"],
};

export default nextConfig;
