"use client"

import { useState } from "react"
import { CTASection } from "@/components/CTASection"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, CheckCircle2 } from "lucide-react"

import {
  mainServices,
  additionalServices,
  processSteps,
  washingMachineServices
} from "@/constants/services"

export default function ServiciosPage() {

  const [currentIndex, setCurrentIndex] = useState(0)

  const totalSlides = mainServices.length

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    )
  }

  const whatsappUrl = `https://wa.me/56972142601?text=${encodeURIComponent("Hola, me gustaría información sobre sus servicios.")}`

  return (
    <main className="min-h-screen">

      {/* MAIN SERVICES */}

      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tipos de Instalaciones
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sistemas solares adaptados a cada necesidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div className="bg-card p-8 rounded-lg border border-border">

              {(() => {
                const IconComponent = mainServices[currentIndex].icon
                return <IconComponent className="w-7 h-7 text-primary" />
              })()}

              <h3 className="text-2xl font-bold text-foreground mb-3">
                {mainServices[currentIndex].title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {mainServices[currentIndex].description}
              </p>

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
                    className={`w-3 h-3 cursor-pointer rounded-full ${
                      currentIndex === idx ? "bg-primary" : "bg-primary/30"
                    }`}
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
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center"
              >
                ‹
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center"
              >
                ›
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Servicios Complementarios
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border text-center">

                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon icon={service.icon} className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="py-20">
        <div className="container mx-auto px-4">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border">
                <div className="text-5xl font-bold text-primary/20 mb-3">
                  {step.number}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* COBERTURA */}

      <section className="py-20 bg-muted/30">

        <div className="container mx-auto px-4 text-center max-w-3xl">

          <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cobertura Nacional
          </h2>

          <p className="text-muted-foreground mb-8">
            Realizamos instalaciones de sistemas solares residenciales e industriales con cobertura nacional en Chile.
          </p>

          <Button asChild size="lg">
            <Link href="contacto#mapChile">
              Consultar Cobertura
            </Link>
          </Button>

        </div>
      </section>

      {/* LAVADORAS */}

      <section className="py-20 bg-background">

        <div className="container mx-auto px-4 text-center max-w-4xl">

          <Icon
            icon="openmoji:washing-machine"
            className="w-12 h-12 text-primary mx-auto mb-4"
          />

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Servicio Técnico de Lavadoras en Mariquina
          </h2>

          <p className="text-muted-foreground mb-10">
            Contamos con un local físico en Mariquina donde realizamos servicio técnico y venta de repuestos para lavadoras automáticas.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {washingMachineServices.map((service, index) => (

              <div key={index} className="bg-card p-6 rounded-lg border">

                <Icon icon={service.icon} className="w-8 h-8 text-primary mx-auto mb-3" />

                <h3 className="font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>

              </div>

            ))}
          </div>

          <Button asChild size="lg" className="mt-10">
            <a href={whatsappUrl} target="_blank">
              Consultar Servicio Técnico
            </a>
          </Button>

        </div>
      </section>

    </main>
  )
}