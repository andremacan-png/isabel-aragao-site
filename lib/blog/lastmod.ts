// Datas ISO (YYYY-MM-DD) por post, usadas no sitemap (lastmod) e no JSON-LD (datePublished/dateModified).
// Regra: lastmod precisa ser REAL e ESTÁVEL. Sitemap com lastmod = "agora" em tudo faz o Google ignorar o campo
// (foi o caso até 09/09/2026: post de 2.000 impressões/mês ficou 6 semanas sem recrawl).
// - PUBLICADO: data do commit que adicionou o post (fallback: 1º dia do mês do campo `date`).
// - ATUALIZADO: só quando o CONTEÚDO mudou de verdade (não conta mudança de template/sidebar).
// Ao editar o conteúdo de um post, atualize ATUALIZADO[slug]. Post novo: entra sozinho pelo fallback.

const PUBLICADO: Record<string, string> = {
  'bioimpedancia-o-que-e': '2026-07-15',
  'bioimpedancia-sao-jose-sc': '2026-07-15',
  'como-escolher-medico-emagrecimento': '2026-07-15',
  'como-funciona-acompanhamento-medico-emagrecimento': '2026-07-15',
  'emagrecimento-apos-40-anos': '2026-07-15',
  'endocrinologista-nutrologo-medico-emagrecimento': '2026-07-15',
  'glp1-medicamentos-injetaveis-emagrecer': '2026-07-15',
  'hormonios-ganho-de-peso': '2026-07-15',
  'medica-emagrecimento-sao-jose': '2026-07-15',
  'obesidade-e-uma-doenca': '2026-07-15',
  'perda-de-peso-saudavel-quantos-kg-por-mes': '2026-07-15',
  'por-que-dieta-sozinha-falha': '2026-07-15',
  'primeira-consulta-medica-emagrecimento': '2026-07-15',
  'quando-procurar-medico-para-emagrecer': '2026-07-15',
  'aplicacao-injecao-emagrecer-sao-jose': '2026-07-16',
  'clinica-emagrecimento-sao-jose-sc': '2026-07-16',
  'lipedema-florianopolis-tratamento': '2026-07-16',
  'mounjaro-florianopolis': '2026-07-16',
  'ozempic-florianopolis-prescricao': '2026-07-16',
  'tirzepatida-florianopolis': '2026-07-16',
  'efeitos-colaterais-mounjaro-tirzepatida': '2026-07-23',
  'lipedema-ou-gordura-localizada': '2026-07-23',
  'mounjaro-ou-ozempic-qual-escolher': '2026-07-23',
  'quanto-tempo-mounjaro-faz-efeito': '2026-07-23',
  'wegovy-florianopolis': '2026-07-23',
  'aplicacao-tirzepatida-biguacu': '2026-08-11',
  'aplicacao-tirzepatida-florianopolis': '2026-08-11',
  'aplicacao-tirzepatida-palhoca': '2026-08-11',
  'aplicacao-tirzepatida-sao-jose': '2026-08-11',
  'medica-emagrecimento-biguacu': '2026-08-11',
  'medica-emagrecimento-florianopolis': '2026-08-11',
  'medica-emagrecimento-palhoca': '2026-08-11',
  'quanto-emagrece-com-injetavel': '2026-08-12',
  'como-ler-resultado-bioimpedancia': '2026-09-03',
  'compulsao-alimentar-noite': '2026-09-03',
  'efeito-sanfona-por-que-o-peso-volta': '2026-09-03',
  'menopausa-ganho-de-peso': '2026-09-03',
  'metabolismo-lento-existe': '2026-09-03',
  'precisa-de-receita-mounjaro-tirzepatida': '2026-09-03',
}

const ATUALIZADO: Record<string, string> = {
  'perda-de-peso-saudavel-quantos-kg-por-mes': '2026-09-03',
  'quanto-tempo-mounjaro-faz-efeito': '2026-09-03',
  'bioimpedancia-o-que-e': '2026-09-03',
  'emagrecimento-apos-40-anos': '2026-09-03',
  'por-que-dieta-sozinha-falha': '2026-09-03',
  'hormonios-ganho-de-peso': '2026-09-03',
}

const MESES: Record<string, string> = {
  janeiro: '01', fevereiro: '02', março: '03', marco: '03', abril: '04', maio: '05', junho: '06',
  julho: '07', agosto: '08', setembro: '09', outubro: '10', novembro: '11', dezembro: '12',
}

/** Converte "Setembro 2026" → "2026-09-01" (fallback quando o slug não está em PUBLICADO). */
function mesParaIso(date: string): string {
  const m = date.trim().toLowerCase().match(/^([a-zç]+)\s+(\d{4})$/)
  const mes = m ? MESES[m[1]] : undefined
  return m && mes ? `${m[2]}-${mes}-01` : '2026-07-15'
}

export function publicadoEm(p: { slug: string; date: string }): string {
  return PUBLICADO[p.slug] ?? mesParaIso(p.date)
}

export function atualizadoEm(p: { slug: string; date: string }): string {
  const pub = publicadoEm(p)
  const upd = ATUALIZADO[p.slug]
  return upd && upd > pub ? upd : pub
}
