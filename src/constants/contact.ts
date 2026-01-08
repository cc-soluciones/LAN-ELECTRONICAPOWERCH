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

export const titleMap = "Cobertura desde la Región Metropolitana hasta los Lagos (Chiloé)";
export const descriptionMap = {
    "LL": "Región de Los Lagos",
    "LR": "Región de Los Ríos",
    "AR": "Región de La Araucanía",
    "BI": "Región del Biobío",
    "NB": "Región de Ñuble",
    "ML": "Región del Maule",
    "LI": "Región del Libertador General Bernardo O'Higgins",
    "RM": "Región Metropolitana de Santiago"
};

export const textSendWhatsapp = `
    Hola, mi nombre es {name}.

    Región: {region}
    Email: {email}

    Requerimiento:
    {request}
`;