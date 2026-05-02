import React from 'react';
import { Header } from '@/components/Header'; 
import { Footer } from '@/components/Footer';
export default function PoliticaCookies() {
  return (
    // Păstrăm fundalul gri pe tot ecranul, dar am scos spațierea (padding-ul) de aici
    <div className="bg-slate-50 min-h-screen flex flex-col"> 
      
      {/* Header-ul stă acum lipit de marginea de sus */}
      <Header />
      
      {/* Am mutat spațierea aici, DOAR pentru cardul cu documentul */}
      <div className="flex-grow py-12 md:py-20">
        
        {/* Container-ul principal (Card-ul alb cu umbră fină) */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-10 md:py-16 bg-white rounded-2xl shadow-sm border border-slate-100 text-slate-800 font-sans">
          
          {/* Antetul documentului - Centrat */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Politica de utilizare a Cookie-urilor
            </h1>
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
              Ultima actualizare: Mai 2026
            </p>
          </div>

          {/* Conținutul */}
          <div className="space-y-10 text-base md:text-lg leading-relaxed text-slate-600">
            
            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-blue-600">1.</span> Ce sunt cookie-urile?
              </h2>
              <p>
                Un fișier de tip „cookie” este un fișier text de mici dimensiuni pe care un site web îl salvează 
                pe calculatorul sau dispozitivul dumneavoastră mobil atunci când îl vizitați. Acestea sunt utilizate 
                pe scară largă pentru a face site-urile să funcționeze sau să funcționeze mai eficient.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-blue-600">2.</span> Cum folosim cookie-urile pe acest site?
              </h2>
              <p className="mb-6">
                Transparența și intimitatea clienților noștri sunt esențiale. Site-ul <strong className="text-slate-800">Traduceri Urgente</strong> este 
                unul de prezentare și a fost conceput să respecte la maximum datele dumneavoastră.
              </p>
              
              {/* O casetă elegantă pentru listă */}
              <ul className="space-y-4 bg-slate-50/80 p-6 md:p-8 rounded-xl border border-slate-100">
                <li className="flex gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <span><strong className="text-slate-800">Nu folosim cookie-uri de marketing sau publicitate.</strong> Nu vă urmărim activitatea pentru a vă afișa reclame.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <span><strong className="text-slate-800">Nu folosim cookie-uri de analiză a traficului</strong> (precum Google Analytics).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                  <span>Site-ul poate utiliza exclusiv <strong className="text-slate-800">cookie-uri tehnice, strict necesare</strong>, generate automat de platforma de găzduire (Vercel) pentru a asigura securitatea, afișarea corectă a fonturilor și funcționarea tehnică a paginii. Aceste cookie-uri nu rețin date cu caracter personal.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-blue-600">3.</span> Servicii externe (WhatsApp)
              </h2>
              <p>
                Pentru a facilita comunicarea și transmiterea documentelor pentru traducere, folosim un buton care 
                direcționează către platforma WhatsApp. Când faceți click pe acest buton, părăsiți site-ul nostru 
                și intrați sub incidența politicilor de confidențialitate și cookies ale companiei Meta (WhatsApp). 
                Noi nu setăm niciun cookie prin intermediul acestui buton.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-blue-600">4.</span> Cum puteți controla cookie-urile?
              </h2>
              <p>
                Puteți controla și/sau șterge cookie-urile după cum doriți din setările browserului dumneavoastră. 
                Puteți șterge toate cookie-urile care sunt deja pe calculatorul dumneavoastră și puteți seta majoritatea 
                browserelor să împiedice plasarea acestora. Totuși, dacă faceți acest lucru, este posibil să fiți nevoit 
                să ajustați manual unele preferințe de fiecare dată când vizitați un site.
              </p>
            </section>

            <section className="pt-8 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-blue-600">5.</span> Contact
              </h2>
              <p>
                Dacă aveți întrebări referitoare la modul în care utilizăm cookie-urile, ne puteți contacta la adresa 
                de email: <a href="mailto:contact@traduceriurgente.com" className="text-blue-600 font-bold hover:text-blue-700 hover:underline transition-all">contact@traduceriurgente.com</a>.
              </p>
            </section>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}