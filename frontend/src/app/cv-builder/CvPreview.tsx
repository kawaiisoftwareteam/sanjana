"use client";

import { useEffect, useRef, useState } from "react";
import { CV_TITLE_EN, CV_TITLE_JP, cvSections, displayValue, type CvData } from "./cvFormat";

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
.cvdoc .cv-empty td:not(.cv-photo-cell){opacity:.45}
.cvdoc .cv-spacer td{height:11mm;padding:0;border:none}`;

const PHOTO_ROWS = 6;

// Read-only live preview. Candidates can't download or print their CV; only the admin team can.
export default function CvPreview({ data }: { data: CvData }) {
  const [zoom, setZoom] = useState(false);
  return (
    <div className="cv-preview-root bg-[#e9ebee] rounded-[18px] p-2.5 sm:p-5 lg:max-h-[calc(100vh-130px)] lg:overflow-y-auto">
      <style>{CV_CSS + "@media print{.cv-preview-root{display:none!important}}"}</style>
      <div className="flex items-center justify-between gap-2 mb-3 px-1">
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
      <div className="select-none" onContextMenu={(e) => e.preventDefault()}>
        <ScaledPage width={720} fit={!zoom}>
          <div className="bg-white shadow-md rounded-[4px] p-6">
            <CvDocument data={data} />
          </div>
        </ScaledPage>
      </div>
      <p className="text-[12.5px] text-[#737783] mt-3 px-1">
        Preview only. Your submitted CV is formatted and downloaded by the Sanjana HR admin team.
      </p>
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

