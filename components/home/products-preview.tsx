import Image from "next/image"
import Link from "next/link"

const products = [
  {
    name: "Soko Dry Gin",
    description:
      "Our signature expression. A harmonious blend of juniper, citrus peel, coriander, and African botanicals.",
    image: "/images/soko-dry-gin.jpg",
    notes: "Juniper-forward with citrus brightness and earthy warmth",
    volume: "700ml",
    abv: "43%",
  },
]

export function ProductsPreview() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
            Our Collection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance font-light">
            Discover Soko
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-muted-foreground leading-relaxed">
            Each expression is a celebration of African botanicals, crafted in
            small batches with the utmost care and intention.
          </p>
        </div>

        {products.map((product) => (
          <div
            key={product.name}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Product Image */}
            <div className="relative aspect-square bg-muted flex items-center justify-center overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <h3 className="font-serif text-3xl md:text-4xl text-foreground font-light">
                {product.name}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
                {product.description}
              </p>

              {/* Tasting Notes */}
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-xs tracking-[0.2em] uppercase text-accent mb-3">
                  Tasting Notes
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {product.notes}
                </p>
              </div>

              {/* Specs */}
              <div className="mt-6 flex gap-8">
                <div>
                  <p className="text-xs tracking-wide uppercase text-muted-foreground">
                    Volume
                  </p>
                  <p className="text-foreground mt-1">{product.volume}</p>
                </div>
                <div>
                  <p className="text-xs tracking-wide uppercase text-muted-foreground">
                    ABV
                  </p>
                  <p className="text-foreground mt-1">{product.abv}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-3 text-sm tracking-[0.15em] uppercase bg-foreground text-background hover:bg-foreground/85 transition-colors duration-300"
                >
                  Shop Now
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-3 text-sm tracking-[0.15em] uppercase border border-foreground/20 text-foreground hover:border-foreground/50 transition-colors duration-300"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
