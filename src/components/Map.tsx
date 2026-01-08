"use client";
import { useEffect } from "react";
import Script from "next/script";

export const Map = () => {
    useEffect(() => {
        const tryLoadMap = () => {
            if (window?.simplemaps_countrymap && window?.simplemaps_countrymap?.load) {
                window?.simplemaps_countrymap?.load();
            }
        };

        tryLoadMap();
    }, []);

    return (
        <>
            <Script src="/simplemaps/mapdata.js" strategy="beforeInteractive"/>
            <Script
                src="/simplemaps/countrymap.js"
                strategy="afterInteractive"
                onLoad={() => {
                    if (window?.simplemaps_countrymap) {
                        window?.simplemaps_countrymap?.load();
                    }
                }}
            />
            <div id="map" className="min-h-[500px]"></div>
            <div className="bg-white w-50"></div>
        </>
    );
};
