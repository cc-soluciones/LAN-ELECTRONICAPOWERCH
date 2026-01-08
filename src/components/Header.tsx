"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
    name,
    whatsappUrl,
    navigations
} from "@/constants/general";
import { 
    buttonPrice,
} from "@/constants/text";

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-primary-foreground"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-foreground">
                            {name}
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {navigations.map((item, index) => (
                            <Link key={`${item.href}-nav-${index}`} href={item.href} className="text-foreground hover:text-primary transition-colors">{item.label}</Link>
                        ))}
                    </nav>

                    <div className="hidden md:block">
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
                                {buttonPrice}
                            </a>
                        </Button>
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-foreground"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
                        {navigations.map((item, index) => (
                            <Link key={`${item.href}-nav-mobile-${index}`} href={item.href} className="text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>{item.label}</Link>
                        ))}
                        <Button
                            asChild
                            size="lg"
                            className="bg-primary hover:bg-primary/90 w-full"
                        >
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {buttonPrice}
                            </a>
                        </Button>
                    </nav>
                )}
            </div>
        </header>
    );
}
