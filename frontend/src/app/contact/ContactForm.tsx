"use client";

import { useEffect, useState } from "react";

const roles = ["Employer", "Candidate", "IT Recruitment", "Other"] as const;

const inputCls =
  "h-[52px] w-full rounded-[12px] border border-black/10 bg-[#f8f9fa] px-4 text-[15.5px] text-[#151719] placeholder:text-[#9a9ea8] transition-colors focus:bg-white focus:border-[#cc0a2f] focus:outline-none focus:ring-4 focus:ring-[#cc0a2f]/10";

export default function ContactForm() {
  const [role, setRole] = useState<string>("Employer");

  // Read ?role= on the client so the page can be statically exported
  useEffect(() => {
    const initialRole = new URLSearchParams(window.location.search).get("role");
    if (roles.includes(initialRole as (typeof roles)[number])) setRole(initialRole!);
  }, []);
  const [submitted, setSubmitted] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send to backend / email service
    setSubmitted(true);
    e.currentTarget.reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-14 px-4">
        <span className="flex items-center justify-center size-[72px] rounded-full bg-[#effaf3] text-[#16a34a]">
          <svg viewBox="0 0 24 24" className="size-9" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h3 className="font-bold text-[#151719] text-[24px] mt-6">Message received</h3>
        <p className="text-[#737783] text-[16px] leading-[1.6] mt-2 max-w-[420px]">
          Thank you! Your {role.toLowerCase()} inquiry has reached our team. We
          usually reply within 1–2 business days.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 h-[48px] px-6 rounded-[12px] bg-[#151719] hover:bg-black text-white font-semibold cursor-pointer transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5">
      <fieldset className="flex flex-col gap-3">
        <legend className="text-[14px] font-semibold text-[#151719] mb-3">I am contacting you as</legend>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {roles.map((r) => {
            const active = role === r;
            return (
              <button
                key={r}
                type="button"
                aria-pressed={active}
                onClick={() => setRole(r)}
                className={`h-[46px] px-3 rounded-full border text-[14.5px] transition-all cursor-pointer ${
                  active
                    ? "bg-[#cc0a2f] border-[#cc0a2f] text-white font-semibold shadow-[0_6px_16px_rgba(204,10,47,0.25)]"
                    : "bg-white border-black/10 text-[#151719] hover:border-[#cc0a2f]/50 hover:text-[#cc0a2f]"
                }`}
              >
                {r}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1.5 text-[14px] font-semibold text-[#151719]">
          Full name
          <input name="name" required autoComplete="name" placeholder="Your full name" className={inputCls} />
        </label>
        <label className="flex flex-col gap-1.5 text-[14px] font-semibold text-[#151719]">
          Company <span className="sr-only">(optional)</span>
          <input name="company" autoComplete="organization" placeholder="Optional" className={inputCls} />
        </label>
        <label className="flex flex-col gap-1.5 text-[14px] font-semibold text-[#151719]">
          Email
          <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputCls} />
        </label>
        <label className="flex flex-col gap-1.5 text-[14px] font-semibold text-[#151719]">
          Phone <span className="sr-only">(optional)</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="+880 / +81 …" className={inputCls} />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-[14px] font-semibold text-[#151719]">
        Message
        <textarea
          name="message"
          required
          rows={5}
          placeholder={
            role === "Employer"
              ? "Roles, number of workers, destination and expected start date…"
              : role === "Candidate"
                ? "The job or country you’re interested in, your skills and experience…"
                : "How can we help?"
          }
          className={`${inputCls} h-auto py-3.5 resize-y`}
        />
      </label>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <p className="text-[#737783] text-[13.5px]">
          We never share your details with third parties.
        </p>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2.5 h-[54px] px-8 rounded-[14px] bg-[#cc0a2f] hover:bg-[#a60826] active:scale-[0.98] text-white font-bold text-[16px] shadow-[0_10px_24px_rgba(204,10,47,0.28)] cursor-pointer transition-all"
        >
          Send Message
          <svg viewBox="0 0 24 24" className="size-[18px] transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </form>
  );
}
