import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
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
      </body>
    </html>
  );
}
