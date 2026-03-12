"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute inset-0 z-0 flex h-full w-full items-center justify-center overflow-hidden bg-background pointer-events-none",
                className
            )}
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="absolute top-0 flex w-full justify-center">
                <div className="left-1/2 h-[50rem] w-[50rem] opacity-50 absolute -top-[20rem] -translate-x-1/2 rounded-full blur-[8rem] bg-indigo-500/20"></div>
            </div>
        </div>
    );
};
