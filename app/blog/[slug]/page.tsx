import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { POSTS, getPost, getRelatedPosts } from '@/lib/blog/posts'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Dra. Isabel Aragão`,
    description: post.metaDesc,
    alternates: { canonical: `https://isabelaragao.com.br/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDesc,
      type: 'article',
      locale: 'pt_BR',
    },
  }
}

const WA_BASE = 'https://wa.me/5548991593468'
const WA_NAV = `${WA_BASE}?text=Ol%C3%A1!%20Vi%20o%20blog%20e%20gostaria%20de%20agendar%20uma%20consulta.`
const WA_FINAL = `${WA_BASE}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Isabel.`
const WA_SIDEBAR = `${WA_BASE}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20emagrecimento.`

function waForPost(title: string) {
  return `${WA_BASE}?text=${encodeURIComponent(`Olá! Li o artigo "${title}" e gostaria de saber mais.`)}`
}

const STYLES = `
  :root{--roxo:#1E1145;--roxo-mid:#3B2574;--ambar:#E8823A;--ambar-l:#F5A623;
    --cream:#F7F3EF;--cream2:#EDE6DC;--text:#2C1A5C;--text-body:#3D3450;
    --muted:#7C6DA8;--surface:#FFFFFF;--border:rgba(30,17,69,.10);}
  @media(prefers-color-scheme:dark){
    :root{--cream:#14102A;--cream2:#1C1640;--surface:#1E1A38;--text:#EDE6DC;--text-body:#CCC3E8;--muted:#9B8FCC;--border:rgba(255,255,255,.10);}
  }
  *{box-sizing:border-box;margin:0;padding:0;}
  .bp{background:var(--cream);color:var(--text-body);font-family:system-ui,-apple-system,sans-serif;line-height:1.7;}
  /* NAV */
  .bp-nav{background:var(--roxo);display:flex;align-items:center;justify-content:space-between;padding:0 28px;height:60px;position:sticky;top:0;z-index:100;}
  .bp-brand{display:flex;align-items:center;gap:10px;text-decoration:none;}
  .bp-logo{width:32px;height:32px;background:var(--ambar);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;}
  .bp-name{color:#fff;font-weight:800;font-size:15px;}
  .bp-nav-links{display:flex;gap:20px;}
  .bp-nav-links a{color:rgba(255,255,255,.7);font-size:13px;font-weight:600;text-decoration:none;}
  .bp-nav-cta{background:var(--ambar);color:#fff;font-weight:800;font-size:13px;padding:8px 16px;border-radius:8px;text-decoration:none;white-space:nowrap;}
  @media(max-width:600px){.bp-nav-links{display:none;}}
  /* BREADCRUMB */
  .bp-crumb{background:var(--cream2);padding:10px 28px;font-size:12px;color:var(--muted);}
  .bp-crumb a{color:var(--muted);text-decoration:none;}
  .bp-crumb a:hover{color:var(--ambar);}
  /* LAYOUT */
  .bp-page{max-width:1100px;margin:0 auto;padding:36px 20px 80px;display:grid;grid-template-columns:1fr 300px;gap:48px;}
  @media(max-width:760px){.bp-page{grid-template-columns:1fr;gap:0;}}
  /* ARTICLE HEADER */
  .bp-tag{display:inline-block;background:rgba(232,130,58,.12);color:var(--ambar);font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;padding:4px 10px;border-radius:6px;margin-bottom:14px;}
  .bp-title{font-size:30px;font-weight:800;color:var(--text);line-height:1.2;letter-spacing:-.02em;margin-bottom:14px;}
  @media(max-width:600px){.bp-title{font-size:22px;}}
  .bp-intro{font-size:17px;color:var(--muted);line-height:1.6;margin-bottom:20px;font-weight:500;}
  .bp-meta{display:flex;align-items:center;gap:14px;font-size:12px;color:var(--muted);padding:14px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border);flex-wrap:wrap;margin-bottom:28px;}
  .bp-av{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#3B2574,#1E1145);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:13px;flex-shrink:0;}
  .bp-av-name{font-weight:700;color:var(--text);}
  .bp-meta-r{margin-left:auto;display:flex;gap:14px;}
  /* CONTENT */
  .bp-content h2{font-size:20px;font-weight:800;color:var(--text);margin:32px 0 12px;letter-spacing:-.01em;}
  .bp-content h3{font-size:16px;font-weight:700;color:var(--text);margin:22px 0 8px;}
  .bp-content p{margin-bottom:16px;font-size:16px;line-height:1.72;}
  .bp-content ul{margin:12px 0 20px;padding:0;list-style:none;}
  .bp-content ul li{padding:6px 0 6px 24px;position:relative;font-size:16px;line-height:1.6;}
  .bp-content ul li::before{content:'→';position:absolute;left:0;color:var(--ambar);font-weight:700;}
  .bp-content strong{color:var(--text);font-weight:700;}
  .bp-content em{font-style:italic;}
  /* CTA INLINE */
  .bp-cta-box{background:linear-gradient(135deg,#1E1145 0%,#3B2574 100%);border-radius:14px;padding:28px;margin:36px 0;text-align:center;}
  .bp-cta-ey{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:#F5A623;margin-bottom:8px;}
  .bp-cta-box h3{color:#fff;font-size:20px;font-weight:800;margin-bottom:8px;}
  .bp-cta-box p{color:rgba(255,255,255,.75);font-size:14px;margin-bottom:20px;line-height:1.5;}
  .bp-cta-btn{display:inline-flex;align-items:center;gap:10px;background:var(--ambar);color:#fff;font-weight:800;font-size:15px;padding:14px 28px;border-radius:10px;text-decoration:none;}
  /* CTA FINAL */
  .bp-cta-final{background:var(--cream2);border:2px solid var(--border);border-radius:14px;padding:24px 28px;margin-top:40px;display:flex;gap:20px;align-items:center;flex-wrap:wrap;}
  .bp-cta-final h3{color:var(--text);font-size:17px;font-weight:800;margin-bottom:4px;}
  .bp-cta-final p{color:var(--muted);font-size:14px;margin:0;flex:1;min-width:180px;}
  .bp-wa-btn{display:inline-flex;align-items:center;gap:10px;background:#25D366;color:#fff;font-weight:800;font-size:14px;padding:13px 22px;border-radius:10px;text-decoration:none;white-space:nowrap;}
  /* AUTHOR */
  .bp-author{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;margin-top:32px;display:flex;gap:16px;}
  @media(max-width:500px){.bp-author{flex-direction:column;}}
  .bp-author-av{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#3B2574,#1E1145);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:22px;flex-shrink:0;}
  .bp-author-lbl{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--ambar);margin-bottom:4px;}
  .bp-author-name{font-size:16px;font-weight:800;color:var(--text);margin-bottom:2px;}
  .bp-author-crm{font-size:12px;color:var(--muted);font-weight:600;margin-bottom:8px;}
  .bp-author-bio{font-size:13px;color:var(--muted);line-height:1.5;}
  /* RELATED */
  .bp-related{margin-top:40px;}
  .bp-related-title{font-size:13px;font-weight:800;color:var(--text);margin-bottom:14px;text-transform:uppercase;letter-spacing:.08em;}
  .bp-rel-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;}
  @media(max-width:500px){.bp-rel-grid{grid-template-columns:1fr;}}
  .bp-rel-card{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:16px;text-decoration:none;display:block;}
  .bp-rel-card:hover{border-color:rgba(232,130,58,.4);}
  .bp-rel-cat{font-size:10px;font-weight:800;color:var(--ambar);text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px;}
  .bp-rel-name{font-size:14px;font-weight:700;color:var(--text);line-height:1.35;}
  /* SIDEBAR */
  .bp-sidebar{}
  @media(max-width:760px){.bp-sidebar{display:none;}}
  .bp-sb-box{background:var(--roxo);border-radius:14px;padding:24px;text-align:center;position:sticky;top:76px;}
  .bp-sb-ey{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:#F5A623;margin-bottom:10px;}
  .bp-sb-title{color:#fff;font-size:18px;font-weight:800;line-height:1.25;margin-bottom:10px;}
  .bp-sb-sub{color:rgba(255,255,255,.65);font-size:13px;margin-bottom:20px;line-height:1.5;}
  .bp-sb-btn{display:flex;align-items:center;justify-content:center;gap:10px;background:#25D366;color:#fff;font-weight:800;font-size:14px;padding:14px;border-radius:10px;text-decoration:none;margin-bottom:12px;}
  .bp-sb-link{display:flex;align-items:center;justify-content:center;gap:6px;color:rgba(255,255,255,.55);font-size:12px;text-decoration:none;}
  .bp-sb-link:hover{color:#fff;}
  .bp-sb-hr{border:none;border-top:1px solid rgba(255,255,255,.12);margin:18px 0;}
  .bp-sb-bullet{display:flex;gap:8px;align-items:flex-start;font-size:12px;color:rgba(255,255,255,.70);padding:5px 0;text-align:left;}
  .bp-sb-bullet::before{content:'✓';color:#25D366;font-weight:800;flex-shrink:0;}
  /* MOBILE STICKY */
  .bp-mob{display:none;position:fixed;bottom:0;left:0;right:0;background:var(--roxo);padding:12px 20px;z-index:200;gap:12px;align-items:center;}
  @media(max-width:760px){.bp-mob{display:flex;}}
  .bp-mob-txt{color:#fff;font-size:13px;font-weight:700;flex:1;line-height:1.3;}
  .bp-mob-txt small{color:rgba(255,255,255,.6);font-size:11px;display:block;font-weight:500;}
  .bp-mob-btn{background:#25D366;color:#fff;font-weight:800;font-size:13px;padding:10px 18px;border-radius:8px;text-decoration:none;white-space:nowrap;}
  @media(max-width:760px){.bp{padding-bottom:72px;}}
`

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = getRelatedPosts(post)
  const waMid = waForPost(post.title)

  // Split content at <!--CTA--> marker
  const [before, after] = post.content.split('<!--CTA-->')

  return (
    <>
      <style>{STYLES}</style>
      <div className="bp">
        {/* NAV */}
        <nav className="bp-nav">
          <Link href="/" className="bp-brand">
            <div className="bp-logo">💜</div>
            <span className="bp-name">Dra. Isabel Aragão</span>
          </Link>
          <div className="bp-nav-links">
            <Link href="/">Início</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <a href={WA_NAV} className="bp-nav-cta">Agendar Consulta</a>
        </nav>

        {/* BREADCRUMB */}
        <div className="bp-crumb">
          <Link href="/">Início</Link> › <Link href="/blog">Blog</Link> › {post.shortTitle}
        </div>

        <div className="bp-page">
          <main>
            <article>
              <div className="bp-tag">{post.category}</div>
              <h1 className="bp-title">{post.title}</h1>
              <p className="bp-intro">{post.intro}</p>
              <div className="bp-meta">
                <div className="bp-av">IA</div>
                <div>
                  <div className="bp-av-name">Dra. Isabel Aragão · CRM-SC 26139</div>
                  <div>Médica especialista em emagrecimento · São José/SC</div>
                </div>
                <div className="bp-meta-r">
                  <span>📅 {post.date}</span>
                  <span>⏱ {post.readTime}</span>
                </div>
              </div>

              {/* CONTENT BEFORE CTA */}
              <div
                className="bp-content"
                dangerouslySetInnerHTML={{ __html: before ?? '' }}
              />

              {/* MID-ARTICLE CTA */}
              <div className="bp-cta-box">
                <div className="bp-cta-ey">Dra. Isabel Aragão · São José/SC</div>
                <h3>Quer saber se o tratamento médico é para você?</h3>
                <p>A primeira conversa é sem compromisso. Nossa equipe explica como funciona a avaliação e tira todas as suas dúvidas.</p>
                <a href={waMid} className="bp-cta-btn">💬 Conversar no WhatsApp</a>
              </div>

              {/* CONTENT AFTER CTA */}
              {after && (
                <div
                  className="bp-content"
                  dangerouslySetInnerHTML={{ __html: after }}
                />
              )}

              {/* CTA FINAL */}
              <div className="bp-cta-final">
                <div>
                  <h3>Agende sua avaliação com a Dra. Isabel</h3>
                  <p>Consulta presencial em São José/SC. Bioimpedância, avaliação completa e plano individualizado.</p>
                </div>
                <a href={WA_FINAL} className="bp-wa-btn">💬 Falar no WhatsApp</a>
              </div>

              {/* AUTHOR */}
              <div className="bp-author">
                <div className="bp-author-av">IA</div>
                <div>
                  <div className="bp-author-lbl">Sobre a autora</div>
                  <div className="bp-author-name">Dra. Isabel Aragão</div>
                  <div className="bp-author-crm">CRM-SC 26139 · Médica especialista em emagrecimento e obesidade</div>
                  <p className="bp-author-bio">Atende em São José/SC com foco em tratamento individualizado de obesidade e emagrecimento. Abordagem baseada em evidências — avaliação completa, bioimpedância e acompanhamento de perto.</p>
                </div>
              </div>

              {/* RELATED */}
              {related.length > 0 && (
                <div className="bp-related">
                  <div className="bp-related-title">Continue lendo</div>
                  <div className="bp-rel-grid">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/blog/${r.slug}`} className="bp-rel-card">
                        <div className="bp-rel-cat">{r.category}</div>
                        <div className="bp-rel-name">{r.shortTitle}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </main>

          {/* SIDEBAR */}
          <aside className="bp-sidebar">
            <div className="bp-sb-box">
              <div className="bp-sb-ey">Dra. Isabel Aragão · São José/SC</div>
              <div className="bp-sb-title">Avaliação completa de emagrecimento</div>
              <div className="bp-sb-sub">Bioimpedância + exames + plano individualizado. Presencial em São José/SC.</div>
              <a href={WA_SIDEBAR} className="bp-sb-btn">💬 Agendar pelo WhatsApp</a>
              <a href="/" className="bp-sb-link">→ Ver a página da clínica</a>
              <hr className="bp-sb-hr" />
              <div>
                <div className="bp-sb-bullet">Avaliação por bioimpedância</div>
                <div className="bp-sb-bullet">Plano individualizado</div>
                <div className="bp-sb-bullet">Acompanhamento de perto</div>
                <div className="bp-sb-bullet">Sem compromisso inicial</div>
              </div>
            </div>
          </aside>
        </div>

        {/* MOBILE STICKY */}
        <div className="bp-mob">
          <div className="bp-mob-txt">
            Consulta com a Dra. Isabel
            <small>São José/SC · Sem compromisso inicial</small>
          </div>
          <a href={WA_NAV} className="bp-mob-btn">💬 WhatsApp</a>
        </div>
      </div>
    </>
  )
}
