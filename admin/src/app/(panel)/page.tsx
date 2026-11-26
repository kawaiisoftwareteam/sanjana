import Link from "next/link";
import { listCVs } from "@/lib/cvs";
import { listJobs } from "@/lib/jobs";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const [jobs, cvs] = await Promise.all([listJobs(), listCVs()]);
  const openings = jobs.reduce((n, j) => n + j.openings, 0);
  const sectors = new Set(jobs.map((j) => j.sector)).size;
  const stats = [
    { label: "Job listings", value: jobs.length },
    { label: "Total openings", value: openings },
    { label: "Sectors", value: sectors },
    { label: "Saved CVs", value: cvs.length },
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">{s.label}</p>
            <p className="text-3xl font-semibold">{s.value}</p>
          </div>
        ))}
      </div>
      <section className="rounded-xl bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-semibold">Latest jobs</h2>
          <Link href="/jobs/new" className="text-sm text-blue-600">+ Add job</Link>
        </div>
        <ul className="divide-y">
          {jobs.slice(0, 5).map((j) => (
            <li key={j.id} className="flex justify-between py-2 text-sm">
              <Link href={`/jobs/${j.id}`} className="hover:underline">{j.title}</Link>
              <span className="text-gray-500">{j.posted}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
