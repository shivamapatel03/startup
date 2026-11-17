"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Smartphone, Database, PenTool } from "lucide-react";

interface TechGroup {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  items: string[];
}

const techGroups: TechGroup[] = [
  {
    category: "Frontend",
    icon: Code2,
    description: "Modern, reactive, high-speed user interfaces.",
    items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    description: "High-throughput APIs and fault-tolerant architectures.",
    items: ["Node.js", "Python", "Laravel", "Express.js", "REST APIs"],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    description: "Native and cross-platform mobile experiences.",
    items: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
  {
    category: "Database & Cloud",
    icon: Database,
    description: "Scalable databases, real-time sync, and resilient infrastructure.",
    items: ["PostgreSQL", "MongoDB", "Firebase", "Supabase", "AWS"],
  },
  {
    category: "Design",
    icon: PenTool,
    description: "Design systems, interaction architecture, and production assets.",
    items: ["Figma", "Framer", "Adobe Creative Suite"],
  },
];

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="relative z-10 w-full bg-black py-24 md:py-32 px-6 md:px-14 border-b border-white/[0.145]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#52A8FF]" />
              <span className="font-mono text-xs text-[#52A8FF] tracking-[2px] uppercase">
                ENGINEERING FOUNDATION
              </span>
            </div>
            <h2 className="text-[34px] sm:text-[46px] md:text-[54px] font-medium text-white tracking-[-1.5px] md:tracking-[-2px] leading-[1.08]">
              Powered by the Right Technology.
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16px] text-[#999999] max-w-md leading-[1.7]">
            We select modern, reliable technologies to build digital products
            that are fast, secure, and ready to scale.
          </p>
        </div>

        {/* Technical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techGroups.map((group, idx) => {
            const Icon = group.icon;
            // Let the Database card span 2 cols on lg if desired or keep clean 3-col bento
            const isWide = idx === 3;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group bg-[#0A0A0A] border border-white/[0.145] p-7 rounded-none flex flex-col justify-between hover:border-[#52A8FF]/60 transition-all duration-300 ${
                  isWide ? "lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-black border border-white/10 flex items-center justify-center text-white group-hover:text-[#52A8FF] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-xl font-medium text-white tracking-tight">
                        {group.category}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-[#999999] uppercase tracking-wider">
                      CAT 0{idx + 1}
                    </span>
                  </div>

                  <p className="text-sm text-[#999999] mb-6">{group.description}</p>

                  {/* Monochrome Labels with Subtle Blue Highlight on Hover */}
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-white/90 bg-[#121212] border border-white/10 px-3 py-1.5 transition-all duration-200 hover:border-[#52A8FF] hover:text-[#52A8FF] hover:bg-[#52A8FF]/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#999999]">
                  <span>ENTERPRISE GRADE</span>
                  <span className="text-[#62C073]">TESTED & PROVEN</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
