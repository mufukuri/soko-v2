import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bottle.jpg"
          alt="Soko Gin bottle surrounded by botanicals"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a1f14]/60 via-[#2a1f14]/30 to-[#2a1f14]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-24">
        <p className="text-xs tracking-[0.4em] uppercase text-[#d4c5a9] mb-6 animate-fade-in">
          A Craft Spirit Born of African Heritage
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#f5f0e8] leading-tight text-balance animate-fade-in font-light">
          The Spirit of Africa,
          <br />
          <span className="text-[#d4c5a9] italic">Distilled</span>
        </h1>
        <p className="mt-8 max-w-xl mx-auto text-lg text-[#c9bea8] leading-relaxed animate-fade-in text-pretty">
          A small-batch, craft gin that carries Africa{"'"}s stories, scents and
          soul — elegant, bold and utterly unforgettable.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm tracking-[0.15em] uppercase bg-[#f5f0e8] text-[#2a1f14] hover:bg-[#e8dfd0] transition-colors duration-300 min-w-[180px]"
          >
            Shop Now
          </Link>
          <Link
            href="/story"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm tracking-[0.15em] uppercase border border-[#c9bea8]/40 text-[#f5f0e8] hover:border-[#d4c5a9] hover:text-[#d4c5a9] transition-colors duration-300 min-w-[180px]"
          >
            Discover the Story
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-[0.2em] uppercase text-[#c9bea8]/60">
          Scroll
        </span>
        <div className="w-px h-8 bg-[#c9bea8]/30" />
      </div>
    </section>
  )
}
