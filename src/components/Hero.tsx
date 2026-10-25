"use client";

import React, { useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/hero/07-passport-sunset.png",
    alt: "Traveler holding a Bangladeshi passport at sunset",
  },
  {
    src: "/hero/08-fuji-tourist.jpg",
    alt: "Traveler with luggage at Lake Kawaguchiko facing Mount Fuji",
  },
  {
    src: "/hero/06-stadium-construction.png",
    alt: "Construction crew at a stadium worksite",
  },
] as const;

const HOLD_MS = 4200;
const EXIT_MS = 850;
const ENTER_MS = 950;

type Phase = "enter" | "hold" | "exit";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("enter");

  useEffect(() => {
    const ms = phase === "enter" ? ENTER_MS : phase === "hold" ? HOLD_MS : EXIT_MS;
    const id = window.setTimeout(() => {
      if (phase === "enter") setPhase("hold");
      else if (phase === "hold") setPhase("exit");
      else {
        setActiveIndex((i) => (i + 1) % SLIDES.length);
        setPhase("enter");
      }
    }, ms);
    return () => window.clearTimeout(id);
  }, [phase]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-[#140E0A] flex items-center justify-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          key={SLIDES[activeIndex].src}
          className={`absolute inset-0 ${
            phase === "enter" ? "hero-fly-in" : phase === "exit" ? "hero-fly-out" : ""
          }`}
        >
          <img
            src={SLIDES[activeIndex].src}
            alt={SLIDES[activeIndex].alt}
            className="h-full w-full object-cover"
          />
        </div>
        <img
          src={SLIDES[(activeIndex + 1) % SLIDES.length].src}
          alt=""
          className="hidden"
        />
      </div>

      <div className="absolute inset-0 bg-[#140E0A]/45 pointer-events-none" />

      <div className="relative z-10 px-5 flex flex-col items-center">
        <h1 className="w-fit text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.15]">
          <span className="block text-white">Your Trusted Bridge</span>
          <span className="mt-1 block pl-16 sm:pl-24 md:pl-36 lg:pl-48 bg-gradient-to-r from-[#A9C1A3] via-[#C9D8C3] to-[#9DB896] bg-clip-text text-transparent">
            To Global Careers
          </span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-stone-100/90 font-normal text-center">
          Skilled pathways to Japan — legal, safe, transparent.
        </p>
      </div>
    </section>
  );
}
