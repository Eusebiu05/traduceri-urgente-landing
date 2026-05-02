// src/lib/markdown.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getPostBySlug(slug: string) {
  // Caută fișierul cu numele slug-ului (ex: numere-rosii.md)
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // matter(fileContents) separă metadata (data) de conținutul efectiv (content)
  const { data, content } = matter(fileContents);

  return {
    slug,
    // AM ADAUGAT sortDate AICI ÎN LISTĂ:
    ...(data as { title: string; date: string; sortDate?: string; image?: string; excerpt: string; category: string; readTime: string }),
    content,
  };
}

// Această funcție o folosești pe pagina principală de blog ca să iei toate articolele
export function getAllPosts() {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs.map((slug) => getPostBySlug(slug.replace(/\.md$/, '')));
  
  // SORTAREA AUTOMATĂ: Cel mai nou articol primul
  return posts.sort((a, b) => {
    // Luăm sortDate-ul (ex: "2026-04-21") și îl transformăm în timp real (milisecunde)
    // Dacă din greșeală uiți să pui sortDate într-un fișier, încearcă să folosească 'date'
    const dateA = new Date(a.sortDate || a.date).getTime();
    const dateB = new Date(b.sortDate || b.date).getTime();
    
    // b - a înseamnă descrescător (cele mai mari/recente la început)
    return dateB - dateA;
  });
}