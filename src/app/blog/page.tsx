// Fișier: app/blog/page.tsx

import { Header } from "@/components/Header";
import BlogCard from "@/components/BlogCard";
// IMPORTĂM LISTA CENTRALIZATĂ (Ajustează calea dacă ai pus fișierul în altă parte)
import { articles } from "@/data/articles"; 

export default function Blog() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <div className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl font-black text-slate-800 mb-4">
              Noutăți și Sfaturi
            </h1>
            <p className="text-slate-600 text-lg">
              Ghiduri utile despre traduceri, înmatriculări și acte auto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <BlogCard 
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                slug={article.slug}
              />
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}