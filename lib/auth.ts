/**
 * Simple client-side auth for a personal site.
 * Change PASSWORD to whatever you want — no backend required.
 */

// Contraseña desde variable de entorno → NEXT_PUBLIC_SITE_PASSWORD en Vercel
// Fallback: "aiml2025" para desarrollo local
export const PASSWORD = process.env.NEXT_PUBLIC_SITE_PASSWORD ?? "aiml2025";

const AUTH_KEY = "aiml-auth-token";
const EXPIRY_DAYS = 30;

interface AuthToken {
  ok: true;
  exp: number; // Unix ms timestamp
}

/** Persist a valid auth token (30-day expiry). */
export function login(password: string): boolean {
  if (password !== PASSWORD) return false;
  const token: AuthToken = {
    ok: true,
    exp: Date.now() + EXPIRY_DAYS * 24 * 60 * 60 * 1000,
  };
  localStorage.setItem(AUTH_KEY, JSON.stringify(token));
  return true;
}

/** Clear the auth token. */
export function logout(): void {
  localStorage.removeItem(AUTH_KEY);
}

/** Returns true if a valid, non-expired token exists. */
export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    if (!raw) return false;
    const token = JSON.parse(raw) as AuthToken;
    return token.ok === true && token.exp > Date.now();
  } catch {
    return false;
  }
}
