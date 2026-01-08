import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function CTASection() {
  const whatsappUrl = `https://wa.me/56972142601?text=${encodeURIComponent("Hola, me gustaría solicitar una cotización para un sistema solar.")}`

  return (
    <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-top" style={{ backgroundImage: "url('/cta.webp')" }}/>
      <div className="absolute inset-0 bg-primary/50" />
      <div className="relative container mx-auto px-4 text-center z-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Solicita tu Cotización Hoy</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90 leading-relaxed">
          Nuestros expertos diseñarán una solución solar adaptada a tus necesidades específicas. Obtén una cotización
          personalizada sin compromiso.
        </p>
        <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
            <MessageCircle size={20} />
            Contactar por WhatsApp
          </a>
        </Button>
      </div>
    </section>
  )
}
