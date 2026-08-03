"use client";

import React from "react";
import { motion } from "framer-motion";

// Clean inline SVGs to avoid third-party icon library export mismatches
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface FooterProps {
  transparent?: boolean;
  noBorder?: boolean;
  compact?: boolean;
}

export function Footer({ transparent = false, noBorder = false, compact = false }: FooterProps) {
  return (
    <footer
      className={`relative z-20 w-full text-slate-400 font-outfit transition-colors duration-300 ${
        transparent ? "bg-transparent" : "bg-black"
      } ${noBorder ? "border-none" : "border-t border-white/[0.08]"} ${
        compact ? "py-4 px-6 md:px-12" : "py-8 px-6 sm:px-12"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left Side: Copyright Notice */}
        <div className="text-center sm:text-left text-[13px] sm:text-[14px] font-normal tracking-wide text-slate-400">
          © 2026 @ BE UNIC all rights reserved.
        </div>

        {/* Right Side Corner: Social Media Icons (Instagram, LinkedIn) */}
        <div className="flex items-center gap-3.5">
          <motion.a
            href="https://www.instagram.com/beunic.agency/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="BE UNIC Instagram"
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/[0.06] hover:bg-white text-slate-300 hover:text-[#0B0F19] transition-all duration-300 flex items-center justify-center border border-white/15 shadow-sm"
          >
            <InstagramIcon className="w-4 h-4" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/company/beunic-agency/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="BE UNIC LinkedIn"
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/[0.06] hover:bg-white text-slate-300 hover:text-[#0B0F19] transition-all duration-300 flex items-center justify-center border border-white/15 shadow-sm"
          >
            <LinkedInIcon className="w-4 h-4" />
          </motion.a>
        </div>

      </div>
    </footer>
  );
}
