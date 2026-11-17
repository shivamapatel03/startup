"use client";

import React from "react";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export function FinalCTASection() {
  return (
    <section className="relative z-10 w-full bg-black py-24 md:py-32 px-6 md:px-14 border-b border-white/[0.145] overflow-hidden">
      {/* Subtle Radial Blue Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#52A8FF]/[0.10] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 bg-[#0A0A0A] border border-white/[0.145] p-10 sm:p-16 md:p-20 text-center">
        {/* Small Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="w-1.5 h-1.5 bg-[#52A8FF]" />
          <span className="font-mono text-xs text-[#52A8FF] tracking-[2px] uppercase">
            HAVE AN IDEA? LET&apos;S MAKE IT REAL.
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[32px] sm:text-[46px] md:text-[56px] font-medium text-white tracking-[-1.5px] md:tracking-[-2.5px] leading-[1.08] max-w-3xl mx-auto"
        >
          Your Next Big Idea Deserves a Powerful Digital Experience.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-[15px] sm:text-[16px] text-[#999999] max-w-xl mx-auto leading-[1.7]"
        >
          Whether you&apos;re building a new product, transforming an existing
          platform, or bringing an ambitious idea to life, we&apos;re ready to help
          you make it happen.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <PrimaryButton href="#contact" size="hero">
            Start a Project
          </PrimaryButton>
          <SecondaryButton href="mailto:beunicmark@gmail.com" size="hero">
            Schedule a Conversation
          </SecondaryButton>
        </motion.div>

        {/* Bottom Caption */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] font-mono text-[11px] text-[#999999] tracking-[2px] uppercase">
          LET&apos;S CREATE SOMETHING MEANINGFUL TOGETHER.
        </div>
      </div>
    </section>
  );
}
