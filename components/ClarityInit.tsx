'use client'

import { useEffect } from 'react'
import Clarity from '@microsoft/clarity'

// Microsoft Clarity — heatmaps, gravações de sessão, scroll depth.
// Inicialização determinística no cliente (useEffect), via pacote oficial.
// Substitui o snippet inline em next/script, que não estava registrando
// sessões de visitantes reais (ver DIARIO/memória 18/06).
const CLARITY_PROJECT_ID = 'x7i914kkj3'

export default function ClarityInit() {
  useEffect(() => {
    Clarity.init(CLARITY_PROJECT_ID)
  }, [])

  return null
}
