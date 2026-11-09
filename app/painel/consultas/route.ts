// /painel/consultas: termos de busca do Search Console em JSON (uso interno, planejamento de conteúdo).
// ?dias=90 (7 a 480) · ?por=pagina devolve consulta × página.
import { getGscConsultas } from '../gscData'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  const u = new URL(req.url)
  const dias = Math.min(480, Math.max(7, Number(u.searchParams.get('dias')) || 90))
  const porPagina = u.searchParams.get('por') === 'pagina'
  const linhas = await getGscConsultas(dias, porPagina, 5000)
  if (!linhas) return Response.json({ erro: 'Search Console indisponível' }, { status: 503 })
  return Response.json({ dias, total: linhas.length, linhas }, { headers: { 'X-Robots-Tag': 'noindex' } })
}
