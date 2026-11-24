"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavDropdown, { NavDropdownLink } from "./NavDropdown";

const logoImg = "/figma/28a48.svg";

export const japanProgramLinks: NavDropdownLink[] = [
  {
    label: "Japan Overview",
    href: "/japan",
    description: "Bangladesh–Japan workforce mobility gateway",
  },
  {
    label: "Specified Skilled Worker (SSW)",
    href: "/japan/ssw",
    description: "SSW (i) & SSW (ii) across 16+ industrial fields",
  },
  {
    label: "Technical Intern Training (TITP)",
    href: "/japan/titp",
    description: "Skills training & 2027 ESD transition framework",
  },
  {
    label: "IT & Engineering Talent",
    href: "/japan/it-engineering",
    description: "Software, civil, electrical & CAD specialists",
  },
];

export const opportunityLinks: NavDropdownLink[] = [
  {
    label: "For Employers",
    href: "/employers",
    description: "Hire trained, visa-ready Bangladeshi workers",
  },
  {
    label: "For Candidates",
    href: "/candidates",
    description: "Legitimate overseas career opportunities",
  },
  {
    label: "Find Jobs",
    href: "/jobs",
    description: "Browse current openings in Japan & abroad",
  },
];

interface SiteHeaderProps {
  activeHref?: string;
}

