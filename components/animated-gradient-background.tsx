"use client"

import { cn } from "@/lib/utils"
import styles from "./animated-gradient.module.css"

interface AnimatedGradientBackgroundProps {
  overlayColor?: string
}

export function AnimatedGradientBackground({ 
  overlayColor = "bg-black/30" 
}: AnimatedGradientBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ 
        backgroundImage: `url('/phidelis gradient.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }} />
      <div className={cn("absolute inset-0", overlayColor)}></div>
    </div>
  )
}
