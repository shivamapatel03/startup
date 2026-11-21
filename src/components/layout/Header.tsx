"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
  {
    title: "Content Creation",
    description: "Engaging visual stories, brand assets, and digital media.",
    href: "/#services",
    characterImg: "/character/content.png",
    badgeBg: "bg-[#FFF4E5]",
    borderColor: "border-[#D97706]/20",
  },
];

const otherNavLinks = [
  { name: "Our Work", href: "/#our-work" },
  { name: "About Us", href: "/#about-us" },
  { name: "Hire Us", href: "/members" },
  { name: "Contact", href: "/#contact" },
];

function RollingText({
  text,
  className = "",
  active = false,
}: {
  text: string;
  className?: string;
  active?: boolean;
}) {
  return (
    <span
      className={`relative inline-flex flex-col overflow-hidden h-[21px] leading-[21px] select-none ${className}`}
    >
      <span
        className={`inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          active ? "-translate-y-full" : "group-hover:-translate-y-full"
        }`}
      >
        {text}
      </span>
      <span
        aria-hidden="true"
        className={`absolute top-full left-0 inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] font-semibold text-black ${
          active ? "-translate-y-full" : "group-hover:-translate-y-full"
        }`}
      >
        {text}
      </span>
    </span>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute top-[24px] md:top-[36px] left-0 right-0 z-50 w-full px-6 md:px-14 flex items-center justify-between pointer-events-auto"
      >
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
              className="group relative flex items-center gap-1.5 text-[15px] font-medium text-[#252525] hover:text-black transition-colors duration-200 cursor-pointer focus:outline-none py-1"
              aria-expanded={servicesOpen}
            >
              <RollingText text="Services" active={servicesOpen} />
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#666666] transition-transform duration-200 ${
                  servicesOpen
                    ? "rotate-180 text-black"
                    : "group-hover:text-black group-hover:translate-y-0.5"
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-[#181818] transition-all duration-300 ease-out rounded-full ${
                  servicesOpen ? "w-full" : "w-0 group-hover:w-full"
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
                  className="absolute top-full -left-16 sm:-left-20 lg:-left-24 pt-2.5 z-50 w-[540px] sm:w-[580px] max-w-[calc(100vw-2rem)] pointer-events-auto"
                >
                  <div className="bg-white rounded-xl border border-[#EAEAEA] shadow-[0_12px_32px_rgba(0,0,0,0.08)] p-3 sm:p-3.5">
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
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
            <Link
              key={link.name}
              href={link.href}
              className="group relative inline-flex items-center text-[15px] font-medium text-[#252525] hover:text-black transition-colors duration-200 py-1"
            >
              <RollingText text={link.name} />
              <span
                aria-hidden="true"
                className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#181818] transition-all duration-300 ease-out group-hover:w-full rounded-full"
              />
            </Link>
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
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden p-1.5 text-[#252525] hover:opacity-70 transition-opacity focus:outline-none bg-transparent border-none cursor-pointer"
          aria-label="Open navigation menu"
        >
          <Menu className="w-6 h-6 text-[#252525]" />
        </button>
      </motion.header>

      {/* Mobile Navigation Drawer: Slides in from the LEFT side with smooth close animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay — Smooth fade in/out, tap outside to close */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs lg:hidden"
            />

            {/* Slide-out Drawer Panel from Left */}
            <motion.div
              key="mobile-drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 bottom-0 z-50 w-[84vw] max-w-[340px] bg-white h-full shadow-2xl flex flex-col justify-between p-6 sm:p-7 lg:hidden overflow-y-auto"
            >
              <div>
                {/* Drawer Header: Logo on left, Simple Close button on right */}
                <div className="flex items-center justify-between pb-5 border-b border-[#F0F0F0]">
                  <BrandLogo showText={false} />
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 -mr-1.5 text-[#555555] hover:text-black hover:bg-[#F4F4F6] rounded-full transition-colors focus:outline-none cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-[#252525]" />
                  </button>
                </div>

                {/* Nav Links Stack */}
                <div className="flex flex-col gap-4 pt-6">
                  {/* Services Accordion with 3D Character Avatars */}
                  <div className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between text-[18px] font-semibold text-[#181818] hover:text-black transition-colors w-full text-left py-1"
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#888888] transition-transform duration-200 ${
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
                          className="overflow-hidden pl-2.5 pt-2 flex flex-col gap-3 border-l-2 border-[#EAEAEA] ml-1.5 my-2"
                        >
                          {servicesList.map((service) => (
                            <a
                              key={service.title}
                              href={service.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-start gap-2.5 py-1 group"
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
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1 text-[13.5px] font-semibold text-[#181818]">
                                  <span>{service.title}</span>
                                  <ArrowRight className="w-3 h-3 text-[#888888]" />
                                </div>
                                <p className="text-[11px] text-[#777777] line-clamp-1 mt-0.5">
                                  {service.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Other Links */}
                  {otherNavLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center justify-between text-[18px] font-semibold text-[#181818] hover:text-black transition-colors py-1.5"
                    >
                      <span className="relative inline-flex flex-col overflow-hidden h-[26px] leading-[26px]">
                        <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                          {link.name}
                        </span>
                        <span
                          aria-hidden="true"
                          className="absolute top-full left-0 inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full text-black"
                        >
                          {link.name}
                        </span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#888888] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Drawer Bottom CTA */}
              <div className="pt-6 border-t border-[#F0F0F0] mt-auto">
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
          </>
        )}
      </AnimatePresence>
    </>
  );
}
