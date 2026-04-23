"use client";

import { Marquee } from "@/components/magic-ui/marquee";

const stats = [
  "Built for Founders & Creators",
  "Story-First Always",
  "Cinematic at Every Budget",
  "5+ Years in Production",
  "Delhi to Bangalore & Back",
  "AI-Powered Workflows",
  "Pre to Post. All Under One Roof",
];

export function StatsTicker() {
  return (
    <div className="w-full bg-[#f4f4f5] border-y border-[#e5e5e5] py-4 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f4f4f5] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f4f4f5] to-transparent z-10"></div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-8 mx-4">
            <span className="font-sans text-sm font-semibold tracking-widest uppercase text-[#0A0A0A]">
              {stat}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A]/20" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
