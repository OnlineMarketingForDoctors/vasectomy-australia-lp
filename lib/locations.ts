/**
 * Everything that differs between one location landing page and the next.
 *
 * Shared material — the procedure timeline, pricing, recovery, FAQs, doctors —
 * stays in lib/content.ts and is rendered identically on every page. Adding a
 * city means adding an entry here plus a route that renders <LocationPage>.
 */

export type Clinic = {
  suburb: string;
  /** Region as VA's booking system labels it. Hidden when it equals suburb. */
  region: string;
  /** The venue the clinic operates from. */
  name: string;
  address: string;
  booking: string;
  learnMore?: string;
  flagship?: boolean;
};

export type Location = {
  slug: string;
  city: string;
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

  hero: {
    desktop: string;
    mobile: string;
    alt: string;
    /** Small floating picture that places the page at a glance. */
    inset?: { src: string; alt: string; caption: string };
  };

  /**
   * Null means the hero badge shows the practice-wide wording instead of a
   * single listing's numbers, which would otherwise read as a local claim.
   */
  googleRating: { score: string; count: number } | null;

  locations: {
    heading: string;
    lede: string;
    image: { src: string; alt: string };
  };

  cta: { desktop: string; mobile: string };
  footerLine: string;

  clinics: Clinic[];
};

const TIMELY = "https://bookings.gettimely.com/vasectomyaustralia";

export const sydney: Location = {
  slug: "/sydney",
  city: "Sydney",
  state: "NSW",
  eyebrow: "Sydney · New South Wales",
  metaTitle: "Vasectomy Sydney | No-Scalpel Vasectomy — Vasectomy Australia",
  metaDescription:
    "No-scalpel, open-ended vasectomy in Sydney. About 15 minutes under local anaesthetic, $597 out of pocket after your Medicare rebate. Nine clinics across Sydney.",
  indexSummary:
    "No-scalpel vasectomy across nine Sydney clinics, from Enmore to Campbelltown.",

  heroIntro: "In Sydney, in about 15 minutes, under local anaesthetic.",
  heroWhere:
    "after your Medicare rebate — at the Sydney Vasectomy Centre in Enmore, and eight more clinics across Sydney.",

  hero: {
    desktop: "/img/hero-clinic-desktop.webp",
    mobile: "/img/hero-mobile.webp",
    alt: "Dr Matt Valentine and Dr Geoff Cashion at Vasectomy Australia",
  },

  googleRating: { score: "5.0", count: 612 },

  locations: {
    heading: "Nine clinics across Sydney.",
    lede: "Our main centre is in Enmore, with bookings also available from Chatswood to Campbelltown.",
    image: {
      src: "/img/enmore-street.webp",
      alt: "Enmore Road in Sydney's inner west, near the Sydney Vasectomy Centre",
    },
  },

  cta: {
    desktop: "/img/sydney-harbour-cta.webp",
    mobile: "/img/sydney-cta-mobile.webp",
  },
  footerLine: "No-scalpel, open-ended vasectomy across nine Sydney clinics.",

  clinics: [
    {
      suburb: "Enmore",
      region: "Inner West",
      name: "The Sydney Vasectomy Centre",
      address: "Enmore Medical Practice, 134–146 Enmore Rd, Enmore NSW 2042",
      booking: `${TIMELY}/bb/book?location=157255&product=2451305%3ASV&staff=288783`,
      learnMore: "https://vasectomyaustralia.com.au/sydney-vasectomy-centre/",
      flagship: true,
    },
    {
      suburb: "Chatswood",
      region: "North Shore",
      name: "Sydney Vasectomy Centre – North Shore",
      address: "Suite 205, 781 Pacific Highway, Chatswood NSW 2067",
      booking: `${TIMELY}/bb/book?location=278584&product=3111900%3ASV&staff=288783`,
      learnMore: "https://vasectomyaustralia.com.au/vasectomy-north-shore-chatswood/",
    },
    {
      suburb: "Maroubra",
      region: "Eastern Suburbs",
      name: "Maroubra Family Doctors",
      address: "Shop T01A, 717 Anzac Parade, Maroubra NSW 2035",
      booking: `${TIMELY}/bb/book?location=223631&product=2226310%3ASV&staff=288783`,
      learnMore: "https://vasectomyaustralia.com.au/vasectomy-sydney-maroubra/",
    },
    {
      suburb: "Brookvale",
      region: "Northern Beaches",
      name: "Warringah Medical & Dental Centre",
      address: "10 Dale St, Brookvale NSW 2100",
      booking: `${TIMELY}/bb/book?location=183680&product=1842369%3ASV&staff=288783`,
      learnMore: "https://vasectomyaustralia.com.au/vasectomy-northern-beaches-sydney/",
    },
    {
      suburb: "Baulkham Hills",
      region: "The Hills District",
      name: "The Hills Medical & Dental Centre",
      address: "3 Columbia Ct, Baulkham Hills NSW 2153",
      booking: `${TIMELY}/bb/book?location=187070&product=1842503%3ASV&staff=288783`,
      learnMore: "https://vasectomyaustralia.com.au/vasectomy-hills-district-sydney/",
    },
    {
      suburb: "Blacktown",
      region: "Western Sydney",
      name: "Pacific Medical Centre Blacktown",
      address: "23–27 First Ave, Blacktown NSW 2148",
      booking: `${TIMELY}/bb/book?location=173695&product=3012564%3ASV&staff=288783`,
      learnMore: "https://vasectomyaustralia.com.au/vasectomy-western-sydney/",
    },
    {
      suburb: "Miranda",
      region: "Sutherland Shire",
      name: "Sports Medicine Institute",
      address: "Level 3, 531–533 Kingsway, Miranda NSW 2228",
      booking: `${TIMELY}/bb/book?location=232690&product=2336303%3ASV&staff=288783`,
      learnMore: "https://vasectomyaustralia.com.au/sydney-sutherland-shire/",
    },
    {
      suburb: "Penrith",
      region: "Penrith",
      name: "Penrith Medical Centre",
      address: "61–79 Henry St, Penrith NSW 2750",
      booking: `${TIMELY}/bb/book?location=220962&product=2193244%3ASV&staff=288783`,
      learnMore: "https://vasectomyaustralia.com.au/vasectomy-penrith-sydney/",
    },
    {
      suburb: "Campbelltown",
      region: "South West Sydney",
      name: "Campbelltown Medical and Dental Centre",
      address: "296 Queen St, Campbelltown NSW 2560",
      booking: `${TIMELY}/bb/book?location=185418&product=1842767%3ASV&staff=288783`,
      learnMore: "https://vasectomyaustralia.com.au/vasectomy-campbelltown-sydney/",
    },
  ],
};

