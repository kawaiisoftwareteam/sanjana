"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenSSWModal: () => void;
}

const SLIDES = [
  {
    src: "/hero/01-takes-flight.png",
    alt: "Biman Bangladesh takes flight from Dhaka",
  },
  {
    src: "/hero/02-river-city.png",
    alt: "Biman Bangladesh ascending over river city",
  },
  {
    src: "/hero/03-above-clouds.png",
    alt: "Biman Bangladesh cruising above the clouds",
  },
  {
    src: "/hero/04-mount-fuji.png",
    alt: "Biman Bangladesh approaching Mount Fuji",
  },
  {
    src: "/hero/05-narita-landing.png",
    alt: "Biman Bangladesh landing at Narita",
  },
] as const;

const INTERVAL_MS = 4500;

export default function Hero({ onOpenSSWModal }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-[#030814] flex flex-col justify-center"
    >
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
              i === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== activeIndex}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover object-center transition-transform duration-[4500ms] ease-out ${
                i === activeIndex ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/70 via-[#051530]/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/75 via-transparent to-[#030914]/35 pointer-events-none" />

      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-12 xl:px-16 pt-28 sm:pt-32 lg:pt-36 pb-16">
        <div className="max-w-2xl flex flex-col items-start space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            License RL-711 · Govt. Approved
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.08]">
            Your Trusted Bridge to{" "}
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#38BDF8] bg-clip-text text-transparent inline-block">
              Global Careers
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-100/90 max-w-lg font-normal">
            Skilled pathways to Japan — legal, safe, transparent.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenSSWModal}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-none bg-gradient-to-r from-[#FF8A1F] to-[#FF7700] hover:from-[#FF7700] hover:to-[#E66000] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#FF8A1F]/35 hover:shadow-2xl hover:shadow-[#FF8A1F]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              id="hero-btn-ssw-register"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Register for SSW</span>
            </button>

            <a
              href="#job-categories"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-none bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white font-semibold text-sm sm:text-base backdrop-blur-md shadow-lg shadow-black/20 hover:-translate-y-0.5 transition-all duration-200 group"
              id="hero-btn-explore-categories"
            >
              <span>Explore Job Categories</span>
              <ArrowRight className="w-4 h-4 text-[#60A5FA] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-200/90">
            <span className="font-semibold text-white">15+ Yrs</span>
            <span className="text-white/30">·</span>
            <span className="font-semibold text-[#FFA033]">10,000+ Deployed</span>
            <span className="text-white/30">·</span>
            <span className="font-semibold text-emerald-300">RL-711</span>
          </div>
        </div>
      </div>
    </section>
  );
}
