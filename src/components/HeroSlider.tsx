"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/constants/general";
import { slides } from "@/constants/home";
import { buttonPrice } from "@/constants/text";

export const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section
            id="inicio"
            className="relative h-150 md:h-[700px] overflow-hidden mt-[73px]"
        >
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 z-10" />
                    <img
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.title}
                        className={`w-full h-full object-cover z-0 transform transition-transform duration-[5000ms] ease-out ${
                            index === currentSlide ? "scale-100" : "scale-110"
                        }`}
                    />
                    <div className="absolute inset-0 flex items-center z-20">
                        <div className="container mx-auto px-4">
                            <div className="max-w-2xl">
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                                    {slide.description}
                                </p>
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                                >
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {buttonPrice}
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <button
                onClick={prevSlide}
                className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all cursor-pointer z-20"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all cursor-pointer z-20"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                            index === currentSlide
                                ? "bg-white w-8"
                                : "bg-white/50"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};
