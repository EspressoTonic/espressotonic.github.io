import test from 'node:test';
import assert from 'node:assert/strict';
import {
  selectProjects,
  dateKey,
  selectHomepageProjects,
  groupPersonalProjects,
  selectPosts,
} from '../src/lib/policy.mjs';
const entry = (id, data) => ({
  id,
  data: {
    draft: false,
    category: 'research',
    featured: true,
    featuredOrder: 1,
    sortDate: '2026',
    ...data,
  },
});
test('Production excludes drafts regardless of featured state; preview includes them', () => {
  const data = [entry('published', {}), entry('editorial', { draft: true, featuredOrder: 2 })];
  assert.deepEqual(
    selectProjects(data).map((p) => p.id),
    ['published'],
  );
  assert.equal(selectProjects(data, { preview: true }).length, 2);
});
test('Categories and deterministic date precision remain independent', () => {
  const data = [
    entry('older', { sortDate: '2025-09' }),
    entry('newer', { sortDate: '2026-01' }),
    entry('personal', { category: 'personal' }),
  ];
  assert.deepEqual(
    selectProjects(data, { category: 'research' }).map((p) => p.id),
    ['newer', 'older'],
  );
  assert.equal(dateKey('2026'), '2026-01-01');
});
test('Feature ordering does not accidentally select a draft', () => {
  const data = [
    entry('second', { featuredOrder: 2 }),
    entry('first', {}),
    entry('hidden', { draft: true, featuredOrder: 0 }),
  ];
  assert.deepEqual(
    selectProjects(data, { featured: true, limit: 1 }).map((p) => p.id),
    ['first'],
  );
});

test('Unknown periods sort after dated projects with stable ID order', () => {
  const items = [
    entry('z-undated', { sortDate: undefined }),
    entry('dated', { sortDate: '2025' }),
    entry('a-undated', { sortDate: undefined }),
  ];
  assert.deepEqual(
    selectProjects(items).map((p) => p.id),
    ['dated', 'a-undated', 'z-undated'],
  );
});
test('Homepage excludes the hero before limiting research and filters every curated link', () => {
  const items = [
    entry('magraph', { featuredOrder: 1 }),
    entry('vcc', { featuredOrder: 2 }),
    entry('gma', { featuredOrder: 3 }),
    entry('lawgpt', { category: 'personal', draft: true }),
    entry('junior', { category: 'personal' }),
    entry('commute-log', { category: 'personal' }),
  ];
  const home = selectHomepageProjects(items, { heroProjectId: 'magraph' });
  assert.equal(home.hero.id, 'magraph');
  assert.deepEqual(
    home.research.map((p) => p.id),
    ['vcc', 'gma'],
  );
  assert.deepEqual(
    home.personal.map((p) => p.id),
    ['commute-log'],
  );
  assert.deepEqual(
    home.secondaryPersonal.map((p) => p.id),
    ['junior'],
  );
});
test('Personal groups preserve curation and never lose new public records', () => {
  const items = selectProjects(
    [
      entry('lawgpt', { category: 'personal' }),
      entry('fridge-match', { category: 'personal' }),
      entry('new-tool', { category: 'personal' }),
      entry('junior', { category: 'personal', draft: true }),
    ],
    { category: 'personal' },
  );
  const groups = groupPersonalProjects(items);
  assert.deepEqual(
    groups.map((g) => g.title),
    ['Everyday tools', 'Agents & knowledge', 'More projects'],
  );
  assert.deepEqual(
    groups.flatMap((g) => g.items.map((p) => p.id)),
    ['fridge-match', 'lawgpt', 'new-tool'],
  );
  assert.throws(
    () =>
      groupPersonalProjects(items, [
        { title: 'A', ids: ['lawgpt'] },
        { title: 'B', ids: ['lawgpt'] },
      ]),
    /Duplicate curated/,
  );
});
test('Blog has a valid empty state and excludes drafts before sorting', () => {
  assert.deepEqual(selectPosts([]), []);
  const items = [
    entry('draft', { draft: true, publishedDate: '2026-10-13' }),
    entry('older', { publishedDate: '2025-01-01' }),
    entry('newer', { publishedDate: '2026-01-01' }),
  ];
  assert.deepEqual(
    selectPosts(items).map((p) => p.id),
    ['newer', 'older'],
  );
  assert.equal(selectPosts(items, true).length, 3);
});

import { socialProfileIssues, postIssues, validDate } from '../src/lib/validation.mjs';
test('SNS labels allow missing URLs, but reject blank and non-HTTPS destinations', () => {
  assert.deepEqual(
    socialProfileIssues([
      { label: 'LinkedIn' },
      { label: 'Instagram' },
      { label: 'X' },
      { label: 'Threads' },
    ]),
    [],
  );
  assert.equal(socialProfileIssues([{ label: 'X', url: '' }]).length, 1);
  assert.equal(socialProfileIssues([{ label: 'X', url: 'http://example.com' }]).length, 1);
  assert.deepEqual(socialProfileIssues([{ label: 'X', url: 'https://example.com' }]), []);
});
test('Article publication requires real dates, body, language and available project references', () => {
  const project = entry('magraph', {});
  const post = {
    id: 'fixture',
    body: 'An isolated Korean article fixture.',
    data: {
      title: '연구 기록',
      excerpt: '설명',
      language: 'ko',
      draft: false,
      publishedDate: '2026-10-12',
      relatedProjectIds: ['magraph'],
    },
  };
  assert.deepEqual(postIssues(post, [project], '2026-10-13'), []);
  assert.match(
    postIssues(
      { ...post, data: { ...post.data, publishedDate: '2026-10-14' } },
      [project],
      '2026-10-13',
    ).join(),
    /Future/,
  );
  assert.match(
    postIssues(post, [entry('magraph', { draft: true })], '2026-10-13').join(),
    /Unavailable/,
  );
  assert.match(postIssues({ ...post, body: '' }, [project], '2026-10-13').join(), /body/);
  assert.match(
    postIssues(
      { ...post, data: { ...post.data, publishedDate: undefined } },
      [project],
      '2026-10-13',
    ).join(),
    /publication date/,
  );
  assert.equal(validDate('2026-02-30'), false);
  assert.equal(validDate('2024-02-29'), true);
});

import { projectLinkURL } from '../src/lib/validation.mjs';
test('Only project links allow bounded local routes', () => {
  assert.equal(projectLinkURL('/demos/horse-racing/'), true);
  assert.equal(projectLinkURL('https://example.org/path'), true);
  for (const value of [
    '//example.org/',
    '/../../private/',
    '/%2e%2e/',
    '/demos\\evil/',
    'javascript:alert(1)',
    'http://example.org',
    '/demos/?url=https://example.org',
  ])
    assert.equal(projectLinkURL(value), false, value);
});
