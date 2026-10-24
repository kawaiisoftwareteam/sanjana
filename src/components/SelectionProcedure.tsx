"use client";

import React, { useState } from "react";
import {
  Wrench,
  Clock3,
  Stethoscope,
  UserCheck,
  GraduationCap,
  PlaneTakeoff,
  ArrowRight,
  ShieldAlert,
  CalendarCheck,
  Check,
} from "lucide-react";

export default function SelectionProcedure() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Trade Test",
      short: "Technical Skill Evaluation",
      desc: "Stringent practical and theoretical skill evaluation supervised by industry veterans and Japanese master evaluators.",
      detail: "Candidates undergo rigorous hands-on assessments in technical workshops matching Japanese industrial standards (welding, electrical, agricultural, nursing simulation).",
      icon: Wrench,
      highlight: "Skill Certification",
    },
    {
      step: "02",
      title: "Probation (3 Months)",
      short: "Performance & Adaptability",
      desc: "In-depth skill validation and performance monitoring over 3 months to guarantee vocational readiness and discipline.",
      detail: "Ensures candidates demonstrate strong work ethic, physical endurance, team coordination, and Japanese language learning aptitude before final client matching.",
      icon: Clock3,
      highlight: "Zero Dropout Guarantee",
    },
    {
      step: "03",
      title: "Medical Check-Up",
      short: "Certified Health Screening",
      desc: "Stringent health screening conducted exclusively at embassy-authorized and government-certified diagnostic centers.",
      detail: "Complete biometric, pathology, pulmonary, vision, and physical fitness evaluations to satisfy strict Japanese and international immigration criteria.",
      icon: Stethoscope,
      highlight: "Govt. Approved Clinics",
    },
    {
      step: "04",
      title: "Selection",
      short: "Final Client Interview & Contract",
      desc: "Direct or digital interviews with foreign employers, followed by bilateral employment contract signing.",
      detail: "Bilingual translation support during interviews, transparent salary structure confirmation, and formal submission for Certificate of Eligibility (COE).",
      icon: UserCheck,
      highlight: "Legal Contract Execution",
    },
    {
      step: "05",
      title: "Orientation",
      short: "Language, Culture & 5S Academy",
      desc: "Rigorous pre-departure academy covering Japanese language, workplace safety, 5S methodologies, and civic etiquette.",
      detail: "Intensive JLPT/JFT immersion, disaster preparedness drills, living rules in Japan, garbage sorting, and Japanese corporate communication manners (Hou-Ren-So).",
      icon: GraduationCap,
      highlight: "Pre-Departure Academy",
    },
    {
      step: "06",
      title: "Deployment Notification",
      short: "Employer Notice 3 Days Before Flight",
      desc: "Formal employer notification 3 days before flight with confirmed ticket itineraries, BMET smart card, and airport reception.",
      detail: "Complete pre-flight briefing, government emigration clearance (BMET Smart Card), flight tracking, and seamless handover to the employer's reception team in Japan.",
      icon: PlaneTakeoff,
      highlight: "Seamless Overseas Landing",
    },
  ];

  return (
    <section
      id="selection-procedure"
      className="py-20 lg:py-28 bg-white relative border-b border-[#E6DED2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF1E8] text-[#5C3D2E] text-xs font-bold uppercase tracking-wider">
            <CalendarCheck className="w-3.5 h-3.5 text-[#6E8F6A]" />
            <span>Proven 6-Step Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B1D14] tracking-tight">
            Our Transparent Selection Procedure
          </h2>
          <p className="text-base sm:text-lg text-[#5E5047]">
            A methodical, end-to-end recruitment cycle ensuring every candidate is
            fully certified, medically cleared, linguistically prepared, and legally deployed.
          </p>
        </div>

        {/* Desktop Step Navigation Bar */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#5C3D2E] border-[#5C3D2E] text-white shadow-lg shadow-[#5C3D2E]/20 -translate-y-1"
                    : "bg-[#F7F3EC] border-[#E6DED2] text-[#2B1D14] hover:border-[#6E8F6A]/40 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-black px-2 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-[#EDF1E8] text-[#5C3D2E]"
                    }`}
                  >
                    STEP {item.step}
                  </span>
                  <Icon
                    className={`w-5 h-5 ${
                      isSelected ? "text-amber-300" : "text-[#6E8F6A]"
                    }`}
                  />
                </div>
                <div className="font-bold text-sm leading-snug">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Box (Interactive Highlight) */}
        <div className="hidden lg:block mb-12 p-8 rounded-3xl bg-gradient-to-r from-[#F7F3EC] via-white to-[#F7F3EC] border border-[#E6DED2] shadow-md">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#E8A33D] uppercase tracking-wider">
                  Step {steps[activeStep].step} of 06 • {steps[activeStep].highlight}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#2B1D14]">
                {steps[activeStep].title} — {steps[activeStep].short}
              </h3>
              <p className="text-base text-[#5E5047] leading-relaxed">
                {steps[activeStep].desc}
              </p>
              <p className="text-sm text-[#8A7B6F] bg-white p-3.5 rounded-xl border border-[#E6DED2]">
                <strong className="text-[#5C3D2E]">Operational Protocol:</strong>{" "}
                {steps[activeStep].detail}
              </p>
            </div>
            <div className="col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-[#E6DED2] shadow-sm text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#EDF1E8] text-[#5C3D2E] flex items-center justify-center mb-3">
                {React.createElement(steps[activeStep].icon, {
                  className: "w-8 h-8 text-[#5C3D2E]",
                })}
              </div>
              <div className="text-xs font-bold text-[#5F7F5B] flex items-center gap-1">
                <Check className="w-4 h-4 text-[#5F7F5B]" />
                <span>Government & Embassy Approved</span>
              </div>
              <div className="text-[11px] text-[#8A7B6F] mt-1">
                RL-711 Strict Compliance Policy
              </div>
            </div>
          </div>
        </div>

        {/* 6 Step Cards Grid (Responsive Mobile & Tablet View) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-[#F7F3EC] border border-[#E6DED2] hover:bg-white hover:border-[#6E8F6A]/40 hover:shadow-xl hover:shadow-[#5C3D2E]/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Header of Card */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-white text-[#5C3D2E] border border-[#E6DED2] shadow-xs">
                      STEP {item.step}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-white text-[#5C3D2E] border border-[#E6DED2] group-hover:bg-[#5C3D2E] group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#2B1D14] mb-1 group-hover:text-[#5C3D2E] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#E8A33D] mb-3">
                    {item.short}
                  </div>

                  <p className="text-sm text-[#5E5047] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E6DED2]/80 flex items-center justify-between text-xs text-[#8A7B6F]">
                  <span className="font-medium text-[#5F7F5B]">✓ {item.highlight}</span>
                  <span className="text-[11px] font-bold text-[#5C3D2E]">
                    Stage {idx + 1}/6
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#EDF1E8] border border-[#D8CCBB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-[#5C3D2E] flex items-center justify-center shrink-0 shadow-xs">
              <ShieldAlert className="w-5 h-5 text-[#5C3D2E]" />
            </div>
            <div>
              <div className="font-bold text-sm text-[#2B1D14]">
                Zero Tolerance for Unofficial Middlemen
              </div>
              <div className="text-xs text-[#5E5047]">
                Sanjana International conducts all recruitment directly through our licensed Fakirapool office. No unauthorized agents.
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-full bg-white hover:bg-[#F7F3EC] text-[#5C3D2E] border border-[#5C3D2E] text-xs font-bold transition-colors"
          >
            Verify Your Candidate ID
          </a>
        </div>
      </div>
    </section>
  );
}
