"use client"

import type React from "react"
import Image from "next/image"
import { TextReveal, TextRevealContainer } from "./text-reveal"

interface MenuItem {
  name: string
  price: string
  desc: string
  image: string
}

interface MenuSectionProps {
  reference: React.RefObject<HTMLElement>
}

export function MenuSection({ reference }: MenuSectionProps) {
  const coffeeItems: MenuItem[] = [
    {
      name: "Espresso",
      price: "R$8,50",
      desc: "Rico e intenso",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2023.35.22-tDI3N02BXpuQqoa3hiyCrNkV78ZgMh.jpg",
    },
    {
      name: "Cappuccino",
      price: "R$12,50",
      desc: "Espresso com leite vaporizado e espuma",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2023.37.12-QJanlT9bRBf6Ax6HKysebxHspMvxzu.jpg",
    },
    {
      name: "Latte",
      price: "R$13,75",
      desc: "Espresso com bastante leite vaporizado",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2023.39.00-wcIeVv4vDn86LLUhSXs5NqFbpXdaC0.jpg",
    },
    {
      name: "Cold Brew",
      price: "R$15,00",
      desc: "Suave e refrescante",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2023.40.05-REYuIea2pcwaHtfofBUXfsdLEHjvML.jpg",
    },
    {
      name: "Mocha",
      price: "R$14,50",
      desc: "Espresso com chocolate e leite",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2023.40.47-7IjPEcVufLzGbbxpmpG6SnCQZDF1Rl.jpg",
    },
    {
      name: "Café Coado",
      price: "R$7,00",
      desc: "Método tradicional brasileiro",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2023.42.26-RkPKSQmDvKf1SjqrEk7dhpcm0L7l1S.jpg",
    },
    {
      name: "Affogato",
      price: "R$16,00",
      desc: "Espresso com sorvete de baunilha",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2023.43.13-p5cKtkANMQ8zxy02r66qjSUlAaOLZR.jpg",
    },
    {
      name: "Café Especial",
      price: "R$18,00",
      desc: "Grãos selecionados da semana",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2023.44.35-wOKVhLe7lyOSsBrLpN004HQSSF5a6b.jpg",
    },
  ]

  return (
    <section id="menu" ref={reference} className="py-20 bg-[#F7E1BC]">
      <div className="container mx-auto px-4">
        <TextRevealContainer>
          <TextReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#54372B]">Nosso Cardápio</h2>
          </TextReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coffeeItems.map((item, index) => (
              <TextReveal key={index} delay={index * 0.05}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 w-full bg-[#54372B]/10">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-lg text-[#54372B]">{item.name}</h3>
                      <span className="font-medium text-amber-600">{item.price}</span>
                    </div>
                    <p className="text-sm text-[#54372B]/80">{item.desc}</p>
                  </div>
                </div>
              </TextReveal>
            ))}
          </div>
        </TextRevealContainer>
      </div>
    </section>
  )
}

