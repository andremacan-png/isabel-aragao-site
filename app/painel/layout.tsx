import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './painel.css'
import SortableTables from './SortableTables'

const archivo = Archivo({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-archivo', display: 'swap' })

export const metadata: Metadata = {
  title: 'Painel de Tráfego 2.0 · Dra. Isabel',
  robots: { index: false, follow: false },
}

export default function PainelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`painel ${archivo.variable}`}>
      {children}
      <SortableTables />
    </div>
  )
}
