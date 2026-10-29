import type { Metadata } from 'next'
import Link from 'next/link'
import { POSTS } from '@/lib/blog/posts'
import { TEMAS } from '@/lib/blog/temas'
import { BLOG_CSS } from '@/lib/blog/estilos'

export const metadata: Metadata = {
  title: 'Blog — Saúde & Emagrecimento | Dra. Isabel Aragão',
  description: 'Artigos sobre emagrecimento, obesidade, bioimpedância e saúde metabólica pela Dra. Isabel Aragão (CRM-SC 26139), médica de emagrecimento em São José/SC.',
  alternates: { canonical: 'https://isabelaragao.com.br/blog' },
}

// Os 2 artigos que trazem 86% dos cliques do Google (Search Console, jul-out/2026)
const DESTAQUES = ['quanto-tempo-mounjaro-faz-efeito', 'perda-de-peso-saudavel-quantos-kg-por-mes']

const WA = 'https://wa.me/5548991593468?text=Ol%C3%A1!%20Vi%20o%20blog%20e%20gostaria%20de%20agendar%20uma%20consulta.'

export default function BlogIndex() {
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
          <div className="bl-hero-ey">Blog · Saúde & Emagrecimento</div>
          <h1>Informação de verdade sobre emagrecimento</h1>
          <p className="bl-hero-sub">Artigos escritos pela Dra. Isabel Aragão (CRM-SC 26139) sobre obesidade, metabolismo e tratamento — sem promessas, sem atalhos.</p>
        </div>

        <div className="bl-wrap">
          <div className="bl-sec-title">Temas</div>
          <div className="bl-temas">
            {TEMAS.map((t) => (
              <Link key={t.slug} href={`/blog/tema/${t.slug}`} className="bl-tema">
                <div className="bl-tema-n">{t.nome}</div>
                <div className="bl-tema-d">{t.resumo}</div>
                <div className="bl-tema-c">{t.posts.length} artigos →</div>
              </Link>
            ))}
          </div>

          <div className="bl-sec-title">Mais lidos</div>
          <div className="bl-destaques">
            {DESTAQUES.map((slug) => POSTS.find((p) => p.slug === slug)).filter(Boolean).map((p) => (
              <Link key={p!.slug} href={`/blog/${p!.slug}`} className="bl-destaque">
                <div className="bl-destaque-ey">{p!.category} · {p!.readTime}</div>
                <div className="bl-destaque-t">{p!.title}</div>
                <div className="bl-destaque-s">{p!.metaDesc}</div>
              </Link>
            ))}
          </div>

          <div className="bl-sec-title">Todos os artigos</div>
          <div className="bl-grid">
            {POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="bl-card">
                <div className="bl-card-top">
                  <span className="bl-card-cat">{post.category}</span>
                  <span className="bl-card-time">⏱ {post.readTime}</span>
                </div>
                <div className="bl-card-title">{post.shortTitle}</div>
                <div className="bl-card-intro">{post.intro}</div>
                <div className="bl-card-footer">
                  <span className="bl-card-num">{post.date}</span>
                  <span className="bl-card-cta">Ler artigo →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="bl-cta">
            <div className="bl-cta-ey">Dra. Isabel Aragão · São José/SC</div>
            <h2>Pronta para dar o primeiro passo?</h2>
            <p>Avaliação completa com bioimpedância e plano individualizado.<br />Atendimento presencial em São José/SC.</p>
            <a href={WA} className="bl-cta-btn">💬 Agendar pelo WhatsApp</a>
          </div>
        </div>
      </div>
    </>
  )
}
