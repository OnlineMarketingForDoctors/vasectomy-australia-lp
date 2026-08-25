"use client";

import Image from "next/image";
import { site, pricing } from "@/lib/content";
import { GoogleG, Stars } from "./GoogleMarks";
import { useBooking } from "./BookingModal";

function GoogleBadge() {
  return (
    <a
      href="https://www.google.com/search?q=Vasectomy+Australia+Sydney+reviews"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-full border border-line bg-white/90 py-2 pl-3 pr-4 shadow-[0_1px_3px_rgba(26,25,22,.07)] backdrop-blur transition hover:border-teal/30 hover:shadow-md"
    >
      <GoogleG size={22} />
      <span className="h-6 w-px bg-line" aria-hidden="true" />
      <span className="leading-tight">
        <span className="flex items-center gap-1.5">
          <span className="text-[15px] font-bold text-ink">{site.rating.score}</span>
          <Stars size={13} />
        </span>
        <span className="block text-[11px] text-ink-soft">
          {site.rating.count} Google reviews
        </span>
      </span>
    </a>
  );
}

export default function Hero() {
  const { open } = useBooking();

  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      {/* MOBILE: full-bleed image above the headline, fading into the page. */}
      <div className="relative md:hidden">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src="/img/hero-mobile.webp"
            alt="Dr Matt Valentine and Dr Geoff Cashion at the Sydney Vasectomy Centre"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          {/* Smooth transition into the page background. */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
            style={{
              background:
                "linear-gradient(to bottom, rgba(251,249,244,0) 0%, rgba(251,249,244,.72) 55%, #fbf9f4 100%)",
            }}
          />
        </div>
        <div className="u-wrap -mt-10 relative pb-10">
          <GoogleBadge />
          <h1 className="u-display mt-5 text-[clamp(2.5rem,11vw,3.5rem)]">
            A vasectomy in Sydney,
            <br />
            <span className="text-teal">done in about 15 minutes.</span>
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">
            No scalpel. Local anaesthetic. Open-ended technique for a gentler
            recovery. <strong className="font-semibold text-ink">${pricing.outOfPocket} out of pocket</strong>{" "}
            after your Medicare rebate — at the Sydney Vasectomy Centre in Enmore,
            and eight more clinics across Sydney.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <button type="button" onClick={open} className="u-btn u-btn-primary h-13 px-7 py-3.5 text-[16px]">
              Book online
            </button>
            <a href="#how" className="u-btn h-13 border border-line bg-transparent px-7 py-3.5 text-[16px] text-ink hover:bg-bone">
              See what actually happens
            </a>
          </div>
        </div>
      </div>

      {/* DESKTOP: headline left, image right — the VA hero composition. */}
      <div className="relative hidden md:block">
        <div className="absolute inset-y-0 right-0 w-[54%] lg:w-[56%]">
          <Image
            src="/img/hero-desktop.webp"
            alt="Dr Matt Valentine and Dr Geoff Cashion at the Sydney Vasectomy Centre in Enmore"
            fill
            priority
            sizes="56vw"
            className="object-cover object-[90%_center]"
          />
          {/* Feather the left edge of the photo into the paper background so
              there is no hard vertical seam behind the copy. */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-52"
            style={{
              background:
                "linear-gradient(to right, #fbf9f4 0%, rgba(251,249,244,.85) 30%, rgba(251,249,244,0) 100%)",
            }}
          />
        </div>

        <div className="u-wrap relative">
          <div className="flex min-h-[clamp(560px,70vh,720px)] max-w-[48%] flex-col justify-center py-16 lg:max-w-[46%]">
            <div data-reveal style={{ ["--reveal-delay" as string]: "40ms" }}>
              <GoogleBadge />
            </div>

            <h1
              data-reveal
              style={{ ["--reveal-delay" as string]: "120ms" }}
              className="u-display mt-7 text-display"
            >
              A vasectomy in Sydney,
              <br />
              <span className="text-teal">done in about 15 minutes.</span>
            </h1>

            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "200ms" }}
              className="mt-6 max-w-[46ch] text-[18px] leading-relaxed text-ink-soft lg:text-[19px]"
            >
              No scalpel. Local anaesthetic. Open-ended technique for a gentler
              recovery.{" "}
              <strong className="font-semibold text-ink">
                ${pricing.outOfPocket} out of pocket
              </strong>{" "}
              after your Medicare rebate — at the Sydney Vasectomy Centre in
              Enmore, and eight more clinics across Sydney.
            </p>

            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "280ms" }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <button type="button" onClick={open} className="u-btn u-btn-primary h-13 px-8 py-4 text-[16px]">
                Book online
              </button>
              <a href="#how" className="u-btn h-13 border border-line bg-transparent px-7 py-4 text-[16px] text-ink hover:bg-bone">
                See what actually happens
              </a>
            </div>

            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "340ms" }}
              className="mt-7 text-sm text-ink-soft"
            >
              Same-day consult and procedure · No GP referral needed ·
              Free phone consults
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
