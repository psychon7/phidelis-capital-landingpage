"use client"

import { motion } from "framer-motion"
import { TeamMemberCard } from "@/components/team-member-card"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      bio: "With over 20 years of experience in wealth management, Sarah leads our firm with a vision for ethical, client-centered financial services. Her expertise in strategic asset allocation has helped numerous high-net-worth families preserve and grow their wealth across generations.",
      image: "/confident-leader.png",
      linkedIn: "https://linkedin.com",
    },
    {
      name: "Michael Wong",
      role: "Chief Investment Officer",
      bio: "Michael brings 15 years of investment banking experience to Phidelis Capital. His data-driven approach to portfolio management has consistently delivered above-market returns while maintaining a strong focus on risk management and capital preservation.",
      image: "/confident-banker.png",
      linkedIn: "https://linkedin.com",
    },
    {
      name: "David Tan",
      role: "Head of Wealth Planning",
      bio: "David specializes in comprehensive wealth planning for ultra-high-net-worth individuals. His holistic approach integrates tax optimization, estate planning, and philanthropic strategies to create lasting financial legacies for our clients.",
      image: "/confident-asian-advisor.png",
      linkedIn: "https://linkedin.com",
    },
    {
      name: "Amelia Lim",
      role: "Director of Client Relations",
      bio: "Amelia ensures our clients receive exceptional service and personalized attention. Her background in private banking and deep understanding of client needs allows her to coordinate our team's expertise to deliver tailored financial solutions.",
      image: "/confident-asian-professional.png",
      linkedIn: "https://linkedin.com",
    },
  ]

  return (
    <section id="team" className="relative overflow-hidden py-32">
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#4290cb]/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#24346d]/5 blur-3xl"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-4 text-sm font-medium uppercase tracking-widest text-[#4290cb]">Our Experts</div>
          <h2 className="mb-8 text-4xl font-light leading-tight md:text-5xl">
            Meet Our <span className="font-normal text-[#4290cb]">Team</span>
          </h2>
          <p className="text-lg text-slate-700">
            Our team of experienced professionals is dedicated to providing you with exceptional financial guidance and
            personalized wealth management solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              linkedIn={member.linkedIn}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-lg text-slate-700">
            Our team combines decades of experience with innovative thinking to deliver exceptional financial outcomes
            for our clients. We're committed to your success and ready to help you achieve your financial goals.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
