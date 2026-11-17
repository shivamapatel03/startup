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
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://beunicstudio.com/#organization",
        name: "BE UNIC",
        alternateName: "BE UNIC Design & Development Studio",
        url: "https://beunicstudio.com",
        logo: "https://beunicstudio.com/icon.png",
        email: "beunicmark@gmail.com",
        sameAs: [
          "https://www.linkedin.com/company/beunic-agency",
          "https://www.instagram.com/beunic.agency/",
          "https://dribbble.com/shivam-patel",
        ],
        founder: [
          {
            "@type": "Person",
            name: "Shivam Patel",
            jobTitle: "Engineering Head",
            sameAs: "https://www.linkedin.com/in/shivam-patel",
          },
          {
            "@type": "Person",
            name: "Swayam Shah",
            jobTitle: "Design Head",
            sameAs: "https://www.linkedin.com/in/swayam-shah",
          },
          {
            "@type": "Person",
            name: "Om Patel",
            jobTitle: "Creative Head",
            sameAs: "https://www.linkedin.com/in/om-patel-29a25b357/",
          },
          {
            "@type": "Person",
            name: "Pramukh Prajapati",
            jobTitle: "Systems Head",
            sameAs: "https://www.linkedin.com/in/pramukhprajapati17/",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://beunicstudio.com/#website",
        url: "https://beunicstudio.com",
        name: "BE UNIC",
        description:
          "BE UNIC is a premier app design & software engineering studio crafting high-impact digital products.",
        publisher: {
          "@id": "https://beunicstudio.com/#organization",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://beunicstudio.com/#service",
        name: "BE UNIC App Design & Development",
        url: "https://beunicstudio.com",
        parentOrganization: {
          "@id": "https://beunicstudio.com/#organization",
        },
        description:
          "We design and develop exceptional mobile applications, intuitive interfaces, and scalable websites that help ambitious businesses innovate, scale, and stand out.",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
        knowsAbout: [
          "UI/UX Design",
          "Mobile App Development",
          "iOS Development",
          "Android Development",
          "Web Engineering",
          "Next.js Development",
          "React Native",
          "Digital Product Design",
          "SaaS Engineering",
        ],
      },
    ],
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
