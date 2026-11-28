import { NextResponse } from "next/server";
import { getToken } from "@/lib/auth";
import { API_URL } from "@/lib/jobs";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const token = await getToken();
  if (!token) {
    return NextResponse.json({ detail: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const body = await req.text();
  const res = await fetch(`${API_URL}/cvs/${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body,
    cache: "no-store",
  });
  const text = await res.text();
  return new NextResponse(text, {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}
