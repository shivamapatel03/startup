"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  // Track scroll position of the footer to automatically grow the gradients
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  // Dynamic subtle grow animation for left (orange) and right (red) gradients on scroll
  const scaleGradient = useTransform(scrollYProgress, [0, 1], [0.85, 1.15]);
  const opacityGradient = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.38, 0.5]);
  const yShift = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <footer
      ref={footerRef}
      className="relative z-10 w-full overflow-hidden bg-white text-[#252525] pt-16 sm:pt-20 md:pt-24 pb-6 px-6 md:px-14 border-t border-[#EAEAEA]"
    >
      {/* Subtle Ambient Gradients: Soft warm orange on left, delicate soft red/coral on right */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Left Side: Soft Amber/Peach Glow */}
        <motion.div
          style={{
            scale: scaleGradient,
            opacity: opacityGradient,
            y: yShift,
          }}
          className="absolute -bottom-24 -left-16 sm:-left-20 w-[280px] sm:w-[400px] md:w-[500px] h-[200px] sm:h-[260px] md:h-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,145,60,0.20)_0%,rgba(255,180,100,0.06)_50%,transparent_75%)] blur-[60px] sm:blur-[80px] md:blur-[100px]"
        />

        {/* Right Side: Soft Rose/Coral Glow */}
        <motion.div
          style={{
            scale: scaleGradient,
            opacity: opacityGradient,
            y: yShift,
          }}
          className="absolute -bottom-24 -right-16 sm:-right-20 w-[280px] sm:w-[400px] md:w-[500px] h-[200px] sm:h-[260px] md:h-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,80,105,0.18)_0%,rgba(255,120,140,0.05)_50%,transparent_75%)] blur-[60px] sm:blur-[80px] md:blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto">
        {/* Top Section — Navigation & Direct Contact Columns (3 Columns Matching Reference Image) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 pb-16 sm:pb-24 md:pb-28">
          {/* Column 1: Explore */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] sm:text-xs text-[#777777] uppercase tracking-[1.5px]">
              Explore
            </span>
            <ul className="space-y-2 text-[14px] sm:text-[15px] font-medium text-[#252525]">
              <li>
                <a
                  href="/#hero"
                  className="hover:text-black transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="hover:text-black transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <Link
                  href="/our-work"
                  className="hover:text-black transition-colors duration-200"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <a
                  href="/#about-us"
                  className="hover:text-black transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <Link
                  href="/members"
                  className="hover:text-black transition-colors duration-200"
                >
                  Members
                </Link>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="hover:text-black transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Connect */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] sm:text-xs text-[#777777] uppercase tracking-[1.5px]">
              Connect
            </span>
            <ul className="space-y-2 text-[14px] sm:text-[15px] font-medium text-[#252525]">
              <li>
                <a
                  href="https://www.linkedin.com/company/beunic-agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-black transition-colors duration-200 group"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/beunic.agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-black transition-colors duration-200 group"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com/shivam-patel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-black transition-colors duration-200 group"
                >
                  <span>Dribbble</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-3">
            <span className="font-mono text-[11px] sm:text-xs text-[#777777] uppercase tracking-[1.5px]">
              Contact
            </span>
            <div className="space-y-2.5 text-[14px] sm:text-[15px] text-[#252525]">
              <a
                href="mailto:beunicmark@gmail.com"
                className="font-medium hover:text-black transition-colors duration-200 inline-flex items-center gap-1 group"
              >
                <span>beunicmark@gmail.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <p className="text-[13px] text-[#777777] leading-relaxed pt-1">
                Global Digital Product Studio
                <br />
                Available worldwide for client collaborations
              </p>
            </div>
          </div>
        </div>

        {/* Big Brand Typography — Clean, Monumental, Without Characters */}
        <div className="w-full flex justify-center pt-8 sm:pt-12 pb-2 select-none">
          <h2 className="relative z-10 text-[18vw] sm:text-[19vw] md:text-[20vw] font-black tracking-[-0.04em] text-[#181818] text-center leading-[0.78] select-none whitespace-nowrap">
            BE UNIC
          </h2>
        </div>

        {/* Bottom Copyright & Credits */}
        <div className="pt-6 mt-4 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#777777] font-medium">
          <div>© {new Date().getFullYear()} BE UNIC. All rights reserved.</div>
          <div className="text-[#999999]">
            Designed &amp; Engineered by BE UNIC
          </div>
        </div>
      </div>
    </footer>
  );
}
