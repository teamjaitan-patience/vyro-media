import { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
  accent?: boolean;
}

export function SectionLabel({ children, className = "", accent = false }: SectionLabelProps) {
  return (
    <span
      className={`section-label inline-block ${accent ? "text-[#C8A96E]" : "text-[#6B6B6B]"} ${className}`}
    >
      {children}
    </span>
  );
}
