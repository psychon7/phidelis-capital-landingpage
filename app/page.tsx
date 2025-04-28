"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SplitText } from "@/components/split-text"
import { ParallaxImage } from "@/components/parallax-image"
import { ServiceCard } from "@/components/service-card"
import { InteractiveProductCard } from "@/components/interactive-product-card"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { TeamSection } from "@/components/team-section"
import { Briefcase, TrendingUp, CalendarClock, FileText, Shield, Target, MapPin, Phone, Mail } from "lucide-react"
import { InteractiveCTA } from "@/components/interactive-cta"
import { PhilosophyShowcase } from "@/components/philosophy-showcase"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const containerRef = useRef<HTMLDivElement>(null)

  // Handle scroll for section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 300

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Parallax effect for hero section
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95])
  const heroY = useTransform(scrollY, [0, 400], [0, 100])

  return (
    <div ref={containerRef} className="relative bg-white text-[#24346d]">
      {/* Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
      >
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/images/singapore-skyline.jpg"
            alt="Singapore Skyline"
            overlayColor="bg-[#24346d]/70"
            speed={-20}
          />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
              <SplitText
                text="Bespoke Wealth Solutions with Ethics at the Core"
                className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6"
                delay={0.8}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl md:text-2xl font-light mb-12 text-white/80"
            >
              An independent advisory firm and multi-family office from Singapore.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-[#4290cb] hover:bg-[#3a7eb3] text-white rounded-full text-lg font-light transition-all duration-300 group"
              >
                Schedule a Consultation
              </Link>
            </motion.div>
          </div>
        </div>

        <ScrollIndicator />
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#4290cb]/5 blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#24346d]/5 blur-3xl"></div>

              <div className="relative z-10 p-10">
                <div className="text-[#4290cb] text-sm tracking-widest uppercase mb-4 font-medium">Our Philosophy</div>
                <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                  Welcome to <span className="text-[#4290cb] font-normal">Phidelis Capital</span>
                </h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Phidelis Capital has been conceived to deliver high quality, objective & ethical asset management
                  solutions & advice.
                </p>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  An amalgam of Fidelis, the Latin word for faith & loyalty; and Phi, the Greek symbol that
                  mathematically represents the golden ratio of harmonious proportions, 'Phidelis' blends together these
                  core values in its fundamental essence.
                </p>

                <div className="inline-flex items-center group">
                  <Link href="#services" className="text-[#4290cb] font-medium text-lg group-hover:underline">
                    Discover our services
                  </Link>
                  <div className="ml-3 w-10 h-[1px] bg-[#4290cb] transition-all duration-300 group-hover:w-16"></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <div className="text-4xl font-light text-[#4290cb] mb-4">25+</div>
                  <div className="text-lg text-slate-600">Years of Experience</div>
                </div>
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <div className="text-4xl font-light text-[#4290cb] mb-4">500+</div>
                  <div className="text-lg text-slate-600">Satisfied Clients</div>
                </div>
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <div className="text-4xl font-light text-[#4290cb] mb-4">$5B+</div>
                  <div className="text-lg text-slate-600">Assets Managed</div>
                </div>
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <div className="text-4xl font-light text-[#4290cb] mb-4">100%</div>
                  <div className="text-lg text-slate-600">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#4290cb]/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#24346d]/5 blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="text-[#4290cb] text-sm tracking-widest uppercase mb-4 font-medium">What We Offer</div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Our <span className="text-[#4290cb] font-normal">Services</span>
            </h2>
            <p className="text-lg text-slate-700">
              Comprehensive financial solutions tailored to your unique needs and aspirations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Wealth Management"
              description="Personalized strategies to grow and preserve your wealth for long-term financial security."
              icon={<Briefcase className="w-12 h-12 text-[#4290cb]" />}
              delay={0.1}
            />

            <ServiceCard
              title="Investment Advisory"
              description="Expert guidance on investment portfolios tailored to your risk tolerance and financial goals."
              icon={<TrendingUp className="w-12 h-12 text-[#4290cb]" />}
              delay={0.2}
            />

            <ServiceCard
              title="Retirement Planning"
              description="Secure your future with comprehensive retirement plans and income projections."
              icon={<CalendarClock className="w-12 h-12 text-[#4290cb]" />}
              delay={0.3}
            />

            <ServiceCard
              title="Tax & Estate Planning"
              description="Strategies to minimize tax liabilities and ensure smooth asset transfer."
              icon={<FileText className="w-12 h-12 text-[#4290cb]" />}
              delay={0.4}
            />

            <ServiceCard
              title="Insurance Planning"
              description="Protect your assets and loved ones with tailored insurance solutions."
              icon={<Shield className="w-12 h-12 text-[#4290cb]" />}
              delay={0.5}
            />

            <ServiceCard
              title="Financial Goal Setting"
              description="Define, plan, and achieve your financial aspirations with our support."
              icon={<Target className="w-12 h-12 text-[#4290cb]" />}
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <PhilosophyShowcase />

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <InteractiveCTA
            title="Let's Craft Your"
            highlightedText="Financial Future Together"
            description="Begin your journey to financial prosperity with a personalized consultation."
            buttonText="Schedule a Consultation"
            buttonLink="#contact"
          />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-[#4290cb]/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-[#24346d]/5 blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <div className="text-[#4290cb] text-sm tracking-widest uppercase mb-4 font-medium">Our Solutions</div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Financial <span className="text-[#4290cb] font-normal">Products</span>
            </h2>
            <p className="text-lg text-slate-700">
              Comprehensive financial solutions designed to secure and enhance your wealth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InteractiveProductCard
              title="Investment Portfolios"
              description="Diversified investment strategies tailored to your risk profile and financial goals"
              icon={<TrendingUp className="h-8 w-8" />}
              color="bg-gradient-to-br from-[#24346d] to-[#3a5ca3]"
              hoverColor="bg-gradient-to-br from-[#1c2a58] to-[#2e4a8a]"
              index={0}
            />

            <InteractiveProductCard
              title="Insurance Products"
              description="Comprehensive protection solutions for your assets and loved ones"
              icon={<Shield className="h-8 w-8" />}
              color="bg-gradient-to-br from-[#4290cb] to-[#5ba8e0]"
              hoverColor="bg-gradient-to-br from-[#3a7eb3] to-[#4e96cc]"
              index={1}
            />

            <InteractiveProductCard
              title="Custom Wealth Plans"
              description="Personalized financial roadmaps designed for long-term wealth creation"
              icon={<FileText className="h-8 w-8" />}
              color="bg-gradient-to-br from-[#4290cb] to-[#5ba8e0]"
              hoverColor="bg-gradient-to-br from-[#3a7eb3] to-[#4e96cc]"
              index={2}
            />

            <InteractiveProductCard
              title="Wealth Management"
              description="Strategic wealth management solutions for multi-generational success"
              icon={<Briefcase className="h-8 w-8" />}
              color="bg-gradient-to-br from-[#24346d] to-[#3a5ca3]"
              hoverColor="bg-gradient-to-br from-[#1c2a58] to-[#2e4a8a]"
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-50 to-white"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#4290cb]/5 blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-[#4290cb] text-sm tracking-widest uppercase mb-4 font-medium">Get In Touch</div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                Start Your <span className="text-[#4290cb] font-normal">Journey</span>
              </h2>
              <p className="text-lg text-slate-700 mb-12 leading-relaxed">
                We're here to answer your questions and provide the guidance you need to achieve your financial goals.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-[#4290cb]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#4290cb]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#24346d] mb-2">Visit Our Office</h4>
                    <p className="text-slate-600">12 Marina View, #11-29 Asia Square 2, Singapore 018961</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-[#4290cb]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#4290cb]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#24346d] mb-2">Call Us</h4>
                    <p className="text-slate-600">+65 9179 0222</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-[#4290cb]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#4290cb]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#24346d] mb-2">Email Us</h4>
                    <p className="text-slate-600">info@phideliscapital.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
