"use client"

import React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, MapPin, Phone } from "lucide-react"

const faqs = [
  {
    question: "Where can I buy Soko Gin?",
    answer:
      "Soko Gin is available at select retailers, bars, and online shops across Africa, Europe, and North America. Visit our Where to Buy page for a full list of stockists.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries where alcohol delivery is permitted. Shipping times and costs vary by destination. Please check our stockists page for online retailers that deliver to your region.",
  },
  {
    question: "What botanicals are used in Soko Gin?",
    answer:
      "Soko Dry Gin features a blend of 12 carefully selected botanicals including juniper berries, orange peel, lemon peel, coriander seeds, cardamom, grains of paradise, dried hibiscus, and angelica root, among others.",
  },
  {
    question: "Can I visit your distillery?",
    answer:
      "We offer private distillery tours and tastings by appointment. Please contact us to arrange a visit and experience the Soko Gin story firsthand.",
  },
  {
    question: "Are you looking for distribution partners?",
    answer:
      "We are always interested in connecting with passionate retail and hospitality partners. Please reach out through the contact form below with details about your business and market.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission would be handled here
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">
                Get in Touch
              </p>
              <h1 className="font-serif text-5xl md:text-6xl text-foreground text-balance font-light">
                Contact Us
              </h1>
              <p className="mt-4 max-w-lg mx-auto text-muted-foreground leading-relaxed">
                Have a question, want to stock Soko Gin, or just want to say
                hello? We{"'"}d love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="flex flex-col gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Mail className="w-5 h-5 text-accent" />
                      <h3 className="text-xs tracking-[0.2em] uppercase text-accent">
                        Email
                      </h3>
                    </div>
                    <a
                      href="mailto:hello@sokogin.com"
                      className="text-foreground hover:text-foreground transition-colors"
                    >
                      hello@sokogin.com
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Phone className="w-5 h-5 text-accent" />
                      <h3 className="text-xs tracking-[0.2em] uppercase text-accent">
                        Phone
                      </h3>
                    </div>
                    <p className="text-foreground">+254 700 000 000</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className="w-5 h-5 text-accent" />
                      <h3 className="text-xs tracking-[0.2em] uppercase text-accent">
                        Address
                      </h3>
                    </div>
                    <p className="text-foreground">
                      Soko Spirits Ltd.
                      <br />
                      Nairobi, Kenya
                    </p>
                  </div>

                  {/* Social */}
                  <div>
                    <h3 className="text-xs tracking-[0.2em] uppercase text-accent mb-3">
                      Follow Us
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
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
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
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
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-card border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-card border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-card border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                      placeholder="What is this about?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-card border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-8 py-3 text-sm tracking-[0.15em] uppercase bg-foreground text-background hover:bg-foreground/85 transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-card">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
                Common Questions
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance font-light">
                Frequently Asked
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="border border-border">
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                    aria-expanded={openFaq === index}
                  >
                    <span className="text-foreground font-medium text-sm pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? "rotate-45" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shipping Info */}
        <section id="shipping" className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
              Shipping Information
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance font-light">
              Delivery & Shipping
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
              Soko Gin is available for delivery through our online retail
              partners. Shipping times and costs vary by destination. Most orders
              within East Africa are delivered within 3-5 business days.
              International orders may take 7-14 business days depending on your
              location and customs clearance.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              Please note that alcohol shipments are subject to the laws and
              regulations of the destination country. You must be of legal
              drinking age in your country to order Soko Gin.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
