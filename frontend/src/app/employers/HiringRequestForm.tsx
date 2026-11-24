"use client";

import { useState } from "react";

const industries = [
  "Nursing Care",
  "Construction",
  "Manufacturing",
  "Food Service",
  "Food Processing",
  "Agriculture",
  "Automobile Maintenance",
  "Building Cleaning",
  "Hospitality",
  "Driving & Logistics",
  "Shipbuilding",
  "Other",
];

type Role = { title: string; qty: string; experience: string };

const inputCls =
  "h-[48px] w-full rounded-[10px] border border-black/15 bg-white px-3 text-[15px] text-[#151719] focus:outline-2 focus:outline-[#cc0a2f]";
const labelCls = "flex flex-col gap-1.5 text-[14px] font-medium text-[#151719]";

function Req() {
  return <span className="text-[#cc0a2f]"> *</span>;
}

export default function HiringRequestForm() {
  const [roles, setRoles] = useState<Role[]>([{ title: "", qty: "", experience: "" }]);
  const [submitted, setSubmitted] = useState(false);

  const updateRole = (i: number, key: keyof Role, value: string) =>
    setRoles((r) => r.map((role, idx) => (idx === i ? { ...role, [key]: value } : role)));

  const totalWorkers = roles.reduce((s, r) => s + (parseInt(r.qty) || 0), 0);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send to backend / email service
    setSubmitted(true);
    e.currentTarget.reset();
    setRoles([{ title: "", qty: "", experience: "" }]);
  };

  if (submitted) {
    return (
      <div className="rounded-[18px] bg-[#effaf3] border border-[#bfe8cd] p-8 text-center font-['Inter',sans-serif]">
        <p className="font-bold text-[#166534] text-[22px]">Thank you! Your hiring request was received.</p>
        <p className="text-[#166534] text-[16px] mt-2">
          Our corporate team will send you a sourcing plan with candidate
          availability, timeline and cost within 2 business days.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 h-[46px] px-6 rounded-[10px] bg-[#151719] text-white font-semibold cursor-pointer"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-8 font-['Inter',sans-serif]">
      {/* Company */}
      <fieldset className="flex flex-col gap-4">
        <legend className="font-bold text-[#151719] text-[18px] mb-3">1. Company details</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className={labelCls}>
            <span>Company name<Req /></span>
            <input name="company" required className={inputCls} />
          </label>
          <label className={labelCls}>
            <span>Country<Req /></span>
            <input name="country" required placeholder="e.g. Japan" className={inputCls} />
          </label>
          <label className={labelCls}>
            <span>Contact person<Req /></span>
            <input name="contact" required className={inputCls} />
          </label>
          <label className={labelCls}>
            <span>Designation</span>
            <input name="designation" placeholder="e.g. HR Manager" className={inputCls} />
          </label>
          <label className={labelCls}>
            <span>Business email<Req /></span>
            <input name="email" type="email" required className={inputCls} />
          </label>
          <label className={labelCls}>
            <span>Phone / WhatsApp<Req /></span>
            <input name="phone" type="tel" required className={inputCls} />
          </label>
          <label className={labelCls}>
            <span>Industry<Req /></span>
            <select name="industry" required defaultValue="" className={inputCls}>
              <option value="" disabled>Select industry</option>
              {industries.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </label>
          <label className={labelCls}>
            <span>Website</span>
            <input name="website" type="url" placeholder="https://" className={inputCls} />
          </label>
        </div>
      </fieldset>

      {/* Roles */}
      <fieldset className="flex flex-col gap-3">
        <legend className="font-bold text-[#151719] text-[18px] mb-3">2. Roles you need</legend>
        {roles.map((role, i) => (
          <div key={i} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end bg-[#f8f9fa] rounded-[12px] p-3">
            <label className={`${labelCls} sm:col-span-5`}>
              <span>Job title<Req /></span>
              <input
                required
                value={role.title}
                onChange={(e) => updateRole(i, "title", e.target.value)}
                placeholder="e.g. Welder, Care Worker"
                className={inputCls}
              />
            </label>
            <label className={`${labelCls} sm:col-span-2`}>
              <span>Workers<Req /></span>
              <input
                required
                type="number"
                min={1}
                value={role.qty}
                onChange={(e) => updateRole(i, "qty", e.target.value)}
                className={inputCls}
              />
            </label>
            <label className={`${labelCls} sm:col-span-4`}>
              <span>Experience needed</span>
              <select
                value={role.experience}
                onChange={(e) => updateRole(i, "experience", e.target.value)}
                className={inputCls}
              >
                <option value="">Any</option>
                <option>Fresher (we train)</option>
                <option>1–2 years</option>
                <option>3–5 years</option>
                <option>5+ years</option>
              </select>
            </label>
            <button
              type="button"
              onClick={() => setRoles((r) => r.filter((_, idx) => idx !== i))}
              disabled={roles.length === 1}
              aria-label="Remove role"
              className="sm:col-span-1 h-[48px] rounded-[10px] border border-black/15 text-[#737783] hover:text-[#cc0a2f] hover:border-[#cc0a2f] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer text-[20px]"
            >
              ×
            </button>
          </div>
        ))}
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setRoles((r) => [...r, { title: "", qty: "", experience: "" }])}
            className="text-[#cc0a2f] font-semibold text-[15px] hover:underline cursor-pointer"
          >
            + Add another role
          </button>
          {totalWorkers > 0 && (
            <p className="text-[14px] text-[#737783]">
              Total: <span className="font-bold text-[#151719]">{totalWorkers}</span> workers
            </p>
          )}
        </div>
      </fieldset>

      {/* Terms */}
      <fieldset className="flex flex-col gap-4">
        <legend className="font-bold text-[#151719] text-[18px] mb-3">3. Employment terms</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className={labelCls}>
            <span>When do you need them?<Req /></span>
            <select name="timeline" required defaultValue="" className={inputCls}>
              <option value="" disabled>Select timeline</option>
              <option>Urgent (within 3 months)</option>
              <option>3–6 months</option>
              <option>6–12 months</option>
              <option>Flexible / ongoing</option>
            </select>
          </label>
          <label className={labelCls}>
            <span>Visa / program</span>
            <select name="visa" defaultValue="" className={inputCls}>
              <option value="">Not sure – please advise</option>
              <option>SSW Type-1</option>
              <option>SSW Type-2</option>
              <option>Technical Intern (TITP)</option>
              <option>Engineer / Specialist visa</option>
              <option>Other work visa</option>
            </select>
          </label>
          <label className={labelCls}>
            <span>Monthly salary offered</span>
            <input name="salary" placeholder="e.g. ¥200,000 – ¥250,000" className={inputCls} />
          </label>
          <label className={labelCls}>
            <span>Contract length</span>
            <select name="contract" defaultValue="" className={inputCls}>
              <option value="">Select</option>
              <option>1 year</option>
              <option>2 years</option>
              <option>3 years</option>
              <option>5 years</option>
            </select>
          </label>
          <label className={labelCls}>
            <span>Required Japanese / language level</span>
            <select name="language" defaultValue="" className={inputCls}>
              <option value="">Select</option>
              <option>N5</option>
              <option>N4 / JFT A2</option>
              <option>N3</option>
              <option>N2 or above</option>
              <option>English only</option>
            </select>
          </label>
          <div className={labelCls}>
            <span>Provided by employer</span>
            <div className="flex flex-wrap gap-x-5 gap-y-2 min-h-[48px] items-center">
              {["Accommodation", "Meals", "Transport", "Air ticket"].map((b) => (
                <label key={b} className="flex items-center gap-2 font-normal text-[15px] cursor-pointer">
                  <input type="checkbox" name="benefits" value={b} className="size-4 accent-[#cc0a2f]" />
                  {b}
                </label>
              ))}
            </div>
          </div>
          <label className={`${labelCls} sm:col-span-2`}>
            <span>Job description / additional requirements</span>
            <textarea
              name="details"
              rows={4}
              placeholder="Duties, working hours, skill tests, interview preferences…"
              className="rounded-[10px] border border-black/15 p-3 text-[15px] focus:outline-2 focus:outline-[#cc0a2f]"
            />
          </label>
          <label className={`${labelCls} sm:col-span-2`}>
            <span>Attach job order / demand letter (optional)</span>
            <input
              name="attachment"
              type="file"
              accept=".pdf,.doc,.docx,.xls,.xlsx"
              className="text-[14px] file:mr-3 file:rounded-[8px] file:border-0 file:bg-[#f1f2f4] file:px-3 file:py-2 file:font-semibold"
            />
          </label>
        </div>
      </fieldset>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/5 pt-6">
        <label className="flex items-start gap-2 text-[14px] text-[#4a4d55] cursor-pointer">
          <input type="checkbox" required className="size-4 mt-0.5 accent-[#cc0a2f]" />
          I agree to be contacted by Sanjana International about this request.
        </label>
        <button
          type="submit"
          className="h-[54px] px-8 rounded-[12px] bg-[#cc0a2f] hover:bg-[#a60826] active:scale-[0.98] transition-all text-white font-bold text-[16px] cursor-pointer shrink-0"
        >
          Submit Hiring Request
        </button>
      </div>
    </form>
  );
}
