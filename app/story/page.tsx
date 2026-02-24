import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Story | Soko Gin",
  description:
    "Discover the heritage, meaning, and founder's vision behind Soko Gin — a luxury craft spirit rooted in African culture.",
}

const timeline = [
  {
    year: "The Vision",
    title: "A Dream Takes Root",
    description:
      "The idea for Soko Gin was born from a deep connection to African heritage and a desire to share that story through the art of distillation. The founder envisioned a spirit that would bridge cultures and celebrate the richness of the continent.",
  },
  {
    year: "The Journey",
    title: "Sourcing the Finest Botanicals",
    description:
      "Travels across the continent to discover rare and remarkable botanicals. From the markets of East Africa to the coastal groves, each ingredient was selected for its story as much as its flavor.",
  },
  {
    year: "The Craft",
    title: "Small Batch Perfection",
    description:
      "Working with master distillers, the recipe was refined through countless iterations. Every batch is crafted with the same attention to detail and respect for the ingredients that inspired the journey.",
  },
  {
    year: "The Launch",
    title: "Soko Meets the World",
    description:
      "Soko Gin was introduced to discerning palates worldwide. From premium bars to private collections, the spirit found its place among those who appreciate craft, culture, and authenticity.",
  },
]

export default function StoryPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/african-landscape.jpg"
              alt="African landscape at golden hour"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#2a1f14]/60 via-[#2a1f14]/30 to-[#2a1f14]/70" />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-24">
            <p className="text-xs tracking-[0.4em] uppercase text-[#d4c5a9] mb-6">
              Our Story
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-[#f5f0e8] leading-tight text-balance font-light">
              Where Heritage
              <br />
              <span className="text-[#d4c5a9] italic">Meets Craft</span>
            </h1>
            <p className="mt-6 max-w-xl mx-auto text-lg text-[#c9bea8] leading-relaxed text-pretty">
              Soko is more than a gin. It is a celebration of African culture,
              distilled into every drop.
            </p>
          </div>
        </section>

        {/* The Meaning */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
                  The Name
                </p>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-balance font-light">
                  Soko: The Monkey
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
                 “Soko” — a name drawn from the Shona totem for the monkey — is a symbol of connection, memory and curiosity. Like the totem, our gin is an emblem: it links generations, landscapes and rituals, and celebrates the quiet wisdom that lives in place and people.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
                 Crafted by an African entrepreneur driven to create a lasting legacy, Soko Gin was conceived from a personal quest — after tasting gins across continents, she set out to make a gin that didn’t merely borrow Africa as an influence but placed it at the heart.
                </p>
                
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/founder.jpeg"
                  alt="The founder of Soko Gin"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
                Our Journey
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance font-light">
                From Concept to Creation
              </h2>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

              <div className="flex flex-col gap-16">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative flex flex-col md:flex-row gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1.5 mt-2 z-10" />

                    {/* Content */}
                    <div
                      className={`ml-12 md:ml-0 md:w-1/2 ${
                        index % 2 === 0
                          ? "md:pr-16 md:text-right"
                          : "md:pl-16"
                      }`}
                    >
                      <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2">
                        {item.year}
                      </p>
                      <h3 className="font-serif text-2xl text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-muted-foreground leading-relaxed text-pretty">
                        {item.description}
                      </p>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Craftsmanship */}
        <section id="craftsmanship" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
                <Image
                  src="/images/distillery.jpg"
                  alt="Craft distillery with copper pot stills"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
                  The Process
                </p>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-balance font-light">
                  Small Batch,
                  <br />
                  Big Intention
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
                  Soko Gin is distilled in small batches to ensure every bottle
                  meets our exacting standards. Our process honors traditional
                  distilling methods while embracing modern precision.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
                  Each botanical is carefully weighed, macerated, and distilled
                  to extract its fullest expression. The result is a gin of
                  remarkable clarity and depth — one that reveals new layers with
                  every sip.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="border-l-2 border-accent pl-4">
                    <p className="font-serif text-2xl text-foreground font-light">
                      Copper Pot
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Traditional still distillation
                    </p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <p className="font-serif text-2xl text-foreground font-light">
                      12 Hours
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Botanical maceration time
                    </p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <p className="font-serif text-2xl text-foreground font-light">
                      5x Filtered
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      For exceptional smoothness
                    </p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <p className="font-serif text-2xl text-foreground font-light">
                      Hand-bottled
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Individual care and attention
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
