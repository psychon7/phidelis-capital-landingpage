"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

type PhilosophyItem = {
  id: string
  icon: React.ReactNode
  title: string
  highlightedText: string
  description: string
  detailedDescription: string
  color: string
  background: string
}

export function PhilosophyShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px 0px" })
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const philosophyItems: PhilosophyItem[] = [
    {
      id: "nurturing",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L12 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M9 5.5C9 5.5 9 3 12 3C15 3 15 5.5 15 5.5C15 8 13 9 12 9C11 9 9 8 9 5.5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M7 16C7 13 9 12 12 12C15 12 17 13 17 16C17 20 14 22 12 22C10 22 7 20 7 16Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Nurturing Your",
      highlightedText: "Financial Growth",
      description:
        "Just as a bonsai requires careful cultivation to thrive, your wealth needs expert guidance to flourish.",
      detailedDescription:
        "Our approach combines time-tested strategies with innovative solutions to help your assets grow steadily and sustainably. We believe in the power of patient, disciplined investing - pruning when necessary, nurturing when beneficial, and always keeping the long-term vision in focus.",
      color: "from-[#4290cb] to-[#5ba8e0]",
      background: "bg-gradient-to-br from-[#fafdff] to-[#edf6ff]",
    },
    {
      id: "data-driven",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M7 14L11 10L15 14L21 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M21 12V8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Data-Driven",
      highlightedText: "Wealth Management",
      description:
        "In today's complex financial landscape, success requires more than intuition - it demands precise analysis.",
      detailedDescription:
        "Our team combines cutting-edge analytics with deep market expertise to chart your optimal financial course. We transform complex market data into clear, actionable insights, helping you make informed decisions with confidence and clarity.",
      color: "from-[#24346d] to-[#3a5ca3]",
      background: "bg-gradient-to-br from-[#f7f9ff] to-[#eef3ff]",
    },
    {
      id: "building",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M5 21V7L12 3L19 7V21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9 10.5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 14.5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 18.5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Building",
      highlightedText: "Lasting Wealth",
      description:
        "True wealth isn't just about accumulation - it's about creating lasting value that spans generations.",
      detailedDescription:
        "Our comprehensive approach helps you build, protect, and transfer wealth while maintaining your core values and vision. From strategic asset allocation to legacy planning, we help you turn your financial goals into enduring realities.",
      color: "from-[#5580e1] to-[#8aa7ea]",
      background: "bg-gradient-to-br from-[#f9fafe] to-[#f0f5ff]",
    },
  ]

  const handleMouseEnter = (id: string) => {
    setHoveredItem(id)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  const toggleActiveItem = (id: string) => {
    setActiveItem(activeItem === id ? null : id)
  }

  return (
    <section id="philosophy" className="py-32 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[70%] rounded-full bg-[#4290cb]/3 blur-[100px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-[#24346d]/3 blur-[100px]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-[#5580e1]/3 blur-[100px]" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[15%] left-[10%] w-4 h-4 rounded-full bg-[#4290cb]/30"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[35%] right-[15%] w-6 h-6 rounded-full bg-[#24346d]/20"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-[25%] left-[25%] w-8 h-8 rounded-full bg-[#5580e1]/15"
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div ref={containerRef} style={{ y, opacity }} className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-[#4290cb]/10 text-[#4290cb] text-sm font-medium">
              Our Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Principles That <span className="text-[#4290cb] font-normal">Guide Us</span>
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              We approach wealth management with a distinct philosophy centered on growth, data-driven strategies, and
              building lasting financial legacies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {philosophyItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={cn(
                  "rounded-2xl overflow-hidden transition-all duration-500",
                  activeItem === item.id ? "ring-2 ring-[#4290cb]/20" : "",
                  item.background,
                )}
              >
                <div className="p-2">
                  <div
                    className={cn(
                      "rounded-xl p-6 md:p-8 cursor-pointer transition-all duration-500 relative",
                      activeItem === item.id ? "bg-white/80 backdrop-blur-sm" : "hover:bg-white/50",
                    )}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => toggleActiveItem(item.id)}
                  >
                    {/* Interactive background pattern */}
                    <div className="absolute inset-0 overflow-hidden rounded-xl opacity-10">
                      <svg width="100%" height="100%" className="absolute inset-0">
                        <pattern
                          id={`grid-pattern-${item.id}`}
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 24 0 L 0 0 0 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            className={cn(
                              "text-current transition-all duration-500",
                              hoveredItem === item.id || activeItem === item.id ? "opacity-50" : "opacity-20",
                            )}
                          />
                        </pattern>
                        <rect width="100%" height="100%" fill={`url(#grid-pattern-${item.id})`} />
                      </svg>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 relative z-10">
                      {/* Icon */}
                      <div
                        className={cn(
                          "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500",
                          hoveredItem === item.id || activeItem === item.id
                            ? `bg-gradient-to-br ${item.color} text-white shadow-lg`
                            : "bg-white text-[#4290cb] shadow-sm",
                        )}
                      >
                        {item.icon}
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-light mb-2">
                          {item.title}{" "}
                          <motion.span
                            className={cn(
                              "font-normal relative inline-block",
                              hoveredItem === item.id || activeItem === item.id
                                ? `bg-gradient-to-r ${item.color} bg-clip-text text-transparent`
                                : "text-[#4290cb]",
                            )}
                          >
                            {item.highlightedText}
                            <motion.span
                              initial={{ width: "0%" }}
                              animate={
                                hoveredItem === item.id || activeItem === item.id ? { width: "100%" } : { width: "0%" }
                              }
                              transition={{ duration: 0.4 }}
                              className={cn("absolute bottom-0 left-0 h-[2px] bg-gradient-to-r", item.color)}
                            />
                          </motion.span>
                        </h3>

                        <p className="text-lg text-slate-700 mb-4">{item.description}</p>

                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={
                            activeItem === item.id
                              ? { height: "auto", opacity: 1, marginTop: 16 }
                              : { height: 0, opacity: 0, marginTop: 0 }
                          }
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden"
                        >
                          <p className="text-slate-700 leading-relaxed">{item.detailedDescription}</p>
                        </motion.div>

                        <div className="flex items-center mt-4">
                          <motion.span
                            animate={activeItem === item.id ? { rotate: 180 } : { rotate: 0 }}
                            transition={{ duration: 0.3 }}
                            className={cn(
                              "w-6 h-6 rounded-full flex items-center justify-center transition-colors",
                              hoveredItem === item.id
                                ? `bg-gradient-to-br ${item.color} text-white`
                                : activeItem === item.id
                                  ? `bg-gradient-to-br ${item.color} text-white`
                                  : "bg-[#4290cb]/10 text-[#4290cb]",
                            )}
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.5 4.5L6 8L9.5 4.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </motion.span>
                          <span className="ml-2 text-sm font-medium text-slate-500">
                            {activeItem === item.id ? "Show less" : "Learn more"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
