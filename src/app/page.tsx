"use client"; // Adaugă asta dacă folosești Next.js App Router pentru a permite onClick

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* HEADER CU MENIU PROFESIONAL */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-[100] border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="font-black text-xl md:text-2xl tracking-tighter text-slate-900 uppercase italic">
            Traduceri <span className="text-blue-600">Urgente</span>
          </div>

          {/* Meniu Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-slate-500">
            <a href="#acte" className="hover:text-blue-600 transition-colors">
              Ce traducem
            </a>
            <a href="#proces" className="hover:text-blue-600 transition-colors">
              Cum funcționează
            </a>
            <a href="#program" className="hover:text-blue-600 transition-colors">
              Program
            </a>
            <div className="h-4 w-[1px] bg-slate-200"></div>
            <a
              href="https://wa.me/40765786180"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
            >
              Cere Ofertă
            </a>
          </nav>

          {/* Navigație Mobil */}
          <div className="flex md:hidden items-center gap-3">
            <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              <span className="text-[8px] font-black text-white uppercase tracking-tighter">
                06-22
              </span>
            </div>

            <button
              className="p-2 bg-slate-100 rounded-lg text-slate-900 active:bg-slate-200"
              onClick={() => {
                const el = document.getElementById("mobile-menu");
                el?.classList.toggle("hidden");
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* MENIU DROPDOWN MOBIL */}
      <div 
        id="mobile-menu" 
        className="hidden md:hidden fixed top-20 left-0 w-full bg-white border-b border-slate-200 shadow-2xl z-[90] animate-in slide-in-from-top duration-300"
      >
        <nav className="flex flex-col p-6 gap-6 text-xs font-black uppercase tracking-widest text-slate-600">
          <a href="#acte" onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')} className="py-2 border-b border-slate-50 flex justify-between items-center text-slate-900">
            Ce traducem <span className="text-blue-600">→</span>
          </a>
          <a href="#proces" onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')} className="py-2 border-b border-slate-50 flex justify-between items-center text-slate-900">
            Cum funcționează <span className="text-blue-600">→</span>
          </a>
          <a href="#program" onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')} className="py-2 flex justify-between items-center text-slate-900">
            Program & Contact <span className="text-blue-600">→</span>
          </a>
          <a 
            href="https://wa.me/40765786180" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-slate-900 text-center py-4 rounded-xl shadow-lg font-black text-sm"
          >
            Trimite Actele pe WhatsApp
          </a>
        </nav>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-900 to-slate-950 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black tracking-widest uppercase mb-8 shadow-lg shadow-red-600/40 animate-bounce">
            Livrare Urgentă - Iași & Național
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Traduceri Acte Auto <br />
            <span className="text-blue-400 italic font-black">Gata în 1-2 ORE</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
            Ești la coadă la înmatriculări? Livrăm traducerile autorizate{" "}
            <span className="text-white font-bold">(ENG, IT, GER, FR)</span> direct în format PDF.
          </p>
          <a
            href="https://wa.me/40765786180"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-green-500 hover:bg-green-400 text-slate-900 font-black py-5 px-10 md:px-12 rounded-full text-lg md:text-xl shadow-[0_0_50px_rgba(34,197,94,0.3)] transition-all transform hover:scale-105 flex items-center gap-4 w-full md:w-auto justify-center"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7 fill-slate-900" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Trimite Actele pe WhatsApp
          </a>
          <div className="mt-8">
            <p className="text-xs md:text-sm font-semibold text-slate-300 bg-slate-800/50 py-2 px-6 rounded-full border border-slate-700">
              Preț începând de la <span className="text-green-400 font-bold text-lg">35 LEI</span> / act auto
            </p>
          </div>
        </div>
      </section>

      {/* TRUST CARDS */}
      <section className="max-w-6xl mx-auto px-4 py-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-24">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center">
            <div className="text-3xl mb-4 italic">⏱️</div>
            <h3 className="font-extrabold text-xl mb-3 text-slate-800 tracking-tight">Excelență în Urgențe</h3>
            <p className="text-slate-600 text-sm">Viteză combinată cu rigoarea unui traducător autorizat.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center md:-translate-y-4">
            <div className="text-3xl mb-4">📜</div>
            <h3 className="font-extrabold text-xl mb-3 text-slate-800 tracking-tight">+23.800 Acte</h3>
            <p className="text-slate-600 text-sm italic">Peste 11 ani de experiență juridică și auto.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="font-extrabold text-xl mb-3 text-slate-800 tracking-tight">100% Online</h3>
            <p className="text-slate-600 text-sm">Trimite poza pe WhatsApp, primești PDF-ul semnat digital.</p>
          </div>
        </div>
      </section>

      {/* CE TRADUCEM (Lista acte) */}
      <section id="acte" className="py-20 px-4 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto text-center mb-16 underline decoration-blue-500 decoration-4 underline-offset-8">
          <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">Ce documente traducem?</h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {["Certificate Înmatriculare (Brief-uri)", "Contracte Vânzare-Cumpărare", "Facturi Auto & COC", "Permise de Conducere", "Caziere Judiciare", "Acte Juridice & Notariale"].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-blue-200 transition-all">
              <span className="text-green-500 font-bold text-xl">✓</span>
              <span className="font-bold text-slate-700 tracking-tight italic">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESUL IN 3 PASI */}
      <section id="proces" className="py-20 px-4 bg-slate-900 text-white scroll-mt-20">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-black mb-4 uppercase tracking-tight italic">GATA ÎN 3 PAȘI SIMPLI</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { id: "01", t: "Faci poză", d: "Trimite actul clar pe WhatsApp sau Email." },
            { id: "02", t: "Noi traducem", d: "Pregătim PDF-ul autorizat în 1-2 ore." },
            { id: "03", t: "Rezolvi dosarul", d: "Printezi color și depui actele la RAR/Poliție." }
          ].map((step, i) => (
            <div key={i}>
              <div className="text-5xl font-black text-blue-500/20 mb-4 tracking-tighter">{step.id}</div>
              <h3 className="text-xl font-bold mb-2 uppercase">{step.t}</h3>
              <p className="text-slate-400 text-sm">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER PREMIUM DARK */}
      <footer id="program" className="bg-slate-950 text-slate-400 pt-20 pb-10 px-4 border-t border-slate-800 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="font-black text-3xl tracking-tighter text-white italic uppercase">
              Traduceri <span className="text-blue-500">Urgente</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Servicii profesionale de traduceri autorizate MJ. Expertiză confirmată prin peste{" "}
              <span className="text-white font-bold underline decoration-blue-500/50 underline-offset-4">23.800 de documente</span>.
            </p>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-6 border-l-2 border-blue-500 pl-3">Identitate Fiscală</h4>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 space-y-4 text-xs">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500 font-bold uppercase tracking-widest">Entitate</span>
                <span className="font-bold text-slate-200 text-right">Traduceri Urgente SRL</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500 font-bold uppercase tracking-widest">CUI</span>
                <span className="font-bold text-blue-400 tracking-tighter">35777175</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-bold uppercase tracking-widest">Reg. Com</span>
                <span className="font-bold text-slate-200">J2016000633229</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-6 border-l-2 border-blue-500 pl-3">Disponibilitate</h4>
            <div className="flex flex-col gap-2">
              <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest leading-none">Luni - Duminică</p>
              <p className="text-3xl font-black text-white tracking-tighter italic">06:00 - 22:00</p>
              <div className="mt-2 inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-3 py-1 rounded-md border border-blue-500/20 w-fit">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">Inclusiv Sărbători</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-6xl mx-auto pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px]">
          <div className="font-bold text-slate-600 uppercase tracking-widest">© 2026 Traduceri Urgente SRL | Toate drepturile rezervate</div>
          <div className="group flex items-center gap-3 px-4 py-2 bg-slate-900 rounded-full border border-slate-800">
            <span className="font-black text-slate-500 uppercase tracking-widest">Partener Tehnologic</span>
            <div className="h-4 w-[1px] bg-slate-800"></div>
            <span className="font-black text-blue-500 uppercase tracking-tighter">Făgăteanu Dumitru Eusebiu PFA</span>
          </div>
        </div>
      </footer>
    </main>
  );
}