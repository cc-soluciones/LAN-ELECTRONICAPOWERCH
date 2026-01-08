import { Phone, Mail, MapPin, Clock, MessageCircle, CreditCard } from "lucide-react";
import { 
    whatsappUrl,
    phone,
    email
} from "@/constants/general";

export const info = [
    {
        icon: Phone,
        title: "Teléfono",
        detail: phone,
        link: `tel:${phone.replaceAll(" ", "")}`,
    },
    {
        icon: MessageCircle,
        title: "WhatsApp",
        detail: phone,
        link: whatsappUrl,
    },
    {
        icon: Mail,
        title: "Email",
        detail: email,
        link: `mailto:${email}`,
    },
    {
        icon: MapPin,
        title: "Ubicación",
        detail: "Chile - Cobertura Nacional",
        link: null,
    },
    {
        icon: Clock,
        title: "Horario",
        detail: "Lun - Vie: 9:00 - 18:00",
        link: null,
    },
    {
        icon: CreditCard,
        title: "Métodos de Pago",
        detail: "Efectivo, transferencia, tarjetas de crédito",
        link: null,
    },
];

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
