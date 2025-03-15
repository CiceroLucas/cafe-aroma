"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface TextRevealProps {
  children: ReactNode
  delay?: number
}

export function TextReveal({ children, delay = 0 }: TextRevealProps) {
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay,
      },
    },
  }

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textReveal}>
      {children}
    </motion.div>
  )
}

export function TextRevealContainer({ children }: { children: ReactNode }) {
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerChildren}>
      {children}
    </motion.div>
  )
}

