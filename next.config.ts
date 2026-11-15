import type { NextConfig } from "next";

// BUILD_TARGET=pages produces a fully static export for GitHub Pages
// (project site served from /my-portfolio/). Any other value keeps the
// sandbox's standalone output.
const isPagesExport = process.env.BUILD_TARGET === "pages";

const nextConfig: NextConfig = {
  ...(isPagesExport
    ? {
        output: "export" as const,
        basePath: "/my-portfolio",
        assetPrefix: "/my-portfolio/",
        trailingSlash: true,
        images: { unoptimized: true },
        distDir: "dist-pages",
      }
    : {
        output: "standalone" as const,
      }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
