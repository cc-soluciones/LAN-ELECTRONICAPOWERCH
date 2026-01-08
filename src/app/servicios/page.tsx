import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import {
  Home,
  Building2,
  Factory,
  Wrench,
  ClipboardCheck,
  LineChart,
  Shield,
  Zap,
  Sun,
  Battery,
  MapPin,
  CheckCircle2,
} from "lucide-react"

export default function ServiciosPage() {
  const mainServices = [
    {
      icon: Home,
      title: "Instalaciones Residenciales",
      description: "Sistemas fotovoltaicos para casas y departamentos",
      benefits: [
        "Reducción significativa en la cuenta eléctrica",
        "Sistemas on-grid y off-grid disponibles",
        "Diseño personalizado según consumo y espacio",
        "Instalación profesional rápida",
        "2 años de garantía incluida",
      ],
    },
    {
      icon: Building2,
      title: "Instalaciones Comerciales",
      description: "Soluciones solares para negocios y oficinas",
      benefits: [
        "Monitoreo y control del consumo eléctrico",
        "Sistemas de respaldo con baterías de litio",
        "Mantenimiento y soporte 24/7",
        "Equipos de alta eficiencia y durabilidad",
        "Asesoría técnica y diseño a medida",
      ],
    },
    {
      icon: Factory,
      title: "Instalaciones Industriales",
      description: "Proyectos de gran escala para industrias",
      benefits: [
        "Sistemas de alta potencia para consumo industrial",
        "Integración con sistemas eléctricos existentes",
        "Monitoreo en tiempo real",
        "Optimización de consumo y costos",
        "Financiamiento y planificación disponible",
      ],
    },
    {
      icon: Sun,
      title: "Sistemas Off-Grid",
      description: "Soluciones autónomas sin conexión a red",
      benefits: [
        "Independencia energética total",
        "Ideal para zonas rurales y regadíos solares",
        "Baterías de litio de alta capacidad",
        "Dimensionamiento según consumo",
        "Soporte técnico y posventa 24/7",
      ],
    },
  ]

  const additionalServices = [
    {
      icon: ClipboardCheck,
      title: "Venta de Equipos Solares",
      description: "Paneles solares, inversores, controladores y estructuras",
    },
    {
      icon: Wrench,
      title: "Instalación Profesional",
      description: "Equipo certificado con experiencia en residencias e industrias",
    },
    {
      icon: LineChart,
      title: "Monitoreo",
      description: "Seguimiento en tiempo real de la producción de tu sistema",
    },
    {
      icon: Shield,
      title: "Garantía y Soporte",
      description: "2 años de garantía y atención posventa 24/7",
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Contacto Inicial",
      description: "Nos contactas por WhatsApp o formulario web",
    },
    {
      number: "02",
      title: "Evaluación",
      description: "Analizamos tu consumo y el tipo de instalación requerida",
    },
    {
      number: "03",
      title: "Propuesta",
      description: "Diseñamos el sistema y enviamos cotización detallada",
    },
    {
      number: "04",
      title: "Instalación",
      description: "Montaje profesional según el tipo de proyecto",
    },
    {
      number: "05",
      title: "Conexión",
      description: "Sistemas on-grid conectados a red o off-grid independientes",
    },
    {
      number: "06",
      title: "Soporte",
      description: "Seguimiento continuo y atención postventa 24/7",
    },
  ]

  const whatsappUrl = `https://wa.me/56972142601?text=${encodeURIComponent("Hola, me gustaría información sobre sus servicios solares.")}`

  return (
    <main className="min-h-screen">
      {/* Main Services */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tipos de Instalaciones</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Sistemas solares adaptados a cada necesidad</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Servicios Complementarios</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Todo lo que necesitas en un solo lugar</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Proceso de Instalación</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">6 pasos simples hacia tu independencia energética</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="text-5xl font-bold text-primary/20 mb-3">{step.number}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* Coverage */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Cobertura Nacional</h2>
            <p className="text-muted-foreground mb-8">
              Realizamos instalaciones de sistemas solares residenciales e industriales
        desde la Región Metropolitana hasta Chiloé, llevando energía solar a cada rincón donde trabajamos.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Consultar Cobertura
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
