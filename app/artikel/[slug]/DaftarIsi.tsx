"use client";

import { useEffect, useState } from 'react';

export default function DaftarIsi() {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Mesin pencari: Memindai semua elemen <h2> dan <h3> di dalam artikel
    const article = document.querySelector('article');
    if (!article) return;

    const elements = Array.from(article.querySelectorAll('h2, h3'));
    
    const headingData = elements.map((el, index) => {
      // Menyuntikkan ID secara otomatis jika tulisan Markdown belum memilikinya
      const id = el.id || `sub-judul-${index}`;
      el.id = id;
      
      return {
        id,
        text: el.textContent || '',
        level: el.tagName.toLowerCase() === 'h2' ? 2 : 3,
      };
    });

    setHeadings(headingData);
  }, []);

  // Jika tulisan terlalu pendek dan tidak ada sub-judul, Daftar Isi akan menyembunyikan diri
  if (headings.length === 0) return null;

  return (
    <div className="bg-white border border-gray-200 border-l-4 border-l-[#1B4D3E] shadow-sm rounded-lg p-5 my-8 w-full md:w-fit min-w-[300px] transition-all duration-300">
      <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
        <h3 className="font-bold text-gray-900 flex items-center gap-2">
          <i className="fas fa-list-ul text-[#1B4D3E]"></i> Daftar Isi
        </h3>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-xs text-[#1B4D3E] hover:underline font-semibold focus:outline-none"
        >
          [{isOpen ? 'Sembunyikan' : 'Tampilkan'}]
        </button>
      </div>
      
      {isOpen && (
        <ul className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
          {headings.map((h) => (
            <li key={h.id} className={h.level === 3 ? "ml-6 text-sm" : "text-sm font-semibold"}>
              <a 
                href={`#${h.id}`} 
                className="text-gray-600 hover:text-[#1B4D3E] transition-colors block"
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}