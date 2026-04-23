"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface WordPullProps {
  words: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function WordPull({ words, className, delay = 0.15, duration = 0.7 }: WordPullProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const wordList = words.split(" ");

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={cn("flex flex-wrap gap-2", className)}
    >
      {wordList.map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          transition={{ duration }}
          className="inline-block drop-shadow-sm"
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.div>
  );
}
