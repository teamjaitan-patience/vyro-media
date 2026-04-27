import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
});

export const metadata: Metadata = {
  title: "VYRO Media | We Make You Look Like the Main Character",
  description:
    "VYRO is a Delhi-based full-stack media production studio specializing in video production, content creation, portfolio websites, and AI-powered workflows. Built for founders, creators, and brands ready to be seen.",
  keywords: "video production delhi, brand films, podcast production, portfolio websites, content strategy, AI workflows, VYRO media",
  openGraph: {
    title: "VYRO Media | We Make You Look Like the Main Character",
    description: "Full-stack media production for founders, creators, and brands. Delhi-based. Story-first.",
    url: "https://vyromedia.in",
    siteName: "VYRO Media",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VYRO Media",
    description: "Full-stack media production for founders, creators, and brands.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrumentSerif.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-white text-[#0A0A0A]" suppressHydrationWarning>
        {children}
        <Script id="cal-link" strategy="lazyOnload">
          {`
            (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
            Cal("init", "vyromedia", {origin:"https://app.cal.com"});
            Cal.ns.vyromedia("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
          `}
        </Script>
      </body>
    </html>
  );
}
