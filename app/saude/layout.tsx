import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tratamento injetável para emagrecer · São José/SC | Dra. Isabel',
  description:
    'Emagrecimento com tratamento médico supervisionado, bioimpedância e acompanhamento — entenda a biologia da fome e da saciedade. São José (Grande Florianópolis) e online. CRM-SC 26.139.',
  alternates: {
    canonical: 'https://isabelaragao.com.br/saude',
  },
  openGraph: {
    title: 'Tratamento médico para emagrecer — Dra. Isabel Aragão',
    description:
      'Tratamento médico supervisionado para emagrecimento, com bioimpedância e acompanhamento. São José/SC e online.',
    url: 'https://isabelaragao.com.br/saude',
    siteName: 'Dra. Isabel Aragão',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function SaudeLayout({ children }: { children: React.ReactNode }) {
  return children
}
