"use client";

import { motion } from "framer-motion";
import { WordPull } from "@/components/magic-ui/word-pull";
import { DotPattern } from "@/components/magic-ui/dot-pattern";
import { BorderBeam } from "@/components/magic-ui/border-beam";
import { Play } from "lucide-react";

import { FlipWords } from "@/components/aceternity-ui/flip-words";

export function HeroSection() {
  const words = ["Cinematic.", "Unforgettable.", "Worth Watching.", "The Main Character.", "Finally Seen."];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-24"
    >
      {/* Background Pattern */}
      <DotPattern
        width={32}
        height={32}
        cx={1}
        cy={1}
        cr={1}
        className="opacity-40"
      />

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 md:mb-12"
        >
          <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#737373] border border-[#e5e5e5] rounded-full px-4 py-1.5">
            VYRO MEDIA | DELHI
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-6 md:mb-10"
        >
          <p className="font-serif italic text-2xl md:text-3xl text-[#0A0A0A] max-w-2xl mx-auto">
            "We Make You Look Like the Main Character"
          </p>
        </motion.div>

        {/* Massive Headline */}
        <div className="mb-10 w-full flex flex-col items-center justify-center max-w-[100vw] overflow-hidden px-4">
          <WordPull
            words="Your Story."
            className="font-sans font-extrabold tracking-tighter text-6xl md:text-[7rem] lg:text-[9rem] leading-[0.9] text-[#0A0A0A] pb-2 md:pb-4"
            delay={0.1}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="w-full flex justify-center mt-2 md:mt-4 min-h-[120px] md:min-h-[180px] lg:min-h-[220px]"
          >
            <FlipWords 
              words={words} 
              duration={2500}
              className="font-serif italic font-normal tracking-tight text-5xl sm:text-6xl md:text-[7rem] lg:text-[10rem] leading-[1] md:leading-[0.8] text-[#0A0A0A] !text-[#0A0A0A] dark:!text-[#0A0A0A] text-center"
            />
          </motion.div>
        </div>

        {/* Subheadline & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center max-w-xl mx-auto gap-8 mb-20"
        >
          <p className="text-[#737373] text-lg md:text-xl leading-relaxed text-balance">
            From the first frame to the final edit, we build visual brands that feel
            like films and convert like strategy.
          </p>
          <div className="flex gap-4">
            <a
              href="#work"
              className="bg-[#0A0A0A] text-white px-8 py-4 rounded-full font-sans font-semibold text-sm hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              See Our Work
            </a>
            <a
              href="#contact"
              className="bg-white text-[#0A0A0A] border border-[#e5e5e5] px-8 py-4 rounded-full font-sans font-semibold text-sm hover:bg-[#f4f4f5] transition-colors duration-300"
            >
              Start a Project
            </a>
          </div>
        </motion.div>

        {/* Massive Video Modal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1200px] aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#0A0A0A] shadow-2xl"
        >
          <BorderBeam size={300} duration={12} delay={2} colorFrom="#ffffff" colorTo="transparent" />
          
          {/* Video Placeholder Content */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
          
          {/* Film Grain */}
          <div className="absolute inset-0 bg-black/20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")', opacity: 0.15 }}></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:bg-[#f4f4f5] transition-colors">
                <Play className="text-[#0A0A0A] ml-1.5 w-6 h-6 md:w-8 md:h-8" fill="currentColor" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
