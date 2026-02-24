import Image from "next/image"
import Link from "next/link"

export function StoryPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/african-landscape.jpg"
              alt="African landscape at golden hour"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
              Our Heritage
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-balance font-light">
              Rooted in Tradition,
              <br />
              Crafted with Purpose
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
              The name Soko draws from the Swahili word for marketplace — a
              vibrant space where people, stories, and cultures converge. Our gin
              is inspired by the rich tapestry of African botanicals and the
              founder{"'"}s vision to share this heritage with the world.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              From concept to creation, Soko Gin represents a journey of
              cultural pride, meticulous craftsmanship, and the belief that great
              spirits should tell great stories.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <p className="font-serif text-3xl text-accent">12</p>
                <p className="text-xs tracking-wide uppercase text-muted-foreground mt-1">
                  Botanicals
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-accent">Small</p>
                <p className="text-xs tracking-wide uppercase text-muted-foreground mt-1">
                  Batch Crafted
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-accent">43%</p>
                <p className="text-xs tracking-wide uppercase text-muted-foreground mt-1">
                  ABV
                </p>
              </div>
            </div>

            <Link
              href="/story"
              className="inline-flex items-center gap-2 mt-8 text-sm tracking-wider uppercase text-accent hover:text-foreground transition-colors duration-300 group"
            >
              Read Our Full Story
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
      </div>
    </section>
  )
}
