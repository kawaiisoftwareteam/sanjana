"use client";

import { useActionState } from "react";
import { login } from "./actions";

export default function LoginPage() {
  const [error, action, pending] = useActionState(login, null);
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <form action={action} className="w-full max-w-sm space-y-4 rounded-xl bg-white p-8 shadow">
        <h1 className="text-xl font-semibold">Admin sign in</h1>
        <input name="username" placeholder="Username" autoComplete="username" required className="w-full rounded border border-gray-300 px-3 py-2" />
        <input name="password" type="password" placeholder="Password" autoComplete="current-password" required className="w-full rounded border border-gray-300 px-3 py-2" />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button disabled={pending} className="w-full rounded bg-gray-900 py-2 text-white disabled:opacity-60">
          {pending ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </main>
  );
}
