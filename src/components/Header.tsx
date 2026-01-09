"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
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
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 relative">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                fill
                                className="object-fill"
                                priority
                            />
                        </div>                        
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navigations.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={`${item.href}-nav-${index}`}
                                    href={item.href}
                                    className={`
                                        relative text-foreground transition-colors
                                        after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 
                                        after:bg-primary after:transition-all
                                        hover:after:w-full
                                        ${isActive ? "after:w-full" : ""}
                                    `}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA */}
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

                    {/* Mobile menu toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-foreground"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile nav */}
                {mobileMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 items-center">
                        {navigations.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={`${item.href}-nav-mobile-${index}`}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`
                                        relative text-foreground transition-colors
                                        after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-0 
                                        after:bg-primary after:transition-all after:-translate-x-1/2
                                        hover:after:w-1/2
                                        ${isActive ? "after:w-1/2" : ""}
                                    `}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
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
