import Link from "next/link";
import { revalidatePath } from "next/cache";
import { listCVs, removeCV } from "@/lib/cvs";

export const dynamic = "force-dynamic";

async function deleteCvAction(formData: FormData) {
  "use server";
  const id = String(formData.get("id") ?? "");
  if (id) {
    await removeCV(id);
    revalidatePath("/cvs");
  }
}

export default async function CvsPage() {
  const cvs = await listCVs();
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Saved CVs</h1>
          <p className="text-sm text-gray-500">Only admins can view and download submitted candidate CVs.</p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3">Candidate Name</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Submitted</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {cvs.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                  No CVs submitted yet.
                </td>
              </tr>
            ) : (
              cvs.map((cv) => (
                <tr key={cv.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">
                    <Link href={`/cvs/${cv.id}`} className="text-blue-600 hover:underline">
                      {cv.full_name || cv.data?.fullName || `Candidate #${cv.id}`}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{cv.phone || cv.data?.phone || "—"}</td>
                  <td className="px-4 py-3 text-gray-600">{cv.email || cv.data?.email || "—"}</td>
                  <td className="px-4 py-3 text-gray-500">{new Date(cv.created_at).toLocaleDateString()}</td>
                  <td className="px-4 py-3 text-right space-x-3">
                    <Link href={`/cvs/${cv.id}`} className="font-medium text-blue-600 hover:underline">
                      View / Download
                    </Link>
                    <form action={deleteCvAction} className="inline">
                      <input type="hidden" name="id" value={cv.id} />
                      <button type="submit" className="text-red-600 hover:underline cursor-pointer">
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

