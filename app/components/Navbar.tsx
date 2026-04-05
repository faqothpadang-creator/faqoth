"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pancarkanSinyalPencarian = () => {
    window.dispatchEvent(new Event('bukaPencarian'));
    setIsMenuOpen(false); // Tutup menu jika sedang mencari
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-extrabold text-gray-900 tracking-tight">
              Raihan<span className="text-[#1B4D3E]">Faqoth.</span>
            </Link>
          </div>

          {/* Menu Desktop (Sembunyi di HP) */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-[#1B4D3E] font-medium transition text-sm">Beranda</Link>
            <Link href="/artikel" className="text-gray-600 hover:text-[#1B4D3E] font-medium transition text-sm">Artikel</Link>
            <Link href="/tentang" className="text-gray-600 hover:text-[#1B4D3E] font-medium transition text-sm">Tentang</Link>
            <div className="w-px h-5 bg-gray-300"></div>
            <button onClick={pancarkanSinyalPencarian} className="flex items-center gap-2 text-gray-600 hover:text-[#1B4D3E] group focus:outline-none">
              <i className="fas fa-search text-lg"></i>
              <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded border border-gray-200">Ctrl K</span>
            </button>
          </div>

          {/* Tombol Navigasi HP (Muncul hanya di layar kecil) */}
          <div className="flex md:hidden items-center gap-4">
            <button onClick={pancarkanSinyalPencarian} className="text-gray-600 hover:text-[#1B4D3E]">
              <i className="fas fa-search text-xl"></i>
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-[#1B4D3E] focus:outline-none"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>

        </div>
      </div>

      {/* Dropdown Menu HP (Hanya muncul saat tombol hamburger diklik) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 rounded-xl hover:text-[#1B4D3E]">Beranda</Link>
            <Link href="/artikel" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 rounded-xl hover:text-[#1B4D3E]">Artikel</Link>
            <Link href="/tentang" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 rounded-xl hover:text-[#1B4D3E]">Tentang Saya</Link>
          </div>
        </div>
      )}
    </nav>
  );
}