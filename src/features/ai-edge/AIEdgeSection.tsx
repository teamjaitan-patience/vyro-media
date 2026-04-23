"use client";

import { BlurFade } from "@/components/magic-ui/blur-fade";

export function AIEdgeSection() {
  return (
    <section id="ai-edge" className="section-padding bg-white">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <BlurFade delay={0.1} inView>
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-[#737373] mb-12 block">
              THE VYRO DIFFERENCE
            </span>
            <h2 className="font-serif italic text-5xl md:text-7xl text-[#0A0A0A] mb-12">
              We're the only studio in the room that also builds AI Agents.
            </h2>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <p className="font-sans text-xl md:text-2xl text-[#737373] leading-relaxed mb-8">
              Most production houses stop at the edit. We go further. Our founder spent a year as an AI engineer. That's not a side skill. It's our edge.
            </p>
          </BlurFade>
          
          <div className="space-y-6 mt-12">
            {[
              "Faster turnaround without cutting corners",
              "Smarter content repurposing at scale",
              "AI-assisted video workflows that multiply output",
            ].map((edge, i) => (
              <BlurFade key={i} delay={0.3 + i * 0.1} inView>
                <div className="flex items-center gap-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A]" />
                  <span className="font-sans font-medium text-lg text-[#0A0A0A]">
                    {edge}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        <BlurFade delay={0.3} inView>
          <div className="relative aspect-square max-w-lg mx-auto bg-[#f4f4f5] rounded-3xl flex items-center justify-center p-12 text-center">
            <p className="font-serif italic text-3xl md:text-4xl text-[#0A0A0A] leading-relaxed">
              "We don't use AI to replace the human stuff. We use it to protect it."
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
