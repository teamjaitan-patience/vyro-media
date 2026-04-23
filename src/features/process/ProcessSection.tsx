"use client";

import { BlurFade } from "@/components/magic-ui/blur-fade";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    desc: "We don't shoot until we understand your business model. We define the narrative, the audience, and the desired outcome.",
  },
  {
    number: "02",
    title: "Pre-Production",
    desc: "Scripting, casting, location scouting, and storyboarding. Every frame is planned meticulously.",
  },
  {
    number: "03",
    title: "Production",
    desc: "Cinema cameras, professional lighting, and a crew that knows how to capture the exact emotion needed.",
  },
  {
    number: "04",
    title: "Post & Delivery",
    desc: "Color grading, sound design, and pacing. We deliver assets formatted perfectly for every platform you need.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-[#0A0A0A] text-white">
      <div className="max-w-[1400px] mx-auto">
        <BlurFade delay={0.1} inView>
          <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-[#737373] mb-12 block">
            HOW WE WORK
          </span>
          <h2 className="display-text mb-24 max-w-4xl text-white">
            The Method.
          </h2>
        </BlurFade>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-24">
          {steps.map((step, idx) => (
            <BlurFade key={step.number} delay={0.2 + idx * 0.1} inView className="relative">
              <span className="font-serif italic text-6xl md:text-8xl text-[#333333] absolute -top-10 -left-6 z-0 select-none">
                {step.number}
              </span>
              <div className="relative z-10 pt-4 border-t border-[#333333]">
                <h3 className="font-sans text-2xl md:text-3xl font-bold mb-6">
                  {step.title}
                </h3>
                <p className="font-sans text-[#a3a3a3] text-lg leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
