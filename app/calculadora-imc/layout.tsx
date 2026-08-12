import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calculadora de IMC: Calcule e Entenda o Seu Resultado | Dra. Isabel Aragão',
  description:
    'Calculadora de IMC gratuita: descubra seu Índice de Massa Corporal, entenda o que a faixa significa e quando o peso pede acompanhamento médico. Por Dra. Isabel Aragão (CRM-SC 26139), médica de emagrecimento em São José/SC.',
  alternates: { canonical: 'https://isabelaragao.com.br/calculadora-imc' },
  openGraph: {
    title: 'Calculadora de IMC: Calcule e Entenda o Seu Resultado',
    description:
      'Descubra seu IMC, o que a faixa significa e quando o peso pede acompanhamento médico. Por Dra. Isabel Aragão, São José/SC.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
