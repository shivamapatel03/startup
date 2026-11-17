"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface SlideItem {
  src: string;
  alt: string;
  fit: "cover" | "contain";
  bg?: string;
}

interface WorkProject {
  id: string;
  title: string;
  subtitle: string;
  slides: SlideItem[];
}

const workProjects: WorkProject[] = [
  {
    id: "food-delivery",
    title: "Food Delivery App",
    subtitle: "On-Demand Ordering & Delivery",
    slides: [
      {
        src: "/work/work1/FW1.png",
        alt: "Food Delivery App - Screen 1",
        fit: "contain",
        bg: "bg-white",
      },
      {
        src: "/work/work1/FW2.png",
        alt: "Food Delivery App - Screen 2",
        fit: "contain",
        bg: "bg-white",
      },
      {
        src: "/work/work1/FW3.png",
        alt: "Food Delivery App - Screen 3",
        fit: "contain",
        bg: "bg-white",
      },
      {
        src: "/work/work1/FW4.png",
        alt: "Food Delivery App - Screen 4",
        fit: "contain",
        bg: "bg-white",
      },
    ],
  },
  {
    id: "medicine-management",
    title: "Medicine Management",
    subtitle: "Healthcare & Prescription App",
    slides: [
      {
        src: "/work/work2/SW1.png",
        alt: "Medicine Management App - Screen 1",
        fit: "contain",
        bg: "bg-white",
      },
      {
        src: "/work/work2/SW2.1.png",
        alt: "Medicine Management App - Screen 2",
        fit: "contain",
        bg: "bg-[#000000]",
      },
    ],
  },
  {
    id: "zap",
    title: "ZAP",
    subtitle: "Payment & Digital Banking App",
    slides: [
      {
        src: "/work/work3/TW1.png",
        alt: "ZAP Payment App - Overview Screen",
        fit: "contain",
        bg: "bg-white",
      },
      {
        src: "/work/work3/TW2.png",
        alt: "ZAP Payment App - Transfer Screen",
        fit: "contain",
        bg: "bg-white",
      },
      {
        src: "/work/work3/TW3.png",
        alt: "ZAP Payment App - Cards & Security Screen",
        fit: "contain",
        bg: "bg-white",
      },
    ],
  },
];

function ProjectSlideshow({ project }: { project: WorkProject }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance slideshow every 3.5s when not hovered
  useEffect(() => {
    if (isHovered || project.slides.length <= 1) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % project.slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, project.slides.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? project.slides.length - 1 : prev - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % project.slides.length);
  };

  const handleDotClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentSlide = project.slides[currentIndex];

  return (
    <div
      className="relative w-full aspect-square rounded-[18px] sm:rounded-[20px] overflow-hidden border border-[#EAEAEA] bg-[#F7F7F8] group/card select-none shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-colors duration-200 hover:border-[#D5D5D5]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Slide Image - Instant and smooth sliding, no popup wait */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{ x: direction > 0 ? "100%" : "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: direction > 0 ? "-100%" : "100%" }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className={`absolute inset-0 w-full h-full ${
            currentSlide.bg || "bg-white"
          }`}
        >
          <Image
            src={currentSlide.src}
            alt={currentSlide.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
            priority={currentIndex === 0}
            className={`${
              currentSlide.fit === "contain"
                ? "object-contain object-center"
                : "object-cover object-center"
            } select-none`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next Chevrons on Hover */}
      {project.slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-[#252525] backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.12)] flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-[#252525] backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.12)] flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.2]" />
          </button>
        </>
      )}

      {/* Slide Pagination Dots */}
      {project.slides.length > 1 && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-black/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
          {project.slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => handleDotClick(i, e)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                i === currentIndex
                  ? "w-4 h-1.5 bg-[#252525]"
                  : "w-1.5 h-1.5 bg-[#252525]/30 hover:bg-[#252525]/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section
      id="our-work"
      className="relative z-10 w-full bg-white py-14 sm:py-16 md:py-20 px-6 md:px-14"
    >
      <div className="max-w-[1080px] mx-auto">
        {/* Section Header: Title, Subtitle & See More CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[26px] sm:text-[30px] md:text-[32px] font-semibold text-[#111111] tracking-[-0.6px] leading-[1.2]"
            >
              Our Latest Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2.5 text-[13px] sm:text-[14px] text-[#777777] max-w-md leading-[1.6]"
            >
              Our tailored solutions empower your online presence, ensuring growth
              and success in the digital landscape.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-none border border-[#252525] bg-transparent text-[#252525] hover:bg-[#252525] hover:text-white transition-all duration-200 text-[13px] font-medium cursor-pointer w-fit select-none"
            >
              <span>See more</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* 3 Project Showcase Cards with Slideshow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {workProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="flex flex-col justify-between"
            >
              {/* Slideshow Showcase Container (No Square Button on Card) */}
              <ProjectSlideshow project={project} />

              {/* Project Title & Category */}
              <div className="mt-3 px-0.5">
                <h3 className="text-[15.5px] sm:text-[16px] font-semibold text-[#111111] tracking-[-0.3px]">
                  {project.title}
                </h3>
                <p className="text-[13px] text-[#777777] mt-0.5">
                  {project.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
