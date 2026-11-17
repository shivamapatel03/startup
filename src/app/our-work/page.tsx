"use client";

import React, { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  workProjects,
  ProjectCard,
} from "@/components/sections/PortfolioSection";

export default function OurWorkPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <main className="relative min-h-screen w-full bg-white text-[#181818] flex flex-col justify-between">
        <Header />

        {/* Content Section: Simple Clean Heading & All Featured Works (No extra text) */}
        <section className="w-full max-w-[1040px] mx-auto px-6 pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-24">
          <h1 className="text-[26px] sm:text-[32px] md:text-[36px] font-bold text-[#181818] tracking-tight text-center mb-10 sm:mb-12">
            Our Work
          </h1>

          {/* All Project Cards in Compact Grid (Reduced size & text with character attributions) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
            {workProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </Suspense>
  );
}
