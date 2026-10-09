// Microsoft Clarity · Data Export API (project-live-insights).
//
// Limite duro: 10 chamadas por dia por projeto, e no máximo 3 dias por consulta. Por isso o
// resultado vai para o Data Cache do Next (persistente entre instâncias na Vercel) por 6 h,
// e não para um Map em memória como as outras camadas: cada instância nova faria uma chamada.
// Token: variável CLARITY_API_TOKEN (o mesmo token do conector local).

export type Pct = { sessoes: number; pct: number }
export type Clarity = {
  dias: number
  sessoes: number
  usuarios: number
  bots: number
  paginasPorSessao: number
  scroll: number // % médio de rolagem
  tempoTotal: number // segundos, como o Clarity reporta (média por sessão)
  tempoAtivo: number
  cliquesMortos: Pct
  cliquesRaiva: Pct
  voltaRapida: Pct
  errosScript: Pct
  dispositivos: Array<{ nome: string; sessoes: number }>
}

type Metrica = { metricName: string; information?: Array<Record<string, unknown>> }

export function conectadoClarity(): boolean {
  return !!process.env.CLARITY_API_TOKEN
}

export async function getClarity(dias = 3): Promise<Clarity | null> {
  const token = process.env.CLARITY_API_TOKEN
  if (!token) return null
  try {
    const res = await fetch(`https://www.clarity.ms/export-data/api/v1/project-live-insights?numOfDays=${dias}`, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 6 * 3600 },
    })
    if (!res.ok) {
      console.error('[painel/clarity]', res.status, (await res.text()).slice(0, 200))
      return null
    }
    const lista = (await res.json()) as Metrica[]
    const info = (nome: string) => lista.find((m) => m.metricName === nome)?.information ?? []
    const n = (v: unknown) => Number(v ?? 0)
    const pct = (nome: string): Pct => {
      const i = info(nome)[0] ?? {}
      return { sessoes: n(i.subTotal), pct: n(i.sessionsWithMetricPercentage) }
    }
    const trafego = info('Traffic')[0] ?? {}
    const tempo = info('EngagementTime')[0] ?? {}
    const DISPOSITIVO: Record<string, string> = { Mobile: 'Celular', PC: 'Computador', Tablet: 'Tablet' }
    return {
      dias,
      sessoes: n(trafego.totalSessionCount),
      usuarios: n(trafego.distinctUserCount),
      bots: n(trafego.totalBotSessionCount),
      paginasPorSessao: n(trafego.pagesPerSessionPercentage),
      scroll: n(info('ScrollDepth')[0]?.averageScrollDepth),
      tempoTotal: n(tempo.totalTime),
      tempoAtivo: n(tempo.activeTime),
      cliquesMortos: pct('DeadClickCount'),
      cliquesRaiva: pct('RageClickCount'),
      voltaRapida: pct('QuickbackClick'),
      errosScript: pct('ScriptErrorCount'),
      dispositivos: info('Device').map((d) => ({ nome: DISPOSITIVO[String(d.name)] ?? String(d.name), sessoes: n(d.sessionsCount) })),
    }
  } catch (e) {
    console.error('[painel/clarity]', e instanceof Error ? e.message : e)
    return null
  }
}
