import { Zap, Leaf, Battery, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Zap,
    title: "Reduce hasta 100% de costos eléctricos",
    description: "Ahorra significativamente en tu factura de electricidad con energía solar",
  },
  {
    icon: Leaf,
    title: "Energía limpia y renovable",
    description: "Contribuye al cuidado del medio ambiente con energía sustentable",
  },
  {
    icon: Battery,
    title: "Independencia energética",
    description: "Libérate de la red eléctrica con sistemas off-grid",
  },
  {
    icon: TrendingUp,
    title: "Aumenta el valor de tu propiedad",
    description: "Las instalaciones solares incrementan el valor de tu inmueble",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Beneficios de implementar Paneles Solares
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Descubre las ventajas de invertir en energía solar para tu hogar o empresa
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
