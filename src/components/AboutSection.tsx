"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  FileCheck2,
  CheckCircle2,
  Building2,
  Users,
  Compass,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface AboutSectionProps {
  onOpenCompanyModal: () => void;
}

export default function AboutSection({ onOpenCompanyModal }: AboutSectionProps) {
  const credentials = [
    {
      title: "Government License RL-711",
      desc: "Officially registered and authorized by the Ministry of Labor and Employment, Government of Bangladesh.",
      icon: ShieldCheck,
      color: "text-[#0B3D91] bg-[#EBF2FF]",
    },
    {
      title: "Japan SSW Sending Organization",
      desc: "Accredited sending agency under the bilateral Japan-Bangladesh Government Specified Skilled Worker framework.",
      icon: Award,
      color: "text-[#FF8A1F] bg-[#FFF4EB]",
    },
    {
      title: "Full Repatriation Assurance",
      desc: "End-to-end welfare monitoring, overseas crisis support, and complete legal repatriation guarantee.",
      icon: FileCheck2,
      color: "text-[#12A36B] bg-emerald-50",
    },
    {
      title: "Ethical & Transparent Hiring",
      desc: "Strictly regulated government fees, verified contracts, and zero hidden recruitment charges.",
      icon: CheckCircle2,
      color: "text-[#2F6BFF] bg-blue-50",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Verified Badges */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border-4 border-[#F4F8FF] shadow-2xl shadow-[#0B3D91]/10 bg-[#F4F8FF]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/training-center.jpg"
                  alt="Sanjana International candidate orientation and vocational training facility in Dhaka"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* In-Image Caption */}
              <div className="p-6 bg-white border-t border-[#E3EAF6]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-base font-bold text-[#0F1B33]">
                      Sanjana Training Academy
                    </div>
                    <div className="text-xs text-[#75839C]">
                      Pre-Departure Japanese Language & Skill Center, Dhaka
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#12A36B] flex items-center justify-center font-bold text-xs">
                    ✓ Verified
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Verified Seal */}
            <div className="absolute -top-6 -right-4 sm:-right-6 glass-card rounded-2xl p-4 flex items-center gap-3.5 shadow-xl border border-emerald-100 bg-white/95">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#12A36B] to-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#12A36B] uppercase tracking-wider">
                  Official Verification
                </div>
                <div className="text-sm font-extrabold text-[#0F1B33]">
                  License No: RL-711
                </div>
                <div className="text-[11px] text-[#75839C]">
                  Ministry of Labor & Employment
                </div>
              </div>
            </div>

            {/* Floating Experience Tag */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white border border-[#E3EAF6] rounded-2xl p-4 shadow-xl flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#0B3D91] text-white flex items-center justify-center font-bold text-lg">
                15+
              </div>
              <div>
                <div className="text-xs font-bold text-[#0F1B33]">
                  Years of Leadership
                </div>
                <div className="text-[11px] text-[#75839C]">
                  International Manpower Supply
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2FF] text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>About Sanjana International</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1B33] tracking-tight leading-[1.15]">
              Empowering Overseas Aspirations with{" "}
              <span className="gradient-text-blue">Integrity & Excellence</span>
            </h2>

            <p className="text-base sm:text-lg text-[#4A5878] leading-relaxed">
              Headquartered in Fakirapool, Dhaka, <strong className="text-[#0F1B33]">Sanjana International (License RL-711)</strong> is a premier overseas employment and human resource consultancy approved by the Ministry of Labor and Employment, Government of Bangladesh.
            </p>

            <p className="text-base text-[#4A5878] leading-relaxed">
              We specialize in sourcing, screening, technically evaluating, and deploying high-caliber professionals, technical trainees, and skilled workers to Japan and key international markets. Through stringent compliance, pre-departure Japanese cultural immersion, and continuous post-arrival monitoring, we ensure long-term career growth for candidates and exceptional productivity for foreign employers.
            </p>

            {/* Credential Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {credentials.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#F4F8FF] border border-[#E3EAF6] hover:border-[#2F6BFF]/40 hover:bg-white hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-xl ${item.color}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-sm text-[#0F1B33]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#75839C] leading-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenCompanyModal}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0B3D91] hover:bg-[#1A54D6] text-white font-semibold text-base shadow-md shadow-[#0B3D91]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                id="about-more-details-btn"
              >
                <span>More Details</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <div className="flex items-center gap-2 text-xs text-[#75839C]">
                <ShieldCheck className="w-4 h-4 text-[#12A36B]" />
                <span>Verified by Bangladesh Ministry of Expatriates Welfare</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
