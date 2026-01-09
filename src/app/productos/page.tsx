import { Products } from "@/pages/Products";

export default Products;

// import { ProductsSection } from "@/components/products-section";
// import { CTASection } from "@/components/CTASection";
// import { CheckCircle2 } from "lucide-react";

// export default function ProductosPage() {
//     const categories = [
//         {
//             name: "Paneles Solares",
//             description: "Paneles fotovoltaicos de alta eficiencia",
//             features: [
//                 "Tecnología monocristalina y policristalina",
//                 "Potencias de 300W a 550W",
//                 "Garantía de 25 años",
//                 "Certificaciones internacionales",
//                 "Resistencia a condiciones extremas",
//             ],
//             brands: ["Jinko Solar", "Longi", "Canadian Solar", "Trina Solar"],
//         },
//         {
//             name: "Inversores",
//             description: "Conversión eficiente de energía DC a AC",
//             features: [
//                 "Inversores on-grid y off-grid",
//                 "Eficiencia superior al 98%",
//                 "Monitoreo en tiempo real",
//                 "Protección contra sobretensiones",
//                 "Compatible con baterías",
//             ],
//             brands: ["Huawei", "Growatt", "Fronius", "SolarEdge"],
//         },
//         {
//             name: "Baterías de Litio",
//             description: "Almacenamiento de energía confiable",
//             features: [
//                 "Alta densidad energética",
//                 "Ciclos de vida extendidos (6000+)",
//                 "Sistema de gestión inteligente (BMS)",
//                 "Descarga profunda permitida",
//                 "Instalación modular escalable",
//             ],
//             brands: ["BYD", "Pylontech", "Huawei", "LG Chem"],
//         },
//         {
//             name: "Estructuras de Montaje",
//             description: "Soportes robustos para todo tipo de techos",
//             features: [
//                 "Aluminio anodizado anticorrosión",
//                 "Diseño para techos inclinados y planos",
//                 "Certificación de resistencia a vientos",
//                 "Fácil instalación y mantenimiento",
//                 "Compatible con todos los paneles",
//             ],
//             brands: ["Estructuras personalizadas", "K2 Systems", "Schletter"],
//         },
//     ];

//     const whatsappUrl = `https://wa.me/56972142601?text=${encodeURIComponent(
//         "Hola, me gustaría información sobre sus productos solares."
//     )}`;

//     return (
//         <main className="min-h-screen">
//             <ProductsSection />

//             {/* Detailed Categories */}
//             <section className="py-20 bg-background">
//                 <div className="container mx-auto px-4">
//                     <div className="space-y-16">
//                         {categories.map((category, index) => (
//                             <div
//                                 key={index}
//                                 className="grid md:grid-cols-2 gap-8 items-center"
//                             >
//                                 <div
//                                     className={
//                                         index % 2 === 1 ? "md:order-2" : ""
//                                     }
//                                 >
//                                     <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg aspect-video flex items-center justify-center">
//                                         <div className="text-center p-8">
//                                             <div className="text-6xl font-bold text-primary/40 mb-2">
//                                                 {category.name.split(" ")[0]}
//                                             </div>
//                                             <div className="text-muted-foreground">
//                                                 Imagen del producto
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <h2 className="text-3xl font-bold text-foreground mb-3">
//                                         {category.name}
//                                     </h2>
//                                     <p className="text-muted-foreground mb-6">
//                                         {category.description}
//                                     </p>
//                                     <div className="space-y-3 mb-6">
//                                         {category.features.map(
//                                             (feature, idx) => (
//                                                 <div
//                                                     key={idx}
//                                                     className="flex items-start gap-3"
//                                                 >
//                                                     <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
//                                                     <span className="text-foreground">
//                                                         {feature}
//                                                     </span>
//                                                 </div>
//                                             )
//                                         )}
//                                     </div>
//                                     <div className="border-t border-border pt-4">
//                                         <div className="text-sm text-muted-foreground mb-2">
//                                             Marcas disponibles:
//                                         </div>
//                                         <div className="flex flex-wrap gap-2">
//                                             {category.brands.map(
//                                                 (brand, idx) => (
//                                                     <span
//                                                         key={idx}
//                                                         className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
//                                                     >
//                                                         {brand}
//                                                     </span>
//                                                 )
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <CTASection />

//             {/* Technical Support */}
//             <section className="py-20 bg-muted/30">
//                 <div className="container mx-auto px-4">
//                     <div className="max-w-3xl mx-auto text-center">
//                         <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
//                             Soporte Técnico Incluido
//                         </h2>
//                         <p className="text-muted-foreground mb-8">
//                             Todos nuestros productos incluyen instalación
//                             profesional, garantía extendida y servicio de
//                             mantenimiento preventivo
//                         </p>
//                         <Button
//                             asChild
//                             size="lg"
//                             className="bg-primary hover:bg-primary/90"
//                         >
//                             <a
//                                 href={whatsappUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 Consultar Disponibilidad
//                             </a>
//                         </Button>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// }
