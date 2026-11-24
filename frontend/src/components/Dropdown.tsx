"use client";

import { useEffect, useId, useRef, useState } from "react";

export interface DropdownProps {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder: string;
  /** Adds a first option that clears the value, labelled with this text. */
  allLabel?: string;
  ariaLabel?: string;
  name?: string;
  className?: string;
  buttonClassName?: string;
}

export default function Dropdown({ options, value, onChange, placeholder, allLabel, ariaLabel, name, className = "", buttonClassName = "" }: DropdownProps) {
  const [inner, setInner] = useState("");
  const current = value ?? inner;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const items = allLabel ? ["", ...options] : options;
  const labelOf = (v: string) => (v === "" ? allLabel ?? placeholder : v);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const choose = (v: string) => {
    setInner(v);
    onChange?.(v);
    setOpen(false);
  };

  const openList = () => {
    setActive(Math.max(0, items.indexOf(current)));
    setOpen(true);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      if (open) {
        e.stopPropagation();
        setOpen(false);
      }
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) return openList();
      setActive((i) => (e.key === "ArrowDown" ? Math.min(items.length - 1, i + 1) : Math.max(0, i - 1)));
    } else if (e.key === "Enter" && open) {
      e.preventDefault();
      choose(items[active]);
    }
  };

  return (
    <div ref={rootRef} className={`relative ${className}`} onKeyDown={onKeyDown}>
      {name && <input type="hidden" name={name} value={current} />}
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => (open ? setOpen(false) : openList())}
        className={`h-[48px] w-full flex items-center justify-between gap-2 rounded-[10px] border bg-white px-3 text-left text-[15px] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#cc0a2f] ${
          open ? "border-[#cc0a2f]" : "border-black/15 hover:border-black/30"
        } ${current ? "text-[#151719]" : "text-[#737783]"} ${buttonClassName}`}
      >
        <span className="truncate">{current || placeholder}</span>
        <svg
          className={`size-4 shrink-0 text-[#737783] transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m5 8 5 5 5-5" />
        </svg>
      </button>
      {open && (
        <ul
          id={listId}
          role="listbox"
          className="absolute left-0 right-0 top-full mt-1.5 z-30 max-h-[260px] overflow-y-auto rounded-[12px] border border-black/10 bg-white p-1.5 shadow-xl"
        >
          {items.map((item, i) => {
            const selected = item === current;
            return (
              <li
                key={item || "__all"}
                role="option"
                aria-selected={selected}
                onMouseEnter={() => setActive(i)}
                onClick={() => choose(item)}
                className={`flex items-center justify-between gap-2 rounded-[8px] px-3 py-2 text-[14.5px] cursor-pointer ${
                  selected ? "font-semibold text-[#cc0a2f]" : "text-[#151719]"
                } ${i === active ? "bg-[#fff0f2]" : ""}`}
              >
                <span className="truncate">{labelOf(item)}</span>
                {selected && (
                  <svg className="size-4 shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m4 10 4 4 8-8" />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
