// Entrada única por aparelho: grava o cookie que libera as ações do painel.
import { entrar } from '../actions'
import { chaveConfigurada, autorizado } from '../lib/acesso'

export default async function EntrarPage({ searchParams }: { searchParams: Promise<{ erro?: string }> }) {
  const sp = await searchParams
  const ja = await autorizado()
  return (
    <main className="pn-main" style={{ maxWidth: 480 }}>
      <div className="pn-card">
        <h2>Chave do painel</h2>
        <p className="pn-sub">Libera as ações (negativar termo) neste aparelho. Só de olhar não precisa de chave.</p>
        {!chaveConfigurada() ? (
          <div className="pn-empty">A variável PAINEL_KEY não existe neste ambiente. Crie na Vercel (qualquer frase longa) e faça um deploy.</div>
        ) : ja ? (
          <p className="pn-note">Este aparelho já está liberado. <a href="/painel" style={{ textDecoration: 'underline' }}>Voltar ao painel</a>.</p>
        ) : (
          <form action={entrar} className="pn-form">
            <label>
              <span className="pn-eyebrow">Chave</span>
              <input type="password" name="chave" autoComplete="current-password" required />
            </label>
            <button type="submit" className="pn-btn">Entrar</button>
            {sp.erro && <p className="pn-note" style={{ color: 'var(--crit-ink)' }}>Chave errada.</p>}
          </form>
        )}
      </div>
    </main>
  )
}
