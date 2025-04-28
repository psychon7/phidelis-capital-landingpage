"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"

interface TeamMemberCardProps {
  name: string
  role: string
  bio: string
  image: string
  linkedIn: string
  delay?: number
}

export function TeamMemberCard({ name, role, bio, image, linkedIn, delay = 0 }: TeamMemberCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-[400px] w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative h-full w-full transform-style-3d transition-all duration-500 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden rounded-xl bg-white shadow-lg">
          <div className="relative h-3/5 overflow-hidden rounded-t-xl">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#24346d]/80 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <h3 className="mb-1 text-xl font-medium text-[#24346d]">{name}</h3>
            <p className="mb-4 text-[#4290cb]">{role}</p>
            <div className="flex items-center justify-center">
              <span className="mr-2 text-sm text-slate-600">View Profile</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4290cb]/10">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#4290cb]"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-gradient-to-br from-[#24346d] to-[#3a5ca3] p-6 text-white shadow-lg">
          <div className="flex h-full flex-col justify-between">
            <div>
              <h3 className="mb-2 text-xl font-medium">{name}</h3>
              <p className="mb-4 text-sm text-white/80">{role}</p>
              <p className="text-sm leading-relaxed text-white/90">{bio}</p>
            </div>
            <div className="flex justify-end">
              <Link
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white hover:text-[#24346d]"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
