import { redirect } from "next/navigation";
import { getToken } from "./auth";
import { API_URL } from "./jobs";
import type { CvData } from "./cvFormat";

export interface CandidateCV {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  data: CvData;
  created_at: string;
  updated_at: string;
}

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
  if (res.status === 401 || res.status === 403) redirect("/login");
  return res;
}

export async function listCVs(): Promise<CandidateCV[]> {
  const res = await api("/cvs/");
  if (!res.ok) throw new Error(`Failed to load CVs (${res.status})`);
  return res.json();
}

export async function getCV(id: string): Promise<CandidateCV | undefined> {
  const res = await api(`/cvs/${id}/`);
  if (res.status === 404) return undefined;
  if (!res.ok) throw new Error(`Failed to load CV (${res.status})`);
  return res.json();
}

export async function removeCV(id: string) {
  await api(`/cvs/${id}/`, { method: "DELETE" });
}

