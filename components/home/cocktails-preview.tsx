import Image from "next/image"
import Link from "next/link"

const cocktails = [
  {
    name: "Soko & Tonic",
    image: "/images/cocktail-1.jpg",
    description: "The classic serve, elevated with rosemary and orange",
  },
  {
    name: "Soko Citrus Spritz",
    image: "/images/cocktail-2.jpg",
    description: "A refreshing burst of sunshine in every sip",
  },
  {
    name: "Soko Negroni",
    image: "/images/cocktail-3.jpg",
    description: "Bold, bittersweet, and beautifully balanced",
  },
]

export function CocktailsPreview() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
            Signature Serves
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance font-light">
            The Art of the Serve
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-muted-foreground leading-relaxed">
            Discover our curated cocktail recipes — from the perfect G&T to
            inventive signature serves crafted to showcase Soko{"'"}s unique
            character.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cocktails.map((cocktail) => (
            <Link
              key={cocktail.name}
              href="/cocktails"
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={cocktail.image || "/placeholder.svg"}
                  alt={cocktail.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-foreground">
                    {cocktail.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {cocktail.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/cocktails"
            className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-accent hover:text-foreground transition-colors duration-300 group"
          >
            View All Cocktails
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
