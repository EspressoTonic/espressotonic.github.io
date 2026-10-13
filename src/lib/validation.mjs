export const validDate = (value) => {
  if (typeof value !== 'string' || !/^\d{4}(?:-\d{2})?(?:-\d{2})?$/.test(value)) return false;
  const [year, month = 1, day = 1] = value.split('-').map(Number);
  if (year < 1900 || year > 2200 || month < 1 || month > 12) return false;
  const dt = new Date(Date.UTC(year, month - 1, day));
  return dt.getUTCFullYear() === year && dt.getUTCMonth() === month - 1 && dt.getUTCDate() === day;
};
export function socialProfileIssues(items) {
  const issues = [];
  for (const item of items) {
    if (!item.label?.trim()) issues.push('Social label is required');
    if (item.url !== undefined) {
      try {
        if (new URL(item.url).protocol !== 'https:') issues.push('Social URL must be public HTTPS');
      } catch {
        issues.push('Social URL must be public HTTPS');
      }
    }
  }
  return issues;
}
export function postIssues(post, projects, today = new Date().toISOString().slice(0, 10)) {
  const issues = [];
  const d = post.data;
  if (!post.body?.trim()) issues.push('Article body is required');
  if (!d.title?.trim() || !d.excerpt?.trim()) issues.push('Article title and excerpt are required');
  if (!['en', 'ko'].includes(d.language)) issues.push('Article language must be en or ko');
  for (const value of [d.publishedDate, d.updated].filter((v) => v !== undefined))
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || !validDate(value))
      issues.push('Invalid article date');
  if (d.draft !== true) {
    if (!d.publishedDate) issues.push('Published article needs a publication date');
    else if (d.publishedDate > today) issues.push('Future dates do not schedule publication');
  }
  for (const id of d.relatedProjectIds ?? []) {
    const related = projects.find((p) => p.id === id);
    if (!related || (d.draft !== true && related.data.draft !== false))
      issues.push(`Unavailable related project: ${id}`);
  }
  return issues;
}
