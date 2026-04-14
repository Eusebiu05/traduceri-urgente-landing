"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { CompanyInfo } from "@/data/site-content";
import Link from "next/link";
import { greatVibes } from "@/lib/fonts"; 

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // 1. Am modificat funcția pentru clasele linkurilor
  // - Am înlocuit 'font-bold' cu 'font-medium' pentru o greutate mai vizuală elegantă
  // - Am schimbat albastrul aprins cu nuanța logoului (#1e1b4b) pentru coeziune
  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `text-[15px] font-medium transition-colors ${
      isActive 
        ? "text-[#1e1b4b]" 
        : "text-slate-500 hover:text-[#1e1b4b]"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-row justify-between items-center h-[70px] md:h-[90px]">
          
          {/* LOGO - L-am lăsat intact, cu ajustările tale de font */}
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

          {/* NAVIGARE DESKTOP */}
          {/* 2. Am redus gap-ul de la 8 la 6 pentru a apropia elementele meniului */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/" className={getLinkClass("/")}>Acasă</Link>
            <Link href="/blog" className={getLinkClass("/blog")}>Blog</Link>
            <Link href="/about" className={getLinkClass("/about")}>Despre noi</Link>
            
            <div className="h-5 w-px bg-slate-200 mx-1" />
            
            {/* BUTON CTA */}
            {/* 3. Am rafinat butonul:
                - bg-emerald-600 în loc de green-600 (un verde mai elegant)
                - font-semibold în loc de font-black
                - Am eliminat 'uppercase' pentru o citire mai prietenoasă
                - Am adăugat un icon SVG vectorial în loc de săgeata text '→'
            */}
            <a
              href={`https://wa.me/${CompanyInfo.whatsapp}`}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2"
            >
              Trimite documentul
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </nav>

          {/* MENIU MOBIL (Hamburger) - A rămas în mare parte la fel */}
          <div className="md:hidden flex items-center">
            <button 
              className="flex items-center justify-center bg-slate-50 hover:bg-slate-100 text-slate-900 h-10 w-10 rounded-xl border border-slate-200 transition-all active:scale-90"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Meniu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6 text-[#1e1b4b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <div className="flex flex-col gap-1.5 items-end">
                  <span className="w-5 h-[2px] bg-[#1e1b4b] rounded-full"></span>
                  <span className="w-4 h-[2px] bg-[#1e1b4b] rounded-full"></span>
                  <span className="w-6 h-[2px] bg-[#1e1b4b] rounded-full"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* DROPDOWN MENIU MOBIL */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-2xl absolute w-full left-0 px-8 py-8 flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-300 z-[100]">
          {/* Am rafinat designul meniului pe mobil (fără ALL CAPS, text mai prietenos) */}
          <Link href="/" className="text-lg font-semibold text-slate-800 py-3 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>Acasă</Link>
          <Link href="/blog" className="text-lg font-semibold text-slate-800 py-3 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link href="/about" className="text-lg font-semibold text-slate-800 py-3 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>Despre noi</Link>
          
          <a
            href={`https://wa.me/${CompanyInfo.whatsapp}`}
            className="bg-emerald-600 text-white px-4 py-4 rounded-xl text-center font-semibold mt-4 shadow-md flex justify-center items-center gap-3 transition-transform active:scale-95"
          >
             <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z" />
             </svg>
            Trimite pe WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};