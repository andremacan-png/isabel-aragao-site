import type { Metadata } from 'next'
import Link from 'next/link'
import { POSTS } from '@/lib/blog/posts'

export const metadata: Metadata = {
  title: 'Blog — Saúde & Emagrecimento | Dra. Isabel Aragão',
  description: 'Artigos sobre emagrecimento, obesidade, bioimpedância e saúde metabólica escritos pela Dra. Isabel Aragão (CRM-SC 26139), médica de emagrecimento em São José/SC.',
}

const CATEGORIES = ['Todos', 'Tratamento', 'Ciência', 'Exames', 'Saúde', 'Especialidades', 'Medicamentos']

const WA = 'https://wa.me/5548991593468?text=Ol%C3%A1!%20Vi%20o%20blog%20e%20gostaria%20de%20agendar%20uma%20consulta.'

export default function BlogIndex() {
  return (
    <>
      <style>{`
        :root {
          --roxo:#1E1145;--roxo-mid:#3B2574;--ambar:#E8823A;--ambar-l:#F5A623;
          --cream:#F7F3EF;--cream2:#EDE6DC;--text:#2C1A5C;--muted:#7C6DA8;
          --surface:#FFFFFF;--border:rgba(30,17,69,.10);--green:#2D9E6B;
        }
        @media(prefers-color-scheme:dark){
          :root{--cream:#14102A;--cream2:#1C1640;--surface:#1E1A38;--text:#EDE6DC;--muted:#9B8FCC;--border:rgba(255,255,255,.10);}
        }
        *{box-sizing:border-box;margin:0;padding:0;}
        .bl-body{background:var(--cream);color:var(--text);font-family:system-ui,-apple-system,sans-serif;min-height:100vh;}
        /* NAV */
        .bl-nav{background:var(--roxo);display:flex;align-items:center;justify-content:space-between;padding:0 28px;height:60px;position:sticky;top:0;z-index:100;}
        .bl-brand{display:flex;align-items:center;gap:10px;text-decoration:none;}
        .bl-logo{width:32px;height:32px;background:var(--ambar);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;}
        .bl-name{color:#fff;font-weight:800;font-size:15px;}
        .bl-nav-links{display:flex;gap:20px;}
        .bl-nav-links a{color:rgba(255,255,255,.7);font-size:13px;font-weight:600;text-decoration:none;}
        .bl-nav-links a:hover{color:#fff;}
        .bl-nav-cta{background:var(--ambar);color:#fff;font-weight:800;font-size:13px;padding:8px 16px;border-radius:8px;text-decoration:none;white-space:nowrap;}
        @media(max-width:600px){.bl-nav-links{display:none;}}
        /* HERO */
        .bl-hero{background:var(--roxo);padding:40px 28px 36px;}
        .bl-hero-ey{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.16em;color:var(--ambar-l);margin-bottom:8px;}
        .bl-hero h1{font-size:28px;font-weight:800;color:#fff;letter-spacing:-.02em;margin-bottom:8px;}
        @media(max-width:500px){.bl-hero h1{font-size:22px;}}
        .bl-hero-sub{font-size:14px;color:rgba(255,255,255,.65);max-width:520px;line-height:1.6;}
        /* CATS */
        .bl-cats{background:var(--cream2);padding:14px 24px;display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;}
        .bl-cats::-webkit-scrollbar{display:none;}
        .bl-cat{font-size:12px;font-weight:700;padding:6px 14px;border-radius:20px;border:1px solid var(--border);background:var(--surface);color:var(--muted);white-space:nowrap;cursor:pointer;}
        .bl-cat.active,.bl-cat:hover{background:var(--roxo);color:#fff;border-color:var(--roxo);}
        /* GRID */
        .bl-wrap{max-width:900px;margin:0 auto;padding:32px 20px 60px;}
        .bl-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;}
        @media(max-width:600px){.bl-grid{grid-template-columns:1fr;}}
        /* CARD */
        .bl-card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;display:flex;flex-direction:column;text-decoration:none;transition:border-color .15s;}
        .bl-card:hover{border-color:rgba(232,130,58,.4);}
        .bl-card-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;}
        .bl-card-cat{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--ambar);}
        .bl-card-time{font-size:11px;color:var(--muted);}
        .bl-card-title{font-size:16px;font-weight:800;color:var(--text);line-height:1.3;margin-bottom:8px;}
        .bl-card-intro{font-size:13px;color:var(--muted);line-height:1.55;flex:1;}
        .bl-card-footer{display:flex;align-items:center;justify-content:space-between;margin-top:14px;padding-top:12px;border-top:1px solid var(--border);}
        .bl-card-num{font-size:10px;color:var(--muted);font-weight:600;}
        .bl-card-cta{font-size:12px;font-weight:800;color:var(--ambar);}
        /* CTA BANNER */
        .bl-cta{background:var(--roxo);border-radius:14px;padding:28px;text-align:center;margin:32px 0 0;}
        .bl-cta-ey{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:var(--ambar-l);margin-bottom:8px;}
        .bl-cta h2{color:#fff;font-size:20px;font-weight:800;margin-bottom:8px;}
        .bl-cta p{color:rgba(255,255,255,.7);font-size:14px;margin-bottom:20px;line-height:1.5;}
        .bl-cta-btn{display:inline-flex;align-items:center;gap:10px;background:#25D366;color:#fff;font-weight:800;font-size:14px;padding:13px 26px;border-radius:10px;text-decoration:none;}
      `}</style>

      <div className="bl-body">
        <nav className="bl-nav">
          <Link href="/" className="bl-brand">
            <div className="bl-logo">💜</div>
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

        <div className="bl-cats">
          {CATEGORIES.map((c) => (
            <span key={c} className={`bl-cat${c === 'Todos' ? ' active' : ''}`}>{c}</span>
          ))}
        </div>

        <div className="bl-wrap">
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
