"use client"

import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current)
    }
  }, [])

  const handleMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current)
      leaveTimeoutRef.current = null
    }
    if (!isServicesOpen) {
      hoverTimeoutRef.current = setTimeout(() => {
        setIsServicesOpen(true)
      }, 150) // Small delay before opening
    }
  }

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    leaveTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 300) // Longer delay before closing
  }

  return (
    <nav className="border-b-4 border-border bg-card sticky top-0 z-50">
      <div className="container mx-auto pl-2 pr-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/educ-AWn0u7F1HBsEw7HoWS82wpv7mePgKy.jpeg"
                alt="My Education Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground tracking-tight">My Education</h1>
              <p className="text-sm font-medium text-muted-foreground">Empowering the Nation</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="font-semibold text-foreground hover:text-primary text-sm transition-colors">
              Home
            </Link>
            <Link href="/about" className="font-semibold text-foreground hover:text-primary text-sm transition-colors">
              About
            </Link>
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button
                className="font-semibold text-foreground hover:text-primary text-sm transition-colors flex items-center gap-1"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Admissions
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-md shadow-lg z-50">
                  <div className="py-2">

                    <Link
                      href="/student-admission"
                      className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                    >
                      Student Admission
                    </Link>
                    <Link
                      href="/student-accommodation"
                      className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                    >
                      Student Accommodation
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/faqs" className="font-semibold text-foreground hover:text-primary text-sm transition-colors">
              FAQ's
            </Link>

            <Link
              href="/teacher-portal"
              className="block px-4 py-3 font-semibold border-1 rounded-lg text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
            >
              Careers
            </Link>


            <Link
              href="/contact"
              className="font-semibold text-foreground hover:text-primary text-sm transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/get-involved">
              <button className="hidden md:block bg-stone-800 hover:bg-stone-700 text-white font-semibold border border-stone-900 px-4 py-2 rounded-md transition-colors">
                Get Involved
              </button>
            </Link>

            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border pt-6">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="font-semibold text-foreground hover:text-primary text-sm transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="font-semibold text-foreground hover:text-primary text-sm transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="py-2">
                <div className="font-semibold text-foreground text-sm mb-2">Our Services</div>
                <div className="ml-4 space-y-2">

                  <Link
                    href="/student-admission"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Student Admission
                  </Link>
                  <Link
                    href="/student-accommodation"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Student Accommodation
                  </Link>
                </div>
              </div>
              <Link
                href="/faqs"
                className="font-semibold text-foreground hover:text-primary text-sm transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ's
              </Link>

              <Link
                href="/teacher-portal"
                className="font-semibold  text-foreground hover:text-primary text-sm transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="font-semibold text-foreground hover:text-primary text-sm transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link href="/get-involved">
                <button className="mt-4 bg-stone-800 hover:bg-stone-700 text-white font-semibold w-full border border-stone-900 px-4 py-2 rounded-md transition-colors">
                  Get Involved
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
