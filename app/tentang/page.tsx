import Link from 'next/link';

export default function TentangSaya() {
  return (
    <main className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-[#0f172a] font-sans">
      
      {/* Ornamen Cahaya Background untuk Efek Glassmorphism */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#1B4D3E] rounded-full mix-blend-screen filter blur-[128px] opacity-60 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-screen filter blur-[128px] opacity-40"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Kepala Halaman */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 tracking-tight">
            Di Balik Layar
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Menyatukan dedikasi pada keilmuan, pengabdian masyarakat, dan kecintaan pada logika teknologi dalam satu ruang dimensi digital.
          </p>
        </div>

        {/* Kisi-kisi Kartu Kaca (Glassmorphism) */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Kartu 1: Pendidikan & Sosial */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#1B4D3E] to-green-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <i className="fas fa-university text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Akademik & Pengabdian</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Berfokus menyelesaikan skripsi sebagai Mahasantri di Ma'had Aly Parabek. Nilai pengabdian diwujudkan melalui program magang di Kantor Urusan Agama (KUA), serta terus berkontribusi bersama 8 rekan solid lainnya sebagai penerima beasiswa BAZNAS Angkatan 7.
            </p>
          </div>

          {/* Kartu 2: Teknologi & Digital */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <i className="fas fa-microchip text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Rekayasa & Sistem</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Mentransformasi rasa penasaran menjadi solusi nyata. Memiliki minat mendalam di arsitektur website development, sekaligus sering menjadi tempat berlabuh untuk urusan troubleshooting perangkat dan kelistrikan servis laptop.
            </p>
          </div>

          {/* Kartu 3: Keseimbangan & Hiburan */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <i className="fas fa-gamepad text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Titik Jeda</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Sebuah sistem membutuhkan pendinginan agar performanya tetap optimal. Di sela-sela penatnya barisan kode dan revisi draf skripsi, menyusun strategi di Marvel Future Fight menjadi ruang penyegaran andalan untuk kembali memfokuskan pikiran.
            </p>
          </div>

        </div>

        {/* Tombol Aksi Balik */}
        <div className="mt-16 text-center">
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-colors shadow-lg">
            <i className="fas fa-arrow-left"></i> Kembali ke Beranda
          </Link>
        </div>

      </div>
    </main>
  );
}