"use client";

import React from "react";
import { motion } from "framer-motion";
import { StatusChip, StatusColor } from "@/components/ui/StatusChip";

interface Stage {
  step: string;
  label: string;
  title: string;
  description: string;
  chipLabel: string;
  chipColor: StatusColor;
}

const stages: Stage[] = [
  {
    step: "01",
    label: "01 / STRATEGY",
    title: "Understanding Your Vision",
    description:
      "We begin by understanding your business goals, target audience, challenges, and project requirements.",
    chipLabel: "DISCOVERY",
    chipColor: "blue",
  },
  {
    step: "02",
    label: "02 / CREATIVE",
    title: "Designing the Experience",
    description:
      "We transform ideas into wireframes, user journeys, and polished interface designs.",
    chipLabel: "DESIGN",
    chipColor: "blue",
  },
  {
    step: "03",
    label: "03 / ENGINEERING",
    title: "Bringing Ideas to Life",
    description:
      "Our developers build responsive, scalable, and high-performance digital products.",
    chipLabel: "IN DEVELOPMENT",
    chipColor: "blue",
  },
  {
    step: "04",
    label: "04 / QUALITY",
    title: "Testing Every Detail",
    description:
      "We validate functionality, usability, performance, and compatibility before launch.",
    chipLabel: "QUALITY CHECK",
    chipColor: "gray",
  },
  {
    step: "05",
    label: "05 / DELIVERY",
    title: "Ready for the Real World",
    description:
      "We deploy your product and provide the support needed to grow and improve over time.",
    chipLabel: "READY TO LAUNCH",
    chipColor: "green",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative z-10 w-full bg-black py-24 md:py-32 px-6 md:px-14 border-b border-white/[0.145]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#52A8FF]" />
              <span className="font-mono text-xs text-[#52A8FF] tracking-[2px] uppercase">
                ENGINEERING LIFECYCLE
              </span>
            </div>
            <h2 className="text-[34px] sm:text-[46px] md:text-[54px] font-medium text-white tracking-[-1.5px] md:tracking-[-2px] leading-[1.08]">
              From Concept to Launch.
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16px] text-[#999999] max-w-md leading-[1.7]">
            A transparent, collaborative process that transforms your vision
            into a reliable and scalable digital product.
          </p>
        </div>

        {/* Stages Workflow (Connected Cards) */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stages.map((stage, idx) => (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-[#0A0A0A] border border-white/[0.145] p-6 rounded-none flex flex-col justify-between hover:border-[#52A8FF]/60 transition-all duration-300"
            >
              {/* Card Header: Label & Status Chip */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="font-mono text-[11px] text-[#999999] tracking-wider uppercase">
                    {stage.label}
                  </span>
                  <StatusChip
                    label={stage.chipLabel}
                    color={stage.chipColor}
                    ping={stage.chipColor === "green"}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-medium text-white tracking-tight mb-3">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-[#999999] leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {/* Bottom Step Indicator with Active Blue Progress Mark */}
              <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between font-mono text-[11px]">
                <span className="text-[#52A8FF] font-semibold">STAGE {stage.step}</span>
                <span className="w-1.5 h-1.5 bg-[#52A8FF] rounded-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
