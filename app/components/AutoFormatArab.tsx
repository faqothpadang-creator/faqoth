"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AutoFormatArab() {
  const pathname = usePathname();

  useEffect(() => {
    // Memberikan jeda waktu agar artikel selesai dimuat sepenuhnya
    const timer = setTimeout(() => {
      // Mencari seluruh paragraf di dalam ruang baca
      const elements = document.querySelectorAll('article p, article li, article blockquote, article div');
      const arabicRegex = /[\u0600-\u06FF]/; // Radar gelombang huruf Hijaiyah

      elements.forEach(el => {
        // Jika radar mendeteksi adanya huruf Arab di paragraf tersebut
        if (el.textContent && arabicRegex.test(el.textContent)) {
           const text = el.textContent.trim();
           // Mesin menghitung rasio jumlah huruf Arab berbanding huruf Latin
           const arabicChars = text.match(/[\u0600-\u06FF]/g)?.length || 0;
           const totalChars = text.replace(/\s/g, '').length;

           // Jika lebih dari 20% isi paragraf adalah bahasa Arab, sistem akan mengambil alih!
           if (totalChars > 0 && (arabicChars / totalChars) > 0.2) {
               el.setAttribute('dir', 'rtl');
               el.classList.add('font-arabic-auto'); // Terapkan gaya visual kitab
           }
        }
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}