import Link from "next/link";
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
    <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <svg
                                className="w-5 h-5 text-primary-foreground"
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
                        <span className="text-lg font-bold">
                            {name}
                        </span>
                    </div>
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
