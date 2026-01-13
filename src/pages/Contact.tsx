"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { MapChile } from "@/components/svg/MapChile";
import { phone } from "@/constants/general";
import { info, titleMap, textSendWhatsapp } from "@/constants/contact";
import { contactSchema } from "@/schema/contact";

type ContactForm = z.infer<typeof contactSchema>

const Contact = () => {
    const form = useForm<ContactForm>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            region: "",
            email: "",
            request: "",
        },
    });

    const onSendRequest = (data: ContactForm) => {
        const whatsappUrl = `https://wa.me/${phone.replaceAll(" ", "").replaceAll("+", "")}?text=${encodeURIComponent(
            textSendWhatsapp
            .replace("{name}", data.name)
            .replace("{region}", data.region)
            .replace("{email}", data.email)
            .replace("{request}", data.request)
        )}`;

        console.log(whatsappUrl)

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }

    return (
        <div className="flex flex-wrap pt-32 px-4">
            <section className="bg-background lg:w-1/2 mx-auto">
                <div className="container px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
                        {info.map((info, index) => (
                            <div
                                key={index}
                                className="bg-card p-6 rounded-lg border border-border text-center"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <info.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    {info.title}
                                </h3>
                                {info.link ? (
                                    <a
                                        href={info.link}
                                        target={
                                            info.link.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            info.link.startsWith("http")
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className="text-primary hover:underline"
                                    >
                                        {info.detail}
                                    </a>
                                ) : (
                                    <p className="text-muted-foreground">
                                        {info.detail}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-background w-full lg:w-1/2 pb-10">
                <div className="px-4 w-full pb-5">
                    <h3 className="text-xl font-semibold text-center mb-4">
                        Contáctanos
                    </h3>

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSendRequest)}
                            className="grid gap-4"
                        >
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nombre</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Tu nombre"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="region"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Región</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Tu región"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="correo@ejemplo.cl"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="request"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Requerimiento</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className="resize-none h-40"
                                                placeholder="Cuéntanos en qué te podemos ayudar"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="gap-2 cursor-pointer">
                                Enviar mensaje vía WhatsApp
                            </Button>
                        </form>
                    </Form>
                </div>
            </section>
            <section id="mapChile" className="bg-background w-full mx-auto flex items-center">
                <div className="container mx-auto px-4 mb-4">
                    <h3 className="text-lg font-semibold text-foreground text-center">
                        {titleMap}
                    </h3>
                    <MapChile />
                </div>
            </section>
        </div>
    );
};

export default Contact;