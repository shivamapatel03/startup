"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "01",
    question: "What services do you provide?",
    answer:
      "We provide UI/UX design, website development, mobile app development, SaaS development, custom software solutions, branding, and ongoing maintenance.",
  },
  {
    id: "02",
    question: "How does a project usually begin?",
    answer:
      "Every project starts with a discovery discussion to understand your goals, requirements, timeline, and expectations.",
  },
  {
    id: "03",
    question: "How long does development take?",
    answer:
      "Timelines depend on the project's complexity, features, and requirements. We provide a clear project timeline before development begins.",
  },
  {
    id: "04",
    question: "Can you work with an existing product?",
    answer:
      "Yes. We can redesign, improve, extend, maintain, or rebuild existing websites, mobile applications, and software platforms.",
  },
  {
    id: "05",
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer ongoing maintenance, technical support, optimization, and feature development.",
  },
  {
    id: "06",
    question: "How can I start a project?",
    answer:
      "Simply contact us through our project inquiry form. We'll discuss your requirements and recommend the right approach.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative z-10 w-full bg-black py-24 md:py-32 px-6 md:px-14 border-b border-white/[0.145]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#52A8FF]" />
            <span className="font-mono text-xs text-[#52A8FF] tracking-[2px] uppercase">
              FREQUENTLY ASKED
            </span>
          </div>
          <h2 className="text-[34px] sm:text-[46px] md:text-[54px] font-medium text-white tracking-[-1.5px] md:tracking-[-2px] leading-[1.08]">
            Questions? We&apos;ve Got Answers.
          </h2>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-white/[0.145] border-y border-white/[0.145]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.id} className="py-6 sm:py-7">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono text-xs text-[#52A8FF] shrink-0">
                      {faq.id}
                    </span>
                    <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-[#52A8FF] transition-colors tracking-tight">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="w-8 h-8 bg-[#0A0A0A] border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#52A8FF]/60 transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#52A8FF]" />
                    ) : (
                      <Plus className="w-4 h-4 text-white" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 pl-8 sm:pl-12 text-[15px] text-[#999999] leading-[1.7] max-w-2xl font-normal">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
