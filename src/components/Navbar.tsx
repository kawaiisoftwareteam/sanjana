"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  Briefcase,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Plane,
} from "lucide-react";

interface NavbarProps {
  onOpenSSWModal: (category?: string) => void;
  onOpenCompanyModal: () => void;
  onOpenITModal: () => void;
}

const NAV_LINKS = [
  { href: "#job-categories", label: "Job Categories", id: "nav-link-categories" },
  { href: "#selection-procedure", label: "Selection Procedure", id: "nav-link-procedure" },
  { href: "#training", label: "Training", id: "nav-link-training" },
  { href: "#contact", label: "Contact", id: "nav-link-contact" },
];

const linkCls =
  "group relative py-2 whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.14em] text-white/75 hover:text-white transition-colors";
const dot = (active = false) => (
  <span
    className={`absolute left-1/2 -bottom-1 w-1 h-1 -translate-x-1/2 rounded-full bg-[#FF8A1F] transition-opacity ${
      active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
    }`}
  />
);

function Logo() {
  return (
    <Link href="/" id="brand-logo" className="group flex items-center gap-3 focus:outline-none">
      <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg shadow-black/20">
        <Plane className="w-5 h-5 text-[#0B3D91] -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </span>
      <span className="leading-none">
        <span className="block text-[20px] font-semibold tracking-tight text-white">
          Sanjana<span className="text-[#FF8A1F]">.</span>
        </span>
        <span className="block mt-1 whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.28em] text-white/55">
          International · RL-711
        </span>
      </span>
    </Link>
  );
}

export default function Navbar({
  onOpenSSWModal,
  onOpenCompanyModal,
  onOpenITModal,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled
            ? "bg-[#06122B]/90 backdrop-blur-xl border-white/10 shadow-xl shadow-black/30"
            : "bg-gradient-to-b from-black/50 to-transparent border-white/15"
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className={`w-full px-5 sm:px-8 lg:px-12 xl:px-16 grid grid-cols-[auto_1fr_auto] items-center gap-6 transition-all duration-300 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
          <Logo />

          {/* Desktop links */}
          <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-9">
            <Link href="/" id="nav-link-home" className={`${linkCls} !text-white`}>
              Home
              {dot(true)}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                type="button"
                className={`${linkCls} flex items-center gap-1 focus:outline-none`}
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                id="nav-about-dropdown-btn"
                aria-expanded={aboutDropdownOpen}
              >
                About
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? "rotate-180" : ""}`} />
                {dot()}
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 pt-4 z-50">
                  <div className="rounded-2xl bg-[#06122B]/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40 p-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <button
                      type="button"
                      onClick={() => {
                        setAboutDropdownOpen(false);
                        onOpenCompanyModal();
                      }}
                      className="w-full text-left p-3 rounded-xl hover:bg-white/[0.06] transition-colors flex items-start gap-3"
                      id="dropdown-company-overview"
                    >
                      <span className="p-2 rounded-lg bg-[#2F6BFF]/15 text-[#7FA8FF]">
                        <Building2 className="w-4 h-4" />
                      </span>
                      <span>
                        <span className="block font-semibold text-sm text-white">Company Overview</span>
                        <span className="block text-xs text-white/50 mt-0.5 leading-snug">
                          History, credentials, and official license RL-711 details.
                        </span>
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setAboutDropdownOpen(false);
                        onOpenITModal();
                      }}
                      className="w-full text-left p-3 rounded-xl hover:bg-white/[0.06] transition-colors flex items-start gap-3"
                      id="dropdown-it-placement"
                    >
                      <span className="p-2 rounded-lg bg-[#FF8A1F]/15 text-[#FFA94D]">
                        <Briefcase className="w-4 h-4" />
                      </span>
                      <span>
                        <span className="block font-semibold text-sm text-white">Job Placement of IT Talents</span>
                        <span className="block text-xs text-white/50 mt-0.5 leading-snug">
                          Direct corporate tech hiring for Tokyo & global markets.
                        </span>
                      </span>
                    </button>
                    <a
                      href="#about"
                      onClick={() => setAboutDropdownOpen(false)}
                      className="mt-1 flex items-center justify-between px-3 py-2.5 border-t border-white/10 text-xs font-medium text-white/70 hover:text-white"
                    >
                      Learn about our mission
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {NAV_LINKS.map((l) => (
              <a key={l.id} href={l.href} id={l.id} className={linkCls}>
                {l.label}
                {dot()}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="col-start-3 flex items-center justify-end gap-5">
            <a
              href="tel:+88028410182"
              id="nav-btn-contact-outline"
              className="hidden 2xl:flex items-center gap-2 whitespace-nowrap text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FF8A1F]" />
              +880 2 8410182
            </a>

            <button
              type="button"
              onClick={() => onOpenSSWModal()}
              id="nav-btn-ssw-register"
              className="group hidden sm:inline-flex items-center gap-3 h-11 pl-5 pr-1.5 rounded-full bg-white text-[#06122B] text-sm font-semibold whitespace-nowrap shadow-lg shadow-black/20 hover:bg-[#FFF4EA] transition-colors cursor-pointer"
            >
              SSW Registration
              <span className="w-8 h-8 rounded-full bg-[#FF8A1F] text-white flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45" />
              </span>
            </button>

            <button
              type="button"
              onClick={() => onOpenSSWModal()}
              className="sm:hidden h-9 px-4 rounded-full bg-white text-[#06122B] font-semibold text-xs"
            >
              SSW Apply
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full border border-white/25 text-white flex items-center justify-center hover:bg-white/10"
              aria-label="Open mobile navigation menu"
              id="mobile-menu-toggle-btn"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden bg-[#06122B] flex flex-col animate-in fade-in duration-200">
          <div className="h-20 px-5 sm:px-8 flex items-center justify-between border-b border-white/10">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full border border-white/25 text-white flex items-center justify-center"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 flex flex-col">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-4 border-b border-white/10 text-2xl font-semibold text-white">
              Home
            </Link>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCompanyModal();
              }}
              className="py-4 border-b border-white/10 text-left text-2xl font-semibold text-white/80"
            >
              Company Overview
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenITModal();
              }}
              className="py-4 border-b border-white/10 text-left text-2xl font-semibold text-white/80"
            >
              IT Talent Placement
            </button>
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-4 border-b border-white/10 text-2xl font-semibold text-white/80"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="px-5 sm:px-8 pb-8 pt-4 flex flex-col gap-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSSWModal();
              }}
              className="w-full h-12 rounded-full bg-[#FF8A1F] text-white font-bold flex items-center justify-center gap-2"
              id="drawer-ssw-btn"
            >
              SSW Registration
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex flex-col gap-1.5 text-xs text-white/60">
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FF8A1F]" />
                +880 2 8410182 / +880 2 8410183
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF8A1F]" />
                info@sanjanahr.com
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
