import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

interface SubPageShellProps {
  active?: string;
  children: React.ReactNode;
}

export default function SubPageShell({ active, children }: SubPageShellProps) {
  return (
    <div className="w-full min-h-screen bg-[#f8f9fa] flex flex-col font-['Inter',sans-serif]">
      <SiteHeader activeHref={active} />
      <main className="flex-1 w-full">{children}</main>
      <SiteFooter />
    </div>
  );
}
