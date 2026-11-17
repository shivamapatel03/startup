"use client";

import React from "react";
import Image from "next/image";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] flex flex-col items-center justify-center pt-32 pb-24 sm:pb-28 md:pb-32 px-6 md:px-14 overflow-hidden"
    >
      {/* Background Hero Image Layer - Clean Image Background Only */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/hero.png"
          alt="BE UNIC Hero Background"
          fill
          priority
          sizes="100vw"
          quality={100}
          className="object-cover object-center"
        />
      </div>

      {/* Hero Content Block */}
      <div className="relative z-10 max-w-[850px] mx-auto w-full flex flex-col items-center text-center my-auto">
        {/* Creative Team Eyebrow Badge (Minimal without background pill) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2.5 mb-6 sm:mb-7 select-none"
        >
          <span className="text-[13px] sm:text-[14px] font-medium text-[#252525] tracking-tight">
            Lead by creative team
          </span>
          <div className="flex items-center -space-x-1.5">
            {[
              { name: "Shivam Patel", img: "/team/team1.png" },
              { name: "Swayam Shah", img: "/team/team2.png" },
              { name: "Om Patel", img: "/team/team4.png" },
              { name: "Pramukh Prajapati", img: "/team/team3.png" },
            ].map((member) => (
              <div key={member.name} className="relative group/member">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover ring-2 ring-white shadow-xs cursor-pointer"
                />

                {/* Name Tooltip (Appear animation only, solid white bg, #252525 text, no gradient) */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none opacity-0 translate-y-1 group-hover/member:opacity-100 group-hover/member:translate-y-0 transition-all duration-200 ease-out z-30">
                  <div className="relative whitespace-nowrap px-2.5 py-0.5 bg-white text-[#252525] text-[11px] sm:text-[12px] font-medium rounded shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-black/10">
                    {member.name}
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-r border-b border-black/10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Headline - In #252525 Black (Reduced size) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#252525] font-medium text-[30px] sm:text-[42px] md:text-[52px] lg:text-[60px] leading-[1.1] tracking-[-1px] md:tracking-[-2px] max-w-[720px]"
        >
          From Bold Ideas to Powerful Digital Products.
        </motion.h1>

        {/* Supporting Description - Shortened concise line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 md:mt-6 text-[15px] sm:text-[16px] text-[#252525] max-w-[480px] leading-[1.6] font-normal"
        >
          We design and build exceptional digital products that help ambitious
          businesses innovate, scale, and stand out.
        </motion.p>

        {/* CTAs using #252525 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <PrimaryButton
            href="#contact"
            size="hero"
            variant="dark"
            className="w-full sm:w-auto shadow-sm"
          >
            Start Your Project
          </PrimaryButton>
          <SecondaryButton
            href="#our-work"
            size="hero"
            variant="outline-dark"
            className="w-full sm:w-auto shadow-sm"
          >
            Explore Our Work
          </SecondaryButton>
        </motion.div>
      </div>
    </section>
  );
}
