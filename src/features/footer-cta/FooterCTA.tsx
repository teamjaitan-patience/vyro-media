"use client";

import { BlurFade } from "@/components/magic-ui/blur-fade";
import { DotPattern } from "@/components/magic-ui/dot-pattern";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function FooterCTA() {
  return (
    <section id="contact" className="section-padding bg-[#0A0A0A] relative overflow-hidden text-center text-white min-h-[80vh] flex flex-col items-center justify-center">
      <DotPattern
        width={32}
        height={32}
        cx={1}
        cy={1}
        cr={1}
        className="opacity-10"
      />
      <div className="relative z-10 max-w-[1000px] w-full mx-auto flex flex-col items-center">
        <BlurFade delay={0.1} inView>
          <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-[#737373] border border-[#333333] rounded-full px-4 py-1.5 mb-12 inline-block">
            LET'S TALK
          </span>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <h2 className="font-serif italic text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tight mb-12">
            Ready to roll?
          </h2>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <p className="font-sans font-medium text-xl md:text-2xl text-[#a3a3a3] max-w-2xl mx-auto mb-16">
            Stop blending in. Let's build a brand that looks like a film and converts like strategy.
          </p>
          <div className="flex items-center gap-4 justify-center">
            <div className="h-px w-16 bg-white/10" />
            <span className="text-white/20 text-xs tracking-widest uppercase">vyromedia.in</span>
            <div className="h-px w-16 bg-white/10" />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
