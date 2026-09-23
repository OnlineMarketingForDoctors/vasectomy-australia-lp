/**
 * Every string a visitor reads, in each language the site is published in.
 *
 * Splitting it out means a translated page is a data change, not a fork of the
 * components: the Copy type below is what a language has to provide, so the
 * compiler catches anything left untranslated.
 *
 * All clinical claims, prices and instructions are carried over from the live
 * pages at lp.vasectomyaustralia.com.au unchanged in substance.
 */

export type Step = { at: string; unit: string; title: string; body: string };
export type RecoveryStage = { when: string; body: string };
export type Faq = { q: string; a: string };

export type DoctorCopy = {
  role: string;
  registrationType: string;
  bio: string;
  qualifications: string[];
};

export type Copy = {
  /** BCP 47 tag for the <html lang> attribute. */
  htmlLang: string;

  nav: { how: string; doctors: string; price: string; locations: string; faq: string };

  header: {
    backToTop: string;
    call: string;
    openMenu: string;
    closeMenu: string;
    sections: string;
  };

  cta: { book: string };

  hero: {
    ratedAcross: string;
    reviews: (count: number) => string;
    headlineLead: string;
    headlineHighlight: string;
    /** What sits between the headline parts. Chinese does not space words. */
    headlineGap: string;
    outOfPocket: (amount: number) => string;
    seeWhatHappens: string;
    reassurance: string;
  };

  facts: { k: string; v: string }[];

  whyUs: {
    eyebrow: string;
    heading: string;
    photoAlt: string;
    reasons: string[];
    registrationNote: string;
  };

  procedure: {
    eyebrow: string;
    heading: string;
    lede: string;
    steps: Step[];
    videoLabel: string;
    videoCaption: string;
    asideEyebrow: string;
    asideBody: string;
    asideQuote: string;
    asideBodyAfter: string;
    asideSecond: string;
  };

  doctors: {
    eyebrow: string;
    heading: string;
    lede: string;
    operatingBoth: (cityIn: string) => string;
    operatingOne: (cityIn: string, name: string) => string;
    qualifications: string;
    registrationPrefix: string;
    byId: Record<string, DoctorCopy>;
  };

  pricing: {
    eyebrow: string;
    heading: string;
    lede: string;
    procedureFee: string;
    lessRebate: string;
    outOfPocket: string;
    note: (p: { deposit: number; balance: number; rebate: number }) => string;
    photoAlt: string;
  };

  recovery: {
    eyebrow: string;
    heading: string;
    lede: string;
    stages: RecoveryStage[];
    photoAlt: string;
  };

  locations: {
    eyebrow: string;
    openInMaps: string;
    clinicDetails: string;
    bookHere: string;
    mainCentre: string;
    cardHeading: (region: string) => string;
    mapTitle: (name: string, address: string) => string;
  };

  faq: {
    eyebrow: string;
    heading: string;
    lede: string;
    phoneConsult: string;
    items: Faq[];
  };

  closing: {
    heading: string;
    lede: (outOfPocket: number) => string;
    call: (phone: string) => string;
  };

  footer: { rights: (year: number) => string; poweredBy: string };

  booking: {
    eyebrow: string;
    heading: string;
    close: string;
    closeOptions: string;
    notSure: string;
    freeConsult: string;
    orCall: string;
  };

  backToTop: string;
};

import { en } from "./lang/en";
import { zh } from "./lang/zh";

export type Lang = "en" | "zh";

const COPY: Record<Lang, Copy> = { en, zh };

export function copyFor(lang: Lang = "en"): Copy {
  return COPY[lang];
}
