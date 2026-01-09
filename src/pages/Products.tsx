"use client";

import { useState } from "react";
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

export const Products = () => {
    return (
        <>
            <section className="pt-32 pb-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                            {titleProducts}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            {descriptionsProducts}
                        </p>
                    </div>
                </div>
            </section>
            <section className="pt-32 pb-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <Tabs defaultValue="todos" className="w-full">
                        <TabsList className="h-12 mx-auto">
                            {category.map((item) => (
                                <TabsTrigger
                                    key={`tab-list-${item}`}
                                    className="text-md p-4"
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

const ProductsItem = ({ category }: { category: string }) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<any>(null);
    const filtered =
        category === "Todos"
            ? products
            : products.filter((p) => p.category === category);

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {filtered.map((p) => (
                <Card
                    key={p.id}
                    className="overflow-hidden pt-0 cursor-pointer"
                    onClick={() => {
                        setSelected(p);
                        setOpen(true);
                    }}
                >
                    <div className="relative h-60 w-full">
                        <Image
                            src={`/products/${p.img}`}
                            alt={p.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <CardHeader className="pb-2">
                        <Badge variant="secondary" className="w-fit">
                            {p.category}
                        </Badge>
                    </CardHeader>

                    <CardContent>
                        <h3 className="font-semibold">{p.name}</h3>
                        <h3 className="pt-4">$ {p.price}</h3>
                    </CardContent>
                </Card>
            ))}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-lg">
                    {selected && (
                        <>
                            <DialogHeader>
                                <DialogTitle>{selected.name}</DialogTitle>
                            </DialogHeader>

                            <div className="relative h-56 w-full rounded-lg overflow-hidden">
                                <Image
                                    src={`/products/${selected.img}`}
                                    alt={selected.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <Badge className="w-fit mt-2">
                                {selected.category}
                            </Badge>

                            <p className="text-sm text-muted-foreground mt-4">
                                {selected.description}
                            </p>

                            <h3 className="pt-4">$ {selected.price}</h3>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};
