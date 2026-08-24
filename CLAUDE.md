# vasectomy-australia-lp

## HARD REQUIREMENT: this site must not be indexed until launch

Every page of this site must be excluded from search engine indexes. The page
is expected to be **publicly reachable via its direct link** — that is fine and
intended. What must not happen is the URL appearing in search results.

This is **temporary but standing**: it applies to every page added, every route,
and every deployment (preview and production), and stays in force until the
repository owner explicitly instructs that indexing be allowed. It must not be
removed or weakened as a side effect of any other work.

### What to implement, on every page and every deployment

1. **`X-Robots-Tag: noindex, nofollow, noarchive, nosnippet` response header**
   on all routes, including static assets and any API routes. This is the
   primary control — it is the hardest for a crawler to miss.
2. **`<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">`**
   in the `<head>` of every HTML page, as a second, independent layer.
3. **No sitemap.xml**, and no submission of any URL to Google Search Console,
   Bing Webmaster Tools, or any other indexing/inspection API.

### Do NOT rely on `robots.txt` `Disallow` to achieve this

`Disallow` blocks *crawling*, not *indexing*. A URL that is disallowed can
still appear in search results if anything links to it — and because the
crawler is forbidden from fetching the page, it never sees the `noindex`
directive above and therefore cannot honour it. Blocking in robots.txt is the
single most common way a "noindexed" page ends up indexed anyway.

Crawlers must be **allowed to fetch** these pages so that they can read the
`noindex` directive and drop the URL.

### Because the noindex is temporary, it must lift as a single switch

Lifting the noindex at launch must be a one-line change, not a hunt through the
codebase. Implement both layers above from **one shared flag** (a single
constant or environment variable, e.g. `ALLOW_INDEXING`), defaulting to "not
indexable", so that:

- the header, the meta tag, and robots.txt are all driven by that one value;
- no page can be added that silently misses a layer;
- production can be flipped to indexable without touching preview deployments.

Preview/staging deployments must **stay** noindexed even after launch.

### noindex is not privacy

`noindex` is a request that well-behaved search engines honour. It does not
prevent access — that is acceptable here, since the page is meant to be shared
by link. But be aware: anyone with the URL can open the page, scrapers that
ignore robots directives will still read it, and the link may be forwarded
onward. Do not put anything on the page that would be harmful to have public,
and do not treat `noindex` as a substitute for authentication.

### Before any launch

Removing the noindex is a deliberate, owner-approved step. Never remove these
controls as part of unrelated work, and never assume a "go live" instruction
includes permission to allow indexing — confirm it explicitly.

Note for whoever flips the switch: removing `noindex` makes the page *eligible*
for indexing, it does not request it. Indexing then takes days-to-weeks. If the
page must rank promptly at launch, that is the point to add a sitemap and
request indexing in Search Console — not before.
