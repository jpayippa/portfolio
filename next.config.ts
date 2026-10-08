import type { NextConfig } from "next";

/**
 * The site is exported as plain static files (HTML, CSS, JS) into `out/`,
 * which Firebase Hosting serves directly. No Node server is needed.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
