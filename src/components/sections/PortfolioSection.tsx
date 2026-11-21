"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export interface SlideItem {
  src: string;
  alt: string;
  fit: "cover" | "contain";
  bg?: string;
}

export interface Author {
  name: string;
  image: string;
}

export interface WorkProject {
  id: string;
  title: string;
  subtitle: string;
  type: "slideshow" | "video";
  slides?: SlideItem[];
  videoSrc?: string;
  link?: string;
  creditsText: string;
  authors: Author[];
}

export const workProjects: WorkProject[] = [
  {
    id: "food-delivery",
    title: "Food Delivery App",
    subtitle: "On-Demand Ordering & Delivery",
    type: "slideshow",
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
    creditsText: "Designed by Shivam Patel",
    authors: [{ name: "Shivam Patel", image: "/team/team1.png" }],
  },
  {
    id: "medicine-management",
    title: "Medicine Management",
    subtitle: "Healthcare & Prescription App",
    type: "slideshow",
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
    creditsText: "Designed by Shivam Patel",
    authors: [{ name: "Shivam Patel", image: "/team/team1.png" }],
  },
  {
    id: "zap",
    title: "ZAP",
    subtitle: "Payment & Digital Banking App",
    type: "slideshow",
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
    creditsText: "Designed by Shivam Patel",
    authors: [{ name: "Shivam Patel", image: "/team/team1.png" }],
  },
  {
    id: "starwoods",
    title: "Starwoods Resort",
    subtitle: "Hospitality & Resort Web Platform",
    type: "video",
    videoSrc: "/Project/starwoods.mp4",
    link: "https://starwoodsresort.com",
    creditsText: "Designed & Developed by Shivam Patel & Om Patel",
    authors: [
      { name: "Shivam Patel", image: "/team/team1.png" },
      { name: "Om Patel", image: "/team/team4.png" },
    ],
  },
  {
    id: "ujaval",
    title: "Ujaval",
    subtitle: "Digital Brand & Web Experience",
    type: "video",
    videoSrc: "/Project/ujaval.mp4",
    creditsText: "Designed & Developed by Shivam Patel",
    authors: [{ name: "Shivam Patel", image: "/team/team1.png" }],
  },
];

export function ProjectSlideshow({ project }: { project: WorkProject }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const slides = project.slides || [];

  // Auto-advance slideshow every 3.5s when not hovered
  useEffect(() => {
    if (isHovered || slides.length <= 1) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentSlide = slides[currentIndex] || slides[0];

  return (
    <div
      className="relative w-full aspect-square rounded-[16px] sm:rounded-[18px] overflow-hidden border border-[#EAEAEA] bg-[#F7F7F8] group/card select-none shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-colors duration-200 hover:border-[#D0D0D0]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Slide Image - Instant and smooth sliding */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{ x: direction > 0 ? "100%" : "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: direction > 0 ? "-100%" : "100%" }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className={`absolute inset-0 w-full h-full ${
            currentSlide?.bg || "bg-white"
          }`}
        >
          {currentSlide && (
            <Image
              src={currentSlide.src}
              alt={currentSlide.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 320px"
              priority={currentIndex === 0}
              className={`${
                currentSlide.fit === "contain"
                  ? "object-contain object-center"
                  : "object-cover object-center"
              } select-none`}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next Chevrons on Hover */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/90 hover:bg-white text-[#252525] backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.12)] flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5 stroke-[2.2]" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/90 hover:bg-white text-[#252525] backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.12)] flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5 stroke-[2.2]" />
          </button>
        </>
      )}

      {/* Slide Pagination Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/80 backdrop-blur-md border border-black/[0.06] shadow-[0_2px_6px_rgba(0,0,0,0.06)]">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => handleDotClick(i, e)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                i === currentIndex
                  ? "w-3.5 h-1.5 bg-[#252525]"
                  : "w-1.5 h-1.5 bg-[#252525]/30 hover:bg-[#252525]/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function ProjectVideo({ project }: { project: WorkProject }) {
  return (
    <div className="relative w-full aspect-square rounded-[16px] sm:rounded-[18px] overflow-hidden border border-[#EAEAEA] bg-[#000000] group/card select-none shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-colors duration-200 hover:border-[#D0D0D0]">
      {project.videoSrc && (
        <video
          src={project.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover select-none"
        />
      )}

      {/* External Link Pill on Top-Right */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-[#252525] backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.14)] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label={`Visit ${project.title}`}
        >
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
        </a>
      )}
    </div>
  );
}

export function ProjectCard({ project }: { project: WorkProject }) {
  return (
    <div className="flex flex-col justify-between">
      {/* Media: Slideshow or Video */}
      {project.type === "video" ? (
        <ProjectVideo project={project} />
      ) : (
        <ProjectSlideshow project={project} />
      )}

      {/* Title & Subtitle */}
      <div className="mt-3 px-0.5">
        <div className="flex items-center justify-between gap-2">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14.5px] sm:text-[15px] font-semibold text-[#111111] hover:text-black hover:underline transition-colors tracking-[-0.2px] inline-flex items-center gap-1"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="w-3 h-3 text-[#888888]" />
            </a>
          ) : (
            <h3 className="text-[14.5px] sm:text-[15px] font-semibold text-[#111111] tracking-[-0.2px]">
              {project.title}
            </h3>
          )}
        </div>
        <p className="text-[12px] sm:text-[12.5px] text-[#777777] mt-0.5">
          {project.subtitle}
        </p>

        {/* Creator Attribution with Character Avatar */}
        <div className="mt-2.5 flex items-center gap-2 pt-2 border-t border-[#F0F0F0]">
          <div className="flex items-center -space-x-1.5 shrink-0">
            {project.authors.map((author) => (
              <div
                key={author.name}
                className="relative w-5 h-5 rounded-full overflow-hidden bg-[#F0F0F2] ring-1.5 ring-white"
                title={author.name}
              >
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  sizes="20px"
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
          <span className="text-[11px] sm:text-[11.5px] text-[#666666] font-medium leading-tight">
            {project.creditsText}
          </span>
        </div>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section
      id="our-work"
      className="relative z-10 w-full bg-white py-14 sm:py-16 md:py-20 px-6 md:px-14"
    >
      <div className="max-w-[1040px] mx-auto">
        {/* Section Header: Title, Subtitle & See More CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[24px] sm:text-[28px] md:text-[30px] font-semibold text-[#111111] tracking-[-0.5px] leading-[1.2]"
            >
              Our Latest Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-[13px] sm:text-[13.5px] text-[#777777] max-w-md leading-[1.6]"
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
            <Link
              href="/our-work"
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none border border-[#252525] bg-transparent text-[#252525] hover:bg-[#252525] hover:text-white transition-all duration-200 text-[12.5px] font-medium cursor-pointer w-fit select-none"
            >
              <span>View all projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Project Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
          {workProjects.slice(0, 3).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
