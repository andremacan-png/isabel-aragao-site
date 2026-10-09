// Chave do painel: libera as AÇÕES (hoje, negativar termo) para quem entrou uma vez com a
// chave neste aparelho. O painel em si continua só de leitura e fora do índice do Google.
// A chave vive na variável PAINEL_KEY (Vercel); o cookie guarda só o hash dela.
import { createHash, timingSafeEqual } from 'node:crypto'
import { cookies } from 'next/headers'

export const COOKIE = 'pn_k'

export function chaveConfigurada(): boolean {
  return !!process.env.PAINEL_KEY
}
export function hashChave(k: string): string {
  return createHash('sha256').update(k).digest('hex')
}
function igual(a: string, b: string): boolean {
  const x = Buffer.from(a), y = Buffer.from(b)
  return x.length === y.length && timingSafeEqual(x, y)
}
export function chaveCerta(k: string): boolean {
  const key = process.env.PAINEL_KEY
  return !!key && igual(k, key)
}
/** Verdadeiro quando o cookie deste aparelho bate com a chave configurada. */
export async function autorizado(): Promise<boolean> {
  const key = process.env.PAINEL_KEY
  if (!key) return false
  const c = (await cookies()).get(COOKIE)?.value
  return !!c && igual(c, hashChave(key))
}
