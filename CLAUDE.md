# vasectomy-australia-lp

## HARD REQUIREMENT: this site must not be indexed by search engines

Every page of this site must be excluded from search engine indexes. This is a
standing requirement — it applies to every page added, every route, every
deployment (preview and production), and must not be removed or weakened
without an explicit instruction from the repository owner.

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

### noindex is not privacy

`noindex` is a request that well-behaved search engines honour. It does not
prevent access. Anyone with the URL can still open the page, and scrapers that
ignore robots directives will still read it. If the content must actually be
private, put authentication or platform-level deployment protection in front
of it — do not treat `noindex` as a substitute.

### Before any launch

Removing the noindex is a deliberate, owner-approved step. Never remove these
controls as part of unrelated work, and never assume a "go live" instruction
includes permission to allow indexing — confirm it explicitly.
