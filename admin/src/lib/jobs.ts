import { redirect } from "next/navigation";
import { getToken } from "./auth";

export type Demand = "Very High" | "High" | "Medium";
export const demands: Demand[] = ["Very High", "High", "Medium"];

export interface Job {
  id: number;
  title: string;
  sector: string;
  country: string;
  city: string;
  visa: string;
  salary: string;
  openings: number;
  language: string;
  experience: string;
  benefits: string[];
  requirements: string[];
  demand: Demand;
  posted: string; // ISO date
}

export type JobInput = Omit<Job, "id">;

export const API_URL = process.env.API_URL ?? "http://127.0.0.1:8000/api";

async function api(path: string, init: RequestInit = {}) {
  const token = await getToken();
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Token ${token}` } : {}),
    },
  });
  // Expired/invalid token: send the user back to sign in
  if (res.status === 401 || res.status === 403) redirect("/login");
  return res;
}

export async function listJobs(): Promise<Job[]> {
  const res = await api("/jobs/");
  if (!res.ok) throw new Error(`Failed to load jobs (${res.status})`);
  return res.json();
}

export async function getJob(id: string): Promise<Job | undefined> {
  const res = await api(`/jobs/${id}/`);
  if (res.status === 404) return undefined;
  if (!res.ok) throw new Error(`Failed to load job (${res.status})`);
  return res.json();
}

export async function saveJob(id: string | null, job: JobInput) {
  const res = await api(id ? `/jobs/${id}/` : "/jobs/", { method: id ? "PUT" : "POST", body: JSON.stringify(job) });
  if (!res.ok) throw new Error(`Failed to save job: ${await res.text()}`);
}

export async function removeJob(id: string) {
  await api(`/jobs/${id}/`, { method: "DELETE" });
}
