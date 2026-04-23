"use client";

import { BlurFade } from "@/components/magic-ui/blur-fade";
import Image from "next/image";
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

export function Footer() {
  return (
    <footer className="bg-white text-[#0A0A0A] pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 relative z-10">

        {/* Left Side - Brand & Copyright */}
        <BlurFade delay={0.1} inView>
          <div className="flex flex-col gap-6 max-w-sm">
            <a href="/" className="flex items-center">
              <Image
                src="/VYRO_logo.png"
                alt="VYRO Media"
                width={300}
                height={100}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </a>
            <p className="font-sans text-[#737373] text-sm leading-relaxed">
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
              <h4 className="font-sans font-bold text-sm text-[#0A0A0A] mb-2">Pages</h4>
              <a href="/#work" className="font-sans text-sm text-[#737373] hover:text-[#0A0A0A] transition-colors">Work</a>
              <a href="/#services" className="font-sans text-sm text-[#737373] hover:text-[#0A0A0A] transition-colors">Services</a>
              <a href="/#about" className="font-sans text-sm text-[#737373] hover:text-[#0A0A0A] transition-colors">About</a>
              <a href="/#contact" className="font-sans text-sm text-[#737373] hover:text-[#0A0A0A] transition-colors">Contact</a>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <h4 className="font-sans font-bold text-sm text-[#0A0A0A] mb-2">Socials</h4>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="font-sans text-sm text-[#737373] hover:text-[#0A0A0A] transition-colors">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-sans text-sm text-[#737373] hover:text-[#0A0A0A] transition-colors">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="font-sans text-sm text-[#737373] hover:text-[#0A0A0A] transition-colors">Twitter</a>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4">
              <h4 className="font-sans font-bold text-sm text-[#0A0A0A] mb-2">Legal</h4>
              <a href="/privacy-policy" className="font-sans text-sm text-[#737373] hover:text-[#0A0A0A] transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="font-sans text-sm text-[#737373] hover:text-[#0A0A0A] transition-colors">Terms of Service</a>
              <a href="/cookie-policy" className="font-sans text-sm text-[#737373] hover:text-[#0A0A0A] transition-colors">Cookie Policy</a>
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-4">
              <h4 className="font-sans font-bold text-sm text-[#0A0A0A] mb-2">Connect</h4>
              <a href="mailto:vyromedia.in@gmail.com" className="font-sans text-sm text-[#737373] hover:text-[#0A0A0A] transition-colors">Email Us</a>
              <a href="/#contact" className="font-sans text-sm text-[#737373] hover:text-[#0A0A0A] transition-colors">Book a Call</a>
            </div>
          </div>
        </BlurFade>
      </div>

      {/* Massive Watermark Text */}
      <BlurFade delay={0.4} inView className="w-full flex justify-center mt-20 md:mt-32 relative z-0 pointer-events-none select-none">
        <span className="font-sans font-black tracking-tighter text-[24vw] leading-[0.75] text-[#f4f4f5] uppercase">
          VYRO
        </span>
      </BlurFade>
    </footer>
  );
}
