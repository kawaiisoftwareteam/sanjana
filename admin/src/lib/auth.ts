// The session is the Django API token, kept in an httpOnly cookie.
import { cookies } from "next/headers";

export const SESSION_COOKIE = "admin_token";
export const SESSION_TTL = 60 * 60 * 8; // seconds

export async function getToken() {
  return (await cookies()).get(SESSION_COOKIE)?.value;
}
