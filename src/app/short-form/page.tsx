"use client";

import React, { useState } from "react";
import { Navbar } from "@/features/navbar/Navbar";
import { Footer } from "@/features/footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./short-form.module.css";

interface VideoItem {
  id: string;
  type: "youtube-short" | "instagram" | "youtube";
  title: string;
  vibe: string;
  desc: string;
  layout: "left" | "right" | "center" | "stagger-left" | "stagger-right";
}

const SHORT_FORM_WORK: VideoItem[] = [
  {
    id: "4aabs7ljJDg",
    type: "youtube-short",
    title: "The Silent Obsession",
    vibe: "Cinematic Mood Piece",
    desc: "A moody, atmospheric edit focusing on intense color grading (Kodak 2383 emulation) and hyper-synchronous sound cuts designed to grab attention within the first few seconds.",
    layout: "left"
  },
  {
    id: "DZsFlbkzieb",
    type: "instagram",
    title: "Editorial Cut 01",
    vibe: "Brand Vignette",
    desc: "Fast paced, modern typography meets high contrast imagery. Engineered for social channels to position creators as ultimate authorities.",
    layout: "stagger-left"
  },
  {
    id: "DY2Eyh3JOJ0",
    type: "instagram",
    title: "Chasing Shadows",
    vibe: "Atmospheric Narrative",
    desc: "Stark black and white shadows paired with low frequency drone pads. A demonstration of heavy contrast grading and moody editorial pacing.",
    layout: "stagger-right"
  },
  {
    id: "9DVzf7HZVBI",
    type: "youtube-short",
    title: "Aesthetic Frames",
    vibe: "Visual Mood Board",
    desc: "Quick jump cuts synchronized with retro synthesis beats. Features brutalist font selections and vintage grain overlays.",
    layout: "right"
  },
  {
    id: "DYoUNfJRd48",
    type: "instagram",
    title: "Human Moments",
    vibe: "Documentary Short",
    desc: "Warm cream hues and handheld motions capturing genuine expression. Highlighting the raw, human element in premium client production.",
    layout: "center"
  },
  {
    id: "LAYc_VoCZMA",
    type: "youtube-short",
    title: "Concrete Brutalism",
    vibe: "Architectural Cut",
    desc: "Staccato pacing emphasizing geometric forms, concrete textures, and harsh natural sunlight. Sound design features deep industrial reverbs.",
    layout: "left"
  },
  {
    id: "DYR4Z_RycWv",
    type: "instagram",
    title: "The Narrative Thread",
    vibe: "Mini-documentary",
    desc: "Seamless speed-ramping transitions and layered sound effects that build suspense, keeping viewers engaged throughout the story.",
    layout: "stagger-left"
  },
  {
    id: "DYB6rzdy5Zm",
    type: "instagram",
    title: "Visual Poetry",
    vibe: "Art Film Cut",
    desc: "Warm tones combined with light leakage overlays. Heavy negative space typography and poetic scripts form the backbone of this design.",
    layout: "stagger-right"
  },
  {
    id: "zp_o1hkz-yM",
    type: "youtube-short",
    title: "Soundscapes",
    vibe: "Audio-first Edit",
    desc: "A study on Foley-focused editing. Every visual action is coupled with enhanced spatial audio cues, driving immersive viewer retention.",
    layout: "right"
  },
  {
    id: "OzMbkIL9aLY",
    type: "youtube",
    title: "Theatrical Cut (Widescreen)",
    vibe: "Theatrical Trailer",
    desc: "Our horizontal cinematic highlight. Built in 2.39:1 anamorphic format, featuring complex color scripting, multi-track audio mastering, and orchestral pacing.",
    layout: "center"
  },
  {
    id: "s1IuJVk3Pqo",
    type: "youtube-short",
    title: "The Editor's Edge",
    vibe: "Cyberpunk Vibe",
    desc: "Neon-noir color grading combined with glitch textures and digital layout designs. Highly popular with technology and creative founders.",
    layout: "left"
  },
  {
    id: "DYq3ceET_H2",
    type: "instagram",
    title: "Sound & Fury",
    vibe: "Action Montage",
    desc: "Hyper-energetic split edits accompanied by industrial sound effects and rapid zoom frames. Made to generate visual impact.",
    layout: "stagger-left"
  },
  {
    id: "DH5uY1OTFEL",
    type: "instagram",
    title: "Studio Vignettes",
    vibe: "Behind The Scenes",
    desc: "Documenting the creative struggle. Rough cuts, raw timeline overlays, and grain textures create a highly authentic community connection.",
    layout: "stagger-right"
  },
  {
    id: "M9L74ktwL7I",
    type: "youtube-short",
    title: "Main Character Energy",
    vibe: "Founder Portrait",
    desc: "Elevating personal brand aesthetics to editorial levels. Every shot is treated like a still frame from a high-budget commercial.",
    layout: "right"
  },
  {
    id: "CzGpKqAqG-k",
    type: "instagram",
    title: "The Creative Spark",
    vibe: "Graphic Overlay Cut",
    desc: "Asymmetrical multi-frame splits. Demonstrates complex masking techniques and interactive overlay layouts.",
    layout: "center"
  },
  {
    id: "J5NegmXcM-U",
    type: "youtube-short",
    title: "Midnight Run",
    vibe: "Night Cinematography",
    desc: "Low-light performance shots processed through heavy film noise filters. Features kinetic text accents in Warm Cream color.",
    layout: "left"
  },
  {
    id: "C0BPK3DSxXY",
    type: "instagram",
    title: "Atmospheric Cut",
    vibe: "Ambient Tone",
    desc: "Dreamy, hazy footage layered with subtle acoustic scores. Focuses on spatial negative space inside vertical formats.",
    layout: "stagger-left"
  },
  {
    id: "C0tWBmAC8LD",
    type: "instagram",
    title: "The Final Render",
    vibe: "Graphic Motion Art",
    desc: "Heavy use of custom frame animations, fast pacing, and vector-designed motion graphics to explain abstract creative ideas.",
    layout: "stagger-right"
  },
  {
    id: "8Dpx9x81VNc",
    type: "youtube-short",
    title: "The Modern Artisan",
    vibe: "Craft Profile",
    desc: "Slow-burn focus shots capturing details of product manufacturing. Editorial styling and high dynamic range output.",
    layout: "right"
  },
  {
    id: "C0nElDBPVpq",
    type: "instagram",
    title: "Chrono Shift",
    vibe: "Time-dilation Montage",
    desc: "Time-lapse transitions integrated with active video layers, illustrating the passage of conceptual time inside brand building.",
    layout: "center"
  },
  {
    id: "OWri1AWXLyc",
    type: "youtube-short",
    title: "A24 Inspired Story",
    vibe: "Neo-Editorial Short",
    desc: "A storytelling piece combining heavy grain textures, asymmetrical subtitles, and vintage film frame crops.",
    layout: "left"
  },
  {
    id: "C19Rolri7ZL",
    type: "instagram",
    title: "Tactile Vision",
    vibe: "ASMR Visual Edit",
    desc: "Macro close-up details paired with clean ASMR sounds. Designed to maximize organic engagement and viewer focus.",
    layout: "stagger-left"
  },
  {
    id: "CxxuW50SKxd",
    type: "instagram",
    title: "The Golden Hour",
    vibe: "Warm Sunset Cut",
    desc: "Saturated sunset grading combined with smooth camera motions. Crafted to give high-end editorial warmth to founder stories.",
    layout: "stagger-right"
  },
  {
    id: "DDjSWS9phxL",
    type: "instagram",
    title: "Raw Cuts",
    vibe: "Minimalist Edit",
    desc: "Stripped back of flashy animations. Focuses heavily on framing, screen balance, and strong narrative spoken-word content.",
    layout: "right"
  },
  {
    id: "Cq54AtDsARD",
    type: "instagram",
    title: "Echo Chamber",
    vibe: "Dynamic Split Screen",
    desc: "Three-way vertical screen splits displaying synchronous narratives. Highly complex editing technique designed to maximize visual curiosity.",
    layout: "center"
  },
  {
    id: "wmDim74jzqw",
    type: "youtube",
    title: "Editorial Vignette",
    vibe: "Visual Identity Film",
    desc: "A high-end cinematic showcase highlighting visual framing, sharp monochrome gradients, and atmospheric sound pacing.",
    layout: "center"
  }
];

