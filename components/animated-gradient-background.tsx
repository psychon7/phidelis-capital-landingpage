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
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="relative w-full h-full" 
          style={{
            backgroundImage: `url('/phidelis gradient.png')`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            transform: 'scale(1.1)', // Prevent edge gaps during scroll
          }}
        />
      </div>
      <div className={cn("absolute inset-0", overlayColor)}></div>
    </div>
  )
}
