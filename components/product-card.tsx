"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProductCardProps {
  title: string
  description: string
  image: string
  icon: ReactNode
  delay?: number
}

export function ProductCard({ title, description, image, icon, delay = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: delay }}
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#24346d]/90 via-[#24346d]/50 to-transparent opacity-90"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">{icon}</div>
          <h3 className="text-2xl font-light">{title}</h3>
        </div>
        <p className="text-white/80 text-sm mb-6 max-w-xs">{description}</p>
        <div className="flex items-center">
          <span className="text-sm font-medium">Learn more</span>
          <div className="ml-3 w-6 h-[1px] bg-white transition-all duration-300 group-hover:w-10"></div>
        </div>
      </div>
    </motion.div>
  )
}
