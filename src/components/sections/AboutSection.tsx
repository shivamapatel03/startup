"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const teamMembers = [
  {
    name: "Shivam Patel",
    image: "/team/team1.png",
    role: "Development & Engineering",
    elevated: false,
  },
  {
    name: "Swayam Shah",
    image: "/team/team2.png",
    role: "Product & UI/UX Design",
    elevated: true,
  },
  {
    name: "Om Patel",
    image: "/team/team4.png",
    role: "Creative Direction & Design",
    elevated: true,
  },
  {
    name: "Pramukh Prajapati",
    image: "/team/team3.png",
    role: "Full-Stack & Systems",
    elevated: false,
  },
];

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="about-us"
      className="relative z-10 w-full bg-white py-14 sm:py-16 md:py-20 px-6 md:px-14"
    >
      <div className="max-w-[1080px] mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12 max-w-lg"
        >
          <h2 className="text-[26px] sm:text-[30px] md:text-[32px] font-semibold text-[#111111] tracking-[-0.6px] leading-[1.2]">
            About Us
          </h2>
          <p className="mt-2 text-[13px] sm:text-[14px] text-[#777777] leading-[1.6]">
            The creative minds bringing digital visions to life.
          </p>
        </motion.div>

        {/* 4 Team Avatars in Symmetrical Arched Formation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-end justify-center gap-3 sm:gap-7 md:gap-10 pt-6 pb-4"
        >
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className={`flex flex-col items-center transition-transform duration-300 ${
                member.elevated ? "-translate-y-4 sm:-translate-y-6" : "translate-y-0"
              }`}
            >
              {/* Circular Avatar */}
              <div className="relative w-16 h-16 sm:w-22 sm:h-22 md:w-26 md:h-26 rounded-full overflow-hidden select-none transition-transform duration-300 hover:scale-[1.05]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 64px, 104px"
                  className="object-cover object-center select-none"
                />
              </div>

              {/* Member Name */}
              <span className="mt-2.5 sm:mt-3 text-[12px] sm:text-[13.5px] font-semibold text-[#111111] tracking-tight text-center">
                {member.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Simple Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 sm:mt-8 max-w-[540px] text-[13.5px] sm:text-[14.5px] text-[#666666] leading-[1.65] font-normal"
        >
          We are a tight-knit digital product studio specializing in modern app
          design, mobile engineering, and web development. Driven by craft and
          curiosity, we collaborate directly with founders to create digital
          experiences that inspire and perform.
        </motion.p>

        {/* Simple Outlined "Read more" Button (No gradient, #252525 hover) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-5 sm:mt-6"
        >
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-none border border-[#252525] bg-transparent text-[#252525] hover:bg-[#252525] hover:text-white transition-all duration-200 text-[13px] font-medium cursor-pointer select-none"
          >
            <span>{isExpanded ? "Show less" : "Read more"}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                isExpanded ? "rotate-180" : "group-hover:translate-y-0.5"
              }`}
            />
          </button>
        </motion.div>

        {/* Expandable Studio Story (Minimal & Clean) */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden mt-6 max-w-[580px] text-center"
            >
              <div className="pt-2 pb-3 px-4 border-t border-[#EAEAEA] text-[13px] sm:text-[13.5px] text-[#777777] leading-[1.7] space-y-3">
                <p>
                  At BE UNIC, every project is handled directly by the core team.
                  We don&apos;t outsource or delegate your vision to intermediaries—from
                  the initial wireframe to the final deployment, you work side-by-side
                  with the creators building your product.
                </p>
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#111111] hover:underline"
                  >
                    <span>Start a conversation with us</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
