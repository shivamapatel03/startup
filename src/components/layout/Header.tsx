"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const servicesList = [
  {
    title: "App Design",
    description: "Intuitive mobile UI/UX and interactive prototypes.",
    href: "/#services",
    characterImg: "/character/design.png",
    badgeBg: "bg-[#F0E9FF]",
    borderColor: "border-[#7C3AED]/20",
  },
  {
    title: "App Development",
    description: "Scalable iOS & Android apps built for performance.",
    href: "/#services",
    characterImg: "/character/appdev.png",
    badgeBg: "bg-[#E4F1FF]",
    borderColor: "border-[#2563EB]/20",
  },
  {
    title: "Web Development",
    description: "Fast, responsive modern websites that help you grow.",
    href: "/#services",
    characterImg: "/character/webdev.png",
    badgeBg: "bg-[#FFE8ED]",
    borderColor: "border-[#E11D48]/20",
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

        {/* Center Section — Stripe-style clean navigation with Compact Services Dropdown */}
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

            {/* Compact Dropdown Menu with 3 Character Avatars */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full -left-16 sm:-left-20 lg:-left-24 pt-2.5 z-50 w-[520px] sm:w-[540px] max-w-[calc(100vw-2rem)] pointer-events-auto"
                >
                  <div className="bg-white rounded-xl border border-[#EAEAEA] shadow-[0_12px_32px_rgba(0,0,0,0.08)] p-3 sm:p-3.5">
                    <div className="grid grid-cols-3 gap-2.5">
                      {servicesList.map((service) => (
                        <a
                          key={service.title}
                          href={service.href}
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#F8F9FA] transition-colors duration-200 text-left"
                        >
                          {/* 3D Character Avatar Badge */}
                          <div
                            className={`w-8 h-8 rounded-full overflow-hidden shrink-0 ${service.badgeBg} border ${service.borderColor} shadow-xs group-hover:scale-105 transition-transform duration-200 mt-0.5`}
                          >
                            <Image
                              src={service.characterImg}
                              alt={service.title}
                              width={32}
                              height={32}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1 text-[12.5px] sm:text-[13px] font-semibold text-[#181818] group-hover:text-black">
                              <span className="truncate">{service.title}</span>
                              <ArrowRight className="w-3 h-3 text-[#888888] group-hover:text-black group-hover:translate-x-0.5 transition-transform shrink-0" />
                            </div>
                            <p className="mt-0.5 text-[11px] text-[#666666] leading-snug line-clamp-2">
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
                            className={`w-7 h-7 rounded-full overflow-hidden shrink-0 ${service.badgeBg} border ${service.borderColor} shadow-xs mt-0.5`}
                          >
                            <Image
                              src={service.characterImg}
                              alt={service.title}
                              width={28}
                              height={28}
                              className="w-full h-full object-cover object-top"
                            />
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
