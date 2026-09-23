/**
 * Facts and figures that are the same on every page in every language.
 *
 * The prose lives in lib/lang/ — see lib/copy.ts. Source for both:
 * https://lp.vasectomyaustralia.com.au/
 */

export const site = {
  phoneLabel: "1800 SNIPME",
  phoneDigits: "1800 764 763",
  phoneHref: "tel:1800764763",
  /** Google Tag Manager container — the same one the previous page used. */
  gtmId: "GTM-KJKNPM5",
  email: "info@vasectomyaustralia.com.au",
  /** Google rating shown in the hero badge. Update both values together. */
  rating: { score: "5.0", count: 612 },
  phoneConsult: "https://bit.ly/vas-appt",
  agency: {
    name: "Online Marketing For Doctors",
    href: "https://onlinemarketingfordoctors.com/",
  },
};

export const pricing = {
  total: 830,
  deposit: 100,
  balance: 730,
  rebate: 233,
  outOfPocket: 597,
};

/**
 * The parts of a doctor that do not change with the page's language. Their
 * role, bio and qualifications are copy, so they live in lib/lang/ keyed by
 * this id.
 */
export type Doctor = {
  id: string;
  name: string;
  /** Post-nominals as used on the practice's own About page. */
  postNominals: string;
  registration: string;
  img: string;
};

export const doctors: Doctor[] = [
  {
    id: "geoff",
    name: "Dr Geoff Cashion",
    postNominals: "MBBS, FACRRM, FRCEM",
    registration: "MED0001196484",
    img: "/img/dr-geoff.webp",
  },
  {
    id: "matt",
    name: "Dr Matthew Valentine",
    postNominals: "MBBS, FRACGP",
    registration: "MED0000972761",
    img: "/img/dr-matt.webp",
  },
];

