import { faqs, titleFaqs, descriptionFaqs } from "@/constants/home";

export const FAQ = () => (
    <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {titleFaqs}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    {descriptionFaqs}
                </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq : any, index : any) => (
                    <div
                        key={index}
                        className="bg-card p-6 rounded-lg border border-border"
                    >
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                            {faq.question}
                        </h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
