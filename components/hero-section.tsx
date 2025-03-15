"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { TextReveal, TextRevealContainer } from "./text-reveal"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
  reference: React.RefObject<HTMLElement>
}

export function HeroSection({ scrollToSection, reference }: HeroSectionProps) {
  return (
    <section
      id="home"
      ref={reference}
      className="min-h-screen pt-20 flex items-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coffee_image.png-d5Ck0hLhm6tSOgy1ZVuZ8t9SIIjTQ0.jpeg')",
      }}
    >
      <div className="container mx-auto px-4 py-20 text-center text-[#F7E1BC]">
        <TextRevealContainer>
          <TextReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Experimente o Café Perfeito</h1>
          </TextReveal>
          <TextReveal>
            <p className="text-xl md:text-2xl mb-8 text-[#F7E1BC]/90">Café artesanal em um ambiente acolhedor</p>
          </TextReveal>
          <TextReveal>
            <Button
              onClick={() => scrollToSection("menu")}
              className="bg-[#54372B] hover:bg-[#54372B]/90 text-[#F7E1BC] px-8 py-6 rounded-full text-lg"
            >
              Explorar Cardápio
            </Button>
          </TextReveal>
        </TextRevealContainer>
      </div>
    </section>
  )
}

