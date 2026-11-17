"use client";

import React from "react";
import { motion } from "framer-motion";

interface Metric {
  id: string;
  value: string;
  label: string;
  sub: string;
}

const metrics: Metric[] = [
  {
    id: "01",
    value: "100%",
    label: "Client-Focused Approach",
    sub: "Direct founder-led architecture & design communication",
  },
  {
    id: "02",
    value: "360°",
    label: "End-to-End Solutions",
    sub: "From product strategy to deployed cloud architecture",
  },
  {
    id: "03",
    value: "24/7",
    label: "Digital Product Availability",
    sub: "High reliability, automated monitoring & proactive support",
  },
  {
    id: "04",
    value: "∞",
    label: "Possibilities for Innovation",
    sub: "Uncapped engineering limits with cutting-edge tech stacks",
  },
];

export function MetricsSection() {
  return (
    <section
      id="metrics"
      className="relative z-10 w-full bg-black py-24 md:py-32 px-6 md:px-14 border-b border-white/[0.145]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#52A8FF]" />
            <span className="font-mono text-xs text-[#52A8FF] tracking-[2px] uppercase">
              STUDIO BENCHMARKS
            </span>
          </div>
          <h2 className="text-[34px] sm:text-[46px] md:text-[54px] font-medium text-white tracking-[-1.5px] md:tracking-[-2px] leading-[1.08]">
            Built With Purpose. Measured by Impact.
          </h2>
        </div>

        {/* 4-Column Border-Connected Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/[0.145]">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#0A0A0A] p-8 sm:p-10 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-white/[0.145] last:border-b-0 lg:last:border-r-0 hover:bg-[#0F0F0F] transition-colors duration-300"
            >
              <div>
                {/* Metric Index */}
                <div className="font-mono text-[11px] text-[#999999] uppercase tracking-wider mb-6 flex items-center justify-between">
                  <span>METRIC {metric.id}</span>
                  <span className="w-1.5 h-1.5 rounded-none bg-white/20 group-hover:bg-[#52A8FF] transition-colors" />
                </div>

                {/* 56px Numerical Typography with tight tracking */}
                <div className="font-mono text-[52px] sm:text-[56px] font-normal text-white tracking-[-3.36px] leading-none mb-4 group-hover:text-[#52A8FF] transition-colors">
                  {metric.value}
                </div>

                {/* Label */}
                <div className="text-[17px] font-medium text-[#EDEDED] tracking-tight mb-2">
                  {metric.label}
                </div>
              </div>

              {/* Muted Descriptive Text in #999999 */}
              <p className="text-[13px] text-[#999999] leading-relaxed pt-4 border-t border-white/[0.08] mt-6">
                {metric.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
