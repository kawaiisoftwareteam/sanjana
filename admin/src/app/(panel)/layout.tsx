import Link from "next/link";
import { logout } from "../login/actions";

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen md:flex">
      <aside className="flex items-center gap-4 bg-gray-900 p-4 text-gray-200 md:min-h-screen md:w-56 md:flex-col md:items-stretch md:gap-2">
        <span className="mr-auto text-lg font-semibold text-white md:mb-4 md:mr-0">Admin</span>
        <Link href="/" className="rounded px-3 py-2 hover:bg-gray-800">Dashboard</Link>
        <Link href="/jobs" className="rounded px-3 py-2 hover:bg-gray-800">Jobs</Link>
        <form action={logout} className="md:mt-auto">
          <button className="w-full rounded px-3 py-2 text-left hover:bg-gray-800">Sign out</button>
        </form>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
