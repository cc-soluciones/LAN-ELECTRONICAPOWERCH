import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl, titleCTA, descriptionCTA } from "@/constants/general";

export const CTASection = () => (
    <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-top"
            style={{ backgroundImage: "url('/cta.webp')" }}
        />
        <div className="absolute inset-0 bg-primary/50" />
        <div className="relative container mx-auto px-4 text-center z-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                {titleCTA}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90 leading-relaxed">
                {descriptionCTA}
            </p>
            <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-500 text-white transition-colors duration-200"
            >
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                >
                    <FaWhatsapp size={20} />
                    Contactar por WhatsApp
                </a>
            </Button>
        </div>
    </section>
);
