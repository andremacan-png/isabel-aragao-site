// Fotos da Dra. Isabel usadas como capa dos artigos (sessão de fotos entregue em 29/10/2026).
// Cada artigo recebe uma capa fixa pelo índice do slug, para não mudar entre builds.
// Arquivos: public/images/blog/dra-isabel-N.jpg (899x1350) e dra-isabel-avatar.jpg (320x320).
export type Capa = { src: string; alt: string; posicao: string }

export const CAPAS: Capa[] = [
  { src: '/images/blog/dra-isabel-1.jpg', alt: 'Dra. Isabel Aragão, médica especialista em emagrecimento, de pé no corredor da clínica em São José/SC', posicao: 'center 22%' },
  { src: '/images/blog/dra-isabel-2.jpg', alt: 'Dra. Isabel Aragão sorrindo, sentada, na clínica em São José/SC', posicao: 'center 30%' },
  { src: '/images/blog/dra-isabel-3.jpg', alt: 'Dra. Isabel Aragão de braços cruzados no corredor da clínica', posicao: 'center 25%' },
  { src: '/images/blog/dra-isabel-4.jpg', alt: 'Dra. Isabel Aragão, médica de emagrecimento, na clínica em São José/SC', posicao: 'center 28%' },
  { src: '/images/blog/dra-isabel-5.jpg', alt: 'Dra. Isabel Aragão com a mão no queixo, no corredor da clínica', posicao: 'center 30%' },
  { src: '/images/blog/dra-isabel-6.jpg', alt: 'Dra. Isabel Aragão escrevendo na mesa do consultório', posicao: 'center 35%' },
  { src: '/images/blog/dra-isabel-7.jpg', alt: 'Dra. Isabel Aragão sorrindo na mesa do consultório', posicao: 'center 30%' },
  { src: '/images/blog/dra-isabel-8.jpg', alt: 'Dra. Isabel Aragão sentada no sofá da clínica', posicao: 'center 35%' },
]

export const AVATAR = { src: '/images/blog/dra-isabel-avatar.jpg', alt: 'Dra. Isabel Aragão' }

export function capaDoPost(slug: string): Capa {
  let h = 0
  for (const c of slug) h = (h * 31 + c.charCodeAt(0)) >>> 0
  return CAPAS[h % CAPAS.length]
}
