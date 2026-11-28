"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CV_TITLE_EN, CV_TITLE_JP, cvSections, displayValue, type CvData, type CvField } from "@/lib/cvFormat";
import { useAdminLang } from "@/lib/i18n";

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

const JP_FALLBACK_MAP: Record<string, string> = {
  Yes: "はい",
  No: "いいえ",
  Male: "男性",
  Female: "女性",
  Single: "未婚",
  Married: "既婚",
  Divorced: "離婚",
  Widowed: "死別",
  "Full-time": "正社員",
  "Part-time": "パート・アルバイト",
  Contract: "契約社員",
  "Self-employed": "自営業",
  Internship: "インターンシップ",
  None: "なし",
  Bangladeshi: "バングラデシュ",
};

function formatJpValue(field: CvField, raw?: string): string {
  const v = (raw ?? "").trim();
  if (!v) return "";
  if (field.type === "month") {
    const m = v.match(/^(\d{4})-(\d{2})$/);
    if (m) return `${m[1]}年${m[2]}月`;
  }
  if (field.type === "date") {
    const d = v.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (d) return `${d[1]}年${d[2]}月${d[3]}日`;
  }
  const mapped = JP_FALLBACK_MAP[v] ?? v;
  return field.unit ? `${mapped} ${field.unit}` : mapped;
}

