"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Boxes, Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 15;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Services", "AI Solutions", "Process", "Contact"];

  const serviceItems = [
    { name: "Web Development", href: "/#web-development" },
    { name: "UI/UX Design", href: "/#ui-ux-design" },
    { name: "AI Solutions", href: "/#ai-solutions" },
    { name: "Mobile Applications", href: "/#mobile-apps" },
    { name: "Brand Identity", href: "/#brand-identity" },
    { name: "SEO & Growth", href: "/#seo-growth" },
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
        <a href="/" className="flex items-center gap-2.5 cursor-pointer group">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:bg-white/20 transition-colors">
            <Boxes className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight font-outfit text-white">
            Spiral
          </span>
        </a>

        {/* Center: Minimalist Desktop Navigation Links with Services Dropdown */}
        <nav className="hidden lg:flex items-center gap-9 text-[15px] font-normal text-slate-200/80">
          {navItems.map((item) => {
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

                  {/* Sleek Services Dropdown with Small Black Cards */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-full left-0 -mt-1 w-[260px] bg-black/95 backdrop-blur-2xl border border-white/10 p-2.5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] z-50 flex flex-col gap-1.5"
                      >
                        {serviceItems.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-black hover:bg-[#1C1F2D] border border-white/[0.08] hover:border-white/[0.22] text-white transition-all duration-200 group/item shadow-sm"
                          >
                            <span className="text-[14px] font-semibold text-white font-outfit tracking-tight">
                              {service.name}
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/item:text-white group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all duration-200 shrink-0 ml-2" />
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
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

                      {/* Mobile Services Dropdown Cards */}
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden mt-3.5 flex flex-col gap-2.5"
                          >
                            {serviceItems.map((service) => (
                              <a
                                key={service.name}
                                href={service.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-between px-4 py-3 rounded-xl bg-black hover:bg-[#1C1F2D] border border-white/[0.1] text-white transition-colors duration-200 shadow-sm"
                              >
                                <span className="text-[16px] font-semibold tracking-tight font-outfit text-white">
                                  {service.name}
                                </span>
                                <ArrowUpRight className="w-4 h-4 text-white shrink-0" />
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
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
