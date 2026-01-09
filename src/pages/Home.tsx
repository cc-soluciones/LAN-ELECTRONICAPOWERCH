"use client";

import { HeroSlider } from "@/components/HeroSlider";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HeroProducts } from "@/components/HeroProducts";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ"; 

export const Home = () => (
    <>
        <HeroSlider />
        <BenefitsSection />
        <ServicesSection/>
        <HeroProducts/>
        <CTASection />
        <FAQ/>
    </>
);