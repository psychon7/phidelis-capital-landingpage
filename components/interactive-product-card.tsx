"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface InteractiveProductCardProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  hoverColor: string
  index: number
}

export function InteractiveProductCard({
  title,
  description,
  icon,
  color,
  hoverColor,
  index,
}: InteractiveProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl p-8 transition-all duration-500",
        color,
        "h-full flex flex-col justify-between",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 text-white"
        >
          <defs>
            <pattern id={`grid-${index}`} width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
        </svg>
      </div>

      {/* Animated circle */}
      <motion.div
        className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white opacity-0 blur-3xl transition-opacity duration-500"
        animate={{ opacity: isHovered ? 0.1 : 0 }}
      />

      <div className="relative z-10">
        <div
          className={cn(
            "mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300",
            "group-hover:bg-white group-hover:text-[#24346d]",
          )}
        >
          {icon}
        </div>

        <h3 className="mb-3 text-2xl font-light text-white">{title}</h3>
        <p className="mb-6 text-white/80">{description}</p>
      </div>

      <Link
        href="#contact"
        className="relative z-10 mt-auto flex w-fit items-center text-sm font-medium text-white group-hover:text-white/90"
      >
        <span>Learn more</span>
        <motion.div
          className="ml-2 flex items-center"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight className="h-4 w-4" />
        </motion.div>
      </Link>

      {/* Hover effect */}
      <motion.div
        className={cn("absolute inset-0 z-0", hoverColor)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
