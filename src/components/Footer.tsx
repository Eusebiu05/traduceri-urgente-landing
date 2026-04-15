// src/components/Footer.tsx
"use client";
import { CompanyInfo } from "@/data/site-content";
import Link from "next/link";

export const Footer = () => {
  // Mesajul predefinit pentru butoanele de WhatsApp din Footer
  const whatsappMessage = encodeURIComponent("Bună ziua! Doresc o ofertă pentru o traducere autorizată. Vă trimit documentele mai jos:");

  return (
    <>
      {/* ======================================================== */}
      {/* 1. FOOTER DESKTOP (Varianta Luminoasă / Light Premium) */}
      {/* ======================================================== */}
      <div className="hidden md:block">
        <footer className="bg-slate-50 pt-20 pb-10 px-4 border-t border-slate-200 relative overflow-hidden">
          
          {/* Un glow subtil albastru deschis în fundal pentru a păstra efectul premium */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-32 bg-blue-100 blur-[100px] rounded-full pointer-events-none"></div>

          {/* === MODIFICARE DESIGN PENTRU SIMETRIE === */}
          <div className="max-w-5xl mx-auto mb-16 relative z-10 flex flex-col items-center gap-12">
            
            {/* LOGO MUTAT SUS ȘI CENTRAT: Oglindește logo-ul din header */}
            <Link href="/" className="font-black text-3xl tracking-tighter text-slate-900 uppercase leading-none hover:opacity-80 transition-opacity">
              Traduceri <span className="text-blue-600">Urgente</span>
            </Link>

            {/* GRILĂ PENTRU INFORMAȚII: Acum 2 coloane mult mai echilibrate */}
            <div className="w-full grid md:grid-cols-2 gap-12 items-start">
              
              {/* COLOANA 1: SC Info (Mai scurtă acum) */}
              <div className="space-y-6">
                <div className="text-[13px] space-y-2.5 font-medium text-slate-600">
                  <p className="text-slate-900 font-bold uppercase tracking-wider text-sm mb-4">{CompanyInfo.name}</p>
                  <p><span className="text-slate-400">Administrator:</span> {CompanyInfo.admin}</p>
                  <p><span className="text-slate-400">CUI:</span> {CompanyInfo.cui}</p>
                  <p><span className="text-slate-400">Reg. Com:</span> {CompanyInfo.j}</p>
                  <p><span className="text-slate-400">Sediu:</span> {CompanyInfo.sediu}</p>
                  <p className="pt-2"><span className="text-slate-400">Telefon:</span> <a href={`tel:${CompanyInfo.phone}`} className="hover:text-blue-600 transition-colors font-bold text-slate-700">{CompanyInfo.phone}</a></p>
                  <p><span className="text-slate-400">Email:</span> <a href={`mailto:${CompanyInfo.email}`} className="hover:text-blue-600 transition-colors font-bold text-slate-700">{CompanyInfo.email}</a></p>
                </div>
              </div>

              {/* COLOANA 2: Navigare (Centrată pe jumătatea ei) */}
              <div className="space-y-6 md:justify-self-center">
                <h4 className="text-slate-900 text-xs font-black uppercase tracking-[0.2em] border-l-2 border-blue-500 pl-3">
                  Navigare
                </h4>
                <nav className="flex flex-col gap-4 text-sm font-bold">
                  <Link href="/" className="text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all">Acasă</Link>
                  <Link href="/about" className="text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all">Despre Noi</Link>
                  
                  <a 
                    href={`https://wa.me/${CompanyInfo.whatsapp}?text=${whatsappMessage}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-500 hover:translate-x-1 transition-all pt-2"
                  >
                    Trimite Acte pe WhatsApp ↗
                  </a>
                </nav>
              </div>
              
              {/* --- COLOANA 3: Review CTA (Rămâne ascunsă) --- */}
            </div>
          </div>

          {/* BARĂ JOS (Neschimbată) */}
          <div className="max-w-5xl mx-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] relative z-10">
            <div className="font-semibold text-slate-400 uppercase tracking-widest text-center md:text-left">
              © {new Date().getFullYear()} {CompanyInfo.name} | Gata în 1-2 ore
            </div>
            
            <div className="group flex items-center gap-3 px-5 py-2.5 bg-white rounded-full border border-slate-200 shadow-sm transform transition-all hover:border-blue-300 hover:bg-slate-50">
              <span className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Realizat de:</span>
              <div className="h-3 w-[1px] bg-slate-200 group-hover:bg-blue-300 transition-colors"></div>
              <span className="font-black text-slate-700 uppercase tracking-tight text-xs group-hover:text-blue-600 transition-colors">
                Făgăteanu Dumitru Eusebiu PFA
              </span>
            </div>
          </div>
        </footer>
      </div>

      {/* ======================================================== */}
      {/* 2. FOOTER MOBIL (Varianta Luminoasă) - Neschimbat        */}
      {/* ======================================================== */}
      <footer className="md:hidden bg-slate-50 pt-12 pb-8 px-6 border-t border-slate-200">
        <div className="flex flex-col gap-8">
          <Link href="/" className="font-black text-2xl tracking-tighter text-slate-900 uppercase block leading-none">
            Traduceri <span className="text-blue-600">Urgente</span>
          </Link>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-900 font-black tracking-widest uppercase text-sm flex items-center gap-2">
              <span className="w-1.5 h-4 bg-blue-600 rounded-full"></span>
              Navigare
            </h4>
            <nav className="flex flex-col gap-4 text-base font-bold text-slate-600 pl-3">
              <Link href="/">Acasă</Link>
              <Link href="/about">Despre Noi</Link>
              
              <a 
                href={`https://wa.me/${CompanyInfo.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 mt-2 flex items-center gap-2 uppercase tracking-wide text-sm"
              >
                Trimite Acte pe WhatsApp
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-4 border-t border-slate-200 pt-6">
            <h4 className="text-slate-900 font-black tracking-widest uppercase text-sm flex items-center gap-2 mb-2">
              <span className="w-1.5 h-4 bg-blue-600 rounded-full"></span>
              Contact
            </h4>
            
            <div className="pl-3 space-y-4">
              <div className="space-y-1 text-sm text-slate-500">
                <p className="font-bold text-slate-800 uppercase">{CompanyInfo.name}</p>
                <p>Admin: {CompanyInfo.admin}</p>
                <p>CUI: {CompanyInfo.cui}</p>
                <p>Reg. Com: {CompanyInfo.j}</p>
                <p>Sediu: {CompanyInfo.sediu}</p>
              </div>

              <div className="space-y-3 pt-2 text-sm font-medium border-t border-slate-200">
                <a href={`tel:${CompanyInfo.phone}`} className="flex items-center gap-2 text-slate-700">
                  <span className="text-blue-600 font-black tracking-widest uppercase text-xs">Tel:</span>
                  {CompanyInfo.phone}
                </a>
                <a href={`mailto:${CompanyInfo.email}`} className="flex items-center gap-2 text-slate-700">
                  <span className="text-blue-600 font-black tracking-widest uppercase text-xs">Email:</span>
                  {CompanyInfo.email}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-4 border-t border-slate-200 flex flex-col gap-4 items-center">
            <div className="text-xs text-slate-400 text-center font-medium">
              <p>© {new Date().getFullYear()} {CompanyInfo.name}.</p>
            </div>
            
            <div className="flex items-center gap-2 px-5 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
              <span className="font-bold text-slate-400 uppercase tracking-widest text-[9px]">Realizat de:</span>
              <div className="h-3 w-[1px] bg-slate-200"></div>
              <span className="font-black text-slate-700 uppercase tracking-tighter text-xs">
                Făgăteanu Dumitru Eusebiu PFA
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};