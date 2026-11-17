"use client";

import React from "react";
import { motion } from "framer-motion";

const expertiseList = [
  "Product Strategy",
  "UI/UX Design",
  "Web Engineering",
  "Mobile Development",
  "SaaS Solutions",
];

export function TrustExpertise() {
  return (
    <section
      id="expertise"
      className="relative z-10 w-full bg-black border-y border-white/[0.145] py-16 md:py-20 px-6 md:px-14"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
        {/* Left Column: Headline & Description */}
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-1.5 h-1.5 bg-[#52A8FF]" />
            <span className="font-mono text-xs text-[#52A8FF] tracking-widest uppercase">
              STUDIO PHILOSOPHY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[28px] sm:text-[36px] font-medium text-white tracking-[-1px] leading-[1.15]"
          >
            Technology Meets Thoughtful Design.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-[15px] sm:text-[16px] text-[#999999] leading-[1.6]"
          >
            We combine strategic thinking, creative design, and engineering
            expertise to build digital experiences that deliver measurable
            business value.
          </motion.p>
        </div>

        {/* Right Column: Monospace Expertise Indicators Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-y-3 gap-x-2 md:gap-x-3 font-mono text-[11px] sm:text-[12px] uppercase tracking-[1.5px] text-[#EDEDED]"
        >
          {expertiseList.map((item, index) => (
            <React.Fragment key={item}>
              <span className="px-3 py-1.5 bg-[#0A0A0A] border border-white/[0.145] text-white hover:border-[#52A8FF]/60 hover:text-[#52A8FF] transition-colors duration-200">
                {item}
              </span>
              {index < expertiseList.length - 1 && (
                <span className="text-white/20 select-none">/</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
