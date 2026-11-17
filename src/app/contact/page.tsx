"use client";

import React, { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <main className="relative min-h-screen w-full bg-white text-[#111111] pt-24">
        <Header />
        <ContactSection />
        <Footer />
      </main>
    </Suspense>
  );
}
