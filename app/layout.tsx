import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

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
    'semaglutida tirzepatida florianópolis',
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
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P65FQQ9K');
        `}</Script>
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
        {children}
      </body>
    </html>
  )
}
