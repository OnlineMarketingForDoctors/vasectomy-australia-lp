/**
 * SINGLE SOURCE OF TRUTH FOR SEARCH-ENGINE INDEXING.
 *
 * See CLAUDE.md — this site must not be indexed until launch. Every layer
 * (the X-Robots-Tag header in next.config.ts, the <meta name="robots"> tag in
 * app/layout.tsx, and app/robots.ts) is driven by this one constant, so
 * lifting the noindex at launch is a one-value change and no page can be
 * added that silently misses a layer.
 *
 * Default is NOT indexable. To allow indexing in production only, set the
 * environment variable ALLOW_INDEXING=true on the production deployment and
 * leave it unset everywhere else — preview deployments must stay noindexed
 * even after launch.
 *
 * NOTE: robots.txt must NOT `Disallow` these pages. Disallow blocks crawling,
 * not indexing: a disallowed URL can still be listed if something links to it,
 * and the crawler never fetches the page so it never sees the noindex below.
 * Crawlers must be allowed to fetch, so that they can read noindex and drop
 * the URL.
 */

export const ALLOW_INDEXING =
  process.env.ALLOW_INDEXING === "true" &&
  process.env.VERCEL_ENV === "production";

/** Value for both the X-Robots-Tag header and the robots meta tag. */
export const ROBOTS_DIRECTIVE = ALLOW_INDEXING
  ? "index, follow"
  : "noindex, nofollow, noarchive, nosnippet";
