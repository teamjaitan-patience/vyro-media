"use client";

import { BlurFade } from "@/components/magic-ui/blur-fade";
import { useRef } from "react";
import { MediaCard } from "@/features/services/ServiceSlider";
import { ServiceMedia } from "@/features/services/servicesData";

const MIXED_WORK_MEDIA: ServiceMedia[] = [
  // First three requested videos (YouTube long-form)
  { id: "n9wASYpOJ30", type: "youtube", title: "Nishu & Mahi Episode", url: "https://youtu.be/n9wASYpOJ30" },
  { id: "1wP8ZYSfdEk", type: "youtube", title: "Podcast Episode 1", url: "https://youtu.be/1wP8ZYSfdEk" },
  { id: "dKXv8B1h5c8", type: "youtube", title: "Podcast Episode 2", url: "https://youtu.be/dKXv8B1h5c8" },
  
  // Followed by the next batch of requested videos and shorts
  { id: "OzMbkIL9aLY", type: "youtube", title: "Video Feature", url: "https://youtu.be/OzMbkIL9aLY" },
  { id: "-skZr31sJGg", type: "youtube-short", title: "Short Form Content 1", url: "https://youtube.com/shorts/-skZr31sJGg" },
  { id: "3Hw1NnaQzXM", type: "youtube-short", title: "Short Form Content 2", url: "https://youtube.com/shorts/3Hw1NnaQzXM" },

  // Rest of the mixed work (websites, designs, etc.)
  { id: "pratham", type: "website", title: "Pratham Kochhar", url: "https://www.prathamkochhar.com/", thumbnail: "/pratham.png" },
  { id: "thumb1", type: "image", title: "Design", thumbnail: "/thumbnails/5tGk7ceu0hk2GEUF7D54qQ8lE.avif" },
  { id: "5SAv9-umwbk", type: "youtube", title: "Chaipaani", url: "https://youtu.be/5SAv9-umwbk" },
  { id: "CzYAICdI5Ln", type: "instagram", title: "Instagram Reel", url: "https://www.instagram.com/p/CzYAICdI5Ln/", thumbnail: "/thumbnails/instagram/CzYAICdI5Ln.jpg" },
  { id: "exotica", type: "website", title: "Exotica Productions", url: "https://www.exoticaproductions.com/", thumbnail: "/exotica.png" },
  { id: "thumb12", type: "image", title: "Design", thumbnail: "/thumbnails/Rp3FQ6CNPaLqDjPvi41XGWpza0.avif" },
  { id: "thumb15", type: "image", title: "Design", thumbnail: "/thumbnails/g1z2XByat4LLK2EQrvvH6C7DQY.avif" },
];

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" className="section-padding bg-white overflow-hidden relative z-0">
      <div className="max-w-[1400px] mx-auto text-center relative z-20">
        <BlurFade delay={0.1} inView>
          <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-[#737373] mb-8 block">
            SELECTED WORK
          </span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-[6rem] text-[#0A0A0A] leading-[0.9] mb-12 max-w-5xl mx-auto">
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
            className="flex items-center gap-10 md:gap-20 overflow-x-auto snap-x snap-mandatory px-[7.5vw] md:px-[calc(50vw-250px)] lg:px-[calc(50vw-300px)] py-10 relative z-20 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {MIXED_WORK_MEDIA.map((media, idx) => (
              <MediaCard key={`${media.id}-${idx}`} media={media} index={idx} total={MIXED_WORK_MEDIA.length} containerRef={containerRef} />
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
