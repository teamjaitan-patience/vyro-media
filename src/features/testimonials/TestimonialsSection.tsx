"use client";

import { BlurFade } from "@/components/magic-ui/blur-fade";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const VIDEOS = [
  { id: "hfUesj-2m8U", title: "Brand Film" },
  { id: "JfvavSfr9hk", title: "Commercial" },
  { id: "W4wMkKqzf3Q", title: "Creative Short" },
  { id: "I6L-qWew04I", title: "Cinematic Reel" },
  { id: "XYEM9c5adkI", title: "Social Highlight" },
  { id: "M9L74ktwL7I", title: "Digital Ad" },
  { id: "6ZBn7vkg_Ao", title: "Visual Story" },
  { id: "mCW2M0WrDJY", title: "Brand Documentary" },
  { id: "vwHebOinZbM", title: "Trending Content" },
];

function VideoCarouselCard({ video, containerRef }: { video: typeof VIDEOS[0], containerRef: React.RefObject<HTMLDivElement | null> }) {
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
  const zIndex = useTransform(scrollXProgress, [0, 0.5, 1], [10, 50, 10]);
  const dragBadgeOpacity = useTransform(scrollXProgress, [0, 0.4, 0.5, 0.6, 1], [0, 0, 1, 0, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateZ, y, scale, opacity, zIndex }}
      className="relative shrink-0 w-[85vw] md:w-[600px] lg:w-[800px] aspect-video snap-center group"
    >
      {/* Inner Image Container */}
      <div className="absolute inset-0 bg-[#0A0A0A] rounded-[2rem] overflow-hidden shadow-2xl border border-[#262626]">
        
        <Image
          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none opacity-80"
          onError={(e) => {
             // Fallback to high quality if maxres isn't available
            e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
          }}
        />
        
        {/* Play Button Icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
           <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center pl-1 border border-white/30">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                 <path d="M5 3L19 12L5 21V3Z" />
              </svg>
           </div>
        </div>
        
        {/* Overlay for interaction */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-20">
          <a 
            href={`https://www.youtube.com/watch?v=${video.id}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-[#0A0A0A] px-6 py-3 rounded-full font-sans font-bold text-sm tracking-widest uppercase hover:bg-[#f4f4f5] transition-colors pointer-events-auto flex items-center gap-2 hover:scale-105"
          >
            Watch Video <span className="text-lg leading-none">↗</span>
          </a>
        </div>


      </div>

      {/* Floating Drag Badge */}
      <motion.div
        style={{ opacity: dragBadgeOpacity }}
        className="absolute top-1/2 -right-6 md:-right-10 -translate-y-1/2 w-[72px] h-[72px] bg-white text-[#0A0A0A] rounded-full flex items-center justify-center font-sans font-bold text-[10px] tracking-widest uppercase shadow-2xl pointer-events-none z-50 hidden md:flex"
      >
        Drag
      </motion.div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" className="section-padding bg-white overflow-hidden relative z-0">
      <div className="max-w-[1400px] mx-auto text-center relative z-20">
        <BlurFade delay={0.1} inView>
          <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-[#737373] mb-8 block">
            SELECTED WORK
          </span>
          <h2 className="font-serif italic text-5xl md:text-7xl lg:text-[6rem] text-[#0A0A0A] leading-[0.9] mb-12 max-w-5xl mx-auto">
            Every Frame is Intentional.
          </h2>
        </BlurFade>
        
        <BlurFade delay={0.2} inView>
          <p className="font-sans text-xl md:text-2xl text-[#737373] max-w-3xl mx-auto mb-16 leading-relaxed">
            We don't just shoot. We direct, produce, and score visual narratives that anchor your brand in the minds of your audience.
          </p>
        </BlurFade>
      </div>

      {/* 3D Carousel */}
      <BlurFade delay={0.4} inView>
        <div className="relative mt-8 md:mt-16 w-full max-w-[100vw] py-10 z-10">
          
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
            {VIDEOS.map((video) => (
              <VideoCarouselCard key={video.id} video={video} containerRef={containerRef} />
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
