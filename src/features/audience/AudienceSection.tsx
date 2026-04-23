"use client";

import { BlurFade } from "@/components/magic-ui/blur-fade";

const audiences = [
  {
    title: "Founders & CEOs",
    body: "You're building in public. Your brand is your authority. Let's make it cinematic.",
    tags: ["Brand Films", "Podcast Setup", "Founder Website"],
  },
  {
    title: "Content Creators",
    body: "Your content should convert. Your aesthetic should evolve. Your production quality should finally match your ambition.",
    tags: ["Short-Form Content", "Reels", "Repurposing"],
  },
  {
    title: "Startups",
    body: "You don't have enterprise budgets. You do have enterprise vision. We build for that gap.",
    tags: ["Landing Pages", "Brand Identity", "Content Strategy"],
  },
  {
    title: "Consultants",
    body: "You are the product. Your video presence, your website, your content, all of it is the pitch.",
    tags: ["Personal Brand", "Speaking Reels", "Portfolio Site"],
  },
];

export function AudienceSection() {
  return (
    <section id="audience" className="section-padding bg-white">
      <div className="max-w-[1400px] mx-auto">
        <BlurFade delay={0.1} inView>
          <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-[#737373] mb-12 block">
            OUR PEOPLE
          </span>
          <h2 className="display-text mb-20 max-w-4xl">
            We work with people who are becoming something.
          </h2>
        </BlurFade>

        <div className="grid md:grid-cols-2 gap-px bg-[#e5e5e5] border border-[#e5e5e5]">
          {audiences.map((item, idx) => (
            <BlurFade key={idx} delay={0.2 + idx * 0.1} inView className="bg-white p-12 lg:p-16 flex flex-col group hover:bg-[#f4f4f5] transition-colors duration-500">
              <h3 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-[#0A0A0A] mb-6">
                {item.title}
              </h3>
              <p className="font-sans text-[#737373] text-lg lg:text-xl leading-relaxed max-w-md mb-12 flex-1">
                {item.body}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-xs font-semibold tracking-wider uppercase text-[#0A0A0A] border border-[#e5e5e5] rounded-full px-4 py-2 group-hover:border-[#0A0A0A]/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
