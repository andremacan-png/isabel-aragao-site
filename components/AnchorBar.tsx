// Barra de âncoras rolável (vira a 2ª linha da navbar). Dá navegação sem virar subpágina.
export default function AnchorBar({ links }: { links: { href: string; label: string }[] }) {
  return (
    <div className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ul className="flex gap-1 overflow-x-auto py-1.5 text-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {links.map((l) => (
            <li key={l.href} className="shrink-0">
              <a
                href={l.href}
                className="block px-3 py-1 rounded-full text-white/65 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
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
