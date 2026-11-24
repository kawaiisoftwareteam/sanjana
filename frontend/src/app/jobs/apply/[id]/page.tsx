import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SubPageShell from "@/components/SubPageShell";
import { jobs } from "@/data/jobs";
import ApplyForm from "./ApplyForm";

const GENERAL_ID = "general";

export function generateStaticParams() {
  return [...jobs.map((j) => ({ id: j.id })), { id: GENERAL_ID }];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  return {
    title: `${job ? `Apply: ${job.title}` : "Register Your Profile"} | Sanjana International`,
  };
}

export default async function ApplyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  if (!job && id !== GENERAL_ID) notFound();

  return (
    <SubPageShell active="/jobs">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14 font-['Inter',sans-serif]">
        <Link href="/jobs" className="text-[14.5px] font-semibold text-[#cc0a2f] hover:underline">
          ← Back to all jobs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-5">
          <div className="lg:col-span-7 xl:col-span-8 order-2 lg:order-1">
            <h1 className="font-bold text-[#151719] text-[28px] sm:text-[36px] tracking-tight leading-[1.15]">
              {job ? `Apply for ${job.title}` : "Register Your Profile"}
            </h1>
            <p className="text-[#737783] text-[16px] mt-2 mb-6">
              {job
                ? "Fill in your details and our team will contact you within 2–3 working days."
                : "Tell us about yourself and we’ll contact you when a matching opening comes in."}
            </p>
            <ApplyForm jobTitle={job?.title ?? "General Registration"} />
          </div>

          {job && (
            <aside className="lg:col-span-5 xl:col-span-4 order-1 lg:order-2">
              <div className="bg-white rounded-[18px] border border-black/5 shadow-sm p-5 sm:p-6 lg:sticky lg:top-[108px]">
                <p className="text-[#cc0a2f] text-[13px] font-semibold uppercase tracking-wide">{job.sector}</p>
                <h2 className="font-bold text-[#151719] text-[20px] leading-tight mt-1">{job.title}</h2>
                <p className="text-[#737783] text-[14.5px] mt-1">
                  {job.city}, {job.country}
                </p>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-[14px] mt-5">
                  <Info term="Salary" value={job.salary} />
                  <Info term="Openings" value={`${job.openings} positions`} />
                  <Info term="Visa" value={job.visa} />
                  <Info term="Language" value={job.language} />
                </dl>
                <p className="font-semibold text-[#151719] text-[14px] mt-5">Requirements</p>
                <ul className="list-disc pl-5 mt-1 space-y-0.5 text-[14px] text-[#4a4d55]">
                  {job.requirements.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </div>
      </div>
    </SubPageShell>
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
