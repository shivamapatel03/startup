"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Static imports for client logos from src/clients
import logo1 from "@/clients/logo 1 [Vectorized].png";
import logo2 from "@/clients/LOGO 9 1.png";
import logo3 from "@/clients/For whatsapp, instagram, facebook (1) 1.png";

export function ClientLogos() {
  const clients = [
    { 
      name: "Star Woods Resort", 
      src: logo1, 
      url: "https://starwoodsresort.com/" 
    },
    { 
      name: "Client Partner 2", 
      src: logo2, 
      url: null 
    },
    { 
      name: "New Ujaval Trading", 
      src: logo3, 
      url: "https://newujavaltrading.co.in/" 
    },
  ];

  return (
    <section className="relative z-20 w-full bg-[#080C16] py-24 px-6 sm:px-12 border-t border-white/[0.08] shadow-[0_-25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
      {/* Background Ambient Studio Lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center relative z-10">
        
        {/* Section Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-2 mb-14 w-full text-center"
        >
          <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.25em] text-slate-400 uppercase font-outfit">
            Trusted By Innovative Brands & Industry Leaders
          </span>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent mt-2" />
        </motion.div>

        {/* Executive Client Showcase Roster */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-12 sm:gap-20 lg:gap-28 w-full max-w-5xl"
        >
          {clients.map((client, index) => {
            const content = (
              <div className="relative w-56 sm:w-64 md:w-72 h-20 sm:h-24 md:h-28 flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={`${client.name} Logo`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain hover:scale-105 transition-transform duration-300 filter drop-shadow"
                />
              </div>
            );

            return client.url ? (
              <motion.a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="block cursor-pointer group"
                title={`Visit ${client.name}`}
              >
                {content}
              </motion.a>
            ) : (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="block cursor-default group"
              >
                {content}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
