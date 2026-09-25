import 'server-only';

const SQUARE_VERSION = '2025-06-18';

function squareBaseUrl() {
  return process.env.SQUARE_ENVIRONMENT === 'sandbox'
    ? 'https://connect.squareupsandbox.com'
    : 'https://connect.squareup.com';
}

export function getSquareAccessToken() {
  const token = process.env.SQUARE_ACCESS_TOKEN;
  if (!token) {
    throw new Error('SQUARE_ACCESS_TOKEN is not set');
  }
  return token;
}

export function squareFetch(path: string, init: RequestInit = {}) {
  const token = getSquareAccessToken();
  const url = `${squareBaseUrl()}${path.startsWith('/') ? path : `/${path}`}`;
  const headers = new Headers(init.headers);
  headers.set('Authorization', `Bearer ${token}`);
  headers.set('Square-Version', SQUARE_VERSION);
  headers.set('Content-Type', 'application/json');

  return fetch(url, {
    ...init,
    headers,
    cache: 'no-store',
  });
}

export async function squareJson<T = unknown>(path: string, init?: RequestInit) {
  const res = await squareFetch(path, init);
  let body: T | { errors?: { detail?: string; code?: string }[] };
  try {
    body = (await res.json()) as T;
  } catch {
    body = { errors: [{ detail: 'Square returned a non JSON response.' }] };
  }
  return { ok: res.ok, status: res.status, body };
}

export function squareErrorMessage(body: unknown, fallback: string) {
  const errors = (body as { errors?: { detail?: string; code?: string }[] } | null)?.errors;
  if (!errors?.length) return fallback;
  const details = errors
    .map((error) => error.detail || error.code)
    .filter((value): value is string => Boolean(value));
  return details.join(' ') || fallback;
}
