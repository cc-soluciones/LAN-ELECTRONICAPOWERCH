"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Products } from "@/constants/products"

export function HeroProducts() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {Products.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg">
            {Products.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {Products.items.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg">
            <Link href={Products.cta.href}>
              {Products.cta.label}
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}

function ProductCard({ product }: { product: any }) {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (!product.images || product.images.length <= 1) return

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % product.images.length)
    }, 3200)

    return () => clearInterval(interval)
  }, [product.images])

  return (
    <Card className="group bg-card/80 backdrop-blur border-border/50 hover:shadow-xl transition-all py-0">
      <CardContent className="p-6">

        <div className="relative w-full h-90 mb-4 rounded-lg overflow-hidden bg-muted">
          {product.images.map((src: string, i: number) => (
            <Image
              key={src}
              src={src}
              alt={product.name}
              fill
              className={`object-fill transition-all duration-2000 ${
                i === activeImage
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            />
          ))}
        </div>

        <div className="mb-3 text-center">
          <Badge variant="default">
            {product.category}
          </Badge>
        </div>

        <h3 className="text-lg font-semibold mb-2 text-center">
          {product.name}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed text-center">
          {product.description}
        </p>

      </CardContent>
    </Card>
  )
}
