// src/components/Hero.tsx
// NOU: Am adăugat importul pentru CompanyInfo
import { PricingData, CompanyInfo } from "@/data/site-content";
const whatsappMessage = encodeURIComponent("Bună ziua! Doresc o ofertă de preț pentru traducerea unor acte auto. Vă trimit imediat pozele.");
export const Hero = () => (
  <section className="relative py-16 md:py-28 overflow-hidden">
    
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background-image.jpg')" }} // Asigură-te că numele fișierului este corect
    >
      <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"></div>
    </div>

    <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
      <span className="inline-block bg-orange-100 text-orange-800 px-5 py-2 rounded-full text-xs font-extrabold tracking-widest uppercase mb-10 shadow-lg border border-orange-200">
        Campanie Auto Standard • 35 Lei/Pag
      </span>
      
      <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight uppercase italic tracking-tighter drop-shadow-md">
        Traduceri Acte Auto <br />
        <span className="text-blue-400">Gata în 1-2 ORE</span>
      </h1>
      
      {/* MEGA POSTER CARD */}
      <div className="bg-blue-950 p-8 md:p-14 rounded-[2.5rem] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.6)] border border-blue-800/50 relative overflow-hidden backdrop-blur-sm max-w-5xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-transparent"></div>

        {/* NOU: Am grupat lista și prețul într-un div flex pentru a le ține sus */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10 mb-10">
          
          <div className="text-left md:w-1/2">
            <ul className="space-y-4">
              {["Brief (Talon)", "Contract Vânzare-Cumpărare", "Permis de Conducere"].map(item => (
                <li key={item} className="flex items-center gap-4 font-extrabold text-white italic text-lg md:text-xl">
                  <span className="w-7 h-7 bg-white text-blue-700 rounded-full flex items-center justify-center text-sm font-bold shadow-md">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-slate-300 font-bold uppercase text-sm tracking-widest leading-none">
              IT și ENG (și altele) • Autorizate MJ
            </p>
          </div>

          <div className="flex flex-col items-center md:w-1/2">
            <div className="text-8xl md:text-[11rem] font-black tracking-tighter leading-none bg-gradient-to-b from-orange-400 to-red-600 bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(239,68,68,0.4)]">
              {PricingData.autoStandard} 
            </div>
            <div className="text-3xl font-black text-white -mt-3">LEI</div>
            
            <p className="font-black text-white uppercase tracking-tighter mt-8 text-xl">FĂRĂ preț de urgență</p>
            <p className="font-bold text-slate-400 text-base italic leading-tight">Fără costuri ascunse</p>
          </div>

        </div>

        {/* NOU: BUTONUL DE WHATSAPP "BANDĂ RULANTĂ" */}
        <div className="relative z-10 border-t border-blue-800/50 pt-10 mt-2">
          <a
            href={`https://wa.me/${CompanyInfo.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-5 rounded-2xl text-xl md:text-2xl font-black uppercase tracking-wide transition-all shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_40px_-5px_rgba(37,211,102,0.6)] hover:-translate-y-1 flex items-center justify-center gap-3 w-full max-w-2xl mx-auto group"
          >
            {/* Iconiță nativă WhatsApp */}
            <svg className="w-8 h-8 md:w-10 md:h-10 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Trimite Actele pe WhatsApp
          </a>
          <p className="mt-4 text-slate-300 text-sm md:text-base font-medium">
            Fără formulare complicate. Răspundem și ne apucăm de treabă instant.
          </p>
        </div>

      </div>
    </div>
  </section>
);