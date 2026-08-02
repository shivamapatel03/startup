"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function InteractiveCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Set initial position to center of screen
    mouseX.set(typeof window !== "undefined" ? window.innerWidth / 2 : 500);
    mouseY.set(typeof window !== "undefined" ? window.innerHeight / 2 : 500);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden transform-gpu">
      {/* Primary soft blue/violet mouse spotlight */}
      <motion.div
        className="absolute -top-[350px] -left-[350px] w-[700px] h-[700px] rounded-full opacity-35 blur-[120px] mix-blend-screen transition-opacity duration-700"
        style={{
          x: smoothX,
          y: smoothY,
          background: "radial-gradient(circle, rgba(56,189,248,0.3) 0%, rgba(37,99,235,0.2) 35%, rgba(124,58,237,0.12) 65%, transparent 100%)",
        }}
      />
      {/* Secondary tight bright core accent */}
      <motion.div
        className="absolute -top-[150px] -left-[150px] w-[300px] h-[300px] rounded-full opacity-40 blur-[60px]"
        style={{
          x: smoothX,
          y: smoothY,
          background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(56,189,248,0.15) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
