import React from "react";
import { Header } from "@/components/layout/Header";
import { InteractiveCursor } from "@/components/hero/InteractiveCursor";
import { BackgroundStage } from "@/components/hero/BackgroundStage";
import { HeroContent } from "@/components/hero/HeroContent";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#050816] selection:bg-[#2563EB] selection:text-white">
      {/* Sleek Header Navigation */}
      <Header />

      {/* Smooth Mouse Following Spotlight & Parallax Engine */}
      <InteractiveCursor />

      {/* Animated Abstract Digital Service Background Stage */}
      <BackgroundStage />

      {/* Center Aligned Luxury Hero Content */}
      <HeroContent />

      {/* Retro Computer Box Project Videos Showcase */}
      <ProjectShowcase />

      {/* Minimalist Executive Footer */}
      <Footer />
    </main>
  );
}
