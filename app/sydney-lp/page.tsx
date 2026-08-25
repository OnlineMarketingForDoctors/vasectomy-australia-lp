import type { Metadata } from "next";
import { ROBOTS_DIRECTIVE } from "@/lib/seo";
import { BookingProvider } from "@/components/BookingModal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReviewCarousel from "@/components/ReviewCarousel";
import Procedure from "@/components/Procedure";
import Reveal from "@/components/Reveal";
import BackToTop from "@/components/BackToTop";
import {
  ClosingCta, Doctors, Faq, Facts, Footer, Locations, Pricing, Recovery, WhyUs,
} from "@/components/Sections";

export const metadata: Metadata = {
  title: "Vasectomy Sydney | No-Scalpel Vasectomy — Vasectomy Australia",
  description:
    "No-scalpel, open-ended vasectomy in Sydney. About 15 minutes under local anaesthetic, $597 out of pocket after your Medicare rebate. Nine clinics across Sydney.",
  robots: ROBOTS_DIRECTIVE,
};

export default function SydneyLandingPage() {
  return (
    <BookingProvider>
      <Reveal />
      <Header />
      <main>
        <Hero />
        <ReviewCarousel />
        <Facts />
        <Procedure />
        <Doctors />
        <Pricing />
        <WhyUs />
        <Recovery />
        <Locations />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
      <BackToTop />
    </BookingProvider>
  );
}
