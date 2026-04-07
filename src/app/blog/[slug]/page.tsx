import Link from "next/link";
import { Header } from "@/components/Header";

// Lista noastră de articole
const articles = [
  {
    id: 1,
    title: "Cum să traduci rapid actele auto aduse din Germania",
    content: "Aici va veni textul tău lung și detaliat despre procesul de traducere pentru mașinile din Germania. Poți explica pas cu pas de ce acte este nevoie, unde trebuie depuse și la ce capcane să fie atenți clienții.",
    date: "12 Octombrie 2023",
    slug: "traducere-acte-auto-germania",
  },
  {
    id: 2,
    title: "Contractul de Vânzare-Cumpărare auto: Ce trebuie să știi",
    content: "Un ghid complet despre completarea corectă a contractelor de vânzare-cumpărare. Aici vei explica importanța detaliilor și cum o simplă greșeală poate întârzia înmatricularea.",
    date: "28 Septembrie 2023",
    slug: "ghid-contract-vanzare-cumparare",
  },
  {
    id: 3,
    title: "Cât durează și cât costă traducerea unui talon auto?",
    content: "Transparența este cheia! Explică-le clienților tăi de ce durează 1-2 ore, care sunt costurile pentru diferite limbi și de ce serviciul tău este cea mai bună alegere.",
    date: "05 Septembrie 2023",
    slug: "pret-timp-traducere-talon",
  }
];

// 1. Am adăugat 'async' în fața funcției
export default async function ArticlePage({ params }) {
  
  // 2. Așteptăm să se încarce parametrii din link
  const resolvedParams = await params;
  
  // 3. Acum putem folosi 'resolvedParams.slug' în siguranță
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-3xl font-black text-slate-800 mb-4">Articolul nu a fost găsit</h1>
        <Link href="/blog" className="text-blue-600 font-bold hover:underline">
          &larr; Întoarce-te la blog
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <article className="max-w-3xl mx-auto px-4 py-20">
        
        <Link href="/blog" className="text-blue-600 font-bold mb-10 inline-block hover:underline transition-all hover:-translate-x-1">
          &larr; Înapoi la toate articolele
        </Link>
        
        <header className="mb-12">
          <span className="text-sm text-slate-500 font-bold tracking-wider uppercase mb-4 block">
            {article.date}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 leading-tight">
            {article.title}
          </h1>
        </header>
        
        <div className="text-lg text-slate-700 leading-relaxed">
          <p>{article.content}</p>
          
          <p className="mt-6">
            Traducerile autorizate sunt un pas esențial în procesul de înmatriculare a oricărui vehicul adus din afara țării. Asigură-te că lucrezi mereu cu profesioniști recunoscuți de Ministerul Justiției pentru a evita respingerea dosarului de către autorități.
          </p>
        </div>

      </article>
    </main>
  );
}