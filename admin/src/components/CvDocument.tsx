"use client";

import { useRef } from "react";
import { CV_TITLE_EN, CV_TITLE_JP, cvSections, displayValue, type CvData } from "@/lib/cvFormat";

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

const PHOTO_ROWS = 6;

export default function CvViewer({ data, fallbackName }: { data: CvData; fallbackName?: string }) {
  const pdfRef = useRef<HTMLDivElement>(null);

  const downloadPdf = () => {
    const html = pdfRef.current?.innerHTML;
    if (!html) return;
    const rawName = data.fullName || fallbackName || "CV";
    const fileName = rawName.replace(/[\\/:*?"<>|\u0000-\u001f]+/g, " ").replace(/\s+/g, " ").trim() || "CV";
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
        `<style>@page{size:A4;margin:0}html,body{margin:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}body{padding:0 12mm}${CV_CSS}</style>` +
        `</head><body>${html}</body></html>`,
    );
    doc.close();
    const fire = () => {
      const pageTitle = document.title;
      document.title = fileName;
      win.focus();
      win.print();
      setTimeout(() => {
        document.title = pageTitle;
        frame.remove();
      }, 1000);
    };
    const ready = Promise.all([
      doc.fonts?.ready ?? Promise.resolve(),
      ...Array.from(doc.images).map((img) =>
        img.complete ? Promise.resolve() : new Promise((r) => (img.onload = img.onerror = r)),
      ),
    ]);
    Promise.race([ready, new Promise((r) => setTimeout(r, 2500))]).then(fire);
  };

  return (
    <div className="space-y-4">
      <style>{CV_CSS}</style>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Bilingual Japan-format CV (A4)</p>
        <button
          type="button"
          onClick={downloadPdf}
          className="inline-flex items-center gap-2 rounded-lg bg-[#cc0a2f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#a60826] cursor-pointer"
        >
          Download PDF
        </button>
      </div>
      <div className="overflow-x-auto rounded-xl bg-gray-100 p-4">
        <div className="mx-auto max-w-[800px] rounded bg-white p-6 shadow">
          <CvDocument data={data} />
        </div>
      </div>
      <div ref={pdfRef} hidden>
        <CvDocument data={data} hideEmpty />
      </div>
    </div>
  );
}

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
  const showPhoto = hasPhotoField && (!hideEmpty || isFilled("photo"));

  const groups = section.groups
    .map((g) => g.fields.filter((f) => f.type !== "photo" && (!hideEmpty || isFilled(f.key))))
    .filter((fields) => fields.length > 0);

  if (hideEmpty && groups.length === 0 && !showPhoto) return null;

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

