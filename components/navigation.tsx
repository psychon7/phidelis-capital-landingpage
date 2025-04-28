"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface NavigationProps {
  activeSection: string
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && !(e.target as Element).closest(".main-menu")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          isScrolled ? "bg-white/95 backdrop-blur-sm py-4 shadow-sm" : "bg-transparent py-6",
        )}
      >
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <Image
              src="/images/phidelis-logo.png"
              alt="Phidelis Capital"
              width={200}
              height={50}
              className={cn(
                "h-10 w-auto transition-all duration-300",
                !isScrolled && !isMenuOpen ? "brightness-0 invert" : "",
              )}
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {["about", "services", "philosophy", "products", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={cn(
                  "text-sm font-medium capitalize transition-colors relative",
                  isScrolled
                    ? activeSection === item
                      ? "text-[#4290cb]"
                      : "text-[#24346d] hover:text-[#4290cb]"
                    : activeSection === item
                      ? "text-[#4290cb]"
                      : "text-white hover:text-[#4290cb]",
                )}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#4290cb]"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="#contact"
              className={cn(
                "px-8 py-3 rounded-full text-sm font-medium transition-all",
                isScrolled ? "bg-[#24346d] text-white hover:bg-[#1c2a58]" : "bg-white text-[#24346d] hover:bg-white/90",
              )}
            >
              Schedule a Consultation
            </Link>
          </div>

          <button
            className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div
              className={cn("w-6 flex flex-col items-end justify-center gap-1.5 transition-all", isMenuOpen && "gap-0")}
            >
              <span
                className={cn(
                  "h-0.5 bg-current block transition-all duration-300",
                  isScrolled ? "bg-[#24346d]" : "bg-white",
                  isMenuOpen ? "w-6 translate-y-0.5 rotate-45" : "w-6",
                )}
              ></span>
              <span
                className={cn(
                  "h-0.5 bg-current block transition-all duration-300",
                  isScrolled ? "bg-[#24346d]" : "bg-white",
                  isMenuOpen ? "w-6 opacity-0" : "w-4",
                )}
              ></span>
              <span
                className={cn(
                  "h-0.5 bg-current block transition-all duration-300",
                  isScrolled ? "bg-[#24346d]" : "bg-white",
                  isMenuOpen ? "w-6 -translate-y-0.5 -rotate-45" : "w-5",
                )}
              ></span>
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden main-menu"
          >
            <div className="container h-full flex flex-col justify-center items-center pt-20">
              <nav className="flex flex-col items-center space-y-6 py-8">
                {["about", "services", "philosophy", "products", "contact"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item}`}
                    className="text-xl font-light capitalize text-[#24346d] hover:text-[#4290cb]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                ))}
              </nav>

              <div className="mt-8">
                <Link
                  href="#contact"
                  className="px-8 py-3 rounded-full bg-[#24346d] text-white hover:bg-[#1c2a58] text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
