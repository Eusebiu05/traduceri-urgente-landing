// src/components/About.tsx
import { CompanyInfo } from "@/data/site-content";

export const About = () => {
  return (
    // SCHIMBARE: py-20 bg-white
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          <div className="md:w-1/2 space-y-6">
            {/* SCHIMBARE: Text slate-950 și albastru blue-800 */}
            <h2 className="text-3xl md:text-5xl font-black text-slate-950 leading-tight uppercase italic tracking-tighter">
              Cine este <br />
              <span className="text-blue-800">{CompanyInfo.name}</span>
            </h2>
            
            {/* SCHIMBARE: Text slate-800 (aproape negru) pentru lizibilitate maximă */}
            <p className="text-slate-800 leading-relaxed text-lg font-normal">
              Suntem o echipă specializată în eliminarea birocrației. Ne-am născut din dorința de a oferi 
              <strong className="font-extrabold text-blue-900"> servicii de traduceri autorizate </strong> la standarde europene, cu un focus 
              obsesiv pe viteză și precizie.
            </p>

            {/* SCHIMBARE: Cardul de citat are acum border orange-500 pentru contrast */}
            <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-orange-500 shadow-sm border border-slate-100">
              <p className="text-slate-950 font-semibold italic text-lg leading-relaxed">
                "Urgența nu este un cost suplimentar, ci respectul nostru pentru timpul clientului."
              </p>
              <p className="mt-3 text-sm font-black text-orange-600 uppercase tracking-widest">
                — {CompanyInfo.admin}, Administrator
              </p>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            {/* SCHIMBARE: Grafica de fundal este acum albastră saturată (blue-600) */}
            <div className="absolute -inset-6 bg-blue-600/10 rounded-[4rem] rotate-2"></div>
            {/* SCHIMBARE: Cardul are fundal blue-50 pentru a se integra în paletă */}
            <div className="relative bg-blue-50 p-10 rounded-[2.5rem] shadow-2xl border border-blue-100">
              <h3 className="text-2xl font-black text-blue-950 mb-6 uppercase tracking-tighter italic">
                Echipa Noastră
              </h3>
              <ul className="space-y-5">
                {[
                    {t: "Traducători Autorizați MJ", d: "Lucrăm exclusiv cu profesioniști atestați de Ministerul Justiției."},
                    {t: "Expertiză Tehnică", d: "Cunoaștem terminologia specifică documentelor auto (Brief, COC, Contracte)."},
                    {t: "Disponibilitate", d: "Acoperim toate limbile autorizate MJ, indiferent de complexitate."}
                ].map(item => (
                    <li key={item.t} className="flex items-start gap-4">
                        {/* SCHIMBARE: Iconița are acum culoare orange-500 */}
                        <span className="text-orange-500 mt-1 font-black text-xl">✓</span>
                        <p className="text-sm text-slate-800 leading-relaxed">
                            <strong className="text-blue-950 font-extrabold">{item.t}:</strong> {item.d}
                        </p>
                    </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};