import Link from "next/link";
import { notFound } from "next/navigation";
import CvViewer from "@/components/CvDocument";
import { getCV } from "@/lib/cvs";

export const dynamic = "force-dynamic";

export default async function CvDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cv = await getCV(id);
  if (!cv) notFound();

  const name = cv.full_name || cv.data?.fullName || `Candidate #${cv.id}`;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link href="/cvs" className="text-sm text-blue-600 hover:underline">
            ← Back to Saved CVs
          </Link>
          <h1 className="mt-1 text-2xl font-semibold">{name}</h1>
          <p className="text-sm text-gray-500">
            Submitted {new Date(cv.created_at).toLocaleString()}
          </p>
        </div>
      </div>

      <CvViewer data={cv.data ?? {}} fallbackName={name} />
    </div>
  );
}

