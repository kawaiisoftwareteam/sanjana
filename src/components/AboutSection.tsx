"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, ArrowRight } from "lucide-react";

interface AboutSectionProps {
  onOpenCompanyModal: () => void;
}

export default function AboutSection({ onOpenCompanyModal }: AboutSectionProps) {
  const credentials = [
    {
      title: "Government License RL-711",
      desc: "Registered and authorized by the Ministry of Labor and Employment, Government of Bangladesh.",
    },
    {
      title: "Japan SSW Sending Organization",
      desc: "Accredited under the bilateral Japan–Bangladesh Specified Skilled Worker framework.",
    },
    {
      title: "Full Repatriation Assurance",
      desc: "End-to-end welfare monitoring, overseas crisis support, and legal repatriation guarantee.",
    },
    {
      title: "Ethical & Transparent Hiring",
      desc: "Regulated government fees, verified contracts, and zero hidden recruitment charges.",
    },
  ];

  const stats = [
    { value: "15+", label: "Years of leadership" },
    { value: "10k+", label: "Candidates deployed" },
    { value: "RL-711", label: "Govt. licensed" },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[#F7F3EC] py-24 lg:py-32">
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-[#E8A33D]/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[480px] w-[480px] rounded-full bg-sage-300/25 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Arched image */}
          <div className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:col-span-5">
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-t-full rounded-b-3xl border border-[#5C3D2E]/20" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-3xl shadow-2xl shadow-[#5C3D2E]/20">
              <Image
                src="/images/training-center.jpg"
                alt="Sanjana International candidate orientation and vocational training facility in Dhaka"
                fill
                sizes="(max-width: 1024px) 90vw, 450px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E150F]/80 via-[#1E150F]/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#F6C878]">
                  Pre-departure center · Dhaka
                </div>
                <div className="mt-1 font-serif text-2xl font-medium">Sanjana Training Academy</div>
              </div>
            </div>

            <div className="absolute -right-4 top-16 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-xl shadow-[#5C3D2E]/10 backdrop-blur-md sm:-right-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5F7F5B] text-white">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5F7F5B]">
                  Officially verified
                </div>
                <div className="text-sm font-bold text-[#2B1D14]">License RL-711</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9862A]">
              <span className="h-px w-10 bg-[#E8A33D]" />
              About Sanjana International
            </div>

            <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.1] text-[#2B1D14] sm:text-5xl lg:text-6xl">
              Empowering overseas aspirations with{" "}
              <em className="text-[#5F7F5B]">integrity &amp; excellence</em>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#5E5047]">
              Headquartered in Fakirapool, Dhaka, <span className="font-semibold text-[#2B1D14]">Sanjana International</span> is
              a premier overseas employment and HR consultancy approved by the Ministry of Labor and Employment.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-[#8A7B6F]">
              We source, screen, and prepare skilled professionals for Japan and key international markets — with
              pre-departure cultural immersion and continuous post-arrival care.
            </p>

            <dl className="lining-nums mt-10 grid max-w-xl grid-cols-3 divide-x divide-[#5C3D2E]/15 border-y border-[#5C3D2E]/15 py-6">
              {stats.map((s) => (
                <div key={s.label} className="px-3 first:pl-0 sm:px-4">
                  <dt className="whitespace-nowrap font-serif text-3xl font-semibold text-[#5C3D2E] sm:text-4xl">{s.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-[#8A7B6F]">{s.label}</dd>
                </div>
              ))}
            </dl>

            <ol className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {credentials.map((item, idx) => (
                <li key={item.title} className="group flex gap-4">
                  <span className="font-serif text-3xl italic leading-none lining-nums text-[#E8A33D] transition-colors group-hover:text-[#C9862A]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#2B1D14]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#8A7B6F]">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={onOpenCompanyModal}
                className="group inline-flex items-center gap-3 rounded-full bg-[#5C3D2E] py-2 pl-7 pr-2 font-medium text-white shadow-lg shadow-[#5C3D2E]/25 transition-all duration-300 hover:bg-[#47301F] hover:shadow-xl"
                id="about-more-details-btn"
              >
                More about us
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8A33D] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
              <span className="flex items-center gap-2 text-sm text-[#8A7B6F]">
                <ShieldCheck className="h-4 w-4 text-[#5F7F5B]" />
                Verified by Ministry of Expatriates&apos; Welfare
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
