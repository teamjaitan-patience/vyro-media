"use client";

import { BlurFade } from "@/components/magic-ui/blur-fade";
import Image from "next/image";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/aceternity-ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Jaitan Puri",
    designation: "Founder & Creative Director",
    image: "/jaitan_avatar.png",
  },
  {
    id: 2,
    name: "Pratham Kochhar",
    designation: "Head of Creator Strategy",
    image: "/pratham_v2.png",
  },
  {
    id: 3,
    name: "Gorika Tyagi",
    designation: "Creative Consultant",
    image: "/gorika_v3.png",
  },
  {
    id: 4,
    name: "Shivam Singhal",
    designation: "Lead Cinematographer",
    image: "/shivam_avatar.png",
  },
  {
    id: 5,
    name: "Anupam Shrivastav",
    designation: "Senior Video Editor",
    image: "/anupam_avatar.png",
  },
  {
    id: 6,
    name: "Yohan Rastogi",
    designation: "Photographer",
    image: "/yohan_avatar.png",
  },
  {
    id: 7,
    name: "Dev Rajput",
    designation: "VFX Artist",
    image: "/dev_v4_avatar.png",
  },
];

export function Footer({ theme = "light" }: { theme?: "light" | "dark" }) {
  return (
    <footer className={`pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12 relative overflow-hidden transition-colors duration-500 ${
      theme === "dark" ? "bg-[#0A0A0A] text-white border-t border-zinc-900" : "bg-white text-[#0A0A0A]"
    }`}>
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 relative z-10">

        {/* Left Side - Brand & Copyright */}
        <BlurFade delay={0.1} inView>
          <div className="flex flex-col gap-6 max-w-sm">
            <Link href="/" className="flex items-center">
              <Image
                src={theme === "dark" ? "/VYRO_logo_white.png" : "/VYRO_logo.png"}
                alt="VYRO Media"
                width={300}
                height={100}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <p className={`font-sans text-sm leading-relaxed ${theme === "dark" ? "text-zinc-500" : "text-[#737373]"}`}>
              © copyright VYRO Media {new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="flex flex-row items-center mt-4 pl-4">
              <AnimatedTooltip items={people} />
            </div>
          </div>
        </BlurFade>

        {/* Right Side - Links Grid */}
        <BlurFade delay={0.2} inView className="w-full lg:w-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 lg:gap-20">
            {/* Pages */}
            <div className="flex flex-col gap-4">
              <h4 className={`font-sans font-bold text-sm mb-2 ${theme === "dark" ? "text-white" : "text-[#0A0A0A]"}`}>Pages</h4>
              <Link href="/#work" className={`font-sans text-sm transition-colors ${theme === "dark" ? "text-zinc-400 hover:text-white" : "text-[#737373] hover:text-[#0A0A0A]"}`}>Work</Link>
              <Link href="/#services" className={`font-sans text-sm transition-colors ${theme === "dark" ? "text-zinc-400 hover:text-white" : "text-[#737373] hover:text-[#0A0A0A]"}`}>Services</Link>
              <Link href="/#about" className={`font-sans text-sm transition-colors ${theme === "dark" ? "text-zinc-400 hover:text-white" : "text-[#737373] hover:text-[#0A0A0A]"}`}>About</Link>
              <Link href="/#contact" className={`font-sans text-sm transition-colors ${theme === "dark" ? "text-zinc-400 hover:text-white" : "text-[#737373] hover:text-[#0A0A0A]"}`}>Contact</Link>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <h4 className={`font-sans font-bold text-sm mb-2 ${theme === "dark" ? "text-white" : "text-[#0A0A0A]"}`}>Socials</h4>
              <a href="https://www.instagram.com/vyromedia.in?igsh=ZHE2amh3MGJ0NmN6&utm_source=qr" target="_blank" rel="noreferrer" className={`font-sans text-sm transition-colors ${theme === "dark" ? "text-zinc-400 hover:text-white" : "text-[#737373] hover:text-[#0A0A0A]"}`}>Instagram</a>
              <a href="https://www.linkedin.com/company/vyromedia" target="_blank" rel="noreferrer" className={`font-sans text-sm transition-colors ${theme === "dark" ? "text-zinc-400 hover:text-white" : "text-[#737373] hover:text-[#0A0A0A]"}`}>LinkedIn</a>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4">
              <h4 className={`font-sans font-bold text-sm mb-2 ${theme === "dark" ? "text-white" : "text-[#0A0A0A]"}`}>Legal</h4>
              <Link href="/privacy-policy" className={`font-sans text-sm transition-colors ${theme === "dark" ? "text-zinc-400 hover:text-white" : "text-[#737373] hover:text-[#0A0A0A]"}`}>Privacy Policy</Link>
              <Link href="/terms-of-service" className={`font-sans text-sm transition-colors ${theme === "dark" ? "text-zinc-400 hover:text-white" : "text-[#737373] hover:text-[#0A0A0A]"}`}>Terms of Service</Link>
              <Link href="/cookie-policy" className={`font-sans text-sm transition-colors ${theme === "dark" ? "text-zinc-400 hover:text-white" : "text-[#737373] hover:text-[#0A0A0A]"}`}>Cookie Policy</Link>
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-4">
              <h4 className={`font-sans font-bold text-sm mb-2 ${theme === "dark" ? "text-white" : "text-[#0A0A0A]"}`}>Connect</h4>
              <a href="mailto:vyromedia.in@gmail.com" className={`font-sans text-sm transition-colors ${theme === "dark" ? "text-zinc-400 hover:text-white" : "text-[#737373] hover:text-[#0A0A0A]"}`}>Email Us</a>
              <button 
                data-cal-link="jaitanpuri/vyromedia"
                data-cal-namespace="vyromedia"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className={`font-sans text-left text-sm transition-colors cursor-pointer ${theme === "dark" ? "text-zinc-400 hover:text-white" : "text-[#737373] hover:text-[#0A0A0A]"}`}
              >
                Book a Call
              </button>
            </div>
          </div>
        </BlurFade>
      </div>

      {/* Massive Watermark Text */}
      <BlurFade delay={0.4} inView className="w-full flex justify-center mt-20 md:mt-32 relative z-0 pointer-events-none select-none">
        <span className={`font-sans font-black tracking-tighter text-[24vw] leading-[0.75] uppercase ${theme === "dark" ? "text-zinc-950/40" : "text-[#f4f4f5]"}`}>
          VYRO
        </span>
      </BlurFade>
    </footer>
  );
}
