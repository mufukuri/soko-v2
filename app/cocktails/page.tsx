import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Cocktails | Soko Gin",
  description:
    "Discover signature Soko Gin cocktail recipes — from the classic G&T to inventive serves that showcase our unique botanical character.",
}

const cocktails = [
  {
    name: "Soko & Tonic",
    image: "/images/cocktail-1.jpg",
    tagline: "The Classic Serve, Elevated",
    description:
      "The perfect way to experience Soko Gin. Simple, elegant, and endlessly refreshing.",
    ingredients: [
      "50ml Soko Dry Gin",
      "150ml premium Indian tonic water",
      "Orange wheel",
      "Sprig of fresh rosemary",
      "Plenty of ice",
    ],
    method:
      "Fill a large copa glass with ice. Pour in the Soko Dry Gin and top with chilled tonic water. Gently stir once. Garnish with an orange wheel and a sprig of rosemary.",
    tip: "Use a premium tonic with fine bubbles to let the botanicals shine through.",
  },
  {
    name: "Soko Citrus Spritz",
    image: "/images/cocktail-2.jpg",
    tagline: "Bright, Bubbly, Beautiful",
    description:
      "A refreshing spritz that captures the spirit of golden afternoons and warm gatherings.",
    ingredients: [
      "40ml Soko Dry Gin",
      "20ml fresh grapefruit juice",
      "15ml elderflower liqueur",
      "Prosecco to top",
      "Grapefruit twist",
    ],
    method:
      "Add gin, grapefruit juice, and elderflower liqueur to a wine glass filled with ice. Stir gently and top with chilled Prosecco. Garnish with a grapefruit twist.",
    tip: "For an extra special touch, express the grapefruit peel over the drink to release its aromatic oils.",
  },
  {
    name: "Soko Negroni",
    image: "/images/cocktail-3.jpg",
    tagline: "Bold. Bittersweet. Balanced.",
    description:
      "The timeless Negroni, reimagined with the complex botanicals of Soko Gin for a deeper, more nuanced experience.",
    ingredients: [
      "30ml Soko Dry Gin",
      "30ml Campari",
      "30ml sweet vermouth",
      "Large ice sphere",
      "Orange peel twist",
    ],
    method:
      "Combine all ingredients in a mixing glass filled with ice. Stir for 30 seconds until well-chilled. Strain into a rocks glass over a large ice sphere. Garnish with an expressed orange peel.",
    tip: "The grains of paradise in Soko Gin add a wonderful peppery warmth that complements the bitterness of Campari beautifully.",
  },
]

export default function CocktailsPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">
                Signature Serves
              </p>
              <h1 className="font-serif text-5xl md:text-6xl text-foreground text-balance font-light">
                The Art of the Serve
              </h1>
              <p className="mt-4 max-w-lg mx-auto text-muted-foreground leading-relaxed">
                Crafted recipes to showcase the unique character of Soko Gin.
                From timeless classics to inventive creations.
              </p>
            </div>
          </div>
        </section>

        {/* Cocktails */}
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-24">
              {cocktails.map((cocktail, index) => (
                <div
                  key={cocktail.name}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                  {/* Image */}
                  <div
                    className={`relative aspect-[3/4] overflow-hidden ${
                      index % 2 !== 0 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={cocktail.image || "/placeholder.svg"}
                      alt={cocktail.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Recipe */}
                  <div
                    className={
                      index % 2 !== 0 ? "lg:order-1" : ""
                    }
                  >
                    <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
                      {cocktail.tagline}
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                      {cocktail.name}
                    </h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
                      {cocktail.description}
                    </p>

                    {/* Ingredients */}
                    <div className="mt-8">
                      <h3 className="text-xs tracking-[0.2em] uppercase text-accent mb-4">
                        Ingredients
                      </h3>
                      <ul className="flex flex-col gap-2">
                        {cocktail.ingredients.map((ingredient) => (
                          <li
                            key={ingredient}
                            className="text-sm text-foreground flex items-center gap-3"
                          >
                            <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Method */}
                    <div className="mt-8">
                      <h3 className="text-xs tracking-[0.2em] uppercase text-accent mb-4">
                        Method
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                        {cocktail.method}
                      </p>
                    </div>

                    {/* Tip */}
                    <div className="mt-6 bg-card border border-border p-4">
                      <p className="text-xs tracking-[0.2em] uppercase text-accent mb-2">
                        Pro Tip
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed italic">
                        {cocktail.tip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
