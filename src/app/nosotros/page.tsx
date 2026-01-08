import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { Users, Award, TrendingUp, Shield } from "lucide-react"

export default function NosotrosPage() {
  const stats = [
    { label: "Años de Experiencia", value: "9+", icon: Award },
    { label: "Proyectos Completados", value: "500+", icon: TrendingUp },
    { label: "Clientes Satisfechos", value: "450+", icon: Users },
    { label: "Garantía de Calidad", value: "100%", icon: Shield },
  ]

  const team = [
    {
      name: "Equipo de Ingeniería",
      description: "Ingenieros especializados en energía solar fotovoltaica",
      role: "Diseño e Instalación",
    },
    {
      name: "Equipo Comercial",
      description: "Asesores expertos en soluciones energéticas",
      role: "Asesoría y Cotización",
    },
    {
      name: "Soporte Técnico",
      description: "Servicio post-venta y mantenimiento",
      role: "Atención al Cliente",
    },
  ]

  const values = [
    {
      title: "Compromiso Ambiental",
      description: "Promovemos energías limpias y renovables para un futuro sostenible",
    },
    {
      title: "Calidad Garantizada",
      description: "Trabajamos solo con equipos de las mejores marcas internacionales",
    },
    {
      title: "Transparencia",
      description: "Cotizaciones claras y servicio honesto en cada proyecto",
    },
    {
      title: "Innovación",
      description: "Utilizamos las últimas tecnologías en sistemas fotovoltaicos",
    },
  ]

  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Sobre Electronicapower
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Más de 9 años transformando la energía en Chile con soluciones solares innovadoras
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Valores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Los principios que guían nuestro trabajo cada día</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
