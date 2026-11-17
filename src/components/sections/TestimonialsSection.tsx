"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  category: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: "01",
    quote:
      "The team understood our vision and transformed it into a polished digital product. The entire process felt structured, collaborative, and professional.",
    author: "Marcus Vance",
    role: "VP of Product, Stratos Cloud",
    category: "ENTERPRISE SAAS",
    initials: "MV",
  },
  {
    id: "02",
    quote:
      "From design to development, every detail was thoughtfully executed. The result was an experience that truly elevated our brand.",
    author: "Elena Rostova",
    role: "Founder & CEO, Kroma Commerce",
    category: "E-COMMERCE PLATFORM",
    initials: "ER",
  },
  {
    id: "03",
    quote:
      "They brought clarity to a complex idea and delivered a scalable solution that positioned us for future growth.",
    author: "David Sterling",
    role: "CTO, Veloce Health",
    category: "HEALTH TECH & APPS",
    initials: "DS",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative z-10 w-full bg-black py-24 md:py-32 px-6 md:px-14 border-b border-white/[0.145]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#52A8FF]" />
              <span className="font-mono text-xs text-[#52A8FF] tracking-[2px] uppercase">
                PARTNER TESTIMONIALS
              </span>
            </div>
            <h2 className="text-[34px] sm:text-[46px] md:text-[54px] font-medium text-white tracking-[-1.5px] md:tracking-[-2px] leading-[1.08]">
              Built on Trust. Driven by Results.
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16px] text-[#999999] max-w-md leading-[1.7]">
            What engineering leaders and founders say about our technical rigor,
            craftsmanship, and execution speed.
          </p>
        </div>

        {/* 3 Minimal Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group bg-[#0A0A0A] border border-white/[0.145] p-8 rounded-none flex flex-col justify-between hover:border-[#52A8FF]/60 transition-all duration-300"
            >
              <div>
                {/* Header: Project Category & Quote mark */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                  <span className="font-mono text-[10px] text-[#52A8FF] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <Quote className="w-4 h-4 text-[#999999] group-hover:text-[#52A8FF] transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-[15px] text-[#EDEDED] leading-[1.7] mb-8 font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/[0.08]">
                {/* Initials Avatar */}
                <div className="w-10 h-10 bg-black border border-white/20 flex items-center justify-center font-mono text-xs font-semibold text-white group-hover:border-[#52A8FF]/60 transition-colors">
                  {item.initials}
                </div>
                <div>
                  <div className="text-[15px] font-medium text-white tracking-tight">
                    {item.author}
                  </div>
                  <div className="text-[12px] font-mono text-[#999999]">
                    {item.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
