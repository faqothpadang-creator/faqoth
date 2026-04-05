"use client"; // Ini adalah penanda wajib bahwa komponen ini interaktif (bisa diklik)

import { useState, useEffect } from 'react';

export default function ModeKitabButton() {
  const [isKitabMode, setIsKitabMode] = useState(false);

  useEffect(() => {
    if (isKitabMode) {
      document.body.style.backgroundColor = '#fdf6e3';
      document.body.style.backgroundImage = "url('https://www.transparenttextures.com/patterns/cream-paper.png')";
      document.body.style.color = '#2c241b';
      document.body.style.fontFamily = "'Amiri', serif"; // Ubah seluruh font ke gaya kitab
    } else {
      document.body.style.backgroundColor = '';
      document.body.style.backgroundImage = '';
      document.body.style.color = '';
      document.body.style.fontFamily = '';
    }

    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.backgroundImage = '';
      document.body.style.color = '';
      document.body.style.fontFamily = '';
    };
  }, [isKitabMode]);

  return (
    <button
      onClick={() => setIsKitabMode(!isKitabMode)}
      className="fixed bottom-10 left-8 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 z-50 border-2 hover:scale-110"
      style={{
        backgroundColor: isKitabMode ? '#fdf6e3' : '#8d6e63',
        color: isKitabMode ? '#8d6e63' : '#fff',
        borderColor: isKitabMode ? '#8d6e63' : '#fff',
      }}
    >
      <span className="text-xs font-bold text-center leading-tight">
        {isKitabMode ? "Biasa" : "Mode\nKitab"}
      </span>
    </button>
  );
}