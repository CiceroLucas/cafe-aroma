"use client"

import { Coffee } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  toggleMenu: () => void
  scrollToSection: (sectionId: string) => void
}

export function MobileMenu({ isOpen, toggleMenu, scrollToSection }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-[#54372B] text-[#F7E1BC] flex flex-col">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Coffee className="h-8 w-8 text-[#F7E1BC]" />
          <span className="text-xl font-bold">Café Aroma</span>
        </div>
        <button onClick={toggleMenu} className="text-[#F7E1BC]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-xl">
        {[
          { id: "home", label: "Início" },
          { id: "about", label: "Sobre" },
          { id: "menu", label: "Cardápio" },
          { id: "contact", label: "Contato" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="capitalize hover:text-amber-200 transition-colors"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

