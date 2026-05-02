import Link from "next/link";
import { Header } from "@/components/Header";
// SCHIMBĂM AICI: Importăm motorul de Markdown în loc de articles.ts
import { getPostBySlug } from "@/lib/markdown";
import { Footer } from '@/components/Footer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  
  let article;
  try {
    // Încearcă să citească fișierul numere-rosii.md
    article = getPostBySlug(resolvedParams.slug);
  } catch (error) {
    // Dacă nu găsește fișierul .md, article rămâne null
    article = null;
  }

  // Dacă nu există articolul, afișează 404-ul tău personalizat
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-3xl font-black text-slate-800 mb-4">Articolul nu a fost găsit</h1>
        <Link href="/blog" className="text-blue-600 font-bold hover:underline">
          &larr; Înapoi la blog
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article className="max-w-3xl mx-auto px-4 py-20">
        <Link href="/blog" className="text-blue-600 font-bold mb-10 inline-block">
          &larr; Înapoi la blog
        </Link>
        <header className="mb-12 text-slate-800">
          <span className="text-sm font-bold uppercase mb-4 block text-blue-600">
            {article.date}
          </span>
          <h1 className="text-4xl md:text-5xl font-black italic uppercase leading-tight">
            {article.title}
          </h1>
        </header>
        
        {/* Aici injectăm conținutul din .md */}
        {/* Am adăugat clasele "prose" de la Tailwind ca să formateze frumos listele și paragrafele */}
        <div 
          className="text-lg text-slate-700 leading-relaxed prose prose-blue max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }} 
        />
        
      </article>
      <Footer />
    </main>
  );
}