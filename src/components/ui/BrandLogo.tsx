import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  textColor?: string;
  showText?: boolean;
}

export function BrandLogo({
  className = "",
  textColor = "text-white",
  showText = true,
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group select-none ${className}`}
      aria-label="BE UNIC Home"
    >
      {/* Brand Logo Image from /new.png */}
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/new.png"
          alt="BE UNIC Logo"
          width={36}
          height={36}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* Brand Name */}
      {showText && (
        <span
          className={`font-medium text-[20px] tracking-[-0.5px] transition-colors ${textColor}`}
        >
          BE UNIC
        </span>
      )}
    </Link>
  );
}
