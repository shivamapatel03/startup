"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const consent = localStorage.getItem("beunic_cookie_consent");
      if (!consent) {
        // Subtle delay for a polished entry after initial load
        const timer = setTimeout(() => {
          setVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback if localStorage is inaccessible
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("beunic_cookie_consent", "accepted");
    } catch {}
    setVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("beunic_cookie_consent", "declined");
    } catch {}
    setVisible(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie Preferences"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 sm:bottom-6 left-5 sm:left-6 z-50 max-w-[360px] sm:max-w-[390px] w-[calc(100vw-2.5rem)] bg-white border border-[#EAEAEA] rounded-[22px] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.12)] text-[#181818]"
        >
          {/* Top Row: Icon + Title + Close */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FFF5EA] text-[#D97706] flex items-center justify-center shrink-0">
                <Cookie className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-[14.5px] text-[#111111] tracking-tight">
                Cookie Preferences
              </h3>
            </div>

            <button
              onClick={handleDecline}
              aria-label="Close cookie banner"
              className="text-[#999999] hover:text-[#181818] p-1 rounded-full hover:bg-[#F5F5F7] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Description */}
          <p className="mt-3 text-[12.5px] sm:text-[13px] text-[#666666] leading-relaxed">
            We use cookies to improve your browsing experience, analyze site performance, and personalize content.
          </p>

          {/* Actions */}
          <div className="mt-4 flex items-center gap-2.5">
            <button
              onClick={handleAccept}
              className="flex-1 bg-[#222222] hover:bg-black text-white text-[12.5px] font-medium py-2 px-3.5 rounded-full transition-colors shadow-sm text-center"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="bg-[#F5F5F7] hover:bg-[#EAEAEA] text-[#555555] hover:text-[#181818] text-[12.5px] font-medium py-2 px-3.5 rounded-full transition-colors text-center"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
