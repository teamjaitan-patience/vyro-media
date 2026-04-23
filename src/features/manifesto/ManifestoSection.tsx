"use client";

import { BlurFade } from "@/components/magic-ui/blur-fade";
import { Highlight } from "@/components/aceternity-ui/hero-highlight";
import { TextReveal } from "@/components/magic-ui/text-reveal";
import { ConfettiTrigger } from "@/components/magic-ui/confetti";

export function ManifestoSection() {
  return (
    <section id="manifesto" className="section-padding bg-[#0A0A0A] text-white">
      <div className="max-w-[1000px] mx-auto">
        <BlurFade delay={0.1} inView>
          <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-[#737373] mb-12 block">
            THE MANIFESTO
          </span>
        </BlurFade>

        <div className="space-y-12 md:space-y-16">
            <TextReveal 
              className="font-serif italic font-normal text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight"
              text="Most brands look exactly like everyone else." 
            />

          <BlurFade delay={0.3} inView>
            <p className="font-sans font-medium text-xl md:text-3xl lg:text-4xl leading-tight text-[#a3a3a3]">
              Same templates. Same filters. Same forgettable content.
            </p>
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <div className="font-sans font-medium text-xl md:text-3xl lg:text-4xl leading-tight text-[#a3a3a3]">
              <ConfettiTrigger className="text-white hover:text-[#e5e5e5] transition-colors border-b-2 border-white/30 pb-1">
                We started VYRO
              </ConfettiTrigger>{" "}
              because we believe your brand deserves to feel like the{" "}
              <Highlight className="text-white">opening scene of a film</Highlight>, the kind that stops you mid-scroll and makes
              you lean in.
            </div>
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <div className="font-sans font-medium text-xl md:text-3xl lg:text-4xl leading-tight text-[#a3a3a3]">
              We&apos;re not an agency. We&apos;re a creative production house built to make you look like{" "}
              <Highlight className="text-white">the main character</Highlight> of your own story.
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
