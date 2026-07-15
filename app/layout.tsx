import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import ClarityInit from '@/components/ClarityInit'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dra. Isabel Aragão | Médica Especialista em Emagrecimento — São José/SC',
  description:
    'Tratamento médico individualizado para emagrecimento sustentável. Atende em São José (Grande Florianópolis) e online para todo o Brasil. Especialização Hospital Albert Einstein.',
  keywords: [
    'médica emagrecimento florianópolis',
    'médica emagrecimento são josé sc',
    'obesidade tratamento florianópolis',
    'tratamento injetável emagrecimento florianópolis',
    'emagrecimento médico sc',
  ],
  openGraph: {
    title: 'Dra. Isabel Aragão | Médica Especialista em Emagrecimento',
    description:
      'Tratamento médico individualizado para emagrecimento sustentável. São José/SC e online.',
    url: 'https://isabelaragao.com.br',
    siteName: 'Dra. Isabel Aragão',
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://isabelaragao.com.br',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Verificação de domínio — Meta (Facebook Business) */}
        <meta name="facebook-domain-verification" content="608btqq6keuar29nrfsdt67wecuim1" />
        {/* Verificação de propriedade — Google Search Console */}
        <meta name="google-site-verification" content="Ym99QkOwRJa6E_pbYn3_NXgD21RISGYy8uUv9V5j-fo" />
        {/* Schema Markup — LocalBusiness + Physician */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'Physician'],
              name: 'Dra. Isabel Aragão — Médica Especialista em Emagrecimento',
              url: 'https://isabelaragao.com.br',
              telephone: '+554899159-3468',
              image: 'https://isabelaragao.com.br/images/hero.jpg',
              priceRange: '$$',
              medicalSpecialty: 'Obesity medicine',
              description:
                'Tratamento médico individualizado para emagrecimento sustentável. Atende presencialmente em São José/SC e online para todo o Brasil. Especialização Hospital Albert Einstein.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Av. Mal. Castelo Branco, 65, Sala 1102 B — Kennedy Towers',
                addressLocality: 'São José',
                addressRegion: 'SC',
                postalCode: '88101-000',
                addressCountry: 'BR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -27.5831,
                longitude: -48.6217,
              },
              areaServed: [
                { '@type': 'City', name: 'São José' },
                { '@type': 'City', name: 'Florianópolis' },
                { '@type': 'Country', name: 'Brazil' },
              ],
              sameAs: ['https://www.instagram.com/dra.isabelaragao/'],
            }),
          }}
        />
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P65FQQ9K');
        `}</Script>
        {/* Microsoft Clarity agora é inicializado no client via <ClarityInit /> (components/ClarityInit.tsx) */}
      </head>
      <body className={inter.className}>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P65FQQ9K"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ClarityInit />
        {children}
      </body>
    </html>
  )
}
