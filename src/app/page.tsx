import React from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "BE UNIC",
    alternateName: "BE UNIC App Design & Development Studio",
    description:
      "We design and develop exceptional websites, mobile applications, and digital products that help ambitious businesses innovate, scale, and stand out.",
    url: "https://beunicstudio.com",
    email: "beunicmark@gmail.com",
    sameAs: [
      "https://www.linkedin.com/company/beunic-agency",
      "https://www.instagram.com/beunic.agency/",
    ],
    knowsAbout: [
      "UI/UX Design",
      "Mobile App Development",
      "iOS Development",
      "Android Development",
      "Web Engineering",
      "Next.js Development",
      "React",
      "Digital Product Design",
      "SaaS Engineering",
    ],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  return (
    <main className="relative min-h-screen w-full bg-white text-[#111111] overflow-x-hidden">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Part 1 — Header / Navigation */}
      <Header />

      {/* Part 2 — Hero Section */}
      <HeroSection />

      {/* Part 3 — 3D Character Services Section ("How We Bring Your Ideas to Life") */}
      <ServicesSection />

      {/* Part 4 — Our Latest Work ("Our Latest Work") */}
      <PortfolioSection />

      {/* Part 5 — About Us Section */}
      <AboutSection />

      {/* Part 6 — Contact / Project Inquiry ("Let's Build Something Great Together") */}
      <ContactSection />

      {/* Part 7 — Footer */}
      <Footer />
    </main>
  );
}
