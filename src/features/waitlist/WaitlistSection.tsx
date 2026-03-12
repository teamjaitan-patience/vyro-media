"use client";
import { BorderBeam } from "@/components/magic-ui/border-beam";
import { Linkedin, Globe } from "lucide-react";
import Link from "next/link";

export function WaitlistSection() {
    return (
        <section className="py-24 px-4 w-full flex justify-center pb-40 relative z-10">
            <div className="relative w-full max-w-3xl bg-zinc-950 border border-white/10 rounded-3xl p-8 md:p-16 overflow-hidden flex flex-col items-center text-center shadow-2xl">
                <BorderBeam size={300} duration={12} delay={9} colorFrom="#6366f1" colorTo="#a855f7" />

                <h2 className="text-4xl md:text-5xl font-black tracking-widest uppercase mb-6 drop-shadow-lg">
                    LET'S BUILD SOMETHING GREAT
                </h2>
                <p className="text-zinc-400 mb-10 max-w-xl leading-relaxed text-lg">
                    While we build this site, we are actively taking on new clients. Drop your email below, or reach out to the founder directly to discuss your next project.
                </p>



                <div className="mt-12 flex flex-col items-center">
                    <p className="text-sm text-zinc-500 mb-4">In the meantime, connect with the founder:</p>
                    <div className="flex items-center gap-6">
                        <Link 
                            href="https://www.linkedin.com/in/jaitanpuri/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                        >
                            <Linkedin className="w-5 h-5" />
                            LinkedIn
                        </Link>
                        <Link 
                            href="https://jaitanpuri.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                        >
                            <Globe className="w-5 h-5" />
                            Website
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
