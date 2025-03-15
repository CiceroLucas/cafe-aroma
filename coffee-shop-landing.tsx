"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Coffee, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function CoffeeShopLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Refs for sections to observe
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const menuRef = useRef(null)
  const contactRef = useRef(null)

  // Text reveal animation variants
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  // Intersection observer to detect active section
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

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-amber-900/90 text-amber-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Coffee className="h-8 w-8" />
            <span className="text-xl font-bold">Aroma Café</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {["home", "about", "menu", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize hover:text-amber-200 transition-colors ${
                  activeSection === item ? "text-amber-200 font-medium" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-amber-900 text-amber-50 flex flex-col">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Coffee className="h-8 w-8" />
              <span className="text-xl font-bold">Aroma Café</span>
            </div>
            <button onClick={toggleMenu}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-xl">
            {["home", "about", "menu", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize hover:text-amber-200 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        ref={homeRef}
        className="min-h-screen pt-20 flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('/placeholder.svg?height=1080&width=1920')",
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-3xl mx-auto"
          >
            <motion.h1 variants={textReveal} className="text-4xl md:text-6xl font-bold mb-6">
              Experience the Perfect Brew
            </motion.h1>
            <motion.p variants={textReveal} className="text-xl md:text-2xl mb-8 text-amber-100">
              Artisanal coffee in a cozy atmosphere
            </motion.p>
            <motion.div variants={textReveal}>
              <Button
                onClick={() => scrollToSection("menu")}
                className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-6 rounded-full text-lg"
              >
                Explore Our Menu
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={textReveal} className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Our Story
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div variants={textReveal}>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Coffee shop interior"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>

              <motion.div variants={staggerChildren} className="space-y-4">
                <motion.p variants={textReveal} className="text-lg">
                  Founded in 2010, Aroma Café began with a simple mission: to serve exceptional coffee in a warm,
                  welcoming environment.
                </motion.p>
                <motion.p variants={textReveal} className="text-lg">
                  We source our beans directly from sustainable farms around the world, ensuring both quality and
                  ethical practices.
                </motion.p>
                <motion.p variants={textReveal} className="text-lg">
                  Our baristas are trained in the art and science of coffee, creating the perfect cup every time.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" ref={menuRef} className="py-20 bg-amber-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={textReveal} className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Menu
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Coffee Section */}
              <motion.div variants={textReveal} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-amber-800">Coffee</h3>
                <ul className="space-y-4">
                  {[
                    { name: "Espresso", price: "$3.50", desc: "Rich and intense" },
                    { name: "Cappuccino", price: "$4.50", desc: "Espresso with steamed milk and foam" },
                    { name: "Latte", price: "$4.75", desc: "Espresso with lots of steamed milk" },
                    { name: "Cold Brew", price: "$5.00", desc: "Smooth and refreshing" },
                  ].map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-stone-600">{item.desc}</p>
                      </div>
                      <span className="font-medium">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Food Section */}
              <motion.div variants={textReveal} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-amber-800">Food</h3>
                <ul className="space-y-4">
                  {[
                    { name: "Croissant", price: "$3.25", desc: "Buttery and flaky" },
                    { name: "Avocado Toast", price: "$8.50", desc: "Whole grain bread with fresh avocado" },
                    { name: "Blueberry Muffin", price: "$3.75", desc: "Made fresh daily" },
                    { name: "Breakfast Sandwich", price: "$6.50", desc: "Egg, cheese, and bacon" },
                  ].map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-stone-600">{item.desc}</p>
                      </div>
                      <span className="font-medium">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 bg-amber-900 text-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={textReveal} className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Visit Us
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={textReveal} className="space-y-4">
                <h3 className="text-2xl font-bold">Hours</h3>
                <p>Monday - Friday: 7am - 7pm</p>
                <p>Saturday - Sunday: 8am - 6pm</p>

                <h3 className="text-2xl font-bold mt-6">Location</h3>
                <p>123 Coffee Street</p>
                <p>Brewville, CA 90210</p>

                <h3 className="text-2xl font-bold mt-6">Contact</h3>
                <p>info@aromacafe.com</p>
                <p>(555) 123-4567</p>

                <div className="flex gap-4 mt-6">
                  <Link href="#" className="hover:text-amber-200 transition-colors">
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="#" className="hover:text-amber-200 transition-colors">
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="hover:text-amber-200 transition-colors">
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </motion.div>

              <motion.div variants={textReveal}>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded bg-amber-800 border border-amber-700 text-white placeholder-amber-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded bg-amber-800 border border-amber-700 text-white placeholder-amber-300"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded bg-amber-800 border border-amber-700 text-white placeholder-amber-300"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button type="submit" className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-md">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-stone-900 text-stone-400 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Aroma Café. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

