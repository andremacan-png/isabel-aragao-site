'use client'

import { useEffect } from 'react'

// Google Tag Manager (GA4 + conversão do Google Ads + pixel do Facebook) carregado TARDE de propósito.
// Antes ele entrava logo após a hidratação e rodava (gtm.js + 2 gtag + fbevents, ~500 KiB) exatamente
// no intervalo em que a foto do herói esperava para ser pintada: no Lighthouse de 29/10 a home marcava
// 57-69 com LCP de 10,5 s; com os mesmos scripts bloqueados, 99 e LCP de 2,3 s.
// Regra: o GTM entra na PRIMEIRA interação da pessoa (toque, rolagem, tecla, mouse) ou, se ela não
// interagir, logo depois do evento load em um momento ocioso. O que vier primeiro.
// O dataLayer existe desde o início, então qualquer push feito antes fica na fila e o GTM processa ao chegar.
const GTM_ID = 'GTM-P65FQQ9K'
const EVENTOS = ['pointerdown', 'touchstart', 'keydown', 'scroll', 'mousemove'] as const

type JanelaComGtm = Window & {
  dataLayer?: Record<string, unknown>[]
  requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number
}

export default function TagManagerInit() {
  useEffect(() => {
    const w = window as JanelaComGtm
    w.dataLayer = w.dataLayer || []
    if (document.getElementById('gtm-js')) return

    let carregado = false
    let timer: number | undefined

    const limpar = () => {
      EVENTOS.forEach((e) => window.removeEventListener(e, carregar))
      window.removeEventListener('load', aposLoad)
      if (timer) window.clearTimeout(timer)
    }

    const carregar = () => {
      if (carregado) return
      carregado = true
      limpar()
      w.dataLayer!.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
      const s = document.createElement('script')
      s.id = 'gtm-js'
      s.async = true
      s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
      document.head.appendChild(s)
    }

    const aposLoad = () => {
      if (w.requestIdleCallback) w.requestIdleCallback(carregar, { timeout: 2500 })
      else timer = window.setTimeout(carregar, 1500)
    }

    EVENTOS.forEach((e) => window.addEventListener(e, carregar, { passive: true }))
    if (document.readyState === 'complete') aposLoad()
    else window.addEventListener('load', aposLoad, { once: true })

    return limpar
  }, [])

  return null
}
