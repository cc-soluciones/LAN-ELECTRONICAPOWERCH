import { Contact } from "@/pages/Contact";

export default Contact;

// import { ContactSection } from "@/components/contact-section";
// import { Button } from "@/components/ui/button";
// import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

// export default function ContactoPage() {
//     const whatsappUrl = `https://wa.me/56972142601?text=${encodeURIComponent(
//         "Hola, me gustaría información sobre sistemas solares."
//     )}`;

//     const contactInfo = [
//         {
//             icon: Phone,
//             title: "Teléfono",
//             detail: "+56 9 7214 2601",
//             link: "tel:+56972142601",
//         },
//         {
//             icon: MessageCircle,
//             title: "WhatsApp",
//             detail: "+56 9 7214 2601",
//             link: whatsappUrl,
//         },
//         {
//             icon: Mail,
//             title: "Email",
//             detail: "contacto@electronicapower.cl",
//             link: "mailto:contacto@electronicapower.cl",
//         },
//         {
//             icon: MapPin,
//             title: "Ubicación",
//             detail: "Chile - Cobertura Nacional",
//             link: null,
//         },
//         {
//             icon: Clock,
//             title: "Horario",
//             detail: "Lun - Vie: 9:00 - 18:00",
//             link: null,
//         },
//     ];

//     const faqs = [
//         {
//             question: "¿Cuánto tiempo toma la instalación?",
//             answer: "Instalaciones residenciales típicamente toman entre 3-5 días. Proyectos comerciales e industriales pueden tomar de 1-4 semanas dependiendo del tamaño.",
//         },
//         {
//             question: "¿Ofrecen financiamiento?",
//             answer: "Sí, trabajamos con diversas instituciones financieras para ofrecer opciones de financiamiento flexibles adaptadas a cada cliente.",
//         },
//         {
//             question: "¿Qué garantía tienen los productos?",
//             answer: "Paneles solares: 25 años de garantía. Inversores: 5-10 años. Baterías: 10 años. Instalación: 2 años de garantía de mano de obra.",
//         },
//         {
//             question: "¿Realizan mantenimiento?",
//             answer: "Sí, ofrecemos planes de mantenimiento preventivo anuales que incluyen limpieza de paneles, revisión de conexiones y monitoreo del sistema.",
//         },
//         {
//             question: "¿Puedo inyectar energía a la red?",
//             answer: "Sí, con sistemas on-grid puedes inyectar excedentes a la red eléctrica y recibir compensación bajo la Ley de Generación Distribuida (Net Billing).",
//         },
//         {
//             question: "¿Trabajan en todo Chile?",
//             answer: "Sí, realizamos proyectos en todo el territorio nacional, desde Arica hasta Punta Arenas.",
//         },
//     ];

//     return (
//         <main className="min-h-screen">

//             {/* Contact Info Cards */}
//             <section className="pt-32 bg-background">
//                 <div className="container mx-auto px-4">
//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//                         {contactInfo.map((info, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-card p-6 rounded-lg border border-border text-center"
//                             >
//                                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                                     <info.icon className="w-6 h-6 text-primary" />
//                                 </div>
//                                 <h3 className="text-lg font-semibold text-foreground mb-2">
//                                     {info.title}
//                                 </h3>
//                                 {info.link ? (
//                                     <a
//                                         href={info.link}
//                                         target={
//                                             info.link.startsWith("http")
//                                                 ? "_blank"
//                                                 : undefined
//                                         }
//                                         rel={
//                                             info.link.startsWith("http")
//                                                 ? "noopener noreferrer"
//                                                 : undefined
//                                         }
//                                         className="text-primary hover:underline"
//                                     >
//                                         {info.detail}
//                                     </a>
//                                 ) : (
//                                     <p className="text-muted-foreground">
//                                         {info.detail}
//                                     </p>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Contact Form */}
//             {/* <ContactSection /> */}

//             {/* FAQs */}
//             {/* 
//             {/* Map Placeholder */}
            // <section className="pb-20 bg-background">
            //     <div className="container mx-auto px-4">
            //         <div className="bg-muted/50 rounded-lg aspect-video flex items-center justify-center">
            //             <div className="text-center p-8">
            //                 <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            //                 <h3 className="text-xl font-semibold text-foreground mb-2">
            //                     Cobertura Nacional
            //                 </h3>
            //                 <p className="text-muted-foreground">
            //                     Servicios disponibles en todo Chile
            //                 </p>
            //             </div>
            //         </div>
            //     </div>
            // </section>

//         </main>
//     );
// }
