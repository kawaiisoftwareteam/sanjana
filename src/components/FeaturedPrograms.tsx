"use client";

import React from "react";
import Image from "next/image";
import {
  Briefcase,
  Code2,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Building,
  GraduationCap,
} from "lucide-react";

interface FeaturedProgramsProps {
  onOpenITModal: () => void;
  onOpenSSWModal: (category?: string) => void;
}

export default function FeaturedPrograms({
  onOpenITModal,
  onOpenSSWModal,
}: FeaturedProgramsProps) {
  return (
    <section
      id="featured-programs"
      className="py-20 lg:py-28 bg-[#F4F8FF] border-y border-[#E3EAF6] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2FF] text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A1F]" />
            <span>Core Deployment Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1B33] tracking-tight">
            Flagship Overseas Programs
          </h2>
          <p className="text-base sm:text-lg text-[#4A5878]">
            Direct government-accredited talent pathways engineered for mutual success:
            empowering Bangladeshi professionals while meeting Japan&apos;s most vital manpower needs.
          </p>
        </div>

        {/* Two Large Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* CARD 1: Job Placement of IT Talents */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#E3EAF6] shadow-xl shadow-[#0B3D91]/5 hover:shadow-2xl hover:shadow-[#0B3D91]/10 hover:-translate-y-1 transition-all duration-300 flex flex-col group">
            {/* Card Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
              <Image
                src="/images/it-talent.jpg"
                alt="Job Placement of IT Talents in Japan - Sanjana International"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/50 via-[#0B3D91]/10 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0B3D91] shadow-md flex items-center gap-2 border border-white">
                <Code2 className="w-4 h-4 text-[#2F6BFF]" />
                <span>Global Tech Corridor</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                  Engineering & Software
                </span>
                <h3 className="text-xl sm:text-2xl font-bold leading-snug drop-shadow-sm">
                  Job Placement of IT Talents
                </h3>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-base text-[#4A5878] leading-relaxed">
                Direct recruitment and placement for high-skilled Bangladeshi software engineers,
                cloud architects, DevOps specialists, and bilingual Bridge SEs (BrSE) into Japanese
                technology enterprises and multinational corporations.
              </p>

              {/* Feature Checklist */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-sm text-[#0F1B33]">
                  <CheckCircle2 className="w-5 h-5 text-[#12A36B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Corporate Hiring:</strong> High-value employment contracts in Tokyo, Osaka & Nagoya.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#0F1B33]">
                  <CheckCircle2 className="w-5 h-5 text-[#12A36B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Bilingual Bridge Training:</strong> Dedicated Japanese technical communication (JLPT N3/N2).
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#0F1B33]">
                  <CheckCircle2 className="w-5 h-5 text-[#12A36B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Engineer Visa & Relocation:</strong> Full legal sponsorship, airfare, and housing coordination.
                  </span>
                </div>
              </div>

              {/* CTA Link / Button */}
              <div className="pt-4 border-t border-[#EEF3FB] flex items-center justify-between">
                <button
                  type="button"
                  onClick={onOpenITModal}
                  className="inline-flex items-center gap-2 text-base font-bold text-[#0B3D91] hover:text-[#2F6BFF] group/btn cursor-pointer"
                  id="btn-it-learn-more"
                >
                  <span>Learn More & Apply</span>
                  <ArrowRight className="w-4 h-4 text-[#2F6BFF] group-hover/btn:translate-x-1.5 transition-transform" />
                </button>

                <span className="text-xs font-semibold text-[#75839C] bg-[#F4F8FF] px-3 py-1 rounded-full border border-[#E3EAF6]">
                  High Demand
                </span>
              </div>
            </div>
          </div>

          {/* CARD 2: Japan Government New Labour Law SSW */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#E3EAF6] shadow-xl shadow-[#0B3D91]/5 hover:shadow-2xl hover:shadow-[#0B3D91]/10 hover:-translate-y-1 transition-all duration-300 flex flex-col group">
            {/* Card Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
              <Image
                src="/images/ssw-caregiver.jpg"
                alt="Japan Government New Labour Law SSW Program - Sanjana International"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/50 via-[#0B3D91]/10 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#FF8A1F] shadow-md flex items-center gap-2 border border-white">
                <span className="text-sm">🇯🇵</span>
                <span>Japan New Labour Law</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                  Specified Skilled Worker (SSW 1 & 2)
                </span>
                <h3 className="text-xl sm:text-2xl font-bold leading-snug drop-shadow-sm">
                  Japan Government SSW Program
                </h3>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-base text-[#4A5878] leading-relaxed">
                Authorized government pathway under the revised Japanese Immigration Control Act.
                Legal placement for certified caregivers, agricultural specialists, food manufacturing
                technicians, and construction experts.
              </p>

              {/* Feature Checklist */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-sm text-[#0F1B33]">
                  <CheckCircle2 className="w-5 h-5 text-[#12A36B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Standard Japanese Wage Parity:</strong> Legal equal-wage mandate under Japanese Labor Law.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#0F1B33]">
                  <CheckCircle2 className="w-5 h-5 text-[#12A36B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Priority Sectors:</strong> Nursing Care/Caregiving, Agriculture, Food Processing & Construction.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#0F1B33]">
                  <CheckCircle2 className="w-5 h-5 text-[#12A36B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Up to 5-Year Renewable Visa:</strong> Clear advancement pathway to SSW-2 long-term residency.
                  </span>
                </div>
              </div>

              {/* CTA Link / Button */}
              <div className="pt-4 border-t border-[#EEF3FB] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onOpenSSWModal("General SSW")}
                  className="inline-flex items-center gap-2 text-base font-bold text-[#FF8A1F] hover:text-[#E67610] group/btn cursor-pointer"
                  id="btn-ssw-learn-more"
                >
                  <span>Learn More & Register</span>
                  <ArrowRight className="w-4 h-4 text-[#FF8A1F] group-hover/btn:translate-x-1.5 transition-transform" />
                </button>

                <span className="text-xs font-semibold text-[#12A36B] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Government Regulated
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
