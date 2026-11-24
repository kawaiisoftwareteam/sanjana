"use client";

import Link from "next/link";
import { useState } from "react";
import Dropdown from "@/components/Dropdown";

const inputCls =
  "h-[48px] w-full rounded-[10px] border border-black/15 bg-white px-3 text-[15px] text-[#151719] focus:outline-2 focus:outline-[#cc0a2f]";

export default function ApplyForm({ jobTitle }: { jobTitle: string }) {
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send to backend / email service
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (done) {
    return (
      <div className="rounded-[18px] bg-[#effaf3] border border-[#bfe8cd] p-6 sm:p-8">
        <p className="font-bold text-[#166534] text-[20px]">Application received!</p>
        <p className="text-[#166534] text-[15.5px] mt-2">
          Thank you for applying for <span className="font-semibold">{jobTitle}</span>. Our
          recruitment team will review your profile and contact you within 2–3 working days.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link href="/jobs" className="inline-flex items-center h-[46px] px-5 rounded-[10px] bg-[#151719] text-white font-semibold">
            Browse more jobs
          </Link>
          <Link href="/" className="inline-flex items-center h-[46px] px-5 rounded-[10px] border border-black/15 text-[#151719] font-semibold hover:border-[#cc0a2f] hover:text-[#cc0a2f] transition-colors">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-white rounded-[18px] border border-black/5 shadow-sm p-5 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Field label="Full name" name="name" required className="sm:col-span-2" />
      <Field label="Phone / WhatsApp" name="phone" type="tel" required />
      <Field label="Email" name="email" type="email" />
      <Field label="Age" name="age" type="number" required />
      <div className="flex flex-col gap-1.5 text-[14px] font-medium text-[#151719]">
        Japanese level
        <Dropdown name="jlpt" options={["None (want training)", "N5", "N4 / JFT A2", "N3", "N2 or above"]} placeholder="Select" />
      </div>
      <Field label="Years of experience" name="experience" type="number" />
      <div className="flex flex-col gap-1.5 text-[14px] font-medium text-[#151719]">
        Education
        <Dropdown name="education" options={["SSC", "HSC", "Diploma", "Bachelor’s or above"]} placeholder="Select" />
      </div>
      <label className="sm:col-span-2 flex flex-col gap-1.5 text-[14px] font-medium text-[#151719]">
        Skills / short note
        <textarea name="note" rows={4} className="rounded-[10px] border border-black/15 p-3 text-[15px] focus:outline-2 focus:outline-[#cc0a2f]" />
      </label>
      <label className="sm:col-span-2 flex flex-col gap-1.5 text-[14px] font-medium text-[#151719]">
        CV (optional)
        <input name="cv" type="file" accept=".pdf,.doc,.docx,.jpg,.png" className="text-[14px] file:mr-3 file:rounded-[8px] file:border-0 file:bg-[#f1f2f4] file:px-3 file:py-2 file:font-semibold" />
      </label>
      <button type="submit" className="sm:col-span-2 h-[50px] rounded-[12px] bg-[#cc0a2f] hover:bg-[#a60826] text-white font-bold text-[16px] transition-colors cursor-pointer">
        Submit Application
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 text-[14px] font-medium text-[#151719] ${className}`}>
      <span>
        {label}
        {required && <span className="text-[#cc0a2f]"> *</span>}
      </span>
      <input name={name} type={type} required={required} className={inputCls} />
    </label>
  );
}
