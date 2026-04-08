"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { CompanyInfo } from "@/data/site-content";
import Link from "next/link";
// Importăm fontul inițializat de server!
import { greatVibes } from "@/lib/fonts"; 

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `text-sm font-bold transition-colors ${
      isActive ? "text-blue-700" : "text-slate-600 hover:text-blue-700"
    }`;
  };

  // AM ȘTERS INIȚIALIZAREA DE AICI (const greatVibes = Great_Vibes({...}))

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-row justify-between items-center h-[70px] md:h-[90px]">
          
          {/* LOGO */}
          <Link 
            href="/" 
            className={`${greatVibes.className} flex flex-col items-start justify-center group select-none py-2`}
          >
            <span className="text-4xl md:text-5xl text-[#1e1b4b] group-hover:text-blue-800 transition-colors drop-shadow-sm leading-none pl-2 md:pl-4">
              Traduceri
            </span>
            <span className="text-4xl md:text-5xl text-[#1e1b4b] group-hover:text-blue-800 transition-colors drop-shadow-sm leading-none -mt-4 md:-mt-6 ml-14 md:ml-20">
              Urgente
            </span>
          </Link>

          {/* ... RESTUL CODULUI (Navigarea Desktop și Meniul Mobil rămân neschimbate) ... */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/" className={getLinkClass("/")}>Acasă</Link>
            <Link href="/blog" className={getLinkClass("/blog")}>Blog</Link>
            <Link href="/about" className={getLinkClass("/about")}>Despre noi</Link>
            <div className="h-4 w-px bg-slate-200" />
            <a
              href={`https://wa.me/${CompanyInfo.whatsapp}`}
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-2.5 rounded-full text-sm font-black transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 uppercase tracking-tight"
            >
              Trimite documentul →
            </a>
          </nav>

          <div className="md:hidden flex items-center">
             {/* Buton meniu */}
            <button 
              className="flex items-center justify-center bg-slate-50 hover:bg-slate-100 text-slate-900 h-10 w-10 rounded-xl border border-slate-200 transition-all active:scale-90"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Meniu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <div className="flex flex-col gap-1 items-end">
                  <span className="w-6 h-[2px] bg-blue-700 rounded-full"></span>
                  <span className="w-4 h-[2px] bg-blue-700 rounded-full"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-2xl absolute w-full left-0 px-8 py-10 flex flex-col gap-5 animate-in fade-in slide-in-from-top-4 duration-300 z-[100]">
          <Link href="/" className="text-xl font-black text-slate-900 text-center py-3 border-b border-slate-50 tracking-tight" onClick={() => setIsMenuOpen(false)}>ACASĂ</Link>
          <Link href="/blog" className="text-xl font-black text-slate-900 text-center py-3 border-b border-slate-50 tracking-tight" onClick={() => setIsMenuOpen(false)}>BLOG</Link>
          <Link href="/about" className="text-xl font-black text-slate-900 text-center py-3 border-b border-slate-50 tracking-tight" onClick={() => setIsMenuOpen(false)}>DESPRE NOI</Link>
          <a
            href={`https://wa.me/${CompanyInfo.whatsapp}`}
            className="bg-green-600 text-white px-4 py-5 rounded-2xl text-center font-black mt-6 shadow-xl flex justify-center items-center gap-3 uppercase tracking-wider transition-transform active:scale-95"
          >
             <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z" />
             </svg>
            Trimite pe WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};