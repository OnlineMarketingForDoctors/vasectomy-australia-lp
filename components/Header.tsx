"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { useBooking } from "./BookingModal";

const NAV = [
  { label: "The 15 minutes", href: "#how" },
  { label: "Your doctors", href: "#doctors" },
  { label: "Price", href: "#price" },
  { label: "Locations", href: "#locations" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const { open } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // On mobile the hero photograph runs up behind the bar, so at the top of the
  // page the header is transparent and its marks flip to white. Once scrolled
  // — or while the menu is open — it takes the solid paper background back.
  const overHero = !scrolled && !menuOpen;

  return (
    <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-paper/90 shadow-[0_1px_0_rgba(226,219,205,1),0_8px_28px_-20px_rgba(11,51,46,.35)] backdrop-blur-md"
            : menuOpen
              ? "bg-paper"
              : "bg-transparent md:bg-paper"
        }`}
      >
        <div className="u-wrap flex h-[64px] items-center justify-between gap-2 sm:gap-4 md:h-[76px]">
          <a href="#top" className="min-w-0 shrink" aria-label="Vasectomy Australia — back to top">
            <Image
              src="/img/logo-white.webp"
              alt="Vasectomy Australia"
              width={200}
              height={34}
              priority
              className={`h-5 w-auto sm:h-7 md:hidden ${overHero ? "block" : "hidden"}`}
            />
            <Image
              src="/img/logo-dark.webp"
              alt="Vasectomy Australia"
              width={200}
              height={34}
              priority
              className={`h-5 w-auto sm:h-7 md:block md:h-8 ${overHero ? "hidden" : "block"}`}
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Page sections">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[15px] text-ink-soft transition hover:text-teal"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4">
            {/* The phone number is the loudest thing in the header on desktop. */}
            <a
              href={site.phoneHref}
              className="hidden text-right leading-none transition hover:opacity-80 md:block"
            >
              <span className="u-display block text-[22px] font-bold leading-none text-teal lg:text-[27px]">
                {site.phoneLabel}
              </span>
              <span className="mt-1 block text-[11px] font-medium tracking-wide text-ink-soft">
                {site.phoneDigits}
              </span>
            </a>

            <button
              type="button"
              onClick={open}
              className="u-btn u-btn-primary h-9 shrink-0 whitespace-nowrap px-3 text-[12.5px] sm:h-10 sm:px-4 sm:text-[13px] md:h-11 md:px-6 md:text-[15px]"
            >
              Book online
            </button>

            {/* Mobile: icon only. */}
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.phoneLabel}`}
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition sm:h-10 sm:w-10 md:hidden ${
                overHero
                  ? "border-white/45 text-white hover:bg-white/15"
                  : "border-line text-teal hover:bg-bone"
              }`}
            >
              <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M4.5 3h3l1.5 4-2 1.4a11 11 0 0 0 4.6 4.6L13 11l4 1.5v3a1.5 1.5 0 0 1-1.7 1.5A14 14 0 0 1 3 4.7 1.5 1.5 0 0 1 4.5 3Z"
                  stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
                />
              </svg>
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition sm:h-10 sm:w-10 lg:hidden ${
                overHero
                  ? "border-white/45 text-white hover:bg-white/15"
                  : "border-line text-ink hover:bg-bone"
              }`}
            >
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                {menuOpen ? (
                  <path d="M2 2l12 10M14 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M0 1h16M0 6h16M0 11h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            className="border-t border-line bg-paper lg:hidden"
            aria-label="Page sections"
          >
            <ul className="u-wrap py-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-line/70 py-3.5 text-[17px] text-ink transition hover:text-teal"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.phoneHref}
                  className="u-display block py-4 text-2xl font-bold text-teal"
                >
                  {site.phoneLabel}
                  <span className="block font-sans text-sm font-normal text-ink-soft">
                    {site.phoneDigits}
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        )}
    </header>
  );
}
