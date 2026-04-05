"use client"; // Wajib karena komponen ini berinteraksi dengan ketikan dan klik pengunjung

import { useState } from 'react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [nama, setNama] = useState('');
  const [pesan, setPesan] = useState('');

  // Data diambil dari XML Blogger lama Anda
  const nomorWA = "6285186898073"; 
  const adminName = "Admin Website";

  const kirimPesan = () => {
    if (!pesan.trim()) {
      alert("Mohon isi pesan terlebih dahulu ya.");
      return;
    }
    const teksAkhir = `Halo Admin, saya ${nama ? nama : 'Pengunjung'}.\n\n${pesan}`;
    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(teksAkhir)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4 font-sans">
      
      {/* Kotak Chat (Hanya dirender jika tombol diklik / isOpen bernilai true) */}
      {isOpen && (
        <div className="bg-white rounded-xl shadow-2xl w-80 overflow-hidden border border-gray-100 transform transition-all duration-300 origin-bottom-right">
          
          {/* Bagian Kepala Kotak Chat */}
          <div className="bg-[#128C7E] p-4 flex justify-between items-center text-white">
            <div>
              <h4 className="font-bold text-lg leading-tight">{adminName}</h4>
              <p className="text-xs opacity-90">Biasanya membalas dalam 5 menit</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition focus:outline-none"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          {/* Area Percakapan */}
          <div className="p-4 bg-gray-50 min-h-[120px] flex flex-col gap-3">
            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-gray-100 text-sm text-gray-700 max-w-[85%] self-start">
              Halo! 👋 Ada yang bisa saya bantu hari ini?
            </div>
          </div>
          
          {/* Area Input Pesan */}
          <div className="p-4 bg-white border-t border-gray-100">
            <input 
              type="text" 
              placeholder="Nama Kamu..." 
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full mb-3 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#25D366] text-sm transition bg-gray-50"
            />
            <textarea 
              rows={2} 
              placeholder="Tulis pesan..." 
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              className="w-full mb-3 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#25D366] text-sm transition bg-gray-50"
            ></textarea>
            <button 
              onClick={kirimPesan}
              className="w-full bg-[#25D366] hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition flex items-center justify-center gap-2 shadow-md"
            >
              <span>Kirim</span>
              <i className="fab fa-whatsapp text-lg"></i>
            </button>
          </div>
        </div>
      )}

      {/* Tombol Bulat Melayang (Saklar Utama) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center text-white hover:bg-green-600 transition-all duration-300 hover:scale-110 focus:outline-none ring-4 ring-white"
        aria-label="Chat WhatsApp"
      >
        <i className={isOpen ? "fas fa-times text-2xl" : "fab fa-whatsapp text-3xl"}></i>
      </button>

    </div>
  );
}