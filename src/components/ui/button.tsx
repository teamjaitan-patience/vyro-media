import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  id,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold transition-all duration-300 rounded-full cursor-pointer select-none no-underline";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-[#111111] text-white hover:bg-[#C8A96E] hover:text-[#111111] active:scale-95",
    secondary:
      "bg-[#C8A96E] text-[#111111] hover:bg-[#b5963c] active:scale-95",
    ghost:
      "bg-transparent text-[#111111] hover:bg-[#F2EFE9] border border-[#E8E4DE] hover:border-[#C8A96E] active:scale-95",
    outline:
      "bg-transparent text-[#E84C1E] border border-[#E84C1E] hover:bg-[#E84C1E] hover:text-white active:scale-95",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a id={id} href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button id={id} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
