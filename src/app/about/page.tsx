import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CompanyInfo } from "@/data/site-content";
// import Link from "next/link"; 

export default function AboutPage() {
  // Am definit mesajul aici, codificat corect pentru URL
  const whatsappMessage = encodeURIComponent("Bună ziua! Am nevoie de o traducere autorizată. Vă trimit documentul mai jos:");

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section - Varianta Luminoasă/Fluidă */}
      <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden border-b border-slate-100">
        {/* Elemente ambientale subtile (Glow) */}
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-blue-100/40 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-orange-50/40 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tight mb-6">
            Povestea <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic drop-shadow-sm">Noastră</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Transparență, viteză și traduceri autorizate fără compromisuri.
          </p>
        </div>
      </section>

      {/* Conținut Detaliat */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          
          {/* Secțiunea de Intro (Text centrat, fără imagine momentan) */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-6">
              Cine este {CompanyInfo.name}?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Suntem o firmă de traduceri din România, specializată pe nișa traducerilor auto și juridice. 
              Sub conducerea administratorului <strong>{CompanyInfo.admin}</strong>, am construit un sistem 
              de lucru ultra-rapid, adaptat nevoilor clienților care se află în procesul de înmatriculare sau achiziție auto.
            </p>
          </div>

          {/* Carduri Misiune / Administrator */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="p-8 bg-blue-50/50 rounded-[2rem] border border-blue-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-xl">🎯</div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4 tracking-tight">Misiunea Noastră</h3>
              <p className="text-slate-600 leading-relaxed">
                Să oferim acces instant la traducători autorizați de Ministerul Justiției, eliminând barierele de timp și costurile 
                ascunse de "urgență". Credem că un serviciu de calitate trebuie să fie rapid prin definiție.
              </p>
            </div>
            
            <div className="p-8 bg-orange-50/50 rounded-[2rem] border border-orange-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-xl">👤</div>
              <h3 className="text-2xl font-bold text-orange-950 mb-4 tracking-tight">Administrator</h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>{CompanyInfo.admin}</strong> coordonează o rețea vastă de traducători autorizați, 
                asigurându-se că fiecare document PDF trimis respectă normele legale și este livrat 
                în intervalul promis de 1-2 ore.
              </p>
            </div>
          </div>

          {/* Secțiune Call to Action */}
          <div className="bg-[#059669] text-white p-10 md:p-14 rounded-[2.5rem] text-center shadow-xl mb-20 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4 tracking-tight">Ai nevoie de o traducere acum?</h3>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Echipa noastră este pregătită să îți preia documentele. Fără drumuri inutile, direct pe WhatsApp.
              </p>
              
              {/* Link-ul este acum curat și folosește variabila definită mai sus */}
              <a 
                href={`https://wa.me/${CompanyInfo.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#059669] font-bold py-4 px-8 rounded-full shadow-lg hover:bg-slate-50 transition-transform hover:-translate-y-1"
              >
                Trimite documentul →
              </a>
            </div>
          </div>

          {/* Date de Identificare */}
          <div className="pt-10 border-t border-slate-200">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">Date de identificare fiscală</h4>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500">
              <p>Companie: <span className="font-semibold text-slate-700">{CompanyInfo.name}</span></p>
              <p>CUI: <span className="font-semibold text-slate-700">{CompanyInfo.cui}</span></p>
              <p>Reg. Com: <span className="font-semibold text-slate-700">{CompanyInfo.j}</span></p>
              <p>Reprezentant: <span className="font-semibold text-slate-700">{CompanyInfo.admin}</span></p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}