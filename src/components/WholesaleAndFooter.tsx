"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, BadgeCheck, Copy, ArrowUpRight, Globe, Package, ShieldCheck, Send } from "lucide-react";

const SERIES_OPTIONS = [
  "FLOWS (10MM / 18MM MOPS)",
  "WILDER (8MM–50MM MARKERS)",
  "ACRYLIC (0.7MM / 2–3MM)",
  "PURE (LOW-ODOR SERIES)",
  "NEON (UV FLUORESCENT)",
  "HUNTER (3MM STEEL BALL)",
  "REFILLS (50ML / 100ML / 350ML)"
];

export default function WholesaleAndFooter() {
  const [selectedSeries, setSelectedSeries] = useState<string[]>([
    "FLOWS (10MM / 18MM MOPS)",
    "WILDER (8MM–50MM MARKERS)"
  ]);
  const [company, setCompany] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [businessType, setBusinessType] = useState("Graffiti / Street Art Shop");
  const [volume, setVolume] = useState("Starter Pack (100–300 pcs)");
  const [notes, setNotes] = useState("");
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const toggleSeries = (item: string) => {
    setSelectedSeries((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("grasterofficial@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refId = `GRS-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedCode(refId);
  };

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(`[GRASTER WHOLESALE INQUIRY] ${company || "New Partner"} (${country || "Global"})`);
    const body = encodeURIComponent(
      `Company / Shop: ${company}\nContact Person: ${contactName}\nEmail: ${email}\nCountry / City: ${country}\nBusiness Type: ${businessType}\nEstimated Volume: ${volume}\nInterested Lines:\n- ${selectedSeries.join("\n- ")}\n\nNotes:\n${notes}`
    );
    return `mailto:grasterofficial@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-[#0A0A0A] text-white">
      <section id="wholesale" className="py-24 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs tracking-widest text-[#D4FF00] uppercase mb-3">[ 04 // GLOBAL DISTRIBUTION &amp; WHOLESALE ]</div>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[0.95] mb-6">STOCK GRASTER.</h2>
              <p className="text-base text-white/80 leading-relaxed mb-8">We partner directly with independent graffiti shops, art supply retailers, mural collectives, and regional distributors worldwide. Request our latest B2B price list, swatch book, and product catalog.</p>
              <div className="space-y-4 border-t border-[#262626] pt-6 mb-8">
                <div className="flex items-start gap-3.5"><Package className="w-5 h-5 text-[#D4FF00] shrink-0 mt-0.5" /><div><div className="font-mono text-xs font-bold uppercase text-white">FLEXIBLE MIXED-CASE MOQ</div><p className="text-xs text-[#888888] mt-0.5">Mix &amp; match mops, broad chisels, acrylic sets, and refills in a single consolidated shipment.</p></div></div>
                <div className="flex items-start gap-3.5"><ShieldCheck className="w-5 h-5 text-[#D4FF00] shrink-0 mt-0.5" /><div><div className="font-mono text-xs font-bold uppercase text-white">EXPORT-READY COMPLIANCE</div><p className="text-xs text-[#888888] mt-0.5">Full MSDS documentation, EN71-3 &amp; CE safety compliance for smooth international customs clearance.</p></div></div>
                <div className="flex items-start gap-3.5"><Globe className="w-5 h-5 text-[#D4FF00] shrink-0 mt-0.5" /><div><div className="font-mono text-xs font-bold uppercase text-white">WORLDWIDE AIR &amp; SEA FREIGHT</div><p className="text-xs text-[#888888] mt-0.5">Door-to-door DDP / FOB logistics support across North America, Europe, Asia-Pacific, and Latin America.</p></div></div>
                <div className="flex items-start gap-3.5"><BadgeCheck className="w-5 h-5 text-[#D4FF00] shrink-0 mt-0.5" /><div><div className="font-mono text-xs font-bold uppercase text-white">UNBEATABLE VALUE // MADE IN CHINA</div><p className="text-xs text-[#888888] mt-0.5">Powered by China’s advanced manufacturing supply chain—delivering pro-grade pigment opacity and durable hardware at highly accessible prices. Try our lineup on your walls and feel the difference.</p></div></div>
              </div>
            </div>
            <div className="border border-[#262626] bg-[#121212] p-5">
              <div className="font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-2">DIRECT WHOLESALE DESK</div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm font-bold text-white truncate">grasterofficial@gmail.com</span>
                <button type="button" onClick={handleCopyEmail} className="font-mono text-[11px] bg-[#0A0A0A] border border-[#262626] hover:border-[#D4FF00] text-white hover:text-[#D4FF00] px-3 py-1.5 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0">
                  {copied ? <Check className="w-3.5 h-3.5 text-[#D4FF00]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "COPIED" : "COPY"}</span>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="border border-[#262626] bg-[#121212] p-6 sm:p-10">
              {submittedCode ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="py-8 space-y-6">
                  <div className="inline-block bg-[#D4FF00] text-[#0A0A0A] font-mono text-xs font-bold px-3 py-1 uppercase tracking-widest">INQUIRY LOGGED // {submittedCode}</div>
                  <h3 className="text-3xl font-black uppercase tracking-tight">CATALOG REQUEST RECEIVED.</h3>
                  <p className="text-sm text-white/80 leading-relaxed">Thank you{contactName ? `, ${contactName}` : ""}. Your wholesale specification sheet for <span className="text-white font-bold">{company || "your store"}</span> is ready. Our export team responds within 24 business hours with tiered pricing and shipping quotes.</p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#262626]">
                    <a href={buildMailtoLink()} className="bg-white text-[#0A0A0A] hover:bg-[#D4FF00] font-mono text-xs font-bold tracking-widest uppercase px-6 py-4 text-center transition-colors flex items-center justify-center gap-2"><span>OPEN IN EMAIL APP TO SEND NOW</span><ArrowUpRight className="w-4 h-4" /></a>
                    <button type="button" onClick={() => setSubmittedCode(null)} className="border border-[#262626] hover:border-white text-white font-mono text-xs uppercase tracking-widest px-6 py-4 transition-colors cursor-pointer">EDIT INQUIRY</button>
                  </div>
                </motion.div>
              ) : (
                <form name="graster-wholesale" method="POST" onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="form-name" value="graster-wholesale" />
                  <div className="flex items-center justify-between border-b border-[#262626] pb-4 mb-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">DEALER &amp; DISTRIBUTOR APPLICATION</span>
                    <span className="font-mono text-[10px] text-[#D4FF00]">24H RESPONSE</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="block font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-1.5">COMPANY / SHOP NAME *</label><input required name="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="e.g. Urban Wall Supply" className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-[#D4FF00] outline-none px-3.5 py-3 text-sm text-white" /></div>
                    <div><label className="block font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-1.5">CONTACT PERSON *</label><input required name="contactName" value={contactName} onChange={(e) => setContactName(e.target.value)} placeholder="Your Name" className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-[#D4FF00] outline-none px-3.5 py-3 text-sm text-white" /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="block font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-1.5">BUSINESS EMAIL *</label><input required type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="buyer@yourshop.com" className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-[#D4FF00] outline-none px-3.5 py-3 text-sm text-white" /></div>
                    <div><label className="block font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-1.5">COUNTRY &amp; CITY *</label><input required name="country" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="e.g. Berlin, Germany / LA, USA" className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-[#D4FF00] outline-none px-3.5 py-3 text-sm text-white" /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="block font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-1.5">BUSINESS PROFILE</label><select name="businessType" value={businessType} onChange={(e) => setBusinessType(e.target.value)} className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-[#D4FF00] outline-none px-3.5 py-3 text-sm text-white"><option>Graffiti / Street Art Shop</option><option>Fine Art &amp; Stationery Retailer</option><option>Regional Wholesale Distributor</option><option>Mural Studio / Creative Agency</option><option>Online Store / E-Commerce</option></select></div>
                    <div><label className="block font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-1.5">ESTIMATED ORDER VOLUME</label><select name="volume" value={volume} onChange={(e) => setVolume(e.target.value)} className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-[#D4FF00] outline-none px-3.5 py-3 text-sm text-white"><option>Starter Pack (100–300 pcs)</option><option>Standard Shop Order (300–1,000 pcs)</option><option>Distributor Volume (1,000+ pcs)</option></select></div>
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-2">INTERESTED PRODUCT LINES</label>
                    <div className="flex flex-wrap gap-2">
                      {SERIES_OPTIONS.map((item) => {
                        const active = selectedSeries.includes(item);
                        return (<button type="button" key={item} onClick={() => toggleSeries(item)} className={`font-mono text-[11px] px-3 py-1.5 border transition-colors cursor-pointer ${active ? "bg-[#D4FF00] text-[#0A0A0A] border-[#D4FF00] font-bold" : "bg-[#0A0A0A] text-[#888888] border-[#262626] hover:border-white hover:text-white"}`}>{item}</button>);
                      })}
                    </div>
                  </div>
                  <div><label className="block font-mono text-[10px] text-[#888888] uppercase tracking-widest mb-1.5">ADDITIONAL NOTES / CUSTOM REQUESTS</label><textarea rows={3} name="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Tell us about your store, target nib sizes, or custom color requests..." className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-[#D4FF00] outline-none px-3.5 py-3 text-sm text-white" /></div>
                  <button type="submit" className="w-full bg-white text-[#0A0A0A] hover:bg-[#D4FF00] font-mono text-xs font-bold tracking-widest uppercase py-4 transition-colors cursor-pointer flex items-center justify-center gap-2"><Send className="w-4 h-4" /><span>REQUEST WHOLESALE PRICE LIST &amp; CATALOG</span></button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#070707] text-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#262626]">
            <div className="md:col-span-5"><img src="/images/logo.png" alt="GRASTER®" className="h-16 w-auto object-contain -ml-3 mb-2" /><p className="font-mono text-xs text-[#D4FF00] tracking-widest uppercase mb-4">START YOUR GRAFFITI LIFE.</p><p className="text-xs text-[#888888] leading-relaxed max-w-sm">Professional graffiti markers, squeeze mops, archival acrylics, and high-opacity refill systems engineered for street writers and studio artists since 2020.</p></div>
            <div className="md:col-span-4 font-mono text-xs space-y-2.5"><div className="text-[#666666] uppercase tracking-widest mb-3">HARDWARE NAVIGATION</div><div><a href="#products" className="text-white/80 hover:text-[#D4FF00] transition-colors">01 // FULL PRODUCT LINEUP</a></div><div><a href="#tech" className="text-white/80 hover:text-[#D4FF00] transition-colors">02 // SIZE &amp; NIB CHART (0.7MM–50MM)</a></div><div><a href="#family" className="text-white/80 hover:text-[#D4FF00] transition-colors">03 // WRITER HERITAGE (2016–PRESENT)</a></div><div><a href="#wholesale" className="text-white/80 hover:text-[#D4FF00] transition-colors">04 // GLOBAL DEALER INQUIRY</a></div></div>
            <div className="md:col-span-3 font-mono text-xs space-y-2.5"><div className="text-[#666666] uppercase tracking-widest mb-3">CONNECT &amp; COMPLIANCE</div><a href="https://instagram.com/graster.cn" target="_blank" rel="noreferrer" className="block text-white/80 hover:text-[#D4FF00] transition-colors">INSTAGRAM: @GRASTER.CN</a><a href="mailto:grasterofficial@gmail.com" className="block text-white/80 hover:text-[#D4FF00] transition-colors">EMAIL: GRASTEROFFICIAL@GMAIL.COM</a><div className="text-[#888888] pt-2">EN71-3 / CE / MSDS CERTIFIED</div></div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#666666]"><div>© 2026 GRASTER® GRAFFITI MASTER. ALL RIGHTS RESERVED.</div><div>ENGINEERED BY WRITERS // GUANGZHOU · GLOBAL</div></div>
        </div>
      </footer>
    </div>
  );
}
