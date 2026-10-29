import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { TEMAS, getTema, postsDoTema } from '@/lib/blog/temas'
import { BLOG_CSS } from '@/lib/blog/estilos'
import { CLINICA, MEDICA, SITE } from '@/lib/entidade'

type Props = { params: Promise<{ tema: string }> }

export function generateStaticParams() {
  return TEMAS.map((t) => ({ tema: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tema } = await params
  const t = getTema(tema)
  if (!t) return {}
  return {
    title: `${t.titulo} | Dra. Isabel Aragão`,
    description: t.metaDesc,
    alternates: { canonical: `${SITE}/blog/tema/${t.slug}` },
    openGraph: { title: t.titulo, description: t.metaDesc, type: 'website', locale: 'pt_BR' },
  }
}

const WA = 'https://wa.me/5548991593468?text=Ol%C3%A1!%20Vi%20o%20blog%20e%20gostaria%20de%20agendar%20uma%20consulta.'

export default async function PaginaTema({ params }: Props) {
  const { tema } = await params
  const t = getTema(tema)
  if (!t) notFound()
  const posts = postsDoTema(t)
  const url = `${SITE}/blog/tema/${t.slug}`

  const jsonLd: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: t.titulo,
      description: t.metaDesc,
      url,
      inLanguage: 'pt-BR',
      dateModified: t.atualizadoEm,
      author: { '@type': 'Person', '@id': MEDICA.id, name: MEDICA.nome, jobTitle: MEDICA.cargo, identifier: MEDICA.crm },
      publisher: { '@type': 'Organization', '@id': CLINICA.id, name: CLINICA.nome, url: SITE },
      mainEntity: {
        '@type': 'ItemList',
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        itemListElement: posts.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.title, url: `${SITE}/blog/${p.slug}` })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
        { '@type': 'ListItem', position: 3, name: t.nome, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: t.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ]

  return (
    <>
      <style>{BLOG_CSS}</style>
      <div className="bl-body">
        <nav className="bl-nav">
          <Link href="/" className="bl-brand">
            <div className="bl-logo"><img src="/marca/simbolo-branco.png" alt="" width={13} height={22} /></div>
            <span className="bl-name">Dra. Isabel Aragão</span>
          </Link>
          <div className="bl-nav-links">
            <Link href="/">Início</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <a href={WA} className="bl-nav-cta">Agendar Consulta</a>
        </nav>

        <div className="bl-hero">
          <div className="bl-hero-ey">Tema · {posts.length} artigos</div>
          <h1>{t.titulo}</h1>
          <p className="bl-hero-sub">Escrito pela Dra. Isabel Aragão (CRM-SC 26139), médica especialista em emagrecimento em São José/SC.</p>
        </div>

        <div className="bl-crumb">
          <Link href="/">Início</Link> › <Link href="/blog">Blog</Link> › {t.nome}
        </div>

        <div className="bl-wrap">
          <div className="bl-resposta"><strong>Resposta rápida:</strong> {t.resposta}</div>
          <p className="bl-intro">{t.intro}</p>

          <h2 className="bl-h2">Artigos em ordem de leitura</h2>
          <div className="bl-lista">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="bl-item">
                <span className="bl-item-n" aria-hidden="true" />
                <span>
                  <span className="bl-item-t">{p.title}</span>
                  <span className="bl-item-i" style={{ display: 'block' }}>{p.metaDesc}</span>
                </span>
              </Link>
            ))}
          </div>

          <h2 className="bl-h2">Perguntas frequentes</h2>
          <div className="bl-faq">
            {t.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>

          <h2 className="bl-h2">Outros temas</h2>
          <div className="bl-outros">
            {TEMAS.filter((o) => o.slug !== t.slug).map((o) => (
              <Link key={o.slug} href={`/blog/tema/${o.slug}`}>{o.nome}</Link>
            ))}
          </div>

          <div className="bl-cta">
            <div className="bl-cta-ey">Dra. Isabel Aragão · São José/SC</div>
            <h2>Quer saber se o tratamento é para você?</h2>
            <p>Consulta de 90 minutos com bioimpedância e plano individual.<br />Presencial em São José/SC e online.</p>
            <a href={WA} className="bl-cta-btn">💬 Agendar pelo WhatsApp</a>
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </div>
    </>
  )
}
