"use client";

import Link from 'next/link';

export default function Navbar() {
  // Fungsi pemancar sinyal
  const pancarkanSinyalPencarian = () => {
    window.dispatchEvent(new Event('bukaPencarian'));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-extrabold text-gray-900 tracking-tight">
              Raihan<span className="text-[#1B4D3E]">Faqoth.</span>
            </Link>
          </div>

          {/* Menu Kanan */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-[#1B4D3E] font-medium transition text-sm">Beranda</Link>
              <Link href="/artikel" className="text-gray-600 hover:text-[#1B4D3E] font-medium transition text-sm">Artikel</Link>
              <Link href="/tentang" className="text-gray-600 hover:text-[#1B4D3E] font-medium transition text-sm">Tentang</Link>
            </div>

            {/* Garis Pemisah (Hanya di mode Desktop) */}
            <div className="hidden md:block w-px h-5 bg-gray-300"></div>

            {/* Tombol Pencarian Visual */}
            <button 
              onClick={pancarkanSinyalPencarian}
              className="flex items-center gap-2 text-gray-600 hover:text-[#1B4D3E] transition group focus:outline-none"
              aria-label="Cari Artikel"
            >
              <i className="fas fa-search text-lg group-hover:scale-110 transition-transform"></i>
              <span className="hidden md:inline-flex items-center text-xs font-medium bg-gray-100 group-hover:bg-[#1B4D3E]/10 px-2 py-1 rounded border border-gray-200 transition-colors">
                Ctrl K
              </span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}