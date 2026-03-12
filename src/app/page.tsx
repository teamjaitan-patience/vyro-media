import { HeroSection } from "@/features/hero/HeroSection";
import { ServicesSection } from "@/features/services/ServicesSection";
import { WaitlistSection } from "@/features/waitlist/WaitlistSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center">
      <header className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center max-w-7xl mx-auto right-0">
        <div className="text-2xl font-black tracking-widest uppercase text-white drop-shadow-md">VYRO</div>
      </header>

      <HeroSection />
      <ServicesSection />
      <WaitlistSection />

      <footer className="w-full py-8 text-center text-zinc-500 text-sm border-t border-white/5 bg-zinc-950/80">
        <p className="tracking-wide">Founder: Jaitan Puri | vyromedia.in</p>
      </footer>
    </main>
  );
}
