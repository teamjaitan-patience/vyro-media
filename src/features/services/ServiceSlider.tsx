"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ServiceCategory, ServiceMedia } from "./servicesData";
import { useRef } from "react";
import Image from "next/image";

export function MediaCard({ media, index, total, containerRef }: { media: ServiceMedia, index: number, total: number, containerRef: React.RefObject<HTMLDivElement | null> }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollXProgress } = useScroll({
    container: containerRef,
    target: cardRef,
    axis: "x",
    offset: ["start end", "end start"]
  });

  // Rotate between 15deg to 0deg to -15deg
  const rotateZ = useTransform(scrollXProgress, [0, 0.5, 1], [10, 0, -10]);
  const scale = useTransform(scrollXProgress, [0, 0.5, 1], [0.85, 1, 0.85]);
  const opacity = useTransform(scrollXProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const zIndex = useTransform(scrollXProgress, [0, 0.5, 1], [10, 50, 10]);
  const dragBadgeOpacity = useTransform(scrollXProgress, [0, 0.4, 0.5, 0.6, 1], [0, 0, 1, 0, 0]);

  // Determine the dynamic aspect ratio based on media type
  let aspectClass = "aspect-[4/5] md:aspect-[4/5]"; // default for images
  let widthClass = "w-[85vw] md:w-[400px] lg:w-[450px]";
  
  if (media.type === 'youtube') {
    aspectClass = "aspect-video";
    widthClass = "w-[85vw] md:w-[600px] lg:w-[800px]";
  } else if (media.type === 'youtube-short' || media.type === 'instagram') {
    aspectClass = "aspect-[9/16]";
    widthClass = "w-[75vw] md:w-[350px] lg:w-[400px]";
  }

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateZ, scale, opacity, zIndex }}
      className={`relative shrink-0 ${widthClass} ${aspectClass} snap-center group`}
    >
      <div className="absolute inset-0 bg-[#0A0A0A] rounded-[2rem] overflow-hidden shadow-2xl border border-[#262626]">
        {media.type === "youtube" || media.type === "youtube-short" ? (
          <>
            <Image
              src={`https://img.youtube.com/vi/${media.id}/maxresdefault.jpg`}
              alt={media.title}
              fill
              className="object-cover opacity-80 pointer-events-none transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = `https://img.youtube.com/vi/${media.id}/hqdefault.jpg`;
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
               <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center pl-1 border border-white/30">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                     <path d="M5 3L19 12L5 21V3Z" />
                  </svg>
               </div>
            </div>
            {media.url && (
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-20">
                <a 
                  href={media.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-[#0A0A0A] px-6 py-3 rounded-full font-sans font-bold text-sm tracking-widest uppercase hover:bg-[#f4f4f5] transition-colors pointer-events-auto flex items-center gap-2 hover:scale-105"
                >
                  Watch Video <span className="text-lg leading-none">↗</span>
                </a>
              </div>
            )}
          </>
        ) : (
          <>
            {media.thumbnail ? (
              <Image
                src={media.thumbnail}
                alt={media.title}
                fill
                quality={100}
                className={`transition-transform duration-700 group-hover:scale-105 pointer-events-none ${media.type === 'website' ? 'object-cover object-top' : 'object-contain'}`}
              />
            ) : media.type === 'instagram' ? (
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#833AB4] flex items-center justify-center opacity-90 transition-transform duration-700 group-hover:scale-105 pointer-events-none">
                <div className="bg-black/20 backdrop-blur-sm p-6 rounded-3xl">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </div>
            ) : null}
            {media.url && (
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-20">
                <a 
                  href={media.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-[#0A0A0A] px-6 py-3 rounded-full font-sans font-bold text-sm tracking-widest uppercase hover:bg-[#f4f4f5] transition-colors pointer-events-auto flex items-center gap-2 hover:scale-105"
                >
                  View Work <span className="text-lg leading-none">↗</span>
                </a>
              </div>
            )}
          </>
        )}
      </div>

      {/* Floating Swipe Badge - Right */}
      {index < total - 1 && (
        <motion.div
          style={{ opacity: dragBadgeOpacity }}
          className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 px-3 py-1.5 md:px-5 md:py-2.5 bg-white text-[#0A0A0A] rounded-full flex items-center gap-1 md:gap-2 font-sans font-bold text-[9px] md:text-[10px] tracking-widest uppercase shadow-2xl pointer-events-none z-50 whitespace-nowrap"
        >
          <span>Swipe</span>
          <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </motion.div>
      )}

      {/* Floating Swipe Badge - Left */}
      {index > 0 && (
        <motion.div
          style={{ opacity: dragBadgeOpacity }}
          className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 px-3 py-1.5 md:px-5 md:py-2.5 bg-white text-[#0A0A0A] rounded-full flex items-center gap-1 md:gap-2 font-sans font-bold text-[9px] md:text-[10px] tracking-widest uppercase shadow-2xl pointer-events-none z-50 whitespace-nowrap"
        >
          <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"/>
            <path d="m12 19-7-7 7-7"/>
          </svg>
          <span>Swipe</span>
        </motion.div>
      )}
    </motion.div>
  );
}

export function ServiceSlider({ category }: { category: ServiceCategory }) {
  const containerRef = useRef<HTMLDivElement>(null);

  if (!category.media.length) return null;

  return (
    <div className="relative w-full max-w-[100vw] py-10 z-10 overflow-visible">
      {/* Scrolling Container */}
      <div 
        ref={containerRef}
        className="flex items-center gap-10 md:gap-20 overflow-x-auto snap-x snap-mandatory px-[7.5vw] md:px-[calc(50vw-250px)] lg:px-[calc(50vw-300px)] py-10 relative z-20 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {category.media.map((media, idx) => (
          <MediaCard key={`${media.id}-${idx}`} media={media} index={idx} total={category.media.length} containerRef={containerRef} />
        ))}
      </div>
    </div>
  );
}
