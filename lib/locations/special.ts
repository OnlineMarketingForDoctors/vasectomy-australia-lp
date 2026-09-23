/** Pages that are not a city. Generated from the live landing pages; edit here, not there. */
import { loc, TIMELY, type Location } from "../location";

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
    lede: "Sydney at Enmore, Melbourne at Prahran, and Adelaide at Beulah Park.",
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
      suburb: "Prahran",
      region: "Melbourne",
      name: "The Melbourne Vasectomy Centre",
      address: "First Floor, 54 Commercial Road, Prahran, Melbourne VIC 3181",
      booking: `${TIMELY}/bb/book?location=199369&product=2909739%3ASV`,
      mapsUrl: "https://www.google.com/maps?cid=9355928693394284610",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12603.889615841434!2d144.9929394!3d-37.8375319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81d6ef93a9a6a042!2sVasectomy%20Australia%20-%20Melbourne%20Vasectomy%20Centre!5e0!3m2!1sen!2sau!4v1675510790460!5m2!1sen!2sau",
      learnMore: "https://vasectomyaustralia.com.au/melbourne-vasectomy-centre/",
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
  metaTitle: "Bulk Billed Vasectomy Sydney | Vasectomy Australia",
  metaDescription: "Bulk billed no-scalpel, open-ended vasectomy at the Sydney Vasectomy Centre in Enmore. About 15 minutes under local anaesthetic.",
  indexSummary: "Bulk billed no-scalpel vasectomy at the Sydney Vasectomy Centre in Enmore.",
  /** The one page that does not show a price, so nothing here quotes one. */
  showPricing: false,
  heroSubheadline: "Permanent, safe, effective — and bulk billed.",
  heroIntro: "In Sydney, in about 15 minutes, under local anaesthetic,",
  heroWhere: "at the Sydney Vasectomy Centre in Enmore. No health-fund gap, no separate anaesthetist bill.",
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
  footerLine: "Bulk billed no-scalpel, open-ended vasectomy at the Sydney Vasectomy Centre, Enmore.",
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

/**
 * The Chinese-language page. Same three centres as /chinese; everything a
 * visitor reads comes from lib/lang/zh.ts.
 */
export const chineseZh: Location = loc({
  ...chinese,
  slug: "/chinese-zh",
  lang: "zh",
  cityIn: "在悉尼、墨尔本和阿德莱德",
  eyebrow: "中文服务 · 悉尼、墨尔本、阿德莱德",
  metaTitle: "无刀口输精管结扎手术（中文服务）— Vasectomy Australia",
  metaDescription:
    "在悉尼、墨尔本和阿德莱德提供中文服务的无刀口、开放式输精管结扎手术。局部麻醉下约 15 分钟完成，Medicare 补贴后实际自付 $597。",
  indexSummary: "中文服务页面：悉尼、墨尔本与阿德莱德的无刀口输精管结扎手术。",
  heroIntro: "中文服务，局部麻醉下约 15 分钟完成。",
  heroWhere: "— 悉尼、墨尔本与阿德莱德三家中心，均可提供中文服务。",
  locations: {
    heading: "三家中心，均提供中文服务。",
    lede: "悉尼 Enmore、墨尔本 Prahran、阿德莱德 Beulah Park。",
  },
  footerLine: "提供中文服务的无刀口、开放式输精管结扎手术。",
});
