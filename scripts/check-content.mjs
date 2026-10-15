import {
  validDate,
  socialProfileIssues,
  postIssues,
  projectLinkURL,
} from '../src/lib/validation.mjs';
import { collection } from './read-content.mjs';
import { access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
if (process.env.CONTENT_PREVIEW)
  throw Error(
    'Release/check commands reject CONTENT_PREVIEW. Use astro dev for public-safe editorial drafts.',
  );
const [profile, cv, projects, publications, blog] = await Promise.all(
  ['profile', 'cv', 'projects', 'publications', 'blog'].map(collection),
);
const issues = [];
for (const [name, records] of [
  ['profile', profile],
  ['cv', cv],
])
  if (records.length !== 1) issues.push(`${name}: exactly one record required`);
const projectIds = new Set(projects.map((p) => p.id));
const outputIds = new Set(publications.map((p) => p.id));
const orders = new Set();
for (const p of [...projects, ...publications]) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.id)) issues.push(`${p.id}: invalid filename ID`);
  if (!validDate(p.data.updated)) issues.push(`${p.id}: invalid review date`);
}
for (const p of projects) {
  if (p.data.sortDate !== undefined && !validDate(p.data.sortDate))
    issues.push(`${p.id}: invalid sortDate`);
  if (/^# /m.test(p.body)) issues.push(`${p.id}: body must begin at H2, not H1`);
  if (!p.body.trim()) issues.push(`${p.id}: case-study body missing`);
  if (p.data.featured) {
    const key = `${p.data.category}:${p.data.featuredOrder}`;
    if (orders.has(key)) issues.push(`${p.id}: duplicate featuredOrder`);
    orders.add(key);
  }
  for (const id of p.data.publicationIds ?? [])
    if (!outputIds.has(id)) issues.push(`${p.id}: unknown publication ${id}`);
  for (const image of [p.data.cover, ...(p.data.figures ?? [])].filter(Boolean)) {
    const imagePath = resolve(dirname(p.file), image.src);
    if (!imagePath.startsWith(resolve('src/assets') + '/'))
      issues.push(`${p.id}: image must resolve under src/assets`);
    try {
      await access(imagePath);
    } catch {
      issues.push(`${p.id}: missing image ${image.src}`);
    }
    if (!image.alt?.trim()) issues.push(`${p.id}: missing image alt`);
  }
  for (const link of p.data.links ?? [])
    if (!projectLinkURL(link.url) || !link.label?.trim())
      issues.push(`${p.id}: invalid public link`);
}
for (const p of publications) {
  if (
    p.data.ownerAuthorIndex !== undefined &&
    (p.data.ownerAuthorIndex < 0 || p.data.ownerAuthorIndex >= p.data.authors.length)
  )
    issues.push(`${p.id}: author index out of bounds`);
  const status = {
    paper: ['published', 'accepted', 'in-progress'],
    preprint: ['preprint', 'in-progress'],
    thesis: ['completed', 'in-progress'],
    software: ['released', 'in-progress'],
  }[p.data.type];
  if (!status?.includes(p.data.status))
    issues.push(`${p.id}: invalid output type/status combination`);
}
for (const c of cv) {
  for (const id of c.data.selectedProjectIds ?? [])
    if (!projectIds.has(id) || projects.find((p) => p.id === id)?.data.draft)
      issues.push(`CV: unavailable project ${id}`);
  for (const id of c.data.selectedPublicationIds ?? [])
    if (!outputIds.has(id) || publications.find((p) => p.id === id)?.data.draft)
      issues.push(`CV: unavailable publication ${id}`);
  for (const e of [...c.data.experience, ...c.data.education]) {
    for (const d of [e.start, e.end].filter(Boolean))
      if (!validDate(d)) issues.push(`${e.id}: invalid date`);
    if (e.current && e.end) issues.push(`${e.id}: current role cannot have an end date`);
  }
}
for (const p of profile) {
  if (!validDate(p.data.updated)) issues.push('Profile: invalid review date');
  issues.push(...socialProfileIssues(p.data.socialProfiles ?? []));
  if (p.data.heroProjectId) {
    const hero = projects.find((project) => project.id === p.data.heroProjectId);
    if (!hero || hero.data.draft || hero.data.category !== 'research')
      issues.push('Profile: hero project must be available public research');
  }
}
for (const c of cv) if (!validDate(c.data.updated)) issues.push('CV: invalid review date');
for (const p of blog) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.id)) issues.push(`${p.id}: invalid article ID`);
  if (/^# /m.test(p.body)) issues.push(`${p.id}: article body must begin at H2`);
  issues.push(...postIssues(p, projects).map((issue) => `${p.id}: ${issue}`));
}
if (issues.length) throw Error(issues.join('\n'));
console.log(
  `Content references valid: ${projects.length} projects (${projects.filter((p) => p.data.draft).length} draft), ${publications.length} outputs, ${blog.length} blog posts.`,
);
