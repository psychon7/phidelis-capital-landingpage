import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white text-[#24346d] py-20 border-t border-slate-100">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Image
              src="/images/phidelis-logo.png"
              alt="Phidelis Capital"
              width={180}
              height={45}
              className="h-10 w-auto"
            />
            <p className="text-slate-600 text-sm leading-relaxed">
              Phidelis Capital delivers bespoke wealth management solutions, combining ethical principles with
              sophisticated financial strategies to help you achieve your long-term financial aspirations.
            </p>
            <div className="flex">
              <Link
                href="https://linkedin.com/company/phidelis-capital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#4290cb] hover:bg-[#4290cb] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#about" className="text-slate-600 hover:text-[#4290cb] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-600 hover:text-[#4290cb] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-slate-600 hover:text-[#4290cb] transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-slate-600 hover:text-[#4290cb] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-600 hover:text-[#4290cb] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#services" className="text-slate-600 hover:text-[#4290cb] transition-colors">
                  Wealth Management
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-600 hover:text-[#4290cb] transition-colors">
                  Investment Advisory
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-600 hover:text-[#4290cb] transition-colors">
                  Retirement Planning
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-600 hover:text-[#4290cb] transition-colors">
                  Tax & Estate Planning
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-600 hover:text-[#4290cb] transition-colors">
                  Insurance Planning
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#4290cb] mt-0.5 mr-3" />
                <span className="text-slate-600">
                  12 Marina View
                  <br />
                  #11-29 Asia Square 2<br />
                  Singapore 018961
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#4290cb] mr-3" />
                <span className="text-slate-600">+65 9179 0222</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#4290cb] mr-3" />
                <span className="text-slate-600">info@phideliscapital.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            Phidelis Capital – Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-slate-500 hover:text-[#4290cb] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-500 hover:text-[#4290cb] text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-slate-500 hover:text-[#4290cb] text-sm transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
