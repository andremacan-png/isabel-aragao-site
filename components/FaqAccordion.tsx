'use client'

import { useState } from 'react'

// Acordeão do FAQ da home. É o ÚNICO trecho interativo da página, por isso vive
// em um componente de cliente separado: a home inteira era 'use client' só por
// causa dele, o que puxava hidratação pesada pro celular (LCP 11 s no Lighthouse).
export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
          <button
            className="w-full text-left px-7 py-5 flex justify-between items-center gap-6 hover:bg-gray-50/80 transition-colors"
            aria-expanded={open === index}
            onClick={() => setOpen(open === index ? null : index)}>
            <span className="font-semibold text-gray-900 text-sm">{item.q}</span>
            <span className={`text-primary-600 text-2xl font-light flex-shrink-0 transition-transform duration-200 ${open === index ? 'rotate-45' : ''}`}>+</span>
          </button>
          {open === index && (
            <div className="px-7 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-100">
              <div className="pt-4">{item.a}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
