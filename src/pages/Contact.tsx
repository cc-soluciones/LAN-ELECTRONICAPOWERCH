// import { MapPin } from "lucide-react";
// import { Map } from "@/components/Map";
import { MapChile } from "@/components/svg/MapChile";
import { info } from "@/constants/contact";

export const Contact = () => (
    <div className="flex flex-wrap py-32 pb-23 px-4">
        <section className="bg-background md:w-1/2">
            <div className="container mx-auto px-4">
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
        <section className="bg-background md:w-1/2 w-full">
            <div className="container mx-auto px-4 ">
                <MapChile/>
                {/* <Map/> */}
                {/* <div className="bg-muted/50 rounded-lg aspect-video flex items-center justify-center">
                    <div className="text-center p-8">
                        <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                            Cobertura Nacional
                        </h3>
                        <p className="text-muted-foreground">
                            Servicios disponibles en todo Chile
                        </p>
                    </div>
                </div> */}
            </div>
        </section>
    </div>
);