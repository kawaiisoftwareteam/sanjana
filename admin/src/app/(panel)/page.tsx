import Link from "next/link";
import { listCVs } from "@/lib/cvs";
import { T } from "@/lib/i18n";
import { listJobs } from "@/lib/jobs";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const [jobs, cvs] = await Promise.all([listJobs(), listCVs()]);
  const openings = jobs.reduce((n, j) => n + j.openings, 0);
  const sectors = new Set(jobs.map((j) => j.sector)).size;
  const stats = [
    { label: <T en="Job listings" jp="求人数" />, value: jobs.length },
    { label: <T en="Total openings" jp="募集人数合計" />, value: openings },
    { label: <T en="Sectors" jp="業種数" />, value: sectors },
    { label: <T en="Saved CVs" jp="保存された履歴書" />, value: cvs.length },
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold"><T en="Dashboard" jp="ダッシュボード" /></h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">{s.label}</p>
            <p className="text-3xl font-semibold">{s.value}</p>
          </div>
        ))}
      </div>
      <section className="rounded-xl bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-semibold"><T en="Latest jobs" jp="最新の求人" /></h2>
          <Link href="/jobs/new" className="text-sm text-blue-600"><T en="+ Add job" jp="+ 求人を追加" /></Link>
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
