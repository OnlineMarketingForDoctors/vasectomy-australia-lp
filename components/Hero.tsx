"use client";

import Image from "next/image";
import { site, pricing } from "@/lib/content";
import { useCopy, useLocation } from "./LocationContext";
import { GoogleG, Stars } from "./GoogleMarks";
import { useBooking } from "./BookingModal";

function GoogleBadge() {
  const { googleRating, city } = useLocation();
  const t = useCopy();
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
            ? t.hero.reviews(googleRating.count)
            : t.hero.ratedAcross}
        </span>
      </span>
    </a>
  );
}

/**
 * One set of markup for both layouts. The two arrangements — photograph above
 * the copy on a phone, copy over a full-bleed photograph on a desktop — differ
 * only in how the image is positioned and which colours the text takes, so
 * they are responsive variants rather than two blocks. Rendering them twice
 * put a second <h1>, a second call to action and a second badge in the DOM.
 */
export default function Hero() {
  const { open } = useBooking();
  const { hero, heroIntro, heroWhere, heroSubheadline, eyebrow, cityIn, showPricing } =
    useLocation();
  const t = useCopy();

  return (
    <section id="top" className="relative bg-teal-deep">
      {/* In flow on a phone, behind the copy from md up. The negative margin
          pulls it under the transparent mobile header. */}
      <div className="relative -mt-16 aspect-[4/5] w-full md:absolute md:inset-0 md:mt-0 md:aspect-auto">
        <Image
          src={hero.mobile}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top md:hidden"
        />
        <Image
          src={hero.desktop}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-right md:block"
        />

        {/* Phone: brand tint, a scrim for the white header marks, then a fade
            into the page background. */}
        <div
          className="pointer-events-none absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,51,46,.42) 0%, rgba(11,51,46,.20) 38%, rgba(11,51,46,0) 62%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,51,46,.58) 0%, rgba(11,51,46,.28) 55%, rgba(11,51,46,0) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-56 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(251,249,244,0) 0%, rgba(251,249,244,.72) 55%, #fbf9f4 100%)",
          }}
        />

        {/* Desktop: the wash, near-solid over the copy and opening up over the
            doctors, plus a settled top edge under the header. */}
        <div
          className="pointer-events-none absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,51,46,.97) 0%, rgba(11,51,46,.94) 26%, rgba(11,51,46,.82) 48%, rgba(11,51,46,.58) 72%, rgba(11,51,46,.46) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 hidden h-24 md:block"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,51,46,.55), rgba(11,51,46,0))",
          }}
        />
      </div>

      <div className="u-wrap relative bg-paper pt-7 pb-10 md:bg-transparent md:py-0">
        <div className="md:flex md:min-h-[520px] md:max-w-[54%] md:flex-col md:justify-center md:py-16 lg:min-h-[600px] lg:max-w-[52%] xl:min-h-[660px]">
          <div data-reveal style={{ ["--reveal-delay" as string]: "40ms" }}>
            <GoogleBadge />
          </div>

          <p className="u-eyebrow mt-5 md:mt-7 md:text-clay-soft">{eyebrow}</p>

          <h1 className="u-display mt-2 text-[clamp(2.1rem,8.6vw,2.9rem)] text-ink md:mt-2.5 md:text-[clamp(2.2rem,4.1vw,3.7rem)] md:text-bone">
            {t.hero.headlineLead}
            {t.hero.headlineGap}
            <span className="text-clay md:text-clay-soft">
              {t.hero.headlineHighlight}
            </span>
            {t.hero.headlineGap}
            {cityIn}
          </h1>

          {heroSubheadline && (
            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "140ms" }}
              className="u-display mt-4 text-[clamp(1.25rem,4.6vw,1.6rem)] leading-snug text-clay md:mt-5 md:text-[clamp(1.35rem,2.1vw,1.9rem)] md:text-clay-soft"
            >
              {heroSubheadline}
            </p>
          )}

          <p
            data-reveal
            style={{ ["--reveal-delay" as string]: "200ms" }}
            className="mt-4 text-[17px] leading-relaxed text-ink-soft md:mt-6 md:max-w-[48ch] md:text-[18px] md:text-bone/80 lg:text-[19px]"
          >
            {/* A page with no cost section does not quote a figure here. */}
            {showPricing ? (
              <>
                {heroIntro}{" "}
                <strong className="font-semibold text-ink md:text-bone">
                  {t.hero.outOfPocket(pricing.outOfPocket)}
                </strong>{" "}
                {heroWhere}
              </>
            ) : (
              <>
                {heroIntro} {heroWhere}
              </>
            )}
          </p>

          <div
            data-reveal
            style={{ ["--reveal-delay" as string]: "280ms" }}
            className="mt-6 flex flex-col gap-3 md:mt-9 md:flex-row md:flex-wrap md:items-center"
          >
            <button
              type="button"
              onClick={open}
              className="u-btn h-13 bg-teal px-7 py-3.5 text-[16px] text-bone shadow-[0_1px_2px_rgb(11_51_46/0.2)] hover:bg-teal-deep md:bg-clay md:px-8 md:py-4 md:text-white md:hover:bg-[#a8522f]"
            >
              {t.cta.book}
            </button>
            <a
              href="#how"
              className="u-btn h-13 border border-line bg-transparent px-7 py-3.5 text-[16px] text-ink hover:bg-bone md:border-bone/30 md:py-4 md:text-bone md:hover:bg-bone md:hover:text-teal-deep"
            >
              {t.hero.seeWhatHappens}
            </a>
          </div>

          <p
            data-reveal
            style={{ ["--reveal-delay" as string]: "340ms" }}
            className="mt-7 hidden text-sm text-bone/65 md:block"
          >
            {t.hero.reassurance}
          </p>
        </div>
      </div>
    </section>
  );
}
