"use client";

import { useEffect, useRef, useState } from "react";
import {
  CV_TITLE_EN,
  CV_TITLE_JP,
  cvSections,
  displayValue,
  type CvData,
  type CvField,
} from "./cvFormat";

const STORAGE_KEY = "sanjana-cv-draft";

const inputCls =
  "w-full rounded-[10px] border border-black/15 bg-[#fffbe6] px-3 text-[15px] text-[#151719] placeholder:text-[#a3a6ad] focus:bg-white focus:outline-2 focus:outline-[#cc0a2f]";

/** Styles for the CV document. Kept as plain CSS so the exact same markup
 *  renders in the on-page preview and in the print/PDF window. */
const CV_CSS = `
.cvdoc{font-family:"Noto Sans JP","Yu Gothic","Hiragino Sans","Meiryo","Inter",Arial,sans-serif;color:#111;background:#fff;font-size:11px;line-height:1.35}
.cvdoc table{width:100%;border-collapse:collapse;table-layout:fixed}
.cvdoc td,.cvdoc th{border:1px solid #9aa0a6;padding:5px 7px;vertical-align:middle;word-break:break-word;white-space:pre-wrap}
.cvdoc .cv-title{background:#1f3864;color:#fff;text-align:center;padding:10px 8px;font-size:13.5px;font-weight:700;letter-spacing:.02em;border:1px solid #1f3864}
.cvdoc .cv-title span{display:block;font-size:11px;font-weight:600;letter-spacing:.08em;margin-top:3px;opacity:.9}
.cvdoc .cv-sec th{background:#d9e2f3;color:#1f3864;text-align:left;font-size:12px;font-weight:700;padding:6px 8px}
.cvdoc .cv-jp{background:#f3f4f6;font-weight:600}
.cvdoc .cv-en{background:#f9fafb;color:#374151}
.cvdoc .cv-val{font-weight:500}
.cvdoc .cv-photo-cell{text-align:center;vertical-align:middle;padding:6px}
.cvdoc .cv-photo{width:100%;max-width:30mm;aspect-ratio:3/4;object-fit:cover;display:block;margin:0 auto;border:1px solid #9aa0a6}
.cvdoc .cv-photo-empty{width:100%;max-width:30mm;aspect-ratio:3/4;margin:0 auto;border:1px dashed #9aa0a6;display:flex;align-items:center;justify-content:center;color:#9aa0a6;font-size:10px;text-align:center}
.cvdoc .cv-gap td{border-left:none;border-right:none;height:6px;padding:0}
.cvdoc tr{break-inside:avoid;page-break-inside:avoid}
.cvdoc .cv-empty td{opacity:.45}
.cvdoc .cv-spacer td{height:11mm;padding:0;border:none}`;

