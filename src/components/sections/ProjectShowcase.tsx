"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Monitor, Disc } from "lucide-react";

const projects = [
  {
    id: "01",
    name: "Starwoods Resort",
    url: "https://starwoodsresort.com/",
    videoSrc: "/Project/starwoods.mp4",
    tag: "RESORT & HOSPITALITY",
    model: "MAC-VGA // 1988",
  },
  {
    id: "02",
    name: "New Ujaval Trading",
    url: "https://newujavaltrading.co.in/",
    videoSrc: "/Project/ujaval.mp4",
    tag: "COMMERCE & TRADING",
    model: "CRT-COLOR // 1990",
  },
];

export function ProjectShowcase() {
  return (
    <section id="view-work" className="relative z-20 w-full pt-4 sm:pt-6 pb-16 sm:pb-20 overflow-hidden px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Editorial Subheading Divider */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12 max-w-2xl mx-auto w-full"
        >
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.24em] text-slate-300 uppercase px-2 font-outfit text-center">
            Featured Projects & Live Showcase
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </motion.div>

        {/* Retro Computer Box Row (Compact side-by-side layout) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-14 w-full">
          {projects.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative flex flex-col items-center cursor-pointer w-full max-w-[340px] sm:max-w-[370px]"
            >
              {/* === RETRO COMPUTER MONITOR CASING === */}
              <div className="w-full bg-[#E3DFC8] rounded-[22px] p-3.5 sm:p-4 border-4 border-[#C7C2AA] shadow-[0_20px_50px_rgba(0,0,0,0.85),inset_0_3px_6px_rgba(255,255,255,0.95),inset_0_-5px_10px_rgba(0,0,0,0.25)]">
                
                {/* Top Computer Frame Detail Header */}
                <div className="flex items-center justify-between px-1.5 pb-2 text-[#6D6854] font-mono text-[11px] uppercase tracking-wider font-bold">
                  <span>{project.model}</span>
                  <span className="text-emerald-700 bg-emerald-200/60 px-1.5 py-0.5 rounded text-[10px] shadow-sm border border-emerald-700/30 font-extrabold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping inline-block" />
                    ONLINE
                  </span>
                </div>

                {/* Inner Dark Monitor Bezel & Screen */}
                <div className="relative bg-[#111318] p-2 sm:p-2.5 rounded-xl border-2 border-[#A09A83] shadow-[inset_0_6px_16px_rgba(0,0,0,0.95)] overflow-hidden">
                  
                  {/* Glass Video Display */}
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-inner">
                    <video
                      src={project.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-lg filter contrast-[1.05]"
                    />

                    {/* Retro CRT Scanline Overlay & Glass Glare */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-25"
                      style={{
                        backgroundImage: "linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.4) 50%)",
                        backgroundSize: "100% 4px",
                      }}
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.15] rounded-lg" />

                    {/* Terminal Channel Overlay Badge */}
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[#38BDF8] text-[10px] font-mono font-bold uppercase tracking-wider border border-white/10 shadow-sm">
                      CH // {project.id}
                    </div>
                  </div>

                </div>

                {/* Bottom Monitor Chin with Ventilation Slot & Power LED */}
                <div className="mt-3 px-2 flex items-center justify-between">
                  {/* Simulated Floppy / Disk Drive Slot */}
                  <div className="w-24 h-2.5 bg-[#AAA38A] rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] border border-[#837B62]/60 flex items-center justify-end pr-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3D3A2C]" />
                  </div>

                  {/* Retro Embossed Brand Label */}
                  <span className="text-[11px] font-mono tracking-widest text-[#79735E] uppercase font-black select-none">
                    SPIRAL.SYS
                  </span>

                  {/* Classic Glowing Power LED */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-mono text-[#79735E] font-bold">PWR</span>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E] shadow-[0_0_10px_#22C55E] border border-emerald-800 animate-pulse" />
                  </div>
                </div>

              </div>

              {/* === MONITOR STAND BASE === */}
              <div className="w-28 h-3 bg-[#C7C2A9] rounded-b-xl shadow-md border-b-2 border-x-2 border-[#9B957E] -mt-1 z-0" />
              <div className="w-40 h-1.5 bg-[#B1AC94] rounded-full shadow-lg -mt-0.5 mb-5" />

              {/* === INTERACTIVE TITLE PILL BELOW COMPUTER === */}
              <div className="flex items-center justify-between w-full px-5 py-3 rounded-full bg-[#111420] group-hover:bg-white text-white group-hover:text-[#0B0F19] transition-all duration-300 border border-white/15 group-hover:border-white shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                <div className="flex flex-col text-left">
                  <span className="text-[15px] font-bold tracking-tight font-outfit">
                    {project.name}
                  </span>
                  <span className="text-[10px] text-slate-400 group-hover:text-slate-600 font-mono tracking-wider">
                    {project.tag}
                  </span>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#0B0F19] text-white flex items-center justify-center transition-colors duration-300 shrink-0 shadow-sm">
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </div>

            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
