"use client";

import React, { useEffect, useRef, useState } from "react";

export function BackgroundStage() {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    if (videoRef.current) {
      // Set playback speed to 60% for a smooth, slower cinematic feel
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  const handleLoadedData = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  };

  if (!mounted) {
    return <div className="absolute inset-0 bg-[#050816] transform-gpu" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#050816] transform-gpu will-change-transform select-none">
      {/* Fullscreen Background Video (slowed down to 0.6x speed & GPU accelerated) */}
      <video
        ref={videoRef}
        onLoadedData={handleLoadedData}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 transform-gpu will-change-transform"
      >
        <source src="/video/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Soft atmospheric overlay to maintain high contrast for typography and seamless edge blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/40 via-[#050816]/20 to-[#050816]/90 pointer-events-none transform-gpu" />
    </div>
  );
}
