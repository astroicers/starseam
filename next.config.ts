import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingIncludes: {
    "/": ["./registry/**/*"],
  },
};

export default nextConfig;
