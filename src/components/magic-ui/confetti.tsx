"use client";

import confetti from "canvas-confetti";
import React from "react";

interface ConfettiProps {
  children: React.ReactNode;
  className?: string;
  options?: confetti.Options;
}

export const ConfettiTrigger = ({
  children,
  className,
  options = {
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  },
}: ConfettiProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;

    confetti({
      ...options,
      origin: { x, y },
    });
  };

  return (
    <div className={className} onClick={handleClick} style={{ cursor: "pointer", display: "inline-block" }}>
      {children}
    </div>
  );
};
