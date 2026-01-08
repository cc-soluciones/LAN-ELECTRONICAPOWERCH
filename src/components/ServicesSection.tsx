import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { services, titleServices, descriptionServices } from "@/constants/home";

export const ServicesSection = () => {
    return (
        <section className="relative py-20 lg:py-40">
            <div
                className="absolute inset-0 bg-cover bg-bottom"
                style={{ backgroundImage: "url('/services.webp')" }}
            />
            <div className="absolute inset-0 bg-black/80" />

            <div className="relative container mx-auto px-4 z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                        {titleServices}
                    </h2>
                    <p className="mt-4  text-base md:text-lg text-white/70">
                        {descriptionServices}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
                    <Card className="group bg-card/70 backdrop-blur border-border/50 hover:shadow-xl transition-all py-0 hover:scale-105">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-6 text-center">
                                {services.kits.title}
                            </h3>

                            <Accordion
                                type="single"
                                collapsible
                                className="space-y-2"
                            >
                                {services.kits.items.map((item) => (
                                    <AccordionItem
                                        key={item.value}
                                        value={item.value}
                                        className="border-primary"
                                    >
                                        <AccordionTrigger className="text-left lg:text-lg [&>svg]:text-primary cursor-pointer">
                                            {item.title}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-primary leading-relaxed">
                                            {item.description}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>

                    <Card className="group bg-card/70 backdrop-blur border-border/50 hover:shadow-xl transition-all py-0 hover:scale-105">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-6 text-center">
                                {services.installations.title}
                            </h3>

                            <Accordion
                                type="single"
                                collapsible
                                className="space-y-2"
                            >
                                {services.installations.items.map(
                                    (item, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`installation-${index}`}
                                            className="border-primary"
                                        >
                                            <AccordionTrigger className="text-left lg:text-lg [&>svg]:text-primary cursor-pointer">
                                                {item.title}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-primary leading-relaxed">
                                                {item.description}
                                            </AccordionContent>
                                        </AccordionItem>
                                    )
                                )}
                            </Accordion>
                        </CardContent>
                    </Card>

                    <Card className="group bg-card/70 backdrop-blur border-border/50 hover:shadow-xl transition-all pt-0 pb-6 text-center hover:scale-105">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-6">
                                {services.warranty.title}
                            </h3>

                            <Accordion
                                type="single"
                                collapsible
                                className="space-y-2"
                            >
                                {services.warranty.items.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`warranty-${index}`}
                                        className="border-primary"
                                    >
                                        <AccordionTrigger className="text-left [&>svg]:hidden lg:text-lg">
                                            {item}
                                        </AccordionTrigger>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
