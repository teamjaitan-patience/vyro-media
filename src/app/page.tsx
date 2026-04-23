import { Navbar } from "@/features/navbar/Navbar";
import { HeroSection } from "@/features/hero/HeroSection";
import { StatsTicker } from "@/features/stats/StatsTicker";
import { ManifestoSection } from "@/features/manifesto/ManifestoSection";
import { ServicesSection } from "@/features/services/ServicesSection";
import { AIEdgeSection } from "@/features/ai-edge/AIEdgeSection";
import { FounderSection } from "@/features/founder/FounderSection";
import { AudienceSection } from "@/features/audience/AudienceSection";
import { ProcessSection } from "@/features/process/ProcessSection";
import { PackagesSection } from "@/features/packages/PackagesSection";
import { TestimonialsSection } from "@/features/testimonials/TestimonialsSection";
import { FAQSection } from "@/features/faq/FAQSection";
import { FooterCTA } from "@/features/footer-cta/FooterCTA";
import { Footer } from "@/features/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Section 01 — Navigation */}
      <Navbar />

      {/* Section 02 — Hero */}
      <HeroSection />

      {/* Section 03 — Stats Ticker */}
      <StatsTicker />

      {/* Section 04 — Brand Manifesto */}
      <ManifestoSection />

      {/* Section 05 — Services */}
      <ServicesSection />

      {/* Section 06 — AI Edge */}
      <AIEdgeSection />

      {/* Section 07 — Founder Story */}
      <FounderSection />

      {/* Section 08 — Who We Build For */}
      <AudienceSection />

      {/* Section 09 — Process */}
      <ProcessSection />

      {/* Section 10 — Website Packages */}
      <PackagesSection />

      {/* Section 11 — Testimonials + Work Placeholder */}
      <TestimonialsSection />

      {/* Section 12 — FAQ */}
      <FAQSection />

      {/* Section 13 — Footer CTA + Footer */}
      <FooterCTA />
      <Footer />
    </main>
  );
}
