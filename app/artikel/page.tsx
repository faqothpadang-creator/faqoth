import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function IndeksArtikel() {
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
        // MESIN GAMBAR: Mengambil data thumbnail dari file .md
        thumbnail: data.thumbnail || "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop", 
      };
    });
    
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Perpustakaan <span className="text-[#1B4D3E]">Tulisan</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Kumpulan catatan hati, sudut pandang Islami, dan dokumentasi teknis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/artikel/${post.slug}`} key={post.slug} className="group">
              <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2">
                
                {/* BAGIAN GAMBAR: Sekarang sudah sinkron dengan Beranda */}
                <div className="h-48 w-full overflow-hidden bg-gray-100 relative">
                  <img 
                    src={post.thumbnail} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] mb-3 uppercase tracking-wider">
                    <i className="far fa-calendar-alt"></i> {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#1B4D3E] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.deskripsi}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <i className="fas fa-folder-open text-6xl text-gray-300 mb-4"></i>
            <p className="text-gray-500 text-lg">Belum ada tulisan di perpustakaan ini.</p>
          </div>
        )}
        
      </div>
    </main>
  );
}