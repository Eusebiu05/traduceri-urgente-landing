// src/components/Footer.tsx
"use client";
import { CompanyInfo } from "@/data/site-content";
import Link from "next/link";

export const Footer = () => {
  const whatsappMessage = encodeURIComponent("Bună ziua! Doresc o ofertă pentru o traducere autorizată. Vă trimit documentele mai jos:");

  return (
    <>
      {/* ======================================================== */}
      {/* 1. FOOTER DESKTOP */}
      {/* ======================================================== */}
      <div className="hidden md:block">
        <footer className="bg-slate-50 pt-20 pb-10 px-4 border-t border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-32 bg-blue-100 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-6xl mx-auto mb-16 relative z-10 flex flex-col items-center gap-12">
            <Link href="/" className="font-black text-3xl tracking-tighter text-slate-900 uppercase leading-none hover:opacity-80 transition-opacity">
              Traduceri <span className="text-blue-600">Urgente</span>
            </Link>

            <div className="w-full grid md:grid-cols-3 gap-8 items-start">
              {/* COLOANA 1: DATE FIRMĂ */}
              <div className="space-y-6">
                <h4 className="text-slate-900 text-xs font-black uppercase tracking-[0.2em] border-l-2 border-slate-300 pl-3">
                  Informații Juridice
                </h4>
                <div className="text-[13px] space-y-2.5 font-medium text-slate-600">
                  <p className="text-slate-900 font-bold uppercase tracking-wider text-sm mb-4">{CompanyInfo.name}</p>
                  <p><span className="text-slate-400">Admin:</span> {CompanyInfo.admin}</p>
                  <p><span className="text-slate-400">CUI:</span> {CompanyInfo.cui}</p>
                  <p><span className="text-slate-400">Reg. Com.</span> {CompanyInfo.j}</p>
                  <p><span className="text-slate-400">Sediu:</span> {CompanyInfo.sediu}</p>
                  <div className="pt-2 space-y-1">
                    <p><a href={`tel:${CompanyInfo.phone}`} className="hover:text-blue-600 transition-colors font-bold text-slate-700">{CompanyInfo.phone}</a></p>
                    <p><a href={`mailto:${CompanyInfo.email}`} className="hover:text-blue-600 transition-colors font-bold text-slate-700">{CompanyInfo.email}</a></p>
                  </div>
                </div>
              </div>

              {/* COLOANA 2: NAVIGARE */}
              <div className="space-y-6 md:justify-self-center">
                <h4 className="text-slate-900 text-xs font-black uppercase tracking-[0.2em] border-l-2 border-blue-500 pl-3">
                  Link-uri Utile
                </h4>
                <nav className="flex flex-col gap-4 text-sm font-bold">
                  <Link href="/" className="text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all">Acasă</Link>
                  <Link href="/about" className="text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all">Despre Noi</Link>
                  {/* De decomentat pentru ca inca nu exista pagina de Termeni și Condiții 
                  <Link href="/termeni-si-conditii" className="text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all">Termeni și Condiții</Link>
                  <Link href="/politica-de-confidentialitate" className="text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all">Politica de Confidențialitate</Link>
                  */}
                  <Link href="/politica-cookies" className="text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all">Politica de Cookies</Link>
                  <a href={`https://wa.me/${CompanyInfo.whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-500 hover:translate-x-1 transition-all">
                    WhatsApp Online ↗
                  </a>
                  <div className="flex gap-3 pt-4 border-t border-slate-100">
                    <a href="https://www.anpc.ro" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity">
                      <img src="/anpc-sol.svg" alt="ANPC SOL" className="h-8 w-auto" />
                    </a>
                    <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity">
                      <img src="/anpc-sal.svg" alt="ANPC SAL" className="h-8 w-auto" />
                    </a>
                  </div>
                </nav>
              </div>

              {/* COLOANA 3: SOCIAL MEDIA */}
              <div className="space-y-6 md:justify-self-end">
                <h4 className="text-slate-900 text-xs font-black uppercase tracking-[0.2em] border-l-2 border-pink-500 pl-3">
                  Social Media
                </h4>
                <div className="flex flex-col gap-4 text-[13px] font-bold text-slate-500">
                  <a href="https://www.tiktok.com/@traduceri.urgente" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 hover:translate-x-1 transition-all flex items-center gap-2 text-left">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                    <div className="flex flex-col leading-tight text-left">
                      <span className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">TikTok</span>
                      <span className="text-slate-700">@traduceri.urgente</span>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/traduceri.urgente/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 hover:translate-x-1 transition-all flex items-center gap-2 text-left">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <div className="flex flex-col leading-tight text-left">
                      <span className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">Instagram</span>
                      <span className="text-slate-700">@traduceri.urgente</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] relative z-10">
            <div className="font-semibold text-slate-400 uppercase tracking-widest text-center">
              © {new Date().getFullYear()} {CompanyInfo.name}
            </div>
            <div className="group flex items-center gap-3 px-5 py-2.5 bg-white rounded-full border border-slate-200 shadow-sm transition-all hover:border-blue-300">
              <span className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">Realizat de:</span>
              <span className="font-black text-slate-700 uppercase tracking-tight text-xs group-hover:text-blue-600 transition-colors">Făgăteanu Dumitru Eusebiu PFA</span>
            </div>
          </div>
        </footer>
      </div>

      {/* ======================================================== */}
      {/* 2. FOOTER MOBIL */}
      {/* ======================================================== */}
      <footer className="md:hidden bg-slate-50 pt-12 pb-8 px-6 border-t border-slate-200">
        <div className="flex flex-col gap-10">
          <Link href="/" className="font-black text-2xl text-slate-900 uppercase">
            Traduceri <span className="text-blue-600">Urgente</span>
          </Link>

          <div className="space-y-4">
            <h4 className="text-slate-900 font-black tracking-widest uppercase text-xs flex items-center gap-2">
              <span className="w-1 h-3 bg-blue-600 rounded-full"></span> Navigare
            </h4>
            <nav className="flex flex-col gap-3 text-base font-bold text-slate-600 pl-3">
              <Link href="/">Acasă</Link>
              <Link href="/about">Despre Noi</Link>
              {/* De decomentat pentru ca inca nu exista pagina de Termeni și Condiții
              <Link href="/termeni-si-conditii">Termeni și Condiții</Link>
              */}
              {/* De decomentat pentru ca inca nu exista pagina de Politica de Confidențialitate
              <Link href="/politica-de-confidentialitate">Politica de Confidențialitate</Link>
              */}
              <Link href="/politica-cookies">Politica de Cookies</Link>
              <a href={`https://wa.me/${CompanyInfo.whatsapp}?text=${whatsappMessage}`} className="text-emerald-600">WhatsApp Online</a>
            </nav>
          </div>

          <div className="space-y-4 border-t border-slate-200 pt-6">
            <h4 className="text-slate-900 font-black tracking-widest uppercase text-xs flex items-center gap-2">
              <span className="w-1 h-3 bg-pink-500 rounded-full"></span> Social Media
            </h4>
            <div className="flex flex-col gap-5 pl-3">
              <a href="https://www.tiktok.com/@traduceri.urgente" className="flex items-center gap-3">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 uppercase font-bold tracking-tighter">TikTok</span>
                  <span className="text-base font-bold text-slate-700">@traduceri.urgente</span>
                </div>
              </a>
              <a href="https://www.instagram.com/traduceri.urgente/" className="flex items-center gap-3">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 uppercase font-bold tracking-tighter">Instagram</span>
                  <span className="text-base font-bold text-slate-700">@traduceri.urgente</span>
                </div>
              </a>
            </div>
          </div>

          <div className="space-y-4 border-t border-slate-200 pt-6">
            <h4 className="text-slate-900 font-black tracking-widest uppercase text-xs flex items-center gap-2">
              <span className="w-1 h-3 bg-slate-400 rounded-full"></span> Contact
            </h4>
            <div className="pl-3 text-sm text-slate-500 space-y-1">
              <p className="font-bold text-slate-800 uppercase tracking-tight">{CompanyInfo.name}</p>
              <p className="font-medium">{CompanyInfo.phone}</p>
              <div className="flex gap-4 pt-4">
                <img src="/anpc-sol.svg" className="h-8 opacity-50" alt="ANPC SOL" />
                <img src="/anpc-sal.svg" className="h-8 opacity-50" alt="ANPC SAL" />
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 text-center">
            <span className="text-[10px] font-black text-slate-700 uppercase">Făgăteanu Dumitru Eusebiu PFA</span>
          </div>
        </div>
      </footer>
    </>
  );
};