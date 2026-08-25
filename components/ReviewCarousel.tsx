"use client";

import { useState } from "react";
import { GoogleG, Stars } from "./GoogleMarks";
import data from "@/content/reviews.json";

type Review = {
  id: string;
  name: string;
  meta: string;
  rating: number;
  date: string;
  body: string;
};

const reviews = data.reviews as Review[];

/** How much of a review shows before "Read more" appears. */
const CLAMP = 170;

function initialOf(name: string) {
  return name.trim().charAt(0).toUpperCase();
}

/** Deterministic avatar colour so a given reviewer always looks the same. */
const AVATAR_COLOURS = ["#1a73e8", "#188038", "#c5221f", "#a142f4", "#e37400", "#12796b"];
function avatarColour(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 997;
  return AVATAR_COLOURS[h % AVATAR_COLOURS.length];
}

function ReviewCard({ r, clone = false }: { r: Review; clone?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = r.body.length > CLAMP;
  const shown = expanded || !isLong ? r.body : r.body.slice(0, CLAMP).trimEnd() + "…";

  return (
    <article
      // The track is rendered twice so the marquee can loop seamlessly. The
      // second copy is decorative: hide it from assistive tech and keep it out
      // of the tab order so each review is announced and focusable only once.
      {...(clone ? { "aria-hidden": true as const } : {})}
      className="flex w-[86vw] max-w-[380px] shrink-0 flex-col rounded-2xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(26,25,22,.05)] sm:w-[380px]"
    >
      <header className="flex items-start gap-3">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full font-semibold text-white"
          style={{ backgroundColor: avatarColour(r.name) }}
          aria-hidden="true"
        >
          {initialOf(r.name)}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold leading-tight text-ink">{r.name}</p>
          <p className="truncate text-xs text-ink-soft">{r.meta}</p>
        </div>
        <GoogleG size={20} />
      </header>

      <div className="mt-3 flex items-center gap-2">
        <Stars n={r.rating} />
        <span className="text-xs text-ink-soft">{r.date}</span>
      </div>

      <p className="mt-3 flex-1 whitespace-pre-line text-[14.5px] leading-relaxed text-ink-soft">
        {shown}
      </p>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          tabIndex={clone ? -1 : undefined}
          aria-label={`Read ${r.name}'s full review`}
          className="mt-2 self-start text-[13px] font-semibold text-[#1a73e8] transition hover:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </article>
  );
}

export default function ReviewCarousel() {

  return (
    <section aria-label="Google reviews" className="border-y border-line bg-bone py-10 md:py-12">
      <div className="u-wrap mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink-soft">
          What Sydney patients say — unedited, from Google
        </p>
        <p className="text-xs text-ink-soft/80">Hover to pause</p>
      </div>

      <div
        className="u-marquee relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
        }}
      >
        <div className="u-marquee-track gap-4 px-4" style={{ ["--marquee-duration" as string]: "95s" }}>
          {reviews.map((r) => (
            <ReviewCard key={r.id} r={r} />
          ))}
          {reviews.map((r) => (
            <ReviewCard key={`clone-${r.id}`} r={r} clone />
          ))}
        </div>
      </div>
    </section>
  );
}
