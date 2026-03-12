import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "VYRO | Brand Agency",
  description: "VYRO is a next-generation brand agency specializing in high-end video, AI, and automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} antialiased selection:bg-indigo-500/30 selection:text-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
