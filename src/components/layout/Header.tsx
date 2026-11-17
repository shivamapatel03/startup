"use client";

import React, { useState, useEffect, useRef } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Palette,
  Smartphone,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const servicesList = [
  {
    title: "App Design",
    description:
      "Intuitive mobile UI/UX and interactive prototypes that make your product impossible to forget.",
    href: "/#services",
    icon: Palette,
    badgeBg: "bg-[#7C3AED]",
  },
  {
    title: "App Development",
    description:
      "Scalable native and cross-platform iOS & Android mobile applications built for performance.",
    href: "/#services",
    icon: Smartphone,
    badgeBg: "bg-[#2563EB]",
  },
  {
    title: "Web Development",
    description:
      "Fast, responsive, and modern websites that strengthen your brand and help your business grow.",
    href: "/#services",
    icon: Globe,
    badgeBg: "bg-[#E11D48]",
  },
];

const otherNavLinks = [
  { name: "Our Work", href: "/#our-work" },
  { name: "About Us", href: "/#about-us" },
  { name: "Contact", href: "/#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 180);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Absolute Header (Not Fixed: Scrolls with the page and disappears upon scroll) */}
      <header className="absolute top-[24px] md:top-[36px] left-0 right-0 z-50 w-full px-6 md:px-14 flex items-center justify-between pointer-events-auto">
        {/* Left Section — Brand Logo (Icon only in navbar) */}
        <div className="flex items-center">
          <BrandLogo showText={false} />
        </div>

        {/* Center Section — Stripe-style clean navigation with Services Mega Dropdown */}
        <nav className="hidden lg:flex items-center gap-7 md:gap-9">
          {/* Services Dropdown Item */}
          <div
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative py-2"
          >
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1.5 text-[15px] font-medium text-[#252525] hover:text-black transition-colors duration-200 cursor-pointer focus:outline-none"
              aria-expanded={servicesOpen}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#666666] transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-black" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu (Matches Figmafy style with 3 services) */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.16, ease: "easeOut" }}
                  className="absolute top-full -left-10 lg:-left-16 pt-3.5 z-50 w-[780px] lg:w-[820px] max-w-[calc(100vw-3rem)] pointer-events-auto"
                >
                  <div className="bg-white rounded-2xl border border-[#EAEAEA] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 md:p-7">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {servicesList.map((service) => (
                        <a
                          key={service.title}
                          href={service.href}
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-start gap-3.5 p-3.5 -m-2 rounded-xl hover:bg-[#F9FAFB] transition-colors duration-200 text-left"
                        >
                          {/* Circular Icon Badge */}
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${service.badgeBg} shadow-sm group-hover:scale-105 transition-transform duration-200 mt-0.5`}
                          >
                            <service.icon className="w-5 h-5 text-white" />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 text-[15px] font-semibold text-[#181818] group-hover:text-black">
                              <span>{service.title}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-black group-hover:translate-x-1 transition-all duration-200" />
                            </div>
                            <p className="mt-1.5 text-[13px] text-[#666666] leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Nav Links */}
          {otherNavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-[#252525] hover:text-black/60 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Section — Standalone "Let's Talk" CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <PrimaryButton href="#contact" size="header" variant="dark">
            Let&apos;s Talk
          </PrimaryButton>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1 text-[#252525] hover:opacity-70 transition-opacity focus:outline-none bg-transparent border-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-[#252525]" />
          ) : (
            <Menu className="w-6 h-6 text-[#252525]" />
          )}
        </button>
      </header>

      {/* Full-Screen Mobile Navigation Overlay - Simple White Background Blur */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl flex flex-col justify-between px-8 py-10 lg:hidden overflow-y-auto"
          >
            {/* Header: Clean Close Button */}
            <div className="flex items-center justify-end pt-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-[#252525] hover:opacity-70 transition-opacity focus:outline-none cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-[#252525]" />
              </button>
            </div>

            {/* Nav list - Clean simple links with mobile Services Accordion */}
            <div className="flex flex-col gap-5 my-auto">
              {/* Mobile Services Accordion */}
              <div className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between text-2xl font-medium tracking-tight text-[#252525] hover:text-black/60 transition-colors w-full text-left py-1"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#666666] transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180 text-black" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-3 pt-2 flex flex-col gap-3.5 border-l-2 border-[#EAEAEA] ml-1 my-2"
                    >
                      {servicesList.map((service) => (
                        <a
                          key={service.title}
                          href={service.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="flex items-start gap-3 py-1 group"
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${service.badgeBg} shadow-sm mt-0.5`}
                          >
                            <service.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1 text-[15px] font-semibold text-[#181818]">
                              <span>{service.title}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#888888]" />
                            </div>
                            <p className="text-[12px] text-[#777777] line-clamp-1 mt-0.5">
                              {service.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {otherNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-medium tracking-tight text-[#252525] hover:text-black/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="pt-4">
              <PrimaryButton
                href="#contact"
                size="default"
                variant="dark"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-between"
              >
                Let&apos;s Talk
              </PrimaryButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
