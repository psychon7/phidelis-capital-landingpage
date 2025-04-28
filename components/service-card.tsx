"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  delay?: number
}

export function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: delay }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-medium text-[#24346d] mb-3 group-hover:text-[#4290cb] transition-colors">{title}</h3>
      <p className="text-slate-600">{description}</p>
      <div className="mt-6 w-8 h-[1px] bg-[#4290cb] transition-all duration-300 group-hover:w-12"></div>
    </motion.div>
  )
}
