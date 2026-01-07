import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { BenefitsSection } from "@/components/benefits-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
