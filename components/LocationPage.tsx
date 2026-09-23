import type { Metadata } from "next";
import type { Location } from "@/lib/locations";
import { ROBOTS_DIRECTIVE } from "@/lib/seo";
import { copyFor } from "@/lib/copy";
import { LocationProvider } from "@/components/LocationContext";
import { BookingProvider } from "@/components/BookingModal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Procedure from "@/components/Procedure";
import Reveal from "@/components/Reveal";
import BackToTop from "@/components/BackToTop";
import {
  ClosingCta, Doctors, Faq, Facts, Footer, Locations, Pricing, Recovery, WhyUs,
} from "@/components/Sections";

/** Every location route renders this; only the config differs. */
export function metadataFor(location: Location): Metadata {
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    robots: ROBOTS_DIRECTIVE,
  };
}

export default function LocationPage({ location }: { location: Location }) {
  const { htmlLang } = copyFor(location.lang);

  return (
    <LocationProvider location={location}>
      <BookingProvider>
        <Reveal />
        {/* The root layout declares en-AU for the index; a translated page
            re-declares its own language for the content it wraps. */}
        <div lang={htmlLang}>
        <Header />
        <main>
          <Hero />
          <WhyUs />
          <Facts />
          <Procedure />
          <Doctors />
          {location.showPricing && <Pricing />}
          <Recovery />
          <Locations />
          <Faq />
          <ClosingCta />
        </main>
        <Footer />
        <BackToTop />
        </div>
      </BookingProvider>
    </LocationProvider>
  );
}
