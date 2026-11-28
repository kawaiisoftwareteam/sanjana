import Link from "next/link";
import { revalidatePath } from "next/cache";
import { listCVs, removeCV } from "@/lib/cvs";
import { T } from "@/lib/i18n";

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
          <h1 className="text-2xl font-semibold">
            <T en="Saved CVs" jp="保存された履歴書" />
          </h1>
          <p className="text-sm text-gray-500">
            <T
              en="Only admins can view, edit, and download submitted candidate CVs."
              jp="管理者のみが提出された履歴書を閲覧・編集・ダウンロードできます。"
            />
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3"><T en="Candidate Name" jp="氏名" /></th>
              <th className="px-4 py-3"><T en="Phone" jp="電話番号" /></th>
              <th className="px-4 py-3"><T en="Email" jp="メール" /></th>
              <th className="px-4 py-3"><T en="Submitted" jp="提出日" /></th>
              <th className="px-4 py-3 text-right"><T en="Actions" jp="操作" /></th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {cvs.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                  <T en="No CVs submitted yet." jp="提出された履歴書はまだありません。" />
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
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1.5">
                      <Link
                        href={`/cvs/${cv.id}`}
                        title="View CV"
                        aria-label="View CV"
                        className="inline-flex items-center justify-center rounded-lg border border-gray-200 p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </Link>
                      <Link
                        href={`/cvs/${cv.id}?edit=1`}
                        title="Edit CV"
                        aria-label="Edit CV"
                        className="inline-flex items-center justify-center rounded-lg border border-gray-200 p-2 text-gray-700 hover:bg-gray-100 hover:text-amber-600"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                        </svg>
                      </Link>
                      <Link
                        href={`/cvs/${cv.id}?download=1`}
                        title="Download PDF"
                        aria-label="Download PDF"
                        className="inline-flex items-center justify-center rounded-lg border border-gray-200 p-2 text-gray-700 hover:bg-gray-100 hover:text-[#cc0a2f]"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3v12" />
                          <path d="m7 10 5 5 5-5" />
                          <path d="M5 21h14" />
                        </svg>
                      </Link>
                      <form action={deleteCvAction} className="inline">
                        <input type="hidden" name="id" value={cv.id} />
                        <button
                          type="submit"
                          title="Delete CV"
                          aria-label="Delete CV"
                          className="inline-flex items-center justify-center rounded-lg border border-gray-200 p-2 text-gray-500 hover:bg-red-50 hover:text-red-600 cursor-pointer"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                          </svg>
                        </button>
                      </form>
                    </div>
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
