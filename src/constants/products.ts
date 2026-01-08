export type ProductCategory =
| "Electrónica"
| "Iluminación"
| "Proyector de Área"

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
      description: "Equipos y componentes electrónicos para sistemas solares fotovoltaicos, incluyendo paneles solares monocristalinos bifaciales de alta potencia, inversores cargadores MPPT, baterías de litio 48V, protecciones DC, conectores MC4, proyectores solares y kits solares completos para aplicaciones residenciales, comerciales e industriales",
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
      description: "Iluminación solar compuesta por focos LED, proyectores de área, luminarias solares de alta potencia y cableado especializado para sistemas fotovoltaicos",
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
      description: "Proyectores de área de alta potencia diseñados para iluminación perimetral, faenas, patios industriales y espacios abiertos. Disponibles en versiones LED y solares, con potencias desde 100W hasta 300W, ideales para seguridad, trabajo nocturno y aplicaciones de alto rendimiento.",
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
}