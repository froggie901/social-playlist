// Builds relative links so the site works on any host or sub-path.
export function rel(pathname: string, to: string) {
  const parts = pathname.replace(/\.html$/, '').split('/').filter(Boolean);
  const depth = Math.max(parts.length - 1, 0);
  const prefix = depth ? '../'.repeat(depth) : './';
  const clean = to.replace(/^\//, '');
  if (clean === '' ) return prefix + 'index.html';
  if (/\.[a-z0-9]+$/i.test(clean)) return prefix + clean;
  return prefix + clean + '.html';
}
export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
