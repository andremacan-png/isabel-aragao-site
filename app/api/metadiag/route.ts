// TEMPORÁRIO — diagnóstico Meta por anúncio + séries diárias (avaliação de tráfego 10/09). Remover após uso.
import { NextResponse } from 'next/server'
import { getPainel2Series } from '@/app/painel/painel2Data'

export const dynamic = 'force-dynamic'
const KEY = 'meta-p3q8z-set'
const V = 'v21.0'

async function insights(id: string, token: string, params: Record<string, string>) {
  const q = new URLSearchParams({ ...params, limit: '500', access_token: token })
  const res = await fetch(`https://graph.facebook.com/${V}/act_${id}/insights?${q}`, { cache: 'no-store' })
  const j = await res.json().catch(() => ({}))
  if (!res.ok) return { error: res.status, msg: j?.error?.message }
  return j.data ?? []
}

export async function GET(req: Request) {
  const u = new URL(req.url)
  if (u.searchParams.get('k') !== KEY) return NextResponse.json({ error: 'nope' }, { status: 401 })
  const token = process.env.META_ADS_ACCESS_TOKEN
  const acct = process.env.META_AD_ACCOUNT_ID
  if (!token || !acct) return NextResponse.json({ error: 'sem META env' }, { status: 500 })
  const id = acct.replace(/\D/g, '')
  const fields = 'campaign_name,adset_name,ad_name,spend,impressions,reach,frequency,ctr,cpm,actions,cost_per_action_type'
  const tr = (since: string, until: string) => JSON.stringify({ since, until })

  const [adsA, adsB, adsSet, dailySet, dailyAgo, series] = await Promise.all([
    insights(id, token, { level: 'ad', fields, time_range: tr('2026-08-19', '2026-09-01') }),
    insights(id, token, { level: 'ad', fields, time_range: tr('2026-09-02', '2026-09-09') }),
    insights(id, token, { level: 'ad', fields, time_range: tr('2026-09-01', '2026-09-09') }),
    insights(id, token, { level: 'campaign', fields: 'campaign_name,spend,impressions,reach,actions', time_range: tr('2026-08-26', '2026-09-09'), time_increment: '1' }),
    insights(id, token, { level: 'campaign', fields: 'campaign_name,spend,impressions,reach,actions', time_range: tr('2026-08-01', '2026-08-31'), time_increment: '1' }),
    getPainel2Series('30d').catch((e: unknown) => ({ error: String(e) })),
  ])
  return NextResponse.json({ adsA, adsB, adsSet, dailySet, dailyAgo, series })
}
