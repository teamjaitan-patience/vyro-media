"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        icon: string;
        title: string;
        body: string;
        tags: string[];
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5", className)}>
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-[#C8A96E]/10 block rounded-2xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                            />
                        )}
                    </AnimatePresence>
                    <div className="rounded-xl h-full w-full p-7 bg-white border border-[#E8E4DE] group-hover:border-[#C8A96E]/50 relative z-20 flex flex-col transition-colors duration-300">
                        <span className="text-4xl mb-5 block">{item.icon}</span>
                        <h3 className="font-display text-xl font-bold text-[#111111] mb-3 leading-tight">
                            {item.title}
                        </h3>
                        <p className="text-[#6B6B6B] text-sm leading-relaxed flex-1 mb-5">
                            {item.body}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs font-medium px-3 py-1 rounded-full bg-[#F2EFE9] text-[#6B6B6B] border border-[#E8E4DE]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
