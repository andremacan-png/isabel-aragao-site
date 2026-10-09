'use server'
// Ações do painel (formulários dos componentes de servidor). Cada ação volta para a mesma
// visão com ?feito= ou ?erro= na URL, que a página mostra como aviso.
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { autorizado, chaveCerta, hashChave, COOKIE } from './lib/acesso'
import { adicionarNegativaFrase } from './lib/googleAdsWrite'

function destino(fd: FormData): string {
  const v = String(fd.get('volta') ?? '')
  return v.startsWith('/painel') && !v.includes('//') ? v.split('?')[0] + '?' + (v.split('?')[1] ?? '').replace(/&?(feito|erro)=[^&]*/g, '') : '/painel?'
}

export async function negativarTermo(fd: FormData) {
  const volta = destino(fd)
  const termo = String(fd.get('termo') ?? '').toLowerCase().trim().replace(/\s+/g, ' ')
  if (!(await autorizado())) redirect(`${volta}&erro=${encodeURIComponent('entre com a chave do painel para negativar por aqui')}`)
  if (!/^[\p{L}\p{N}][\p{L}\p{N} '\-]{1,79}$/u.test(termo)) redirect(`${volta}&erro=${encodeURIComponent('termo inválido')}`)
  const r = await adicionarNegativaFrase(termo)
  revalidatePath('/painel')
  redirect(r.ok ? `${volta}&feito=${encodeURIComponent(termo)}` : `${volta}&erro=${encodeURIComponent(r.erro)}`)
}

export async function entrar(fd: FormData) {
  const k = String(fd.get('chave') ?? '')
  if (!chaveCerta(k)) redirect('/painel/entrar?erro=1')
  ;(await cookies()).set(COOKIE, hashChave(k), { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/painel', maxAge: 365 * 24 * 3600 })
  redirect('/painel')
}
