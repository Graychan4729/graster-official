"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Ruler } from "lucide-react";

const NIB_SCALE_CHART = [
  { width: "0.7MM", shape: "EXTRA-FINE NEEDLE", series: "ACRYLIC", barPx: 3, specImg: "/images/specs/acrylic-07mm.jpg", capacity: "PRECISION BARREL", useCase: "Blackbook details, outlines & fine illustration" },
  { width: "2–3MM", shape: "BULLET NIB", series: "ACRYLIC", barPx: 7, specImg: "/images/specs/acrylic-2-3mm.jpg", capacity: "STANDARD STUDIO BODY", useCase: "Multi-surface sketching, layering & fills" },
  { width: "3MM", shape: "HARDENED STEEL BALL", series: "HUNTER", barPx: 8, specImg: "/images/specs/hunter-3mm.png", capacity: "HEAVY-DUTY SQUEEZE", useCase: "3D raised paint lines on concrete, rust & brick" },
  { width: "8MM", shape: "ANGLED CHISEL / FLAT", series: "WILDER / NEON", barPx: 14, specImg: "/images/specs/wilder-8mm.jpg", capacity: "PUMP-VALVE MARKER", useCase: "Sharp calligraphic handstyles & crisp tags" },
  { width: "10MM", shape: "ROUND MOHAIR / FLAT", series: "FLOWS / PURE / NEON / WILDER", barPx: 18, specImg: "/images/specs/flows-10mm.jpg", capacity: "30ML POCKET & 60ML STUBBY", useCase: "Controlled drips, agile street tags & block letters" },
  { width: "15MM", shape: "BROAD FLAT NIB", series: "WILDER", barPx: 26, specImg: "/images/specs/wilder-15mm.jpg", capacity: "CLASSIC STREET BODY", useCase: "All-round street tagging & fast medium fills" },
  { width: "18MM", shape: "WIDE ROUND MOHAIR", series: "FLOWS / PURE / NEON", barPx: 32, specImg: "/images/specs/flows-18mm.jpg", capacity: "60ML HIGH-CAPACITY", useCase: "Heavy street drips & bold broad-tip flow" },
  { width: "30MM", shape: "WIDE FLAT NIB", series: "WILDER", barPx: 48, specImg: "/images/specs/wilder-30mm.jpg", capacity: "HEAVY-DUTY BARREL", useCase: "Large throw-ups, bold block letters & high output" },
  { width: "50MM", shape: "ULTRA-WIDE FLAT NIB", series: "WILDER", barPx: 72, specImg: "/images/specs/wilder-50mm.jpg", capacity: "JUMBO RESERVOIR", useCase: "Maximum 50mm coverage for rapid large-scale fills" }
];
const TIMELINE = [
  { year: "2016", tag: "ORIGIN // SOUR COLLECTIVE", title: "BORN IN THE STREETS & STUDIO", detail: "Founded SOUR street culture collective and specialty graffiti supply hub—spending years field-testing global paints, mops, and inks across real walls, freight surfaces, and commercial murals." },
  { year: "2020", tag: "LAUNCH // GRASTER® LAB", title: "ENGINEERED BY WRITERS", detail: "Launched GRASTER with our flagship multi-surface ACRYLIC marker system—establishing strict standards for pigment opacity, nib durability, and consistent ink flow." },
  { year: "2022–2024", tag: "EXPANSION // FULL SIZE MATRIX", title: "FROM 0.7MM DETAIL TO 50MM FILLS", detail: "Expanded into FLOWS (30ml & 60ml stubby mops), WILDER (8mm chisel to 50mm flat), PURE low-odor series, UV-reactive NEON, and the 3mm steel-ball HUNTER." },
  { year: "PRESENT", tag: "GLOBAL // DEALER & REFILL NETWORK", title: "START YOUR GRAFFITI LIFE", detail: "Scaling 50ml, 100ml, and 350ml refill systems alongside international wholesale distribution for graffiti shops, art retailers, and writers worldwide." }
];

function SpecimenThumb({ src, alt, barPx }: { src: string; alt: string; barPx: number }) {
  const [err, setErr] = useState(false);
  if (!err) {
    return <img src={src} alt={alt} onError={() => setErr(true)} className="w-16 h-16 object-cover border border-[#262626] shrink-0" />;
  }
  return (
    <div className="w-16 h-16 bg-[#0A0A0A] border border-[#262626] flex items-center justify-center p-2 shrink-0">
      <div className="bg-[#D4FF00]" style={{ width: "100%", height: `${Math.min(28, Math.max(3, Math.round(barPx * 0.42)))}px` }} />
    </div>
  );
}

