import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MapPin, Globe, Store } from "lucide-react"

export const metadata: Metadata = {
  title: "Where to Buy | Soko Gin",
  description:
    "Find Soko Gin near you. Browse our retail partners, online shops, and global stockists.",
}

const regions = [
  {
    name: "East Africa",
    stockists: [
      { name: "Nairobi Wine & Spirits", location: "Nairobi, Kenya", type: "Retail" },
      { name: "The Vine Boutique", location: "Nairobi, Kenya", type: "Retail" },
      { name: "Craft Bar Dar", location: "Dar es Salaam, Tanzania", type: "Bar" },
      { name: "Kampala Fine Spirits", location: "Kampala, Uganda", type: "Retail" },
    ],
  },
  {
    name: "Southern Africa",
    stockists: [
      { name: "Cape Wine Merchants", location: "Cape Town, South Africa", type: "Retail" },
      { name: "The Spirit Library", location: "Johannesburg, South Africa", type: "Retail" },
      { name: "Kigali Premium Drinks", location: "Kigali, Rwanda", type: "Retail" },
    ],
  },
  {
    name: "Europe",
    stockists: [
      { name: "The Whisky Exchange", location: "London, UK", type: "Online" },
      { name: "Maison du Whisky", location: "Paris, France", type: "Retail" },
      { name: "Spirit Hub Berlin", location: "Berlin, Germany", type: "Retail" },
    ],
  },
  {
    name: "North America",
    stockists: [
      { name: "Craft Spirits Co.", location: "New York, USA", type: "Online" },
      { name: "The Botanist Bar", location: "Los Angeles, USA", type: "Bar" },
    ],
  },
]

const channels = [
  {
    icon: <Store className="w-6 h-6 text-accent" />,
    title: "Retail Partners",
    description: "Find us at select wine and spirits shops around the world.",
  },
  {
    icon: <Globe className="w-6 h-6 text-accent" />,
    title: "Online Shop",
    description: "Order directly and have Soko Gin delivered to your door.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-accent" />,
    title: "Bars & Restaurants",
    description: "Experience Soko Gin crafted by expert bartenders.",
  },
]

export default function StockistsPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">
                Availability
              </p>
              <h1 className="font-serif text-5xl md:text-6xl text-foreground text-balance font-light">
                Where to Find Us
              </h1>
              <p className="mt-4 max-w-lg mx-auto text-muted-foreground leading-relaxed">
                Soko Gin is available at select retailers, bars, and online
                shops across the globe.
              </p>
            </div>
          </div>
        </section>

        {/* Channels */}
        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {channels.map((channel) => (
                <div
                  key={channel.title}
                  className="bg-card border border-border p-8 text-center"
                >
                  <div className="flex justify-center mb-4">{channel.icon}</div>
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {channel.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stockists by Region */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
                Global Stockists
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance font-light">
                Find Soko Near You
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {regions.map((region) => (
                <div key={region.name}>
                  <h3 className="font-serif text-2xl text-foreground mb-6 pb-3 border-b border-border">
                    {region.name}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {region.stockists.map((stockist) => (
                      <div
                        key={stockist.name}
                        className="flex items-start justify-between"
                      >
                        <div>
                          <p className="text-foreground font-medium text-sm">
                            {stockist.name}
                          </p>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {stockist.location}
                          </p>
                        </div>
                        <span className="text-xs tracking-wider uppercase text-accent bg-muted px-3 py-1 flex-shrink-0">
                          {stockist.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance font-light">
              Want to stock Soko Gin?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We{"'"}re always looking for passionate partners who share our love for
              craft spirits. Get in touch to discuss wholesale and distribution
              opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 mt-8 text-sm tracking-[0.15em] uppercase bg-foreground text-background hover:bg-foreground/85 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
