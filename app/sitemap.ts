import type { MetadataRoute } from 'next'
import { POSTS } from '@/lib/blog/posts'
import { atualizadoEm } from '@/lib/blog/lastmod'

const BASE = 'https://isabelaragao.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  // lastmod REAL por página (ver lib/blog/lastmod.ts). Nunca usar "new Date()" aqui:
  // lastmod igual a "agora" em todas as URLs faz o Google ignorar o campo.
  const paginas: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: '2026-09-03', changeFrequency: 'weekly', priority: 1 },            // footer + marca
    { url: `${BASE}/saude`, lastModified: '2026-06-15', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/emagrecimento`, lastModified: '2026-06-15', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: '2026-09-03', changeFrequency: 'weekly', priority: 0.7 }, // 6 posts novos
    { url: `${BASE}/calculadora-imc`, lastModified: '2026-09-03', changeFrequency: 'monthly', priority: 0.8 },
    // /politica é noindex de propósito (política de privacidade) → NÃO entra no sitemap
    // (sitemap deve listar só páginas indexáveis; senão o GSC alerta "Excluída pela tag noindex").
  ]

  const posts: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: atualizadoEm(p),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...paginas, ...posts]
}
