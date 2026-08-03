"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InteractiveCursor } from "@/components/hero/InteractiveCursor";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

function ContactFormCard() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (service) {
      setMessage(`Hi BE UNIC team,\n\nI would like to initiate a conversation regarding a ${service} project. Here are our initial goals:\n`);
    }
  }, [service]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Active Formspree endpoint for BE UNIC agency project inquiries
    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_URL || "https://formspree.io/f/xwvggqpj";

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setMessage("");
      } else {
        const result = await res.json();
        setError(result?.error || "There was a problem submitting your form. Please try again.");
      }
    } catch (err) {
      setError("Unable to connect. Please check your internet connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[390px] sm:max-w-[420px] bg-white text-[#0B0F19] rounded-[22px] shadow-[0_25px_70px_rgba(0,0,0,0.75)] p-6 sm:p-7 border border-white relative"
    >
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-center text-center py-6 gap-3"
        >
          <div className="w-12 h-12 rounded-full bg-[#0B0F19] text-white flex items-center justify-center shadow-md">
            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold font-outfit text-[#0B0F19]">Message Received</h3>
          <p className="text-slate-600 font-medium text-[13px] max-w-[280px] leading-relaxed">
            Thank you! Our design & product team will contact you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-3 px-6 py-2 rounded-full text-[13px] font-semibold bg-slate-100 hover:bg-slate-200 text-[#0B0F19] transition-colors duration-200"
          >
            Send Another
          </button>
        </motion.div>
      ) : (
        <>
          {/* Compact Card Header */}
          <div className="mb-4 text-left">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase font-outfit block mb-1">
              {service ? `${service} Inquiry` : "Initiate Conversation"}
            </span>
            <h1 className="text-2xl sm:text-[26px] font-bold font-outfit text-[#0B0F19] leading-tight tracking-tight mb-1">
              Start Your Project
            </h1>
            <p className="text-slate-500 font-normal text-[13px] leading-snug">
              {service
                ? `Inquire about our ${service} deliverables, architectures, and timelines.`
                : "Tell us about your brand vision or digital goals."}
            </p>
          </div>

          {/* Compact Form Controls */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-left font-outfit">
            {/* Formspree Email Subject Tag */}
            <input
              type="hidden"
              name="_subject"
              value={service ? `New ${service} Inquiry - BE UNIC Website` : "New Project Inquiry - BE UNIC Website"}
            />

            <div>
              <label htmlFor="name" className="block text-[11px] font-bold text-[#0B0F19] mb-1 uppercase tracking-wider">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={submitting}
                placeholder="e.g. Alex Rivera"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-black/10 focus:border-[#0B0F19] text-[#0B0F19] text-[13px] font-medium placeholder:text-slate-400 outline-none transition-all duration-200 disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[11px] font-bold text-[#0B0F19] mb-1 uppercase tracking-wider">
                Work Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={submitting}
                placeholder="alex@company.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-black/10 focus:border-[#0B0F19] text-[#0B0F19] text-[13px] font-medium placeholder:text-slate-400 outline-none transition-all duration-200 disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[11px] font-bold text-[#0B0F19] mb-1 uppercase tracking-wider">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={submitting}
                placeholder="Key milestones or design goals..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-black/10 focus:border-[#0B0F19] text-[#0B0F19] text-[13px] font-medium placeholder:text-slate-400 outline-none resize-none transition-all duration-200 disabled:opacity-50"
              ></textarea>
            </div>

            {error && (
              <div className="text-[12px] text-red-600 font-medium bg-red-50 p-2.5 rounded-lg border border-red-200">
                {error}
              </div>
            )}

            {/* Compact Black Action Submit Button with White Cross Arrow */}
            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={submitting ? {} : { scale: 1.02 }}
              whileTap={submitting ? {} : { scale: 0.98 }}
              className="w-full mt-1 py-3 px-6 rounded-full bg-[#0B0F19] text-white hover:bg-black font-bold text-[14px] transition-all duration-300 shadow-[0_6px_20px_rgba(11,15,25,0.35)] flex items-center justify-center gap-2 group disabled:opacity-75 disabled:cursor-not-allowed"
            >
              <span>{submitting ? "Sending..." : "Submit Inquiry"}</span>
              <div className="w-5 h-5 rounded-full bg-white/15 text-white flex items-center justify-center transition-transform duration-300 group-hover:bg-white/25">
                <ArrowUpRight className={`w-3.5 h-3.5 text-white transition-transform duration-300 ${submitting ? "animate-spin" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
              </div>
            </motion.button>
          </form>
        </>
      )}
    </motion.div>
  );
}

export default function ContactPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <main className="relative h-screen max-h-screen w-full overflow-hidden bg-[#050816] selection:bg-[#2563EB] selection:text-white flex flex-col justify-between">
      {/* Sleek Header Navigation */}
      <Header />

      {/* Smooth Mouse Following Spotlight & Parallax Engine */}
      <InteractiveCursor />

      {/* Background Stage: Same Cinematic Video from Hero Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#050816]">
        <video
          ref={videoRef}
          onLoadedData={() => {
            if (videoRef.current) videoRef.current.playbackRate = 0.6;
          }}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        >
          <source src="/video/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/50 via-[#050816]/40 to-[#050816]/95 pointer-events-none" />
      </div>

      {/* Centered Compact Luxury Card Section (Zero Scroll) */}
      <section className="relative z-10 flex-1 flex items-center justify-center px-4 pt-16 sm:pt-20 overflow-hidden">
        <Suspense fallback={<div className="w-full max-w-[390px] sm:max-w-[420px] h-[420px] bg-white rounded-[22px] shadow-[0_25px_70px_rgba(0,0,0,0.75)] animate-pulse" />}>
          <ContactFormCard />
        </Suspense>
      </section>

      {/* Compact Transparent Sleek Footer */}
      <div className="relative z-20 w-full shrink-0">
        <Footer transparent noBorder compact />
      </div>
    </main>
  );
}
