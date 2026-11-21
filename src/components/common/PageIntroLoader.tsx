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

    // Show black screen with simple BE logo for ~1.8s, then slide upwards off-screen by 2s
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
          className="fixed inset-0 z-[99999] bg-[#000000] flex items-center justify-center select-none overflow-hidden pointer-events-auto"
        >
          {/* Simple Clean BE Logo (No extra text, no gradient) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.95,
              transition: { duration: 0.25, ease: "easeIn" },
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center"
          >
            <Image
              src="/new.png"
              alt="BE Logo"
              width={112}
              height={112}
              priority
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
