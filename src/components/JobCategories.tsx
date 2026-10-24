"use client";

import React, { useState } from "react";
import {
  Code2,
  HeartHandshake,
  Sprout,
  HardHat,
  UtensilsCrossed,
  Hotel,
  Wrench,
  Cpu,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Filter,
} from "lucide-react";

interface JobCategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

export default function JobCategories({ onSelectCategory }: JobCategoriesProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    {
      id: "it",
      name: "Information Technology",
      group: "tech",
      icon: Code2,
      demand: "Urgent Demand",
      roles: ["Bilingual Bridge SE", "Full Stack Engineer", "Cloud & DevOps", "QA Automation"],
      desc: "Direct corporate hiring in Tokyo and Osaka for bilingual tech talent with competitive Japanese wage packages.",
      color: "text-[#0B3D91] bg-[#EBF2FF]",
      borderHover: "hover:border-[#0B3D91]",
    },
    {
      id: "caregiver",
      name: "Healthcare & Caregivers",
      group: "ssw",
      icon: HeartHandshake,
      demand: "High Demand (SSW)",
      roles: ["Elderly Nursing Assistant", "Care Facility Specialist", "Rehabilitation Aide"],
      desc: "Japan Specified Skilled Worker (SSW) nursing care in modern assisted living facilities with full labor rights.",
      color: "text-[#FF8A1F] bg-[#FFF4EB]",
      borderHover: "hover:border-[#FF8A1F]",
    },
    {
      id: "agriculture",
      name: "Agriculture & Farming",
      group: "ssw",
      icon: Sprout,
      demand: "Active Hiring",
      roles: ["Greenhouse Cultivation", "Smart Horticulture", "Livestock Management"],
      desc: "High-tech Japanese agricultural projects utilizing precision climate control, modern soil mechanics, and harvesting.",
      color: "text-[#12A36B] bg-emerald-50",
      borderHover: "hover:border-[#12A36B]",
    },
    {
      id: "construction",
      name: "Construction & Engineering",
      group: "ssw",
      icon: HardHat,
      demand: "Active Hiring",
      roles: ["Rebar Placement", "Interior Finishing", "Scaffolding", "Heavy Equipment"],
      desc: "Strict safety adherence, advanced seismic construction methods, and competitive wages across Japanese metro areas.",
      color: "text-amber-600 bg-amber-50",
      borderHover: "hover:border-amber-500",
    },
    {
      id: "food-mfg",
      name: "Food Manufacturing",
      group: "ssw",
      icon: UtensilsCrossed,
      demand: "High Demand (SSW)",
      roles: ["Food Processing", "Sanitation & QA", "Packaging Technology"],
      desc: "Clean-room food processing and preparation plants adhering to Japanese ISO and HACCP hygienic guidelines.",
      color: "text-rose-600 bg-rose-50",
      borderHover: "hover:border-rose-500",
    },
    {
      id: "hospitality",
      name: "Hospitality & Tourism",
      group: "service",
      icon: Hotel,
      demand: "Active Hiring",
      roles: ["Hotel Front Desk", "Guest Services", "Culinary Support"],
      desc: "Premium hotels and traditional Ryokan resorts seeking polite, English- and Japanese-speaking service professionals.",
      color: "text-indigo-600 bg-indigo-50",
      borderHover: "hover:border-indigo-500",
    },
    {
      id: "machinery",
      name: "Automotive & Machinery",
      group: "tech",
      icon: Wrench,
      demand: "Technical SSW",
      roles: ["Auto Body Repair", "Machining & Milling", "Industrial Maintenance"],
      desc: "State-of-the-art Japanese automotive service hubs and industrial factories requiring certified technical skills.",
      color: "text-slate-700 bg-slate-100",
      borderHover: "hover:border-slate-500",
    },
    {
      id: "electrical",
      name: "Electrical & Electronics",
      group: "tech",
      icon: Cpu,
      demand: "Technical SSW",
      roles: ["PCB Assembly", "Industrial Wiring", "Equipment Calibration"],
      desc: "Precision manufacturing facilities assembling microelectronics, robotics, and industrial automation components.",
      color: "text-cyan-600 bg-cyan-50",
      borderHover: "hover:border-cyan-500",
    },
  ];

  const filtered =
    activeFilter === "all"
      ? categories
      : categories.filter((c) => c.group === activeFilter);

  return (
    <section
      id="job-categories"
      className="py-20 lg:py-28 bg-white border-b border-[#E3EAF6] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2FF] text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8A1F]" />
              <span>Vocational Opportunities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1B33] tracking-tight">
              Overseas Job Categories
            </h2>
            <p className="text-base sm:text-lg text-[#4A5878]">
              Browse government-authorized recruitment sectors. Select your skill area to begin your formal registration and trade test scheduling.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-[#F4F8FF] rounded-2xl border border-[#E3EAF6] self-start md:self-auto flex-wrap">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === "all"
                  ? "bg-[#0B3D91] text-white shadow-sm"
                  : "text-[#4A5878] hover:text-[#0B3D91]"
              }`}
            >
              All Categories ({categories.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("ssw")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === "ssw"
                  ? "bg-[#0B3D91] text-white shadow-sm"
                  : "text-[#4A5878] hover:text-[#0B3D91]"
              }`}
            >
              Japan SSW Programs
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("tech")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === "tech"
                  ? "bg-[#0B3D91] text-white shadow-sm"
                  : "text-[#4A5878] hover:text-[#0B3D91]"
              }`}
            >
              IT & Engineering
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("service")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === "service"
                  ? "bg-[#0B3D91] text-white shadow-sm"
                  : "text-[#4A5878] hover:text-[#0B3D91]"
              }`}
            >
              Hospitality
            </button>
          </div>
        </div>

        {/* Categories Icon Grid with Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onSelectCategory(item.name)}
                className={`bg-[#F4F8FF] rounded-3xl p-6 border border-[#E3EAF6] ${item.borderHover} hover:bg-white hover:shadow-xl hover:shadow-[#0B3D91]/8 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer group`}
                role="button"
                tabIndex={0}
              >
                <div>
                  {/* Top Row: Icon + Demand Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${item.color} group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-[#FF8A1F] bg-[#FFF4EB] px-2.5 py-1 rounded-full border border-amber-200">
                      {item.demand}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#0F1B33] mb-2 group-hover:text-[#0B3D91] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#4A5878] leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* Sample Roles Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.roles.map((role, rIdx) => (
                      <span
                        key={rIdx}
                        className="text-[11px] font-medium text-[#0F1B33] bg-white px-2 py-0.5 rounded-md border border-[#E3EAF6]"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <div className="pt-3 border-t border-[#E3EAF6] flex items-center justify-between text-xs font-bold text-[#0B3D91] group-hover:text-[#2F6BFF]">
                  <span>Register for this field</span>
                  <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#0B3D91] group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Inquiry Callout */}
        <div className="mt-12 text-center text-sm text-[#4A5878]">
          Looking for a specialized role not listed above?{" "}
          <a
            href="#contact"
            className="text-[#0B3D91] font-bold underline hover:text-[#2F6BFF]"
          >
            Submit an employer manpower request or candidate resume
          </a>
        </div>
      </div>
    </section>
  );
}
