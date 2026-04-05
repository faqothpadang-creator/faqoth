import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import ModeKitabButton from './ModeKitabButton';
import DaftarIsi from './DaftarIsi'; // Memanggil Komponen Daftar Isi

export default async function HalamanArtikel(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    return (
      <main className="min-h-screen pt-32 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Tulisan Tidak Ditemukan</h1>
      </main>
    );
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  const htmlContent = marked(content);

  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200); 

  const badgeColor = readingTime <= 3 ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800';
  const iconFlash = readingTime <= 3 ? 'fas fa-bolt' : 'far fa-clock';

  return (
    <main className="min-h-screen pt-16 pb-24 transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="text-center mb-10 border-b-2 border-gray-100 pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            {data.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
            <span className="text-gray-500">
              <i className="far fa-calendar-alt mr-2"></i>{data.date}
            </span>
            <span className={`px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm ${badgeColor}`}>
              <i className={iconFlash}></i> Estimasi: {readingTime} Menit
            </span>
          </div>
        </div>

        {/* Mesin Daftar Isi diletakkan persis sebelum konten artikel */}
        <DaftarIsi />

        <article 
          className="prose prose-lg md:prose-xl max-w-none text-justify leading-loose"
          dangerouslySetInnerHTML={{ __html: htmlContent }} 
        />

        <ModeKitabButton />
        
      </div>
    </main>
  );
}