"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    suffix,
}: {
    words: string;
    className?: string;
    suffix?: string;
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate(
            ".word",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.15),
            }
        );
    }, [animate]);

    return (
        <div className={cn("font-bold", className)}>
            <div className="mt-4">
                <div className="leading-snug tracking-wide">
                    <motion.div ref={scope} className="inline-block relative w-full">
                        {wordsArray.map((word, idx) => {
                            return (
                                <motion.span
                                    key={word + idx}
                                    className="opacity-0 word"
                                >
                                    {word}{" "}
                                </motion.span>
                            );
                        })}
                        {suffix && (
                            <motion.span 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2, delay: wordsArray.length * 0.15 }}
                                className="animate-pulse inline-block text-[#C8A96E]"
                            >
                                {suffix}
                            </motion.span>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
