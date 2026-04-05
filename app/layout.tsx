import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppWidget from "./components/WhatsAppWidget";
import SearchModal from "./components/SearchModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raihan Faqoth",
  description: "Website modern super canggih",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Taktik Bypass: Menanamkan FontAwesome langsung ke HTML */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        {/* Navbar dipasang di luar agar selalu muncul */}
        <Navbar />
        
        {/* pt-24 memberikan ruang agar konten tidak tertutup Navbar kaca */}
        <main className="pt-24">
          {children}
        </main>
        <SearchModal />
      {/* Widget WhatsApp ditanam di luar tag main agar selalu melayang */}
        <WhatsAppWidget />
      </body>
    </html>
  );
}