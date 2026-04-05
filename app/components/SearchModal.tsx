"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState<{slug: string, title: string, deskripsi: string}[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<typeof posts>([]);

  // Sistem Radar: Mengambil data dari API yang kita buat di Tahap 1
  useEffect(() => {
    if (isOpen && posts.length === 0) {
      fetch('/api/search')
        .then(res => res.json())
        .then(data => setPosts(data));
    }
  }, [isOpen, posts.length]);

  // Sistem Filter Instan: Mencocokkan ketikan dengan Judul atau Deskripsi
  useEffect(() => {
    if (query.trim() === '') {
      setFilteredPosts([]);
    } else {
      const lowerQuery = query.toLowerCase();
      const filtered = posts.filter(post => 
        post.title.toLowerCase().includes(lowerQuery) || 
        post.deskripsi.toLowerCase().includes(lowerQuery)
      );
      setFilteredPosts(filtered);
    }
  }, [query, posts]);

  // Pendeteksi Tombol Pintas (Ctrl + K / Cmd + K)
  // Pendeteksi Tombol Pintas & Sinyal Klik dari Navbar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    // Antena penangkap sinyal dari tombol klik
    const tangkapSinyalBuka = () => setIsOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('bukaPencarian', tangkapSinyalBuka); // Mendengarkan sinyal kustom

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('bukaPencarian', tangkapSinyalBuka);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-gray-900/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4 transition-all"
      onClick={() => setIsOpen(false)}
    >
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
        onClick={e => e.stopPropagation()} // Mencegah klik di dalam kotak menutup modal
      >
        
        {/* Kotak Ketikan */}
        <div className="flex items-center px-6 py-4 border-b border-gray-100">
          <i className="fas fa-search text-gray-400 text-xl"></i>
          <input 
            type="text" 
            placeholder="Cari tulisan..." 
            className="w-full pl-4 pr-4 py-2 text-xl font-medium focus:outline-none text-gray-800 bg-transparent"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-red-500 transition px-2">
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Ruang Hasil Pencarian */}
        <div className="max-h-96 overflow-y-auto bg-gray-50/50 p-3">
          {query === '' ? (
            <div className="py-12 text-center text-gray-400 flex flex-col items-center">
              <i className="fas fa-keyboard text-4xl mb-3 opacity-20"></i>
              <p>Mulai mengetik untuk mencari artikel...</p>
            </div>
          ) : filteredPosts.length > 0 ? (
            <ul className="space-y-2">
              {filteredPosts.map(post => (
                <li key={post.slug}>
                  <Link 
                    href={`/artikel/${post.slug}`} 
                    onClick={() => setIsOpen(false)} 
                    className="block p-4 bg-white hover:bg-[#1B4D3E]/5 rounded-xl border border-transparent hover:border-[#1B4D3E]/20 transition-all group"
                  >
                    <h4 className="text-lg font-bold text-gray-800 group-hover:text-[#1B4D3E] transition-colors">{post.title}</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">{post.deskripsi}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="py-12 text-center text-gray-500">
              <p>Tidak ada tulisan yang cocok dengan <span className="font-bold">"{query}"</span>.</p>
            </div>
          )}
        </div>

        {/* Panduan Footer */}
        <div className="bg-gray-100 px-6 py-3 text-xs text-gray-500 flex justify-between font-medium">
          <span><kbd className="bg-white px-2 py-1 border border-gray-200 rounded shadow-sm mr-1">ESC</kbd> untuk menutup</span>
          <span>Sistem Pencarian Internal Cerdas</span>
        </div>
      </div>
    </div>
  );
}