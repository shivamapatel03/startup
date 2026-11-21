"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function PageIntroLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during the 2-second intro animation
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Show black screen with blue BE logo for ~1.8s, then slide upwards off-screen by 2s
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = originalOverflow || "unset";
    }, 1800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow || "unset";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="intro-curtain"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1], // Smooth agency curtain glide from bottom to top
            },
          }}
          className="fixed inset-0 z-[99999] bg-[#000000] flex flex-col items-center justify-center select-none overflow-hidden pointer-events-auto"
        >
          {/* Subtle Radiant Blue Glow in center */}
          <div
            aria-hidden="true"
            className="absolute w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle,rgba(82,168,255,0.25)_0%,rgba(82,168,255,0.05)_50%,transparent_75%)] blur-[70px] pointer-events-none"
          />

          {/* Centered Blue BE Logo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.78, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.94,
              transition: { duration: 0.28, ease: "easeIn" },
            }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 flex flex-col items-center gap-4"
          >
            {/* Logo Emblem with Electric Blue Drop Shadow Glow */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
              {/* Pulsing Blue Ambient Aura */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0.3 }}
                animate={{ scale: [0.85, 1.25, 1.05], opacity: [0.3, 0.75, 0] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-2xl bg-[#52A8FF]/20 blur-md pointer-events-none"
              />

              {/* BE Logo Graphic */}
              <div className="relative w-full h-full drop-shadow-[0_0_28px_rgba(82,168,255,0.85)] flex items-center justify-center">
                <Image
                  src="/new.png"
                  alt="BE UNIC"
                  width={96}
                  height={96}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Glowing Blue Brand Subtitle */}
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.55 }}
              className="text-[#52A8FF] font-semibold text-[13.5px] tracking-[4px] uppercase font-mono drop-shadow-[0_0_14px_rgba(82,168,255,0.6)]"
            >
              BE UNIC
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
