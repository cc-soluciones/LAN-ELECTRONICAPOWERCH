"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/CTASection";
import { whatsappUrl } from "@/constants/general";
import {
    titleProducts,
    descriptionsProducts,
    category,
    products,
} from "@/constants/products";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Products = () => {
    const [mobileCategory, setMobileCategory] = useState("Todos");

    return (
        <>
            <section className="pt-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                            {titleProducts}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            {descriptionsProducts}
                        </p>
                        <div className="relative w-50 h-50 m-2 mx-auto">
                            <Image
                                src="/logo.jpg"
                                alt="Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-16 white">
                <div className="container mx-auto px-4">
                    <div className="hidden md:block">
                        <Tabs defaultValue="Todos" className="w-full">
                            <TabsList className="h-12 mx-auto">
                                {category.map((item) => (
                                    <TabsTrigger
                                        key={`tab-list-${item}`}
                                        className="text-md cursor-pointer p-4"
                                        value={item}
                                    >
                                        {item}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                            {category.map((item) => (
                                <TabsContent key={`tab-${item}`} value={item}>
                                    <ProductsItem category={item} />
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                    <div className="block md:hidden mb-4">
                        <select
                            className="w-full border border-gray-300 rounded p-2 text-foreground text-center"
                            value={mobileCategory}
                            onChange={(e) => setMobileCategory(e.target.value)}
                        >
                            {category.map((item) => (
                                <option key={`mobile-${item}`} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                        <ProductsItem category={mobileCategory} />
                    </div>
                </div>
            </section>
            <CTASection />
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Soporte Técnico Incluido
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Todos nuestros productos incluyen instalación
                            profesional, garantía extendida y servicio de
                            mantenimiento preventivo
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-primary hover:bg-primary/90"
                        >
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Consultar Disponibilidad
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};

const ProductImageCarousel = ({ images }: { images: string[] }) => {
    const [current, setCurrent] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const startCarousel = () => {
        if (images.length <= 1) return;
        stopCarousel();
        intervalRef.current = window.setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 1000);
    };

    const stopCarousel = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        return () => stopCarousel();
    }, []);

    return (
        <div
            className="relative h-60 w-full overflow-hidden cursor-pointer"
            onMouseEnter={startCarousel}
            onMouseLeave={stopCarousel}
        >
            <Image
                src={`/products/${images[current]}`}
                alt="Producto"
                fill
                className="object-contain transition-all duration-500"
            />

            {images.length > 1 && (
                <div className="absolute bottom-2 right-2 flex gap-1">
                    {images.map((_, idx) => (
                        <span
                            key={idx}
                            className={`w-2 h-2 rounded-full ${
                                idx === current ? "bg-white" : "bg-white/50"
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const ModalImageCarousel = ({ images }: { images: string[] }) => {
    const [current, setCurrent] = useState(0);
    const total = images.length;

    const prev = () => {
        setCurrent((c) => (c === 0 ? total - 1 : c - 1));
    };

    const next = () => {
        setCurrent((c) => (c === total - 1 ? 0 : c + 1));
    };

    return (
        <div className="relative h-56 w-full overflow-hidden rounded-lg">
            <Image
                src={`/products/${images[current]}`}
                alt="Producto"
                fill
                className="object-contain"
            />

            {total > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2
                       bg-black/40 text-white rounded-full p-2
                       hover:bg-black/60 cursor-pointer"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2
                       bg-black/40 text-white rounded-full p-2
                       hover:bg-black/60 cursor-pointer"
                    >
                        <ChevronRight size={20} />
                    </button>
                </>
            )}
        </div>
    );
};

const buildModalWhatsappUrl = (product: any) => {
    const phone = "56972142601";

    const message = `Hola, quiero consultar por el siguiente producto:

- Producto: ${product.name}
- Categoría: ${product.category}
- Precio: $${product.price}

Quedo atento, gracias.`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

const ProductsItem = ({ category }: { category: string }) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<any>(null);

    const filtered =
        category === "Todos"
            ? products
            : products.filter((p) => p.category === category);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {filtered.map((p) => {
                const images = Array.isArray(p.img)
                    ? p.img.filter(Boolean)
                    : [p.img];

                return (
                    <Card
                        key={p.id}
                        className="overflow-hidden pt-0 cursor-pointer"
                        onClick={() => {
                            setSelected(p);
                            setOpen(true);
                        }}
                    >
                        <ProductImageCarousel key={p.id} images={images} />

                        <CardHeader className="pb-2">
                            <Badge variant="secondary">{p.category}</Badge>
                        </CardHeader>

                        <CardContent>
                            <h3 className="font-semibold">{p.name}</h3>
                            <h3 className="pt-4">$ {p.price}</h3>
                        </CardContent>
                    </Card>
                );
            })}

            <Dialog
                open={open}
                onOpenChange={(value) => {
                    setOpen(value);
                    if (!value) setSelected(null);
                }}
            >
                <DialogContent className="max-w-lg ">
                    {selected &&
                        (() => {
                            const modalImages = Array.isArray(selected.img)
                                ? selected.img.filter(Boolean)
                                : [selected.img];

                            return (
                                <>
                                    <DialogHeader>
                                        <DialogTitle>
                                            {selected.name}
                                        </DialogTitle>
                                    </DialogHeader>

                                    <div className="relative h-56 w-full overflow-hidden rounded-lg">
                                        <ModalImageCarousel
                                            key={selected.id}
                                            images={modalImages}
                                        />
                                    </div>

                                    <Badge className="mt-2">
                                        {selected.category}
                                    </Badge>

                                    <p className="text-sm text-muted-foreground mt-4">
                                        {selected.description}
                                    </p>

                                    <h3 className="pt-4">$ {selected.price}</h3>
                                    <div className="mt-6">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="bg-green-600 hover:bg-green-500 text-white transition-colors duration-200 w-full"
                                        >
                                            <a
                                                href={buildModalWhatsappUrl(
                                                    selected
                                                )}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => setOpen(false)}
                                                className="inline-flex items-center justify-center gap-2"
                                            >
                                                <FaWhatsapp size={20} />
                                                Consultar por WhatsApp
                                            </a>
                                        </Button>
                                    </div>
                                </>
                            );
                        })()}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Products;