"use client";

import { useEffect, useId, useRef, useState } from "react";

export interface NavDropdownLink {
  label: string;
  href: string;
  description: string;
}

export const opportunityLinks: NavDropdownLink[] = [
  { label: "Find Jobs", href: "/jobs", description: "Browse current openings in Japan" },
  { label: "For Employers", href: "/employers", description: "Hire trained, visa-ready workers" },
];

interface NavDropdownProps {
  title: string;
  links?: NavDropdownLink[];
  /** href of the page currently open, used to highlight the trigger and item. */
  active?: string;
  align?: "left" | "right";
  className?: string;
  triggerClassName?: string;
}

export default function NavDropdown({
  title,
  links = opportunityLinks,
  active,
  align = "left",
  className = "",
  triggerClassName = "",
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const isActive = links.some((l) => l.href === active);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className={`inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-[#c1262e] focus-visible:outline-offset-4 ${
          isActive || open ? "text-[#c1262e]" : "text-[#171b1c] hover:text-[#c1262e]"
        } ${isActive ? "font-semibold" : ""} ${triggerClassName}`}
      >
        {title}
        <svg
          className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m5 8 5 5 5-5" />
        </svg>
      </button>
      {open && (
        <div
          id={panelId}
          className={`nav-dropdown-panel absolute top-full mt-3 z-[60] w-[260px] rounded-[14px] border border-black/10 bg-white p-2 shadow-2xl ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          <p className="px-3 pt-2 pb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#737783]">
            {title}
          </p>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={active === l.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block rounded-[10px] px-3 py-2.5 transition-colors hover:bg-[#fff0f2] ${
                    active === l.href ? "bg-[#fff0f2]" : ""
                  }`}
                >
                  <span className={`block text-[15px] ${active === l.href ? "font-semibold text-[#c1262e]" : "font-medium text-[#171b1c]"}`}>
                    {l.label}
                  </span>
                  <span className="block text-[12.5px] text-[#737783] mt-0.5">{l.description}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
