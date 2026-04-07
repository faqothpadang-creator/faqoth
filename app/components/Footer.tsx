export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-medium opacity-80 tracking-wide">
          © {new Date().getFullYear()} Raihan Faqoth. Dibuat dengan <span className="text-red-500 animate-pulse">❤️</span> dan Kopi.
        </p>
      </div>
    </footer>
  );
}