"use client";

import React, { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  workProjects,
  ProjectSlideshow,
} from "@/components/sections/PortfolioSection";

export default function OurWorkPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <main className="relative min-h-screen w-full bg-white text-[#181818] flex flex-col justify-between">
        <Header />

        {/* Content Section: Heading & All Featured Works with Slideshow (No extra text) */}
        <section className="w-full max-w-[1240px] mx-auto px-6 pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-24">
          <h1 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-[#181818] tracking-tight text-center mb-10 sm:mb-14">
            Our Work
          </h1>

          {/* 3 Featured Project Cards with Interactive Slideshow (Matching Image Reference) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {workProjects.map((project) => (
              <div key={project.id} className="flex flex-col">
                <ProjectSlideshow project={project} />

                {/* Title & Subtitle only — matching reference image */}
                <div className="mt-3.5 px-0.5">
                  <h2 className="text-[16px] sm:text-[17px] font-semibold text-[#111111] tracking-[-0.3px]">
                    {project.title}
                  </h2>
                  <p className="text-[13.5px] sm:text-[14px] text-[#777777] mt-0.5">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </Suspense>
  );
}
