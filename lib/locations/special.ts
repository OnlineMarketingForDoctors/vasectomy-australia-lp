/** Pages that are not a city. Generated from the live landing pages; edit here, not there. */
import { loc, TIMELY, TIMELY_CHOOSE, type Location } from "../location";

export const chinese: Location = loc({
  slug: "/chinese",
  city: "Sydney, Melbourne and Adelaide",
  cityIn: "in Sydney, Melbourne and Adelaide",
  state: "NSW",
  eyebrow: "中文服务 · Chinese language option",
  metaTitle: "Vasectomy with a Chinese Language Option — Vasectomy Australia",
  metaDescription: "No-scalpel, open-ended vasectomy with a Chinese language option in Sydney, Melbourne and Adelaide. About 15 minutes under local anaesthetic, $597 out of pocket after your Medicare rebate.",
  indexSummary: "No-scalpel vasectomy with a Chinese language option, in Sydney, Melbourne and Adelaide.",
  heroIntro: "With a Chinese-speaking option, in about 15 minutes, under local anaesthetic.",
  heroWhere: "after your Medicare rebate — with a Chinese-speaking option at our Sydney, Melbourne and Adelaide centres.",
  operatingDoctor: "geoff",
  locations: {
    heading: "Three centres, with a Chinese language option.",
    lede: "Sydney at Enmore, Melbourne at Gladstone Park, and Adelaide at Beulah Park.",
  },
  footerLine: "No-scalpel, open-ended vasectomy with a Chinese language option.",
  clinics: [
    {
      suburb: "Enmore",
      region: "Sydney",
      name: "The Sydney Vasectomy Centre",
      address: "Enmore Medical Practice, 134–146 Enmore Rd, Enmore NSW 2042",
      booking: `${TIMELY}/bb/book?location=157255&product=2451305%3ASV&staff=288783`,
      mapsUrl: "https://www.google.com/maps?cid=7543514749350888925",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.6345319262955!2d151.1716480157255!3d-33.899065080648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b1c9ca9d1755%3A0x68aff2b280fac5dd!2sVasectomy%20Australia!5e0!3m2!1sen!2sau!4v1610655984107!5m2!1sen!2sau",
      learnMore: "https://vasectomyaustralia.com.au/sydney-vasectomy-centre/",
      flagship: true,
    },
    {
      suburb: "Gladstone Park",
      region: "Melbourne",
      name: "Melbourne Vasectomy Centre – Gladstone Park",
      address: "Shop 102, Gladstone Park Shopping Centre, Gladstone Park Drive, Gladstone Park VIC 3043",
      booking: TIMELY_CHOOSE,
      mapsUrl: "https://www.google.com/maps?cid=8092469443229750457",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d404134.7486437753!2d144.884614!3d-37.689089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x704e3a15376994b9!2sVasectomy%20Australia%20-%20Melbourne%20North!5e0!3m2!1sen!2sau!4v1638227525728!5m2!1sen!2sau",
      learnMore: "https://vasectomyaustralia.com.au/vasectomy-melbourne-gladstone-park/",
    },
    {
      suburb: "Beulah Park",
      region: "Adelaide",
      name: "The Adelaide Vasectomy Centre",
      address: "252A Magill Rd, Beulah Park SA 5067",
      booking: `${TIMELY}/bb/book?location=173700&product=2854571%3ASV&staff=288783`,
      mapsUrl: "https://www.google.com/maps?cid=4507656470818061192",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.7271420545635!2d138.63882771574632!3d-34.91329638038065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cba8c9c4ccb5%3A0x3e8e69ad7899fb88!2sVasectomy%20Australia!5e0!3m2!1sen!2sau!4v1610659743634!5m2!1sen!2sau",
    },
  ],
});

export const sydneyBulkBilled: Location = loc({
  slug: "/sydney-bulk-billed",
  city: "Sydney",
  state: "NSW",
  eyebrow: "Enmore · Inner West",
  metaTitle: "Vasectomy Sydney — One Flat Fee | Vasectomy Australia",
  metaDescription: "No-scalpel, open-ended vasectomy at the Sydney Vasectomy Centre in Enmore. About 15 minutes under local anaesthetic, one flat fee, $597 out of pocket after your Medicare rebate.",
  indexSummary: "No-scalpel vasectomy at the Sydney Vasectomy Centre in Enmore, on one flat fee.",
  heroIntro: "In Sydney, in about 15 minutes, under local anaesthetic.",
  heroWhere: "after your Medicare rebate — one flat fee at the Sydney Vasectomy Centre in Enmore. No health-fund gap, no separate anaesthetist bill.",
  googleRating: {
    score: "5.0",
    count: 612,
  },
  operatingDoctor: "geoff",
  locations: {
    heading: "Where to find us in Sydney.",
    lede: "The Sydney Vasectomy Centre, on Enmore Road in the inner west.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.6345319262955!2d151.1716480157255!3d-33.899065080648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b1c9ca9d1755%3A0x68aff2b280fac5dd!2sVasectomy%20Australia!5e0!3m2!1sen!2sau!4v1610655984107!5m2!1sen!2sau",
  },
  cta: {
    desktop: "/img/sydney-harbour-cta.webp",
    mobile: "/img/sydney-cta-mobile.webp",
  },
  footerLine: "No-scalpel, open-ended vasectomy at the Sydney Vasectomy Centre, Enmore.",
  clinics: [
    {
      suburb: "Enmore",
      region: "Inner West",
      name: "The Sydney Vasectomy Centre",
      address: "Enmore Medical Practice, 134–146 Enmore Rd, Enmore NSW 2042",
      booking: `${TIMELY}/bb/book?location=157255&product=2451305%3ASV&staff=288783`,
      mapsUrl: "https://www.google.com/maps?cid=7543514749350888925",
      learnMore: "https://vasectomyaustralia.com.au/sydney-vasectomy-centre/",
    },
  ],
});
