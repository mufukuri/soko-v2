import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { StoryPreview } from "@/components/home/story-preview"
import { ProductsPreview } from "@/components/home/products-preview"
import { BotanicalsSection } from "@/components/home/botanicals-section"
import { CocktailsPreview } from "@/components/home/cocktails-preview"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <StoryPreview />
        <ProductsPreview />
        <BotanicalsSection />
        <CocktailsPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
