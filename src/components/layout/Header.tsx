"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Boxes, Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import beUnicLogo from "../../logo/Frame 18 (2).png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [mobileAiOpen, setMobileAiOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 15;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Services", "AI Solutions", "Contact"];

  const serviceItems = [
    { name: "Web Development", href: "/contact?service=Web+Development" },
    { name: "UI/UX Design", href: "/contact?service=UI%2FUX+Design" },
    { name: "AI Solutions", href: "/contact?service=AI+Solutions" },
    { name: "Mobile Applications", href: "/contact?service=Mobile+Applications" },
    { name: "Brand Identity", href: "/contact?service=Brand+Identity" },
    { name: "SEO & Growth", href: "/contact?service=SEO+%26+Growth" },
  ];

  const getHref = (item: string) => {
    if (item === "Contact") return "/contact";
    return `/#${item.toLowerCase().replace(" ", "-")}`;
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-black border-b border-white/[0.1] shadow-[0_4px_30px_rgba(0,0,0,0.85)]"
          : "bg-transparent"
      } text-white`}
    >
      <div
        className={`flex items-center justify-between px-6 md:px-12 relative z-20 max-w-7xl mx-auto transition-all duration-300 ${
          scrolled ? "py-2 sm:py-2.5" : "py-5 sm:py-6"
        }`}
      >
        {/* Left: Brand / Logo (Links to home) */}
        <a href="/" className="flex items-center cursor-pointer group focus:outline-none">
          <Image
            src={beUnicLogo}
            alt="BE UNIC Logo"
            className="h-9 sm:h-[42px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </a>

        {/* Center: Minimalist Desktop Navigation Links with Services Dropdown */}
        <nav className="hidden lg:flex items-center gap-9 text-[15px] font-normal text-slate-200/80">
          {navItems.map((item) => {
            if (item === "About") {
              return (
                <div
                  key={item}
                  className="relative group"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <button
                    onClick={() => setAboutOpen(!aboutOpen)}
                    className="flex items-center gap-1.5 hover:text-white py-2 focus:outline-none"
                  >
                    <span>{item}</span>
                    <ChevronDown className={`w-3.5 h-3.5 ${aboutOpen ? "rotate-180 text-white" : "text-slate-400"}`} />
                  </button>

                  {/* Simple White Card with Black Text - No Glass Effect, No Shadow, No Animation */}
                  {aboutOpen && (
                    <div className="absolute top-full left-0 mt-1 w-[320px] bg-white text-black p-5 border border-neutral-300 rounded z-50 text-left">
                      <h4 className="font-bold text-black font-outfit text-[17px] mb-2">
                        Why BE UNIC?
                      </h4>
                      <p className="text-[13.5px] text-neutral-800 leading-normal mb-4 font-normal">
                        We are a creative digital and engineering agency built for high-growth brands, merging state-of-the-art AI design with flawless technical execution.
                      </p>
                      <a
                        href="https://www.linkedin.com/company/beunic-agency/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setAboutOpen(false)}
                        className="inline-block w-full text-center bg-black hover:bg-neutral-900 text-white font-semibold py-2 px-4 rounded text-[13.5px]"
                      >
                        Explore Our Story
                      </a>
                    </div>
                  )}
                </div>
              );
            }

            if (item === "Services") {
              return (
                <div
                  key={item}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center gap-1.5 hover:text-white transition-colors duration-200 py-2 focus:outline-none"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-white" : "text-slate-400"}`} />
                  </button>

                  {/* Simple White Services Dropdown with Black Text - No Glass Effect, No Shadow, No Animation */}
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-[260px] bg-white text-black border border-neutral-300 rounded p-2 z-50 flex flex-col gap-1 text-left">
                      {serviceItems.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center justify-between px-3.5 py-2.5 rounded bg-white hover:bg-neutral-100 text-black border border-transparent hover:border-neutral-200 transition-colors group/item"
                        >
                          <span className="text-[14px] font-semibold text-black font-outfit tracking-tight">
                            {service.name}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover/item:text-black shrink-0 ml-2" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (item === "AI Solutions") {
              return (
                <div
                  key={item}
                  className="relative group"
                  onMouseEnter={() => setAiOpen(true)}
                  onMouseLeave={() => setAiOpen(false)}
                >
                  <button
                    onClick={() => setAiOpen(!aiOpen)}
                    className="flex items-center gap-1.5 hover:text-white py-2 focus:outline-none"
                  >
                    <span>{item}</span>
                    <ChevronDown className={`w-3.5 h-3.5 ${aiOpen ? "rotate-180 text-white" : "text-slate-400"}`} />
                  </button>

                  {/* Simple White Card with Black Text - No Glass Effect, No Shadow, No Animation */}
                  {aiOpen && (
                    <div className="absolute top-full -left-10 mt-1 w-[320px] bg-white text-black p-5 border border-neutral-300 rounded z-50 text-left">
                      <h4 className="font-bold text-black font-outfit text-[16px] mb-2">
                        Intelligent AI Systems
                      </h4>
                      <p className="text-[13.5px] text-neutral-800 leading-normal mb-4 font-normal">
                        Empower your business with custom AI agents, automated workflows, and advanced enterprise AI integrations tailored to scale your brand.
                      </p>
                      <a
                        href="/contact"
                        onClick={() => setAiOpen(false)}
                        className="inline-block w-full text-center bg-black hover:bg-neutral-900 text-white font-semibold py-2 px-4 rounded text-[13.5px]"
                      >
                        Request AI Consultation
                      </a>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={item}
                href={getHref(item)}
                className="hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            );
          })}
        </nav>

        {/* Right: Clean White Action Button + Mobile Burger Trigger */}
        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="hidden sm:inline-flex px-6 py-2.5 rounded-full text-[14px] font-medium text-[#0B0F19] bg-white hover:bg-slate-100 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:scale-105"
          >
            Start Project
          </a>

          {/* Styled Circular Burger Toggle Button for Mobile / Tablet view */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white/[0.12] transition-all flex items-center justify-center focus:outline-none shadow-sm"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white transition-transform duration-300 transform rotate-90" />
            ) : (
              <Menu className="w-5 h-5 text-white transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute top-full left-0 right-0 overflow-hidden bg-black border-b border-white/[0.1] shadow-[0_30px_70px_rgba(0,0,0,0.85)]"
          >
            <nav className="flex flex-col px-8 pt-6 pb-9 gap-5 text-[22px] font-semibold text-white">
              {navItems.map((item) => {
                if (item === "About") {
                  return (
                    <div key={item} className="border-b border-white/[0.08] pb-4 last:border-0 last:pb-0">
                      <button
                        onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                        className="w-full flex items-center justify-between hover:text-[#38BDF8] transition-colors text-[22px] font-semibold font-outfit text-left focus:outline-none"
                      >
                        <span>{item}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileAboutOpen ? "rotate-180 text-[#38BDF8]" : "text-slate-400"}`} />
                      </button>

                      {/* Simple Solid White Card for Mobile About - No Animation, No Shadow */}
                      {mobileAboutOpen && (
                        <div className="mt-3 bg-white text-black p-5 border border-neutral-300 rounded text-left">
                          <h4 className="font-bold text-black font-outfit text-[17px] mb-2">
                            Why BE UNIC?
                          </h4>
                          <p className="text-[14px] text-neutral-800 leading-relaxed mb-4 font-normal">
                            We are a creative digital and engineering agency built for high-growth brands, merging state-of-the-art AI design with flawless technical execution.
                          </p>
                          <a
                            href="https://www.linkedin.com/company/beunic-agency/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                              setMobileAboutOpen(false);
                              setMobileMenuOpen(false);
                            }}
                            className="block w-full text-center bg-black hover:bg-neutral-900 text-white font-semibold py-2.5 px-4 rounded text-[15px]"
                          >
                            Explore Our Story
                          </a>
                        </div>
                      )}
                    </div>
                  );
                }

                if (item === "Services") {
                  return (
                    <div key={item} className="border-b border-white/[0.08] pb-4 last:border-0 last:pb-0">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between hover:text-[#38BDF8] transition-colors text-[22px] font-semibold font-outfit text-left focus:outline-none"
                      >
                        <span>{item}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-[#38BDF8]" : "text-slate-400"}`} />
                      </button>

                      {/* Simple Solid White Card for Mobile Services - No Animation, No Shadow */}
                      {mobileServicesOpen && (
                        <div className="mt-3 bg-white text-black p-3 border border-neutral-300 rounded flex flex-col gap-1 text-left">
                          {serviceItems.map((service) => (
                            <a
                              key={service.name}
                              href={service.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center justify-between px-3 py-2.5 rounded bg-white hover:bg-neutral-100 text-black border border-transparent hover:border-neutral-200 transition-colors"
                            >
                              <span className="text-[16px] font-semibold tracking-tight font-outfit text-black">
                                {service.name}
                              </span>
                              <ArrowUpRight className="w-4 h-4 text-neutral-600 shrink-0" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (item === "AI Solutions") {
                  return (
                    <div key={item} className="border-b border-white/[0.08] pb-4 last:border-0 last:pb-0">
                      <button
                        onClick={() => setMobileAiOpen(!mobileAiOpen)}
                        className="w-full flex items-center justify-between text-[22px] font-semibold font-outfit text-left focus:outline-none"
                      >
                        <span>{item}</span>
                        <ChevronDown className={`w-5 h-5 ${mobileAiOpen ? "rotate-180 text-[#38BDF8]" : "text-slate-400"}`} />
                      </button>

                      {/* Simple Solid White Card for Mobile - No Animation, No Shadow, No Glass Effect */}
                      {mobileAiOpen && (
                        <div className="mt-3 bg-white text-black p-5 border border-neutral-300 rounded text-left">
                          <h4 className="font-bold text-black font-outfit text-[17px] mb-2">
                            Intelligent AI Systems
                          </h4>
                          <p className="text-[14px] text-neutral-800 leading-relaxed mb-4 font-normal">
                            Empower your business with custom AI agents, automated workflows, and advanced enterprise AI integrations tailored to scale your brand.
                          </p>
                          <a
                            href="/contact"
                            onClick={() => {
                              setMobileAiOpen(false);
                              setMobileMenuOpen(false);
                            }}
                            className="block w-full text-center bg-black hover:bg-neutral-900 text-white font-semibold py-2.5 px-4 rounded text-[15px]"
                          >
                            Request AI Consultation
                          </a>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={item}
                    href={getHref(item)}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#38BDF8] transition-colors pb-4 border-b border-white/[0.08] last:border-0 last:pb-0 block font-outfit"
                  >
                    {item}
                  </a>
                );
              })}

              {/* Prominent Action Button for Mobile & Small Screen Users */}
              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full mt-3 py-4 px-6 rounded-full text-[17px] font-bold text-[#0B0F19] bg-white hover:bg-slate-100 transition-all duration-300 shadow-[0_4px_25px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2 font-outfit"
              >
                <span>Start Project / Contact Us</span>
                <ArrowUpRight className="w-5 h-5 text-[#0B0F19]" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
