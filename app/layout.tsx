import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { ROBOTS_DIRECTIVE, ALLOW_INDEXING } from "@/lib/seo";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vasectomy Sydney | No-Scalpel Vasectomy — Vasectomy Australia",
  description:
    "No-scalpel, open-ended vasectomy in Sydney. About 15 minutes under local anaesthetic, $597 out of pocket, nine locations across Sydney.",
  // Second, independent indexing layer — see CLAUDE.md and lib/seo.ts.
  robots: ROBOTS_DIRECTIVE,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        {/* Belt and braces: an explicit tag as well as the Metadata robots
            field, so the directive is present even if metadata is overridden
            by a nested route. Both read from the same constant. */}
        <meta name="robots" content={ROBOTS_DIRECTIVE} />
        {!ALLOW_INDEXING && <meta name="googlebot" content={ROBOTS_DIRECTIVE} />}
      </head>
      <body>{children}</body>
    </html>
  );
}
