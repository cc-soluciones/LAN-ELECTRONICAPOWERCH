"use client"
import { useState } from "react";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";
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
      image: "/residenciales.webp",
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
      image: "/comerciales.webp",
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
      image: "/industriales.webp",
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
      image: "/offgrid.webp",
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

  const [currentIndex, setCurrentIndex] = useState(0)

  const totalSlides = mainServices.length

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 ) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
    prev === 0 ? totalSlides - 1 : prev - 1)
  }

  const whatsappUrl = `https://wa.me/56972142601?text=${encodeURIComponent("Hola, me gustaría información sobre sus servicios solares.")}`

  return (
    <main className="min-h-screen id:servicios">
      {/* Main Services */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tipos de Instalaciones</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Sistemas solares adaptados a cada necesidad</p>
          </div>          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-card p-8 rounded-lg border border-border">
              {(() => { const Icon = mainServices[currentIndex].icon; return <Icon className="w-7 h-7 text-primary" /> })()}
              <h3 className="text-2xl font-bold text-foreground mb-3">{mainServices[currentIndex].title}</h3>
              <p className="text-muted-foreground mb-6">{mainServices[currentIndex].description}</p>
              <div className="space-y-3">
                {mainServices[currentIndex].benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-6 justify-center">
                {mainServices.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 cursor-pointer rounded-full ${currentIndex === idx ? "bg-primary" : "bg-primary/30"}`}
                  />
                ))}
              </div>
            </div>               
            
            <div className="relative rounded-lg overflow-hidden border border-border">
              <img
                src={mainServices[currentIndex].image}
                alt={mainServices[currentIndex].title}
                className="w-full max-h-150 object-cover"
              />
              <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition cursor-pointer"
                  aria-label="Anterior"
                >
                  ‹
                </button>                
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition cursor-pointer"
                  aria-label="Siguiente"
                >
                  ›
              </button>
            </div>
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
              <Link href="contacto#mapChile">
                Consultar Cobertura
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
