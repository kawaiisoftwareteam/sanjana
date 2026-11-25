"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Dropdown from "@/components/Dropdown";
import { jobs, sectorDemand, allSectors, allVisas, type Job, type Demand } from "@/data/jobs";

const allCities = Array.from(new Set(jobs.map((j) => j.city))).sort();

const demandStyle: Record<Demand, string> = {
  "Very High": "bg-[#cc0a2f] text-white",
  High: "bg-[#ffe1e4] text-[#a60826]",
  Medium: "bg-[#f1f2f4] text-[#4a4d55]",
};

const demandBar: Record<Demand, string> = {
  "Very High": "w-full",
  High: "w-3/4",
  Medium: "w-1/2",
};

type Sort = "newest" | "openings" | "demand";
const sortLabels: Record<Sort, string> = {
  newest: "Newest",
  openings: "Most openings",
  demand: "Highest demand",
};
const demandRank: Record<Demand, number> = { "Very High": 3, High: 2, Medium: 1 };

const inputCls =
  "h-[48px] w-full rounded-[10px] border border-black/15 bg-white px-3 text-[15px] text-[#151719] focus:outline-2 focus:outline-[#cc0a2f]";

export default function JobsBoard() {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState("");
  const [visa, setVisa] = useState("");
  const [city, setCity] = useState("");
  const [sort, setSort] = useState<Sort>("newest");
  const [viewing, setViewing] = useState<Job | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = jobs.filter((j) => {
      if (sector && j.sector !== sector) return false;
      if (visa && j.visa !== visa) return false;
      if (city && j.city !== city) return false;
      if (!q) return true;
      return [j.title, j.sector, j.city, j.country, j.visa, ...j.requirements]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
    return list.sort((a, b) => {
      if (sort === "openings") return b.openings - a.openings;
      if (sort === "demand") return demandRank[b.demand] - demandRank[a.demand];
      return b.posted.localeCompare(a.posted);
    });
  }, [query, sector, visa, city, sort]);

  const totalOpenings = jobs.reduce((s, j) => s + j.openings, 0);
  const openingsBySector = (s: string) =>
    jobs.filter((j) => j.sector === s).reduce((sum, j) => sum + j.openings, 0);

  const hasFilters = query || sector || visa || city;
  const reset = () => {
    setQuery("");
    setSector("");
    setVisa("");
    setCity("");
  };

  return (
    <>
      {/* Hero + Search */}
      <section className="relative w-full bg-[#151719] text-white px-4 sm:px-6 lg:px-12 pt-14 sm:pt-20 pb-24 sm:pb-28 overflow-hidden">
        <img
          src="/figma/global-candidates.webp"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-20 pointer-events-none"
        />
        <div className="relative max-w-[1520px] mx-auto">
          <p className="font-['Inter',sans-serif] text-[#ff8a96] font-semibold tracking-wide text-[15px] uppercase">
            For Candidates
          </p>
          <h1 className="font-['Inter',sans-serif] font-bold text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.1] tracking-tight mt-2 max-w-[820px]">
            Explore Global Opportunities
          </h1>
          <p className="font-['Inter',sans-serif] text-[17px] sm:text-[19px] text-white/85 mt-4 max-w-[680px] leading-[1.55]">
            Search current openings, see which skills are in demand, and apply in
            minutes. Our team will match you with the right employer and guide you
            through training, visa and departure.
          </p>
          <div className="flex flex-wrap gap-6 sm:gap-10 mt-8 font-['Inter',sans-serif]">
            <Stat value={jobs.length.toString()} label="Active job posts" />
            <Stat value={totalOpenings.toString()} label="Total openings" />
            <Stat value={allSectors.length.toString()} label="Sectors hiring" />
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-12 -mt-14 relative z-10">
        <div className="max-w-[1520px] mx-auto bg-white rounded-[18px] shadow-xl p-4 sm:p-6 font-['Inter',sans-serif]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <label className="md:col-span-4 relative">
              <span className="sr-only">Search jobs</span>
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-[#737783]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Job title, skill or keyword (e.g. welder, care)"
                className={`${inputCls} pl-10`}
              />
            </label>
            <Dropdown ariaLabel="Sector" value={sector} onChange={setSector} options={allSectors} placeholder="All sectors" allLabel="All sectors" className="md:col-span-3" />
            <Dropdown ariaLabel="Visa type" value={visa} onChange={setVisa} options={allVisas} placeholder="All visa types" allLabel="All visa types" className="md:col-span-3" />
            <Dropdown ariaLabel="Location" value={city} onChange={setCity} options={allCities} placeholder="All locations" allLabel="All locations" className="md:col-span-2" />
          </div>
        </div>
      </section>

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 font-['Inter',sans-serif]">
        {/* Demand sidebar */}
        <aside className="lg:col-span-4 xl:col-span-3 flex flex-col gap-6">
          <div className="bg-white rounded-[18px] border border-black/5 shadow-sm p-5">
            <h2 className="font-bold text-[#151719] text-[20px]">What’s in demand</h2>
            <p className="text-[#737783] text-[14px] mt-1">
              Click a sector to see its openings.
            </p>
            <ul className="flex flex-col gap-1 mt-4">
              {sectorDemand.map((d) => {
                const count = openingsBySector(d.sector);
                const isActive = sector === d.sector;
                return (
                  <li key={d.sector}>
                    <button
                      type="button"
                      onClick={() => setSector(isActive ? "" : d.sector)}
                      className={`w-full text-left rounded-[10px] px-3 py-2.5 transition-colors cursor-pointer ${
                        isActive ? "bg-[#fff0f2] ring-1 ring-[#cc0a2f]" : "hover:bg-[#f6f6f7]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-[#151719] text-[15px]">{d.sector}</span>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${demandStyle[d.demand]}`}>
                          {d.demand}
                        </span>
                      </div>
                      <div className="h-1.5 bg-[#f1f2f4] rounded-full mt-2 overflow-hidden">
                        <div className={`h-full bg-[#cc0a2f] rounded-full ${demandBar[d.demand]}`} />
                      </div>
                      <div className="flex justify-between text-[12.5px] text-[#737783] mt-1.5">
                        <span>{d.note}</span>
                        <span className="shrink-0 ml-2">{count} openings</span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-[#cc0a2f] text-white rounded-[18px] p-5">
            <h3 className="font-bold text-[18px]">Don’t see your job?</h3>
            <p className="text-white/90 text-[14.5px] mt-1.5 leading-[1.5]">
              Register your profile and we’ll contact you when a matching opening
              comes in.
            </p>
            <Link
              href="/jobs/apply/general"
              className="mt-4 w-full h-[46px] rounded-[10px] bg-white text-[#cc0a2f] font-bold text-[15px] hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Register Your Profile
            </Link>
          </div>
        </aside>

        {/* Results */}
        <section className="lg:col-span-8 xl:col-span-9 flex flex-col gap-5" aria-live="polite">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="text-[#151719] text-[16px]">
              <span className="font-bold">{results.length}</span> job{results.length === 1 ? "" : "s"} found
              {hasFilters && (
                <button type="button" onClick={reset} className="ml-3 text-[#cc0a2f] font-semibold hover:underline cursor-pointer">
                  Clear filters
                </button>
              )}
            </p>
            <label className="flex items-center gap-2 text-[14px] text-[#737783]">
              Sort by
              <Dropdown
                ariaLabel="Sort by"
                value={sortLabels[sort]}
                onChange={(v) => setSort((Object.keys(sortLabels) as Sort[]).find((k) => sortLabels[k] === v) ?? "newest")}
                options={Object.values(sortLabels)}
                placeholder="Newest"
                className="w-[180px]"
                buttonClassName="!h-[40px]"
              />
            </label>
          </div>

          {results.length === 0 ? (
            <div className="bg-white rounded-[18px] border border-black/5 p-10 text-center">
              <p className="font-semibold text-[#151719] text-[18px]">No jobs match your search.</p>
              <p className="text-[#737783] mt-1">Try another keyword or clear the filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
              {results.map((j) => (
                <JobCard key={j.id} job={j} onView={() => setViewing(j)} />
              ))}
            </div>
          )}
        </section>
      </div>

      {viewing && (
        <JobDetailsModal
          job={viewing}
          onClose={() => setViewing(null)}
        />
      )}

    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-[30px] sm:text-[36px] font-bold leading-none">{value}</p>
      <p className="text-white/75 text-[14px] mt-1">{label}</p>
    </div>
  );
}

function JobCard({ job, onView }: { job: Job; onView: () => void }) {
  return (
    <article className="bg-white rounded-[18px] border border-black/5 shadow-sm hover:shadow-md transition-shadow p-5 sm:p-6 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[#cc0a2f] text-[13px] font-semibold uppercase tracking-wide">{job.sector}</p>
          <h3 className="font-bold text-[#151719] text-[20px] leading-tight mt-1">{job.title}</h3>
          <p className="text-[#737783] text-[14.5px] mt-1">
            {job.city}, {job.country}
          </p>
        </div>
        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${demandStyle[job.demand]}`}>
          {job.demand} demand
        </span>
      </div>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-[14px]">
        <Info term="Salary" value={job.salary} />
        <Info term="Openings" value={`${job.openings} positions`} />
        <Info term="Visa" value={job.visa} />
        <Info term="Language" value={job.language} />
      </dl>

      <div className="flex flex-wrap gap-2">
        {job.benefits.map((b) => (
          <span key={b} className="text-[12.5px] bg-[#f1f2f4] text-[#4a4d55] px-2.5 py-1 rounded-full">
            {b}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto pt-1">
        <button
          type="button"
          onClick={onView}
          className="flex-1 h-[46px] rounded-[10px] border border-black/15 text-[#151719] font-semibold text-[15px] hover:border-[#cc0a2f] hover:text-[#cc0a2f] transition-colors cursor-pointer"
        >
          View details
        </button>
        <Link
          href={`/jobs/apply/${job.id}`}
          className="flex-1 h-[46px] rounded-[10px] bg-[#cc0a2f] hover:bg-[#a60826] text-white font-bold text-[15px] transition-colors cursor-pointer inline-flex items-center justify-center"
        >
          Apply Now
        </Link>
      </div>
    </article>
  );
}

function JobDetailsModal({ job, onClose }: { job: Job; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="details-title"
      className="fixed inset-0 z-[100] bg-black/55 flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full sm:max-w-[640px] max-h-[92vh] overflow-y-auto rounded-t-[20px] sm:rounded-[20px] p-6 sm:p-8 font-['Inter',sans-serif]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[#cc0a2f] text-[13px] font-semibold uppercase tracking-wide">{job.sector}</p>
            <h2 id="details-title" className="font-bold text-[#151719] text-[24px] leading-tight mt-1">
              {job.title}
            </h2>
            <p className="text-[#737783] text-[14.5px] mt-1">
              {job.city}, {job.country}
            </p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="text-[#737783] hover:text-[#151719] text-[26px] leading-none cursor-pointer">
            ×
          </button>
        </div>

        <span className={`inline-block mt-4 text-[11px] font-bold px-2.5 py-1 rounded-full ${demandStyle[job.demand]}`}>
          {job.demand} demand
        </span>

        <dl className="grid grid-cols-2 gap-x-4 gap-y-4 text-[14px] mt-5 p-4 rounded-[12px] bg-[#f6f6f7]">
          <Info term="Salary" value={job.salary} />
          <Info term="Openings" value={`${job.openings} positions`} />
          <Info term="Visa" value={job.visa} />
          <Info term="Language" value={job.language} />
          <Info term="Experience" value={job.experience} />
          <Info term="Posted" value={new Date(job.posted).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} />
        </dl>

        <h3 className="font-bold text-[#151719] text-[16px] mt-6">Requirements</h3>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-[14.5px] text-[#4a4d55]">
          {job.requirements.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>

        <h3 className="font-bold text-[#151719] text-[16px] mt-6">Benefits</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {job.benefits.map((b) => (
            <span key={b} className="text-[12.5px] bg-[#f1f2f4] text-[#4a4d55] px-2.5 py-1 rounded-full">
              {b}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-8">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 h-[48px] rounded-[10px] border border-black/15 text-[#151719] font-semibold text-[15px] hover:border-[#cc0a2f] hover:text-[#cc0a2f] transition-colors cursor-pointer"
          >
            Close
          </button>
          <Link
            href={`/jobs/apply/${job.id}`}
            className="flex-1 h-[48px] rounded-[10px] bg-[#cc0a2f] hover:bg-[#a60826] text-white font-bold text-[15px] transition-colors cursor-pointer inline-flex items-center justify-center"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}

function Info({ term, value }: { term: string; value: string }) {
  return (
    <div>
      <dt className="text-[#737783] text-[12.5px]">{term}</dt>
      <dd className="text-[#151719] font-medium">{value}</dd>
    </div>
  );
}
