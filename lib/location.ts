/**
 * The shape of a location landing page, and the defaults every page shares.
 *
 * Shared material — the procedure timeline, pricing, recovery, FAQs, doctors —
 * lives in lib/content.ts and renders identically everywhere. Adding a city
 * means adding an entry under lib/locations/ and listing it in lib/locations.ts;
 * the route itself is generated from the registry.
 */

import type { Lang } from "./copy";

export const TIMELY = "https://bookings.gettimely.com/vasectomyaustralia";

export type Clinic = {
  suburb: string;
  /** Region as VA's booking system labels it. Hidden when it equals suburb. */
  region: string;
  /** The practice the clinic operates inside, where it sits within one.
   *  Omitted when the rooms are Vasectomy Australia's own. */
  name?: string;
  address: string;
  booking: string;
  /** A direct line for this clinic, where it has one of its own. The 1800
   *  number stays the practice-wide line on every page. */
  phone?: string;
  /** The clinic's Google listing. Falls back to a maps search when absent. */
  mapsUrl?: string;
  /** Google Maps embed src for the card on a multi-clinic page. */
  mapEmbed?: string;
  learnMore?: string;
  flagship?: boolean;
};

export type Location = {
  slug: string;
  /** Which of lib/lang the page renders in. Defaults to English. */
  lang: Lang;
  city: string;
  /**
   * The phrase after "no-scalpel vasectomy" in the headline. Regions take
   * "on" rather than "in", so it is spelled out rather than assembled.
   */
  cityIn: string;
  state: string;
  /** Small caps line above the hero headline. */
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  /** One line for the index at /. */
  indexSummary: string;

  /** Hero supporting copy, either side of the out-of-pocket price. */
  heroIntro: string;
  heroWhere: string;
  /** A line of its own under the headline. Omitted on most pages. */
  heroSubheadline?: string;

  /**
   * Whether the page shows what the procedure costs. A page that does not —
   * the bulk-billed one — also drops the price from the hero, the closing
   * panel, the nav and the two FAQs that quote our fee, so it cannot quote a
   * figure it has just said does not apply.
   */
  showPricing: boolean;

  hero: { desktop: string; mobile: string; alt: string };

  /**
   * Null means the hero badge shows the practice-wide wording instead of a
   * single listing's numbers, which would otherwise read as a local claim.
   */
  googleRating: { score: string; count: number } | null;

  /** Who operates at this location, for the line above the doctor bios. */
  operatingDoctor: "geoff" | "matt" | "both";

  locations: {
    heading: string;
    lede: string;
    /** The wide picture above the clinics. Omitted when a map takes its place. */
    image?: { src: string; alt: string };
    /** Google Maps embed src, shown instead of the picture. */
    mapEmbed?: string;
  };

  cta: { desktop: string; mobile: string };
  footerLine: string;

  clinics: Clinic[];
};

const DEFAULT_HERO = {
  desktop: "/img/hero-clinic-desktop.webp",
  mobile: "/img/hero-mobile.webp",
  alt: "Dr Matt Valentine and Dr Geoff Cashion at Vasectomy Australia",
};

/**
 * The closing panel behind the teal wash. Capital cities have a picture of
 * their own; the rest share this one, because a regional page showing a
 * skyline that belongs to somewhere else reads as a stock photo.
 */
const DEFAULT_CTA = {
  desktop: "/img/country-cta.webp",
  mobile: "/img/country-cta-mobile.webp",
};

type LocationInput = Omit<
  Location,
  | "hero"
  | "cta"
  | "cityIn"
  | "googleRating"
  | "operatingDoctor"
  | "lang"
  | "showPricing"
> &
  Partial<
    Pick<
      Location,
      | "hero"
      | "cta"
      | "cityIn"
      | "googleRating"
      | "operatingDoctor"
      | "lang"
      | "showPricing"
    >
  >;

/** Fills the parts almost every page shares, so entries stay readable. */
export function loc(input: LocationInput): Location {
  return {
    ...input,
    lang: input.lang ?? "en",
    showPricing: input.showPricing ?? true,
    cityIn: input.cityIn ?? `in ${input.city}`,
    hero: input.hero ?? DEFAULT_HERO,
    cta: input.cta ?? DEFAULT_CTA,
    googleRating: input.googleRating ?? null,
    operatingDoctor: input.operatingDoctor ?? "both",
  };
}
