import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { ROBOTS_DIRECTIVE, ALLOW_INDEXING } from "@/lib/seo";
import { site } from "@/lib/content";
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

/** Google Tag Manager, verbatim from the container's install snippet. */
const GTM_SNIPPET = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${site.gtmId}');`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        {/* Google Tag Manager — kept first in the head, as the install
            instructions ask. Written inline rather than with next/script so
            it lands here rather than being repositioned. */}
        <script dangerouslySetInnerHTML={{ __html: GTM_SNIPPET }} />
        {/* End Google Tag Manager */}

        {/* Belt and braces: an explicit tag as well as the Metadata robots
            field, so the directive is present even if metadata is overridden
            by a nested route. Both read from the same constant. */}
        <meta name="robots" content={ROBOTS_DIRECTIVE} />
        {!ALLOW_INDEXING && <meta name="googlebot" content={ROBOTS_DIRECTIVE} />}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}
