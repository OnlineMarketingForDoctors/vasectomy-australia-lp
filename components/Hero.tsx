"use client";

import Image from "next/image";
import { site, pricing } from "@/lib/content";
import { useLocation } from "./LocationContext";
import { GoogleG, Stars } from "./GoogleMarks";
import { useBooking } from "./BookingModal";

function GoogleBadge() {
  const { googleRating, city } = useLocation();
  return (
    <a
      href={`https://www.google.com/search?q=${encodeURIComponent(
        `Vasectomy Australia ${city} reviews`
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/95 py-2 pl-3 pr-4 shadow-[0_2px_10px_rgba(11,51,46,.25)] backdrop-blur transition hover:bg-white hover:shadow-lg"
    >
      <GoogleG size={22} />
      <span className="h-6 w-px bg-line" aria-hidden="true" />
      <span className="leading-tight">
        <span className="flex items-center gap-1.5">
          <span className="text-[15px] font-bold text-ink">
            {googleRating ? googleRating.score : site.rating.score}
          </span>
          <Stars size={13} />
        </span>
        <span className="block text-[11px] text-ink-soft">
          {googleRating
            ? `${googleRating.count} Google reviews`
            : "Rated across Australia"}
        </span>
      </span>
    </a>
  );
}

function Headline({
  className = "",
  eyebrowClass,
}: {
  className?: string;
  eyebrowClass: string;
}) {
  const { eyebrow, city } = useLocation();
  return (
    <>
      <p className={`u-eyebrow ${eyebrowClass}`}>{eyebrow}</p>
      <h1 className={`u-display ${className}`}>
        Safe, effective and affordable{" "}
        <span className="text-clay-soft">no-scalpel vasectomy</span>{" "}
        in {city}
      </h1>
    </>
  );
}

/** Small floating picture that places the page at a glance. */
function CityInset({ className = "" }: { className?: string }) {
  const { hero } = useLocation();
  if (!hero.inset) return null;
  return (
    <figure
      className={`overflow-hidden rounded-2xl bg-teal-deep shadow-[0_10px_40px_-12px_rgba(11,51,46,.65)] ring-1 ring-white/15 ${className}`}
    >
      <div className="relative aspect-[3/2]">
        <Image
          src={hero.inset.src}
          alt={hero.inset.alt}
          fill
          sizes="240px"
          className="object-cover"
        />
      </div>
      <figcaption className="bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
        {hero.inset.caption}
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  const { open } = useBooking();
  const { hero, heroIntro, heroWhere } = useLocation();

  return (
    <section id="top" className="relative bg-teal-deep">
      {/* MOBILE: full-bleed image above the headline, fading into the page. */}
      <div className="relative -mt-16 md:mt-0 md:hidden">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={hero.mobile}
            alt={hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          {/* Brand tint, then a fade into the page background. */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(11,51,46,.42) 0%, rgba(11,51,46,.20) 38%, rgba(11,51,46,0) 62%)",
            }}
          />
          {/* Keeps the white logo and icon buttons legible over the photo. */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-32"
            style={{
              background:
                "linear-gradient(to bottom, rgba(11,51,46,.58) 0%, rgba(11,51,46,.28) 55%, rgba(11,51,46,0) 100%)",
            }}
          />
          <CityInset className="absolute bottom-24 right-4 z-10 w-28" />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-56"
            style={{
              background:
                "linear-gradient(to bottom, rgba(251,249,244,0) 0%, rgba(251,249,244,.72) 55%, #fbf9f4 100%)",
            }}
          />
        </div>

        <div className="u-wrap relative bg-paper pt-7 pb-10">
          <GoogleBadge />
          <Headline
            eyebrowClass="mt-5"
            className="mt-2 text-[clamp(2.1rem,8.6vw,2.9rem)] text-ink"
          />
          <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">
            {heroIntro}{" "}
            <strong className="font-semibold text-ink">
              ${pricing.outOfPocket} out of pocket
            </strong>{" "}
            {heroWhere}
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={open}
              className="u-btn u-btn-primary h-13 px-7 py-3.5 text-[16px]"
            >
              Book online
            </button>
            <a
              href="#how"
              className="u-btn h-13 border border-line bg-transparent px-7 py-3.5 text-[16px] text-ink hover:bg-bone"
            >
              See what actually happens
            </a>
          </div>
        </div>
      </div>

      {/* DESKTOP: full-bleed image under a teal wash, as on the main site. */}
      <div className="relative hidden md:block">
        <div className="absolute inset-0">
          <Image
            src={hero.desktop}
            alt={hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          {/* The wash: near-solid over the copy, opening up over the doctors. */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(11,51,46,.97) 0%, rgba(11,51,46,.94) 26%, rgba(11,51,46,.82) 48%, rgba(11,51,46,.58) 72%, rgba(11,51,46,.46) 100%)",
            }}
          />
          {/* Settle the top and bottom edges so the header and the next
              section meet the image without a hard line. */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-24"
            style={{
              background:
                "linear-gradient(to bottom, rgba(11,51,46,.55), rgba(11,51,46,0))",
            }}
          />
        </div>

        <div className="u-wrap relative">
          <div className="flex min-h-[520px] max-w-[54%] flex-col justify-center py-16 lg:min-h-[600px] lg:max-w-[52%] xl:min-h-[660px]">
            <div data-reveal style={{ ["--reveal-delay" as string]: "40ms" }}>
              <GoogleBadge />
            </div>

            <Headline
              eyebrowClass="mt-7 text-clay-soft"
              className="mt-2.5 text-[clamp(2.2rem,4.1vw,3.7rem)] text-bone"
            />

            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "200ms" }}
              className="mt-6 max-w-[48ch] text-[18px] leading-relaxed text-bone/80 lg:text-[19px]"
            >
              {heroIntro}{" "}
              <strong className="font-semibold text-bone">
                ${pricing.outOfPocket} out of pocket
              </strong>{" "}
              {heroWhere}
            </p>

            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "280ms" }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <button
                type="button"
                onClick={open}
                className="u-btn u-btn-clay h-13 px-8 py-4 text-[16px]"
              >
                Book online
              </button>
              <a
                href="#how"
                className="u-btn h-13 border border-bone/30 bg-transparent px-7 py-4 text-[16px] text-bone hover:bg-bone hover:text-teal-deep"
              >
                See what actually happens
              </a>
            </div>

            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "340ms" }}
              className="mt-7 text-sm text-bone/65"
            >
              Same-day consult and procedure · No GP referral needed ·
              Free phone consults
            </p>

            <CityInset
              className="mt-7 w-32 lg:w-36"
              data-reveal
            />
          </div>
        </div>
      </div>
    </section>
  );
}
