import type { MetadataRoute } from "next";

/**
 * Crawlers are deliberately ALLOWED to fetch every page — see CLAUDE.md.
 * Blocking with `Disallow` would stop them reading the noindex directive,
 * which is the most common way a "noindexed" page ends up indexed anyway.
 *
 * There is intentionally NO sitemap.xml while the site is not indexable.
 */
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/" }] };
}
