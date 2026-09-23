import type { Copy } from "../copy";

/** The English copy. Lifted from the components it used to live in. */
export const en: Copy = {
  htmlLang: "en-AU",

  nav: {
    how: "The 15 minutes",
    doctors: "Your doctors",
    price: "Price",
    locations: "Locations",
    faq: "FAQ",
  },

  header: {
    backToTop: "Vasectomy Australia — back to top",
    call: "Call",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    sections: "Page sections",
  },

  cta: { book: "Book online" },

  hero: {
    ratedAcross: "Rated across Australia",
    reviews: (count) => `${count} Google reviews`,
    headlineLead: "Safe, effective and affordable",
    headlineHighlight: "no-scalpel vasectomy",
    headlineGap: " ",
    outOfPocket: (amount) => `$${amount} out of pocket`,
    seeWhatHappens: "See what actually happens",
    reassurance:
      "Same-day consult and procedure · No GP referral needed · Free phone consults",
  },

  facts: [
    { k: "15 min", v: "in the procedure room, under local anaesthetic" },
    { k: ">99%", v: "success rate with no-scalpel vasectomy" },
    { k: "25,000+", v: "vasectomies performed by each of our two doctors" },
    { k: "~7 days", v: "for most men to feel back to normal" },
  ],

  whyUs: {
    eyebrow: "Why Vasectomy Australia",
    heading: "Built around one procedure.",
    photoAlt: "Dr Matt Valentine and Dr Geoff Cashion reviewing notes together",
    reasons: [
      "Every one of our doctors trained under world-leading vasectomists",
      "Dr Geoff and Dr Matt have each performed more than 25,000 vasectomies",
      "Our doctors work in vasectomy full time — over 9,000 cases a year across the practice",
      "A gentle technique, so recovery is fast and downtime is minimal",
      "No-scalpel and open-ended, which lowers the rate of bruising and bleeding",
      "One flat price, with no hidden gap fees",
      "24-hour aftercare support once you're home",
      "Same-day consultation and procedure",
      "Free phone consultations before you commit",
    ],
    registrationNote:
      "Dr Geoff Cashion (AHPRA MED0001196484) and Dr Matt Valentine (AHPRA MED0000972761) are registered Medical Practitioners with the Australian Health Practitioner Regulation Agency.",
  },

  procedure: {
    eyebrow: "The appointment",
    heading: "Fifteen minutes, start to finish.",
    lede: "Most of the worry about a vasectomy comes from not knowing what happens in the room. So here it is, minute by minute. You are awake the whole time, under local anaesthetic, and you walk out on your own two feet.",
    steps: [
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
        body: "Arrange for someone to drive you home, or take a cab or public transport. If that is not possible, wait at least 20 minutes and only drive if you feel completely fine — and pull over straight away if you feel lightheaded.",
      },
    ],
    videoLabel: "Dr Geoff Cashion explains the no-scalpel vasectomy",
    videoCaption:
      "Dr Geoff Cashion, founder of Vasectomy Australia, on how the procedure works and what recovery looks like.",
    asideEyebrow: "Worth knowing",
    asideBody:
      "The only part most men actually feel is the anaesthetic at the start — described in our reviews as ",
    asideQuote: "discomfort for 2 seconds with the needle",
    asideBodyAfter: ". After that the area is numb.",
    asideSecond:
      "There are no stitches to remove, so there is no second appointment. The next thing in your calendar is a semen analysis at three months.",
  },

  doctors: {
    eyebrow: "Who does it",
    heading: "Two specialists who do this all day, every day.",
    lede: "Not a GP who fits in the occasional vasectomy. Dr Geoff and Dr Matt have each performed more than 25,000 vasectomies, they do over 9,000 a year across the practice, and both trained under world-leading vasectomists.",
    operatingBoth: (cityIn) => `Both of them operate ${cityIn}.`,
    operatingOne: (cityIn, name) =>
      `Your procedure ${cityIn} is performed by ${name}.`,
    qualifications: "Qualifications",
    registrationPrefix: "AHPRA",
    byId: {
      geoff: {
        role: "Founder, Vasectomy Australia",
        registrationType: "Medical Practitioner",
        bio: "Geoff founded Vasectomy Australia. He graduated in medicine from the University of Queensland in 2002 and worked for years in emergency medicine and general practice before narrowing his practice to this one procedure. He trained in the no-scalpel technique under Dr Doug Stein in Florida, with further training in Australia, and now performs more than 70 vasectomies a week across the country. He supervises general practice registrars for James Cook University, and lives in Sydney.",
        qualifications: [
          "2002 Bachelor of Medicine and Bachelor of Surgery, University of Queensland",
          "2011 Fellowship, Australian College of Rural and Remote Medicine",
          "2013 Fellowship, The Royal College of Emergency Medicine",
          "2018 Graduate Certificate in Occupational Medicine, Otago University",
        ],
      },
      matt: {
        role: "Vasectomy Specialist",
        registrationType: "Medical Practitioner",
        bio: "Matt works full time in vasectomy and sees patients across our Sydney clinics. He completed his medical degree at the University of Adelaide in 2000, then spent five years as a full-time Medical Officer in the Royal Australian Air Force, including overseas deployments and aeromedical retrievals. He has performed vasectomies since 2008 — first trained in the traditional technique, then in the United States in the no-scalpel method. He is a Designated Aviation Medical Examiner with the Civil Aviation Safety Authority.",
        qualifications: [
          "2000 Bachelor of Medicine and Bachelor of Surgery, University of Adelaide",
          "2003 Designated Aviation Medical Examiner, Civil Aviation Safety Authority",
          "2006 Fellowship of the Royal Australian College of General Practitioners",
        ],
      },
    },
  },

  pricing: {
    eyebrow: "What it costs",
    heading: "One fee. No gap, no surprises.",
    lede: "You will know exactly what you are paying before you book. No “it depends on your health fund”, no separate anaesthetist bill, no surgeon’s gap arriving later.",
    procedureFee: "Procedure fee",
    lessRebate: "Less Medicare rebate",
    outOfPocket: "Out of pocket",
    note: (p) =>
      `A $${p.deposit} deposit secures your booking, with the $${p.balance} balance due on the day. We submit your Medicare claim for you afterwards and the $${p.rebate} rebate is usually in your account within 1–2 days.`,
    photoAlt: "Dr Geoff Cashion talking a patient through the procedure",
  },

  recovery: {
    eyebrow: "Afterwards",
    heading: "The week after.",
    lede: "Recovery is usually straightforward, and the part you control matters most: no heavy lifting for the first week.",
    stages: [
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
    ],
    photoAlt: "A man resting at home the day after his procedure",
  },

  locations: {
    eyebrow: "Where",
    openInMaps: "Open in Google Maps",
    clinicDetails: "Clinic details",
    bookHere: "Book here",
    mainCentre: "Main centre",
    cardHeading: (region) => `Vasectomy Australia, ${region}`,
    mapTitle: (name, address) => `Map showing ${name}, ${address}`,
  },

  faq: {
    eyebrow: "Questions",
    heading: "The things men actually ask.",
    lede: "Still unsure? A free phone consult with one of our doctors costs you nothing and commits you to nothing.",
    phoneConsult: "Book a free phone consult",
    items: [
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
        a: "Speak to your GP or specialist before stopping any blood-thinning medication; we generally ask that it is stopped seven days beforehand. On the morning, shave your scrotum; if in doubt about how much, take it all off. Arrange time off or light duties if your job is physical. Read and sign the electronic consent form we send by SMS three days before.",
      },
      {
        q: "Can I use private health insurance?",
        a: "No, and it almost certainly works out cheaper this way. We operate in medical centres rather than private hospitals, and private health only helps when a urologist performs the procedure in a hospital or day surgery. Going that route you would typically pay an excess of $500–$1,000, a surgeon's gap fee of several hundred to over $1,000, and an anaesthetist's gap on top — often $2,000 or more out of pocket, with insurance. With us it is $597, whether you are insured or not.",
      },
      {
        q: "How does the Medicare rebate work?",
        a: "Once you have had your vasectomy and paid, we process the rebate on your behalf. The payment usually lands in your nominated Medicare bank account within 48 hours. If it has not arrived a week later, email us and we will chase it up.",
      },
    ],
  },

  closing: {
    heading: "Book it, and stop thinking about it.",
    lede: (outOfPocket) =>
      `Same-day consult and procedure, no GP referral, and one flat $${outOfPocket} out of pocket.`,
    call: (phone) => `Call ${phone}`,
  },

  footer: {
    rights: (year) => `© ${year} Vasectomy Australia. All rights reserved.`,
    poweredBy: "Powered by",
  },

  booking: {
    eyebrow: "Book online",
    heading: "Which clinic suits you?",
    close: "Close",
    closeOptions: "Close booking options",
    notSure: "Not sure yet? Book a",
    freeConsult: "free phone consult",
    orCall: "or call",
  },

  backToTop: "Back to top",
};
