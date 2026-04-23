"use client";

import { BlurFade } from "@/components/magic-ui/blur-fade";

const services = [
  {
    id: "01",
    title: "Brand Films & Documentaries",
    desc: "Long-form storytelling that builds deep trust and unshakeable authority. Think Netflix, but for your business.",
  },
  {
    id: "02",
    title: "High-End Short Form",
    desc: "Reels and Shorts shouldn't look cheap. We produce cinematic vertical content that algorithms love and audiences respect.",
  },
  {
    id: "03",
    title: "Websites & Landing Pages",
    desc: "Your digital storefront. We design and build high-performance, beautiful websites optimized for conversion and speed.",
  },
  {
    id: "04",
    title: "Podcast Production",
    desc: "From studio setup to post-production mixing and multi-cam editing, we make your show look and sound world-class.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-[1400px] mx-auto">
        <BlurFade delay={0.1} inView>
          <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-[#737373] mb-12 block">
            CAPABILITIES
          </span>
          <h2 className="display-text mb-20 max-w-4xl">
            We build visual infrastructure.
          </h2>
        </BlurFade>

        <div className="grid grid-cols-1 divide-y divide-[#e5e5e5] border-t border-[#e5e5e5]">
          {services.map((service, idx) => (
            <BlurFade key={service.id} delay={0.2 + idx * 0.1} inView className="group py-12 md:py-20 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20 transition-colors hover:bg-[#f4f4f5] px-6 -mx-6 md:px-12 md:-mx-12 cursor-pointer">
              <span className="font-sans font-bold text-lg md:text-2xl text-[#a3a3a3] group-hover:text-[#0A0A0A] transition-colors">
                {service.id}
              </span>
              <h3 className="font-serif italic text-4xl md:text-5xl lg:text-7xl text-[#0A0A0A] flex-1">
                {service.title}
              </h3>
              <p className="font-sans font-medium text-lg md:text-xl text-[#737373] max-w-md">
                {service.desc}
              </p>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
