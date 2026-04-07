"use client";

import { useState, useEffect } from 'react';

export default function ModeKitabButton() {
  const [showLabel, setShowLabel] = useState(true);

  useEffect(() => {
    // Logika Timer: Hilangkan teks setelah 5 detik
    const timer = setTimeout(() => {
      setShowLabel(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const toggleModeKitab = () => {
    // Mesin saklar: Menambah/menghapus kelas 'mode-kitab-aktif' di tag <body>
    document.body.classList.toggle('mode-kitab-aktif');
    
    // Memberikan umpan balik getaran kecil jika dibuka di HP
    if (navigator.vibrate) navigator.vibrate(50);
  };

  return (
    <div className="fixed bottom-10 left-10 z-50 flex items-center gap-3 group">
      {/* Tombol Utama */}
      <button
        onClick={toggleModeKitab}
        className="w-14 h-14 bg-[#8B6E61] hover:bg-[#70584D] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <i className="fas fa-book-open text-xl"></i>
      </button>

      {/* Label Tooltip dengan Animasi Transisi */}
      <div 
        className={`
          relative bg-gray-800 text-white text-sm py-2 px-4 rounded-lg shadow-xl whitespace-nowrap transition-all duration-1000 ease-in-out
          ${showLabel ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}
        `}
      >
        {/* Segitiga Panah Tooltip */}
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-800"></div>
        
        Tekan untuk Mode Baca
      </div>
    </div>
  );
}