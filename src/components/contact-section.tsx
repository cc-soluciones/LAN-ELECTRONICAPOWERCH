import { MapPin, Phone, CreditCard } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Contacto</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">WhatsApp</h3>
              <a
                href="https://wa.me/56972142601"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                +56 9 7214 2601
              </a>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Cobertura</h3>
              <p className="text-muted-foreground leading-relaxed">Región Metropolitana hasta Chiloé</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Métodos de Pago</h3>
              <p className="text-muted-foreground leading-relaxed">Efectivo, transferencia, tarjetas de crédito</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
