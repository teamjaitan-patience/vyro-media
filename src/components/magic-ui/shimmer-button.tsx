import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    shimmerColor?: string;
    shimmerSize?: string;
    borderRadius?: string;
    shimmerDuration?: string;
    background?: string;
    className?: string;
    children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
    (
        {
            shimmerColor = "#ffffff",
            shimmerSize = "0.05em",
            shimmerDuration = "3s",
            borderRadius = "100px",
            background = "rgba(0, 0, 0, 1)",
            className,
            children,
            ...props
        },
        ref,
    ) => {
        return (
            <button
                style={
                    {
                        "--spread": "90deg",
                        "--shimmer-color": shimmerColor,
                        "--radius": borderRadius,
                        "--speed": shimmerDuration,
                        "--cut": shimmerSize,
                        "--bg": background,
                    } as CSSProperties
                }
                className={cn(
                    "group relative cursor-pointer overflow-hidden whitespace-nowrap px-6 py-3 [background:var(--bg)] [border-radius:var(--radius)]",
                    "transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(255,255,255,0.15)]",
                    className,
                )}
                ref={ref}
                {...props}
            >
                <div className="absolute inset-0 overflow-visible [container-type:size]">
                    <div className="absolute inset-0 h-[100cqh] animate-spin-around [aspect-ratio:1/1] [border-radius:0] [mask:linear-gradient(white,transparent_50%)]">
                        <div className="absolute inset-[-100%] w-auto rotate-0 border-[length:var(--cut)] border-[var(--shimmer-color)] opacity-40 group-hover:opacity-100" />
                    </div>
                </div>
                <div className={cn("relative z-10 flex items-center justify-center font-medium")}>
                    {children}
                </div>
            </button>
        );
    },
);

ShimmerButton.displayName = "ShimmerButton";
