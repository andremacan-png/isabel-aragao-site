'use client'
// Ordenação por coluna em todas as tabelas do painel (melhoria progressiva: sem JS a tabela
// continua na ordem do servidor). Clique no título alterna crescente/decrescente; valores em
// R$, %, "3/10" e números pt-BR ordenam como número; "sem contato"/"—" ficam sempre no fim;
// linhas de total (primeira célula em negrito) ficam fixas embaixo.
import { useEffect } from 'react'

const VAZIO = /^(—|-|sem contato|sem dado|pouco dado|sem paciente|sem gasto|pausada)$/i

function valor(td: HTMLTableCellElement): number | string | null {
  const t = (td.textContent ?? '').trim()
  if (!t || VAZIO.test(t)) return null
  if (td.classList.contains('num') || /^R\$|%$|\/10$/.test(t)) {
    const m = t.match(/-?\d[\d.]*(,\d+)?/)
    if (!m) return null
    return parseFloat(m[0].replace(/\./g, '').replace(',', '.'))
  }
  return t.toLowerCase()
}

function ordenar(table: HTMLTableElement, col: number, dir: 'asc' | 'desc') {
  const tbody = table.tBodies[0]
  if (!tbody) return
  const linhas = Array.from(tbody.rows)
  const totais = linhas.filter((r) => r.cells[0]?.querySelector('b'))
  const dados = linhas.filter((r) => !totais.includes(r))
  const chave = (r: HTMLTableRowElement) => (r.cells[col] ? valor(r.cells[col]) : null)
  dados.sort((a, b) => {
    const va = chave(a), vb = chave(b)
    if (va === null && vb === null) return 0
    if (va === null) return 1
    if (vb === null) return -1
    const c = typeof va === 'number' && typeof vb === 'number' ? va - vb : String(va).localeCompare(String(vb), 'pt-BR')
    return dir === 'asc' ? c : -c
  })
  for (const r of [...dados, ...totais]) tbody.appendChild(r)
}

export default function SortableTables() {
  useEffect(() => {
    const tables = Array.from(document.querySelectorAll<HTMLTableElement>('.pn-tbl table'))
    const limpar: Array<() => void> = []
    for (const table of tables) {
      const ths = Array.from(table.tHead?.rows[0]?.cells ?? [])
      ths.forEach((th, i) => {
        th.classList.add('sortable')
        th.setAttribute('role', 'button')
        th.setAttribute('tabIndex', '0')
        th.title = 'Ordenar por esta coluna'
        const handler = () => {
          const atual = th.getAttribute('data-dir')
          const numerica = th.classList.contains('num')
          const dir: 'asc' | 'desc' = atual ? (atual === 'asc' ? 'desc' : 'asc') : numerica ? 'desc' : 'asc'
          ths.forEach((o) => o.removeAttribute('data-dir'))
          th.setAttribute('data-dir', dir)
          ordenar(table, i, dir)
        }
        const tecla = (e: KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handler()
          }
        }
        th.addEventListener('click', handler)
        th.addEventListener('keydown', tecla)
        limpar.push(() => {
          th.removeEventListener('click', handler)
          th.removeEventListener('keydown', tecla)
        })
      })
    }
    return () => limpar.forEach((f) => f())
  }, [])
  return null
}
