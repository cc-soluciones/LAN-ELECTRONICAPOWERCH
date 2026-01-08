export function FAQ() {
  const faqs = [
        {
            question: "¿Cuánto tiempo toma la instalación?",
            answer: "Instalaciones residenciales típicamente toman entre 3-5 días. Proyectos comerciales e industriales pueden tomar de 1-4 semanas dependiendo del tamaño.",
        },
        {
            question: "¿Ofrecen financiamiento?",
            answer: "Sí, trabajamos con diversas instituciones financieras para ofrecer opciones de financiamiento flexibles adaptadas a cada cliente.",
        },
        {
            question: "¿Qué garantía tienen los productos?",
            answer: "Paneles solares: 25 años de garantía. Inversores: 5-10 años. Baterías: 10 años. Instalación: 2 años de garantía de mano de obra.",
        },
        {
            question: "¿Realizan mantenimiento?",
            answer: "Sí, ofrecemos planes de mantenimiento preventivo anuales que incluyen limpieza de paneles, revisión de conexiones y monitoreo del sistema.",
        },
        {
            question: "¿Puedo inyectar energía a la red?",
            answer: "Sí, con sistemas on-grid puedes inyectar excedentes a la red eléctrica y recibir compensación bajo la Ley de Generación Distribuida (Net Billing).",
        },
        {
            question: "¿Trabajan en todo Chile?",
            answer: "Sí, realizamos proyectos en todo el territorio nacional, desde Arica hasta Punta Arenas.",
        },
    ];


  return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Preguntas Frecuentes
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Respuestas a las consultas más comunes
                    </p>
                </div>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-card p-6 rounded-lg border border-border"
                        >
                            <h3 className="text-lg font-semibold text-foreground mb-3">
                                {faq.question}
                            </h3>
                            <p className="text-muted-foreground">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section> 
  )
}
