import Link from "next/link";
import { listJobs } from "@/lib/jobs";
import { deleteJobAction } from "./actions";

export const dynamic = "force-dynamic";

export default async function JobsPage() {
  const jobs = await listJobs();
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Jobs</h1>
        <Link href="/jobs/new" className="rounded bg-gray-900 px-4 py-2 text-sm text-white">+ Add job</Link>
      </div>
      <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b bg-gray-50 text-gray-500">
            <tr>
              {["Title", "Sector", "Location", "Openings", "Demand", "Posted", ""].map((h) => (
                <th key={h} className="px-4 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y">
            {jobs.map((j) => (
              <tr key={j.id}>
                <td className="px-4 py-3 font-medium">{j.title}</td>
                <td className="px-4 py-3">{j.sector}</td>
                <td className="px-4 py-3">{j.city}, {j.country}</td>
                <td className="px-4 py-3">{j.openings}</td>
                <td className="px-4 py-3">{j.demand}</td>
                <td className="px-4 py-3">{j.posted}</td>
                <td className="flex gap-3 px-4 py-3">
                  <Link href={`/jobs/${j.id}`} className="text-blue-600">Edit</Link>
                  <form action={deleteJobAction.bind(null, j.id)}>
                    <button className="text-red-600">Delete</button>
                  </form>
                </td>
              </tr>
            ))}
            {jobs.length === 0 && (
              <tr><td colSpan={7} className="px-4 py-8 text-center text-gray-500">No jobs yet</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
