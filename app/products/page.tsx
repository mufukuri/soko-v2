import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Products | Soko Gin",
  description:
    "Explore the Soko Gin collection. Discover tasting notes, pairing suggestions, and shop our range of premium craft gins.",
}

const products = [
  {
    name: "Soko Dry Gin",
    tagline: "Our Signature Expression",
    description:
      "Pine fresh juniper lemon zest and coriander with slightly sweet liquorice root.",
    image: "/images/soko-dry-gin.jpg",
    volume: "700ml",
    abv: "43%",
    palate: "Juniper leads with a zesty citrus brightness, followed by warm spice and a subtle earthy depth from African botanicals.",
    aroma: "Fresh juniper, orange zest, and a whisper of coriander with floral undertones.",
    finish: "Long, warm, and elegantly dry with lingering notes of citrus and spice.",
    pairings: [
      "Premium Indian tonic water with an orange wheel",
      "Fresh seafood and grilled citrus dishes",
      "Dark chocolate with a hint of sea salt",
    ],
  },
  {
    name: "Soko Citrus Gin",
    tagline: "Our Cocktail Companion",
    description:
      "Crystal clear aromatic pink grapefruit zest with a fruity cinnamon warmth and hibiscus complexity.",
    image: "/images/soko-citrus.jpg",
    volume: "700ml",
    abv: "43%",
    palate: "Juniper leads with a zesty citrus brightness, followed by warm spice and a subtle earthy depth from African botanicals.",
    aroma: "Fresh juniper, orange zest, and a whisper of coriander with floral undertones.",
    finish: "Long, warm, and elegantly dry with lingering notes of citrus and spice.",
    pairings: [
      "Sparkling water and fresh citrus peel",
      "Grilled prawns with garlic butter",
      "Orange almond cake"
    ],
  },
  
  {
    name: "Soko Floral Gin",
    tagline: "Our Limited Edition",
    description:
      "Floral elderflower and honeysuckle sweetness with a ginger and cinnamon complex.",
    image: "/images/soko-floral-gin.jpeg",
    volume: "700ml",
    abv: "43%",
    palate: "Parma Violets and honeysuckle dominate the palate providing sweetness and a silky smooth mouth feel. Ginger and cinnamon spice contribute to the complex lingering spice",
    aroma: "Floral nose of elderflower & honeysuckle with the presence of freshly bloomed rose pedals.",
    finish: "Floral, almost fruity aftertaste of gingery warmth, elderflower and a slight black pepper finish.",
    pairings: [
    
      "Elderflower tonic, Elderflower cordial, tonic andflower petals",
      "Chicken with light cream sauce",
      "White chocolate desserts"
    ],
  }
]

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">
                Our Collection
              </p>
              <h1 className="font-serif text-5xl md:text-6xl text-foreground text-balance font-light">
                The Soko Range
              </h1>
              <p className="mt-4 max-w-lg mx-auto text-muted-foreground leading-relaxed">
                Each expression is crafted in small batches with carefully
                selected botanicals. Discover your perfect serve.
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        {products.map((product) => (
          <section key={product.name} className="py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Product Image */}
                <div className="relative aspect-square bg-card overflow-hidden flex items-center justify-center">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-center">
                  <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
                    {product.tagline}
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light">
                    {product.name}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="mt-6 flex gap-8">
                    <div>
                      <p className="text-xs tracking-wide uppercase text-muted-foreground">
                        Volume
                      </p>
                      <p className="text-foreground mt-1 font-medium">
                        {product.volume}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs tracking-wide uppercase text-muted-foreground">
                        ABV
                      </p>
                      <p className="text-foreground mt-1 font-medium">
                        {product.abv}
                      </p>
                    </div>
                  </div>

                  {/* Tasting Notes */}
                  <div className="mt-8 border-t border-border pt-6">
                    <h3 className="text-xs tracking-[0.2em] uppercase text-accent mb-6">
                      Tasting Notes
                    </h3>
                    <div className="flex flex-col gap-5">
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">
                          Aroma
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {product.aroma}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">
                          Palate
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {product.palate}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">
                          Finish
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {product.finish}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pairing */}
                  <div className="mt-8 border-t border-border pt-6">
                    <h3 className="text-xs tracking-[0.2em] uppercase text-accent mb-4">
                      Perfect Pairings
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {product.pairings.map((pairing) => (
                        <li
                          key={pairing}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-accent mt-1.5 flex-shrink-0">
                            <svg
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 12 12"
                            >
                              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
                            </svg>
                          </span>
                          {pairing}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/stockists"
                      className="inline-flex items-center justify-center px-8 py-3 text-sm tracking-[0.15em] uppercase bg-foreground text-background hover:bg-foreground/85 transition-colors duration-300"
                    >
                      Find Where to Buy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Botanicals Banner */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
                  What Goes In
                </p>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-balance font-light">
                  Botanicals of Distinction
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
                  Our botanicals are carefully sourced from trusted growers and
                  foragers. Each one is selected not only for its flavor profile
                  but for the story it carries — from the juniper forests of
                  Europe to the spice markets of Africa.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    "Juniper Berries",
                    "Orange Peel",
                    "Lemon Peel",
                    "Coriander Seeds",
                    "Cardamom",
                    "Grains of Paradise",
                    "Dried Hibiscus",
                    "Angelica Root",
                  ].map((botanical) => (
                    <div
                      key={botanical}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      {botanical}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/botanicals.jpg"
                  alt="Soko Gin botanicals"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
