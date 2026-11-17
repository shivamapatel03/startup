import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SecondaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  size?: "default" | "hero";
  variant?: "outline-white" | "outline-dark" | "dark";
}

export function SecondaryButton({
  children,
  href,
  onClick,
  className = "",
  showArrow = false,
  size = "default",
  variant = "outline-white",
}: SecondaryButtonProps) {
  const sizeClasses = {
    default: "px-5 py-2.5 text-[15px]",
    hero: "px-5 py-2.5 sm:px-6 sm:py-3 text-[15px] sm:text-[16px]",
  }[size];

  const variantClasses = {
    "outline-white":
      "bg-transparent border-white/20 text-[#FFFFFF] hover:border-[#52A8FF] hover:bg-[#52A8FF]/5",
    "outline-dark":
      "bg-transparent border border-[#252525] text-[#252525] hover:bg-[#252525] hover:text-white hover:border-[#252525]",
    dark: "bg-[#252525] border-[#252525] text-white hover:bg-black hover:border-black",
  }[variant];

  const content = (
    <span className="inline-flex items-center gap-2">
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-250 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </span>
  );

  const baseClasses = `group inline-flex items-center justify-center rounded-none font-medium transition-all duration-200 ease-out border cursor-pointer select-none ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}
