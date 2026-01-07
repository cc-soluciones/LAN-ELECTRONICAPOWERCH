import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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
      title: "Sistemas Residenciales",
      description: "Instalaciones solares para casas y departamentos",
      benefits: [
        "Reducción de hasta 95% en cuenta eléctrica",
        "Sistema on-grid conectado a la red",
        "Inyección de excedentes (Net Billing)",
        "Dimensionamiento personalizado",
        "Instalación en 3-5 días",
      ],
    },
    {
      icon: Building2,
      title: "Sistemas Comerciales",
      description: "Soluciones para negocios y oficinas",
      benefits: [
        "ROI en 3-5 años",
        "Monitoreo en tiempo real",
        "Mantenimiento programado",
        "Sistemas de respaldo con baterías",
        "Certificación energética",
      ],
    },
    {
      icon: Factory,
      title: "Sistemas Industriales",
      description: "Proyectos de gran escala para industrias",
      benefits: [
        "Sistemas de alta potencia (100kW+)",
        "Análisis de consumo energético",
        "Integración con sistemas existentes",
        "Monitoreo SCADA",
        "Financiamiento disponible",
      ],
    },
    {
      icon: Sun,
      title: "Sistemas Off-Grid",
      description: "Soluciones autónomas sin conexión a red",
      benefits: [
        "Independencia energética total",
        "Ideal para zonas rurales",
        "Sistema con baterías de litio",
        "Respaldo de generador (opcional)",
        "Dimensionamiento según consumo",
      ],
    },
  ]

  const additionalServices = [
    {
      icon: ClipboardCheck,
      title: "Asesoría y Diseño",
      description: "Evaluación técnica y diseño personalizado de tu sistema solar",
    },
    {
      icon: Wrench,
      title: "Instalación Profesional",
      description: "Equipo certificado con más de 500 instalaciones exitosas",
    },
    {
      icon: LineChart,
      title: "Monitoreo",
      description: "Seguimiento en tiempo real de la producción de tu sistema",
    },
    {
      icon: Shield,
      title: "Mantenimiento",
      description: "Servicio preventivo y correctivo con garantía extendida",
    },
    {
      icon: Zap,
      title: "Gestión de Permisos",
      description: "Tramitamos los permisos ante la distribuidora eléctrica",
    },
    {
      icon: Battery,
      title: "Sistemas de Respaldo",
      description: "Baterías de litio para energía 24/7 sin interrupciones",
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
      description: "Analizamos tu consumo y espacio disponible",
    },
    {
      number: "03",
      title: "Propuesta",
      description: "Diseñamos el sistema y enviamos cotización detallada",
    },
    {
      number: "04",
      title: "Instalación",
      description: "Montaje profesional en 3-7 días según proyecto",
    },
    {
      number: "05",
      title: "Conexión",
      description: "Tramitamos permisos y conectamos tu sistema",
    },
    {
      number: "06",
      title: "Soporte",
      description: "Seguimiento continuo y mantenimiento programado",
    },
  ]

  const whatsappUrl = `https://wa.me/56972142601?text=${encodeURIComponent("Hola, me gustaría información sobre sus servicios solares.")}`

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Nuestros Servicios
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8">
              Soluciones solares completas desde el diseño hasta el mantenimiento
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Solicitar Cotización
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
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
          <div className="grid md:grid-cols-3 gap-6">
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

      {/* Coverage */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Cobertura Nacional</h2>
            <p className="text-muted-foreground mb-8">
              Realizamos instalaciones en todo Chile. Desde Arica a Punta Arenas, llevamos energía solar a cada rincón
              del país.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Consultar Cobertura
              </a>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
