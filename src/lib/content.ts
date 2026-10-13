import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import {
  selectProjects,
  selectPublications,
  selectPosts,
  selectHomepageProjects,
  groupPersonalProjects,
} from './policy.mjs';
export const preview = import.meta.env.DEV;
export async function profile() {
  const records = await getCollection('profile');
  if (records.length !== 1) throw new Error('Exactly one profile is required');
  return records[0]!;
}
export async function cv() {
  const records = await getCollection('cv');
  if (records.length !== 1) throw new Error('Exactly one CV is required');
  return records[0]!;
}
export async function projects(
  options: { category?: 'research' | 'personal'; featured?: boolean; limit?: number } = {},
) {
  return selectProjects(await getCollection('projects'), {
    ...options,
    preview,
  }) as CollectionEntry<'projects'>[];
}
export async function publications() {
  return selectPublications(
    await getCollection('publications'),
    preview,
  ) as CollectionEntry<'publications'>[];
}
export function label(value: string) {
  return value[0]!.toUpperCase() + value.slice(1);
}
export function projectUrl(id: string) {
  return `/projects/${id}/`;
}
export function reviewDate(value: string) {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(value + 'T12:00:00Z'));
}

export async function posts() {
  return selectPosts(await getCollection('blog'), preview) as CollectionEntry<'blog'>[];
}
export function postUrl(id: string) {
  return `/blog/${id}/`;
}
export async function homepageProjects() {
  const p = await profile();
  return selectHomepageProjects(await getCollection('projects'), {
    preview,
    heroProjectId: p.data.heroProjectId,
  }) as {
    hero?: CollectionEntry<'projects'>;
    research: CollectionEntry<'projects'>[];
    personal: CollectionEntry<'projects'>[];
    secondaryPersonal: CollectionEntry<'projects'>[];
  };
}
export async function personalProjectGroups() {
  return groupPersonalProjects(await projects({ category: 'personal' })) as {
    title: string;
    items: CollectionEntry<'projects'>[];
  }[];
}
