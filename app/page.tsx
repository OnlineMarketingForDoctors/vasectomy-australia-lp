import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ROBOTS_DIRECTIVE } from "@/lib/seo";
import { site } from "@/lib/content";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Landing pages — Vasectomy Australia",
  description: "Index of Vasectomy Australia location landing pages.",
  robots: ROBOTS_DIRECTIVE,
};

/**
 * The host the printed links point at. Vercel sets this on every deployment,
 * production and preview alike, so a preview of this index still lists the
 * addresses you would paste into a campaign rather than its own one-off
 * hostname. Falls back to the production domain when built outside Vercel.
 */
const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://vasectomy-australia-lp.vercel.app";

const STATE_NAMES: Record<string, string> = {
  NSW: "New South Wales",
  VIC: "Victoria",
  QLD: "Queensland",
  WA: "Western Australia",
  SA: "South Australia",
  ACT: "Australian Capital Territory",
  TAS: "Tasmania",
  NT: "Northern Territory",
};

/** Keeps the registry's order, but breaks the list up by state. */
function groupByState(all: typeof locations): [string, typeof locations][] {
  const order: string[] = [];
  const byState = new Map<string, typeof locations>();
  for (const l of all) {
    if (!byState.has(l.state)) {
      byState.set(l.state, []);
      order.push(l.state);
    }
    byState.get(l.state)!.push(l);
  }
  return order.map((s) => [s, byState.get(s)!]);
}

export default function Home() {
  return (
    <main className="min-h-screen bg-paper">
      <header className="border-b border-line">
        <div className="u-wrap flex h-[76px] items-center">
          <Image
            src="/img/logo-dark.webp"
            alt="Vasectomy Australia"
            width={200}
            height={34}
            priority
            className="h-7 w-auto md:h-8"
          />
        </div>
      </header>

      <div className="u-wrap py-16 md:py-24">
        <p className="u-eyebrow">Landing pages</p>
        <h1 className="u-display mt-3 text-headline">
          Vasectomy Australia, by location.
        </h1>
        <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-ink-soft">
          Each page covers the clinics in one city. {locations.length} pages,
          grouped by state.
        </p>

        {groupByState(locations).map(([state, group]) => (
        <section key={state}>
        <h2 className="u-display mt-14 text-title">{STATE_NAMES[state] ?? state}</h2>
        <ul className="mt-5 max-w-3xl">
          {group.map((p) => (
            <li
              key={p.slug}
              className="group relative flex items-center gap-6 border-t border-line py-6 transition-colors hover:bg-bone/60"
            >
              <div className="min-w-0 flex-1">
                <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  {/* The row is one hit area: this link's ::after covers the
                      whole <li>, which keeps the markup to one anchor per
                      destination rather than nesting the URL inside it. */}
                  <Link
                    href={p.slug}
                    className="u-display text-title after:absolute after:inset-0 after:content-['']"
                  >
                    {p.city}
                  </Link>
                  <span className="u-eyebrow">{p.state}</span>
                  <span className="text-[13px] text-ink-soft">
                    {p.clinics.length} clinic{p.clinics.length === 1 ? "" : "s"}
                  </span>
                </p>
                <p className="mt-1.5 max-w-[52ch] text-[15px] leading-relaxed text-ink-soft">
                  {p.indexSummary}
                </p>
                {/* Lifted above the overlay so it can be clicked, right-clicked
                    and copied as the address it reads. */}
                <a
                  href={`${SITE_URL}${p.slug}`}
                  className="relative z-10 mt-2 inline-block font-mono text-[12.5px] text-ink-soft/80 underline decoration-line underline-offset-4 transition [overflow-wrap:anywhere] hover:text-teal hover:decoration-teal"
                >
                  {SITE_URL}
                  {p.slug}
                </a>
              </div>
              <svg
                width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden="true"
                className="shrink-0 text-teal transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </li>
          ))}
          <li className="border-t border-line" />
        </ul>
        </section>
        ))}

        <p className="mt-14 border-t border-line pt-6 text-sm text-ink-soft">
          {site.phoneLabel} ({site.phoneDigits}) ·{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-teal underline underline-offset-2"
          >
            {site.email}
          </a>
        </p>
      </div>
    </main>
  );
}
