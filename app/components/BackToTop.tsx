"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-white text-gray-900 rounded-full shadow-2xl flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 border border-gray-100 focus:outline-none"
      aria-label="Kembali ke atas"
    >
      <i className="fas fa-chevron-up text-lg"></i>
    </button>
  );
}