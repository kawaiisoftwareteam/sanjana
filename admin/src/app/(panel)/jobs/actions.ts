"use server";

import { redirect } from "next/navigation";
import { demands, removeJob, saveJob, type Demand } from "@/lib/jobs";

const lines = (v: FormDataEntryValue | null) =>
  String(v ?? "").split("\n").map((s) => s.trim()).filter(Boolean);

export async function saveJobAction(id: string | number | null, formData: FormData) {
  const str = (k: string) => String(formData.get(k) ?? "").trim();
  const demand = str("demand") as Demand;
  await saveJob(id === null ? null : String(id), {
    title: str("title"),
    sector: str("sector"),
    country: str("country"),
    city: str("city"),
    visa: str("visa"),
    salary: str("salary"),
    openings: Math.max(0, parseInt(str("openings"), 10) || 0),
    language: str("language"),
    experience: str("experience"),
    benefits: lines(formData.get("benefits")),
    requirements: lines(formData.get("requirements")),
    demand: demands.includes(demand) ? demand : "Medium",
    posted: str("posted") || new Date().toISOString().slice(0, 10),
  });
  redirect("/jobs");
}

export async function deleteJobAction(id: number) {
  await removeJob(String(id));
  redirect("/jobs");
}
