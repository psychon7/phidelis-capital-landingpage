"use client"

import { motion } from "framer-motion"
import { TeamMemberCard } from "@/components/team-member-card"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Anuj Grover",
      role: "Chief Executive Officer",
      bio: "A career wealth management practitioner with two decades of experience across banking, investment advisory, succession and legacy planning. Based in Singapore for about 10 years, Anuj has lived & worked in India, the Middle East & Hong Kong, covering clients across the global spectrum. He previously held client advisory & leadership roles with leading global financial institutions such as Citi, HSBC & UBS, with his last position as Managing Director at Swiss boutique Bank J. Safra Sarasin.",
      image: "/confident-banker.png",
      linkedIn: "https://www.linkedin.com/in/anuj-grover-b7b7a31/",
    },
    {
      name: "Prashant Shah",
      role: "Chief Investment Officer",
      bio: "A seasoned finance professional with over 25 years of experience across Consulting, Private Banking, Wealth & Asset Management. He has held leadership roles such as CEO, Fund Manager, and Executive Director at global financial institutions including UBS, J. Safra Sarasin, Standard Chartered, GE, Centrum, Enam & Matterhorn. His expertise spans investment advisory, business strategy, risk management, and regulatory compliance across jurisdictions.",
      image: "/confident-banker.png",
      linkedIn: "https://www.linkedin.com/in/prashant-shah-39904026/",
    },
    {
      name: "Patricia 'Pat' Lim",
      role: "Head of Operations",
      bio: "With over 35 years' experience in the finance industry, Pat began her banking career in Singapore as a client service associate in the early nineties and progressed to become a banker, advising clients in the pan Asian region. Having witnessed several financial crises, Pat is a strong advocate for providing the right advice to clients. She has held diverse banking roles at Citi, UBS, Deutsche Bank, DBS, J. Safra Sarasin, Commerzbank, and Standard Chartered.",
      image: "/confident-asian-professional.png",
      linkedIn: "https://www.linkedin.com/in/pat-l-8b9552a/",
    },
    {
      name: "Sushruth Sunder, CFA",
      role: "Investment Analyst",
      bio: "With about a decade of experience in asset & wealth management, investment research, and financial media, Sushruth has honed deep expertise in securities research, market analysis, and data-driven investment strategies. Prior to his current role, he led equity research at fintech firm INDmoney, and contributed extensively as a Financial Journalist at the Financial Express publication.",
      image: "/confident-asian-advisor.png",
      linkedIn: "https://www.linkedin.com/in/sushruth-sunder-cfa-79481099/",
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
            <span className="font-normal"><span className="text-[#428fcb]">Meet</span> <span className="text-[#24346d]">Our Team</span></span>
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
