import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "default" | "header" | "hero";
  disabled?: boolean;
  variant?: "white" | "dark";
}

export function PrimaryButton({
  children,
  href,
  onClick,
  className = "",
  showArrow = true,
  type = "button",
  size = "default",
  disabled = false,
  variant = "white",
}: PrimaryButtonProps) {
  const sizeClasses = {
    header: "px-4 py-2.5 text-[15px]",
    default: "px-5 py-2.5 text-[15px]",
    hero: "px-5 py-2.5 sm:px-6 sm:py-3 text-[15px] sm:text-[16px]",
  }[size];

  const variantClasses = {
    white: "bg-[#FFFFFF] text-[#121212] border-white hover:border-[#52A8FF] hover:ring-1 hover:ring-[#52A8FF]/60",
    dark: "bg-[#252525] text-white border-[#252525] hover:bg-black hover:border-black hover:ring-1 hover:ring-[#252525]/60",
  }[variant];

  const content = (
    <span className="inline-flex items-center gap-2.5">
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-250 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </span>
  );

  const baseClasses = `group inline-flex items-center justify-center rounded-none font-medium transition-all duration-250 ease-out border cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {content}
    </button>
  );
}