export const newcastle: Location = {
  slug: "/newcastle",
  city: "Newcastle",
  state: "NSW",
  eyebrow: "Newcastle · Hunter",
  metaTitle: "Vasectomy Newcastle | No-Scalpel Vasectomy — Vasectomy Australia",
  metaDescription:
    "No-scalpel, open-ended vasectomy in Newcastle. About 15 minutes under local anaesthetic, $597 out of pocket after your Medicare rebate. Cooks Hill, on Darby Street.",
  indexSummary:
    "No-scalpel vasectomy in Newcastle, at the Cooks Hill Healthcare Hub on Darby Street.",

  heroIntro: "In Newcastle, in about 15 minutes, under local anaesthetic.",
  heroWhere:
    "after your Medicare rebate — at our Cooks Hill clinic, on Darby Street.",

  hero: {
    desktop: "/img/hero-clinic-desktop.webp",
    mobile: "/img/hero-mobile.webp",
    alt: "Dr Matt Valentine and Dr Geoff Cashion at Vasectomy Australia",
    inset: {
      src: "/img/newcastle-inset.webp",
      alt: "Nobbys Head Lighthouse, Newcastle",
      caption: "Newcastle",
    },
  },

  // The Newcastle listing has its own rating; until we show that, the badge
  // uses practice-wide wording rather than Sydney's numbers.
  googleRating: null,

  locations: {
    heading: "Where to find us in Newcastle.",
    lede: "One clinic, on Darby Street in Cooks Hill, a few minutes from the city centre.",
    image: {
      src: "/img/newcastle-street.webp",
      alt: "Darby Street, Cooks Hill, near the Newcastle clinic",
    },
  },

  cta: {
    desktop: "/img/newcastle-cta.webp",
    mobile: "/img/newcastle-cta-mobile.webp",
  },
  footerLine: "No-scalpel, open-ended vasectomy in Newcastle and the Hunter.",

  clinics: [
    {
      suburb: "Cooks Hill",
      region: "Newcastle",
      name: "Cooks Hill Healthcare Hub",
      address: "235 Darby St, Cooks Hill NSW 2300",
      booking: `${TIMELY}/book?location=173696&product=3012567%3ASV&staff=288783`,
    },
  ],
};

/** The index at / lists these, in order. */
export const locations: Location[] = [sydney, newcastle];