export default function CvBuilder() {
  const [data, setData] = useState<CvData>({});
  const [mobileTab, setMobileTab] = useState<"form" | "preview">("form");
  const [photoError, setPhotoError] = useState("");
  const [step, setStep] = useState(0);
  /** Phones: show the preview at full size (scroll sideways) instead of fitted to the screen. */
  const [zoom, setZoom] = useState(false);
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const [saveFlash, setSaveFlash] = useState<"saved" | "failed" | null>(null);
  /** Hidden copy of the CV with empty rows removed — this is what goes into the PDF. */
  const pdfRef = useRef<HTMLDivElement>(null);
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

  const saveNow = () => {
    const ok = persist(data);
    setSaveFlash(ok ? "saved" : "failed");
    window.setTimeout(() => setSaveFlash(null), 2500);
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
  };

  const downloadPdf = () => {
    const html = pdfRef.current?.innerHTML;
    if (!html) return;
    // The browser uses the document title as the PDF file name → candidate's full name.
    // Only characters that file systems reject are removed, so Bangla / Japanese names stay intact.
    const fileName =
      (data.fullName ?? "").replace(/[\\/:*?"<>|\u0000-\u001f]+/g, " ").replace(/\s+/g, " ").trim() || "CV";
    const safeTitle = fileName.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const frame = document.createElement("iframe");
    frame.setAttribute("aria-hidden", "true");
    frame.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0;";
    document.body.appendChild(frame);
    const doc = frame.contentDocument;
    const win = frame.contentWindow;
    if (!doc || !win) return;
    doc.open();
    doc.write(
      `<!doctype html><html><head><meta charset="utf-8"><title>${safeTitle}</title>` +
        `<link rel="preconnect" href="https://fonts.googleapis.com">` +
        `<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&display=swap" rel="stylesheet">` +
        // margin:0 stops the browser printing its own header/footer (date, time, title, URL).
        // Side margins come from body padding; top/bottom from the repeating spacer rows in the table.
        `<style>@page{size:A4;margin:0}html,body{margin:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}body{padding:0 12mm}${CV_CSS}</style>` +
        `</head><body>${html}</body></html>`,
    );
    doc.close();
    const fire = () => {
      // Some browsers name the PDF after the top-level page title, so swap it for the print.
      const pageTitle = document.title;
      document.title = fileName;
      win.focus();
      win.print();
      setTimeout(() => {
        document.title = pageTitle;
        frame.remove();
      }, 1000);
    };
    // Wait for the web font and photo so the PDF doesn't use fallbacks.
    const ready = Promise.all([
      doc.fonts?.ready ?? Promise.resolve(),
      ...Array.from(doc.images).map((img) =>
        img.complete ? Promise.resolve() : new Promise((r) => (img.onload = img.onerror = r)),
      ),
    ]);
    Promise.race([ready, new Promise((r) => setTimeout(r, 2500))]).then(fire);
  };

  const countFilled = (s: (typeof cvSections)[number]) =>
    s.groups.flatMap((g) => g.fields).filter((f) => (data[f.key] ?? "").trim()).length;
  const countTotal = (s: (typeof cvSections)[number]) => s.groups.reduce((m, g) => m + g.fields.length, 0);
  const section = cvSections[step];
  const isLast = step === cvSections.length - 1;

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 font-['Inter',sans-serif]">
      <style>{CV_CSS}</style>

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">
        <div>
          <p className="text-[#cc0a2f] text-[13px] font-semibold uppercase tracking-wide">Opportunities · CV Builder</p>
          <h1 className="font-bold text-[#151719] text-[28px] sm:text-[36px] tracking-tight leading-[1.15] mt-1">
            Generate Your Japan-Format CV
          </h1>
          <p className="text-[#737783] text-[15.5px] mt-2 max-w-[720px]">
            Fill in the yellow fields on the left. Your CV (履歴書・人材情報シート) updates live on the right in the
            bilingual Japanese / English format employers use. Download it as a PDF when you&apos;re done.
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
          <button
            type="button"
            onClick={downloadPdf}
            className="col-span-2 h-[46px] px-5 rounded-[10px] bg-[#cc0a2f] hover:bg-[#a60826] text-white font-bold transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <DownloadIcon /> Download PDF
          </button>
        </div>
      </div>

      {/* Mobile: switch between form and preview */}
      <div className="lg:hidden grid grid-cols-2 gap-1 p-1 mb-5 rounded-[12px] bg-[#eceef1]" role="tablist">
        {(["form", "preview"] as const).map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={mobileTab === t}
            onClick={() => setMobileTab(t)}
            className={`h-[42px] rounded-[9px] text-[15px] font-semibold cursor-pointer ${
              mobileTab === t ? "bg-white text-[#151719] shadow-sm" : "text-[#737783]"
            }`}
          >
            {t === "form" ? "Fill in details" : "Preview CV"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
        {/* LEFT — form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (isLast) downloadPdf();
            else goTo(step + 1);
          }}
          className={`flex flex-col gap-5 ${mobileTab === "form" ? "" : "hidden lg:flex"}`}
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
                <>
                  <DownloadIcon /> <span className="truncate">Download PDF</span>
                </>
              ) : (
                <span className="truncate">
                  Next<span className="hidden sm:inline">: {cvSections[step + 1].short}</span> →
                </span>
              )}
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              setMobileTab("preview");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="lg:hidden h-[46px] rounded-[12px] border border-black/15 bg-white text-[#151719] font-semibold cursor-pointer"
          >
            Preview my CV
          </button>
        </form>

        {/* RIGHT — live preview */}
        <div
          className={`lg:sticky lg:top-[108px] ${mobileTab === "preview" ? "" : "hidden lg:block"}`}
        >
          <div className="bg-[#e9ebee] rounded-[18px] p-2.5 sm:p-5 lg:max-h-[calc(100vh-130px)] lg:overflow-y-auto">
            <div className="flex items-center justify-between gap-2 mb-3 px-1">
              <div className="flex items-center gap-2">
                <p className="text-[13.5px] font-semibold text-[#4a4d55]">Live preview · A4</p>
                <button
                  type="button"
                  onClick={() => setZoom((z) => !z)}
                  aria-pressed={zoom}
                  className="md:hidden h-[28px] px-2.5 rounded-full bg-white border border-black/10 text-[12.5px] font-semibold text-[#151719] cursor-pointer"
                >
                  {zoom ? "Fit" : "Zoom"}
                </button>
              </div>
              <button
                type="button"
                onClick={downloadPdf}
                className="text-[13.5px] font-semibold text-[#cc0a2f] hover:underline cursor-pointer inline-flex items-center gap-1.5"
              >
                <DownloadIcon /> Download PDF
              </button>
            </div>
            {/* The page keeps its A4 proportions and is scaled down to fit narrow screens. */}
            <ScaledPage width={720} fit={!zoom}>
              <div className="bg-white shadow-md rounded-[4px] p-6">
                <CvDocument data={data} />
              </div>
            </ScaledPage>
            {/* PDF copy: only filled-in rows */}
            <div ref={pdfRef} hidden>
              <CvDocument data={data} hideEmpty />
            </div>
          </div>
          <p className="text-[12.5px] text-[#737783] mt-3 px-1">
            Faded rows are empty and won&apos;t appear in the downloaded PDF. In the print window choose{" "}
            <strong>“Save as PDF”</strong> as the destination.
          </p>
        </div>
      </div>
    </div>
  );
}

/** Renders children at least `width` px wide and scales them down to fit a narrower container. */
function ScaledPage({ width, fit, children }: { width: number; fit: boolean; children: React.ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<{ scale: number; innerW: number; height?: number }>({ scale: 1, innerW: width });

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;
    const measure = () => {
      const avail = outer.clientWidth;
      const scale = Math.min(1, avail / width);
      const innerW = scale < 1 ? width : avail;
      setBox({ scale, innerW, height: inner.offsetHeight * scale });
    };
    const ro = new ResizeObserver(measure);
    ro.observe(outer);
    ro.observe(inner);
    return () => ro.disconnect();
  }, [width]);

  const scaled = fit && box.scale < 1;
  return (
    <div
      ref={outerRef}
      className={`w-full ${scaled ? "overflow-hidden" : "overflow-x-auto"}`}
      style={{ height: scaled ? box.height : undefined }}
    >
      <div
        ref={innerRef}
        style={{
          width: box.innerW,
          transform: scaled ? `scale(${box.scale})` : undefined,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ───────────────────────── CV document (preview + PDF) ───────────────────────── */

function CvDocument({ data, hideEmpty = false }: { data: CvData; hideEmpty?: boolean }) {
  return (
    <div className="cvdoc">
      <table>
        <colgroup>
          <col style={{ width: "24%" }} />
          <col style={{ width: "30%" }} />
          <col style={{ width: "28%" }} />
          <col style={{ width: "18%" }} />
        </colgroup>
        {/* In the PDF, thead/tfoot repeat on every page and act as the top/bottom page margin. */}
        {hideEmpty && (
          <thead>
            <tr className="cv-spacer">
              <td colSpan={4} />
            </tr>
          </thead>
        )}
        {hideEmpty && (
          <tfoot>
            <tr className="cv-spacer">
              <td colSpan={4} />
            </tr>
          </tfoot>
        )}
        <tbody>
          <tr>
            <td className="cv-title" colSpan={4}>
              {CV_TITLE_JP}
              <span>{CV_TITLE_EN}</span>
            </td>
          </tr>
          {cvSections.map((section) => (
            <SectionRows key={section.id} section={section} data={data} hideEmpty={hideEmpty} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Number of rows at the top of the first section that sit beside the photo box. */
const PHOTO_ROWS = 6;

function SectionRows({
  section,
  data,
  hideEmpty,
}: {
  section: (typeof cvSections)[number];
  data: CvData;
  hideEmpty: boolean;
}) {
  const isFilled = (key: string) => !!(data[key] ?? "").trim();
  const hasPhotoField = section.groups.some((g) => g.fields.some((f) => f.type === "photo"));
  // In the PDF, an empty photo box is dropped along with the empty rows.
  const showPhoto = hasPhotoField && (!hideEmpty || isFilled("photo"));

  const groups = section.groups
    .map((g) => g.fields.filter((f) => f.type !== "photo" && (!hideEmpty || isFilled(f.key))))
    .filter((fields) => fields.length > 0);

  if (hideEmpty && groups.length === 0 && !showPhoto) return null;

  // Rows that sit beside the photo box (photo cell spans them).
  const photoRows = showPhoto ? Math.max(1, Math.min(PHOTO_ROWS, groups[0]?.length ?? 0)) : 0;

  return (
    <>
      <tr className="cv-gap">
        <td colSpan={4} />
      </tr>
      <tr className="cv-sec">
        <th colSpan={4}>
          {section.jp}　/　{section.en}
        </th>
      </tr>
      {showPhoto && groups.length === 0 && (
        <tr>
          <td colSpan={3} />
          <PhotoCell photo={data.photo} rowSpan={1} />
        </tr>
      )}
      {groups.map((fields, gi) =>
        fields.map((f, fi) => {
          const besidePhoto = gi === 0 && fi < photoRows;
          const empty = !isFilled(f.key);
          return (
            <tr
              key={f.key}
              className={empty ? "cv-empty" : undefined}
              style={gi > 0 && fi === 0 ? { borderTop: "2px solid #9aa0a6" } : undefined}
            >
              <td className="cv-jp">{f.jp}</td>
              <td className="cv-en">{f.en}</td>
              <td className="cv-val" colSpan={besidePhoto ? 1 : 2}>
                {displayValue(f, data[f.key])}
              </td>
              {besidePhoto && fi === 0 && <PhotoCell photo={data.photo} rowSpan={photoRows} />}
            </tr>
          );
        }),
      )}
    </>
  );
}

function PhotoCell({ photo, rowSpan }: { photo?: string; rowSpan: number }) {
  return (
    <td className="cv-photo-cell" rowSpan={rowSpan}>
      {photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="cv-photo" src={photo} alt="" />
      ) : (
        <div className="cv-photo-empty">
          写真
          <br />3 × 4 cm
        </div>
      )}
    </td>
  );
}

function SaveButton({ onSave, flash, tall }: { onSave: () => void; flash: "saved" | "failed" | null; tall?: boolean }) {
  return (
    <button
      type="button"
      onClick={onSave}
      aria-live="polite"
      className={`${tall ? "h-[50px] rounded-[12px]" : "h-[46px] rounded-[10px]"} px-5 border font-semibold transition-colors cursor-pointer inline-flex items-center justify-center gap-2 ${
        flash === "saved"
          ? "border-[#bfe8cd] bg-[#effaf3] text-[#166534]"
          : flash === "failed"
            ? "border-[#f5c2c7] bg-[#fdf0f1] text-[#cc0a2f]"
            : "border-black/15 bg-white text-[#151719] hover:border-[#cc0a2f] hover:text-[#cc0a2f]"
      }`}
    >
      {flash === "saved" ? (
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

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
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
