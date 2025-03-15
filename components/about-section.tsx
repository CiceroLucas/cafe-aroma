"use client"

import type React from "react"

import Image from "next/image"
import { TextReveal, TextRevealContainer } from "./text-reveal"

interface AboutSectionProps {
  reference: React.RefObject<HTMLElement>
}

export function AboutSection({ reference }: AboutSectionProps) {
  return (
    <section id="about" ref={reference} className="py-20 bg-[#54372B]">
      <div className="container mx-auto px-4">
        <TextRevealContainer>
          <TextReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#F7E1BC]">Nossa História</h2>
          </TextReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <TextReveal>
              <div className="relative aspect-square w-full max-w-[500px] mx-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reserve%20Img-Xjyj3bZirLCPzivVsZAxiI8GG3zdvf.png"
                  alt="Ilustração artística de uma xícara de café com silhuetas"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </TextReveal>

            <div className="space-y-6">
              <TextReveal>
                <p className="text-lg text-[#F7E1BC]/90 leading-relaxed">
                  Fundado em 2010, o Café Aroma começou com uma missão simples: servir café excepcional em um ambiente
                  acolhedor, mantendo viva a tradição dos cafés clássicos.
                </p>
              </TextReveal>
              <TextReveal delay={0.1}>
                <p className="text-lg text-[#F7E1BC]/90 leading-relaxed">
                  Obtemos nossos grãos diretamente de fazendas sustentáveis ao redor do mundo, garantindo qualidade e
                  práticas éticas em cada xícara servida.
                </p>
              </TextReveal>
              <TextReveal delay={0.2}>
                <p className="text-lg text-[#F7E1BC]/90 leading-relaxed">
                  Nossos baristas são verdadeiros artesãos do café, treinados na arte e ciência de extrair o melhor de
                  cada grão, criando experiências únicas para nossos clientes.
                </p>
              </TextReveal>
            </div>
          </div>
        </TextRevealContainer>
      </div>
    </section>
  )
}

