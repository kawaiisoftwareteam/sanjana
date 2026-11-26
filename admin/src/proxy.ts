import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Cheap gate: only checks the cookie exists. The Django API rejects invalid tokens.
export function proxy(request: NextRequest) {
  const authed = request.cookies.has("admin_token");
  const onLogin = request.nextUrl.pathname === "/login";
  if (!authed && !onLogin) return NextResponse.redirect(new URL("/login", request.url));
  if (authed && onLogin) return NextResponse.redirect(new URL("/", request.url));
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
