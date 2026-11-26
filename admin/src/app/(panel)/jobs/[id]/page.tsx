import { notFound } from "next/navigation";
import { getJob } from "@/lib/jobs";
import JobForm from "../JobForm";

export const dynamic = "force-dynamic";

export default async function EditJobPage({ params }: { params: Promise<{ id: string }> }) {
  const job = await getJob((await params).id);
  if (!job) notFound();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Edit job</h1>
      <JobForm job={job} />
    </div>
  );
}
