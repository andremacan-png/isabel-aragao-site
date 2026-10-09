import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emagrecimento médico individualizado · São José/SC | Dra. Isabel',
  description:
    'Por que o corpo resiste a emagrecer e como destravar com segurança: acompanhamento médico baseado em ciência. São José/SC e online. CRM-SC 26139.',
  alternates: {
    canonical: 'https://isabelaragao.com.br/emagrecimento',
  },
  openGraph: {
    title: 'Emagrecimento médico individualizado — Dra. Isabel Aragão',
    description:
      'Tratamento médico para emagrecimento sustentável, baseado em ciência e no seu histórico. São José/SC e online.',
    url: 'https://isabelaragao.com.br/emagrecimento',
    siteName: 'Dra. Isabel Aragão',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function EmagrecimentoLayout({ children }: { children: React.ReactNode }) {
  return children
}
