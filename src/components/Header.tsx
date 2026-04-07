"use client"; // Adăugat pentru a putea folosi useState și usePathname

import { useState } from "react";
import { usePathname } from "next/navigation";
import { CompanyInfo } from "@/data/site-content";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Pentru a ști pe ce pagină ne aflăm

  // Funcție pentru a stabili dacă un link este activ
  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `text-sm font-medium transition-colors ${
      isActive ? "text-blue-700" : "text-slate-500 hover:text-blue-700"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-[70px]"> {/* Am mărit puțin înălțimea pentru respiro */}

        {/* LOGO */}
        <Link href="/" className="flex items-baseline gap-1.5 group">
          <span className="font-extrabold text-2xl text-blue-700 italic tracking-tight group-hover:text-blue-800 transition-colors">
            Traduceri
          </span>
          <span className="font-extrabold text-2xl text-slate-900 italic tracking-tight">
            Urgente
          </span>
        </Link>

        {/* NAV — Desktop */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className={getLinkClass("/")}>
            Acasă
          </Link>
          <Link href="/blog" className={getLinkClass("/about")}>
            Blog
          </Link>
          <Link href="/about" className={getLinkClass("/about")}>
            Despre noi
          </Link>

          <div className="h-4 w-px bg-slate-200" />

          {/* Email */}
          <a
            href={`mailto:${CompanyInfo.email}`}
            className="text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors"
          >
            {CompanyInfo.email}
          </a>

          {/* CTA - WhatsApp (Îmbunătățit vizual) */}
          <a
            href={`https://wa.me/${CompanyInfo.whatsapp}`}
            className="bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap flex items-center gap-2"
          >
            Trimite documentul &rarr;
          </a>
        </nav>

        {/* HAMBURGER — Mobil (Acum este funcțional) */}
        <button 
          className="md:hidden text-slate-700 p-2 rounded-md hover:bg-slate-100 transition-colors" 
          aria-label="Deschide meniu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            // Iconiță "X" când meniul e deschis
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Iconiță Hamburger când e închis
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

      </div>

      {/* MENIU DROPDOWN — Mobil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full left-0 px-6 py-4 flex flex-col gap-4">
          <Link 
            href="/" 
            className="text-base font-medium text-slate-700 hover:text-blue-700"
            onClick={() => setIsMenuOpen(false)} // Închide meniul la click
          >
            Acasă
          </Link>
          <Link 
            href="/" 
            className="text-base font-medium text-slate-700 hover:text-blue-700"
            onClick={() => setIsMenuOpen(false)} // Închide meniul la click
          >
            Blog
          </Link>
          <Link 
            href="/about" 
            className="text-base font-medium text-slate-700 hover:text-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Despre noi
          </Link>
          
          <div className="h-px w-full bg-slate-100 my-1" />
          
          <a
            href={`mailto:${CompanyInfo.email}`}
            className="text-base font-medium text-slate-700"
          >
            {CompanyInfo.email}
          </a>
          
          <a
            href={`https://wa.me/${CompanyInfo.whatsapp}`}
            className="bg-green-600 text-white px-4 py-3 rounded-lg text-center font-bold mt-2"
          >
            Trimite documentul pe WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};