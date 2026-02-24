import Image from "next/image"
import Link from "next/link"

const botanicals = [
  {
    name: "Juniper",
    description: "The backbone of every great gin, sourced for its resinous depth",
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-1.5 2-4 4-4 7a4 4 0 008 0c0-3-2.5-5-4-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v7M9 18h6" />
      </svg>
    ),
  },
  {
    name: "Citrus Peel",
    description: "Bright orange and lemon zest for radiant freshness",
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="8" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4c0 4-3 5-3 8s3 4 3 8" />
      </svg>
    ),
  },
  {
    name: "Coriander",
    description: "Warm, nutty notes that ground the botanical blend",
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
        <circle cx="12" cy="5" r="2" strokeWidth={1.5} />
        <circle cx="17" cy="8" r="2" strokeWidth={1.5} />
        <circle cx="17" cy="15" r="2" strokeWidth={1.5} />
        <circle cx="12" cy="19" r="2" strokeWidth={1.5} />
        <circle cx="7" cy="15" r="2" strokeWidth={1.5} />
        <circle cx="7" cy="8" r="2" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    name: "Grains of Paradise",
    description: "A peppery, warm spice native to West Africa",
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l2 4 4 1-3 3 1 5-4-2-4 2 1-5-3-3 4-1z" />
      </svg>
    ),
  },
]

export function BotanicalsSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
              Craftsmanship & Ingredients
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-balance font-light">
              Nature{"'"}s Finest,
              <br />
              Intentionally Sourced
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
              Every botanical in Soko Gin is selected with purpose. We combine
              classic gin botanicals with rare African ingredients, creating a
              spirit that is both familiar and extraordinary.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {botanicals.map((botanical) => (
                <div key={botanical.name} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-muted rounded-sm">
                    {botanical.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground tracking-wide">
                      {botanical.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {botanical.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/story#craftsmanship"
              className="inline-flex items-center gap-2 mt-10 text-sm tracking-wider uppercase text-accent hover:text-foreground transition-colors duration-300 group"
            >
              Learn About Our Process
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

          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/botanicals.jpg"
              alt="Soko Gin botanicals arranged on a dark surface"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
