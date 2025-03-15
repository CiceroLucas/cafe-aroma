"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter, MapPin, Clock, Phone, Mail } from "lucide-react"
import { TextReveal, TextRevealContainer } from "./text-reveal"

interface ContactSectionProps {
  reference: React.RefObject<HTMLElement>
}

export function ContactSection({ reference }: ContactSectionProps) {
  return (
    <section id="contact" ref={reference} className="py-20 bg-[#54372B] text-[#F7E1BC] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#F7E1BC]"></div>
        <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-[#F7E1BC]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <TextRevealContainer>
          <TextReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Visite-nos</h2>
          </TextReveal>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Info Column */}
            <div className="space-y-10">
              <TextReveal>
                <div className="bg-[#54372B]/80 backdrop-blur-sm p-6 rounded-xl border border-[#F7E1BC]/20 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#F7E1BC]/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-[#F7E1BC]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#F7E1BC]">Localização</h3>
                      <p className="text-[#F7E1BC]/80">Rua do Café, 123</p>
                      <p className="text-[#F7E1BC]/80">Cafeville, SP 01234-567</p>
                    </div>
                  </div>
                </div>
              </TextReveal>

              <TextReveal delay={0.1}>
                <div className="bg-[#54372B]/80 backdrop-blur-sm p-6 rounded-xl border border-[#F7E1BC]/20 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#F7E1BC]/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-[#F7E1BC]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#F7E1BC]">Horários</h3>
                      <p className="text-[#F7E1BC]/80">Segunda - Sexta: 7h - 19h</p>
                      <p className="text-[#F7E1BC]/80">Sábado - Domingo: 8h - 18h</p>
                    </div>
                  </div>
                </div>
              </TextReveal>

              <TextReveal delay={0.2}>
                <div className="bg-[#54372B]/80 backdrop-blur-sm p-6 rounded-xl border border-[#F7E1BC]/20 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#F7E1BC]/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-[#F7E1BC]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#F7E1BC]">Contato</h3>
                      <p className="text-[#F7E1BC]/80">(11) 91234-5678</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Mail className="h-4 w-4 text-[#F7E1BC]/80" />
                        <p className="text-[#F7E1BC]/80">info@cafearoma.com.br</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TextReveal>

              <TextReveal delay={0.3}>
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-[#F7E1BC]">Siga-nos</h3>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="bg-[#F7E1BC]/10 hover:bg-[#F7E1BC]/20 p-3 rounded-full transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-6 w-6" />
                    </Link>
                    <Link
                      href="#"
                      className="bg-[#F7E1BC]/10 hover:bg-[#F7E1BC]/20 p-3 rounded-full transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-6 w-6" />
                    </Link>
                    <Link
                      href="#"
                      className="bg-[#F7E1BC]/10 hover:bg-[#F7E1BC]/20 p-3 rounded-full transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </TextReveal>
            </div>

            {/* Form Column */}
            <TextReveal delay={0.2}>
              <div className="bg-[#F7E1BC]/5 backdrop-blur-sm p-8 rounded-xl border border-[#F7E1BC]/20 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-[#F7E1BC]">Envie uma mensagem</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-[#F7E1BC]/90 font-medium">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-[#F7E1BC]/10 border border-[#F7E1BC]/20 text-[#F7E1BC] placeholder-[#F7E1BC]/50 focus:outline-none focus:ring-2 focus:ring-[#F7E1BC]/50 transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-[#F7E1BC]/90 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-[#F7E1BC]/10 border border-[#F7E1BC]/20 text-[#F7E1BC] placeholder-[#F7E1BC]/50 focus:outline-none focus:ring-2 focus:ring-[#F7E1BC]/50 transition-all"
                      placeholder="Seu email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-[#F7E1BC]/90 font-medium">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-[#F7E1BC]/10 border border-[#F7E1BC]/20 text-[#F7E1BC] placeholder-[#F7E1BC]/50 focus:outline-none focus:ring-2 focus:ring-[#F7E1BC]/50 transition-all resize-none"
                      placeholder="Sua mensagem"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#F7E1BC] hover:bg-[#F7E1BC]/90 text-[#54372B] font-medium px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </TextReveal>
          </div>

          {/* Map or Location Image */}
          <TextReveal delay={0.4}>
            <div className="mt-16 rounded-xl overflow-hidden h-64 md:h-80 shadow-xl border border-[#F7E1BC]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975588253486!2d-46.6565839!3d-23.5646162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1648138449741!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Café Aroma"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </TextReveal>
        </TextRevealContainer>
      </div>
    </section>
  )
}

