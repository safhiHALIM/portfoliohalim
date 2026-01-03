import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  // Use basePath only for GitHub Pages
  basePath: isGithubActions ? "/portfoliohalim" : "",
  // Use static export only for GitHub Pages; Vercel handles standard builds better
  output: isGithubActions ? "export" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