export default function SiteHeader({ activeHref }: SiteHeaderProps) {
  const pathname = usePathname();
  const currentPath = activeHref || pathname || "/";

  const headerRef = useRef<HTMLElement | null>(null);
  const headerInnerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const lastHeaderWidthRef = useRef<number>(0);

  const syncNavbarLayout = useCallback(() => {
    const header = headerRef.current;
    const inner = headerInnerRef.current;
    const menu = menuRef.current;
    if (!header || !inner || !menu) return;

    const wasWide = header.classList.contains("is-wide");
    const wasOpen =
      !wasWide &&
      (menu.matches(":popover-open") || menu.classList.contains(":popover-open"));

    header.classList.add("is-measuring");
    header.classList.add("is-wide");
    menu.removeAttribute("popover");

    const fitsInline = inner.scrollWidth <= inner.clientWidth + 1;

    if (fitsInline) {
      header.classList.add("is-wide");
      menu.removeAttribute("popover");
    } else {
      header.classList.remove("is-wide");
      menu.setAttribute("popover", "auto");
      if (wasOpen && typeof menu.showPopover === "function") {
        try {
          menu.showPopover();
        } catch {
          // Ignore if already open
        }
      }
    }

    requestAnimationFrame(() => {
      header.classList.remove("is-measuring");
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!Object.hasOwn(HTMLElement.prototype, "popover")) {
      const script = document.createElement("script");
      script.type = "module";
      script.src =
        "https://unpkg.com/@oddbird/popover-polyfill@latest/dist/popover.min.js";
      document.head.appendChild(script);
    }

    const header = headerRef.current;
    const menu = menuRef.current;
    if (!header || !menu) return;

    syncNavbarLayout();

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === header) {
          const newWidth = entry.contentRect.width;
          const isWide = header.classList.contains("is-wide");
          if (isWide || newWidth > lastHeaderWidthRef.current) {
            lastHeaderWidthRef.current = newWidth;
            syncNavbarLayout();
          } else {
            lastHeaderWidthRef.current = newWidth;
          }
        } else {
          syncNavbarLayout();
        }
      }
    });

    observer.observe(header);
    observer.observe(menu);

    return () => observer.disconnect();
  }, [syncNavbarLayout]);

  const closeMobileMenu = () => {
    const menu = menuRef.current;
    if (menu && menu.hasAttribute("popover") && typeof menu.hidePopover === "function") {
      try {
        menu.hidePopover();
      } catch {
        // Ignore
      }
    }
  };

  const isJapanActive = currentPath.startsWith("/japan");
  const isOpportunityActive =
    currentPath === "/employers" ||
    currentPath === "/candidates" ||
    currentPath.startsWith("/jobs");

  return (
    <>
      {/* Top Credentials & Contact Bar */}
      <div className="bg-[#0c2230] text-white text-[12px] sm:text-[13px] py-1.5 px-4 sm:px-6 lg:px-12 border-b border-white/10 hidden md:block">
        <div className="max-w-[1760px] mx-auto flex items-center justify-between gap-4 font-['Inter',sans-serif]">
          <div className="flex items-center gap-4 lg:gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-white/90">
              <span className="bg-[#c1262e] text-white text-[10.5px] font-bold px-1.5 py-0.5 rounded">
                Recruiting Licence (RL-711)
              </span>
              <span>Govt. Approved Overseas Recruiting Agency</span>
            </span>
            <span className="text-white/40">|</span>
            <span className="text-white/80">
              OTIT Approved Sending Organization: <strong className="text-white">BGD000036</strong>
            </span>
          </div>
          <div className="flex items-center gap-5 text-white/90">
            <a
              href="tel:+8801901850573"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>BD: +880 1901-850573</span>
            </a>
            <span className="text-white/40">|</span>
            <a
              href="tel:+81369105465"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Japan: 03-6910-5465</span>
            </a>
            <span className="text-white/40">|</span>
            <a
              href="mailto:info@sanjanahr.com"
              className="hover:text-white transition-colors"
            >
              info@sanjanahr.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        ref={headerRef}
        className="site-header sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-black/5 shadow-xs"
      >
        <div
          ref={headerInnerRef}
          className="header-inner max-w-[1760px] mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-12 xl:px-16 h-[72px] sm:h-[84px] lg:h-[92px]"
        >
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-[8px] shrink-0 group focus-visible:outline-2 focus-visible:outline-[#c1262e] focus-visible:outline-offset-4 rounded-md"
          >
            <div className="grid grid-cols-[max-content] grid-rows-[max-content] leading-none place-items-start relative shrink-0">
              <div className="col-start-1 row-start-1 h-[42px] sm:h-[48px] lg:h-[52px] w-[44px] sm:w-[50px] lg:w-[54px] relative">
                <img
                  alt="Sanjana International Logo"
                  className="block size-full object-contain"
                  src={logoImg}
                />
              </div>
              <div className="col-start-1 row-start-1 flex h-[42px] sm:h-[48px] lg:h-[52px] items-center justify-center ml-[45px] sm:ml-[52px] lg:ml-[56px] w-[7px]">
                <div className="-rotate-90 flex-none">
                  <span className="font-['Poppins',sans-serif] text-[#c1262e] text-[3.8px] sm:text-[4.2px] tracking-[0.3px] whitespace-nowrap block">
                    SANJANA INTERNATIONAL
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Poppins',sans-serif] font-semibold leading-none text-[18px] sm:text-[22px] lg:text-[24px] whitespace-nowrap">
              <span className="text-[#c1262e] -mb-0.5">Sanjana</span>
              <span className="text-black">International</span>
            </div>
          </Link>

          {/* Primary Navigation */}
          <nav
            className="site-nav flex items-center gap-2 sm:gap-4"
            aria-label="Primary"
          >
            <ul
              id="site-menu"
              ref={menuRef}
              popover="auto"
              className="site-menu bg-white border border-black/10 rounded-2xl shadow-2xl p-4 sm:p-5 gap-1.5 lg:gap-4 xl:gap-6 text-[14px] xl:text-[15.5px] font-['Inter',sans-serif]"
            >
              {/* Home */}
              <li className="w-full lg:w-auto">
                <Link
                  href="/"
                  aria-current={currentPath === "/" ? "page" : undefined}
                  onClick={closeMobileMenu}
                  className={`block py-2 px-3 lg:py-1.5 lg:px-1 rounded-lg lg:rounded-none whitespace-nowrap transition-colors ${
                    currentPath === "/"
                      ? "font-semibold text-[#c1262e] bg-[#fff5f5] lg:bg-transparent lg:border-b-2 lg:border-[#c1262e]"
                      : "font-normal text-[#171b1c] hover:text-[#c1262e] hover:bg-black/5 lg:hover:bg-transparent"
                  }`}
                >
                  Home
                </Link>
              </li>

              {/* About Us */}
              <li className="w-full lg:w-auto">
                <Link
                  href="/about"
                  aria-current={currentPath === "/about" ? "page" : undefined}
                  onClick={closeMobileMenu}
                  className={`block py-2 px-3 lg:py-1.5 lg:px-1 rounded-lg lg:rounded-none whitespace-nowrap transition-colors ${
                    currentPath === "/about"
                      ? "font-semibold text-[#c1262e] bg-[#fff5f5] lg:bg-transparent lg:border-b-2 lg:border-[#c1262e]"
                      : "font-normal text-[#171b1c] hover:text-[#c1262e] hover:bg-black/5 lg:hover:bg-transparent"
                  }`}
                >
                  About Us
                </Link>
              </li>

              {/* Services */}
              <li className="w-full lg:w-auto">
                <Link
                  href="/services"
                  aria-current={currentPath === "/services" ? "page" : undefined}
                  onClick={closeMobileMenu}
                  className={`block py-2 px-3 lg:py-1.5 lg:px-1 rounded-lg lg:rounded-none whitespace-nowrap transition-colors ${
                    currentPath === "/services"
                      ? "font-semibold text-[#c1262e] bg-[#fff5f5] lg:bg-transparent lg:border-b-2 lg:border-[#c1262e]"
                      : "font-normal text-[#171b1c] hover:text-[#c1262e] hover:bg-black/5 lg:hover:bg-transparent"
                  }`}
                >
                  Services
                </Link>
              </li>

              {/* Japan Programs Dropdown */}
              <li className="w-full lg:w-auto">
                <NavDropdown
                  title="Japan Programs"
                  links={japanProgramLinks}
                  active={isJapanActive ? currentPath : undefined}
                  triggerClassName={`py-2 px-3 lg:py-1.5 lg:px-1 w-full lg:w-auto justify-between ${
                    isJapanActive ? "font-semibold text-[#c1262e]" : ""
                  }`}
                />
              </li>

              {/* Industries */}
              <li className="w-full lg:w-auto">
                <Link
                  href="/industries"
                  aria-current={currentPath === "/industries" ? "page" : undefined}
                  onClick={closeMobileMenu}
                  className={`block py-2 px-3 lg:py-1.5 lg:px-1 rounded-lg lg:rounded-none whitespace-nowrap transition-colors ${
                    currentPath === "/industries"
                      ? "font-semibold text-[#c1262e] bg-[#fff5f5] lg:bg-transparent lg:border-b-2 lg:border-[#c1262e]"
                      : "font-normal text-[#171b1c] hover:text-[#c1262e] hover:bg-black/5 lg:hover:bg-transparent"
                  }`}
                >
                  Industries
                </Link>
              </li>

              {/* Training */}
              <li className="w-full lg:w-auto">
                <Link
                  href="/training"
                  aria-current={currentPath === "/training" ? "page" : undefined}
                  onClick={closeMobileMenu}
                  className={`block py-2 px-3 lg:py-1.5 lg:px-1 rounded-lg lg:rounded-none whitespace-nowrap transition-colors ${
                    currentPath === "/training"
                      ? "font-semibold text-[#c1262e] bg-[#fff5f5] lg:bg-transparent lg:border-b-2 lg:border-[#c1262e]"
                      : "font-normal text-[#171b1c] hover:text-[#c1262e] hover:bg-black/5 lg:hover:bg-transparent"
                  }`}
                >
                  Training
                </Link>
              </li>

              {/* Ethical Recruitment */}
              <li className="w-full lg:w-auto">
                <Link
                  href="/ethical-recruitment"
                  aria-current={
                    currentPath === "/ethical-recruitment" ? "page" : undefined
                  }
                  onClick={closeMobileMenu}
                  className={`block py-2 px-3 lg:py-1.5 lg:px-1 rounded-lg lg:rounded-none whitespace-nowrap transition-colors ${
                    currentPath === "/ethical-recruitment"
                      ? "font-semibold text-[#c1262e] bg-[#fff5f5] lg:bg-transparent lg:border-b-2 lg:border-[#c1262e]"
                      : "font-normal text-[#171b1c] hover:text-[#c1262e] hover:bg-black/5 lg:hover:bg-transparent"
                  }`}
                >
                  Ethical Recruitment
                </Link>
              </li>

              {/* Opportunities Dropdown (Employers, Candidates, Jobs) */}
              <li className="w-full lg:w-auto">
                <NavDropdown
                  title="Opportunities"
                  links={opportunityLinks}
                  active={isOpportunityActive ? currentPath : undefined}
                  triggerClassName={`py-2 px-3 lg:py-1.5 lg:px-1 w-full lg:w-auto justify-between ${
                    isOpportunityActive ? "font-semibold text-[#c1262e]" : ""
                  }`}
                />
              </li>

              {/* Mobile-only CTA inside menu */}
              <li className="w-full pt-3 mt-2 border-t border-black/10 sm:hidden">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center w-full bg-[#c1262e] hover:bg-[#a61e25] text-white font-semibold text-[15px] py-3 px-4 rounded-[10px] transition-colors"
                >
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>

            {/* Desktop / Tablet CTA Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex bg-[#c1262e] hover:bg-[#a61e25] active:scale-[0.98] transition-all h-[42px] lg:h-[48px] items-center justify-center px-4 lg:px-6 rounded-[10px] shrink-0 text-white font-['Inter',sans-serif] font-semibold text-[14px] lg:text-[15px] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#c1262e] focus-visible:outline-offset-2"
            >
              <span>Contact Us</span>
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              popoverTarget="site-menu"
              popoverTargetAction="toggle"
              aria-controls="site-menu"
              className="menu-button inline-flex items-center justify-center gap-2 h-[42px] px-3.5 rounded-[10px] border border-black/15 bg-white text-[#171b1c] hover:border-[#c1262e] hover:text-[#c1262e] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#c1262e]"
            >
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <span className="text-sm font-medium">Menu</span>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
