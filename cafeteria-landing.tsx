"use client"

import { useEffect, useRef, useState } from "react"
import { Navbar } from "./components/navbar"
import { MobileMenu } from "./components/mobile-menu"
import { HeroSection } from "./components/hero-section"
import { AboutSection } from "./components/about-section"
import { MenuSection } from "./components/menu-section"
import { ContactSection } from "./components/contact-section"
import { Footer } from "./components/footer"

export default function CafeteriaLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Refs para seções a observar
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const menuRef = useRef(null)
  const contactRef = useRef(null)

  // Observer de interseção para detectar a seção ativa
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (homeRef.current) observer.observe(homeRef.current)
    if (aboutRef.current) observer.observe(aboutRef.current)
    if (menuRef.current) observer.observe(menuRef.current)
    if (contactRef.current) observer.observe(contactRef.current)

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current)
      if (aboutRef.current) observer.unobserve(aboutRef.current)
      if (menuRef.current) observer.unobserve(menuRef.current)
      if (contactRef.current) observer.unobserve(contactRef.current)
    }
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} toggleMenu={toggleMenu} />

      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} scrollToSection={scrollToSection} />

      <HeroSection scrollToSection={scrollToSection} reference={homeRef} />

      <AboutSection reference={aboutRef} />

      <MenuSection reference={menuRef} />

      <ContactSection reference={contactRef} />

      <Footer />
    </div>
  )
}

