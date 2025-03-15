"use client"

import { Coffee } from "lucide-react"
import { useState, useEffect } from "react"

interface NavbarProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
  toggleMenu: () => void
}

export function Navbar({ activeSection, scrollToSection, toggleMenu }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#54372B]" : "bg-transparent"
      } text-[#F7E1BC]`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Coffee className="h-8 w-8 text-[#F7E1BC]" />
          <span className="text-xl font-bold">Café Aroma</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {[
            { id: "home", label: "Início" },
            { id: "about", label: "Sobre" },
            { id: "menu", label: "Cardápio" },
            { id: "contact", label: "Contato" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`capitalize hover:text-amber-200 transition-colors ${
                activeSection === item.id ? "text-amber-300 font-medium" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#F7E1BC]" onClick={toggleMenu}>
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  )
}

