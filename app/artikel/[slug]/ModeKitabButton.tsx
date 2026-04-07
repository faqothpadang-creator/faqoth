"use client";

import { useState, useEffect } from 'react';

export default function ModeKitabButton() {
  const [isModeKitab, setIsModeKitab] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    // Logika persis dari XML: Muncul di detik ke-1, hilang di detik ke-6
    const timer1 = setTimeout(() => setShowLabel(true), 1000);
    const timer2 = setTimeout(() => setShowLabel(false), 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const toggleModeKitab = () => {
    setShowLabel(false); // Matikan notif jika tombol diklik
    const body = document.body;
    body.classList.toggle('mode-kitab-aktif');
    
    // Cek apakah mode aktif untuk mengubah ikon
    setIsModeKitab(body.classList.contains('mode-kitab-aktif'));
  };

  return (
    <div className="fixed bottom-24 left-8 z-50 flex items-center group">
      {/* Tombol Utama */}
      <button
        onClick={toggleModeKitab}
        className={`w-[45px] h-[45px] rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.2)] border-2 z-10 relative
          ${isModeKitab 
            ? 'bg-[#fdf6e3] text-[#8d6e63] border-[#8d6e63] hover:scale-110' 
            : 'bg-[#8d6e63] text-white border-white hover:bg-[#5d4037] hover:scale-110'
          }`}
      >
        <i className={`fas ${isModeKitab ? 'fa-compress' : 'fa-book-open'}`}></i>
      </button>

      {/* Label Tooltip dengan Segitiga Panah (Persis seperti #hint-text) */}
      <div 
        className={`
          absolute left-[55px] bg-[#333] text-white py-1.5 px-3 rounded-md text-xs whitespace-nowrap transition-all duration-500 shadow-md pointer-events-none
          ${showLabel ? 'opacity-100 visible translate-x-1' : 'opacity-0 invisible -translate-x-2'}
        `}
      >
        {/* Segitiga penunjuk */}
        <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[5px] border-r-[#333]"></div>
        
        Tekan untuk Mode Baca
      </div>
    </div>
  );
}