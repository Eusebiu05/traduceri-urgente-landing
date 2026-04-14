// Fișier: app/blog/[slug]/page.tsx

import Link from "next/link";
import { Header } from "@/components/Header";
// IMPORTĂM LISTA CENTRALIZATĂ
import { articles } from "@/data/articles";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  
  // Acum caută în fișierul central 'articles.ts'
  const article = articles.find((a) => a.slug === resolvedParams.slug);

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
        
        {/* AICI ESTE MAGIA: Randăm conținutul HTML din articles.ts */}
        <div 
          className="text-lg text-slate-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.content }} 
        />
        
      </article>
    </main>
  );
}