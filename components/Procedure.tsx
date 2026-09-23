"use client";

import { useEffect, useRef, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import { useCopy } from "./LocationContext";

/**
 * The signature section. Each step is pinned to the minute it happens at,
 * because "how long am I in that room?" is the question men actually arrive
 * with. The numbers are elapsed minutes, not decorative step counters.
 */
export default function Procedure() {
  const t = useCopy();
  const procedure = t.procedure.steps;
  const trackRef = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // 0 when the list's top reaches 80% of the viewport,
        // 1 once its bottom passes 55%.
        const start = vh * 0.8;
        const end = vh * 0.55;
        const p = (start - r.top) / Math.max(1, r.height - (start - end));
        setProgress(Math.min(1, Math.max(0, p)));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="how" className="relative scroll-mt-24 bg-bone py-20 md:py-28">
      <div className="u-wrap">
        <div className="max-w-2xl" data-reveal>
          <p className="u-eyebrow">{t.procedure.eyebrow}</p>
          <h2 className="u-display mt-3 text-headline">
            {t.procedure.heading}
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            {t.procedure.lede}
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
          <ol ref={trackRef} className="relative">
            {/* The rail, and the teal line that fills as you scroll. */}
            <span
              aria-hidden="true"
              className="absolute left-[27px] top-2 bottom-2 w-px bg-line md:left-[31px]"
            />
            <span
              aria-hidden="true"
              className="absolute left-[27px] top-2 w-px origin-top bg-teal transition-transform duration-150 ease-out md:left-[31px]"
              style={{
                height: "calc(100% - 1rem)",
                transform: `scaleY(${progress})`,
              }}
            />

            {procedure.map((step, i) => {
              const reached = progress >= (i + 0.5) / procedure.length;
              return (
                <li key={step.at} className="relative flex gap-5 pb-9 last:pb-0 md:gap-7">
                  <span
                    className={`relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border transition-colors duration-500 md:h-16 md:w-16 ${
                      reached
                        ? "border-teal bg-teal text-bone"
                        : "border-line bg-paper text-ink-soft"
                    }`}
                  >
                    <span className="u-display text-xl font-bold leading-none md:text-2xl">
                      {step.at}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider opacity-70">
                      {step.unit}
                    </span>
                  </span>

                  <div className="pt-2.5">
                    <h3 className="u-display text-xl md:text-[1.4rem]">{step.title}</h3>
                    <p className="mt-2 max-w-[52ch] text-[15.5px] leading-relaxed text-ink-soft">
                      {step.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          <aside className="lg:sticky lg:top-28 lg:self-start" data-reveal>
            <VideoPlayer
              src="/video/how-it-works.mp4"
              poster="/img/how-it-works-poster.webp"
              label={t.procedure.videoLabel}
              caption={t.procedure.videoCaption}
            />
            <div className="mt-6 rounded-3xl border border-line bg-paper p-6">
              <p className="u-eyebrow">{t.procedure.asideEyebrow}</p>
              <p className="mt-3 text-[15.5px] leading-relaxed text-ink-soft">
                {t.procedure.asideBody}
                <span className="text-ink">&ldquo;{t.procedure.asideQuote}&rdquo;</span>
                {t.procedure.asideBodyAfter}
              </p>
              <p className="mt-4 border-t border-line pt-4 text-[15.5px] leading-relaxed text-ink-soft">
                {t.procedure.asideSecond}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
