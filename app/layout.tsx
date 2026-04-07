import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import BackToTop from './components/BackToTop';
import WhatsAppWidget from './components/WhatsAppWidget';
import { Inter } from 'next/font/google';

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
      
      <body className={`${inter.className} bg-white antialiased`}>
        
        {/* 1. Navbar: Selalu di atas */}
        <Navbar />

        {/* 2. Main: Ini adalah wadah untuk isi artikel/halaman Anda */}
        <main className="min-h-screen pt-24">
          {children}
        </main>

        {/* 3. Footer: Penutup di bagian paling bawah halaman */}
        <Footer />

        {/* 4. Komponen Melayang: Tidak terikat konten, muncul di atas semua elemen */}
        <SearchModal />
        <BackToTop />
        <WhatsAppWidget />

      </body>
    </html>
  );
}