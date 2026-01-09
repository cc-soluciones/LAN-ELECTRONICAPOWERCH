"use client";

import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { whatsappUrl } from "@/constants/general";
import { titleProducts, descriptionsProducts } from "@/constants/products";

export const Products = () => {
    return (
        <>
            <section className="pt-32 pb-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                            {titleProducts}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            {descriptionsProducts}
                        </p>
                    </div>
                </div>
            </section>
            <section className="pt-32 pb-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    
                </div>
            </section>
            <CTASection />
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Soporte Técnico Incluido
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Todos nuestros productos incluyen instalación
                            profesional, garantía extendida y servicio de
                            mantenimiento preventivo
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-primary hover:bg-primary/90"
                        >
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Consultar Disponibilidad
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};
