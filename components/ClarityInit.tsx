'use client'

import { useEffect } from 'react'
import Clarity from '@microsoft/clarity'

// Microsoft Clarity — heatmaps, gravações de sessão, scroll depth.
// Inicializa SÓ depois do evento load e em momento ocioso: no celular o script
// disputava a thread principal com a pintura do herói (LCP 11 s no Lighthouse de 06/10).
const CLARITY_PROJECT_ID = 'x7i914kkj3'

export default function ClarityInit() {
  useEffect(() => {
    let cancelled = false
    const start = () => {
      if (cancelled) return
      const idle = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback
      if (idle) idle(() => Clarity.init(CLARITY_PROJECT_ID), { timeout: 4000 })
      else setTimeout(() => Clarity.init(CLARITY_PROJECT_ID), 2500)
    }
    if (document.readyState === 'complete') start()
    else window.addEventListener('load', start, { once: true })
    return () => { cancelled = true; window.removeEventListener('load', start) }
  }, [])

  return null
}
