"use client";

import Image from "next/image";
import { useState } from "react";
import { clinics, doctors, faqs, pricing, reasons, recovery, site } from "@/lib/content";
import { useBooking } from "./BookingModal";

/* ------------------------------------------------------------------ facts */

const FACTS = [
  { k: "15 min", v: "in the procedure room, under local anaesthetic" },
  { k: ">99%", v: "success rate with no-scalpel vasectomy" },
  { k: "25,000+", v: "vasectomies performed by each of our two doctors" },
  { k: "~7 days", v: "for most men to feel back to normal" },
];

export function Facts() {
  return (
    <section className="bg-teal-deep py-16 text-bone md:py-20">
      <div className="u-wrap grid grid-cols-2 gap-x-8 gap-y-11 lg:grid-cols-4">
        {FACTS.map((f, i) => (
          <div
            key={f.k}
            data-reveal
            style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
            className="border-t border-bone/20 pt-5"
          >
            <p className="u-display text-[clamp(2rem,4.2vw,2.9rem)] leading-none text-bone">
              {f.k}
            </p>
            <p className="mt-3 max-w-[24ch] text-[14.5px] leading-snug text-bone/70">
              {f.v}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- doctors */

export function Doctors() {
  return (
    <section id="doctors" className="scroll-mt-24 bg-paper py-20 md:py-28">
      <div className="u-wrap">
        <div className="max-w-2xl" data-reveal>
          <p className="u-eyebrow">Who does it</p>
          <h2 className="u-display mt-3 text-headline">
            Two specialists who do this all day, every day.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            Not a GP who fits in the occasional vasectomy. Dr Geoff and Dr Matt
            have each performed more than 25,000 vasectomies, they do over
            9,000 a year between them, and both trained under world-leading
            vasectomists.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-10">
          {doctors.map((d, i) => (
            <article key={d.id} data-reveal style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sand">
                <Image
                  src={d.img}
                  alt={`${d.name}, ${d.role}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.03]"
                />
              </div>
              <h3 className="u-display mt-6 text-title">{d.name}</h3>
              <p className="u-eyebrow mt-1.5">{d.role}</p>
              <p className="mt-4 max-w-[46ch] text-[15.5px] leading-relaxed text-ink-soft">
                {d.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- pricing */

export function Pricing() {
  const { open } = useBooking();
  const rows = [
    { label: "Procedure fee", value: `$${pricing.total}` },
    { label: "Less Medicare rebate", value: `−$${pricing.rebate}`, muted: true },
  ];

  return (
    <section id="price" className="scroll-mt-24 bg-teal-deep py-20 text-bone md:py-28">
      <div className="u-wrap grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div data-reveal>
          <p className="u-eyebrow" style={{ color: "var(--color-clay-soft)" }}>
            What it costs
          </p>
          <h2 className="u-display mt-3 text-headline">
            One fee. No gap, no surprises.
          </h2>
          <p className="mt-5 max-w-[48ch] text-[17px] leading-relaxed text-bone/75">
            You will know exactly what you are paying before you book. No
            &ldquo;it depends on your health fund&rdquo;, no separate
            anaesthetist bill, no surgeon&rsquo;s gap arriving later.
          </p>

          <div className="mt-9 max-w-md rounded-3xl bg-bone/[0.07] p-6 ring-1 ring-inset ring-bone/15 md:p-8">
            <dl>
              {rows.map((r) => (
                <div key={r.label} className="flex items-baseline justify-between gap-4 py-2">
                  <dt className={`text-[15px] ${r.muted ? "text-bone/60" : "text-bone/85"}`}>
                    {r.label}
                  </dt>
                  <dd className={`text-[17px] tabular-nums ${r.muted ? "text-bone/60" : "text-bone"}`}>
                    {r.value}
                  </dd>
                </div>
              ))}
              <div className="mt-3 flex items-baseline justify-between gap-4 border-t border-bone/20 pt-5">
                <dt className="text-[15px] font-semibold text-bone">Out of pocket</dt>
                <dd className="u-display text-[clamp(2.4rem,6vw,3.25rem)] leading-none text-clay-soft">
                  ${pricing.outOfPocket}
                </dd>
              </div>
            </dl>
          </div>

          <p className="mt-6 max-w-[52ch] text-sm leading-relaxed text-bone/60">
            A ${pricing.deposit} deposit secures your booking, with the
            ${pricing.balance} balance due on the day. We submit your Medicare
            claim for you afterwards and the ${pricing.rebate} rebate is usually
            in your account within 1–2 days.
          </p>

          <button
            type="button"
            onClick={open}
            className="u-btn u-btn-clay mt-8 h-13 px-8 py-4 text-[16px]"
          >
            Book online
          </button>
        </div>

        <figure className="relative aspect-[3/2] overflow-hidden rounded-3xl" data-reveal>
          <Image
            src="/img/consult-geoff.webp"
            alt="Dr Geoff Cashion talking a patient through the procedure"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </figure>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ why us */

export function WhyUs() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="u-wrap grid gap-12 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-20">
        <div data-reveal>
          <p className="u-eyebrow">Why Vasectomy Australia</p>
          <h2 className="u-display mt-3 text-headline">
            Built around one procedure.
          </h2>
          <figure className="relative mt-8 aspect-[3/2] overflow-hidden rounded-3xl">
            <Image
              src="/img/doctors-together.webp"
              alt="Dr Matt Valentine and Dr Geoff Cashion reviewing notes together"
              fill
              sizes="(min-width: 1024px) 26rem, 100vw"
              className="object-cover"
            />
          </figure>
        </div>

        <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:pt-4">
          {reasons.map((r, i) => (
            <li
              key={r}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 55}ms` }}
              className="flex gap-3 border-t border-line pt-5"
            >
              <svg
                width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"
                className="mt-0.5 shrink-0 text-clay"
              >
                <path d="M3 9.5l4 4 8-9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[15.5px] leading-relaxed text-ink-soft">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- recovery */

export function Recovery() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="u-wrap">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:gap-20">
          <div>
            <div className="max-w-xl" data-reveal>
              <p className="u-eyebrow">Afterwards</p>
              <h2 className="u-display mt-3 text-headline">The week after.</h2>
              <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
                Recovery is usually straightforward, and the part you control
                matters most: no heavy lifting for the first week.
              </p>
            </div>

            <dl className="mt-10">
              {recovery.map((r, i) => (
                <div
                  key={r.when}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
                  className="grid gap-1.5 border-t border-line py-5 sm:grid-cols-[11rem_1fr] sm:gap-6"
                >
                  <dt className="u-eyebrow pt-1" style={{ color: "var(--color-teal)" }}>
                    {r.when}
                  </dt>
                  <dd className="max-w-[54ch] text-[15.5px] leading-relaxed text-ink-soft">
                    {r.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="lg:sticky lg:top-28 lg:self-start" data-reveal>
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl lg:aspect-[4/5]">
              <Image
                src="/img/recovery-home.webp"
                alt="A man resting at home the day after his procedure"
                fill
                sizes="(min-width: 1024px) 30rem, 100vw"
                className="object-cover"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- locations */

export function Locations() {
  const { open } = useBooking();

  return (
    <section id="locations" className="scroll-mt-24 bg-paper py-20 md:py-28">
      <div className="u-wrap">
        <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
          <div className="max-w-xl">
            <p className="u-eyebrow">Where</p>
            <h2 className="u-display mt-3 text-headline">Nine clinics across Sydney.</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
              Our main centre is in Enmore, with bookings also available from
              Chatswood to Campbelltown.
            </p>
          </div>
          <button type="button" onClick={open} className="u-btn u-btn-primary h-12 px-7 py-3.5">
            Book online
          </button>
        </div>

        <figure className="relative mt-12 aspect-[21/9] overflow-hidden rounded-3xl" data-reveal>
          <Image
            src="/img/enmore-street.webp"
            alt="Enmore Road in Sydney's inner west, near the Sydney Vasectomy Centre"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </figure>

        <ul className="mt-12 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {clinics.map((c, i) => (
            <li
              key={c.suburb}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 70}ms` }}
              className="flex flex-col border-t border-line pt-5"
            >
              <div className="flex items-center gap-2">
                <h3 className="u-display text-[1.35rem]">{c.suburb}</h3>
                {c.flagship && (
                  <span className="rounded-full bg-teal/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-teal">
                    Main centre
                  </span>
                )}
              </div>
              {c.region !== c.suburb && (
                <p className="u-eyebrow mt-1.5">{c.region}</p>
              )}
              <p className="mt-2 text-[13.5px] font-medium text-ink">{c.name}</p>
              <p className="mt-1.5 flex-1 text-[14px] leading-relaxed text-ink-soft">
                {c.address}
              </p>
              <a
                href={c.learnMore}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-teal"
              >
                Clinic details
                <svg
                  width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------- FAQ */

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-bone py-20 md:py-28">
      <div className="u-wrap grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start" data-reveal>
          <p className="u-eyebrow">Questions</p>
          <h2 className="u-display mt-3 text-headline">
            The things men actually ask.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
            Still unsure? A free phone consult with one of our doctors costs you
            nothing and commits you to nothing.
          </p>
          <a
            href={site.phoneConsult}
            target="_blank"
            rel="noopener noreferrer"
            className="u-btn mt-6 h-12 border border-teal/25 bg-transparent px-6 py-3.5 text-[15px] text-teal hover:bg-teal hover:text-bone"
          >
            Book a free phone consult
          </a>
        </div>

        <dl className="border-t border-line">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={f.q} className="border-b border-line">
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span className={`text-[16.5px] font-medium transition-colors ${isOpen ? "text-teal" : "text-ink"}`}>
                      {f.q}
                    </span>
                    <span
                      className={`mt-1 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className={isOpen ? "text-teal" : "text-ink-soft"} />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[62ch] pb-6 pr-8 text-[15.5px] leading-relaxed text-ink-soft">
                      {f.a}
                    </p>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- closing CTA */

export function ClosingCta() {
  const { open } = useBooking();

  return (
    <section className="relative isolate overflow-hidden">
      {/* Two crops of the same view. The 21:9 frame leaves mostly sky and
          water once cropped into a tall phone viewport, so mobile gets a
          portrait composition that actually fills the section. */}
      <Image
        src="/img/sydney-cta-mobile.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-10 object-cover md:hidden"
      />
      <Image
        src="/img/sydney-harbour-cta.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-10 hidden object-cover md:block"
      />
      <div className="absolute inset-0 -z-10 bg-teal-deep/68" aria-hidden="true" />

      <div className="u-wrap py-24 text-center md:py-32">
        <h2 className="u-display mx-auto max-w-[16ch] text-[clamp(2.2rem,5.2vw,4rem)] text-bone" data-reveal>
          Book it, and stop thinking about it.
        </h2>
        <p
          className="mx-auto mt-6 max-w-[52ch] text-[17px] leading-relaxed text-bone/75"
          data-reveal
          style={{ ["--reveal-delay" as string]: "90ms" }}
        >
          Same-day consult and procedure, no GP referral, and one flat
          ${pricing.outOfPocket} out of pocket.
        </p>
        <div
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
          data-reveal
          style={{ ["--reveal-delay" as string]: "160ms" }}
        >
          <button type="button" onClick={open} className="u-btn u-btn-clay h-13 px-8 py-4 text-[16px]">
            Book online
          </button>
          <a
            href={site.phoneHref}
            className="u-btn h-13 border border-bone/25 bg-transparent px-7 py-4 text-[16px] text-bone hover:bg-bone hover:text-teal-deep"
          >
            Call {site.phoneLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ footer */

export function Footer() {
  return (
    <footer className="bg-paper py-14">
      <div className="u-wrap">
        <div className="flex flex-wrap items-start justify-between gap-8 border-b border-line pb-10">
          <div>
            <Image src="/img/logo-dark.webp" alt="Vasectomy Australia" width={200} height={34} className="h-8 w-auto" />
            <p className="mt-4 max-w-[38ch] text-[14.5px] leading-relaxed text-ink-soft">
              No-scalpel, open-ended vasectomy across nine Sydney clinics.
            </p>
          </div>
          <div className="text-[15px]">
            <a href={site.phoneHref} className="u-display block text-2xl font-bold text-teal">
              {site.phoneLabel}
            </a>
            <p className="mt-1 text-ink-soft">{site.phoneDigits}</p>
            <a href={`mailto:${site.email}`} className="mt-3 block text-teal underline underline-offset-2">
              {site.email}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-[13.5px] text-ink-soft">
          <p>© {new Date().getFullYear()} Vasectomy Australia. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a
              href={site.agency.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal underline underline-offset-2 transition hover:text-teal-deep"
            >
              {site.agency.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
