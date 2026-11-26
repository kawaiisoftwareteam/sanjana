"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, SESSION_TTL } from "@/lib/auth";
import { API_URL } from "@/lib/jobs";

export async function login(_prev: string | null, formData: FormData): Promise<string | null> {
  let res: Response;
  try {
    res = await fetch(`${API_URL}/auth/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: formData.get("username"), password: formData.get("password") }),
    });
  } catch {
    return "Cannot reach the backend server";
  }
  if (!res.ok) return "Invalid username or password";

  const { token } = await res.json();
  (await cookies()).set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL,
  });
  redirect("/");
}

export async function logout() {
  (await cookies()).delete(SESSION_COOKIE);
  redirect("/login");
}
