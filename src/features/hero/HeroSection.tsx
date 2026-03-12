"use client";

import { BackgroundBeams } from "@/components/aceternity-ui/background-beams";
import { TextGenerateEffect } from "@/components/aceternity-ui/text-generate-effect";
import Image from "next/image";
import vyroLogo from "../../../public/VYRO_logo_white.png";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden pt-20">
            <BackgroundBeams />
            <div className="z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="mb-8 md:mb-12 relative w-[280px] h-[105px] sm:w-[400px] sm:h-[150px] md:w-[800px] md:h-[300px]"
                >
                    <Image
                        src={vyroLogo}
                        alt="VYRO Logo"
                        fill
                        className="object-contain"
                        priority
                        unoptimized
                    />
                </motion.div>
                <div className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-3 md:px-4 py-1.5 text-xs md:text-sm font-medium tracking-wide text-zinc-300 backdrop-blur-md">
                    VYRO: Beyond Media. Beyond Boundaries.
                </div>
                <TextGenerateEffect className="max-w-4xl" words="THE FUTURE OF DIGITAL DOMINANCE IS" suffix="LOADING..." />
                <p className="mt-8 text-base md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
                    Pardon our digital dust. The complete VYRO digital experience is currently under construction, but our studio is fully operational. We are a next-generation brand agency specializing in high-end video, AI, and automation.
                </p>
            </div>
        </section>
    );
}
