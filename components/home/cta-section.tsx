import Image from "next/image"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/distillery.jpg"
          alt="Soko Gin distillery"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#2a1f14]/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#d4c5a9] mb-6">
          Experience Soko
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f5f0e8] leading-tight text-balance font-light">
          Ready to Discover Your New Favourite Gin?
        </h2>
        <p className="mt-6 text-[#c9bea8] leading-relaxed max-w-xl mx-auto text-pretty">
          Whether you{"'"}re a seasoned gin aficionado or curious explorer, Soko
          Gin offers a taste experience unlike any other. Find us near you or
          shop online.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm tracking-[0.15em] uppercase bg-[#f5f0e8] text-[#2a1f14] hover:bg-[#e8dfd0] transition-colors duration-300 min-w-[180px]"
          >
            Shop Online
          </Link>
          <Link
            href="/stockists"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm tracking-[0.15em] uppercase border border-[#c9bea8]/40 text-[#f5f0e8] hover:border-[#d4c5a9] hover:text-[#d4c5a9] transition-colors duration-300 min-w-[180px]"
          >
            Find a Stockist
          </Link>
        </div>
      </div>
    </section>
  )
}
