"use client";
import React, { useState } from "react";
import { Check, Copy, ArrowUpRight, ShieldCheck, Globe, Package, Sparkles } from "lucide-react";

export default function WholesaleAndFooter() {
  const [formData, setFormData] = useState({ name: "", company: "", email: "", country: "", interest: "Full Lineup (Markers, Mops & Refills)", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("grasterofficial@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const code = "GRS-" + Math.floor(100000 + Math.random() * 900000);
    setInquiryId(code);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "c351e614-37a9-42bd-a742-fb31ab8898ca",
          subject: "New GRASTER Wholesale Inquiry [" + code + "] - " + formData.company,
          from_name: "GRASTER Official Website",
          inquiry_id: code,
          contact_name: formData.name,
          company_or_shop: formData.company,
          reply_email: formData.email,
          country_region: formData.country,
          product_interest: formData.interest,
          message: formData.message,
        }),
      });
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const mailtoLink = "mailto:grasterofficial@gmail.com?subject=" + encodeURIComponent("Wholesale Inquiry [" + inquiryId + "] - " + formData.company) + "&body=" + encodeURIComponent("Inquiry ID: " + inquiryId + "\nName: " + formData.name + "\nCompany/Shop: " + formData.company + "\nEmail: " + formData.email + "\nCountry: " + formData.country + "\nInterest: " + formData.interest + "\n\nMessage:\n" + formData.message);

  return (
    <footer id="wholesale" className="bg-[#0A0A0A] text-white border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs tracking-widest text-[#D4FF00] uppercase mb-4">[ 04 // GLOBAL DISTRIBUTION &amp; WHOLESALE ]</div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-[0.95] mb-6">STOCK<br />GRASTER.</h2>
            <p className="text-white/75 text-base leading-relaxed mb-10">We partner directly with independent graffiti shops, art supply retailers, mural collectives, and regional distributors worldwide. Request our latest B2B price list, swatch book, and product catalog.</p>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-3.5"><Package className="w-5 h-5 text-[#D4FF00] shrink-0 mt-0.5" /><div><div className="font-mono text-xs font-bold uppercase tracking-wider text-white">FLEXIBLE MIXED-CASE MOQ</div><p className="text-xs text-white/60 mt-1 leading-relaxed">Mix &amp; match mops, broad chisels, acrylic sets, and refills in a single consolidated shipment.</p></div></div>
              <div className="flex items-start gap-3.5"><ShieldCheck className="w-5 h-5 text-[#D4FF00] shrink-0 mt-0.5" /><div><div className="font-mono text-xs font-bold uppercase tracking-wider text-white">EXPORT-READY COMPLIANCE</div><p className="text-xs text-white/60 mt-1 leading-relaxed">Full MSDS documentation, EN71-3 &amp; CE safety compliance for smooth international customs clearance.</p></div></div>
              <div className="flex items-start gap-3.5"><Globe className="w-5 h-5 text-[#D4FF00] shrink-0 mt-0.5" /><div><div className="font-mono text-xs font-bold uppercase tracking-wider text-white">WORLDWIDE AIR &amp; SEA FREIGHT</div><p className="text-xs text-white/60 mt-1 leading-relaxed">Door-to-door DDP / FOB logistics support across North America, Europe, Asia-Pacific, and Latin America.</p></div></div>
              <div className="flex items-start gap-3.5"><Sparkles className="w-5 h-5 text-[#D4FF00] shrink-0 mt-0.5" /><div><div className="font-mono text-xs font-bold uppercase tracking-wider text-white">UNBEATABLE VALUE // MADE IN CHINA</div><p className="text-xs text-white/60 mt-1 leading-relaxed">Powered by China&apos;s advanced manufacturing supply chain—delivering pro-grade pigment opacity and durable hardware at highly accessible prices.</p></div></div>
            </div>
            <div className="border border-[#262626] bg-[#121212] p-4 flex items-center justify-between">
              <div><div className="font-mono text-[10px] text-[#888888] tracking-widest uppercase">DIRECT WHOLESALE DESK</div><div className="font-mono text-sm text-white mt-0.5">grasterofficial@gmail.com</div></div>
              <button type="button" onClick={handleCopyEmail} className="border border-[#262626] hover:border-[#D4FF00] px-3 py-2 font-mono text-xs flex items-center gap-1.5 text-white hover:text-[#D4FF00] transition-colors">{copied ? <Check className="w-3.5 h-3.5 text-[#D4FF00]" /> : <Copy className="w-3.5 h-3.5" />}<span>{copied ? "COPIED" : "COPY"}</span></button>
            </div>
          </div>
          <div className="lg:col-span-7 border border-[#262626] bg-[#121212] p-8 sm:p-10">
            {submitted ? (
              <div className="py-6">
                <div className="inline-block bg-[#D4FF00] text-[#0A0A0A] font-mono text-xs font-bold tracking-widest uppercase px-3 py-1 mb-6">INQUIRY SENT // {inquiryId}</div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">CATALOG REQUEST RECEIVED.</h3>
                <p className="text-white/75 text-sm leading-relaxed mb-8">Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your wholesale specification inquiry for <span className="text-white font-semibold">{formData.company}</span> has been delivered directly to our export desk. We respond within 24 business hours with tiered pricing and shipping quotes.</p>
                <div className="flex flex-wrap gap-4">
                  <a href={mailtoLink} className="bg-white text-[#0A0A0A] hover:bg-[#D4FF00] font-mono text-xs font-bold tracking-widest uppercase px-6 py-3.5 inline-flex items-center gap-2 transition-colors"><span>OPEN IN EMAIL APP</span><ArrowUpRight className="w-4 h-4" /></a>
                  <button type="button" onClick={() => setSubmitted(false)} className="border border-[#262626] hover:border-white text-white font-mono text-xs font-bold tracking-widest uppercase px-6 py-3.5 transition-colors">EDIT INQUIRY</button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div><label className="block font-mono text-[11px] uppercase tracking-wider text-[#888888] mb-2">YOUR NAME *</label><input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Alex Mercer" className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-[#D4FF00] outline-none px-4 py-3 text-sm text-white" /></div>
                  <div><label className="block font-mono text-[11px] uppercase tracking-wider text-[#888888] mb-2">SHOP / COMPANY NAME *</label><input type="text" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Concrete Canvas Supply" className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-[#D4FF00] outline-none px-4 py-3 text-sm text-white" /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div><label className="block font-mono text-[11px] uppercase tracking-wider text-[#888888] mb-2">BUSINESS EMAIL *</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="buyer@shopname.com" className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-[#D4FF00] outline-none px-4 py-3 text-sm text-white" /></div>
                  <div><label className="block font-mono text-[11px] uppercase tracking-wider text-[#888888] mb-2">COUNTRY / REGION *</label><input type="text" required value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} placeholder="United Kingdom / USA / Germany" className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-[#D4FF00] outline-none px-4 py-3 text-sm text-white" /></div>
                </div>
                <div><label className="block font-mono text-[11px] uppercase tracking-wider text-[#888888] mb-2">PRIMARY INTEREST</label><select value={formData.interest} onChange={(e) => setFormData({ ...formData, interest: e.target.value })} className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-[#D4FF00] outline-none px-4 py-3 text-sm text-white"><option value="Full Lineup (Markers, Mops & Refills)">Full Lineup (Markers, Mops &amp; Refills)</option><option value="FLOWS Squeeze Mops (10mm / 18mm)">FLOWS Squeeze Mops (10mm / 18mm)</option><option value="WILDER & PURE Markers (3mm-50mm)">WILDER &amp; PURE Markers (3mm–50mm)</option><option value="ACRYLIC & NEON Art Markers">ACRYLIC &amp; NEON Art Markers</option><option value="REFILL Inks & Replacement Nibs">REFILL Inks &amp; Replacement Nibs</option></select></div>
                <div><label className="block font-mono text-[11px] uppercase tracking-wider text-[#888888] mb-2">ESTIMATED ORDER VOLUME / NOTES</label><textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your store, target SKUs, or shipping destination..." className="w-full bg-[#0A0A0A] border border-[#262626] focus:border-[#D4FF00] outline-none px-4 py-3 text-sm text-white resize-none" /></div>
                <button type="submit" disabled={submitting} className="w-full bg-[#D4FF00] hover:bg-white text-[#0A0A0A] font-mono text-xs font-bold tracking-widest uppercase py-4 transition-colors disabled:opacity-50">{submitting ? "SENDING INQUIRY..." : "REQUEST WHOLESALE CATALOG & PRICE LIST"}</button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <img src="/images/logo.png" alt="GRASTER®" className="h-16 w-auto object-contain -ml-3 mb-2" />
            <div className="font-mono text-xs tracking-widest text-[#D4FF00] uppercase mb-4">START YOUR GRAFFITI LIFE.</div>
            <p className="text-sm text-[#888888] leading-relaxed max-w-sm">GRASTER (Graffiti Master) — Professional graffiti markers, squeeze mops, archival acrylics, and high-opacity refill systems engineered for street writers and studio artists since 2020.</p>
          </div>
          <div className="md:col-span-4 font-mono text-xs"><div className="text-[#888888] tracking-widest uppercase mb-4">HARDWARE NAVIGATION</div><ul className="space-y-3 text-white/80"><li><a href="#products" className="hover:text-[#D4FF00]">01 // FULL PRODUCT LINEUP</a></li><li><a href="#specs" className="hover:text-[#D4FF00]">02 // SIZE &amp; NIB CHART (0.7MM–50MM)</a></li><li><a href="#heritage" className="hover:text-[#D4FF00]">03 // WRITER HERITAGE (2020–PRESENT)</a></li><li><a href="#wholesale" className="hover:text-[#D4FF00]">04 // GLOBAL DEALER INQUIRY</a></li></ul></div>
          <div className="md:col-span-3 font-mono text-xs"><div className="text-[#888888] tracking-widest uppercase mb-4">CONNECT &amp; COMPLIANCE</div><ul className="space-y-3 text-white/80"><li>INSTAGRAM: @GRASTER.CN</li><li>EMAIL: GRASTEROFFICIAL@GMAIL.COM</li><li className="text-[#D4FF00]">EN71-3 / CE / MSDS CERTIFIED</li></ul></div>
        </div>
        <div className="border-t border-[#262626] max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[11px] text-[#888888]">
          <div>© 2026 GRASTER® GRAFFITI MASTER. ALL RIGHTS RESERVED.</div>
          <div>ENGINEERED BY WRITERS // GUANGZHOU · GLOBAL</div>
        </div>
      </div>
    </footer>
  );
}