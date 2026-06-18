"use client";

import React, { useState } from "react";
import { Navbar } from "@/features/navbar/Navbar";
import { Footer } from "@/features/footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./short-form.module.css";

interface VideoItem {
  id: string;
  type: "youtube-short" | "instagram" | "youtube";
  layout: "left" | "right" | "center" | "stagger-left" | "stagger-right";
}

const SHORT_FORM_WORK: VideoItem[] = [
  { id: "4aabs7ljJDg", type: "youtube-short", layout: "left" },
  { id: "DZsFlbkzieb", type: "instagram", layout: "stagger-left" },
  { id: "DY2Eyh3JOJ0", type: "instagram", layout: "stagger-right" },
  { id: "9DVzf7HZVBI", type: "youtube-short", layout: "right" },
  { id: "DYoUNfJRd48", type: "instagram", layout: "center" },
  { id: "LAYc_VoCZMA", type: "youtube-short", layout: "left" },
  { id: "DYR4Z_RycWv", type: "instagram", layout: "stagger-left" },
  { id: "DYB6rzdy5Zm", type: "instagram", layout: "stagger-right" },
  { id: "zp_o1hkz-yM", type: "youtube-short", layout: "right" },
  { id: "OzMbkIL9aLY", type: "youtube", layout: "center" },
  { id: "s1IuJVk3Pqo", type: "youtube-short", layout: "left" },
  { id: "DYq3ceET_H2", type: "instagram", layout: "stagger-left" },
  { id: "DH5uY1OTFEL", type: "instagram", layout: "stagger-right" },
  { id: "M9L74ktwL7I", type: "youtube-short", layout: "right" },
  { id: "CzGpKqAqG-k", type: "instagram", layout: "center" },
  { id: "J5NegmXcM-U", type: "youtube-short", layout: "left" },
  { id: "C0BPK3DSxXY", type: "instagram", layout: "stagger-left" },
  { id: "C0tWBmAC8LD", type: "instagram", layout: "stagger-right" },
  { id: "8Dpx9x81VNc", type: "youtube-short", layout: "right" },
  { id: "C0nElDBPVpq", type: "instagram", layout: "center" },
  { id: "OWri1AWXLyc", type: "youtube-short", layout: "left" },
  { id: "C19Rolri7ZL", type: "instagram", layout: "stagger-left" },
  { id: "CxxuW50SKxd", type: "instagram", layout: "stagger-right" },
  { id: "DDjSWS9phxL", type: "instagram", layout: "right" },
  { id: "Cq54AtDsARD", type: "instagram", layout: "center" },
  { id: "wmDim74jzqw", type: "youtube", layout: "center" }
];

function VideoPlayer({ item }: { item: VideoItem }) {
  if (item.type === "youtube" || item.type === "youtube-short") {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${item.id}?autoplay=0&rel=0&modestbranding=1`}
        title={`VYRO Video ${item.id}`}
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
        title={`VYRO Instagram ${item.id}`}
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
                  className="w-full flex justify-start"
                >
                  <div className={styles.videoWrapper}>
                    <VideoPlayer item={item} />
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
                  className="w-full flex justify-end"
                >
                  <div className={styles.videoWrapper}>
                    <VideoPlayer item={item} />
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
                  className="w-full flex justify-center"
                >
                  {item.type === "youtube" ? (
                    <div className={styles.widescreenWrapper}>
                      <VideoPlayer item={item} />
                    </div>
                  ) : (
                    <div className={styles.videoWrapper}>
                      <VideoPlayer item={item} />
                    </div>
                  )}
                </motion.div>
              );
            }

            // Staggered rows (Layout 4: Staggered double column blocks)
            // To render staggered columns properly, we look for two elements: stagger-left and stagger-right.
            // If it's a stagger-left, we render a combined row containing it and its next sibling if it is a stagger-right.
            if (item.layout === "stagger-left") {
              const nextItem = filteredWork[idx + 1];

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
                  </div>

                  {/* Right Column - Staggered offset */}
                  {nextItem && nextItem.layout === "stagger-right" && (
                    <div className={`${styles.staggerCol} ${styles.staggerColRight}`}>
                      <div className={styles.videoWrapper}>
                        <VideoPlayer item={nextItem} />
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
                  className="w-full flex justify-end"
                >
                  <div className={styles.videoWrapper}>
                    <VideoPlayer item={item} />
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