export default function CvViewer({
  cvId,
  data: initialData,
  fallbackName,
}: {
  cvId: number;
  data: CvData;
  fallbackName?: string;
}) {
  const pdfRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const { lang: adminLang } = useAdminLang();
  const [data, setData] = useState<CvData>(initialData);
  const [lang, setLang] = useState<"bilingual" | "jp">("bilingual");
  const [jpData, setJpData] = useState<CvData | null>(null);
  const [translating, setTranslating] = useState(false);
  const [translateError, setTranslateError] = useState("");
  const [editing, setEditing] = useState(searchParams.get("edit") === "1");
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");

  const switchToJapanese = async () => {
    setLang("jp");
    if (jpData) return;
    setTranslating(true);
    setTranslateError("");
    try {
      const res = await fetch(`/api/cvs/${cvId}/translate`, { method: "POST" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      if (json?.data) setJpData(json.data);
    } catch {
      setTranslateError("Auto-translation failed; showing Japanese labels with original text.");
    } finally {
      setTranslating(false);
    }
  };

  useEffect(() => {
    if (adminLang === "jp") {
      void switchToJapanese();
    } else {
      setLang("bilingual");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminLang]);

  const activeData = lang === "jp" && jpData ? jpData : data;

  const updateField = (key: string, val: string) => {
    if (lang === "jp" && jpData) {
      setJpData({ ...jpData, [key]: val });
    } else {
      setData({ ...data, [key]: val });
    }
  };

  const saveEdits = async () => {
    setSaving(true);
    setSaveMsg("");
    try {
      const nextData = activeData;
      const res = await fetch(`/api/cvs/${cvId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: nextData.fullName ?? "",
          email: nextData.email ?? "",
          phone: nextData.phone ?? "",
          data: nextData,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setData(nextData);
      if (lang === "jp") setJpData(nextData);
      setEditing(false);
      setSaveMsg("Saved");
      setTimeout(() => setSaveMsg(""), 2500);
    } catch {
      setSaveMsg("Failed to save");
    } finally {
      setSaving(false);
    }
  };

  const downloadPdf = () => {
    const html = pdfRef.current?.innerHTML;
    if (!html) return;
    const rawName = data.fullName || fallbackName || "CV";
    const baseName = rawName.replace(/[\\/:*?"<>|\u0000-\u001f]+/g, " ").replace(/\s+/g, " ").trim() || "CV";
    const fileName = lang === "jp" ? `${baseName}_JP` : baseName;
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

  useEffect(() => {
    if (searchParams.get("download") === "1") {
      const timer = setTimeout(() => downloadPdf(), 400);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-4">
      <style>{CV_CSS}</style>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
          <button
            type="button"
            onClick={() => setLang("bilingual")}
            className={`rounded-md px-3 py-1.5 text-sm font-medium cursor-pointer ${
              lang === "bilingual" ? "bg-gray-900 text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Bilingual (JP + EN)
          </button>
          <button
            type="button"
            onClick={switchToJapanese}
            className={`rounded-md px-3 py-1.5 text-sm font-medium cursor-pointer ${
              lang === "jp" ? "bg-gray-900 text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {translating ? "Translating to 日本語..." : "Japanese Only (日本語版)"}
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {saveMsg && <span className="text-xs font-medium text-green-700">{saveMsg}</span>}

          {editing ? (
            <>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={saveEdits}
                disabled={saving}
                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-60 cursor-pointer"
              >
                <CheckIcon /> {saving ? "Saving..." : "Save Changes"}
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
            >
              <EditIcon /> Edit
            </button>
          )}

          <button
            type="button"
            onClick={downloadPdf}
            disabled={translating}
            className="inline-flex items-center gap-2 rounded-lg bg-[#cc0a2f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#a60826] disabled:opacity-60 cursor-pointer"
          >
            <DownloadIcon /> {lang === "jp" ? "Download Japanese PDF (日本語)" : "Download PDF"}
          </button>
        </div>
      </div>

      {translateError && (
        <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
          {translateError}
        </p>
      )}

      {editing ? (
        <div className="rounded-xl bg-white p-6 shadow-sm space-y-6">
          {cvSections.map((sec) => (
            <div key={sec.id} className="space-y-3 border-b pb-5 last:border-b-0">
              <h3 className="text-base font-semibold text-gray-900">
                {lang === "jp" ? sec.jp : `${sec.en} (${sec.jp})`}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {sec.groups.flatMap((g) =>
                  g.fields
                    .filter((f) => f.type !== "photo")
                    .map((f) => (
                      <label key={f.key} className="flex flex-col gap-1 text-xs">
                        <span className="font-medium text-gray-700">
                          {lang === "jp" ? f.jp : f.en}
                        </span>
                        {f.type === "textarea" ? (
                          <textarea
                            rows={2}
                            value={activeData[f.key] ?? ""}
                            onChange={(e) => updateField(f.key, e.target.value)}
                            className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none"
                          />
                        ) : (
                          <input
                            type="text"
                            value={activeData[f.key] ?? ""}
                            onChange={(e) => updateField(f.key, e.target.value)}
                            className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none"
                          />
                        )}
                      </label>
                    )),
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl bg-gray-100 p-4">
          <div className="mx-auto max-w-[800px] rounded bg-white p-6 shadow">
            <CvDocument data={activeData} jpOnly={lang === "jp"} />
          </div>
        </div>
      )}

      <div ref={pdfRef} hidden>
        <CvDocument data={activeData} hideEmpty jpOnly={lang === "jp"} />
      </div>
    </div>
  );
}

function EditIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CvDocument({
  data,
  hideEmpty = false,
  jpOnly = false,
}: {
  data: CvData;
  hideEmpty?: boolean;
  jpOnly?: boolean;
}) {
  const colSpan = jpOnly ? 3 : 4;
  return (
    <div className="cvdoc">
      <table>
        {jpOnly ? (
          <colgroup>
            <col style={{ width: "28%" }} />
            <col style={{ width: "54%" }} />
            <col style={{ width: "18%" }} />
          </colgroup>
        ) : (
          <colgroup>
            <col style={{ width: "24%" }} />
            <col style={{ width: "30%" }} />
            <col style={{ width: "28%" }} />
            <col style={{ width: "18%" }} />
          </colgroup>
        )}
        {hideEmpty && (
          <thead>
            <tr className="cv-spacer">
              <td colSpan={colSpan} />
            </tr>
          </thead>
        )}
        {hideEmpty && (
          <tfoot>
            <tr className="cv-spacer">
              <td colSpan={colSpan} />
            </tr>
          </tfoot>
        )}
        <tbody>
          <tr>
            <td className="cv-title" colSpan={colSpan}>
              {CV_TITLE_JP}
              {!jpOnly && <span>{CV_TITLE_EN}</span>}
            </td>
          </tr>
          {cvSections.map((section) => (
            <SectionRows
              key={section.id}
              section={section}
              data={data}
              hideEmpty={hideEmpty}
              jpOnly={jpOnly}
            />
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
  jpOnly,
}: {
  section: (typeof cvSections)[number];
  data: CvData;
  hideEmpty: boolean;
  jpOnly: boolean;
}) {
  const colSpan = jpOnly ? 3 : 4;
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
        <td colSpan={colSpan} />
      </tr>
      <tr className="cv-sec">
        <th colSpan={colSpan}>{jpOnly ? section.jp : `${section.jp}　/　${section.en}`}</th>
      </tr>
      {showPhoto && groups.length === 0 && (
        <tr>
          <td colSpan={colSpan - 1} />
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
              {!jpOnly && <td className="cv-en">{f.en}</td>}
              <td className="cv-val" colSpan={besidePhoto ? 1 : 2}>
                {jpOnly ? formatJpValue(f, data[f.key]) : displayValue(f, data[f.key])}
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
