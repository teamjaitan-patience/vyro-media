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
                delay: stagger(0.2),
            }
        );
    }, [animate]);

    return (
        <div className={cn("font-bold", className)}>
            <div className="mt-4">
                <div className="dark:text-white text-black text-4xl sm:text-5xl md:text-6xl uppercase leading-snug tracking-wide">
                    <motion.div ref={scope} className="inline-block relative w-full">
                        {wordsArray.map((word, idx) => {
                            return (
                                <motion.span
                                    key={word + idx}
                                    className="dark:text-white text-black opacity-0 word"
                                >
                                    {word}{" "}
                                </motion.span>
                            );
                        })}
                        {suffix && (
                            <motion.span 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2, delay: wordsArray.length * 0.2 }}
                                className="animate-pulse inline-block text-indigo-400"
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
