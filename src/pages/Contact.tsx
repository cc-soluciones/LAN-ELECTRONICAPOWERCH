// import { MapPin } from "lucide-react";
// import { Map } from "@/components/Map";
import { MapChile } from "@/components/svg/MapChile";
import { info } from "@/constants/contact";

export const Contact = () => (
    <div className="flex flex-wrap pt-32 px-4">
        <section className="bg-background lg:w-1/2 mx-auto">
            <div className="container px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
                    {info.map((info, index) => (
                        <div key={index} className="bg-card p-6 rounded-lg border border-border text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <info.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                            {info.link ? (
                                <a
                                    href={info.link}
                                    target={info.link.startsWith("http") ? "_blank" : undefined}
                                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="text-primary hover:underline"
                                >
                                    {info.detail}
                                </a>
                            ) : (
                                <p className="text-muted-foreground">
                                    {info.detail}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <section className="bg-background lg:w-1/2 w-full mx-auto flex items-center">
            <div className="container mx-auto px-4">
                <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Cobertura desde la Región Metropolitana hasta los Lagos (Chiloé)</h3>
                <MapChile/>
            </div>
        </section>
    </div>
);