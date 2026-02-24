import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-serif text-3xl tracking-widest text-foreground font-light">
              SOKO
            </span>
            <span className="text-[10px] tracking-[0.35em] text-muted-foreground uppercase ml-1.5">
              Gin
            </span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              A luxury craft spirit born of African heritage. Every sip tells a
              story of tradition, craftsmanship, and the spirit of Africa.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-accent mb-4">
              Explore
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/story"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Our Story
              </Link>
              <Link
                href="/products"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Products
              </Link>
              <Link
                href="/cocktails"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Cocktails
              </Link>
              <Link
                href="/stockists"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Where to Buy
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-accent mb-4">
              Support
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/contact#faq"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/contact#shipping"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Shipping Info
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-accent mb-4">
              Legal
            </h4>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-muted-foreground">
                Privacy Policy
              </span>
              <span className="text-sm text-muted-foreground">
                Terms of Service
              </span>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              Please drink responsibly. You must be of legal drinking age in your
              country to purchase Soko Gin.
            </p>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Soko Gin. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
