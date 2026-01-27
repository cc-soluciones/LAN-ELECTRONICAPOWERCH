import { Phone, Mail, MapPin, Clock, MessageCircle, CreditCard } from "lucide-react";
import { 
    whatsappUrl,
    phone,
    email
} from "@/constants/general";

export const info = [
    {
        icon: "fluent-color:phone-48",
        title: "Teléfono",
        detail: phone,
        link: `tel:${phone.replaceAll(" ", "")}`,
    },
    {
        icon: "logos:whatsapp-icon",
        title: "WhatsApp",
        detail: phone,
        link: whatsappUrl,
    },
    {
        icon: "fluent-color:mail-16",
        title: "Email",
        detail: email,
        link: `mailto:${email}`,
    },
    {
        icon: "streamline-plump-color:map-location-star-pin",
        title: "Ubicación",
        detail: "C. Mariquina 248, San José de Mariquina, Los Ríos",
        link: null,
    },
    {
        icon: "fluent-color:clock-24",
        title: "Horario",
        detail: "Lun - Vie: 9:00 - 18:00",
        link: null,
    },
    {
        icon: "noto-v1:credit-card",
        title: "Métodos de Pago",
        detail: "Efectivo, transferencia, tarjetas de crédito",
        link: null,
    },
];

export const titleMap = "Cobertura en todo el territorio nacional";
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