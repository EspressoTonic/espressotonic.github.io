import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const id = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const period = z.string().regex(/^\d{4}(?:-\d{2})?(?:-\d{2})?$/);
const url = z.url().refine((v) => v.startsWith('https://'), 'Use a public HTTPS URL');
const link = z.object({ label: z.string().min(1), url });
const profile = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/profile' }),
  schema: z.object({
    name: z.string(),
    headline: z.string(),
    email: z.email().optional(),
    links: z.array(link).default([]),
    socialProfiles: z
      .array(z.object({ label: z.string().min(1), url: url.optional() }))
      .default([]),
    heroProjectId: id.optional(),
    exploring: z.string().min(1).optional(),
    background: z.string().min(1).optional(),
    interests: z.array(z.object({ title: z.string(), description: z.string() })),
    updated: date,
  }),
});
const cv = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/cv' }),
  schema: z.object({
    experience: z.array(
      z.object({
        id,
        organization: z.string(),
        role: z.string(),
        period: z.string(),
        start: period.optional(),
        end: period.optional(),
        current: z.boolean(),
        bullets: z.array(z.string()),
      }),
    ),
    education: z.array(
      z.object({
        id,
        institution: z.string(),
        degree: z.string(),
        period: z.string(),
        start: period.optional(),
        end: period.optional(),
        thesisTitle: z.string().optional(),
      }),
    ),
    skills: z.array(z.object({ name: z.string(), items: z.array(z.string()) })),
    languages: z.array(z.string()).optional(),
    awards: z
      .array(
        z.object({
          title: z.string(),
          issuer: z.string().optional(),
          year: z.number().int().optional(),
        }),
      )
      .optional(),
    selectedProjectIds: z.array(id),
    selectedPublicationIds: z.array(id),
    updated: date,
  }),
});
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) => {
    const cover = z.object({
      src: image(),
      alt: z.string().min(1),
      caption: z.string().optional(),
    });
    return z
      .object({
        title: z.string(),
        summary: z.string(),
        shortSummary: z.string().min(1).optional(),
        category: z.enum(['research', 'personal']),
        context: z.enum(['academic', 'industry', 'independent']),
        status: z.enum(['ongoing', 'completed', 'prototype', 'archived']),
        statusDetail: z.string().optional(),
        role: z.string(),
        dateLabel: z.string().min(1).optional(),
        sortDate: period.optional(),
        featured: z.boolean().default(false),
        featuredOrder: z.number().int().optional(),
        draft: z.boolean().default(true),
        topics: z.array(z.string()).default([]),
        cover: cover.optional(),
        figures: z
          .array(cover.extend({ id, caption: z.string(), attribution: z.string().optional() }))
          .default([]),
        links: z
          .array(link.extend({ kind: z.enum(['code', 'paper', 'demo', 'write-up']) }))
          .default([]),
        publicationIds: z.array(id).default([]),
        updated: date,
      })
      .refine((v) => !v.featured || v.featuredOrder !== undefined, {
        message: 'Featured projects need featuredOrder',
      });
  },
});
const publications = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    ownerAuthorIndex: z.number().int().nonnegative().optional(),
    year: z.number().int(),
    date: date.optional(),
    venue: z.string().optional(),
    type: z.enum(['paper', 'preprint', 'thesis', 'software']),
    status: z.enum(['published', 'accepted', 'preprint', 'completed', 'released', 'in-progress']),
    doi: z.string().optional(),
    url: url.optional(),
    draft: z.boolean().default(true),
    updated: date,
  }),
});
const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z
    .object({
      title: z.string().min(1),
      excerpt: z.string().min(1),
      language: z.enum(['en', 'ko']),
      draft: z.boolean().default(true),
      publishedDate: date.optional(),
      updated: date.optional(),
      relatedProjectIds: z.array(id).default([]),
    })
    .refine((v) => v.draft || v.publishedDate !== undefined, {
      message: 'Published articles need a publication date',
    }),
});
export const collections = { profile, cv, projects, publications, blog };
