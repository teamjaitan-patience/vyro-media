"use client";

import { BlurFade } from "@/components/magic-ui/blur-fade";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const WEBSITES = [
  {
    name: "Pratham Kochhar",
    url: "https://www.prathamkochhar.com/",
    image: "/pratham.png", 
  },
  {
    name: "Gori Katyagi",
    url: "https://www.gorikatyagi.in/",
    image: "/gori.png", 
  },
  {
    name: "Exotica Productions",
    url: "https://www.exoticaproductions.com/",
    image: "/exotica.png", 
  },
];

function CarouselCard({ site, containerRef }: { site: typeof WEBSITES[0], containerRef: React.RefObject<HTMLDivElement | null> }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollXProgress } = useScroll({
    container: containerRef,
    target: cardRef,
    axis: "x",
    offset: ["start end", "end start"]
  });

  // Rotate between 15deg to 0deg to -15deg
  const rotateZ = useTransform(scrollXProgress, [0, 0.5, 1], [15, 0, -15]);
  // Move down by 100px on the edges
  const y = useTransform(scrollXProgress, [0, 0.5, 1], [100, 0, 100]);
  const scale = useTransform(scrollXProgress, [0, 0.5, 1], [0.85, 1, 0.85]);
  const opacity = useTransform(scrollXProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const zIndex = useTransform(scrollXProgress, [0, 0.5, 1], [10, 50, 10]); // Increased z-index
  const dragBadgeOpacity = useTransform(scrollXProgress, [0, 0.4, 0.5, 0.6, 1], [0, 0, 1, 0, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateZ, y, scale, opacity, zIndex }}
      className="relative shrink-0 w-[85vw] md:w-[600px] lg:w-[800px] aspect-[4/5] md:aspect-[16/10] snap-center group"
    >
      {/* Inner Image Container (allows overflow-hidden without clipping absolute badges) */}
      <div className="absolute inset-0 bg-[#e5e5e5] rounded-[2rem] overflow-hidden shadow-2xl border border-[#d4d4d8]">
        {/* Fallback placeholder text while image is missing */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#f4f4f5] text-[#a3a3a3] font-sans text-sm tracking-widest uppercase">
          Photo Placeholder
        </div>
        
        <Image
          src={site.image}
          alt={site.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105 pointer-events-none"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        
        {/* Overlay for interaction */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-20">
          <a 
            href={site.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-[#0A0A0A] px-6 py-3 rounded-full font-sans font-bold text-sm tracking-widest uppercase hover:bg-[#f4f4f5] transition-colors pointer-events-auto flex items-center gap-2 hover:scale-105"
          >
            Visit Site <span className="text-lg leading-none">↗</span>
          </a>
        </div>

        {/* Label */}
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none z-20">
          <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm">
            <span className="font-sans font-bold text-sm text-[#0A0A0A]">{site.name}</span>
          </div>
        </div>
      </div>

      {/* Floating Drag Badge (Visible only on center card) */}
      <motion.div
        style={{ opacity: dragBadgeOpacity }}
        className="absolute top-1/2 -right-6 md:-right-10 -translate-y-1/2 w-[72px] h-[72px] bg-[#0A0A0A] text-white rounded-full flex items-center justify-center font-sans font-bold text-[10px] tracking-widest uppercase shadow-2xl pointer-events-none z-50 hidden md:flex"
      >
        Drag
      </motion.div>
    </motion.div>
  );
}

export function PackagesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="packages" className="section-padding bg-[#f4f4f5] overflow-hidden relative z-0">
      <div className="max-w-[1400px] mx-auto text-center relative z-20">
        <BlurFade delay={0.1} inView>
          <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-[#737373] mb-8 block">
            02: WEBSITES
          </span>
          <h2 className="font-serif italic text-5xl md:text-7xl lg:text-[6rem] text-[#0A0A0A] leading-[0.9] mb-12 max-w-5xl mx-auto">
            A Website That Looks Like a Million Bucks. Priced Like It Shouldn't.
          </h2>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <p className="font-sans text-xl md:text-2xl text-[#737373] max-w-3xl mx-auto mb-16 leading-relaxed">
            Your website is your 3 AM pitch. It works when you're asleep. It speaks when you can't. We build portfolio and brand websites that are fast, beautiful, and built to convert, without the agency price tag.
          </p>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center bg-[#0A0A0A] text-white px-10 py-5 rounded-full font-sans font-bold text-lg hover:bg-black/80 transition-colors shadow-2xl hover:-translate-y-1 duration-300"
            >
              Get a Website Quote
            </a>
            <span className="font-sans text-sm font-semibold text-[#737373] uppercase tracking-widest">
              Starting from ₹15,000
            </span>
          </div>
        </BlurFade>
      </div>

      {/* 3D Carousel */}
      <BlurFade delay={0.4} inView>
        <div className="relative mt-16 md:mt-32 w-full max-w-[100vw] py-10 z-10">
          
          {/* Dotted Arc Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[150vw] md:w-[120vw] h-[800px] pointer-events-none opacity-20 -z-10">
             <svg width="100%" height="100%" viewBox="0 0 1000 500" preserveAspectRatio="none">
                <path d="M 0,500 Q 500,-100 1000,500" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="10, 15" />
             </svg>
          </div>

          {/* Scrolling Container */}
          <div 
            ref={containerRef}
            className="flex gap-10 md:gap-20 overflow-x-auto snap-x snap-mandatory px-[7.5vw] md:px-[calc(50vw-300px)] lg:px-[calc(50vw-400px)] py-10 relative z-20 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {WEBSITES.map((site) => (
              <CarouselCard key={site.name} site={site} containerRef={containerRef} />
            ))}
          </div>
        </div>
        
        <div className="mt-8 flex justify-center gap-2 items-center text-[#a3a3a3]">
          <span className="text-xs font-sans tracking-[0.2em] uppercase">← Swipe to explore →</span>
        </div>
      </BlurFade>
    </section>
  );
}
