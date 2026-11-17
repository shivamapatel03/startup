"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Sparkles, Cpu, Users, ShieldCheck, HeartHandshake } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const features: Feature[] = [
  {
    id: "01",
    title: "Strategy First",
    description: "We understand your business before writing a single line of code.",
    icon: Target,
  },
  {
    id: "02",
    title: "Design Excellence",
    description: "We create thoughtful, intuitive, and visually compelling digital experiences.",
    icon: Sparkles,
  },
  {
    id: "03",
    title: "Scalable Engineering",
    description: "We build reliable architecture designed to support your future growth.",
    icon: Cpu,
  },
  {
    id: "04",
    title: "Transparent Collaboration",
    description: "You stay informed and involved throughout every stage of development.",
    icon: Users,
  },
  {
    id: "05",
    title: "Quality Without Compromise",
    description: "We focus on performance, security, accessibility, and attention to detail.",
    icon: ShieldCheck,
  },
  {
    id: "06",
    title: "Long-Term Partnership",
    description: "We support your product beyond launch with continuous improvements and technical assistance.",
    icon: HeartHandshake,
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="about-us"
      className="relative z-10 w-full bg-black py-24 md:py-32 px-6 md:px-14 border-b border-white/[0.145]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#52A8FF]" />
              <span className="font-mono text-xs text-[#52A8FF] tracking-[2px] uppercase">
                THE STUDIO ADVANTAGE
              </span>
            </div>
            <h2 className="text-[34px] sm:text-[46px] md:text-[54px] font-medium text-white tracking-[-1.5px] md:tracking-[-2px] leading-[1.08]">
              More Than Just Development.
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16px] text-[#999999] max-w-md leading-[1.7]">
            We bring together strategy, creativity, and engineering to deliver
            digital products that make a difference.
          </p>
        </div>

        {/* 2-Column Feature Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-[#0A0A0A] border border-white/[0.145] p-8 rounded-none flex items-start gap-6 hover:border-[#52A8FF]/60 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Index / Icon Box */}
                <div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:text-[#52A8FF] group-hover:border-[#52A8FF]/40 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-[#52A8FF] uppercase tracking-wider">
                      FEATURE {feature.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-white tracking-tight mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] text-[#999999] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
