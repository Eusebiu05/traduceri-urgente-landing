import Link from "next/link";

// 1. Definim "Contractul" (Interfața) pentru datele cardului
interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

// 2. Aplicăm interfața pe argumentele componentei
export const BlogCard = ({ title, excerpt, date, slug }: BlogCardProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      
      {/* Data publicării */}
      <span className="text-sm text-blue-600 font-bold tracking-wider uppercase mb-3 block">
        {date}
      </span>
      
      {/* Titlul articolului */}
      <h3 className="text-xl font-bold text-slate-800 mb-3">
        {title}
      </h3>
      
      {/* Rezumatul / Scurtă descriere */}
      <p className="text-slate-600 mb-5 text-sm leading-relaxed">
        {excerpt}
      </p>
      
      {/* Butonul de citire */}
      <Link 
        href={`/blog/${slug}`} 
        className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors"
      >
        Citește articolul <span className="ml-2">&rarr;</span>
      </Link>
      
    </div>
  );
};