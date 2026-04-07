"use client";
import { useState } from 'react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Wadah utama: fixed di kiri bawah, rata kiri (items-start)
    <div className="fixed bottom-8 left-8 z-50 flex flex-col items-start pointer-events-none">
      
      {/* Kotak Chat WA */}
      <div
        className={`mb-4 bg-white rounded-xl shadow-2xl w-80 overflow-hidden border border-gray-100 transition-all duration-300 origin-bottom-left pointer-events-auto ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none hidden"
        }`}
      >
        <div className="bg-[#128C7E] p-4 flex justify-between items-center text-white">
          <div>
            <h4 className="font-bold text-lg leading-tight">Admin Website</h4>
            <p className="text-xs opacity-90">Biasanya membalas dalam 5 menit</p>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 rounded-full p-1 transition focus:outline-none">
            <i className="fas fa-times text-lg"></i>
          </button>
        </div>
        <div className="p-4 bg-gray-50 min-h-[150px] flex flex-col gap-3">
          <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-gray-100 text-sm text-gray-700 max-w-[85%] self-start">
            Halo! 👋 Ada yang bisa saya bantu hari ini?
          </div>
        </div>
        <div className="p-4 bg-white border-t border-gray-100">
          <input type="text" id="wa-name" placeholder="Nama Kamu..." className="w-full mb-3 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#25D366]" />
          <textarea id="wa-msg" rows={2} placeholder="Tulis pesan..." className="w-full mb-3 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#25D366]"></textarea>
          <button onClick={() => {
            const name = (document.getElementById('wa-name') as HTMLInputElement).value;
            const msg = (document.getElementById('wa-msg') as HTMLTextAreaElement).value;
            window.open(`https://wa.me/6285186898073?text=Halo Admin, saya ${name || 'Pengunjung'}. %0A%0A${msg}`, '_blank');
          }} className="w-full bg-[#25D366] hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5">
            <span>Kirim</span><i className="fab fa-whatsapp text-lg"></i>
          </button>
        </div>
      </div>

      {/* Tombol Bulat WA (Ukuran Fix 45px) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[45px] h-[45px] bg-[#25D366] rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all duration-300 hover:scale-110 focus:outline-none border-2 border-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] pointer-events-auto"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-whatsapp'} text-[22px]`}></i>
      </button>
    </div>
  );
}