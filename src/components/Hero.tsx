"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] bg-[#0A0A0A] text-white border-b border-[#262626] flex items-center overflow-hidden pt-20">
      {/* Subtle architectural grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Visual Card: Hidden on mobile to prevent overlap, shown cleanly on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:block lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] w-full bg-[#121212] border border-[#262626] overflow-hidden">
            <img
              src="/images/hero-nib.jpg"
              alt="GRASTER Professional Graffiti Markers & Squeeze Mops"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 border border-[#262626] bg-[#0A0A0A]/90 backdrop-blur-sm p-3.5 font-mono text-[10px] leading-relaxed tracking-widest uppercase">
              <div className="text-[#D4FF00] font-bold">FLOWS SERIES //</div>
              <div className="text-white/80">HIGH-FLOW SQUEEZE MOPS &amp; ARCHIVAL PAINT</div>
            </div>
          </div>
        </motion.div>

        {/* Main Typography & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="inline-block w-fit border border-[#262626] bg-[#121212] px-3.5 py-2 font-mono text-[11px] tracking-widest text-[#D4FF00] uppercase mb-6">
            [ GRA/FFITI MA/STER // EST. 2020 ]
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.92] mb-6">
            ENGINEERED
            <br />
            FOR THE
            <br />
            STREETS.
          </h1>

          <p className="text-base sm:text-lg text-white/75 max-w-xl leading-relaxed mb-8">
            High-opacity paint markers, squeeze mops, and archival acrylics built by writers, for writers. Start your graffiti life.
          </p>

          {/* Mobile Hero Product Strip (visible only on mobile/tablet) */}
          <div className="lg:hidden mb-8 border border-[#262626] bg-[#121212] overflow-hidden">
            <div className="relative h-48 w-full">
              <img
                src="/images/hero-nib.jpg"
                alt="GRASTER Graffiti Markers"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2.5 left-2.5 bg-[#0A0A0A]/90 border border-[#262626] px-2.5 py-1 font-mono text-[10px] text-[#D4FF00] uppercase tracking-widest">
                FLOWS &amp; WILDER // 0.7MM–50MM
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#products"
              className="bg-white text-[#0A0A0A] hover:bg-[#D4FF00] font-mono text-xs font-bold tracking-widest uppercase px-7 py-4 flex items-center justify-center gap-2 transition-colors"
            >
              <span>EXPLORE LINEUP</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>
            <a
              href="#wholesale"
              className="border border-[#262626] bg-[#121212] hover:border-[#D4FF00] text-white hover:text-[#D4FF00] font-mono text-xs font-bold tracking-widest uppercase px-7 py-4 flex items-center justify-center gap-2 transition-colors"
            >
              <span>WHOLESALE INQUIRY</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#262626] font-mono">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">07+</div>
              <div className="text-[10px] text-[#888888] tracking-widest uppercase mt-1">HARDWARE LINES</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">36+</div>
              <div className="text-[10px] text-[#888888] tracking-widest uppercase mt-1">HIGH-OPACITY COLORS</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#D4FF00]">ALL-SURFACE</div>
              <div className="text-[10px] text-[#888888] tracking-widest uppercase mt-1">CONCRETE · METAL · GLASS</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
