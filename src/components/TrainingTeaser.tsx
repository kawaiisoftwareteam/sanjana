"use client";

import React from "react";
import Image from "next/image";
import {
  GraduationCap,
  BookOpen,
  Languages,
  CheckCircle2,
  Award,
  ArrowRight,
  Sparkles,
  Users,
} from "lucide-react";

interface TrainingTeaserProps {
  onOpenSSWModal: (category?: string) => void;
}

export default function TrainingTeaser({ onOpenSSWModal }: TrainingTeaserProps) {
  const trainingPillars = [
    {
      title: "Japanese Language Mastery (JLPT / JFT)",
      desc: "Structured intensive curriculum taking students from complete beginner to JLPT N4 / N3 and JFT-Basic with Japanese audio-visual aids.",
      icon: Languages,
    },
    {
      title: "Hands-on Trade Test Simulation",
      desc: "Realistic workshops replicating Japanese test conditions for caregiver nursing, precision greenhouse farming, food processing, and carpentry.",
      icon: Award,
    },
    {
      title: "Workplace Ethics & 5S Culture",
      desc: "In-depth coaching on Japanese business etiquette (Hou-Ren-So), safety protocols, punctuality, and mutual respect in daily life.",
      icon: BookOpen,
    },
  ];

  return (
    <section id="training" className="py-20 lg:py-28 bg-[#F7F3EC] border-b border-[#E6DED2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF1E8] text-[#5C3D2E] text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-[#6E8F6A]" />
              <span>In-House Capacity Building</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B1D14] tracking-tight leading-[1.15]">
              Sanjana Language &{" "}
              <span className="gradient-text-blue">Technical Academy</span>
            </h2>

            <p className="text-base sm:text-lg text-[#5E5047] leading-relaxed">
              Success abroad requires more than paperwork—it demands genuine competence, language fluency, and cultural adaptability. Our accredited Dhaka training academy provides comprehensive pre-departure grooming so every candidate excels from day one in Japan.
            </p>

            {/* Pillars */}
            <div className="space-y-4 pt-2">
              {trainingPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-[#E6DED2] shadow-xs hover:border-[#6E8F6A]/40 hover:shadow-md transition-all flex items-start gap-4"
                  >
                    <div className="p-2.5 rounded-xl bg-[#EDF1E8] text-[#5C3D2E] shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-[#5C3D2E]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#2B1D14] mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5E5047] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenSSWModal("Training & Language Course")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#E8A33D] hover:bg-[#C9862A] text-white font-bold text-base shadow-md shadow-[#E8A33D]/25 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
                id="btn-training-enroll"
              >
                <span>Enroll in Training Program</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <span className="text-xs text-[#8A7B6F] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#5F7F5B]" />
                Daily Classes at Fakirapool Campus
              </span>
            </div>
          </div>

          {/* Right Column: Training Academy Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-[#5C3D2E]/12 aspect-[4/3] bg-stone-100">
              <Image
                src="/images/training-center.jpg"
                alt="Classroom and vocational training session at Sanjana International Dhaka center"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5C3D2E]/50 via-transparent to-transparent pointer-events-none" />

              {/* In-image stats */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-lg font-bold text-[#5C3D2E]">98%</div>
                    <div className="text-[10px] text-[#8A7B6F] font-semibold">
                      JLPT Pass Rate
                    </div>
                  </div>
                  <div className="border-x border-[#E6DED2]">
                    <div className="text-lg font-bold text-[#E8A33D]">5,000+</div>
                    <div className="text-[10px] text-[#8A7B6F] font-semibold">
                      Graduates
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#5F7F5B]">100%</div>
                    <div className="text-[10px] text-[#8A7B6F] font-semibold">
                      BMET Cleared
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -top-5 -left-4 sm:-left-6 bg-white border border-[#E6DED2] rounded-2xl p-3.5 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sage-100 text-[#5F7F5B] flex items-center justify-center">
                <Award className="w-5 h-5 text-[#5F7F5B]" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#2B1D14]">
                  Accredited Curricula
                </div>
                <div className="text-[11px] text-[#8A7B6F]">
                  Japan Foundation Aligned
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
