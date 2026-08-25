import type { NextConfig } from "next";
import { ROBOTS_DIRECTIVE } from "./lib/seo";

const nextConfig: NextConfig = {
  // See CLAUDE.md + lib/seo.ts. The X-Robots-Tag header is the primary
  // indexing control: it covers every route, including static assets and any
  // API routes, and is the hardest for a crawler to miss.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: ROBOTS_DIRECTIVE }],
      },
    ];
  },
};

export default nextConfig;
