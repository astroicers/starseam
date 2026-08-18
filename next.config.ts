import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Two locale route groups each carry their own root layout, so there is no
  // top-level layout for a conventional not-found page to nest in.
  experimental: { globalNotFound: true },
  outputFileTracingIncludes: {
    "/": ["./registry/**/*"],
  },
};

export default nextConfig;
