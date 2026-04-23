"use client";

import { BlurFade } from "@/components/magic-ui/blur-fade";
import Image from "next/image";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { TeamDrawer } from "./TeamDrawer";

export function FounderSection() {
  const [isTeamDrawerOpen, setIsTeamDrawerOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isImageInView = useInView(containerRef, {
    amount: 0.2,
    once: false,
  });
  return (
    <section id="about" className="section-padding bg-[#f4f4f5]">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <BlurFade delay={0.1} inView>
          <div
            ref={containerRef}
            className="aspect-[4/5] bg-[#e5e5e5] rounded-3xl overflow-hidden relative"
            style={{
              filter: isImageInView ? 'grayscale(0%)' : 'grayscale(100%)',
              transition: 'filter 0.8s ease-in-out'
            }}
          >
            <div className="absolute inset-0 flex flex-col gap-3 p-3 bg-[#111]">
              {/* Top Row: 2 Avatars */}
              <div className="flex gap-3 h-[33%]">
                <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/10">
                  <Image src="/jaitan_avatar.png" alt="Jaitan Puri" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/10">
                  <Image src="/gorika_v3.png" alt="Gorika Tyagi" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

              {/* Middle Row: 3 Avatars */}
              <div className="flex gap-3 h-[34%]">
                <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/10">
                  <Image src="/pratham_v2.png" alt="Pratham Kochhar" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/10">
                  <Image src="/shivam_avatar.png" alt="Shivam Singhal" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/10">
                  <Image src="/anupam_avatar.png" alt="Anupam Shrivastav" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

              {/* Bottom Row: 2 Avatars */}
              <div className="flex gap-3 h-[33%]">
                <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/10">
                  <Image src="/yohan_avatar.png" alt="Yohan Rastogi" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/10">
                  <Image src="/dev_v4_avatar.png" alt="Dev Rajput" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </BlurFade>

        <div className="flex flex-col justify-center">
          <BlurFade delay={0.2} inView>
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-[#737373] mb-8 block">
              THE PEOPLE BEHIND THE FRAME
            </span>
            <h2 className="font-serif italic text-5xl md:text-7xl text-[#0A0A0A] mb-12">
              Built by Obsessives.
            </h2>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="font-sans text-xl md:text-2xl text-[#737373] leading-relaxed mb-8">
              Every frame you see. Every edit that lands. Every strategy that converts. There are real people behind all of it and none of them are average.
            </p>
            <p className="font-sans text-lg text-[#a3a3a3] leading-relaxed mb-12">
              We did not hire for resumes. We hired for obsession. The VYRO crew is a handpicked group of cinematographers, editors, strategists, photographers, and visual artists who share one belief: that your story deserves to be told at the highest level it possibly can be. No shortcuts. No templates. No one phoning it in.
            </p>

            <button
              onClick={() => setIsTeamDrawerOpen(true)}
              className="inline-flex items-center font-sans font-bold text-sm tracking-widest uppercase border-b-2 border-[#0A0A0A] pb-2 hover:opacity-50 transition-opacity"
            >
              MEET THE CREW
            </button>
          </BlurFade>
        </div>
      </div>

      <TeamDrawer
        isOpen={isTeamDrawerOpen}
        onClose={() => setIsTeamDrawerOpen(false)}
      />
    </section>
  );
}
