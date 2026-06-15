import type { MetadataRoute } from 'next'

const BASE = 'https://isabelaragao.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: BASE, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/saude`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/emagrecimento`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
  ]
}
