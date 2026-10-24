"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface FeaturedProgramsProps {
  onOpenITModal: () => void;
  onOpenSSWModal: (category?: string) => void;
}

export default function FeaturedPrograms({
  onOpenITModal,
  onOpenSSWModal,
}: FeaturedProgramsProps) {
  const programs = [
    {
      id: "btn-it-learn-more",
      image: "/images/it-talent.jpg",
      alt: "Job Placement of IT Talents in Japan - Sanjana International",
      tag: "Global Tech Corridor",
      category: "Engineering & Software",
      title: "IT Talent Placement",
      desc: "Placement for software engineers, cloud architects, DevOps specialists, and bilingual Bridge SEs into Japanese technology enterprises.",
      features: [
        ["Direct corporate hiring", "Contracts in Tokyo, Osaka & Nagoya"],
        ["Bilingual bridge training", "Technical Japanese, JLPT N3/N2"],
        ["Visa & relocation", "Sponsorship, airfare & housing"],
      ],
      badge: "High demand",
      cta: "Learn more & apply",
      onClick: onOpenITModal,
    },
    {
      id: "btn-ssw-learn-more",
      image: "/images/ssw-caregiver.jpg",
      alt: "Japan Government New Labour Law SSW Program - Sanjana International",
      tag: "Japan New Labour Law",
      category: "Specified Skilled Worker · SSW 1 & 2",
      title: "Japan Government SSW Program",
      desc: "Authorized pathway under the revised Immigration Control Act for caregivers, agricultural specialists, food technicians, and construction experts.",
      features: [
        ["Wage parity", "Equal pay under Japanese Labor Law"],
        ["Priority sectors", "Care, agriculture, food & construction"],
        ["Up to 5-year visa", "Pathway to SSW-2 long-term residency"],
      ],
      badge: "Government regulated",
      cta: "Learn more & register",
      onClick: () => onOpenSSWModal("General SSW"),
    },
  ];

  return (
    <section id="featured-programs" className="relative overflow-hidden bg-gradient-to-b from-[#E4EBE1] via-[#EDF1E8] to-[#F7F3EC] py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-[#E8A33D]/20 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[560px] w-[560px] rounded-full bg-[#8FA88A]/30 blur-[150px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9862A]">
              <span className="h-px w-10 bg-[#E8A33D]" />
              Core Deployment Channels
            </div>
            <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.1] text-[#2B1D14] sm:text-5xl lg:text-6xl">
              Flagship overseas <em className="text-[#5F7F5B]">programs</em>
            </h2>
          </div>
          <p className="leading-relaxed text-[#8A7B6F] lg:col-span-5 lg:pb-2">
            Government-accredited talent pathways that empower Bangladeshi professionals while
            meeting Japan&apos;s most vital manpower needs.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {programs.map((p, idx) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden border-t-4 border-[#E8A33D] bg-gradient-to-br from-[#5C3D2E] to-[#2E2017] shadow-2xl shadow-[#5C3D2E]/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-[#E8A33D]/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E150F]/30 to-transparent" />
                <span className="absolute left-5 top-5 bg-[#1E150F]/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F6C878] backdrop-blur-md">
                  {p.tag}
                </span>
                <span className="absolute bottom-4 right-6 font-serif text-6xl italic leading-none text-white/90 lining-nums">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-8 sm:p-10">
                <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#F2BC5E]">
                  {p.category}
                </div>
                <h3 className="mt-3 font-serif text-3xl font-medium text-white sm:text-4xl">
                  {p.title}
                </h3>
                <p className="mt-4 leading-relaxed text-[#D8CCBB]">{p.desc}</p>

                <dl className="mt-8 divide-y divide-white/10 border-y border-white/10">
                  {p.features.map(([label, value]) => (
                    <div key={label} className="flex flex-col gap-0.5 py-3.5 text-sm sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <dt className="font-semibold text-white">{label}</dt>
                      <dd className="text-[#CBBFB0] sm:text-right">{value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
                  <button
                    type="button"
                    onClick={p.onClick}
                    id={p.id}
                    className="group/btn inline-flex shrink-0 whitespace-nowrap cursor-pointer items-center gap-3 bg-[#E8A33D] py-2 pl-6 pr-2 text-sm font-semibold text-[#2B1D14] shadow-lg shadow-[#E8A33D]/30 transition-colors duration-300 hover:bg-[#F2BC5E]"
                  >
                    {p.cta}
                    <span className="flex h-9 w-9 items-center justify-center bg-[#2B1D14] text-[#F6C878]">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </span>
                  </button>
                  <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#ADC1A7]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ADC1A7]" />
                    {p.badge}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
