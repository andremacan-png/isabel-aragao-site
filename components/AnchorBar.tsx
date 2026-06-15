// Barra de âncoras rolável (vira a 2ª linha da navbar). Itens com cara de botão (pílula).
export default function AnchorBar({ links }: { links: { href: string; label: string }[] }) {
  return (
    <div className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ul className="flex gap-2 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {links.map((l) => (
            <li key={l.href} className="shrink-0">
              <a
                href={l.href}
                className="block px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/85 text-sm font-medium hover:bg-white/20 hover:text-white active:bg-white/25 transition-colors whitespace-nowrap"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
