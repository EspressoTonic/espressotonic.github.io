export function dateKey(value) {
  if (!value) return '';
  return value.length === 4 ? `${value}-01-01` : value.length === 7 ? `${value}-01` : value;
}
export function selectProjects(
  entries,
  { preview = false, category, featured = false, limit } = {},
) {
  const selected = entries.filter(
    (e) =>
      (preview || !e.data.draft) &&
      (!category || e.data.category === category) &&
      (!featured || e.data.featured),
  );
  selected.sort(
    featured
      ? (a, b) =>
          (a.data.featuredOrder ?? Infinity) - (b.data.featuredOrder ?? Infinity) ||
          a.id.localeCompare(b.id)
      : (a, b) =>
          dateKey(b.data.sortDate).localeCompare(dateKey(a.data.sortDate)) ||
          a.id.localeCompare(b.id),
  );
  return limit === undefined ? selected : selected.slice(0, limit);
}
export function selectPublications(entries, preview = false) {
  const order = { paper: 0, preprint: 1, thesis: 2, software: 3 };
  return entries
    .filter((e) => preview || !e.data.draft)
    .sort(
      (a, b) =>
        order[a.data.type] - order[b.data.type] ||
        dateKey(b.data.date ?? String(b.data.year)).localeCompare(
          dateKey(a.data.date ?? String(a.data.year)),
        ) ||
        a.id.localeCompare(b.id),
    );
}
export function selectPosts(entries, preview = false) {
  return entries
    .filter((e) => preview || !e.data.draft)
    .sort(
      (a, b) =>
        dateKey(b.data.publishedDate).localeCompare(dateKey(a.data.publishedDate)) ||
        a.id.localeCompare(b.id),
    );
}
export const personalGroups = [
  { title: 'Developer tools', ids: ['ai-usage-bar', 'codex-account-switcher'] },
  { title: 'Everyday tools', ids: ['fridge-match', 'location-todo', 'commute-log'] },
  { title: 'Agents & knowledge', ids: ['junior', 'tc-personal-agent', 'lawgpt'] },
  { title: 'Vision & data experiments', ids: ['nookcam', 'ballet-pose-feedback', 'horse-racing'] },
];
export function groupPersonalProjects(entries, groups = personalGroups) {
  const used = new Set();
  const result = groups
    .map((group) => ({
      title: group.title,
      items: group.ids
        .map((id) => {
          if (used.has(id)) throw Error(`Duplicate curated project: ${id}`);
          used.add(id);
          return entries.find((p) => p.id === id);
        })
        .filter(Boolean),
    }))
    .filter((group) => group.items.length);
  const remaining = entries.filter((p) => !used.has(p.id));
  if (remaining.length)
    result.push({ title: 'More projects', items: selectProjects(remaining, { preview: true }) });
  return result;
}
/** @param {any[]} entries @param {{ preview?: boolean, heroProjectId?: string }} [options] */
export function selectHomepageProjects(entries, { preview = false, heroProjectId } = {}) {
  const available = selectProjects(entries, { preview });
  const find = (id) => available.find((p) => p.id === id);
  const hero = find(heroProjectId);
  const research = selectProjects(available, {
    preview: true,
    category: 'research',
    featured: true,
  })
    .filter((p) => p.id !== hero?.id)
    .slice(0, 3);
  const personal = ['ai-usage-bar', 'codex-account-switcher', 'horse-racing']
    .map(find)
    .filter(Boolean);
  return { hero, research, personal };
}
