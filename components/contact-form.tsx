"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log(formState)
    alert("Thank you for your message. We will contact you shortly.")
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-8 md:p-10"
    >
      <h3 className="text-2xl font-light text-[#24346d] mb-6">Send Us a Message</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-700 block">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-b border-slate-200 focus:border-[#4290cb] bg-transparent outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-700 block">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-b border-slate-200 focus:border-[#4290cb] bg-transparent outline-none transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-slate-700 block">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formState.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-b border-slate-200 focus:border-[#4290cb] bg-transparent outline-none transition-colors"
            placeholder="+65 1234 5678"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-slate-700 block">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            value={formState.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border-b border-slate-200 focus:border-[#4290cb] bg-transparent outline-none transition-colors"
          >
            <option value="">Select a service</option>
            <option value="wealth-management">Wealth Management</option>
            <option value="investment-advisory">Investment Advisory</option>
            <option value="retirement-planning">Retirement Planning</option>
            <option value="tax-estate-planning">Tax & Estate Planning</option>
            <option value="insurance-planning">Insurance Planning</option>
            <option value="financial-goal-setting">Financial Goal Setting</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-700 block">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formState.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-b border-slate-200 focus:border-[#4290cb] bg-transparent outline-none transition-colors resize-none"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <div>
          <Button type="submit" className="w-full bg-[#24346d] hover:bg-[#1c2a58] text-white py-6 rounded-none">
            Send Message
          </Button>
        </div>
      </form>
    </motion.div>
  )
}
