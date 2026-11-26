"use client";

import { useEffect, useRef, useState } from "react";
import { API_URL } from "@/lib/api";
import {
  cvSections,
  type CvData,
  type CvField,
} from "./cvFormat";

const STORAGE_KEY = "sanjana-cv-draft";

const inputCls =
  "w-full rounded-[10px] border border-black/15 bg-[#fffbe6] px-3 text-[15px] text-[#151719] placeholder:text-[#a3a6ad] focus:bg-white focus:outline-2 focus:outline-[#cc0a2f]";

export default function CvBuilder() {
  const [data, setData] = useState<CvData>({});
  const [photoError, setPhotoError] = useState("");
  const [step, setStep] = useState(0);
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const [saveFlash, setSaveFlash] = useState<"saving" | "saved" | "failed" | null>(null);
  const [submittedNotice, setSubmittedNotice] = useState(false);
  const formTopRef = useRef<HTMLDivElement>(null);

  const goTo = (i: number) => {
    setStep(Math.max(0, Math.min(cvSections.length - 1, i)));
    // Bring the start of the new step into view (below the sticky header).
    const el = formTopRef.current;
    if (el && el.getBoundingClientRect().top < 0) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: "smooth" });
    }
  };

  // Restore a saved draft after mount (localStorage isn't available during the static render).
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from browser storage
        setData(JSON.parse(saved));
        setSavedAt(new Date());
      }
    } catch {
      /* storage unavailable or corrupt draft */
    }
  }, []);

  const persist = (next: CvData): boolean => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setSavedAt(new Date());
      return true;
    } catch {
      return false; // quota / private mode
    }
  };

  // Every change is auto-saved too, so nothing is lost if the tab closes.
  const update = (next: CvData) => {
    setData(next);
    persist(next);
  };

  const saveNow = async () => {
    persist(data);
    setSaveFlash("saving");
    setSubmittedNotice(false);
    try {
      const res = await fetch(`${API_URL}/cvs/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: data.fullName ?? "",
          email: data.email ?? "",
          phone: data.phone ?? "",
          data,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSaveFlash("saved");
      setSubmittedNotice(true);
    } catch {
      setSaveFlash("failed");
    }
    window.setTimeout(() => setSaveFlash(null), 3500);
  };

  const set = (key: string, value: string) => update({ ...data, [key]: value });

  const onPhoto = async (file: File | undefined) => {
    setPhotoError("");
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setPhotoError("Please choose an image file (JPEG / PNG).");
      return;
    }
    try {
      set("photo", await toPassportJpeg(file));
    } catch {
      setPhotoError("Could not read this image. Please try another photo.");
    }
  };

  const reset = () => {
    if (!window.confirm("Clear all fields and start a new CV?")) return;
    update({});
    setStep(0);
    setSubmittedNotice(false);
  };

  const countFilled = (s: (typeof cvSections)[number]) =>
    s.groups.flatMap((g) => g.fields).filter((f) => (data[f.key] ?? "").trim()).length;
  const countTotal = (s: (typeof cvSections)[number]) => s.groups.reduce((m, g) => m + g.fields.length, 0);
  const totalFilled = cvSections.reduce((sum, s) => sum + countFilled(s), 0);
  const totalFields = cvSections.reduce((sum, s) => sum + countTotal(s), 0);
  const section = cvSections[step];
  const isLast = step === cvSections.length - 1;

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 font-['Inter',sans-serif]">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">
        <div>
          <p className="text-[#cc0a2f] text-[13px] font-semibold uppercase tracking-wide">Opportunities · CV Builder</p>
          <h1 className="font-bold text-[#151719] text-[28px] sm:text-[36px] tracking-tight leading-[1.15] mt-1">
            Submit Your Japan-Format CV
          </h1>
          <p className="text-[#737783] text-[15.5px] mt-2 max-w-[720px]">
            Fill in the yellow fields below and click <strong>Save</strong> when you&apos;re done. Your CV will be
            securely submitted to the Sanjana HR admin team for review and processing.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:flex-nowrap gap-3 w-full sm:w-auto shrink-0">
          <button
            type="button"
            onClick={reset}
            className="h-[46px] px-5 rounded-[10px] border border-black/15 bg-white text-[#151719] font-semibold hover:border-[#cc0a2f] hover:text-[#cc0a2f] transition-colors cursor-pointer"
          >
            Reset
          </button>
          <SaveButton onSave={saveNow} flash={saveFlash} />
        </div>
      </div>

      {submittedNotice && (
        <div className="mb-6 rounded-[14px] border border-[#bfe8cd] bg-[#effaf3] px-5 py-4 text-[#166534] text-[14.5px] font-medium">
          Your CV has been saved and submitted! Only the Sanjana HR admin team can view and download your formatted CV.
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* LEFT — form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (isLast) saveNow();
            else goTo(step + 1);
          }}
          className="lg:col-span-8 flex flex-col gap-5"
        >
          {/* Stepper */}
          <div ref={formTopRef}>
            <ol className="grid grid-cols-5 gap-1.5 sm:gap-2" aria-label="CV sections">
              {cvSections.map((s, i) => {
                const state = i === step ? "current" : i < step ? "done" : "todo";
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      aria-current={state === "current" ? "step" : undefined}
                      className="w-full text-left cursor-pointer group"
                    >
                      <span
                        className={`block h-[5px] rounded-full transition-colors ${
                          state === "todo" ? "bg-[#dfe1e5] group-hover:bg-[#c9ccd2]" : "bg-[#cc0a2f]"
                        }`}
                      />
                      <span
                        className={`block mt-2 text-[11px] sm:text-[12.5px] leading-tight truncate ${
                          state === "current" ? "text-[#151719] font-semibold" : "text-[#8a8d95]"
                        }`}
                        title={s.en}
                      >
                        <span className="hidden sm:inline">{i + 1}. </span>
                        {s.short}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
            <div className="flex items-center justify-between text-[13px] text-[#737783] mt-2 sm:mt-1.5 px-0.5">
              <span>
                Step {step + 1} of {cvSections.length}
              </span>
              <span>
                {savedAt
                  ? `Saved ${savedAt.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`
                  : "Not saved yet"}
              </span>
            </div>
          </div>

          {[section].map((section) => (
            <fieldset key={section.id} className="min-w-0 bg-white rounded-[18px] border border-black/5 shadow-sm p-4 sm:p-6">
              <legend className="sr-only">{section.en}</legend>
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-bold text-[#151719] text-[18px] sm:text-[19px] leading-tight min-w-0">
                  {section.en}
                  <span className="block text-[#737783] font-medium text-[14px] mt-0.5">{section.jp}</span>
                </h2>
                <span className="shrink-0 text-[12.5px] font-semibold text-[#737783] bg-[#f1f2f4] rounded-full px-2.5 py-1">
                  {countFilled(section)} / {countTotal(section)}
                </span>
              </div>
              {section.groups.map((group, gi) => (
                <div key={gi} className={gi > 0 ? "mt-6 pt-5 border-t border-black/5" : "mt-4"}>
                  {group.title && (
                    <p className="text-[#cc0a2f] text-[13px] font-semibold uppercase tracking-wide mb-3">
                      {group.title}
                      {gi > 0 && <span className="text-[#a3a6ad] normal-case font-medium"> · optional</span>}
                    </p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                    {group.fields.map((f) => (
                      <FieldInput
                        key={f.key}
                        field={f}
                        value={data[f.key] ?? ""}
                        onChange={(v) => set(f.key, v)}
                        onPhoto={onPhoto}
                        photoError={photoError}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </fieldset>
          ))}

          {/* Step navigation */}
          <div className="flex items-center gap-2 sm:gap-3">
            {step > 0 && (
              <button
                type="button"
                onClick={() => goTo(step - 1)}
                aria-label="Back"
                className="shrink-0 h-[50px] px-4 sm:px-6 rounded-[12px] border border-black/15 bg-white text-[#151719] font-semibold hover:border-[#cc0a2f] hover:text-[#cc0a2f] transition-colors cursor-pointer"
              >
                ← <span className="hidden sm:inline">Back</span>
              </button>
            )}
            <SaveButton onSave={saveNow} flash={saveFlash} tall />
            <button
              type="submit"
              className="flex-1 min-w-0 h-[50px] px-3 rounded-[12px] bg-[#cc0a2f] hover:bg-[#a60826] text-white font-bold text-[15px] sm:text-[16px] transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
            >
              {isLast ? (
                <span className="truncate">Save &amp; Submit CV</span>
              ) : (
                <span className="truncate">
                  Next<span className="hidden sm:inline">: {cvSections[step + 1].short}</span> →
                </span>
              )}
            </button>
          </div>
        </form>

        {/* RIGHT — submission status & section progress */}
        <aside className="lg:col-span-4 lg:sticky lg:top-[108px]">
          <div className="bg-white rounded-[18px] border border-black/5 shadow-sm p-5 sm:p-6 space-y-5">
            <div>
              <p className="text-[12.5px] font-semibold uppercase tracking-wide text-[#cc0a2f]">CV Submission</p>
              <h3 className="text-[19px] font-bold text-[#151719] mt-1">Admin-Only Review</h3>
              <p className="text-[14px] text-[#737783] mt-1.5 leading-relaxed">
                For privacy and formatting consistency, completed CVs are reviewed and downloaded exclusively by the
                Sanjana HR admin team.
              </p>
            </div>

            <div className="rounded-[12px] bg-[#f8f9fb] border border-black/5 p-4">
              <div className="flex items-center justify-between text-[13.5px] font-semibold text-[#151719]">
                <span>Overall completion</span>
                <span>
                  {totalFilled} / {totalFields} fields
                </span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-[#e5e7eb] overflow-hidden">
                <div
                  className="h-full bg-[#cc0a2f] transition-all"
                  style={{ width: `${totalFields ? Math.round((totalFilled / totalFields) * 100) : 0}%` }}
                />
              </div>
            </div>

            <ul className="space-y-2">
              {cvSections.map((s, i) => {
                const filled = countFilled(s);
                const total = countTotal(s);
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      className={`w-full flex items-center justify-between rounded-[10px] px-3 py-2 text-left text-[13.5px] transition-colors cursor-pointer ${
                        i === step
                          ? "bg-[#fdf0f1] text-[#cc0a2f] font-semibold"
                          : "hover:bg-[#f5f6f8] text-[#151719]"
                      }`}
                    >
                      <span className="truncate">{i + 1}. {s.en}</span>
                      <span className="text-[12px] text-[#737783] shrink-0 ml-2">
                        {filled}/{total}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              onClick={saveNow}
              disabled={saveFlash === "saving"}
              className="w-full h-[46px] rounded-[10px] bg-[#cc0a2f] hover:bg-[#a60826] disabled:opacity-60 text-white font-bold text-[15px] transition-colors cursor-pointer"
            >
              {saveFlash === "saving" ? "Saving..." : "Save & Submit CV"}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

function SaveButton({
  onSave,
  flash,
  tall,
}: {
  onSave: () => void;
  flash: "saving" | "saved" | "failed" | null;
  tall?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onSave}
      disabled={flash === "saving"}
      aria-live="polite"
      className={`${tall ? "h-[50px] rounded-[12px]" : "h-[46px] rounded-[10px]"} px-5 border font-semibold transition-colors cursor-pointer inline-flex items-center justify-center gap-2 disabled:opacity-60 ${
        flash === "saved"
          ? "border-[#bfe8cd] bg-[#effaf3] text-[#166534]"
          : flash === "failed"
            ? "border-[#f5c2c7] bg-[#fdf0f1] text-[#cc0a2f]"
            : "border-black/15 bg-white text-[#151719] hover:border-[#cc0a2f] hover:text-[#cc0a2f]"
      }`}
    >
      {flash === "saving" ? (
        <>Saving...</>
      ) : flash === "saved" ? (
        <>✓ Saved</>
      ) : flash === "failed" ? (
        <>Couldn&apos;t save</>
      ) : (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            <path d="M17 21v-8H7v8" />
            <path d="M7 3v5h8" />
          </svg>
          Save
        </>
      )}
    </button>
  );
}

/* ───────────────────────── Form inputs ───────────────────────── */

function FieldInput({
  field,
  value,
  onChange,
  onPhoto,
  photoError,
}: {
  field: CvField;
  value: string;
  onChange: (v: string) => void;
  onPhoto: (f: File | undefined) => void;
  photoError: string;
}) {
  const id = `cv-${field.key}`;
  const label = (
    <span className="flex flex-col">
      <span className="text-[14px] font-medium text-[#151719]">{field.en}</span>
      <span className="text-[12px] text-[#8a8d95]">{field.jp}</span>
    </span>
  );
  const wrap = `flex flex-col gap-1.5 ${field.wide || field.type === "textarea" ? "sm:col-span-2 lg:col-span-1 xl:col-span-2" : ""}`;

  if (field.type === "photo") {
    return (
      <div className={wrap}>
        {label}
        <div className="flex items-center gap-3 sm:gap-4">
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value} alt="" className="shrink-0 w-[72px] h-[96px] object-cover rounded-[6px] border border-black/10" />
          ) : (
            <div className="shrink-0 w-[72px] h-[96px] rounded-[6px] border border-dashed border-black/20 bg-[#fffbe6] flex items-center justify-center text-[11px] text-[#a3a6ad] text-center">
              3 × 4
            </div>
          )}
          <div className="flex flex-col gap-1.5 min-w-0 flex-1">
            <input
              id={id}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(e) => onPhoto(e.target.files?.[0])}
              className="w-full min-w-0 text-[13px] sm:text-[14px] file:mr-2 sm:file:mr-3 file:rounded-[8px] file:border-0 file:bg-[#f1f2f4] file:px-3 file:py-2 file:font-semibold file:cursor-pointer"
            />
            <span className="text-[12px] text-[#8a8d95]">
              Auto-cropped to 3:4 and compressed to JPEG ≤ 50 KB.
              {value && (
                <button type="button" onClick={() => onChange("")} className="ml-2 text-[#cc0a2f] font-semibold hover:underline cursor-pointer">
                  Remove
                </button>
              )}
            </span>
            {photoError && <span className="text-[12.5px] text-[#cc0a2f]">{photoError}</span>}
          </div>
        </div>
      </div>
    );
  }

  if (field.type === "select") {
    return (
      <label htmlFor={id} className={wrap}>
        {label}
        <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className={`${inputCls} h-[46px] cursor-pointer`}>
          <option value="">Select…</option>
          {field.options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
    );
  }

  if (field.type === "textarea") {
    return (
      <label htmlFor={id} className={wrap}>
        {label}
        <textarea
          id={id}
          rows={3}
          value={value}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputCls} py-2.5 resize-y`}
        />
      </label>
    );
  }

  return (
    <label htmlFor={id} className={wrap}>
      {label}
      <div className="relative">
        <input
          id={id}
          type={field.type ?? "text"}
          inputMode={field.type === "number" ? "decimal" : undefined}
          min={field.type === "number" ? 0 : undefined}
          value={value}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputCls} h-[46px] ${field.unit ? "pr-12" : ""}`}
        />
        {field.unit && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[13px] text-[#8a8d95] pointer-events-none">{field.unit}</span>
        )}
      </div>
    </label>
  );
}

/* ───────────────────────── Photo helper ───────────────────────── */

/** Center-crops to 3:4 and re-encodes as JPEG, stepping quality down to stay ≤ 50 KB. */
async function toPassportJpeg(file: File): Promise<string> {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const i = new Image();
      i.onload = () => resolve(i);
      i.onerror = reject;
      i.src = url;
    });
    const targetRatio = 3 / 4;
    let sw = img.naturalWidth;
    let sh = img.naturalHeight;
    if (sw / sh > targetRatio) sw = sh * targetRatio;
    else sh = sw / targetRatio;
    const sx = (img.naturalWidth - sw) / 2;
    const sy = (img.naturalHeight - sh) / 2;

    const canvas = document.createElement("canvas");
    canvas.width = 300;
    canvas.height = 400;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("no canvas");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);

    const LIMIT = 50 * 1024;
    let out = "";
    for (let q = 0.9; q >= 0.4; q -= 0.1) {
      out = canvas.toDataURL("image/jpeg", q);
      if ((out.length - "data:image/jpeg;base64,".length) * 0.75 <= LIMIT) break;
    }
    return out;
  } finally {
    URL.revokeObjectURL(url);
  }
}
