import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Painéis internos (têm dados de negócio) e rotas utilitárias fora do índice
      disallow: ['/painel', '/painel2', '/blog-preview', '/api/'],
    },
    sitemap: 'https://isabelaragao.com.br/sitemap.xml',
    host: 'https://isabelaragao.com.br',
  }
}
