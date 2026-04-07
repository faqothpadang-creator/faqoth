"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Radar pendeteksi gulir (scroll)
  useEffect(() => {
    const toggleVisibility = () => {
      // Tombol baru akan muncul jika layar digulir sejauh 300 piksel ke bawah
      if (window.scrollY > 300) {
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

  return (
    <button
      onClick={scrollToTop}
      // Logika CSS: Jika isVisible true, tombol muncul perlahan. Jika false, tombol turun dan menghilang.
      className={`fixed bottom-8 right-8 z-40 w-12 h-12 bg-white text-[#1e293b] rounded-full flex items-center justify-center transition-all duration-500 ease-in-out focus:outline-none border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Kembali ke atas"
    >
      <i className="fas fa-chevron-up text-lg"></i>
    </button>
  );
}