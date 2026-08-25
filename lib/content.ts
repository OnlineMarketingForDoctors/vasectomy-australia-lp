/**
 * All page copy and data for the Sydney landing page.
 *
 * Source: https://lp.vasectomyaustralia.com.au/vasectomy-sydney-lp/
 * Copy has been restructured and tightened for this layout; all clinical
 * claims, prices, addresses and booking URLs are carried over unchanged.
 */

export const site = {
  phoneLabel: "1800 SNIPME",
  phoneDigits: "1800 764 763",
  phoneHref: "tel:1800764763",
  email: "info@vasectomyaustralia.com.au",
  /** Google rating shown in the hero badge. Update both values together. */
  rating: { score: "5.0", count: 361 },
  /** Fallback booking page for clinics without their own online calendar. */
  bookingFallback: "https://vasectomyaustralia.com.au/book-online/",
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

/** The signature section: what actually happens, minute by minute. */
export const procedure = [
  {
    at: "0",
    unit: "min",
    title: "Local anaesthetic",
    body: "A fine needle numbs the area. Most men say it feels no worse than a dentist's needle or a flu jab. This is the only part you really feel.",
  },
  {
    at: "2",
    unit: "min",
    title: "One tiny opening",
    body: "A single small hole is made in the scrotum using blunt dissection — no scalpel, and no incision on each side the way the traditional method needs.",
  },
  {
    at: "5",
    unit: "min",
    title: "The vas is divided",
    body: "The vas deferens is divided and the testicular end is left open. Leaving it open lets the testicle keep doing what it does, which reduces congestion and the risk of ongoing pain.",
  },
  {
    at: "8",
    unit: "min",
    title: "A tissue barrier",
    body: "A thin layer of tissue is placed between the two ends so they cannot rejoin. This is what makes the result permanent.",
  },
  {
    at: "11",
    unit: "min",
    title: "The other side",
    body: "The same thing is done on the other side — through the same single opening. Nothing new is opened up.",
  },
  {
    at: "14",
    unit: "min",
    title: "Closed without stitches",
    body: "The skin edge is clipped together. No stitches to come out, no follow-up appointment to remove anything. A dressing goes on and you get dressed.",
  },
  {
    at: "15",
    unit: "min",
    title: "You walk out",
    body: "Most men drive themselves home. We ask you to wait 20 minutes and only drive if you feel completely fine — otherwise take a cab, or have someone collect you.",
  },
];

export const reasons = [
  "Every one of our doctors trained under world-leading vasectomists",
  "Our doctors work in vasectomy full time — over 9,000 cases a year between them",
  "A gentle technique, so recovery is fast and downtime is minimal",
  "No-scalpel and open-ended, which lowers the rate of bruising and bleeding",
  "One flat price, with no hidden gap fees",
  "24-hour aftercare support once you're home",
  "Same-day consultation and procedure",
  "Free phone consultations before you commit",
];

export const doctors = [
  {
    id: "geoff",
    name: "Dr Geoff Cashion",
    role: "Founder, Vasectomy Australia",
    img: "/img/dr-geoff.webp",
    bio: "Geoff founded Vasectomy Australia and has spent his career narrowing his practice to this one procedure. He trained under world-leading vasectomists and now performs thousands a year. Patients most often describe him as calm — which, given what they came in for, is the compliment that matters.",
  },
  {
    id: "matt",
    name: "Dr Matt Valentine",
    role: "Vasectomy Specialist",
    img: "/img/dr-matt.webp",
    bio: "Matt works full time in vasectomy across our Sydney clinics. He is a specialist rather than a GP who occasionally does these, and he is unhurried about questions — the consult is where most men stop being nervous, so he treats it as part of the procedure rather than a formality.",
  },
];

export type Clinic = {
  name: string;
  suburb: string;
  address: string;
  booking: string;
  learnMore: string;
  flagship?: boolean;
};

export const clinics: Clinic[] = [
  {
    name: "The Sydney Vasectomy Centre",
    suburb: "Enmore",
    address: "Enmore Medical Practice, 134–146 Enmore Rd, Enmore NSW 2042",
    booking:
      "https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=157255&product=2451305%3ASV&staff=288783",
    learnMore: "https://vasectomyaustralia.com.au/sydney-vasectomy-centre/",
    flagship: true,
  },
  {
    name: "Sydney Vasectomy Centre – North Shore",
    suburb: "Chatswood",
    address: "Suite 205, 781 Pacific Highway, Chatswood NSW 2067",
    booking: site.bookingFallback,
    learnMore: "https://vasectomyaustralia.com.au/vasectomy-north-shore-chatswood/",
  },
  {
    name: "Maroubra Family Doctors",
    suburb: "Maroubra",
    address: "Shop T01A, 717 Anzac Parade, Maroubra NSW 2035",
    booking: site.bookingFallback,
    learnMore: "https://vasectomyaustralia.com.au/vasectomy-sydney-maroubra/",
  },
  {
    name: "Warringah Medical & Dental Centre",
    suburb: "Brookvale",
    address: "10 Dale St, Brookvale NSW 2100",
    booking: site.bookingFallback,
    learnMore: "https://vasectomyaustralia.com.au/vasectomy-northern-beaches-sydney/",
  },
  {
    name: "The Hills Medical & Dental Centre",
    suburb: "Baulkham Hills",
    address: "3 Columbia Ct, Baulkham Hills NSW 2153",
    booking: site.bookingFallback,
    learnMore: "https://vasectomyaustralia.com.au/vasectomy-hills-district-sydney/",
  },
  {
    name: "Pacific Medical Centre Blacktown",
    suburb: "Blacktown",
    address: "23–27 First Ave, Blacktown NSW 2148",
    booking: site.bookingFallback,
    learnMore: "https://vasectomyaustralia.com.au/vasectomy-western-sydney/",
  },
  {
    name: "Kingsway Specialist Medical Centre",
    suburb: "Miranda",
    address: "Urology Suites, Level 3, 531–533 Kingsway, Miranda NSW 2228",
    booking: site.bookingFallback,
    learnMore: "https://vasectomyaustralia.com.au/sydney-sutherland-shire/",
  },
  {
    name: "Penrith Medical Centre",
    suburb: "Penrith",
    address: "61–79 Henry St, Penrith NSW 2750",
    booking: site.bookingFallback,
    learnMore: "https://vasectomyaustralia.com.au/vasectomy-penrith-sydney/",
  },
  {
    name: "Campbelltown Medical and Dental Centre",
    suburb: "Campbelltown",
    address: "296 Queen St, Campbelltown NSW 2560",
    booking: site.bookingFallback,
    learnMore: "https://vasectomyaustralia.com.au/vasectomy-campbelltown-sydney/",
  },
];

export const recovery = [
  {
    when: "The first 24 hours",
    body: "Rest up. Frozen peas in a tea towel is genuinely the best first measure, with paracetamol or ibuprofen as needed. Supportive underpants help more than most men expect.",
  },
  {
    when: "The first week",
    body: "No heavy lifting or straining — this is the single biggest thing you control. Desk-based work is usually fine the next day. If your job is physical, arrange light duties; we can provide a medical certificate.",
  },
  {
    when: "Around one week",
    body: "Most men feel back to normal in about seven days, and most can resume sex around then. Some take up to two weeks. A background ache for a week or two is normal and settles.",
  },
  {
    when: "Two to three weeks",
    body: "Hold off on bike riding and contact sports. Avoid long periods of sitting where you can.",
  },
  {
    when: "At three months",
    body: "Do the semen analysis. This is not optional — you are fertile until we confirm otherwise, and three months gives you time to clear the pipes.",
  },
];

export const faqs = [
  {
    q: "What is the difference between no-scalpel and traditional?",
    a: "The traditional method uses a scalpel to make an incision on each side of the scrotum to reach the vas. The no-scalpel method uses blunt dissection and usually needs only one opening, through which both sides are accessed. No-scalpel results in lower rates of complications like bruising and bleeding.",
  },
  {
    q: "What does open-ended mean, and why does it matter?",
    a: "Open-ended means the end of the vas attached to the testicle is left open. After a vasectomy the testicle keeps making sperm, and that sperm needs somewhere to go. Letting it release into the scrotum reduces the incidence of congestion — the feeling of pressure from sperm backing up, like a kinked hose with the tap running. The closed-ended technique clamps that end with a suture or clip instead.",
  },
  {
    q: "Can I drive myself home?",
    a: "We recommend someone drives you home, or you take a cab or public transport. If that is not possible, wait at least 20 minutes after leaving the procedure room and only drive if you feel 100% fine. If you feel lightheaded while driving, pull over immediately.",
  },
  {
    q: "How long until it actually works?",
    a: "Not immediately — and this catches people out. You must consider yourself fertile until we tell you the vasectomy was a success. We ask for a semen analysis at three months to confirm you are sterile.",
  },
  {
    q: "When can I go back to work?",
    a: "If your job does not involve much lifting, often the next day. If you do a lot of heavy lifting, take some time off or request light duties for seven days. We can provide a medical certificate if you need to stay home.",
  },
  {
    q: "Is it reversible?",
    a: "Vasectomies can be reversed, but you should treat this as permanent contraception. Reversals are not 100% successful, cost north of $5,000, and are not covered by Medicare. If you are asking this question, it is worth thinking twice before booking.",
  },
  {
    q: "What are the risks?",
    a: "Most men notice some bruising, which usually clears in about a week, and mild pain and swelling that settles within a few days. Less common complications include a scrotal haematoma (a large bruise within the scrotum — following the lifting instructions greatly reduces this risk), infection (usually mild and treated with oral antibiotics), and Post-Vasectomy Pain Syndrome, which is rare, poorly understood, and in most cases resolves. A full list is set out in your consent form.",
  },
  {
    q: "Do I need a referral from my GP?",
    a: "No. You can book directly through us.",
  },
  {
    q: "Are there age or family requirements?",
    a: "If you have children, we perform vasectomies for men aged 18 and over. If you do not have children you must be at least 25. Men aged 25–29 with no children must have a phone consult with our doctor no less than 14 days before surgery.",
  },
  {
    q: "How do I prepare?",
    a: "Stop any blood-thinning medication at least seven days beforehand — discuss this with your GP or specialist first. On the morning, shave your scrotum; if in doubt about how much, take it all off. Arrange time off or light duties if your job is physical. Read and sign the electronic consent form we send by SMS three days before.",
  },
  {
    q: "Can I use private health insurance?",
    a: "No, and it almost certainly works out cheaper this way. We operate in medical centres rather than private hospitals, and private health only helps when a urologist performs the procedure in a hospital or day surgery. Going that route you would typically pay an excess of $500–$1,000, a surgeon's gap fee of several hundred to over $1,000, and an anaesthetist's gap on top — often $2,000 or more out of pocket, with insurance. With us it is $597, whether you are insured or not.",
  },
  {
    q: "How does the Medicare rebate work?",
    a: "Once you have had your vasectomy and paid, we process the rebate on your behalf. The payment usually lands in your nominated Medicare bank account within 48 hours. If it has not arrived a week later, email us and we will chase it up.",
  },
];
