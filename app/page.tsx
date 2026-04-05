import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function Home() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  let posts: any[] = [];
  
  if (fs.existsSync(postsDirectory)) {
    const fileNames = fs.readdirSync(postsDirectory);
    posts = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title,
        date: data.date,
        deskripsi: data.deskripsi,
        // Menyedot data thumbnail. Jika kosong, gunakan gambar default
        thumbnail: data.thumbnail || "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop", 
      };
    });
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-200 min-h-[550px] flex items-center">
          <div className="absolute inset-0 z-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" />
          </div>

          <div className="relative z-10 px-6 py-16 md:px-12 w-full grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
                Belajar Agama <br/> Menguasai <span className="text-[#1B4D3E]">Teknologi</span>.
              </h1>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Catatan Hati. Sudut Pandang Islami. Fixing Laptop. Tiga dunia dalam satu scroll.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#tulisan" className="px-8 py-3 bg-[#1B4D3E] text-white font-semibold rounded-lg hover:bg-[#12382c] transition shadow-lg flex items-center justify-center gap-2">
                  Baca Tulisan
                </Link>
                <Link href="/tentang" className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition shadow flex items-center justify-center gap-2">
                  Perpustakaan Pribadi
                </Link>
              </div>
            </div>

            <div className="relative mx-auto lg:ml-auto w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1B4D3E] to-[#D4AF37] rounded-2xl blur opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="h-32 bg-[#1e293b] flex items-center justify-center"></div>
                <div className="px-6 pb-8 relative">
                  <div className="w-28 h-28 mx-auto -mt-14 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnSx5Nf6Kjg0HZx033juFljVz3WLG11vnOtXnG9zGe49THSrC8s7YTMsJ5kMU_kmLOBYqMFBKNAmrN7aCFm54X7zfRv-6uovna0K5a2QSJts4iaklqfw5bDFuaRm1V8kZdTfQ3vci8q04tIkHZhW4Jbr1VsUmqelDLFUguzJA2JHHgG8xdmw0XMmHZl_w/s320/a.webp" alt="Raihan Faqoth" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-2xl font-bold text-gray-800">Raihan Faqoth</h3>
                    <p className="text-sm text-gray-500">Parabek, Sumatera Barat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="tulisan" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="mb-10 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900 inline-block border-b-4 border-[#1B4D3E] pb-2">Tulisan Terbaru</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/artikel/${post.slug}`} key={post.slug} className="group">
              <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
                
                {/* Mesin Perender Gambar Sampul */}
                <div className="h-48 w-full overflow-hidden relative bg-gray-100">
                  <img 
                    src={post.thumbnail} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow relative">
                  <span className="text-xs font-bold text-[#D4AF37] mb-2 uppercase tracking-wide">{post.date}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1B4D3E] transition-colors">{post.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{post.deskripsi}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}