function VideoPlayer({ item }: { item: VideoItem }) {
  if (item.type === "youtube" || item.type === "youtube-short") {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${item.id}?autoplay=0&rel=0&modestbranding=1`}
        title={item.title}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      ></iframe>
    );
  }
  if (item.type === "instagram") {
    return (
      <iframe
        src={`https://www.instagram.com/p/${item.id}/embed`}
        title={item.title}
        className="w-full h-full border-0"
        allowTransparency
        allow="encrypted-media"
        scrolling="no"
        frameBorder="0"
        loading="lazy"
      ></iframe>
    );
  }
  return null;
}

export default function ShortFormPage() {
  const [filter, setFilter] = useState<"all" | "shorts" | "reels">("all");

  const filteredWork = SHORT_FORM_WORK.filter((item) => {
    if (filter === "all") return true;
    if (filter === "shorts") return item.type === "youtube-short" || item.type === "youtube";
    if (filter === "reels") return item.type === "instagram";
    return true;
  });

  return (
    <main className={styles.pageContainer}>
      <Navbar theme="dark" />

      {/* Hero Header: A24 brutalist poster style */}
      <section className={styles.heroSection}>
        <div className={styles.heroMain}>
          <div className={styles.heroTitleContainer}>
            <span className={styles.heroTag}>VYRO / INFRASTRUCTURE</span>
            <h1 className={`${styles.serifHeadline} ${styles.heroTitle} ${styles.creamText}`}>
              High-End<br />Vertical Film.
            </h1>
          </div>
          
          <div className={styles.creditsGrid}>
            <div>
              <div className={styles.creditsLabel}>CREW</div>
              <div className={styles.creditsValue}>VYRO POST HOUSE</div>
            </div>
            <div>
              <div className={styles.creditsLabel}>EDIT SUITE</div>
              <div className={styles.creditsValue}>PREMIERE / AE</div>
            </div>
            <div>
              <div className={styles.creditsLabel}>AESTHETIC</div>
              <div className={styles.creditsValue}>A24 EDITORIAL</div>
            </div>
            <div>
              <div className={styles.creditsLabel}>EST. IMPACT</div>
              <div className={styles.creditsValue}>500M+ VIEWS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating post-production style Filter Switcher */}
      <div className={styles.filterContainer}>
        <div className={styles.filterPanel}>
          <button
            onClick={() => setFilter("all")}
            className={`${styles.filterBtn} ${filter === "all" ? styles.filterBtnActive : ""}`}
          >
            All Cuts
          </button>
          <button
            onClick={() => setFilter("shorts")}
            className={`${styles.filterBtn} ${filter === "shorts" ? styles.filterBtnActive : ""}`}
          >
            YouTube Shorts
          </button>
          <button
            onClick={() => setFilter("reels")}
            className={`${styles.filterBtn} ${filter === "reels" ? styles.filterBtnActive : ""}`}
          >
            Instagram Reels
          </button>
        </div>
      </div>

      {/* Custom Asymmetric layout render */}
      <section className={styles.streamContainer}>
        <AnimatePresence mode="popLayout">
          {filteredWork.map((item, idx) => {
            const formattedIdx = String(idx + 1).padStart(2, "0");
            
            // Check layouts for asymmetric structures
            if (item.layout === "left") {
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`${styles.layoutRow} ${styles.layoutLeftVideo}`}
                >
                  <div className={styles.mediaSection}>
                    <div className={styles.videoWrapper}>
                      <VideoPlayer item={item} />
                    </div>
                  </div>
                  <div className={styles.detailsSection}>
                    <div className={styles.editorialHeader}>
                      <span className={`${styles.monoText} ${styles.indexNum}`}>{formattedIdx}</span>
                      <h2 className={`${styles.serifHeadline} ${styles.workTitle} ${styles.creamText}`}>{item.title}</h2>
                    </div>
                    <div className={styles.workVibe}>{item.vibe}</div>
                    <p className={styles.workDesc}>{item.desc}</p>
                  </div>
                </motion.div>
              );
            }

            if (item.layout === "right") {
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`${styles.layoutRow} ${styles.layoutRightVideo}`}
                >
                  <div className={styles.mediaSection}>
                    <div className={styles.videoWrapper}>
                      <VideoPlayer item={item} />
                    </div>
                  </div>
                  <div className={styles.detailsSection}>
                    <div className={styles.editorialHeader}>
                      <span className={`${styles.monoText} ${styles.indexNum}`}>{formattedIdx}</span>
                      <h2 className={`${styles.serifHeadline} ${styles.workTitle} ${styles.creamText}`}>{item.title}</h2>
                    </div>
                    <div className={styles.workVibe}>{item.vibe}</div>
                    <p className={styles.workDesc}>{item.desc}</p>
                  </div>
                </motion.div>
              );
            }

            if (item.layout === "center") {
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`${styles.layoutRow} ${styles.layoutCenteredHero}`}
                >
                  <div className={styles.mediaSection}>
                    {item.type === "youtube" ? (
                      <div className={styles.widescreenWrapper}>
                        <VideoPlayer item={item} />
                      </div>
                    ) : (
                      <div className={styles.videoWrapper}>
                        <VideoPlayer item={item} />
                      </div>
                    )}
                  </div>
                  <div className={styles.detailsSection}>
                    <div className={styles.editorialHeader} style={{ justifyContent: "center" }}>
                      <span className={`${styles.monoText} ${styles.indexNum}`}>{formattedIdx}</span>
                      <h2 className={`${styles.serifHeadline} ${styles.workTitle} ${styles.creamText}`}>{item.title}</h2>
                    </div>
                    <div className={styles.workVibe}>{item.vibe}</div>
                    <p className={styles.workDesc}>{item.desc}</p>
                  </div>
                </motion.div>
              );
            }

            // Staggered rows (Layout 4: Staggered double column blocks)
            // To render staggered columns properly, we look for two elements: stagger-left and stagger-right.
            // If it's a stagger-left, we render a combined row containing it and its next sibling if it is a stagger-right.
            if (item.layout === "stagger-left") {
              const nextItem = filteredWork[idx + 1];
              const nextFormattedIdx = nextItem ? String(idx + 2).padStart(2, "0") : "";

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={styles.layoutDoubleStaggered}
                >
                  {/* Left Column */}
                  <div className={styles.staggerCol}>
                    <div className={styles.videoWrapper}>
                      <VideoPlayer item={item} />
                    </div>
                    <div className={styles.detailsSection} style={{ marginTop: "2rem" }}>
                      <div className={styles.editorialHeader}>
                        <span className={`${styles.monoText} ${styles.indexNum}`}>{formattedIdx}</span>
                        <h2 className={`${styles.serifHeadline} ${styles.workTitle} ${styles.creamText}`}>{item.title}</h2>
                      </div>
                      <div className={styles.workVibe}>{item.vibe}</div>
                      <p className={styles.workDesc}>{item.desc}</p>
                    </div>
                  </div>

                  {/* Right Column - Staggered offset */}
                  {nextItem && nextItem.layout === "stagger-right" && (
                    <div className={`${styles.staggerCol} ${styles.staggerColRight}`}>
                      <div className={styles.videoWrapper}>
                        <VideoPlayer item={nextItem} />
                      </div>
                      <div className={styles.detailsSection} style={{ marginTop: "2rem" }}>
                        <div className={styles.editorialHeader}>
                          <span className={`${styles.monoText} ${styles.indexNum}`}>{nextFormattedIdx}</span>
                          <h2 className={`${styles.serifHeadline} ${styles.workTitle} ${styles.creamText}`}>{nextItem.title}</h2>
                        </div>
                        <div className={styles.workVibe}>{nextItem.vibe}</div>
                        <p className={styles.workDesc}>{nextItem.desc}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            }

            // Sibling check: if it is a stagger-right and we already rendered it in the previous stagger-left container, skip it.
            if (item.layout === "stagger-right") {
              const prevItem = filteredWork[idx - 1];
              if (prevItem && prevItem.layout === "stagger-left") {
                return null;
              }
              // Fallback just in case stagger-right appears alone without a preceding stagger-left: render like a normal column
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`${styles.layoutRow} ${styles.layoutRightVideo}`}
                >
                  <div className={styles.mediaSection}>
                    <div className={styles.videoWrapper}>
                      <VideoPlayer item={item} />
                    </div>
                  </div>
                  <div className={styles.detailsSection}>
                    <div className={styles.editorialHeader}>
                      <span className={`${styles.monoText} ${styles.indexNum}`}>{formattedIdx}</span>
                      <h2 className={`${styles.serifHeadline} ${styles.workTitle} ${styles.creamText}`}>{item.title}</h2>
                    </div>
                    <div className={styles.workVibe}>{item.vibe}</div>
                    <p className={styles.workDesc}>{item.desc}</p>
                  </div>
                </motion.div>
              );
            }

            return null;
          })}
        </AnimatePresence>
      </section>

      {/* The bottom CTA section */}
      <section className={styles.ctaSection}>
        <h2 className={`${styles.serifHeadline} ${styles.ctaHeadline}`}>
          Let us plan<br />your shoot.
        </h2>
        <button
          data-cal-link="jaitanpuri/vyromedia"
          data-cal-namespace="vyromedia"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          className={styles.ctaBtn}
        >
          Book Creative Blueprint
        </button>

        <div className={styles.ctaCredits}>
          <div>
            <span>PRODUCED BY</span>
            <p className={styles.creamText} style={{ margin: "0.25rem 0 0 0", fontWeight: 700 }}>VYRO MEDIA CO.</p>
          </div>
          <div>
            <span>ASPECT RATIO</span>
            <p className={styles.creamText} style={{ margin: "0.25rem 0 0 0", fontWeight: 700 }}>MULTI-FORMAT</p>
          </div>
          <div>
            <span>YEAR</span>
            <p className={styles.creamText} style={{ margin: "0.25rem 0 0 0", fontWeight: 700 }}>{new Date().getFullYear()}</p>
          </div>
        </div>
      </section>

      <Footer theme="dark" />
    </main>
  );
}
