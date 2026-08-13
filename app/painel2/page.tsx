import { redirect } from 'next/navigation'

// O painel 2.0 virou o painel PRINCIPAL (/painel). Mantemos /painel2 como
// redirecionamento para não quebrar links/favoritos antigos.
export const metadata = { robots: { index: false, follow: false } }

export default function Painel2Redirect() {
  redirect('/painel')
}
