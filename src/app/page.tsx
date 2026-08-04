import React from "react";
import { Header } from "@/components/layout/Header";
import { InteractiveCursor } from "@/components/hero/InteractiveCursor";
import { BackgroundStage } from "@/components/hero/BackgroundStage";
import { HeroContent } from "@/components/hero/HeroContent";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "BE UNIC",
    alternateName: "BE UNIC Digital & AI Agency",
    description:
      "We craft intuitive UI/UX, scalable web applications, custom AI agents, and modern digital architectures that accelerate brand growth.",
    url: "https://beunicstudio.com",
    logo: "https://beunicstudio.com/icon.png",
    sameAs: ["https://www.linkedin.com/company/beunic-agency/"],
    knowsAbout: [
      "Web Development",
      "UI/UX Design",
      "AI Solutions",
      "Mobile Applications",
      "Brand Identity",
      "SEO & Growth",
      "Custom LLM Integrations",
    ],
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#050816] selection:bg-[#2563EB] selection:text-white">
      {/* Rich JSON-LD Organization Schema for Google Search & AI Knowledge Indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
