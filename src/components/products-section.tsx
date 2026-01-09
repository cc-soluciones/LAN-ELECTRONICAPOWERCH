import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Battery, Zap, Gauge, Box, Package } from "lucide-react"

const products = [
  {
    icon: Sun,
    title: "Paneles Solares",
    description: "Paneles fotovoltaicos de alta eficiencia para máxima generación de energía",
  },
  {
    icon: Battery,
    title: "Baterías de Litio",
    description: "Sistemas de almacenamiento de energía de última generación con larga vida útil",
  },
  {
    icon: Zap,
    title: "Inversores Solares",
    description: "Inversores on-grid y off-grid de marcas líderes para optimizar tu sistema",
  },
  {
    icon: Gauge,
    title: "Controladores de Carga",
    description: "Controladores MPPT y PWM para gestión eficiente de la carga de baterías",
  },
  {
    icon: Box,
    title: "Estructuras de Montaje",
    description: "Sistemas de montaje robustos para techo y suelo, adaptados a tu instalación",
  },
  {
    icon: Package,
    title: "Kits Solares Completos",
    description: "Soluciones llave en mano con todos los componentes necesarios",
  },
]

export function ProductsSection() {
  return (
    <section id="productos" className="pt-32 pb-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">PRODUCTOS DESTACADOS ELECTRONICAPOWER</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Productos de energía solar de alta eficiencia para hogares, industrias y proyectos especiales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                  <product.icon className="w-7 h-7 text-secondary" />
                </div>
                <CardTitle className="text-xl text-foreground">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
