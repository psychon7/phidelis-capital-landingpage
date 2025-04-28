"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CircleButtonProps {
  text: string
  href: string
  light?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export function CircleButton({ text, href, light = false, onMouseEnter, onMouseLeave }: CircleButtonProps) {
  return (
    <Link href={href} className="inline-block" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative px-8 py-4 rounded-full flex items-center justify-center group",
          light ? "bg-white text-[#24346d]" : "bg-[#4290cb] text-white",
        )}
      >
        <span className="text-lg font-light">{text}</span>
        <motion.div className="ml-3 w-5 h-[1px] bg-current" initial={{ width: 20 }} whileHover={{ width: 32 }} />
      </motion.div>
    </Link>
  )
}
