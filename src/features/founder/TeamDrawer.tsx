"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const TEAM = [
  {
    id: "jaitan",
    name: "Jaitan Puri",
    title: "Founder & Creative Director",
    bio: "He grew up on film sets, moved to Bangalore with zero coding knowledge, and came back an AI engineer. Most people pick a lane. Jaitan built a new one. Five years of production craft. Two years of machine intelligence. One very simple belief that your brand deserves to look like the opening scene of a film. VYRO is what happens when a cinematographer refuses to stop learning.",
    image: "/jaitan_avatar.png",
    socials: { instagram: "#", linkedin: "#" },
  },
  {
    id: "pratham",
    name: "Pratham Kochhar",
    title: "Head of Creator Strategy & Brand Partnerships",
    bio: "75 creators managed. 70 campaigns executed. One shoot that accidentally led to a Bollywood casting. Pratham does not just connect brands to creators — he architects the moment where the right voice meets the right audience and something actually happens. Netflix, Google, Samsung, Meta, Adidas. He has been in those rooms. Now he brings that energy to every brief that walks through VYRO's door.",
    image: "/pratham_v2.png",
    socials: { instagram: "#", linkedin: "#" },
  },
  {
    id: "gorika",
    name: "Gorika Tyagi",
    title: "Creative Consultant & On-Camera Talent",
    bio: "Gorika has a gift that cannot be taught. She walks in front of a camera and the whole frame relaxes. Fashion. Lifestyle. Beauty. Dance. She has built campaigns for mCaffeine, WOW Skin Science, Blue Heaven and a dozen more — not by following briefs, but by making them feel like her own idea. Content that stops thumbs. Presence that makes brands feel human. That is what she brings to VYRO.",
    image: "/gorika_v3.png",
    socials: { instagram: "#", linkedin: "#" },
  },
  {
    id: "shivam",
    name: "Shivam Singhal",
    title: "Lead Cinematographer",
    bio: "Six years. A career built on showing up, figuring it out, and making it beautiful regardless of what the conditions are. Weddings at 6am in December. Podcasts lit like cinema. Corporate shoots that somehow feel like stories worth watching. Shivam does not wait for the perfect moment. He creates it. Give him a brief and consider it handled.",
    image: "/shivam_avatar.png",
    socials: { instagram: "#", linkedin: "#" },
  },
  {
    id: "anupam",
    name: "Anupam Shrivastav",
    title: "Senior Video Editor",
    bio: "The best edits are the ones you never notice. You just feel something shift inside you and you do not know why. That is Anupam. He finds the heartbeat inside raw footage and builds it into something that moves people. His timeline is a crime scene of good decisions. Fast when it matters. Obsessive always. The kind of editor who makes directors look better than they deserve.",
    image: "/anupam_avatar.png",
    socials: { instagram: "#", linkedin: "#" },
  },
  {
    id: "yohan",
    name: "Yohan Rastogi",
    title: "Photographer",
    bio: "Yohan photographs the space between. The half second before the pose. The light nobody else waited for. The expression that exists for exactly one frame and then disappears forever. His work does not look like it was taken. It looks like it was found. Products, portraits, campaigns — everything he shoots feels like it was always meant to look exactly like that.",
    image: "/yohan_avatar.png",
    socials: { instagram: "#", linkedin: "#" },
  },
  {
    id: "dev",
    name: "Dev Rajput",
    title: "VFX Artist",
    bio: "Dev is the answer to the question nobody knows how to ask yet. You watch the final cut and something feels cinematic in a way that defies the budget, the location, the conditions. That is him. Working invisible. Adding depth, dimension, and the kind of visual weight that makes ordinary footage feel like a theatrical release. He does not add effects. He adds belief.",
    image: "/dev_v4_avatar.png",
    socials: { instagram: "#", linkedin: "#" },
  },
];

export function TeamDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
            className="fixed right-0 top-0 bottom-0 w-full md:w-[700px] lg:w-[900px] bg-[#0A0A0A] z-[101] overflow-y-auto shadow-2xl border-l border-white/10"
          >
            <div className="relative p-6 md:p-12 lg:p-16">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 md:top-12 md:right-12 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors text-white"
                aria-label="Close Team Drawer"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <div className="mb-16 mt-8 md:mt-0">
                <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-[#737373] mb-6 block">
                  THE PEOPLE BEHIND THE FRAME
                </span>
                <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight max-w-2xl">
                  Seven People. One Obsession. Zero Compromises.
                </h2>
                <p className="font-sans text-lg text-[#a3a3a3] max-w-xl leading-relaxed">
                  Every project at VYRO is built by people who are genuinely obsessed with their craft. No interns doing the real work. No middlemen diluting the vision. Just a tight crew of creators, strategists, and technicians who treat your story like it belongs to them.
                </p>
              </div>

              {/* Team List */}
              <div className="flex flex-col gap-8 md:gap-12">
                {TEAM.map((member) => (
                  <div key={member.id} className="flex flex-col sm:flex-row gap-6 sm:gap-8 bg-[#111111] rounded-[2rem] p-6 sm:p-8 border border-white/5 hover:border-white/10 transition-colors">
                    {/* Avatar */}
                    <div className="shrink-0 relative w-24 h-24 sm:w-40 sm:h-40 rounded-full overflow-hidden border border-white/10 bg-[#1a1a1a]">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill 
                        className="object-cover transition-transform duration-700 hover:scale-105" 
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col flex-1 justify-center">
                      <div className="flex justify-between items-start mb-4 gap-4">
                        <div>
                          <h3 className="text-2xl font-serif text-white mb-1">{member.name}</h3>
                          <p className="text-xs font-sans text-[#737373] uppercase tracking-widest font-bold">{member.title}</p>
                        </div>
                        <div className="flex gap-2 shrink-0">
                          <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors">
                            <Instagram size={16} className="text-white" />
                          </a>
                          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors">
                            <Linkedin size={16} className="text-white" />
                          </a>
                        </div>
                      </div>
                      <p className="text-[#a3a3a3] text-sm md:text-base leading-relaxed font-sans mt-2">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Closing Strip */}
              <div className="mt-24 pt-16 border-t border-white/10 text-center pb-8">
                <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-[#737373] mb-6 block">
                  AND THEN SOME
                </span>
                <h3 className="font-serif italic text-3xl md:text-4xl text-white mb-8">
                  The Core Is Seven. The Bench Goes Nationwide.
                </h3>
                <p className="text-[#a3a3a3] font-sans text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-12">
                  Behind the core crew sits a deep network of cinematographers, editors, photographers, motion designers, sound engineers, and on-ground production talent stationed across India. Mumbai. Bangalore. Jaipur. Hyderabad. Chennai. Wherever your story needs to live, we already have someone in that city who is genuinely great at what they do. You bring the vision. We bring the right person for it, every single time.
                </p>
                <p className="font-serif italic text-xl md:text-2xl text-white/40 max-w-lg mx-auto">
                  The right talent. The right city. The right moment. Every time.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
