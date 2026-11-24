/** Prefix public paths with Vite `base` (needed on GitHub Pages). */
export function asset(path: string): string {
  const clean = path.replace(/^\//, '')
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${clean}`
}
