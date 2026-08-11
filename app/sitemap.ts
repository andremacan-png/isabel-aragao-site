import type { MetadataRoute } from 'next'
import { POSTS } from '@/lib/blog/posts'

const BASE = 'https://isabelaragao.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const paginas: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/saude`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/emagrecimento`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/politica`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const posts: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...paginas, ...posts]
}
