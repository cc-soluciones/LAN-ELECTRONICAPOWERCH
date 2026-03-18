import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Electronicapower - Instalaciones Fotovoltaicas Solares en Chile",
    description: "Especialistas en sistemas solares fotovoltaicos residenciales e industriales. Instalación y venta de paneles solares, baterías de litio, inversores y kits solares. Cobertura desde Santiago a Chiloé.",
    generator: "Electronicapowerch.app",
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",   
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`font-sans antialiased`}>
                <main className="min-h-screen">
                    <Header/>
                    {children}
                    <Footer/>
                    <ScrollToTopButton />
                </main>                
                <Analytics />
            </body>
        </html>
    );
}
