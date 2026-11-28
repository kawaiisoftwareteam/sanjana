"use client";

import Link from "next/link";
import { AdminLangProvider, T, useAdminLang } from "@/lib/i18n";
import { logout } from "../login/actions";

function SidebarControls() {
  const { lang, setLang } = useAdminLang();
  return (
    <div className="flex items-center gap-1 rounded-lg bg-gray-800 p-1 md:mb-2">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`flex-1 rounded-md px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer ${
          lang === "en" ? "bg-white text-gray-900" : "text-gray-300 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("jp")}
        className={`flex-1 rounded-md px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer ${
          lang === "jp" ? "bg-white text-gray-900" : "text-gray-300 hover:text-white"
        }`}
      >
        日本語
      </button>
    </div>
  );
}

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminLangProvider>
      <div className="min-h-screen md:flex">
        <aside className="flex flex-wrap items-center gap-3 bg-gray-900 p-4 text-gray-200 md:min-h-screen md:w-56 md:flex-col md:items-stretch md:gap-2">
          <span className="mr-auto text-lg font-semibold text-white md:mb-2 md:mr-0">
            <T en="Admin" jp="管理画面" />
          </span>
          <SidebarControls />
          <Link href="/" className="rounded px-3 py-2 hover:bg-gray-800">
            <T en="Dashboard" jp="ダッシュボード" />
          </Link>
          <Link href="/jobs" className="rounded px-3 py-2 hover:bg-gray-800">
            <T en="Jobs" jp="求人管理" />
          </Link>
          <Link href="/cvs" className="rounded px-3 py-2 hover:bg-gray-800">
            <T en="CVs" jp="履歴書一覧" />
          </Link>
          <form action={logout} className="md:mt-auto">
            <button className="w-full rounded px-3 py-2 text-left hover:bg-gray-800 cursor-pointer">
              <T en="Sign out" jp="ログアウト" />
            </button>
          </form>
        </aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </AdminLangProvider>
  );
}
