"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "Energía Solar Residencial para tu Hogar",
    description: "Transforma tu hogar en un espacio autosuficiente con energía solar de alta eficiencia.",
    image: "/modern-residential-house-with-solar-panels-on-roof.jpg",
  },
  {
    title: "Montaje en Cubierta",
    description: "Aprovecha la energía solar desde tu techo con una instalación profesional y segura.",
    image: "/technician-installing-solar-panels-on-residential-.jpg",
  },
  {
    title: "Energía Solar Off-Grid",
    description: "Independízate de la red eléctrica con sistemas solares con baterías de alta capacidad.",
    image: "/off-grid-solar-system-with-battery-storage--modern.jpg",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const whatsappUrl = `https://wa.me/56972142601?text=${encodeURIComponent("Hola, me gustaría solicitar una cotización para un sistema solar.")}`

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="inicio" className="relative h-[600px] md:h-[700px] overflow-hidden mt-[73px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">{slide.title}</h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">{slide.description}</p>
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Solicita tu cotización
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-8" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
