"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function HeroContent() {
  const solutions = [
    "Web Development",
    "UI/UX Design",
    "AI Solutions",
    "Mobile Applications",
    "Brand Identity",
    "SEO & Growth",
  ];

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-8 text-center flex flex-col items-center justify-center min-h-screen">
      
      {/* 1. Massive Luminous Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight font-outfit text-white leading-[1.08] mb-6 max-w-4xl drop-shadow-sm"
      >
        Build <span className="font-cursive font-normal tracking-normal text-[1.15em] px-1.5 text-[#38BDF8] sm:text-white drop-shadow-sm">Digital</span> Products <br />
        That <span className="font-cursive font-normal tracking-normal text-[1.15em] px-1.5 text-[#38BDF8] sm:text-white drop-shadow-sm">People</span> Love.
      </motion.h1>

      {/* 2. Subtitle / Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="text-lg md:text-2xl text-slate-200/90 font-normal leading-relaxed max-w-2xl mb-12 text-balance drop-shadow-sm"
      >
        We craft intuitive UI/UX, scalable applications, and modern digital solutions that accelerate brand growth.
      </motion.p>

      {/* 3. Prominent Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full max-w-md"
      >
        {/* Solid white high-contrast pill button */}
        <a
          href="/contact"
          className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-[#0B0F19] bg-white hover:bg-slate-100 shadow-[0_10px_35px_rgba(255,255,255,0.25)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 group"
        >
          <span>Start Your Project</span>
          <ArrowRight className="w-4 h-4 text-[#0B0F19] group-hover:translate-x-1 transition-transform duration-300" />
        </a>

        {/* Subtle translucent glass secondary button */}
        <a
          href="#view-work"
          className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 transition-all duration-300 flex items-center justify-center backdrop-blur-md"
        >
          View Our Work
        </a>
      </motion.div>

      {/* 4. Compact High-Contrast White Cards (Only Service Name & Arrow) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl mx-auto"
      >
        {/* Editorial Subheading Divider */}
        <div className="flex items-center gap-4 mb-8 w-full">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.22em] text-slate-300 uppercase px-2 font-outfit">
            Our Core Expertise & Digital Solutions
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        {/* Minimalist 3-Column White Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-left">
          {solutions.map((name) => (
            <a
              key={name}
              href={`/contact?service=${encodeURIComponent(name)}`}
              className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white text-[#0B0F19] hover:bg-slate-50 transition-colors duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.5)] border border-white/90 group cursor-pointer"
            >
              {/* Bold Black Title */}
              <span className="text-[16px] sm:text-[17px] font-bold text-[#0B0F19] font-outfit truncate pr-2">
                {name}
              </span>

              {/* Black Round Badge with White Cross Arrow Animation Only */}
              <div className="w-9 h-9 rounded-full bg-[#0B0F19] text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-black transition-colors duration-300 ml-3">
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
