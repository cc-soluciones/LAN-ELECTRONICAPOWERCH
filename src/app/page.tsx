import { HeroSlider } from "@/components/hero-slider";
import { BenefitsSection } from "@/components/benefits-section";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq"; 
import { ServicesSection } from "@/components/services-section";
import { HeroProducts } from "@/components/hero-products";

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSlider />
            <BenefitsSection />
            <ServicesSection/>
            <HeroProducts/>
            <CTASection />
            <FAQ/>            
        </main>
    );
}
