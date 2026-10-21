'use client'
// Atribuição da origem para o WhatsApp: quando a visita chega de um anúncio do Google
// (gclid/gbraid/wbraid na URL, que o Google adiciona sozinho), guardamos isso na sessão
// e trocamos o texto pré-preenchido dos botões de WhatsApp para "vi o anúncio". Assim a
// 1ª mensagem já diz se veio de anúncio ou do site orgânico, e a IA do WhatsApp (sistema
// da clínica, lib/leads/registrar.ts) classifica o lead sem perguntar.
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const CHAVE = 'veio-de-anuncio'
const TEXTO_ANUNCIO = 'Olá, vi o anúncio da Dra. Isabel no Google e gostaria de saber mais sobre agendamento de consulta'

export default function AdsAttribution() {
  const pathname = usePathname()
  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search)
      const deAnuncio = ['gclid', 'gbraid', 'wbraid'].some((k) => p.has(k)) || p.get('utm_medium') === 'cpc'
      if (deAnuncio) sessionStorage.setItem(CHAVE, '1')
      if (sessionStorage.getItem(CHAVE) !== '1') return
      document.querySelectorAll<HTMLAnchorElement>('a[href^="https://wa.me/"]').forEach((a) => {
        const u = new URL(a.href)
        u.searchParams.set('text', TEXTO_ANUNCIO)
        a.href = u.toString()
      })
    } catch {
      /* sessionStorage bloqueado: fica o texto padrão */
    }
  }, [pathname])
  return null
}
