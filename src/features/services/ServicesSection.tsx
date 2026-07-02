"use client";

import { BlurFade } from "@/components/magic-ui/blur-fade";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES_DATA, ServiceCategory } from "./servicesData";
import { ServiceSlider } from "./ServiceSlider";

export function ServicesSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  const activeCategory = SERVICES_DATA.find(s => s.id === activeCategoryId) || null;

  const handleCategoryToggle = (category: ServiceCategory) => {
    if (activeCategoryId === category.id) {
      setActiveCategoryId(null);
      if (window.location.pathname !== "/") {
        window.history.replaceState(null, "", "/");
      }
    } else {
      setActiveCategoryId(category.id);
      const slugPath = `/${encodeURIComponent(category.slug)}`;
      if (window.location.pathname !== slugPath) {
        window.history.replaceState(null, "", slugPath);
      }
    }
  };

  // On mount, check if there's a path in the URL to open specific category
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = decodeURIComponent(window.location.pathname.replace('/', ''));
      if (path) {
        const found = SERVICES_DATA.find(s => s.slug === path);
        if (found) {
          setActiveCategoryId(found.id);
          // Scroll to services section
          const el = document.getElementById("services");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    }
  }, []);

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative">
        <BlurFade delay={0.1} inView>
          <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-[#737373] mb-12 block px-6 md:px-0">
            CAPABILITIES
          </span>
          <h2 className="display-text mb-20 max-w-4xl px-6 md:px-0">
            We build visual infrastructure.
          </h2>
        </BlurFade>

        {/* Vertical Accordion Layout */}
        <div className="flex flex-col relative w-full border-t border-[#e5e5e5]">
          {SERVICES_DATA.map((service, idx) => {
            const isActive = activeCategoryId === service.id;
            
            return (
              <BlurFade key={service.id} delay={0.2 + idx * 0.1} inView>
                <div 
                  className={`group py-8 md:py-12 flex flex-col transition-colors cursor-pointer border-b border-[#e5e5e5] ${isActive ? 'bg-[#f4f4f5]/30' : 'hover:bg-[#f4f4f5]/30'}`}
                  onClick={() => handleCategoryToggle(service)}
                >
                  <div className="flex items-center justify-between gap-4 px-6 lg:px-12 w-full">
                    <div className="flex flex-col md:flex-row md:items-start md:items-center gap-2 md:gap-12 flex-1">
                      <span className={`font-sans font-bold text-lg md:text-xl transition-colors ${isActive ? 'text-[#0A0A0A]' : 'text-[#a3a3a3] group-hover:text-[#0A0A0A]'}`}>
                        {service.id}
                      </span>
                      <h3 className={`font-serif text-3xl md:text-4xl lg:text-5xl transition-colors ${isActive ? 'text-[#0A0A0A]' : 'text-[#737373] group-hover:text-[#0A0A0A]'}`}>
                        {service.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`hidden sm:inline-block font-sans text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]' 
                          : 'bg-transparent text-[#737373] border-[#e5e5e5] group-hover:bg-[#0A0A0A]/5 group-hover:border-[#0A0A0A] group-hover:text-[#0A0A0A]'
                      }`}>
                        {isActive ? "Hide Work" : "View Work"}
                      </span>
                      <motion.div
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                          isActive 
                            ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]' 
                            : 'bg-transparent text-[#737373] border-[#e5e5e5] group-hover:bg-[#0A0A0A]/5 group-hover:border-[#0A0A0A] group-hover:text-[#0A0A0A]'
                        }`}
                      >
                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans font-medium text-base md:text-lg text-[#737373] max-w-2xl px-6 lg:px-12 lg:pl-[calc(3rem+30px)] mt-6">
                          {service.desc}
                        </p>

                        {/* Full Width Slider Inline */}
                        <div className="mt-8 pb-4 w-[100vw] -ml-[50vw] left-1/2 relative">
                          <ServiceSlider category={service} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
