"use client";

import Link from 'next/link';
import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle'; // Memanggil saklar Dark Mode

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pancarkanSinyalPencarian = () => {
    window.dispatchEvent(new Event('bukaPencarian'));
    setIsMenuOpen(false); // Tutup menu jika sedang mencari
  };

  return (
    // Ditambahkan: dark:bg-[#1e293b]/90 dark:border-[#334155]
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all dark:bg-[#1e293b]/90 dark:border-[#334155]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* Ditambahkan: dark:text-white */}
            <Link href="/" className="text-xl font-extrabold text-gray-900 tracking-tight dark:text-white">
              Raihan<span className="text-[#1B4D3E] dark:text-[#2dd4bf]">Faqoth.</span>
            </Link>
          </div>

          {/* Menu Desktop (Sembunyi di HP) */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-[#1B4D3E] font-medium transition text-sm dark:text-gray-300 dark:hover:text-[#2dd4bf]">Beranda</Link>
            <Link href="/artikel" className="text-gray-600 hover:text-[#1B4D3E] font-medium transition text-sm dark:text-gray-300 dark:hover:text-[#2dd4bf]">Artikel</Link>
            <Link href="/tentang" className="text-gray-600 hover:text-[#1B4D3E] font-medium transition text-sm dark:text-gray-300 dark:hover:text-[#2dd4bf]">Tentang</Link>
            <div className="w-px h-5 bg-gray-300 dark:bg-gray-600"></div>
            
            {/* --- SAKLAR DARK MODE DESKTOP --- */}
            <DarkModeToggle />

            <button onClick={pancarkanSinyalPencarian} className="flex items-center gap-2 text-gray-600 hover:text-[#1B4D3E] group focus:outline-none dark:text-gray-300 dark:hover:text-[#2dd4bf]">
              <i className="fas fa-search text-lg"></i>
              <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded border border-gray-200 dark:bg-gray-700 dark:border-gray-600">Ctrl K</span>
            </button>
          </div>

          {/* Tombol Navigasi HP (Muncul hanya di layar kecil) */}
          <div className="flex md:hidden items-center gap-4">
            {/* --- SAKLAR DARK MODE MOBILE --- */}
            <DarkModeToggle />

            <button onClick={pancarkanSinyalPencarian} className="text-gray-600 hover:text-[#1B4D3E] dark:text-gray-300 dark:hover:text-[#2dd4bf]">
              <i className="fas fa-search text-xl"></i>
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-[#1B4D3E] focus:outline-none dark:text-gray-300 dark:hover:text-[#2dd4bf]"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>

        </div>
      </div>

      {/* Dropdown Menu HP (Hanya muncul saat tombol hamburger diklik) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 dark:bg-[#1e293b] dark:border-[#334155] animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 rounded-xl hover:text-[#1B4D3E] dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-[#2dd4bf]">Beranda</Link>
            <Link href="/artikel" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 rounded-xl hover:text-[#1B4D3E] dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-[#2dd4bf]">Artikel</Link>
            <Link href="/tentang" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 rounded-xl hover:text-[#1B4D3E] dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-[#2dd4bf]">Tentang Saya</Link>
          </div>
        </div>
      )}
    </nav>
  );
}