export default function TechAndHeritageSection() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <section id="tech" className="py-24 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#262626]">
            <div>
              <div className="font-mono text-xs tracking-widest text-[#D4FF00] uppercase mb-3">[ 02 // NIB &amp; CAPACITY ARCHITECTURE ]</div>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none">SIZE &amp; NIB CHART.</h2>
            </div>
            <div className="font-mono text-xs text-[#888888] flex items-center gap-2">
              <Ruler className="w-4 h-4 text-[#D4FF00]" />
              <span>0.7MM PRECISION TO 50MM BROAD COVERAGE // 30ML–350ML CAPACITIES</span>
            </div>
          </div>
          <div className="mt-12 border border-[#262626] bg-[#121212] divide-y divide-[#262626]">
            {NIB_SCALE_CHART.map((row, idx) => (
              <motion.div key={row.width} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.25, delay: idx * 0.04 }} className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4 p-5 sm:px-6 hover:bg-white/[0.02] transition-colors">
                <div className="lg:col-span-2 flex items-center gap-4">
                  <SpecimenThumb src={row.specImg} alt={row.width} barPx={row.barPx} />
                  <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">{row.width}</span>
                </div>
                <div className="lg:col-span-3 flex items-center">
                  <div className="w-full bg-[#0A0A0A] border border-[#262626] h-12 px-3 flex items-center">
                    <div className="bg-[#D4FF00] transition-all" style={{ width: `${Math.min(100, Math.max(6, row.barPx * 1.35))}%`, height: `${Math.min(28, Math.max(3, Math.round(row.barPx * 0.42)))}px` }} />
                  </div>
                </div>
                <div className="lg:col-span-3 font-mono text-xs">
                  <div className="text-white font-bold">{row.shape}</div>
                  <div className="text-[#888888] text-[11px] mt-0.5">{row.capacity}</div>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between gap-1">
                  <span className="font-mono text-[11px] text-[#D4FF00] font-bold">{row.series}</span>
                  <span className="text-xs text-white/75">{row.useCase}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 font-mono">
            <div className="border border-[#262626] bg-[#121212] p-5 flex items-center justify-between">
              <div><div className="text-[10px] text-[#888888] tracking-widest">POCKET PAINT REFILL</div><div className="text-xl font-black text-white mt-1">50ML FLASK</div></div>
              <span className="text-xs text-[#D4FF00] border border-[#D4FF00]/40 px-2.5 py-1">SOLVENT PAINT</span>
            </div>
            <div className="border border-[#262626] bg-[#121212] p-5 flex items-center justify-between">
              <div><div className="text-[10px] text-[#888888] tracking-widest">STUDIO ACRYLIC REFILL</div><div className="text-xl font-black text-white mt-1">100ML BOTTLE</div></div>
              <span className="text-xs text-[#D4FF00] border border-[#D4FF00]/40 px-2.5 py-1">WATER ACRYLIC</span>
            </div>
            <div className="border border-[#262626] bg-[#121212] p-5 flex items-center justify-between">
              <div><div className="text-[10px] text-[#888888] tracking-widest">BULK STREET REFILL</div><div className="text-xl font-black text-white mt-1">350ML BOTTLE</div></div>
              <span className="text-xs text-[#D4FF00] border border-[#D4FF00]/40 px-2.5 py-1">SOLVENT PAINT</span>
            </div>
          </div>
        </div>
      </section>
      <section id="family" className="py-24 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs tracking-widest text-[#D4FF00] uppercase mb-3">[ 03 // ORIGIN &amp; WRITER HERITAGE ]</div>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[0.95] mb-6">BY WRITERS, FOR WRITERS.</h2>
              <p className="text-base text-white/80 leading-relaxed mb-6">GRASTER was not born in a corporate boardroom. It grew out of a decade on the ground—running specialty graffiti supply shops, painting large-scale commercial murals, and testing what happens when cheap markers clog, fade, or fail mid-piece.</p>
              <p className="text-sm text-[#888888] leading-relaxed mb-10">Every nib width, barrel volume, and pigment ratio is refined through real feedback from street writers and studio illustrators. Start your graffiti life.</p>
            </div>
            <div className="border border-[#262626] bg-[#121212] p-6">
              <div className="font-mono text-[11px] text-[#888888] uppercase tracking-widest mb-2">BRAND MANIFESTO // EST. 2020</div>
              <div className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-4">&ldquo;START YOUR GRAFFITI LIFE.&rdquo;</div>
              <a href="#wholesale" className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#D4FF00] hover:underline"><span>PARTNER WITH GRASTER GLOBAL</span><ArrowUpRight className="w-4 h-4" /></a>
            </div>
          </div>
          <div className="lg:col-span-7 border-l border-[#262626] pl-6 sm:pl-10 space-y-10">
            {TIMELINE.map((entry, idx) => (
              <motion.div key={entry.year} initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: idx * 0.08 }} className="relative">
                <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3 h-3 bg-[#0A0A0A] border-2 border-[#D4FF00]" />
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">{entry.year}</span>
                  <span className="font-mono text-[11px] tracking-widest text-[#D4FF00] uppercase">// {entry.tag}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white mb-2">{entry.title}</h3>
                <p className="text-sm text-[#888888] leading-relaxed">{entry.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
