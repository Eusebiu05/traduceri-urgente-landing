import Link from "next/link";
import { Header } from "@/components/Header";

// 1. Îi spunem lui TypeScript exact ce este 'params'
// În Next.js 15/16, params este un Promise (vine asincron)
interface PageProps {
  params: Promise<{ slug: string }>;
}

const articles = [
  {
    id: 1,
    title: "Cum să traduci rapid actele auto aduse din Germania",
    content: "Conținut detaliat...",
    date: "12 Martie 2026",
    slug: "traducere-acte-auto-germania",
  },
  {
    id: 2,
    title: "Contractul de Vânzare-Cumpărare auto: Ce trebuie să știi",
    content: "Conținut detaliat...",
    date: "10 Ianuarie 2026",
    slug: "ghid-contract-vanzare-cumparare",
  },
  {
    id: 3,
    title: "Cât durează și cât costă traducerea unui talon auto?",
    content: "Conținut detaliat...",
    date: "05 Septembrie 2025",
    slug: "pret-timp-traducere-talon",
  }
];

// 2. Aplicăm tipul 'PageProps' pe funcție
export default async function ArticlePage({ params }: PageProps) {
  
  // 3. 'await' este obligatoriu aici pentru a citi slug-ul
  const resolvedParams = await params;
  
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
        <div className="text-lg text-slate-700 leading-relaxed">
          <p>{article.content}</p>
        </div>
      </article>
    </main>
  );
}