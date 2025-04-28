"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxImageProps {
  src: string
  alt: string
  overlayColor?: string // Now expects a full background class like "bg-black/50" instead of gradient classes
  speed?: number
}

export function ParallaxImage({ src, alt, overlayColor = "bg-black/50", speed = -10 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, speed])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 h-[110%] w-full">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </motion.div>
      <div className={cn("absolute inset-0", overlayColor)}></div>
    </div>
  )
}
