import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Mesin ini akan menyala saat ada yang memanggil dari depan
export async function GET() {
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
        deskripsi: data.deskripsi,
      };
    });
  }

  // Mengirim data ke pengunjung dalam format JSON yang sangat ringan
  return NextResponse.json(posts);
}