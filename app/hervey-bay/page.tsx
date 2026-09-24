import { permanentRedirect } from "next/navigation";

/**
 * The Hervey Bay clinic has closed. This stays a route rather than a redirect
 * in next.config.ts because the router answers config redirects before the
 * headers() config runs, so those carry no X-Robots-Tag — see CLAUDE.md.
 *
 * It points at the index rather than the nearest clinic: the closest is over
 * two hours away, and sending someone there implies a service that is not
 * in Hervey Bay.
 */
export default function HerveyBayClosed() {
  permanentRedirect("/");
}
