"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

interface InteractiveCTAProps {
  title: string
  highlightedText: string
  description: string
  buttonText: string
  buttonLink: string
}

export function InteractiveCTA({ title, highlightedText, description, buttonText, buttonLink }: InteractiveCTAProps) {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  const handleHover = () => {
    setIsHovered(true)
    controls.start({
      scale: 1.05,
      transition: { duration: 0.3 },
    })
  }

  const handleHoverEnd = () => {
    setIsHovered(false)
    controls.start({
      scale: 1,
      transition: { duration: 0.3 },
    })
  }

  // Benefits that appear when hovering
  const benefits = [
    "Personalized financial strategy",
    "Expert wealth advisors",
    "Comprehensive portfolio analysis",
    "Long-term growth planning",
  ]

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#24346d] to-[#1c2a58] p-12 md:p-16">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 text-white"
        >
          <defs>
            <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Animated circles */}
      <motion.div
        className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#4290cb] opacity-20 blur-3xl"
        animate={{
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#4290cb] opacity-10 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-4xl font-light leading-tight text-white md:text-5xl"
        >
          {title}{" "}
          <span className="relative font-normal text-[#4290cb]">
            {highlightedText}
            <motion.span
              className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#4290cb]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 text-xl text-white/80"
        >
          {description}
        </motion.p>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="flex items-center rounded-full bg-white/10 px-5 py-2 text-white"
            >
              <Check className="mr-2 h-4 w-4 text-[#4290cb]" />
              <span className="text-sm">{benefit}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          animate={controls}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverEnd}
        >
          <Link
            href={buttonLink}
            className="group inline-flex items-center rounded-full bg-white px-8 py-4 text-lg font-light text-[#24346d] transition-all duration-300 hover:bg-white/90"
          >
            <span>{buttonText}</span>
            <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }} className="ml-3">
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
