import { Card, CardContent } from "@/components/ui/card";
import { benefits, titleBenefits, descriptionBenefits } from "@/constants/home";

export const BenefitsSection = () => {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
                    {titleBenefits}
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                    {descriptionBenefits}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <Card
                            key={index}
                            className=" relative
                                border border-border/30
                                bg-card/70
                                backdrop-blur
                                shadow-md
                                hover:shadow-2xl
                                hover:-translate-y-1
                                transition-all duration-300
                                pt-0
                                text-center
                                before:absolute
                                before:inset-0
                                before:rounded-lg
                                before:from-primary/5
                                before:to-transparent
                                before:pointer-events-none"
                        >
                            <CardContent className="pt-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                    <benefit.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-foreground">
                                    {benefit.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {benefit.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
