// src/components/Footer.tsx
import { CompanyInfo } from "@/data/site-content";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      {/* ======================================================== */}
      {/* 1. FOOTER DESKTOP (Codul tău EXACT cum l-ai lăsat)       */}
      {/* ======================================================== */}
      <div className="hidden md:block">
        <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 px-4 border-t border-slate-900 relative overflow-hidden">
          
          <div className="absolute inset-0 opacity-[0.02] bg-[url('/circuit-board.svg')] bg-center"></div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 relative z-10">
            
            <div className="space-y-4">
              <Link href="/" className="font-black text-3xl tracking-tighter text-white italic uppercase block leading-none">
                Traduceri <span className="text-blue-500">Urgente</span>
              </Link>
              <div className="text-xs space-y-1 font-medium text-slate-300">
                <p className="text-white font-bold uppercase">{CompanyInfo.name}</p>
                <p>Administrator: {CompanyInfo.admin}</p>
                <p>CUI: {CompanyInfo.cui}</p>
                <p>Reg. Com: {CompanyInfo.j}</p>
                <p>Sediu: {CompanyInfo.sediu}</p>
                <p>Telefon: {CompanyInfo.phone}</p>
                <p>Email: {CompanyInfo.email}</p>
              </div>
            </div>

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

          <div className="max-w-6xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] relative z-10">
            <div className="font-bold text-slate-600 uppercase tracking-widest text-center md:text-left">
              © 2026 {CompanyInfo.name} | Gata în 1-2 ore
            </div>
            
            <div className="group flex items-center gap-3 px-6 py-3 bg-black/60 rounded-full border border-white/10 shadow-2xl transform transition-all hover:border-blue-500/30">
              <span className="font-bold text-slate-500 uppercase tracking-widest italic text-[10px]">Realizat de:</span>
              <div className="h-4 w-[1px] bg-white/10 group-hover:bg-blue-500/30 transition-colors"></div>
              <span className="font-black text-white uppercase tracking-tighter text-sm group-hover:text-blue-400 transition-colors">
                Făgăteanu Dumitru Eusebiu PFA
              </span>
            </div>
          </div>
        </footer>
      </div>

      {/* ======================================================== */}
      {/* 2. FOOTER MOBIL (Structură nouă cerută de tine)          */}
      {/* ======================================================== */}
      <footer className="md:hidden bg-slate-950 text-slate-300 pt-12 pb-8 px-6 border-t border-slate-900">
        <div className="flex flex-col gap-8">
          <Link href="/" className="font-black text-2xl tracking-tighter text-white italic uppercase block leading-none">
                Traduceri <span className="text-blue-500">Urgente</span>
              </Link>
          {/* SECȚIUNEA 1: Navigare */}
          
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-black tracking-widest uppercase text-sm flex items-center gap-2">
              <span className="w-1.5 h-4 bg-blue-500 rounded-full"></span>
              Navigare
            </h4>
            <nav className="flex flex-col gap-4 text-base font-bold text-slate-300 pl-3">
              <Link href="/">Acasă</Link>
              <Link href="/about">Despre Noi</Link>
              <a 
                href={`https://wa.me/${CompanyInfo.whatsapp}`}
                className="text-green-500 mt-2 flex items-center gap-2 uppercase tracking-wide text-sm"
              >
                Trimite Acte pe WhatsApp
              </a>
            </nav>
          </div>

          {/* SECȚIUNEA 2: Opinia Ta */}
          <div className="flex flex-col gap-4 border-t border-slate-800/50 pt-6">
            <h4 className="text-white font-black tracking-widest uppercase text-sm flex items-center gap-2">
              <span className="w-1.5 h-4 bg-blue-500 rounded-full"></span>
              Opinia Ta
            </h4>
            <p className="text-sm text-slate-400 pl-3">
              Ai lucrat cu noi? Ajută-ne cu un review pe Google!
            </p>
            <a 
              href={CompanyInfo.googleReviewLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-slate-800 border border-slate-700 px-6 py-4 text-sm font-bold text-white uppercase tracking-wider"
            >
              <span className="text-yellow-400 text-lg">★</span>
              Lasă un Google Review
            </a>
          </div>

          {/* SECȚIUNEA 3: Contact */}
          <div className="flex flex-col gap-4 border-t border-slate-800/50 pt-6">
            <h4 className="text-white font-black tracking-widest uppercase text-sm flex items-center gap-2 mb-2">
              <span className="w-1.5 h-4 bg-blue-500 rounded-full"></span>
              Contact
            </h4>
            
            <div className="pl-3 space-y-4">
              
              
              <div className="space-y-1 text-sm text-slate-400">
                <p className="font-bold text-slate-300 uppercase">{CompanyInfo.name}</p>
                <p>Admin: {CompanyInfo.admin}</p>
                <p>CUI: {CompanyInfo.cui}</p>
                <p>Reg. Com: {CompanyInfo.j}</p>
                <p>Sediu: {CompanyInfo.sediu}</p>
              </div>

              <div className="space-y-3 pt-2 text-sm font-medium border-t border-slate-800/50">
                <a href={`tel:${CompanyInfo.phone}`} className="flex items-center gap-2 text-white">
                  <span className="text-blue-500 font-black tracking-widest uppercase text-xs">Tel:</span>
                  {CompanyInfo.phone}
                </a>
                <a href={`mailto:${CompanyInfo.email}`} className="flex items-center gap-2 text-white">
                  <span className="text-blue-500 font-black tracking-widest uppercase text-xs">Email:</span>
                  {CompanyInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* COPYRIGHT & SEMNĂTURĂ (Mobil) */}
          <div className="pt-8 mt-4 border-t border-slate-800/50 flex flex-col gap-4 items-center">
            <div className="text-xs text-slate-500 text-center font-medium">
              <p>© {new Date().getFullYear()} {CompanyInfo.name}.</p>
            </div>
            
            <div className="flex items-center gap-2 px-5 py-2 bg-black/60 rounded-full border border-white/10">
              <span className="font-bold text-slate-500 uppercase tracking-widest italic text-[9px]">Realizat de:</span>
              <div className="h-3 w-[1px] bg-white/10"></div>
              <span className="font-black text-white uppercase tracking-tighter text-xs">
                Făgăteanu Dumitru Eusebiu PFA
              </span>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};