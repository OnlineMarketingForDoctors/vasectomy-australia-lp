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
          Each page covers the clinics in one city. More locations are added
          here as they go up.
        </p>

        <ul className="mt-12 max-w-3xl">
          {locations.map((p) => (
            <li key={p.slug} className="border-t border-line">
              <Link
                href={p.slug}
                className="group flex items-center gap-6 py-6 transition-colors hover:bg-bone/60"
              >
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="u-display text-title">{p.city}</span>
                    <span className="u-eyebrow">{p.state}</span>
                    <span className="text-[13px] text-ink-soft">
                      {p.clinics.length} clinic{p.clinics.length === 1 ? "" : "s"}
                    </span>
                  </span>
                  <span className="mt-1.5 block max-w-[52ch] text-[15px] leading-relaxed text-ink-soft">
                    {p.indexSummary}
                  </span>
                  <span className="mt-2 block font-mono text-[12.5px] text-ink-soft/80">
                    {p.slug}
                  </span>
                </span>
                <svg
                  width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden="true"
                  className="shrink-0 text-teal transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </li>
          ))}
          <li className="border-t border-line" />
        </ul>

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
