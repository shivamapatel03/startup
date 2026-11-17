"use client";

import React, { useState, useEffect } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Our Work", href: "#our-work" },
  { name: "About Us", href: "#about-us" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        {/* Center Section — Stripe-style clean navigation (no dark pill box) */}
        <nav className="hidden lg:flex items-center gap-7 md:gap-9">
          {navLinks.map((link) => (
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
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl flex flex-col justify-between px-8 py-10 lg:hidden"
          >
            {/* Header: Clean Close Button (Logo and Brand name removed) */}
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

            {/* Nav list - Clean simple links (Studio Active removed) */}
            <div className="flex flex-col gap-6 my-auto">
              {navLinks.map((link) => (
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
