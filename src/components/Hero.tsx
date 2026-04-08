// src/components/Hero.tsx
import { PricingData, CompanyInfo } from "@/data/site-content";

// Mesajul predefinit - actualizat să includă și factura
const whatsappMessage = encodeURIComponent(
  "Bună ziua! Doresc o ofertă pentru traducerea unor acte auto (talon, contract, factură). Vă trimit imediat pozele."
);

export const Hero = () => (
  <section className="relative flex min-h-[90vh] items-center justify-center py-20 overflow-hidden">
    {/* FUNDAL ȘI OVERLAY */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    />
    <div className="absolute inset-0 bg-slate-950/75 md:bg-slate-950/50 backdrop-blur-sm" />

    <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
      {/* BADGE */}
      <div className="mb-8 inline-flex items-center self-start md:self-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold text-orange-400 backdrop-blur-md">
        Campanie Auto Standard • 35 Lei/Pag
      </div>

      {/* TITLU PRINCIPAL */}
      <h1 className="mb-12 text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight w-full text-left md:text-center italic uppercase">
        Traduceri Acte Auto <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500 not-italic">
          Gata în 1-2 ORE
        </span>
      </h1>

      {/* CARD PREMIUM */}
      <div className="w-full rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-12 shadow-2xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-10 w-full">
          
          {/* Partea stângă: Lista ACTUALIZATĂ */}
          <div className="w-full md:w-1/2 space-y-6 text-left">
            <ul className="space-y-5">
              {[
                "Talon / Certificat Înmatriculare",
                "Contract Vânzare-Cumpărare",
                "Factură Achiziție Auto",
                "Permis de Conducere",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center text-lg md:text-xl font-bold text-slate-100 italic uppercase"
                >
                  <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white/80 text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="mt-6 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2.5 shadow-inner">
              <p className="text-xs md:text-sm font-bold text-blue-100 uppercase tracking-wider">
                Traduceri Autorizate MJ <span className="mx-2 text-blue-400/50">•</span> Orice limbă
              </p>
            </div>
          </div>

          {/* Partea dreaptă: Prețul */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:items-center justify-center border-t border-white/10 pt-8 md:pt-0 md:border-t-0 md:border-l md:pl-8">
            <div className="flex items-baseline gap-2">
              <span className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-red-500 tracking-tighter drop-shadow-sm">
                {PricingData.autoStandard}
              </span>
              <span className="text-2xl md:text-3xl font-bold text-slate-300">LEI*</span>
            </div>

            <p className="mt-4 text-xl md:text-2xl font-black text-white tracking-tight uppercase italic w-full text-left md:text-center">
              Fără preț de urgență
            </p>
            <p className="text-sm md:text-base font-medium text-slate-400 w-full text-left md:text-center">
              Fără costuri ascunse 
            </p>
            
            <p className="mt-3 text-[11px] md:text-xs font-medium text-white/50 italic w-full text-left md:text-center leading-tight">
              *Ofertă valabilă pentru engleză și italiană.
            </p>
          </div>
        </div>

        {/* BUTON WHATSAPP */}
        <div className="border-t border-white/10 pt-8 mt-4 w-full flex flex-col items-center">
          {/* justify-start pe mobil pentru a alinia conținutul butonului */}
          <a
            href={`https://wa.me/${CompanyInfo.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-16 w-full max-w-2xl items-center justify-start md:justify-center gap-3 rounded-2xl bg-[#25D366] px-8 text-xl font-bold text-white shadow-[0_8px_30px_rgb(37,211,102,0.25)] transition-all duration-300 hover:bg-[#20bd5a] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgb(37,211,102,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 uppercase tracking-wide"
          >
            {/* SVG-ul de WhatsApp neschimbat */}
            <svg
              className="w-8 h-8 fill-current group-hover:scale-110 transition-transform duration-300"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Trimite Actele pe WhatsApp
          </a>

          {/* --- AICI ESTE MODIFICAREA --- */}
          <p className="mt-4 text-sm font-bold text-white w-full text-left md:text-center uppercase tracking-widest leading-relaxed drop-shadow-sm">
            Fără formulare complicate. Răspundem și ne apucăm de treabă instant.
          </p>
          {/* --- SFÂRȘIT MODIFICARE --- */}

        </div>
      </div>
    </div>
  </section>
);