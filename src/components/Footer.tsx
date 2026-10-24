"use client";

import React from "react";
import Link from "next/link";
import {
  Globe2,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

interface FooterProps {
  onOpenSSWModal: (category?: string) => void;
  onOpenCompanyModal: () => void;
  onOpenITModal: () => void;
}

export default function Footer({
  onOpenSSWModal,
  onOpenCompanyModal,
  onOpenITModal,
}: FooterProps) {
  return (
    <footer className="bg-[#F4F8FF] border-t border-[#E3EAF6] text-[#4A5878] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#E3EAF6]">
          {/* Column 1: Brand & Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B3D91] to-[#2F6BFF] flex items-center justify-center text-white shadow-md shadow-[#0B3D91]/15">
                <Globe2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold text-[#0F1B33]">
                    Sanjana
                  </span>
                  <span className="text-xl font-light text-[#0B3D91]">
                    International
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#FF8A1F] uppercase tracking-wider">
                  License RL-711
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#4A5878] leading-relaxed">
              Approved overseas staffing and recruitment agency licensed by the Ministry of Labor and Employment, Government of Bangladesh. Connecting skilled talent with certified Japanese and global employers safely, legally, and transparently.
            </p>

            {/* Govt License Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#E3EAF6] shadow-xs text-xs font-semibold text-[#0B3D91]">
              <ShieldCheck className="w-4 h-4 text-[#12A36B]" />
              <span>BMET & Ministry Approved • RL-711</span>
            </div>

            {/* Social Channels (Inline SVGs) */}
            <div className="pt-2 flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#E3EAF6] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white transition-colors flex items-center justify-center shadow-xs"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#E3EAF6] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white transition-colors flex items-center justify-center shadow-xs"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#E3EAF6] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white transition-colors flex items-center justify-center shadow-xs"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/88028410182"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#E3EAF6] text-[#12A36B] hover:bg-[#12A36B] hover:text-white transition-colors flex items-center justify-center shadow-xs"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-[#0F1B33] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#0B3D91] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCompanyModal}
                  className="hover:text-[#0B3D91] transition-colors text-left"
                >
                  Company Overview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenITModal}
                  className="hover:text-[#0B3D91] transition-colors text-left"
                >
                  IT Talent Placement
                </button>
              </li>
              <li>
                <a
                  href="#selection-procedure"
                  className="hover:text-[#0B3D91] transition-colors"
                >
                  Selection Procedure
                </a>
              </li>
              <li>
                <a
                  href="#job-categories"
                  className="hover:text-[#0B3D91] transition-colors"
                >
                  Job Categories
                </a>
              </li>
              <li>
                <a
                  href="#training"
                  className="hover:text-[#0B3D91] transition-colors"
                >
                  Training Academy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Overseas Programs (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-[#0F1B33] uppercase tracking-wider">
              Key Programs
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenSSWModal("SSW Caregiver")}
                  className="hover:text-[#0B3D91] transition-colors text-left flex items-center justify-between w-full"
                >
                  <span>Japan SSW Caregiver</span>
                  <span className="text-[10px] text-[#FF8A1F] font-bold">Hot</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenSSWModal("SSW Agriculture")}
                  className="hover:text-[#0B3D91] transition-colors text-left"
                >
                  SSW Agriculture & Farming
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenSSWModal("SSW Food Manufacturing")}
                  className="hover:text-[#0B3D91] transition-colors text-left"
                >
                  SSW Food Processing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenITModal}
                  className="hover:text-[#0B3D91] transition-colors text-left"
                >
                  Bilingual Software Engineers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenSSWModal("Japanese Language")}
                  className="hover:text-[#0B3D91] transition-colors text-left"
                >
                  JLPT N5/N4 Preparation
                </button>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#2F6BFF] font-semibold hover:underline"
                >
                  Foreign Employer Portal →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-[#0F1B33] uppercase tracking-wider">
              Dhaka Office
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-[#4A5878]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0B3D91] shrink-0 mt-0.5" />
                <span>
                  Shatabdi Center, 292, Inner Circular Road, 6-G (6th floor), Fakirapool, Dhaka-1000
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2F6BFF] shrink-0" />
                <span>+880 2 8410182 / +880 2 8410183</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#12A36B] shrink-0" />
                <span>info@sanjanahr.com</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenSSWModal()}
                className="w-full py-2.5 rounded-xl bg-[#FF8A1F] hover:bg-[#E67610] text-white font-bold text-xs shadow-sm transition-all"
              >
                Apply for Japan SSW
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#75839C]">
          <div>
            © 2026 Sanjana International. License RL-711. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Approved by Ministry of Labor and Employment, Bangladesh</span>
            <span className="text-[#C4D5F0]">•</span>
            <a href="#about" className="hover:text-[#0B3D91] transition-colors">
              RL-711 Verification
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
