"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardData {
  title: string;
  description: string;
  ctaText: string;
  href: string;
  characterImg: string;
  characterAlt: string;
  gradientClass: string;
  glowColor: string;
}

const serviceCards: ServiceCardData[] = [
  {
    title: "App Design",
    description:
      "We design intuitive mobile experiences that make your product easier to use and impossible to forget.",
    ctaText: "Explore Design",
    href: "#contact",
    characterImg: "/character/design.png",
    characterAlt: "BE UNIC App Design Specialist holding tablet and stylus",
    gradientClass: "from-[#F0E9FF] to-[#D9CCFF]",
    glowColor: "rgba(168, 130, 255, 0.25)",
  },
  {
    title: "App Development",
    description:
      "We develop scalable mobile applications for iOS and Android, turning your ideas into real products.",
    ctaText: "Explore Development",
    href: "#contact",
    characterImg: "/character/appdev.png",
    characterAlt: "BE UNIC App Development Engineer with laptop",
    gradientClass: "from-[#E4F1FF] to-[#BBD8FF]",
    glowColor: "rgba(70, 140, 255, 0.25)",
  },
  {
    title: "Web Development",
    description:
      "We build fast, responsive, and scalable websites that strengthen your brand and help your business grow.",
    ctaText: "Explore Web",
    href: "#contact",
    characterImg: "/character/webdev.png",
    characterAlt: "BE UNIC Web Development Engineer with laptop",
    gradientClass: "from-[#FFE8ED] to-[#FFC9D6]",
    glowColor: "rgba(255, 100, 140, 0.25)",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-20 -mt-10 sm:-mt-12 w-full bg-white rounded-t-[42px] py-14 sm:py-16 md:py-20 px-6 md:px-14 shadow-[0_-6px_24px_rgba(0,0,0,0.02)]"
    >
      <div className="max-w-[1080px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[26px] sm:text-[30px] md:text-[32px] font-semibold text-[#111111] tracking-[-0.6px] leading-[1.2]"
          >
            How We Bring Your Ideas to Life
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2.5 text-[13px] sm:text-[14px] text-[#777777] max-w-[560px] mx-auto leading-[1.6]"
          >
            From creative thinking to powerful technology, we build digital
            experiences that move your business forward.
          </motion.p>
        </div>

        {/* Compact & Simple Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {serviceCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="group relative bg-white border border-[#EAEAEA] rounded-[16px] overflow-hidden flex flex-col justify-between shadow-[0_2px_16px_rgba(0,0,0,0.03)]"
            >
              {/* Top Section — Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-[18px] sm:text-[19px] font-semibold text-[#111111] tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[13px] text-[#666666] leading-[1.55]">
                    {card.description}
                  </p>
                </div>

                {/* Square Brutalist Button (turns #252525 on hover) */}
                <div className="pt-5">
                  <a
                    href={card.href}
                    className="group/btn inline-flex items-center gap-2 px-3.5 py-2 rounded-none border border-[#252525] bg-transparent text-[#252525] hover:bg-[#252525] hover:text-white transition-all duration-200 text-[12.5px] font-medium cursor-pointer select-none"
                  >
                    <span>{card.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Bottom Section — Simple & Compact Character Illustration Bay */}
              <div
                className={`relative w-full h-[200px] sm:h-[215px] overflow-hidden flex items-end justify-center bg-gradient-to-b ${card.gradientClass}`}
              >
                {/* Subtle Lighting Glow */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full blur-2xl pointer-events-none opacity-70"
                  style={{ backgroundColor: card.glowColor }}
                />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/60 rounded-full blur-xl pointer-events-none" />

                {/* 3D Character Illustration (Interactive hover animation inside card) */}
                <div className="relative z-10 w-full h-[180px] sm:h-[195px] flex items-end justify-center px-4">
                  <Image
                    src={card.characterImg}
                    alt={card.characterAlt}
                    width={400}
                    height={400}
                    priority={idx === 0}
                    className="w-auto h-full max-h-[180px] sm:max-h-[195px] object-contain object-bottom select-none transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:-translate-y-1 drop-shadow-[0_8px_16px_rgba(0,0,0,0.10)]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
