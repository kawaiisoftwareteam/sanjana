"use client";

import React from "react";
import {
  ShieldCheck,
  Cpu,
  HeartHandshake,
  Scale,
  GraduationCap,
  BellRing,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Licensed and Legal",
      subtitle: "Government License RL-711",
      desc: "Fully registered and authorized by the Ministry of Labor and Employment, Government of Bangladesh. 100% legal bilateral employment frameworks.",
      icon: ShieldCheck,
      color: "text-[#5C3D2E] bg-[#EDF1E8]",
      stat: "100% Legal",
    },
    {
      title: "Skilled Technical Selection Team",
      subtitle: "Industry-Standard Vetting",
      desc: "Our evaluation team comprises certified Japanese bilingual evaluators and seasoned trade technicians ensuring high candidate proficiency.",
      icon: Cpu,
      color: "text-[#6E8F6A] bg-sage-50",
      stat: "Top 5% Talent",
    },
    {
      title: "Full Repatriation Responsibility",
      subtitle: "Comprehensive Welfare Guarantee",
      desc: "We stand behind every deployed worker. In case of unexpected contractual or humanitarian issues, we take complete legal repatriation responsibility.",
      icon: HeartHandshake,
      color: "text-[#E8A33D] bg-[#FBF2E1]",
      stat: "Zero Abandonment",
    },
    {
      title: "Transparent Process",
      subtitle: "Zero Hidden Processing Fees",
      desc: "Uncompromising financial integrity. All service fees adhere strictly to Bangladesh government ceilings with receipts and direct candidate orientation.",
      icon: Scale,
      color: "text-[#5F7F5B] bg-sage-50",
      stat: "100% Ethical",
    },
    {
      title: "Pre-Departure Orientation",
      subtitle: "Language, Culture & 5S Academy",
      desc: "Rigorous preparation at our in-house academy covering Japanese business manners (Keigo, Hou-Ren-So), safety rules, and daily living norms.",
      icon: GraduationCap,
      color: "text-[#5C3D2E] bg-walnut-50",
      stat: "300+ Training Hours",
    },
    {
      title: "Employer Notice 3 Days Before Flight",
      subtitle: "Punctual Logistical Coordination",
      desc: "Mandatory official notification sent to foreign employers 3 full days prior to flight departure, guaranteeing seamless airport reception and housing.",
      icon: BellRing,
      color: "text-amber-600 bg-amber-50",
      stat: "72h Advance Notice",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-20 lg:py-28 bg-[#F7F3EC] border-b border-[#E6DED2] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF1E8] text-[#5C3D2E] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E8A33D]" />
            <span>Why Sanjana International</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B1D14] tracking-tight">
            Built on Trust, Compliance & Excellence
          </h2>
          <p className="text-base sm:text-lg text-[#5E5047]">
            For both overseas employers and ambitious job seekers, our track record
            represents reliability, zero exploitation, and lifelong career growth.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E6DED2] shadow-md shadow-[#5C3D2E]/4 hover:shadow-2xl hover:shadow-[#5C3D2E]/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-2xl ${item.color} group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#5C3D2E] bg-[#F7F3EC] px-2.5 py-1 rounded-full border border-[#E6DED2]">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#2B1D14] mb-1.5 group-hover:text-[#5C3D2E] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#E8A33D] mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-sm text-[#5E5047] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F3EEE6] flex items-center gap-1.5 text-xs font-semibold text-[#5F7F5B]">
                  <CheckCircle2 className="w-4 h-4 text-[#5F7F5B]" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
