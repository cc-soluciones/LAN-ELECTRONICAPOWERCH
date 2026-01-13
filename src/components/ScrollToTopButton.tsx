"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; 
import clsx from "clsx";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={clsx(
        "fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-green-500 text-white hover:bg-green-600 transition-opacity duration-300 cursor-pointer",
        !visible && "opacity-0 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}
