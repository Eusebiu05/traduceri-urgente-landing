// src/components/Recruitment.tsx
import { CompanyInfo } from "@/data/site-content";

export const Recruitment = () => (
  <section className="py-16 bg-slate-50 border-y border-slate-200">
    <div className="max-w-4xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 md:p-12 shadow-sm">
        
        {/* Element decorativ discret în fundal */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-slate-800 uppercase italic mb-2">
              Ești traducător <span className="text-blue-600">Autorizat de MINISTERUL JUSTIȚIEI?</span>
            </h3>
            <p className="text-slate-500 font-medium max-w-md">
              Căutăm colaboratori pentru orice combinație lingvistică. Hai să lucrăm împreună la proiecte de top.
            </p>
          </div>

          <a 
            href={`https://wa.me/${CompanyInfo.whatsapp}?text=Buna! Sunt traducator autorizat MJ si doresc sa colaboram.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-200 hover:-translate-y-1"
          >
            <span className="uppercase tracking-wider">Lucrează cu noi</span>
            <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>

        </div>
      </div>
    </div>
  </section>
);