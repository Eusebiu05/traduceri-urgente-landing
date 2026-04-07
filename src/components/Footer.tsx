// src/components/Footer.tsx
import { CompanyInfo } from "@/data/site-content";
import Link from "next/link";

export const Footer = () => {
  return (
    // SCHIMBARE: Fundal slate-950 (negru profund) pentru contrast maxim
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 px-4 border-t border-slate-900 relative overflow-hidden">
      
      {/* Model de fundal subtil, inspirat de finețea ZenMed */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('/circuit-board.svg')] bg-center"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 relative z-10">
        
        {/* Identitate Firmă */}
        <div className="space-y-4">
          <Link href="/" className="font-black text-3xl tracking-tighter text-white italic uppercase block leading-none">
            Traduceri <span className="text-blue-500">Urgente</span>
          </Link>
          <div className="text-xs space-y-1 font-medium text-slate-300">
            <p className="text-white font-bold uppercase">{CompanyInfo.name}</p>
            <p>Administrator: {CompanyInfo.admin}</p>
            <p>CUI: {CompanyInfo.cui}</p>
            <p>Reg. Com: {CompanyInfo.j}</p>
          </div>
        </div>

        {/* Navigare Rapidă */}
        <div className="space-y-5">
          <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] border-l-2 border-blue-500 pl-3">
            Navigare
          </h4>
          <nav className="flex flex-col gap-3 text-sm font-bold">
            <Link href="/" className="hover:text-blue-400 transition-colors italic">Acasă</Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors italic">Despre Noi</Link>
            <a href={`https://wa.me/${CompanyInfo.whatsapp}`} className="text-green-500 hover:text-green-400 transition-colors italic">
              Trimite Acte pe WhatsApp
            </a>
          </nav>
        </div>

        {/* Feedback */}
        <div className="space-y-5 text-center md:text-left">
          <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] border-l-2 border-blue-500 pl-3">
            Opinia Ta
          </h4>
          <p className="text-xs italic leading-relaxed text-slate-300">
            Ai lucrat cu noi? Ajută-ne enorm cu un review pe Google:
          </p>
          <a 
            href={CompanyInfo.googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl text-xs font-black hover:bg-slate-800 transition-all border border-slate-800 shadow-xl active:scale-95"
          >
            ⭐ LASĂ UN GOOGLE REVIEW
          </a>
        </div>

      </div>

      {/* Bottom Bar - MODIFICAT PENTRU VIZIBILITATE MAXIMĂ */}
      <div className="max-w-6xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] relative z-10">
        
        {/* Drepturi de autor - Textul e acum slate-600 pentru a fi subtil */}
        <div className="font-bold text-slate-600 uppercase tracking-widest text-center md:text-left">
          © 2026 {CompanyInfo.name} | Gata în 1-2 ore
        </div>
        
        {/* SEMNĂTURĂ PFA - ACUM ESTE EXTREM DE VIZIBILĂ ȘI FINUȚĂ */}
        <div className="group flex items-center gap-3 px-6 py-3 bg-black/60 rounded-full border border-white/10 shadow-2xl transform transition-all hover:border-blue-500/30">
          <span className="font-bold text-slate-500 uppercase tracking-widest italic text-[10px]">Realizat de:</span>
          {/* Separator vizual finuț */}
          <div className="h-4 w-[1px] bg-white/10 group-hover:bg-blue-500/30 transition-colors"></div>
          {/* Textul numelui este acum ALB SATURAT ȘI GROS (font-black) */}
          <span className="font-black text-white uppercase tracking-tighter text-sm group-hover:text-blue-400 transition-colors">
            Făgăteanu Dumitru Eusebiu PFA
          </span>
        </div>
      </div>
    </footer>
  );
};