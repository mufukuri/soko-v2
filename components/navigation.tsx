"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Our Story" },
  { href: "/products", label: "Products" },
  { href: "/cocktails", label: "Cocktails" },
  { href: "/stockists", label: "Where to Buy" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-1.5">
          <span className="font-serif text-3xl tracking-widest text-foreground font-light">
            SOKO
          </span>
          <span className="text-[10px] tracking-[0.35em] text-muted-foreground uppercase mt-1">
            Gin
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-[0.1em] text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 py-2.5 text-[13px] tracking-[0.15em] uppercase bg-foreground text-background hover:bg-foreground/85 transition-colors duration-300"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border/40">
          <div className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[13px] tracking-[0.1em] text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center px-6 py-3 text-[13px] tracking-[0.15em] uppercase bg-foreground text-background hover:bg-foreground/85 transition-colors duration-300 mt-2"
            >
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
