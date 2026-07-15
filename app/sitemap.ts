import type { MetadataRoute } from 'next'
import { POSTS } from '@/lib/blog/posts'

const BASE = 'https://isabelaragao.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const blogPosts: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: BASE, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/saude`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/emagrecimento`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.85 },
    ...blogPosts,
  ]
}
