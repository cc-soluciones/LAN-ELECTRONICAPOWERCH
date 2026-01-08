import { CheckCircle } from "lucide-react";
import { highlights, titleAboutUsSection, descriptionAboutUsSection } from "@/constants/aboutUs";

export const AboutSection = () => (
    <section id="nosotros" className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">
                        {titleAboutUsSection}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        {descriptionAboutUsSection}
                    </p>

                    <div className="space-y-3">
                        {highlights.map((highlight, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-foreground leading-relaxed">
                                    {highlight}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <img
                        src="/about.webp"
                        alt="Equipo Electronicapower"
                        className="rounded-lg shadow-xl w-full h-150"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg hidden md:block">
                        <div className="text-4xl font-bold">9+</div>
                        <div className="text-sm">Años de experiencia</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
