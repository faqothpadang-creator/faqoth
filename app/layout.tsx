import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import BackToTop from './components/BackToTop';
import WhatsAppWidget from './components/WhatsAppWidget';
import { Inter } from 'next/font/google';
import AutoFormatArab from './components/AutoFormatArab';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* FontAwesome untuk Ikon */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      
     {/* KODE BARU: Menambahkan dark:bg-[#0f172a] dan efek transisi halus */}
      <body className={`${inter.className} bg-white dark:bg-[#0f172a] text-gray-900 dark:text-[#f8fafc] antialiased transition-colors duration-500`}>
        
        {/* 1. Navbar: Selalu di atas */}
        <Navbar />

        {/* 2. Main: Wadah untuk isi artikel/halaman Anda */}
        <main className="min-h-screen pt-24">
          {children}
        </main>

        {/* 3. Footer: Penutup di bagian paling bawah halaman */}
        <Footer />

        {/* 4. Kelompok tombol melayang yang akan ikut sembunyi di mode kitab */}
        <div className="tombol-melayang">
          <SearchModal />
          <BackToTop />
          {/* Untuk kerapian, saya asumsikan WhatsAppWidget diatur CSS-nya di kiri bawah di file-nya */}
          <WhatsAppWidget />
          <AutoFormatArab />
        </div>

      </body>
    </html>
  );
}