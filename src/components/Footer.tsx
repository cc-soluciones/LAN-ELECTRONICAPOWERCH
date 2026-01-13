import Link from "next/link";
import Image from "next/image";
import { 
    name,
    whatsappUrl,
    navigations
} from "@/constants/general";
import { 
    description,
    coverage,
    warranty,
    support,
    copy
} from "@/constants/footer";

export const Footer = () => (
    <footer className="bg-foreground text-background py-12 ">
        <div className="container text-center mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center ">                                   
                    <Link href="/" className="relative w-35 h-35 m-2">                        
                        <Image
                            src="/logo.jpg"
                            alt="Logo"
                            fill
                            className="object-contain"
                            priority
                        />                                                
                    </Link>
                    <p className="text-background/80 text-sm leading-relaxed">{description}</p>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Enlaces</h3>
                    <nav className="flex flex-col gap-2">
                        {navigations.map((item, index) => (
                            <Link key={`${item.href}-nav-footer-${index}`} href={item.href} className="text-background/80 hover:text-background transition-colors text-sm">
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Contacto</h3>
                    <div className="flex flex-col gap-2 text-sm">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-background/80 hover:text-background transition-colors"
                        >
                            WhatsApp: +56 9 7214 2601
                        </a>
                        <p className="text-background/80">{coverage}</p>
                        <p className="text-background/80">{warranty}</p>
                        <p className="text-background/80">{support}</p>
                    </div>
                </div>
            </div>

            <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
                <p>{copy}</p>
            </div>
        </div>
    </footer>
);
