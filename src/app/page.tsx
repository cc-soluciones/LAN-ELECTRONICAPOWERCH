import { HeroSlider } from "@/components/hero-slider";
import { BenefitsSection } from "@/components/benefits-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSlider />
            <BenefitsSection />
            <CTASection />
        </main>
    );
}
