// CSS compartilhado do índice do blog e das páginas de tema (hubs). Embutido inline nas páginas.
export const BLOG_CSS = `
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
        .bl-cta-btn{display:inline-flex;align-items:center;gap:10px;background:var(--ambar);color:#fff;font-weight:800;font-size:14px;padding:13px 26px;border-radius:10px;text-decoration:none;}
      
        /* TEMAS (hubs) */
        .bl-sec-title{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.14em;color:var(--muted);margin:0 0 12px;}
        .bl-temas{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:36px;}
        @media(max-width:700px){.bl-temas{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:420px){.bl-temas{grid-template-columns:1fr;}}
        .bl-tema{display:block;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;text-decoration:none;transition:border-color .15s;}
        .bl-tema:hover{border-color:rgba(232,130,58,.5);}
        .bl-tema-n{font-size:15px;font-weight:800;color:var(--text);line-height:1.25;margin-bottom:6px;}
        .bl-tema-d{font-size:12px;color:var(--muted);line-height:1.5;}
        .bl-tema-c{font-size:11px;font-weight:700;color:var(--ambar);margin-top:10px;}
        .bl-destaques{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:36px;}
        @media(max-width:600px){.bl-destaques{grid-template-columns:1fr;}}
        .bl-destaque{display:block;background:var(--roxo);border-radius:12px;padding:18px;text-decoration:none;}
        .bl-destaque-ey{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:var(--ambar-l);margin-bottom:6px;}
        .bl-destaque-t{font-size:16px;font-weight:800;color:#fff;line-height:1.3;}
        .bl-destaque-s{font-size:12px;color:rgba(255,255,255,.7);margin-top:6px;line-height:1.5;}
        /* HUB */
        .bl-crumb{font-size:12px;color:var(--muted);padding:12px 24px 0;}
        .bl-crumb a{color:var(--muted);text-decoration:none;}
        .bl-crumb a:hover{color:var(--ambar);}
        .bl-resposta{background:var(--surface);border-left:4px solid var(--ambar);border-radius:0 12px 12px 0;padding:16px 18px;font-size:15px;line-height:1.6;margin:0 0 28px;}
        .bl-intro{font-size:15px;line-height:1.7;color:var(--text);margin:0 0 28px;max-width:720px;}
        .bl-lista{counter-reset:art;display:flex;flex-direction:column;gap:10px;margin-bottom:36px;}
        .bl-item{display:flex;gap:14px;align-items:flex-start;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;text-decoration:none;transition:border-color .15s;}
        .bl-item:hover{border-color:rgba(232,130,58,.5);}
        .bl-item-n{counter-increment:art;flex:none;width:28px;height:28px;border-radius:50%;background:var(--cream2);color:var(--roxo-mid);font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center;}
        .bl-item-n::before{content:counter(art);}
        .bl-item-t{font-size:15px;font-weight:800;color:var(--text);line-height:1.3;}
        .bl-item-i{font-size:13px;color:var(--muted);line-height:1.5;margin-top:4px;}
        .bl-faq{margin-bottom:36px;}
        .bl-faq details{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:12px 16px;margin-bottom:8px;}
        .bl-faq summary{font-weight:700;font-size:14px;cursor:pointer;color:var(--text);}
        .bl-faq p{font-size:14px;line-height:1.6;color:var(--muted);margin-top:8px;}
        .bl-h2{font-size:20px;font-weight:800;color:var(--text);margin:0 0 14px;letter-spacing:-.01em;}
        .bl-outros{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:36px;}
        .bl-outros a{font-size:12px;font-weight:700;padding:6px 14px;border-radius:20px;border:1px solid var(--border);background:var(--surface);color:var(--muted);text-decoration:none;}
        .bl-outros a:hover{background:var(--roxo);color:#fff;border-color:var(--roxo);}
`
