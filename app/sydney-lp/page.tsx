import { permanentRedirect } from "next/navigation";

/**
 * The Sydney page was first published at /sydney-lp and that link has been
 * shared, so the old path is kept and redirected.
 *
 * This is a route rather than a next.config redirect on purpose: redirects
 * declared in next.config are served by the router before the headers config
 * runs, so they answer without the X-Robots-Tag that CLAUDE.md requires on
 * every route. As a page, it gets the header like anything else.
 */
export default function SydneyLpRedirect() {
  permanentRedirect("/sydney");
}
