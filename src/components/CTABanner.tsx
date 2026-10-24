"use client";

import React from "react";
import { Sparkles, PhoneCall, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

interface CTABannerProps {
  onOpenSSWModal: () => void;
}

export default function CTABanner({ onOpenSSWModal }: CTABannerProps) {
  return (
    <section className="py-20 lg:py-24 bg-[#5C3D2E] relative overflow-hidden text-white">
      {/* Soft Ambient Geometric Elements (Not Dark - Vibrant Royal Blue Accents) */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#6E8F6A]/25 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#E8A33D]/15 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Circles */}
      <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full border border-white/10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-bold text-amber-300 uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#E8A33D]" />
          <span>Licensed Overseas Placement • RL-711</span>
        </div>

        {/* Mandatory Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] max-w-3xl mx-auto mb-6">
          Ready to start your overseas career?
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg lg:text-xl text-sage-100 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Join thousands of skilled Bangladeshi professionals working legally and successfully in Japan and abroad with Sanjana International. Your safe, government-approved gateway to global opportunities.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {/* Primary Saffron Button */}
          <button
            type="button"
            onClick={onOpenSSWModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full amber-glow bg-[#E8A33D] hover:bg-[#C9862A] text-white font-extrabold text-base sm:text-lg shadow-xl shadow-[#E8A33D]/30 hover:shadow-2xl hover:shadow-[#E8A33D]/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            id="cta-banner-ssw-btn"
          >
            <Sparkles className="w-5 h-5 text-white" />
            <span>Register for SSW Today</span>
          </button>

          {/* Secondary Outlined White Button */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#5C3D2E] border-2 border-white/80 font-bold text-base sm:text-lg backdrop-blur-sm shadow-md hover:-translate-y-0.5 transition-all duration-200"
            id="cta-banner-consult-btn"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Consult an Advisor</span>
          </a>
        </div>

        {/* Reassurance Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-sage-100 border-t border-white/15 pt-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sage-400" />
            <span>Ministry of Labor Approved RL-711</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sage-400" />
            <span>Zero Unofficial Processing Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sage-400" />
            <span>Full Repatriation Assurance</span>
          </div>
        </div>
      </div>
    </section>
  );
}
