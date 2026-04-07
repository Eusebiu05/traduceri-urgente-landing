import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CompanyInfo } from "@/data/site-content";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section pentru Pagina About */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/circuit-board.svg')]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
            Povestea <span className="text-blue-500">Noastră</span>
          </h1>
          <p className="text-slate-400 text-lg font-light">
            Transparență, viteză și traduceri autorizate fără compromisuri.
          </p>
        </div>
      </section>

      {/* Conținut Detaliat */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-black text-slate-900 uppercase italic">
              Cine este {CompanyInfo.name}?
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              Suntem o firmă de traduceri din România, specializată pe nișa traducerilor auto și juridice. 
              Sub conducerea administratorului <strong>{CompanyInfo.admin}</strong>, am construit un sistem 
              de lucru ultra-rapid, adaptat nevoilor clienților care se află în procesul de înmatriculare sau achiziție auto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-blue-50 rounded-[2rem] border border-blue-100">
              <h3 className="text-xl font-black text-blue-900 mb-4 uppercase italic">Misiunea Noastră</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Să oferim acces instant la traducători autorizați MJ, eliminând barierele de timp și costurile 
                ascunse de "urgență". Credem că un serviciu de calitate trebuie să fie rapid prin definiție.
              </p>
            </div>
            
            <div className="p-8 bg-orange-50 rounded-[2rem] border border-orange-100">
              <h3 className="text-xl font-black text-orange-900 mb-4 uppercase italic">Administrator</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong>{CompanyInfo.admin}</strong> coordonează o rețea vastă de traducători autorizați, 
                asigurându-se că fiecare document PDF trimis respectă normele legale și este livrat 
                în intervalul promis de 1-2 ore.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] text-center shadow-2xl">
            <h3 className="text-2xl font-black mb-6 uppercase italic">Date de Identificare</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-400">
              <p>Nume: <span className="text-white font-bold">{CompanyInfo.name}</span></p>
              <p>CUI: <span className="text-white font-bold">{CompanyInfo.cui}</span></p>
              <p>Reg. Com: <span className="text-white font-bold">{CompanyInfo.j}</span></p>
              <p>Admin: <span className="text-white font-bold">{CompanyInfo.admin}</span></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}