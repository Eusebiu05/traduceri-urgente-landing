import { Header } from "@/components/Header";
import { BlogCard } from "@/components/BlogCard";

// Lista noastră de articole
const articles = [
  {
    id: 1,
    title: "Cum să traduci rapid actele auto aduse din Germania",
    excerpt: "Află care sunt documentele obligatorii pe care trebuie să le traduci pentru înmatricularea rapidă a autoturismului tău.",
    date: "12 Martie 2026",
    slug: "traducere-acte-auto-germania",
  },
  {
    id: 2,
    title: "Contractul de Vânzare-Cumpărare auto: Ce trebuie să știi",
    excerpt: "Evită cele mai comune greșeli la completarea și traducerea contractului de vânzare-cumpărare auto.",
    date: "10 Ianuarie 2026",
    slug: "ghid-contract-vanzare-cumparare",
  },
  {
    id: 3,
    title: "Cât durează și cât costă traducerea unui talon auto?",
    excerpt: "Ghid complet despre prețuri, termene de execuție și unde trebuie depuse documentele traduse și legalizate.",
    date: "05 Septembrie 2025",
    slug: "pret-timp-traducere-talon",
  }
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* 1. Aici stă Header-ul tău în partea de sus */}
      <Header />

      {/* 2. Aici stă restul conținutului paginii (sub Header) */}
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          
          {/* Titlul Paginii */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-black text-slate-800 mb-4">
              Noutăți și Sfaturi
            </h1>
            <p className="text-slate-600 text-lg">
              Ghiduri utile despre traduceri, înmatriculări și acte auto.
            </p>
          </div>

          {/* Grila cu Carduri */}
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