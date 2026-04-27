import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { text?: string }
>(({ text = "Button", children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-[#0A0A0A] bg-white px-10 py-5 text-center font-sans font-bold text-lg text-[#0A0A0A] shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(0,0,0,0.1)]",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        <div className="h-2 w-2 rounded-full bg-[#0A0A0A] transition-all duration-300 group-hover:scale-[150.8]"></div>
        <span className="inline-flex items-center gap-2 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children || text}
          <ArrowRight className="h-5 w-5" />
        </span>
      </div>
      <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-0 group-hover:opacity-100">
        <span>{children || text}</span>
        <ArrowRight className="h-5 w-5" />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
