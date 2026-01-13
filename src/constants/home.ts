import { Zap, Leaf, Battery, TrendingUp } from "lucide-react";

type ProductCategory = "Electrónica" | "Iluminación" | "Proyector de Área";

export const slides = [
    {
        title: "Energía Solar Residencial para tu Hogar",
        description:
            "Transforma tu hogar en un espacio autosuficiente con energía solar de alta eficiencia.",
        image: "/hero_3.webp",
    },
    {
        title: "Montaje en Cubierta",
        description:
            "Aprovecha la energía solar desde tu techo con una instalación profesional y segura.",
        image: "/hero_2.webp",
    },
    {
        title: "Energía Solar Off-Grid",
        description:
            "Independízate de la red eléctrica con sistemas solares con baterías de alta capacidad.",
        image: "/hero_1.webp",
    },
];

export const benefits = [
    {
        icon: Zap,
        title: "Reduce hasta 100% de costos eléctricos",
        description:
            "Ahorra significativamente en tu factura de electricidad con energía solar",
    },
    {
        icon: Leaf,
        title: "Energía limpia y renovable",
        description:
            "Contribuye al cuidado del medio ambiente con energía sustentable",
    },
    {
        icon: Battery,
        title: "Independencia energética",
        description: "Libérate de la red eléctrica con sistemas off-grid",
    },
    {
        icon: TrendingUp,
        title: "Aumenta el valor de tu propiedad",
        description:
            "Las instalaciones solares incrementan el valor de tu inmueble",
    },
];

export const titleBenefits = "Beneficios de implementar Paneles Solares";
export const descriptionBenefits =
    "Descubre las ventajas de invertir en energía solar para tu hogar o empresa";
export const titleServices =
    "Soluciones solares diseñadas para decidir con confianza";
export const descriptionServices =
    "Tecnología, instalación y respaldo técnico para hogares, empresas y proyectos productivos que buscan eficiencia, ahorro y continuidad operativa.";

export const services = {
    kits: {
        title: "Kits y Equipos Solares",
        items: [
            {
                value: "on-grid",
                title: "Kits Solares On Grid",
                description:
                    "Sistemas conectados a la red eléctrica que permiten reducir significativamente la cuenta de luz. Ideales para hogares y empresas que buscan eficiencia energética sin uso de baterías.",
            },
            {
                value: "off-grid",
                title: "Kits Solares Off Grid",
                description:
                    "Soluciones solares completamente autónomas con baterías de litio de alta capacidad. Recomendadas para zonas rurales o sectores sin acceso estable a la red eléctrica.",
            },
            {
                value: "insumos",
                title: "Venta de Insumos Solares",
                description:
                    "Suministro de baterías de litio, paneles solares, inversores, controladores de carga y estructuras de montaje, con garantía y soporte técnico especializado.",
            },
        ],
    },

    installations: {
        title: "Instalaciones Solares",
        items: [
            {
                title: "Instalaciones Fotovoltaicas Domiciliarias",
                description:
                    "Sistemas solares diseñados para viviendas, enfocados en el ahorro energético y la autonomía eléctrica.",
            },
            {
                title: "Instalaciones Fotovoltaicas Industriales",
                description:
                    "Proyectos solares para empresas, bodegas y plantas productivas, optimizando costos operativos y consumo energético.",
            },
            {
                title: "Regadío Solar",
                description:
                    "Implementación de soluciones solares para sistemas de riego agrícola, ideales para zonas rurales y predios sin conexión eléctrica estable.",
            },
        ],
    },

    warranty: {
        title: "Garantía y Cobertura",
        items: [
            "2 años de garantía en todas las instalaciones",
            "Atención posventa y soporte técnico 24/7",
            "Cobertura desde la Región Metropolitana hasta Chiloé",
            "Medios de pago: efectivo, transferencia y tarjetas de crédito",
        ],
    },
};

export const Products = {
    title: "Productos seleccionados por rendimiento y confiabilidad",
    subtitle:
        "Equipos solares utilizados en nuestras instalaciones, elegidos por su eficiencia, durabilidad y respaldo técnico.",
    cta: {
        label: "Ver todos los productos",
        href: "/productos",
    },
    items: [
        {
            name: "Electrónica Solar y Equipos de Control Energético",
            description:
                "Equipos y componentes electrónicos para sistemas solares fotovoltaicos, incluyendo paneles solares monocristalinos bifaciales de alta potencia, inversores cargadores MPPT, baterías de litio 48V, protecciones DC, conectores MC4, proyectores solares y kits solares completos para aplicaciones residenciales, comerciales e industriales",
            images: [
                "/products/electronica_1.webp",
                "/products/electronica_2.webp",
                "/products/electronica_3.webp",
                "/products/electronica_4.webp",
                "/products/electronica_5.webp",
            ],
            category: "Electrónica" as ProductCategory,
        },
        {
            name: "Iluminación Solar para Espacios Residenciales e Industriales",
            description:
                "Iluminación solar compuesta por focos LED, proyectores de área, luminarias solares de alta potencia y cableado especializado para sistemas fotovoltaicos",
            images: [
                "/products/iluminacion_1.webp",
                "/products/iluminacion_2.webp",
                "/products/iluminacion_3.webp",
                "/products/iluminacion_4.webp",
                "/products/iluminacion_5.webp",
                "/products/iluminacion_6.webp",
                "/products/iluminacion_7.webp",
            ],
            category: "Iluminación" as ProductCategory,
        },
        {
            name: "Proyectores de Área Solar y LED",
            description:
                "Proyectores de área de alta potencia diseñados para iluminación perimetral, faenas, patios industriales y espacios abiertos. Disponibles en versiones LED y solares, con potencias desde 100W hasta 300W, ideales para seguridad, trabajo nocturno y aplicaciones de alto rendimiento.",
            images: [
                "/products/proyectordearea_1.webp",
                "/products/proyectordearea_2.webp",
                "/products/proyectordearea_3.webp",
                "/products/proyectordearea_4.webp",
                "/products/proyectordearea_5.webp",
            ],
            category: "Proyector de Área" as ProductCategory,
        },
    ],
};

export const titleFaqs = "Preguntas Frecuentes";
export const descriptionFaqs = "Respuestas a las consultas más comunes";

export const faqs = [
    {
        question: "¿Cuánto tiempo toma la instalación?",
        answer: "Instalaciones residenciales típicamente toman entre x días. Proyectos comerciales e industriales pueden tomar de x semanas dependiendo del tamaño.",
    },
    {
        question: "¿Ofrecen financiamiento?",
        answer: "Sí, trabajamos con diversas instituciones financieras para ofrecer opciones de financiamiento flexibles adaptadas a cada cliente.",
    },
    {
        question: "¿Qué garantía tienen los productos?",
        answer: "Paneles solares: x años de garantía. Inversores: x años. Baterías: x años. Instalación: x años de garantía de mano de obra.",
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
        answer: "No trabajamos en todo Chile. Nuestra cobertura va desde la Región Metropolitana hasta Chiloé.",
    },
];
