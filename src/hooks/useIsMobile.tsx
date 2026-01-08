"use client";

import { useEffect, useState } from "react";

export const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${breakpoint}px)`);
        const handler = () => setIsMobile(media.matches);

        handler();
        media.addEventListener("change", handler);

        return () => media.removeEventListener("change", handler);
    }, [breakpoint]);

    return isMobile;
};
