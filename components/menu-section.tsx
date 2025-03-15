"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { TextReveal, TextRevealContainer } from "./text-reveal"
import { motion } from "framer-motion"
import { Coffee, CupSoda, Croissant } from "lucide-react"

interface MenuItem {
  name: string
  price: string
  desc: string
  image: string
  category: "cafe-quente" | "cafe-gelado" | "comida"
  featured?: boolean
}

interface MenuSectionProps {
  reference: React.RefObject<HTMLElement>
}

export function MenuSection({ reference }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("cafe-quente")

  const menuItems: MenuItem[] = [
    // Cafés Quentes
    {
      name: "Espresso",
      price: "R$8,50",
      desc: "Rico e intenso",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2023.35.22-tDI3N02BXpuQqoa3hiyCrNkV78ZgMh.jpg",
      category: "cafe-quente",
      featured: true,
    },
    {
      name: "Cappuccino",
      price: "R$12,50",
      desc: "Espresso com leite vaporizado e espuma",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2023.37.12-QJanlT9bRBf6Ax6HKysebxHspMvxzu.jpg",
      category: "cafe-quente",
    },
    {
      name: "Latte",
      price: "R$13,75",
      desc: "Espresso com bastante leite vaporizado",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2023.39.00-wcIeVv4vDn86LLUhSXs5NqFbpXdaC0.jpg",
      category: "cafe-quente",
    },
    {
      name: "Café Coado",
      price: "R$7,00",
      desc: "Método tradicional brasileiro",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2023.42.26-RkPKSQmDvKf1SjqrEk7dhpcm0L7l1S.jpg",
      category: "cafe-quente",
    },

    // Cafés Gelados
    {
      name: "Cold Brew",
      price: "R$15,00",
      desc: "Suave e refrescante",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2023.40.05-REYuIea2pcwaHtfofBUXfsdLEHjvML.jpg",
      category: "cafe-gelado",
      featured: true,
    },
    {
      name: "Frappuccino",
      price: "R$16,50",
      desc: "Bebida gelada com café e leite batido",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2000.12.43-98HvVSHnF6RxRP4WC6zv7WLfrQxnts.jpg",
      category: "cafe-gelado",
    },
    {
      name: "Affogato",
      price: "R$16,00",
      desc: "Espresso com sorvete de baunilha",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2023.43.13-p5cKtkANMQ8zxy02r66qjSUlAaOLZR.jpg",
      category: "cafe-gelado",
    },
    {
      name: "Iced Latte",
      price: "R$14,00",
      desc: "Café espresso com leite gelado",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2000.13.51-NMAXw74ww4556OxXQhMfqvYby84kRj.jpg",
      category: "cafe-gelado",
    },

    // Comidas
    {
      name: "Croissant",
      price: "R$9,25",
      desc: "Amanteigado e em camadas",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2000.11.46-xHrGm84PthQEiH9jKD7TzK0KyeusOT.jpg",
      category: "comida",
      featured: true,
    },
    {
      name: "Torrada de Abacate",
      price: "R$18,50",
      desc: "Pão integral com abacate fresco",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2000.14.35-Q75ZMcl2QZHFI4eK96lMLm3VvqnmN4.webp",
      category: "comida",
    },
    {
      name: "Muffin de Blueberry",
      price: "R$10,75",
      desc: "Feito diariamente",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2000.15.21-AEKdUBGXjy2MnIpxxItdpl9p1w96Tx.png",
      category: "comida",
    },
    {
      name: "Café da Manhã",
      price: "R$16,50",
      desc: "Ovo, queijo e bacon",
      image: "https://vbiil5wuvg0bsius.public.blob.vercel-storage.com/blob-2025-03-15%20at%2000.16.59-nEa5o5vPSGwQhcoUfj6M2b2jaoOWOr.png",
      category: "comida",
    },
  ]

  const filteredItems = menuItems.filter((item) => item.category === activeCategory)
  const featuredItems = menuItems.filter((item) => item.featured)

  return (
    <section id="menu" ref={reference} className="py-20 bg-[#F7E1BC]/30 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-40 w-40 h-40 rounded-full bg-[#54372B]/5"></div>
        <div className="absolute right-10 bottom-20 w-60 h-60 rounded-full bg-[#54372B]/5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <TextRevealContainer>
          <TextReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-[#54372B]">Nosso Cardápio</h2>
          </TextReveal>

          <TextReveal>
            <p className="text-center text-[#54372B]/70 max-w-2xl mx-auto mb-16">
              Descubra nossa seleção de cafés artesanais e alimentos preparados com ingredientes frescos e de alta
              qualidade.
            </p>
          </TextReveal>

          {/* Featured Items Carousel */}
          <TextReveal>
            <div className="mb-16">
              <h3 className="text-xl font-medium mb-6 text-[#54372B]/80 flex items-center justify-center">
                <span className="h-[1px] w-12 bg-[#54372B]/30 mr-4"></span>
                Destaques da Casa
                <span className="h-[1px] w-12 bg-[#54372B]/30 ml-4"></span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredItems.map((item, index) => (
                  <div
                    key={`featured-${index}`}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#54372B]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-[#F7E1BC] font-medium">{item.desc}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-xl text-[#54372B]">{item.name}</h4>
                        <span className="font-bold text-lg text-[#54372B]">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TextReveal>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-[#F7E1BC]/50 p-1 rounded-lg">
              <button
                onClick={() => setActiveCategory("cafe-quente")}
                className={`flex items-center px-4 py-2 rounded-md transition-all ${
                  activeCategory === "cafe-quente"
                    ? "bg-[#54372B] text-[#F7E1BC]"
                    : "bg-transparent text-[#54372B] hover:bg-[#54372B]/10"
                }`}
              >
                <Coffee className="w-5 h-5 mr-2" />
                Cafés Quentes
              </button>
              <button
                onClick={() => setActiveCategory("cafe-gelado")}
                className={`flex items-center px-4 py-2 rounded-md transition-all ${
                  activeCategory === "cafe-gelado"
                    ? "bg-[#54372B] text-[#F7E1BC]"
                    : "bg-transparent text-[#54372B] hover:bg-[#54372B]/10"
                }`}
              >
                <CupSoda className="w-5 h-5 mr-2" />
                Cafés Gelados
              </button>
              <button
                onClick={() => setActiveCategory("comida")}
                className={`flex items-center px-4 py-2 rounded-md transition-all ${
                  activeCategory === "comida"
                    ? "bg-[#54372B] text-[#F7E1BC]"
                    : "bg-transparent text-[#54372B] hover:bg-[#54372B]/10"
                }`}
              >
                <Croissant className="w-5 h-5 mr-2" />
                Comidas
              </button>
            </div>
          </div>

          {/* Menu Items Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredItems.map((item, index) => (
              <TextReveal key={`${activeCategory}-${index}`} delay={index * 0.05}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-lg text-[#54372B]">{item.name}</h3>
                      <span className="font-medium text-[#54372B] bg-[#F7E1BC]/50 px-2 py-1 rounded-full text-sm">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-[#54372B]/70">{item.desc}</p>
                  </div>
                </div>
              </TextReveal>
            ))}
          </motion.div>
        </TextRevealContainer>
      </div>
    </section>
  )
}




