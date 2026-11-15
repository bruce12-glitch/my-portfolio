// GitHub Pages project sites are served from a sub-path (/my-portfolio/).
// Next.js does not apply basePath to unoptimized image srcs or to metadata
// icon URLs, so the prefix is applied manually. NEXT_PUBLIC_ vars are
// inlined at build time, which keeps the server-rendered HTML and the
// client bundle consistent (no hydration mismatch).

export const SITE_BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function withBase(path: string): string {
  return `${SITE_BASE}${path}`
}
